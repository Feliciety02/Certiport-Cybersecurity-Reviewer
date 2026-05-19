(function () {
  const RAW_QUESTIONS = Array.isArray(window.CYBER_QUESTIONS) ? window.CYBER_QUESTIONS : [];
  const QUESTION_OVERRIDES = window.CYBER_QUESTION_OVERRIDES || {};
  const STORAGE_KEY = "its-cybersecurity-mock-state-v1";

  const state = {
    questions: [],
    current: 0,
    answers: {},
    submitted: {},
    flagged: {},
    reviewUnlocked: false,
    restored: false,
    navFilter: "all"
  };

  const $ = (id) => document.getElementById(id);

  function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char]));
  }

  function displayText(value) {
    return esc(normalizeText(value));
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function normalizedKeyPart(value) {
    return normalizeText(String(value || "").toLowerCase().replace(/[^a-z0-9/+.&-]+/g, " "));
  }

  function splitAnswerParts(answer) {
    return normalizeText(answer)
      .split(/\s*\|\s*|\s*;\s*|\s*,\s*/)
      .map((part) => normalizedKeyPart(part))
      .filter(Boolean);
  }

  function hasMatchingPrompt(question) {
    const prompt = normalizeText(question.question).toLowerCase();
    return (
      prompt.includes("match each") ||
      prompt.includes("move each") ||
      prompt.includes("drag and drop") ||
      prompt.includes("use drag and drop") ||
      prompt.includes("->")
    );
  }

  function hasMultiPrompt(question) {
    const prompt = normalizeText(question.question).toLowerCase();
    const type = normalizedKeyPart(question.type);
    return (
      type === "multi select" ||
      prompt.includes("choose two") ||
      prompt.includes("choose 2") ||
      prompt.includes("choose three") ||
      prompt.includes("choose 3") ||
      prompt.includes("choose all that apply")
    );
  }

  function displayQuestionPrompt(question) {
    const prompt = String(question.question || "");
    if (!question.matching) return normalizeText(prompt);

    const cleaned = prompt
      .replace(/\s*[^.\n]{1,120}?\s*->\s*_+\s*/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    return normalizeText(cleaned || prompt);
  }

  function detectBinaryKind(question) {
    const answer = normalizedKeyPart(question.answer);
    const prompt = normalizedKeyPart(question.question);
    const choiceTexts = (question.choices || []).map((choice) => normalizedKeyPart(choice.text));

    const hasTrueFalsePrompt = prompt.includes("true or false") || prompt.includes("select true or false");
    const hasYesNoPrompt = /\byes\b/.test(prompt) && /\bno\b/.test(prompt);
    const hasTrueFalseChoices = choiceTexts.includes("true") || choiceTexts.includes("false");
    const hasYesNoChoices = choiceTexts.includes("yes") || choiceTexts.includes("no");

    if (answer === "true" || answer === "false" || hasTrueFalsePrompt || hasTrueFalseChoices) return "truefalse";
    if (answer === "yes" || answer === "no" || hasYesNoPrompt || hasYesNoChoices) return "yesno";
    return "";
  }

  function buildBinaryChoices(kind, originalChoices) {
    const labels = ["A", "B"];
    const targetTexts = kind === "truefalse" ? ["True", "False"] : ["YES", "NO"];
    const normalizedTargets = targetTexts.map((text) => normalizedKeyPart(text));
    const existing = Array.isArray(originalChoices) ? originalChoices : [];

    const resolvedTexts = normalizedTargets.map((target, index) => {
      const match = existing.find((choice) => normalizedKeyPart(choice.text) === target);
      return match ? normalizeText(match.text) : targetTexts[index];
    });

    return resolvedTexts.map((text, index) => ({
      label: labels[index],
      text
    }));
  }

  function derivePairs(question) {
    if (!hasMatchingPrompt(question) && !question.matching && normalizedKeyPart(question.type) !== "matching") {
      return [];
    }

    if (Array.isArray(question.pairs) && question.pairs.length) return question.pairs;

    const promptLines = String(question.question || "")
      .split("\n")
      .map((line) => normalizeText(line))
      .filter((line) => line.includes("->"))
      .map((line) => normalizeText(line.split("->")[0]));

    const mapped = [];
    for (const source of [question.answer, question.explanation]) {
      const text = String(source || "");
      const regex = /([^;|.\n]+?)\s*(?:->|matches)\s*([^;|.\n]+?)(?=$|[;|.\n])/gi;
      let match;
      while ((match = regex.exec(text))) {
        const left = normalizeText(match[1].replace(/^explanation:\s*/i, ""));
        const right = normalizeText(match[2]);
        if (left && right) mapped.push({ left, right });
      }
    }

    if (!mapped.length) return [];

    if (!promptLines.length) return [];

    const byLeft = new Map(mapped.map((pair) => [normalizedKeyPart(pair.left), pair.right]));
    return promptLines
      .map((left) => {
        const key = normalizedKeyPart(left);
        const exact = byLeft.get(key);
        if (exact) return { left, right: exact };

        for (const [candidateKey, candidateValue] of byLeft.entries()) {
          if (candidateKey.includes(key) || key.includes(candidateKey)) {
            return { left, right: candidateValue };
          }
        }
        return null;
      })
      .filter(Boolean);
  }

  function deriveCorrectLabels(question) {
    if (!Array.isArray(question.choices) || !question.choices.length) return [];

    const answer = normalizeText(question.answer);
    if (!answer) return Array.isArray(question.correct) ? question.correct.filter(Boolean) : [];

    const answerNorm = normalizedKeyPart(answer);
    const multiPrompt = hasMultiPrompt(question);
    const exactSingle = question.choices.find((choice) => normalizedKeyPart(choice.text) === answerNorm);
    if (exactSingle && !multiPrompt) return [exactSingle.label];

    const containsMatches = question.choices
      .filter((choice) => {
        const choiceNorm = normalizedKeyPart(choice.text);
        return choiceNorm && answerNorm.includes(choiceNorm) && choiceNorm.length > 3;
      })
      .map((choice) => choice.label);

    const parts = splitAnswerParts(answer);
    const exactParts = question.choices
      .filter((choice) => parts.includes(normalizedKeyPart(choice.text)))
      .map((choice) => choice.label);

    if (multiPrompt) {
      if (containsMatches.length) return containsMatches;
      if (exactParts.length) return exactParts;
    }

    if (exactParts.length) return exactParts;
    if (containsMatches.length) return containsMatches;

    const fallback = Array.isArray(question.correct) ? question.correct.filter(Boolean) : [];
    return fallback;
  }

  function deriveType(question, matching, multi) {
    const choiceTexts = (question.choices || []).map((choice) => normalizedKeyPart(choice.text));
    if (matching) return "MATCHING";
    if (choiceTexts.length === 2 && choiceTexts.includes("yes") && choiceTexts.includes("no")) return "YES/NO";
    if (choiceTexts.length === 2 && choiceTexts.includes("true") && choiceTexts.includes("false")) return "TRUE/FALSE";
    if (multi) return "MULTI-SELECT";
    return "MCQ";
  }

  function toChoiceObjects(question) {
    if (Array.isArray(question.options) && question.options.length) {
      return question.options.map((text, index) => ({
        label: String.fromCharCode(65 + index),
        text
      }));
    }
    return Array.isArray(question.choices) ? question.choices : [];
  }

  function validateQuestion(question, details) {
    const {
      choices,
      pairs,
      correct,
      matching,
      multi,
      type,
      binaryKind
    } = details;

    const issues = [];
    const answerText = normalizeText(question.answer);
    const normalizedChoiceTexts = choices.map((choice) => normalizedKeyPart(choice.text));
    const normalizedAnswer = normalizedKeyPart(answerText);
    const hasExplicitMultiSource = normalizedKeyPart(question.type) === "multi select" || hasMultiPrompt(question);

    if (binaryKind) {
      const expectedBinary = binaryKind === "truefalse"
        ? ["true", "false"]
        : ["yes", "no"];

      if (choices.length !== 2 || !expectedBinary.every((value) => normalizedChoiceTexts.includes(value))) {
        issues.push("Binary source item was normalized to a 2-choice answer format.");
      }

      if (matching) issues.push("Binary source item was classified as matching and was corrected.");
    }

    if (!matching && choices.length && answerText && !correct.length) {
      const directMatch = normalizedChoiceTexts.includes(normalizedAnswer);
      if (!directMatch) {
        issues.push("Source answer does not cleanly map to the visible answer choices.");
      }
    }

    if (matching) {
      if (!pairs.length) issues.push("Matching source item has no complete match pairs.");
    } else if (hasMatchingPrompt(question) && normalizedKeyPart(question.type) === "matching" && !pairs.length) {
      issues.push("Matching source prompt exists, but the source pairs could not be reconstructed.");
    }

    if (multi && correct.length < 2) {
      issues.push("Multi-select source item has fewer than 2 detected correct answers.");
    }

    if (hasExplicitMultiSource && !multi) {
      issues.push("Source prompt indicates multi-select, but the item did not resolve as multi-select.");
    }

    if (question.explanation && /^note:/i.test(normalizeText(question.explanation))) {
      issues.push("Explanation notes a likely source answer inconsistency.");
    }

    if ((type === "TRUE/FALSE" || type === "YES/NO") && choices.length !== 2) {
      issues.push("Binary source item does not have exactly 2 choices.");
    }

    return issues;
  }

  function prepareQuestionBank(questions) {
    return questions.map((question) => {
      const mergedQuestion = {
        ...question,
        ...(QUESTION_OVERRIDES[question.id] || {})
      };
      const binaryKind = detectBinaryKind(question);
      const normalizedAnswer = Array.isArray(mergedQuestion.answer)
        ? mergedQuestion.answer.join(", ")
        : mergedQuestion.answer;
      const preparedQuestion = {
        ...mergedQuestion,
        answer: normalizeText(normalizedAnswer),
        question: normalizeText(mergedQuestion.question)
      };
      const binaryKindPrepared = detectBinaryKind(preparedQuestion);
      const rawChoices = toChoiceObjects(preparedQuestion);
      const choices = binaryKindPrepared ? buildBinaryChoices(binaryKindPrepared, rawChoices) : rawChoices;
      const pairs = binaryKindPrepared ? [] : derivePairs(preparedQuestion);
      const matchingPrompt = hasMatchingPrompt(preparedQuestion) || normalizedKeyPart(preparedQuestion.type) === "matching";
      const matching = binaryKindPrepared ? false : Boolean(matchingPrompt && (preparedQuestion.matching || pairs.length || normalizedKeyPart(preparedQuestion.type) === "matching"));
      const correct = matching ? [] : deriveCorrectLabels({ ...preparedQuestion, choices });
      const multi = binaryKindPrepared ? false : (!matching && (hasMultiPrompt(preparedQuestion) || correct.length > 1));
      const type = deriveType({ ...preparedQuestion, choices }, matching, multi);
      const sourceIssues = validateQuestion(preparedQuestion, {
        choices,
        pairs,
        correct,
        matching,
        multi,
        type,
        binaryKind: binaryKindPrepared
      });

      return {
        ...preparedQuestion,
        question: preparedQuestion.question,
        prompt: displayQuestionPrompt({
          ...preparedQuestion,
          matching,
          question: preparedQuestion.question
        }),
        explanation: normalizeText(preparedQuestion.explanation),
        answer: preparedQuestion.answer,
        choices,
        pairs,
        correct,
        matching,
        multi,
        type,
        sourceIssues
      };
    });
  }

  const QUESTION_BANK = prepareQuestionBank(RAW_QUESTIONS);
  const QUESTION_LOOKUP = new Map(QUESTION_BANK.map((question) => [question.id, question]));

  const storage = {
    save() {
      try {
        const payload = {
          mode: $("mode").value,
          setSize: $("setSize").value,
          category: $("category").value,
          current: state.current,
          answers: state.answers,
          submitted: state.submitted,
          flagged: state.flagged,
          reviewUnlocked: state.reviewUnlocked,
          navFilter: state.navFilter,
          questionIds: state.questions.map((question) => question.id),
          theme: document.body.classList.contains("dark") ? "dark" : "light"
        };
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      } catch (error) {
        // Ignore storage failures and keep the quiz functional.
      }
    },
    clear() {
      try {
        window.localStorage.removeItem(STORAGE_KEY);
      } catch (error) {
        // Ignore storage failures and keep the quiz functional.
      }
    },
    load() {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (!parsed || !Array.isArray(parsed.questionIds) || !parsed.questionIds.length) return null;
        return parsed;
      } catch (error) {
        return null;
      }
    },
    restore() {
      const snapshot = this.load();
      if (!snapshot) return false;

      const restoredQuestions = snapshot.questionIds
        .map((id) => QUESTION_LOOKUP.get(id))
        .filter(Boolean);

      if (!restoredQuestions.length || restoredQuestions.length !== snapshot.questionIds.length) {
        this.clear();
        return false;
      }

      if (snapshot.mode) $("mode").value = snapshot.mode;
      if (snapshot.setSize) $("setSize").value = snapshot.setSize;
      if (snapshot.category) $("category").value = snapshot.category;
      if (snapshot.theme === "dark") document.body.classList.add("dark");

      state.questions = restoredQuestions;
      state.current = Math.max(0, Math.min(Number(snapshot.current) || 0, restoredQuestions.length - 1));
      state.answers = snapshot.answers || {};
      state.submitted = snapshot.submitted || {};
      state.flagged = snapshot.flagged || {};
      state.reviewUnlocked = Boolean(snapshot.reviewUnlocked);
      state.navFilter = snapshot.navFilter || "all";
      state.restored = true;

      return true;
    }
  };

  const data = {
    categories() {
      return [...new Set(QUESTION_BANK.map((question) => question.category).filter(Boolean))].sort();
    },
    mode() {
      return $("mode").value;
    },
    buildQuestionSet() {
      const selectedCategory = $("category").value;
      const pool = QUESTION_BANK.filter((question) => selectedCategory === "all" || question.category === selectedCategory);
      const size = $("setSize").value;
      const shuffled = shuffle(pool);
      return size === "all" ? shuffled : shuffled.slice(0, Math.min(Number(size), shuffled.length));
    },
    hasAnswer(index, question) {
      const saved = state.answers[index];
      if (!saved) return false;
      if (question.matching) return Object.keys(saved).length > 0;
      return Array.isArray(saved) && saved.length > 0;
    },
    isSubmitted(index) {
      if (data.mode() === "review" || state.reviewUnlocked) return true;
      return Boolean(state.submitted[index]);
    },
    isComplete(question, index) {
      const saved = state.answers[index];
      if (!saved) return false;

      if (question.matching) {
        return question.pairs.length > 0 && question.pairs.every((pair) => normalizeText(saved[pair.left]));
      }

      if (!Array.isArray(saved) || saved.length === 0) return false;
      if (!question.multi) return true;

      const expectedCount = (question.correct || []).length;
      if (!expectedCount) return true;
      return saved.length >= expectedCount;
    },
    isCorrect(question, index) {
      if (question.matching) {
        const saved = state.answers[index] || {};
        return question.pairs.every((pair) => saved[pair.left] === pair.right);
      }

      const chosen = [...(state.answers[index] || [])].sort().join("|");
      const expected = [...(question.correct || [])].sort().join("|");
      return Boolean(expected) && chosen === expected;
    },
    score() {
      return state.questions.reduce((total, question, index) => total + (data.isCorrect(question, index) ? 1 : 0), 0);
    },
    answerText(question) {
      if (question.matching) {
        return question.pairs.map((pair) => `${pair.left} -> ${pair.right}`).join("; ");
      }

      return (question.correct || [])
        .map((label) => (question.choices.find((choice) => choice.label === label) || {}).text)
        .filter(Boolean)
        .join(", ");
    },
    matchesNavFilter(question, index, filter) {
      switch (filter) {
        case "correct":
          return data.hasAnswer(index, question) && ui.showReview(question, index) && data.isCorrect(question, index);
        case "incorrect":
          return data.hasAnswer(index, question) && ui.showReview(question, index) && !data.isCorrect(question, index);
        case "skipped":
          return !data.hasAnswer(index, question);
        case "flagged":
          return Boolean(state.flagged[index]);
        default:
          return true;
      }
    },
    filterCount(filter) {
      return state.questions.filter((question, index) => data.matchesNavFilter(question, index, filter)).length;
    }
  };

  const ui = {
    init() {
      $("countPill").textContent = `${QUESTION_BANK.length} Questions`;
      $("category").innerHTML = '<option value="all">All categories</option>' + data.categories()
        .map((category) => `<option value="${esc(category)}">${esc(category)}</option>`)
        .join("");
      this.syncModeBadge();
    },
    syncModeBadge() {
      const map = {
        practice: "Practice Mode",
        exam: "Exam Mode",
        review: "Review Mode"
      };
      $("modeBadge").textContent = map[data.mode()] || "Practice Mode";
    },
    showReview(question, index) {
      if (data.mode() === "review" || state.reviewUnlocked) return true;
      return data.mode() === "practice" && data.isSubmitted(index) && data.hasAnswer(index, question);
    },
    inputsLocked(question, index) {
      if (data.mode() === "review" || state.reviewUnlocked) return true;
      return data.mode() === "practice" && data.isSubmitted(index);
    },
    renderNav() {
      const filters = [
        { key: "all", label: "All" },
        { key: "incorrect", label: "Incorrect" },
        { key: "skipped", label: "Skipped" },
        { key: "flagged", label: "Flagged" },
        { key: "correct", label: "Correct" }
      ];
      const visibleItems = state.questions
        .map((question, index) => ({ question, index }))
        .filter(({ question, index }) => data.matchesNavFilter(question, index, state.navFilter));

      $("navwrap").innerHTML = `
        <div class="nav-filters">
          ${filters.map((filter) => `
            <button
              type="button"
              class="filter-chip ${state.navFilter === filter.key ? "active" : ""}"
              onclick="QuizActions.setNavFilter('${filter.key}')"
            >
              ${filter.label} <span>${data.filterCount(filter.key)}</span>
            </button>
          `).join("")}
        </div>
        <div class="navgrid" id="navgrid"></div>
      `;

      $("navgrid").innerHTML = visibleItems.map(({ question, index }) => {
        const classes = ["qnav"];
        if (data.hasAnswer(index, question)) {
          if (ui.showReview(question, index)) {
            classes.push(data.isCorrect(question, index) ? "correct" : "wrong");
          } else {
            classes.push("answered");
          }
        }
        if (state.flagged[index]) classes.push("flagged");
        if (index === state.current) classes.push("current");
        return `<button type="button" class="${classes.join(" ")}" onclick="QuizActions.go(${index})">${index + 1}</button>`;
      }).join("") || '<div class="nav-empty">No questions match this filter.</div>';

      const answeredCount = state.questions.filter((question, index) => data.hasAnswer(index, question)).length;
      const flaggedCount = Object.keys(state.flagged).filter((key) => state.flagged[key]).length;
      const sourceIssueCount = state.questions.filter((question) => Array.isArray(question.sourceIssues) && question.sourceIssues.length).length;

      $("sideStats").innerHTML =
        `<strong>Current set:</strong> ${state.questions.length} items<br>` +
        `<strong>Answered:</strong> ${answeredCount} / ${state.questions.length}<br>` +
        `<strong>Flagged:</strong> ${flaggedCount}<br>` +
        `<strong>Source issues:</strong> ${sourceIssueCount}<br>` +
        `<strong>Filter:</strong> ${state.navFilter}<br>` +
        `<strong>Resume:</strong> ${state.restored ? "Restored" : "Live session"}`;
    },
    renderChoices(question, reveal) {
      const saved = state.answers[state.current] || [];
      const inputType = question.multi ? "checkbox" : "radio";
      const locked = ui.inputsLocked(question, state.current) ? "disabled" : "";

      return `
        <div class="exam-shell">
          <div class="exam-shell-head">
            <span>${question.multi ? "Select all that apply" : "Select the best answer"}</span>
            <span>${question.type}</span>
          </div>
          <div class="exam-shell-body">
            ${question.choices.map((choice) => {
              const classes = ["choice"];
              if (reveal && (question.correct || []).includes(choice.label)) classes.push("correct");
              if (reveal && saved.includes(choice.label) && !(question.correct || []).includes(choice.label)) classes.push("wrong");

              return `
                <label class="${classes.join(" ")}">
                  <input
                    type="${inputType}"
                    name="choice"
                    value="${esc(choice.label)}"
                    ${saved.includes(choice.label) ? "checked" : ""}
                    ${locked}
                    onchange="QuizActions.setChoice('${esc(choice.label)}', ${question.multi})"
                  />
                  <span>${displayText(choice.text)}</span>
                </label>
              `;
            }).join("")}
          </div>
        </div>
      `;
    },
    renderMatching(question, reveal) {
      const saved = state.answers[state.current] || {};
      const locked = ui.inputsLocked(question, state.current) ? "disabled" : "";
      const options = reveal ? question.pairs.map((pair) => pair.right) : shuffle(question.pairs.map((pair) => pair.right));

      return `
        <div class="exam-shell">
          <div class="exam-shell-head">
            <span>Match each item to the correct answer</span>
            <span>MATCHING</span>
          </div>
          <div class="exam-shell-body">
            ${question.pairs.map((pair) => {
              const value = saved[pair.left] || "";
              const rowClasses = ["match-row"];
              if (reveal && value === pair.right) rowClasses.push("correct");
              if (reveal && value && value !== pair.right) rowClasses.push("wrong");

              return `
                <div class="${rowClasses.join(" ")}">
                  <div><strong>${displayText(pair.left)}</strong></div>
                  <div>
                    <select class="match-select" ${locked} onchange="QuizActions.setMatch('${esc(pair.left)}', this.value)">
                      <option value="">Choose answer</option>
                      ${options.map((option) => `<option value="${esc(option)}" ${value === option ? "selected" : ""}>${displayText(option)}</option>`).join("")}
                    </select>
                    ${reveal && value !== pair.right ? `<div class="small ok">Correct: ${displayText(pair.right)}</div>` : ""}
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>
      `;
    },
    feedbackBlock(question) {
      const correct = data.isCorrect(question, state.current);
      const explanation = question.explanation || "No explanation was stored for this item.";
      const issueBlock = question.sourceIssues && question.sourceIssues.length
        ? `
        <div class="source-issue-box">
          <strong>Source issue${question.sourceIssues.length > 1 ? "s" : ""}:</strong>
          <ul class="issue-list">
            ${question.sourceIssues.map((issue) => `<li>${esc(issue)}</li>`).join("")}
          </ul>
        </div>
      `
        : "";
      return `
        <div class="answerline">
          <span class="result ${correct ? "ok" : "no"}">${correct ? "Correct" : "Incorrect"}</span>
          <div class="small"><strong>Correct answer:</strong> ${esc(data.answerText(question))}</div>
        </div>
        <div class="explain">
          <strong>Explanation:</strong>
          <div>${esc(explanation)}</div>
        </div>
        ${issueBlock}
      `;
    },
    utilityActions(question) {
      const hasAnswer = data.hasAnswer(state.current, question);
      const flagged = Boolean(state.flagged[state.current]);

      return `
        <div class="question-topbar">
          <div class="small">${flagged ? "This question is flagged for review." : "Flag this item if you want to revisit it before finishing the mock exam."}</div>
          <div class="toolbar toolbar-compact">
            <button type="button" class="ghost-inline ${flagged ? "warn-inline" : ""}" onclick="QuizActions.toggleFlag()">${flagged ? "Unflag" : "Flag"}</button>
            <button type="button" class="ghost-inline" onclick="QuizActions.clearAnswer()" ${!hasAnswer || ui.inputsLocked(question, state.current) ? "disabled" : ""}>Clear</button>
          </div>
        </div>
      `;
    },
    footerActions(question) {
      const hasAnswer = data.hasAnswer(state.current, question);
      const finishLabel = data.mode() === "exam" && !state.reviewUnlocked ? "Finish Exam" : "Finish / Review";

      return `
        <div class="footer-row">
          <div class="toolbar">
            <button type="button" class="secondary" onclick="QuizActions.prev()" ${state.current === 0 ? "disabled" : ""}>Previous</button>
            <button type="button" class="secondary" onclick="QuizActions.next()" ${state.current === state.questions.length - 1 ? "disabled" : ""}>Next</button>
          </div>
          <div class="toolbar toolbar-primary">
            ${data.mode() !== "practice" && !state.reviewUnlocked ? `<button type="button" onclick="QuizActions.submitAnswer()" ${!hasAnswer ? "disabled" : ""}>Submit Answer</button>` : ""}
            <button type="button" class="danger" onclick="QuizActions.finish()">${finishLabel}</button>
          </div>
        </div>
      `;
    },
    renderQuestion() {
      if (!state.questions.length) {
        $("questionArea").innerHTML = "<strong>Click Start / Restart to begin.</strong>";
        $("counter").textContent = "Not started";
        $("bar").style.width = "0%";
        this.renderNav();
        return;
      }

      const question = state.questions[state.current];
      const reveal = this.showReview(question, state.current);

      $("counter").textContent = `Question ${state.current + 1} of ${state.questions.length}`;
      $("bar").style.width = `${((state.current + 1) / state.questions.length) * 100}%`;

      let html = `
        <div class="meta-row">
          <span class="tag">${displayText(question.type)}</span>
          <span class="tag">${displayText(question.category)}</span>
          <span class="tag">Source #${question.id}</span>
          ${question.sourceIssues && question.sourceIssues.length ? `<span class="tag tag-issue">Source issue${question.sourceIssues.length > 1 ? "s" : ""}</span>` : ""}
          ${state.restored ? '<span class="tag tag-resume">Resumed</span>' : ""}
          ${state.flagged[state.current] ? '<span class="tag">Flagged</span>' : ""}
        </div>
        ${this.utilityActions(question)}
        <div class="qtitle">${displayText(question.prompt || question.question)}</div>
      `;

      html += question.matching ? this.renderMatching(question, reveal) : this.renderChoices(question, reveal);
      if (reveal) html += this.feedbackBlock(question);
      html += this.footerActions(question);

      $("questionArea").innerHTML = html;
      this.renderNav();
    },
    renderResults() {
      const total = state.questions.length;
      const correct = data.score();
      const answered = state.questions.filter((question, index) => data.hasAnswer(index, question)).length;
      const flagged = Object.keys(state.flagged).filter((key) => state.flagged[key]).length;
      const percent = total ? Math.round((correct / total) * 100) : 0;

      $("counter").textContent = `Results: ${correct} / ${total}`;
      $("bar").style.width = "100%";
      $("questionArea").innerHTML = `
        <div class="meta-row">
          <span class="tag">Certiport Mock Summary</span>
          <span class="tag">${displayText(data.mode())}</span>
          ${state.restored ? '<span class="tag tag-resume">Resumed session</span>' : ""}
        </div>
        <div class="qtitle">Exam Summary</div>
        <div class="summary-grid">
          <div class="summary-card">
            <strong>${correct} / ${total}</strong>
            <div class="small">Correct answers</div>
          </div>
          <div class="summary-card">
            <strong>${percent}%</strong>
            <div class="small">Overall score</div>
          </div>
          <div class="summary-card">
            <strong>${answered}</strong>
            <div class="small">Answered items</div>
          </div>
        </div>
        <p class="small">Review is now unlocked. Each question will show the stored answer and the source explanation text from the reviewer bank.</p>
        <div class="toolbar">
          <button type="button" onclick="QuizActions.startReview()">Start Review</button>
          <button type="button" class="secondary" onclick="QuizActions.goToFirstFlagged()" ${flagged ? "" : "disabled"}>Go To Flagged</button>
        </div>
      `;

      this.renderNav();
    }
  };

  const actions = {
    autoSubmitIfReady(question, index) {
      if (data.mode() !== "practice" || state.reviewUnlocked) return false;
      if (!data.isComplete(question, index)) return false;
      state.submitted[index] = true;
      storage.save();
      return true;
    },
    start() {
      state.questions = data.buildQuestionSet();
      state.current = 0;
      state.answers = {};
      state.submitted = {};
      state.flagged = {};
      state.reviewUnlocked = false;
      state.restored = false;
      state.navFilter = "all";
      ui.syncModeBadge();
      storage.save();
      ui.renderQuestion();
    },
    go(index) {
      if (!state.questions.length) return;
      state.current = index;
      storage.save();
      ui.renderQuestion();
    },
    prev() {
      if (state.current > 0) {
        state.current -= 1;
        storage.save();
        ui.renderQuestion();
      }
    },
    next() {
      if (state.current < state.questions.length - 1) {
        state.current += 1;
        storage.save();
        ui.renderQuestion();
      }
    },
    setChoice(label, multi) {
      const question = state.questions[state.current];
      if (ui.inputsLocked(question, state.current)) return;

      let selected = state.answers[state.current] || [];
      selected = multi
        ? (selected.includes(label) ? selected.filter((value) => value !== label) : [...selected, label])
        : [label];

      state.answers[state.current] = selected;
      actions.autoSubmitIfReady(question, state.current);
      storage.save();
      ui.renderQuestion();
    },
    setMatch(left, value) {
      const question = state.questions[state.current];
      if (ui.inputsLocked(question, state.current)) return;
      const selected = state.answers[state.current] || {};
      selected[left] = value;
      state.answers[state.current] = selected;
      actions.autoSubmitIfReady(question, state.current);
      storage.save();
      ui.renderQuestion();
    },
    clearAnswer() {
      if (ui.inputsLocked(state.questions[state.current], state.current)) return;
      delete state.answers[state.current];
      delete state.submitted[state.current];
      storage.save();
      ui.renderQuestion();
    },
    submitAnswer() {
      const question = state.questions[state.current];
      if (!data.hasAnswer(state.current, question)) return;
      state.submitted[state.current] = true;
      storage.save();
      ui.renderQuestion();
    },
    toggleFlag() {
      state.flagged[state.current] = !state.flagged[state.current];
      storage.save();
      ui.renderQuestion();
    },
    finish() {
      state.reviewUnlocked = true;
      storage.save();
      ui.renderResults();
    },
    startReview() {
      state.current = 0;
      storage.save();
      ui.renderQuestion();
    },
    goToFirstFlagged() {
      const firstFlagged = Object.keys(state.flagged).find((key) => state.flagged[key]);
      if (firstFlagged === undefined) return;
      state.current = Number(firstFlagged);
      storage.save();
      ui.renderQuestion();
    },
    setNavFilter(filter) {
      state.navFilter = filter || "all";
      storage.save();
      ui.renderNav();
    },
    toggleTheme() {
      document.body.classList.toggle("dark");
      storage.save();
    },
    handleModeChange() {
      ui.syncModeBadge();
      storage.save();
      if (state.questions.length) ui.renderQuestion();
    }
  };

  window.QuizActions = actions;

  $("startBtn").addEventListener("click", actions.start);
  $("toggleTheme").addEventListener("click", actions.toggleTheme);
  $("mode").addEventListener("change", actions.handleModeChange);

  ui.init();
  if (storage.restore()) {
    ui.syncModeBadge();
    ui.renderQuestion();
  }
})();
