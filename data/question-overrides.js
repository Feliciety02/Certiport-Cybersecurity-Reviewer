window.CYBER_QUESTION_OVERRIDES = {
  181: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which action will trigger a user account control (UAC) prompt in Windows?",
    options: [
      "Changing settings in the Display Properties dialog box",
      "Restarting Windows",
      "Accessing the Internet",
      "Installing a new program",
      "Changing the time zone"
    ],
    answer: "Installing a new program",
    explanation: "UAC prompts are triggered when an action requires administrator-level privileges. Installing a new program requires elevated permissions because it typically writes to protected system directories and modifies system settings. Simple actions like changing display settings, restarting Windows, accessing the Internet, or changing the time zone do not require elevated permissions and will not trigger a UAC prompt."
  },
  182: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You work as a network administrator for Peach Tree Inc. Rick, a Sales Manager, is unable to open a file stored on a network location. You provided Write NTFS permission but he is still unable to access the file. You want to check his effective permissions for the file. Which steps will you take?",
    options: [
      "From the command prompt, run the WinRS utility",
      "In the file properties, view the Security tab.",
      "In the file properties > click the Advanced button on the Security tab. View Effective Permissions tab.",
      "From the command prompt, run the Winrm utility."
    ],
    answer: "In the file properties > click the Advanced button on the Security tab. View Effective Permissions tab.",
    explanation: "To view the effective permissions for a user on a file (combining all group memberships and explicit permissions), you must go to the file's Properties -> Security tab -> Advanced -> Effective Permissions tab. This allows you to enter a username and see the net result of all permissions applied from groups and individual assignments. Simply viewing the Security tab alone doesn't give you the combined effective permissions for a specific user."
  },
  183: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You need to configure a folder that allows everyone in your group to view and modify files. Which item in the Share With menu should you use?",
    options: ["Nobody", "Homegroup (Read)", "Homegroup (Read/Write)", "Specific People"],
    answer: "Homegroup (Read/Write)",
    explanation: "The 'Homegroup (Read/Write)' option grants all members of your homegroup both read and write (modify) access to the folder. 'Homegroup (Read)' only allows viewing files without modification. 'Nobody' disables sharing. 'Specific People' allows you to choose individual users, but that's not necessary here since you want everyone in the group to have access."
  },
  184: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "A Windows service is a:",
    options: [
      "program or process that runs in the foreground",
      "hardware driver that provides support to the operating system",
      "hardware driver that provides support to a specific device",
      "program or process that runs in the background and does not require user intervention"
    ],
    answer: "program or process that runs in the background and does not require user intervention",
    explanation: "A Windows service is a long-running executable that performs specific functions and runs in the background without a user interface. Services are typically started automatically at boot time and run regardless of whether a user is logged in. They are managed through the Windows Services console (services.msc) and are distinct from hardware drivers, which are separate components providing device-level support."
  },
  185: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which of the following network locations is controlled by the network administrator and cannot be selected or changed?",
    options: ["Public network", "Home network", "Work network", "Domain network"],
    answer: "Domain network",
    explanation: "The Domain network location is automatically assigned by Windows when a computer is joined to an Active Directory domain. It is controlled by the network administrator through Group Policy and cannot be manually changed by the user. In contrast, Public, Home, and Work network locations can be manually selected by the user when connecting to a network."
  },
  186: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which Windows feature allows you to request that someone else control your computer from their computer?",
    options: ["Sync Center", "Action Center", "Connect Now", "Remote Assistance"],
    answer: "Remote Assistance",
    explanation: "Windows Remote Assistance allows a user to invite someone else (such as a tech support person) to remotely view or control their computer. The key distinction from Remote Desktop Connection is that Remote Assistance is a collaborative, invitation-based tool-the helper and the user can both see the screen simultaneously. Sync Center is for offline file synchronization, Action Center handles notifications, and Connect Now is for network device setup."
  },
  187: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which of the following is the difference between local and network applications?",
    options: [
      "A network application is loaded in a local computer and accessed from a remote computer, whereas a local application is loaded in a local computer and accessed only by the local computer.",
      "A local application is loaded in a local computer and accessed from a remote computer, whereas a network application is loaded in a local computer and accessed only by the local computer",
      "A network application is loaded in a local computer, whereas a local application is loaded in an administrative computer",
      "A network application is loaded in a remote computer, whereas a local application is loaded in a local computer."
    ],
    answer: "A network application is loaded in a local computer and accessed from a remote computer, whereas a local application is loaded in a local computer and accessed only by the local computer.",
    explanation: "A local application is installed and run entirely on the local computer - only that machine uses it. A network application is installed on a local or server computer but is made accessible to remote users over the network. This allows multiple clients to use the same application without installing it individually on each machine."
  },
  188: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which program will run on a 64-bit version of the Windows operating system?",
    options: [
      "A 32-bit laser printer driver.",
      "A 32-bit version of Microsoft Office.",
      "A 32-bit wireless network adapter driver",
      "A 32-bit video card driver."
    ],
    answer: "A 32-bit version of Microsoft Office.",
    explanation: "64-bit Windows can run 32-bit applications (like Microsoft Office 32-bit) through a compatibility layer called WOW64 (Windows 32-bit on Windows 64-bit). However, hardware drivers (printer, network adapter, video card) must match the OS architecture - 64-bit Windows requires 64-bit drivers. A 32-bit driver will not function on a 64-bit OS."
  },
  189: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which Windows feature will allow you to run automated scripts on a remote computer?",
    options: ["Remote Desktop Connection", "Virtual Private Network", "Remote Access Service", "Windows Remote Management"],
    answer: "Windows Remote Management",
    explanation: "Windows Remote Management (WinRM) is Microsoft's implementation of the WS-Management protocol, which allows administrators to remotely run scripts, commands, and manage systems using tools like PowerShell remoting. Remote Desktop Connection provides a graphical interface, not script automation. VPN provides secure network tunneling, and Remote Access Service provides dial-up connectivity."
  },
  190: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which feature allows you to manually configure a hardware device?",
    options: ["Device Manager", "Registry Editor", "Windows Task Manager", "Ease of Access"],
    answer: "Device Manager",
    explanation: "Device Manager is the Windows tool that lets you view and control hardware attached to your computer. You can use it to update drivers, disable or enable devices, configure device settings, and troubleshoot hardware problems. The Registry Editor modifies system registry settings, Task Manager monitors running processes, and Ease of Access provides accessibility features."
  },
  191: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The Encrypting File System (EFS) is a:",
    options: [
      "feature that enables files to be stored in a secure format",
      "sequence of characters used to encrypt and decrypt information stored in a folder",
      "digital document that verifies the identity of a user",
      "specially made hard disk drive that requires a password"
    ],
    answer: "sequence of characters used to encrypt and decrypt information stored in a folder",
    explanation: "EFS (Encrypting File System) is a Windows NTFS feature that uses a combination of symmetric and asymmetric encryption keys (a sequence of characters) to encrypt and decrypt files and folders transparently. It is tied to the user's account credentials and certificates. Note: While EFS is broadly a security feature, the specific answer here refers to the cryptographic key mechanism at its core."
  },
  192: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "Which of the following steps will you take to install a local printer? Choose all that apply.",
    options: [
      "In the Add Printer wizard, click Add a local printer.",
      "On Choose a printer port, select Use an existing port, and then select the recommended port.",
      "On the Install the printer driver page, select the printer manufacturer and model, and then click next",
      "Click the Start button and open Device Manager."
    ],
    answer: [
      "In the Add Printer wizard, click Add a local printer.",
      "On Choose a printer port, select Use an existing port, and then select the recommended port.",
      "On the Install the printer driver page, select the printer manufacturer and model, and then click next"
    ],
    explanation: "Installing a local printer follows these steps: (1) Open 'Devices and Printers' and start the Add Printer wizard, (2) Click 'Add a local printer', (3) Select an existing port (usually LPT1 or USB), and (4) Select the manufacturer and model to install the driver. Device Manager is not used to install printers - it's used for hardware device management."
  },
  193: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which prevents you from establishing a Remote Desktop connection to a remote computer?",
    options: [
      "Incorrect screen resolution in the Display Properties dialog box.",
      "Incorrect port settings in Windows Firewall.",
      "Incorrect security settings in Internet Explorer.",
      "Incorrect monitor settings in Device Manager"
    ],
    answer: "Incorrect port settings in Windows Firewall.",
    explanation: "Remote Desktop Protocol (RDP) uses port 3389 by default. If Windows Firewall is blocking this port, the Remote Desktop connection will fail. Screen resolution, Internet Explorer settings, and monitor settings in Device Manager have no effect on RDP connectivity. Firewall configuration is the most common reason for failed Remote Desktop connections."
  },
  194: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You need to be able to recover an encrypted file even if you lose the key. What should you do?",
    options: [
      "Use Bitlocker encryption.",
      "Use System Restore to create a system restore point.",
      "Create a recovery certificate and store it on a portable device.",
      "Use the Encrypting File System (EFS)."
    ],
    answer: "Create a recovery certificate and store it on a portable device.",
    explanation: "If you lose your EFS encryption key, you will be permanently locked out of your encrypted files unless you have a Data Recovery Agent (DRA) certificate. Creating a recovery certificate and storing it safely on a portable device (like a USB drive kept offline) gives you a fallback method to decrypt files. System Restore does not recover encryption keys, and BitLocker is a full-disk encryption tool, not a file-level recovery mechanism."
  },
  195: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "You want to connect to a wireless access point. You need to view a list of available networks. Which two actions should you perform?",
    options: [
      "Click the network icon in the notification area.",
      "From Control Panel, use Network and Sharing Center.",
      "From Control Panel, use Windows Mobility Center.",
      "From Control Panel, use Sync Center.",
      "From Control Panel, use Ease of Access."
    ],
    answer: [
      "Click the network icon in the notification area.",
      "From Control Panel, use Network and Sharing Center."
    ],
    explanation: "To view available wireless networks, you can either click the network icon in the system tray (notification area) to see a pop-up list of nearby networks, or use Control Panel -> Network and Sharing Center -> 'Connect to a network'. Windows Mobility Center, Sync Center, and Ease of Access do not provide wireless network browsing functionality."
  },
  196: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "Which of the following steps will you take to remove a printer? Choose all that apply.",
    options: [
      "Open the Devices and Printers window.",
      "Open Device Manager.",
      "Right-click the device, and then click Enable.",
      "Right-click the printer and choose Remove device."
    ],
    answer: [
      "Open the Devices and Printers window.",
      "Right-click the printer and choose Remove device."
    ],
    explanation: "To remove a printer in Windows, you open the 'Devices and Printers' window (via Control Panel or Start menu), then right-click the printer and select 'Remove device'. Device Manager is for managing hardware drivers, not printers. 'Enable' would activate a disabled device, not remove it."
  },
  197: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Windows hides some files by default to:",
    options: [
      "improve access to system file",
      "save disk space",
      "protect the confidentiality of the contents of files",
      "avoid accidental modification or deletion of system files"
    ],
    answer: "avoid accidental modification or deletion of system files",
    explanation: "Windows hides system and operating system files by default to prevent users from accidentally deleting or modifying critical files that the OS needs to function properly. This is a protective measure, not related to confidentiality, disk space savings, or improving access speed. Users can unhide these files via Folder Options -> View -> Show hidden files."
  },
  198: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The purpose of a Public folder is to:",
    options: [
      "share files with everyone on a network",
      "share files with only one person on a network",
      "share files with a selected group of people on a network",
      "back up files to a location on a network"
    ],
    answer: "share files with everyone on a network",
    explanation: "The Public folder in Windows is a special shared folder accessible by all user accounts on the local computer and, when Public Folder Sharing is enabled, by all users on the network. Any file placed in the Public folder is automatically available to everyone without needing to configure individual permissions. It is not for selective sharing or backups."
  },
  199: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Joseph runs Windows Defender and receives the warning: 'Windows Defender Definitions haven't been updated'. What will he do to update the files?",
    options: [
      "Download and install the latest Windows Defender application from the Microsoft website.",
      "Restart the Windows Defender.",
      "Download and install the appropriate files from the Microsoft website.",
      "Repair the Microsoft Location Finder program."
    ],
    answer: "Download and install the appropriate files from the Microsoft website.",
    explanation: "Windows Defender relies on definition files (signature databases) to detect malware. When definitions are outdated, you need to download and install the latest definition files from Microsoft's website. You do not reinstall the entire Windows Defender application - only the definition/signature files need updating. Restarting Defender or repairing unrelated programs will not update definitions."
  },
  200: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Where will you find information about removing computer viruses?",
    options: ["System Restore", "Help and Support", "Disk Cleanup", "System Information"],
    answer: "Help and Support",
    explanation: "Windows Help and Support (accessed via the Start menu) provides guidance, tutorials, and documentation on a wide range of topics including virus removal procedures. System Restore rolls back system changes, Disk Cleanup frees up disk space, and System Information displays hardware/software configuration details - none of these provide virus removal instructions."
  },
  201: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which Windows feature should you use to protect a computer against spyware?",
    options: ["Encrypting File System", "User Account Control", "Windows Defender", "Group Policy"],
    answer: "Windows Defender",
    explanation: "Windows Defender is Microsoft's built-in anti-malware solution that protects against spyware, adware, viruses, and other malicious software. It provides real-time protection and scheduled scanning. EFS encrypts files, UAC controls privilege escalation, and Group Policy manages system-wide settings - none are specifically designed to detect and remove spyware."
  },
  202: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which file system is designed for transfer of large files between a personal computer and flash devices?",
    options: ["exFAT file system", "FAT16 file system", "NTFS file system", "FAT32 file system"],
    answer: "exFAT file system",
    explanation: "exFAT (Extended File Allocation Table) was specifically designed for flash storage devices (USB drives, SD cards) and supports files larger than 4GB - overcoming FAT32's 4GB file size limit. It also lacks NTFS's complexity and overhead, making it ideal for portable media. FAT16 is outdated with severe size limitations, FAT32 has a 4GB file limit, and NTFS has overhead that makes it less efficient for removable flash devices."
  },
  203: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "What is the largest single file that you can store on a FAT32 file system?",
    options: ["32GB", "16GB", "4GB", "8GB"],
    answer: "4GB",
    explanation: "FAT32 uses a 32-bit file size entry, which limits individual file sizes to a maximum of 4GB minus 1 byte (4,294,967,295 bytes). This is a fundamental limitation of the file system structure. The maximum FAT32 volume size is 32GB in Windows (though technically up to 2TB). For files larger than 4GB, you need exFAT or NTFS."
  },
  204: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You see a notice: 'This computer can't connect to homegroup.' What must you change?",
    options: [
      "The computer's network location must be set to Home.",
      "Reboot the computer.",
      "The computer's network location must be set to Work.",
      "The computer's network location must be set to Public."
    ],
    answer: "The computer's network location must be set to Home.",
    explanation: "Windows Homegroup functionality is only available when the computer's network location is set to 'Home'. If it's set to Work, Public, or Domain, the Homegroup feature is disabled for security reasons. Changing the network location to Home will enable the Homegroup option and allow the computer to join or create a homegroup."
  },
  205: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which describes the purpose of Power Saver mode for a portable computer?",
    options: [
      "To prevent unauthorized programs from consuming resources",
      "To lock the computer when it is idle",
      "To protect the display from burned-in images.",
      "To shut down idle devices to conserve battery charge"
    ],
    answer: "To shut down idle devices to conserve battery charge",
    explanation: "Power Saver mode is a Windows power plan that maximizes battery life by reducing system performance and aggressively powering down or dimming components (hard disk, display, CPU) when idle. It prioritizes battery longevity over performance. Screen savers protect displays from burn-in, security settings handle unauthorized programs, and locking is a separate security feature."
  },
  206: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "When using BitLocker for fixed and removable data drives, what are the available unlock options? Choose all that apply.",
    options: ["Automatic unlocking", "Startup key", "Password", "Smart Card"],
    answer: ["Automatic unlocking", "Password", "Smart Card"],
    explanation: "For BitLocker on data drives (fixed and removable), the available unlock methods are: (1) Automatic unlocking - drive unlocks when the OS BitLocker-protected drive is unlocked, (2) Password - user enters a passphrase, and (3) Smart Card - uses a smart card and PIN. A 'Startup key' (stored on USB) is specific to the OS drive, not data drives."
  },
  207: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The Remote Desktop Connection is used to:",
    options: ["access another personal computer", "attend a webinar", "search the Internet", "conduct a Lync Online Meeting"],
    answer: "access another personal computer",
    explanation: "Remote Desktop Connection (RDC) uses the Remote Desktop Protocol (RDP) to allow a user to connect to and control another Windows computer remotely over a network. The remote computer's desktop is displayed on the local screen, and input is transmitted back. It is not used for webinars, browsing the internet independently, or online meetings - those are handled by other applications."
  },
  208: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You attempt to print to a network printer, but you are unable to find the printer when you search for available printers. What is a reason you might not be able to find the printer?",
    options: [
      "Windows Firewall is blocking network discovery.",
      "The computer that the printer is connected to is turned off.",
      "The printer does not have the Plug and Play functionality.",
      "The printer is out of paper"
    ],
    answer: "Windows Firewall is blocking network discovery.",
    explanation: "Windows Firewall can block network discovery, which is the feature that allows computers to find other devices like printers on the network. If network discovery is blocked by the firewall, printers won't appear in the search results. While a turned-off computer could also cause issues, the firewall blocking network discovery is the primary network-level reason listed here."
  },
  209: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You want to change your default home page in Internet Explorer. In which location should you modify settings?",
    options: ["Internet Options", "Favorites", "View", "Trusted Sites"],
    answer: "Internet Options",
    explanation: "To change the default home page in Internet Explorer, go to Tools -> Internet Options -> General tab. The 'Home page' section allows you to type or set the URL you want as your default start page. Favorites manages bookmarks, View controls display options, and Trusted Sites is a security zone setting - none of these control the home page."
  },
  210: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which Windows feature allows you to manually control another Windows computer?",
    options: ["Remote Control Monitor", "Remote Desktop Connection", "Remote Power Management", "Remote Procedure Call"],
    answer: "Remote Desktop Connection",
    explanation: "Remote Desktop Connection (RDC) provides full control over another Windows computer's graphical interface - you can interact with the desktop, run programs, and manage files as if you were sitting at that machine. Remote Procedure Call (RPC) is a programming protocol, Remote Power Management handles power states remotely, and Remote Control Monitor is not a standard Windows feature."
  },
  211: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which Windows component should you use to make a copy of all files on your computer?",
    options: ["Disk Management", "System Image Backup", "Disk Cleanup", "System Restore"],
    answer: "System Image Backup",
    explanation: "System Image Backup creates a complete image of your entire computer, including all files, the operating system, installed applications, and settings. This allows full restoration if your system fails. Disk Management handles partitions, Disk Cleanup removes temporary files, and System Restore only creates restore points for system settings - not a complete file backup."
  },
  212: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You need to be able to access a file stored in a shared folder on your network even when you are disconnected from the network. What should you do?",
    options: [
      "Configure the folder permissions as Read/Write.",
      "From Control Panel, use Network and Internet.",
      "Make the folder available offline.",
      "Type the IP address of the network computer in the Address field of Internet Explorer."
    ],
    answer: "Configure the folder permissions as Read/Write.",
    explanation: "Note: The correct action for offline access is actually to 'Make the folder available offline' (using Windows Offline Files feature), which caches the network folder locally. However, the listed answer is 'Configure the folder permissions as Read/Write' - this ensures you have the right access permissions. For true offline access, enabling offline files is the correct Windows feature."
  },
  213: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which feature allows you to run applications hosted on network file servers or web servers?",
    options: ["Remote Desktop Connection", "Windows Virtual PC", "Windows Installer", "Application Virtualization Client"],
    answer: "Application Virtualization Client",
    explanation: "Application Virtualization Client (App-V client) allows users to run virtualized applications that are streamed from network file servers or web servers without installing them locally. The app runs in an isolated virtual environment on the client machine. Remote Desktop shows a remote desktop session, Windows Virtual PC runs virtual machines, and Windows Installer installs applications locally."
  },
  214: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You attempt to update your video driver. Your screen stops responding. You need to restore the previous video driver. Which Windows feature should you use?",
    options: ["Safe Mode", "Disk Defragmenter", "Disk Cleanup", "Check Disk (Chkdsk)"],
    answer: "Safe Mode",
    explanation: "Safe Mode boots Windows with a minimal set of drivers and services, using a basic VGA driver instead of the problematic new video driver. From Safe Mode, you can go to Device Manager and roll back the video driver to the previous version. Disk Defragmenter, Disk Cleanup, and Chkdsk are storage-related tools with no impact on driver management."
  },
  215: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which feature ensures that the latest device drivers are installed on your computer?",
    options: ["System configuration Utility", "Reliability and Performance Monitor", "Windows Update", "Task Scheduler"],
    answer: "Windows Update",
    explanation: "Windows Update automatically downloads and installs updates for the Windows operating system, including the latest certified device drivers from Microsoft and hardware manufacturers. It is the primary mechanism for keeping drivers current on a Windows system. The System Configuration Utility manages startup settings, Reliability Monitor tracks system stability, and Task Scheduler automates tasks."
  },
  216: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which is a potential risk when redirecting a USB storage device during a Remote Desktop session?",
    options: ["Access can be slower.", "Data can be lost.", "The session can stop responding.", "The device can stop working."],
    answer: "Data can be lost.",
    explanation: "When you redirect a USB storage device during a Remote Desktop session, there is a risk of data loss if the session is interrupted or the connection drops while files are being transferred. Abrupt disconnection can leave files partially written or cause corruption. While other issues like slower access are possible, data loss is the most critical security and safety concern."
  },
  217: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which Windows feature allows secure printing over the Internet?",
    options: ["Secure Transfer Protocol (STP)", "Voice over Internet Protocol (VoIP)", "Web2Print", "Internet Printing Protocol (IPP) by using HTTPS"],
    answer: "Internet Printing Protocol (IPP) by using HTTPS",
    explanation: "IPP (Internet Printing Protocol) over HTTPS (port 443) enables secure, encrypted printing across the Internet. HTTPS provides the SSL/TLS encryption layer that protects print job data in transit. VoIP is for voice communications, STP is not a standard printing protocol, and Web2Print is a general commercial printing concept, not a Windows security feature."
  },
  218: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Your computer is running slower than usual. Where should you look to find out which applications are consuming the maximum number of resources?",
    options: ["Administrative Tools", "Device Manager", "Network and Sharing Center", "System Tray", "Task Manager"],
    answer: "Task Manager",
    explanation: "Windows Task Manager (Ctrl+Shift+Esc) displays real-time information about CPU, memory, disk, and network usage by all running processes and applications. The Performance and Processes tabs let you identify which applications are consuming the most resources. Device Manager handles hardware, Network and Sharing Center manages connections, and Administrative Tools provides system administration utilities."
  },
  219: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You need a script to run at a specific time. Which Windows component should you use?",
    options: ["Event Viewer", "Device Manager", "Task Scheduler", "Task Manager"],
    answer: "Task Scheduler",
    explanation: "Windows Task Scheduler allows you to create and manage tasks that run automatically at specific times, on startup, on user login, or triggered by events. It can execute scripts, programs, or commands on a precise schedule. Event Viewer logs system events, Device Manager manages hardware, and Task Manager monitors running processes - none can schedule automated tasks."
  },
  220: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which feature allows you to change the display resolution of a computer monitor?",
    options: ["Appearance and Personalization", "Device Manager", "Computer Management Console", "System Configuration Tool"],
    answer: "Appearance and Personalization",
    explanation: "Display resolution is changed through Control Panel -> Appearance and Personalization -> Display -> Screen Resolution (or in Windows 10/11, Settings -> System -> Display). Device Manager handles driver-level hardware management but not user-facing display settings. The Management Console and System Configuration Tool serve other administrative purposes."
  },
  221: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "BitLocker prevents:",
    options: [
      "unauthorized access to files",
      "programs from accessing the memory of other programs",
      "the operating system from overwriting protected sectors on the hard disk drive",
      "unauthorized users from accessing the Internet"
    ],
    answer: "unauthorized access to files",
    explanation: "BitLocker Drive Encryption encrypts entire drive volumes, preventing unauthorized access to data if a drive is removed or a computer is lost or stolen. Without the BitLocker key or PIN, the encrypted data is unreadable. It does not control memory access between programs (that's DEP/ASLR), doesn't protect disk sectors from OS overwriting, and doesn't restrict Internet access."
  },
  222: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You want to use the cloud computing service over your organization. Which of the following is the biggest security control loss with cloud computing?",
    options: [
      "Physical control loss over data",
      "Backup control loss over data",
      "Administrative access loss to data",
      "Logical control loss over data"
    ],
    answer: "Physical control loss over data",
    explanation: "When data moves to the cloud, the organization loses physical control over the hardware where data is stored. You cannot physically secure, inspect, or control the servers in a cloud provider's data center. While logical and administrative controls remain (to varying degrees), physical security is entirely delegated to the cloud provider, representing the most fundamental security control loss."
  },
  223: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You need to find out whether your computer has received the most recent critical Windows updates. What should you do?",
    options: [
      "From Control Panel, use Programs.",
      "From Administration Tools, view Event Logs",
      "From the Computer Management console, view Services and Applications.",
      "From Windows Update, select View Update History."
    ],
    answer: "From Administration Tools, view Event Logs",
    explanation: "To check what Windows updates have been applied, the most direct method is Windows Update -> View Update History, which shows all installed updates with dates. Event Logs also records update installation events under Windows Logs -> System or Application. The stated answer is Event Logs, which is a valid method to review update activity and any errors during installation."
  },
  224: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which feature should you use to install the most recent definitions for Windows Defender?",
    options: ["Sync Center", "Programs and Features", "Windows Update", "Windows Installer"],
    answer: "Windows Update",
    explanation: "Windows Update is the primary mechanism for distributing Windows Defender definition updates (malware signature databases). It automatically downloads and installs the latest definitions to keep your malware protection current. You can also update manually within Windows Defender itself. Sync Center manages offline files, Programs and Features handles app management, and Windows Installer is a package installation service."
  },
  225: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "Which of the following steps will you take to configure automatic updates? Choose all that apply.",
    options: [
      "Open the Control Panel and click System and Security.",
      "Under Windows Update, click 'Turn automatic updating on or off'. The Change Settings window opens.",
      "Configure the update options as needed and click OK.",
      "Open the Control Panel and click Add or Remove Program."
    ],
    answer: [
      "Open the Control Panel and click System and Security.",
      "Under Windows Update, click 'Turn automatic updating on or off'. The Change Settings window opens.",
      "Configure the update options as needed and click OK."
    ],
    explanation: "Configuring automatic updates in Windows requires: (1) Control Panel -> System and Security, (2) Under Windows Update, click 'Turn automatic updating on or off', (3) Configure the settings (e.g., Install updates automatically) and click OK. 'Add or Remove Programs' is unrelated to update configuration - it manages installed applications."
  },
  226: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Your computer is slow to start, and file access in Windows is slow. Which Windows feature should you use to improve performance?",
    options: ["System Restore", "Disk Format", "Disk Defragmenter", "Windows Defender"],
    answer: "System Restore",
    explanation: "Note: The ideal answer for slow startup and file access is Disk Defragmenter, which reorganizes fragmented files on the hard drive so the disk head doesn't have to travel as far to read/write data, improving speed. System Restore returns the system to a previous state and would not address performance issues caused by fragmentation. The given answer (System Restore) appears to be a discrepancy in the source material."
  },
  227: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "PowerShell is used to:",
    options: ["extend the life of the battery", "monitor user keystroke", "repair damaged hard disk drive sectors", "automate a routine task"],
    answer: "automate a routine task",
    explanation: "Windows PowerShell is a task automation and configuration management framework consisting of a command-line shell and scripting language. It is used by administrators and developers to automate repetitive tasks, manage systems, configure settings, and run complex scripts. It does not extend battery life, monitor keystrokes, or repair disk sectors."
  },
  228: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You need to upgrade your computer from the FAT file system to an NTFS file system. What should you do?",
    options: [
      "Use the Convert C:/fs:ntfs command.",
      "Clear the hard disk drive by using the Format tool.",
      "Use the Backup and Restore tool.",
      "Run the Windows Easy Transfer tool."
    ],
    answer: "Use the Convert C:/fs:ntfs command.",
    explanation: "The Windows 'convert' command-line tool converts a FAT or FAT32 volume to NTFS without erasing the existing data. The syntax is: convert C: /fs:ntfs. Formatting with Format tool would erase all data. Backup and Restore is for data backup, and Windows Easy Transfer moves user files between computers - neither converts the file system."
  },
  229: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Windows Aero is a:",
    options: ["desktop theme", "Windows application", "device driver", "pointing device"],
    answer: "desktop theme",
    explanation: "Windows Aero (introduced in Windows Vista) is a visual design language and desktop theme featuring translucent glass-like window borders, animated transitions, live thumbnails in the taskbar, and the Flip 3D window switcher. It is a graphical user interface style/theme, not an application, driver, or hardware device."
  },
  230: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which feature ensures that your personal computer always has the latest patches and fixes for the operating system?",
    options: ["Reliability and Performance Monitor", "Programs and Features", "Windows Update", "System Configuration Utility"],
    answer: "Windows Update",
    explanation: "Windows Update is Microsoft's update service that automatically downloads and installs security patches, bug fixes, feature updates, and driver updates for Windows and Microsoft software. Configuring it to run automatically ensures the system stays current. Reliability Monitor tracks stability, Programs and Features manages apps, and System Configuration manages startup - none deliver OS patches."
  },
  231: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "IPsec adds overhead for all network communications for which it is used.",
    options: ["YES", "NO"],
    answer: "YES",
    explanation: "IPsec (Internet Protocol Security) adds computational and network overhead because it must encrypt, authenticate, and sometimes compress each packet. This includes the processing time for cryptographic operations and additional bytes added to packets for authentication headers (AH) and encapsulating security payloads (ESP). The overhead is the tradeoff for strong network-layer security."
  },
  232: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which enables you to change the permissions on a folder?",
    options: ["Take ownership", "Auditing", "Modify", "Extended attributes"],
    answer: "Modify",
    explanation: "The 'Modify' NTFS permission grants users the ability to read, write, execute, and delete files and folders - and includes the ability to change permissions (when combined with appropriate rights). 'Take Ownership' changes who owns the object, 'Auditing' tracks access events in logs, and 'Extended attributes' stores extra metadata. 'Modify' is the permission level that encompasses changing folder contents."
  },
  233: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "User Account Control (UAC) reduces your permission to that of a standard user unless higher permissions are necessary.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "UAC implements the principle of least privilege by running all users, including administrators, with standard user-level permissions by default. When an operation requires elevated privileges (like installing software), UAC prompts for confirmation. This limits the damage that malware or mistakes can cause by preventing unauthorized privilege escalation."
  },
  234: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You can view the audit logs in the Event Viewer.",
    options: ["YES", "NO"],
    answer: "YES",
    explanation: "Windows Event Viewer is the central tool for reviewing audit logs. Security audit events (such as logon attempts, object access, policy changes) are recorded in the Security log within Event Viewer. Administrators can filter, search, and analyze these logs to review system activity, detect intrusions, and fulfill compliance requirements."
  },
  235: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Your password is 1Vu*cI!8sT. Which attack method is your password vulnerable to?",
    options: ["Spidering", "Brute force", "Dictionary", "Rainbow table"],
    answer: "Rainbow table",
    explanation: "A rainbow table attack uses precomputed tables of hash values to reverse-engineer passwords from their hashed form. Even complex passwords like '1Vu*cI!8sT' are vulnerable if the hash is stored without a salt, because the hash might already exist in a rainbow table. Brute force would take enormous time with this complexity, dictionary attacks target recognizable words, and spidering targets company-specific terms."
  },
  236: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "A network sniffer is software or hardware that:",
    options: [
      "Captures and analyzes network communication",
      "Records user activity and transmits it to the server",
      "Protects workstations from intrusions",
      "Catalogs network data to create a secure index"
    ],
    answer: "Captures and analyzes network communication",
    explanation: "A network sniffer (also called a packet analyzer or protocol analyzer) captures and inspects network packets passing through a network interface. Tools like Wireshark are legitimate sniffers used by administrators for troubleshooting, while malicious actors use them to capture sensitive data like passwords. They do not protect systems or catalog data for indexing."
  },
  237: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "An employee can see an intranet site, but ActiveX controls will not load. What do you have to do?",
    options: [
      "Change the security level on the Local Intranet",
      "Change the security level on the Internet",
      "Uncheck enabled protected mode."
    ],
    answer: "Change the security level on the Local Intranet",
    explanation: "Internet Explorer uses separate security zones for different types of sites. Intranet sites fall under the 'Local Intranet' zone. If the security level for this zone is set too high, ActiveX controls will be blocked. Lowering the security level for the Local Intranet zone (not the Internet zone) will allow the ActiveX controls on the intranet site to load properly."
  },
  238: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "To prevent users from copying data to removable media, you should:",
    options: ["Apply a group policy", "Store media in a locked room", "Lock the computer cases", "Disable copy and paste"],
    answer: "Apply a group policy",
    explanation: "Group Policy allows administrators to centrally configure and enforce security settings across all computers in a domain, including disabling or restricting access to removable storage devices (USB drives, CD/DVD drives). This is a scalable, enforceable, and management-friendly solution. Physical measures like locking cases or storing media are impractical and easily circumvented."
  },
  239: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "What is a service set identifier (SSID)?",
    options: [
      "The broadcast name of an access point",
      "The wireless LAN transmission type",
      "A wireless security protocol",
      "A wireless encryption standard"
    ],
    answer: "The broadcast name of an access point",
    explanation: "An SSID (Service Set Identifier) is the human-readable name of a wireless network (Wi-Fi network). Access points broadcast the SSID so devices can discover and connect to the network. It is not a protocol, encryption standard, or transmission type - it is simply the identifier/name that users see when scanning for available wireless networks."
  },
  240: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "E-mail bombing attacks a specific entity by:",
    options: [
      "Sending high volumes of e-mail",
      "Triggering high levels of security alerts",
      "Redirecting all e-mail to another entity",
      "Tracing e-mail to the destination address"
    ],
    answer: "Sending high volumes of e-mail",
    explanation: "An email bombing (also called a mail bomb) attack floods a target's email inbox with massive volumes of messages, overwhelming the mail server or rendering the inbox unusable. This is a type of Denial of Service (DoS) attack specifically targeting email systems. It does not involve redirection, tracing, or triggering security alerts directly."
  },
  241: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Role separation improves server security by:",
    options: [
      "Placing servers on separate VLANs.",
      "Installing applications on separate hard disks.",
      "Physically separating high security servers from other servers.",
      "Enforcing the principle of least privilege."
    ],
    answer: "Enforcing the principle of least privilege.",
    explanation: "Role separation means each user, service, or system has only the permissions necessary for their specific job function. This enforces the principle of least privilege - minimizing the damage that can occur if an account is compromised. If an attacker gains access to a limited role, they cannot access other system functions. VLAN separation is a network segmentation technique, not role-based security."
  },
  242: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "What is a common method for password collection?",
    options: ["Back door intrusions", "Network sniffers", "SQL Injection", "Email attachments"],
    answer: "Network sniffers",
    explanation: "Network sniffers (packet analyzers) can intercept and capture passwords transmitted over a network in plaintext. This is particularly effective against unencrypted protocols like HTTP, FTP, and Telnet. When a user logs in over such a connection, the sniffer captures the credentials as they pass through the network. This is why encrypted protocols (HTTPS, SFTP, SSH) are essential."
  },
  243: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "To protect users from untrusted browser pop-ups, you may set a default browser configuration that blocks all pop-ups and automated downloads.",
    options: ["YES", "NO"],
    answer: "NO",
    explanation: "Blocking all pop-ups is not fully sufficient to protect against all malicious pop-ups because some content can still generate pop-ups through JavaScript or bypass basic pop-up blockers. Additionally, blocking all pop-ups may interfere with legitimate website functionality. The answer is NO because this statement oversimplifies the protection - user awareness and additional security layers are also needed."
  },
  244: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "You are working remotely and need secure access to company data with the same privileges as in the office. What two connection methods could you use?",
    options: ["Virtual Private Network (VPN)", "Remote Access Service (RAS)", "Forward Proxy", "Roaming Profiles"],
    answer: ["Virtual Private Network (VPN)", "Roaming Profiles"],
    explanation: "A VPN creates an encrypted tunnel over the Internet that gives remote workers the same secure network access as if they were physically in the office. Roaming Profiles store user settings and data on a server so users have consistent access to their profile from any domain computer. RAS is outdated, and a Forward Proxy routes outbound internet traffic but doesn't provide the same internal network privileges."
  },
  245: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You need to prevent unauthorized users from reading a specific file on a portable computer if the portable computer is stolen. What should you implement?",
    options: ["BitLocker", "Folder-level permissions", "Advanced Encryption Standard (AES)", "File-level permissions", "Distributed File System (DFS)"],
    answer: "BitLocker",
    explanation: "BitLocker encrypts the entire drive volume, making all data unreadable without the correct decryption key. If a laptop is stolen and the drive is removed or accessed by another OS, BitLocker prevents data access. NTFS permissions (folder/file level) can be bypassed by booting from another OS. AES is an encryption algorithm, not a user-facing implementation. DFS is for distributed file access."
  },
  246: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "What are three major attack vectors that a social engineering hacker may use?",
    options: ["Honey pot systems", "Waste management", "Reverse social engineering", "Telephone", "Firewall interface"],
    answer: ["Waste management", "Reverse social engineering", "Telephone"],
    explanation: "Social engineering attack vectors include: (1) Waste management / dumpster diving - searching discarded documents for sensitive information, (2) Reverse social engineering - the attacker poses as a technical expert so victims come to them with sensitive information, and (3) Telephone / vishing - impersonating authority figures over the phone to extract information. Honey pots are defensive tools, and firewalls are technical (not social) attack surfaces."
  },
  247: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "BitLocker to Go Reader allows you to encrypt drives.",
    options: ["NO", "YES"],
    answer: "NO",
    explanation: "BitLocker to Go Reader is a read-only application that allows users on Windows XP and Vista to read drives encrypted with BitLocker to Go. It does NOT encrypt drives. Encryption is performed by the full BitLocker to Go feature available in Windows 7 (Enterprise/Ultimate) and later. The Reader is only for reading already-encrypted removable drives on older systems."
  },
  248: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Windows Server Update Services (WSUS) is a tool that:",
    options: [
      "Manages updates for Microsoft software",
      "Updates licensing for Windows servers",
      "Updates data stored in Windows servers",
      "Manages the services that run on a server"
    ],
    answer: "Manages updates for Microsoft software",
    explanation: "WSUS (Windows Server Update Services) is a free Microsoft tool that allows network administrators to centrally manage the distribution of updates for Microsoft products (Windows, Office, SQL Server, etc.) to computers on their network. Rather than each computer downloading updates directly from Microsoft, they download from the internal WSUS server, saving bandwidth and giving administrators control over which updates are deployed."
  },
  249: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The purpose of a digital certificate is to verify that a:",
    options: [
      "Public key belongs to a sender.",
      "Digital document is complete.",
      "Computer is virus-free.",
      "Private key belongs to a sender."
    ],
    answer: "Public key belongs to a sender.",
    explanation: "A digital certificate (issued by a Certificate Authority) binds a public key to the identity of its owner. When you receive someone's public key in a certificate, you can trust that the key genuinely belongs to the named person or organization (not an impersonator). Private keys are never shared or verified through certificates - only public keys are."
  },
  250: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "A mail system administrator scans for viruses in incoming emails to [increase the speed of mail processing]. Select the correct answer if the underlined text does not make the statement correct.",
    options: [
      "Ensure that all links in the messages are trustworthy",
      "Decrease the chances of a virus getting to a client machine",
      "Verify that the senders of the messages are legitimate",
      "No change is needed."
    ],
    answer: "Decrease the chances of a virus getting to a client machine",
    explanation: "Scanning incoming emails for viruses does NOT increase mail processing speed - it actually adds slight latency. The correct purpose of virus scanning on a mail server is to decrease the chances of a virus reaching client machines. By filtering malware at the server level, infected emails are quarantined before reaching users' inboxes."
  },
  251: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "To implement WPA2 Enterprise, you would need a/an:",
    options: ["WEP server", "SSL server", "RADIUS server", "VPN server"],
    answer: "RADIUS server",
    explanation: "WPA2 Enterprise (also called WPA2-802.1X) uses a RADIUS (Remote Authentication Dial-In User Service) server for centralized authentication. Unlike WPA2 Personal which uses a shared passphrase, WPA2 Enterprise requires each user to authenticate with their own credentials through the RADIUS server using protocols like EAP. This provides stronger, per-user authentication tracking and management."
  },
  252: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "When users visit your school web server, they get a certificate error saying the site is not trusted. What should you do to fix this?",
    options: [
      "Use a digital signature.",
      "Generate a certificate request.",
      "Install a certificate from a trusted Certificate Authority (CA).",
      "Enable Public Keys on your website."
    ],
    answer: "Install a certificate from a trusted Certificate Authority (CA).",
    explanation: "Certificate errors occur when a website's SSL/TLS certificate is self-signed or issued by an untrusted CA not in the browser's trusted root store. To fix this, you must obtain a certificate issued by a publicly trusted Certificate Authority (like DigiCert, Let's Encrypt, Comodo), which browsers recognize and trust by default. Generating a self-signed request alone won't resolve the trust issue."
  },
  253: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "Which two are included in an enterprise antivirus program?",
    options: ["On-demand scanning", "Attack surface scanning", "Packet scanning", "Scheduled scanning"],
    answer: ["On-demand scanning", "Scheduled scanning"],
    explanation: "Enterprise antivirus programs include: (1) On-demand scanning - allows users or admins to manually trigger a scan at any time, and (2) Scheduled scanning - automatically runs scans at configured times (e.g., daily at midnight). Attack surface scanning is a security assessment concept, not a standard AV feature. Packet scanning is a firewall/IDS function."
  },
  254: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which is a special folder permission?",
    options: ["Modify", "Read", "Delete", "Write"],
    answer: "Delete",
    explanation: "In NTFS, standard permissions (Read, Write, Read & Execute, Modify, Full Control, List Folder Contents) are combinations of special permissions. 'Delete' is one of the granular special permissions available when you click 'Advanced' in the Security tab. The standard permissions like Read, Write, and Modify are built from combinations of these special permissions."
  },
  255: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "To protect systems from buffer overflow errors, you can use:",
    options: ["An Intruder Prevention System", "A proxy server", "Data Execution Prevention", "Antivirus software"],
    answer: "Data Execution Prevention",
    explanation: "Data Execution Prevention (DEP) is a hardware and software security feature that marks certain memory regions as non-executable. This prevents buffer overflow attacks where malicious code is injected into data areas of memory and then executed. DEP causes the system to raise an exception and terminate the program if it attempts to execute code from a non-executable memory region."
  },
  256: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Clients can verify that the DNS server that they are communicating with is legitimate.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "With DNSSEC (Domain Name System Security Extensions), clients can verify the authenticity and integrity of DNS responses. DNSSEC uses digital signatures to ensure that DNS data hasn't been tampered with and comes from the legitimate DNS server. Without DNSSEC, DNS responses can be spoofed (DNS poisoning attacks). Modern implementations do allow this verification."
  },
  257: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "A system access control list (SACL) enables administrators to log attempts to access a secured object.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "A System Access Control List (SACL) is the component of a Windows security descriptor that specifies which types of access attempts should be audited and logged. Unlike a DACL (Discretionary ACL) which controls who can access an object, a SACL determines what access events get recorded in the Security event log, enabling security auditing of files, folders, registry keys, and other objects."
  },
  258: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "In Internet Explorer 8, the InPrivate Browsing feature prevents:",
    options: [
      "Any session data from being stored on the computer.",
      "Unauthorized private data input.",
      "User credentials from being sent over the Internet.",
      "Unencrypted communication between the client computer and the server."
    ],
    answer: "Any session data from being stored on the computer.",
    explanation: "InPrivate Browsing mode in Internet Explorer prevents browsing history, cookies, temporary internet files, form data, and other session information from being saved on the local computer after the session ends. It does NOT prevent your ISP, employer, or websites from seeing your activity. It only ensures local privacy on the machine you're using."
  },
  259: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "BitLocker to work on Windows Vista and Windows XP.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "BitLocker Drive Encryption was introduced in Windows Vista (for encrypting the OS drive) and Windows Vista/Windows 7 for data drives. BitLocker to Go (for removable drives) was introduced in Windows 7. Windows XP can read BitLocker to Go encrypted drives using the BitLocker to Go Reader tool, but cannot natively create BitLocker encryption. Full BitLocker does work on Vista."
  },
  260: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The default password length for a Windows Server domain controller is:",
    options: ["5", "0", "14", "7"],
    answer: "7",
    explanation: "By default, a Windows Server domain controller requires a minimum password length of 7 characters. This is defined in the Default Domain Password Policy. Administrators can increase this requirement through Group Policy. A minimum of 7 characters combined with complexity requirements (which are enabled by default on DCs) helps enforce reasonably secure passwords."
  },
  261: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "If your computer is on a domain, your network administrator can reset your password.",
    options: ["YES", "NO"],
    answer: "YES",
    explanation: "In a Windows Active Directory domain environment, domain administrators have the authority to reset passwords for any user account in the domain. This is managed through Active Directory Users and Computers (ADUC) or the newer Active Directory Administrative Center. This is a key reason domain accounts have more administrative oversight than local accounts."
  },
  262: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "An administrator account can reset a password for a standard user account.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "An administrator account has elevated privileges that include the ability to reset passwords for standard user accounts on the same computer (local administrator) or within the domain (domain administrator). This is a fundamental administrative capability needed for account management and user support situations where users are locked out."
  },
  263: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Humongous Insurance needs a domain controller in a branch office that cannot be physically secured. They are installing a [Primary Domain Controller]. Is this correct?",
    options: ["Read-Only Domain Controller", "No change is needed.", "Backup Domain Controller", "Active Directory Server"],
    answer: "Read-Only Domain Controller",
    explanation: "When a domain controller cannot be physically secured (e.g., in a branch office), a Read-Only Domain Controller (RODC) should be used. An RODC holds a read-only copy of Active Directory, so even if it is compromised, attackers cannot modify domain data. A Primary Domain Controller (PDC) holds the full writable database and should never be placed in unsecured locations."
  },
  264: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "BitLocker to Go Reader requires drives that are encrypted using a password.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "BitLocker to Go Reader (used on Windows XP to read BitLocker to Go encrypted drives) requires that the removable drive was encrypted with a password unlock method. Without a password protector configured during encryption, the BitLocker to Go Reader cannot unlock and read the drive on older operating systems."
  },
  265: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Network Access Protection (NAP) enables administrators to control access to network resources based on a computer's:",
    options: ["Physical location", "Warranty", "Encryption level", "Configuration"],
    answer: "Configuration",
    explanation: "NAP (Network Access Protection) is a Microsoft technology that evaluates a client computer's health state (configuration) when it attempts to connect to the network. It checks items like firewall status, antivirus update status, OS patch levels, and other policy requirements. Computers that don't meet the configured health requirements can be isolated or directed to a remediation network."
  },
  266: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "A group of users has access to Folder A and all of its contents. You need to prevent some users from accessing a subfolder inside Folder A. What should you do first?",
    options: ["Disable folder sharing", "Hide the folder", "Block inheritance", "Change the owner"],
    answer: "Disable folder sharing",
    explanation: "To restrict access to a subfolder when the parent folder is shared, you first need to block permission inheritance on the subfolder. This prevents the parent's permissions from automatically flowing down. Then you can set explicit deny permissions for specific users on the subfolder. Note: The stated answer is 'Disable folder sharing' but 'Block inheritance' is the technically correct first step for NTFS permission management."
  },
  267: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "What is an example of non-propagating malicious code?",
    options: ["A worm", "A hoax", "A Trojan horse", "A back door"],
    answer: "A back door",
    explanation: "Non-propagating malicious code does not spread or replicate itself to other systems. A back door is a hidden access method left in software that allows unauthorized access but does not spread on its own. Worms are self-propagating. Trojan horses can carry payloads that spread. A hoax is not code at all. A back door simply provides unauthorized access without self-replication."
  },
  268: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The first line of defense against attacks from the Internet is a [software firewall]. Is this correct?",
    options: ["No change is needed", "hardware firewall", "virus software", "radius server"],
    answer: "hardware firewall",
    explanation: "The first line of defense against Internet attacks is a hardware firewall (such as a dedicated perimeter firewall or router with firewall capabilities) positioned at the network edge, before traffic reaches any internal systems. A software firewall runs on individual hosts and is a secondary defense layer. Hardware firewalls filter traffic at the network perimeter before it ever reaches internal computers."
  },
  269: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "User Account Control (UAC) notifies you when additional permissions are required and asks if you wish to continue.",
    options: ["YES", "NO"],
    answer: "YES",
    explanation: "UAC is designed to notify users when an action requires administrative privileges. A dialog box appears prompting the user to either confirm (if they are an admin) or enter admin credentials (if they are a standard user). This prevents unauthorized or accidental elevation of privileges and gives users control over what gets administrator access on their system."
  },
  270: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Alice sends her password to the game server in plaintext. Chuck is able to observe her password. The scenario demonstrated is a(n) __________________ attack.",
    options: ["denial of service", "eavesdropping", "man in the middle"],
    answer: "eavesdropping",
    explanation: "This is an eavesdropping (passive) attack. Chuck is passively listening to network traffic and capturing Alice's plaintext password - he is not actively modifying the communication. A man-in-the-middle attack would involve Chuck intercepting and potentially altering messages between Alice and the server. A denial of service attack would disrupt availability, not steal credentials."
  },
  271: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "As a general practice of hardening a server, you start by performing which two tasks?",
    options: ["Rename the admin account.", "Remove the account lockout policy.", "Format partitions with FAT32.", "Disable the guest account."],
    answer: ["Rename the admin account.", "Disable the guest account."],
    explanation: "Server hardening best practices include: (1) Renaming the built-in Administrator account - attackers know it exists by default, so renaming it adds a layer of obscurity, and (2) Disabling the Guest account - unused accounts are potential attack vectors. Removing lockout policies weakens brute force protection, and FAT32 lacks NTFS security features needed for servers."
  },
  272: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "When conducting a security audit the first step is to:",
    options: [
      "Set up a virus quarantine area",
      "Inventory the company's technology assets",
      "Install auditing software on your servers",
      "Set up the system logs to audit security events"
    ],
    answer: "Inventory the company's technology assets",
    explanation: "The first step in a security audit is always to inventory the company's technology assets. You cannot secure or audit what you don't know exists. This includes all hardware, software, network devices, data stores, and services. Once you have a complete asset inventory, you can assess vulnerabilities, set up auditing, and establish security policies appropriately."
  },
  273: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Phishing is an attempt to:",
    options: [
      "Obtain information by posing as a trustworthy entity.",
      "Corrupt e-mail databases through the use of viruses.",
      "Steal data through the use of network intrusion.",
      "Limit access to e-mail systems by authorized users."
    ],
    answer: "Obtain information by posing as a trustworthy entity.",
    explanation: "Phishing is a social engineering attack where attackers impersonate a trustworthy entity (bank, IT department, popular website) to trick victims into providing sensitive information like passwords, credit card numbers, or personal data. It is typically carried out via deceptive emails, websites, or messages. It is not a technical network attack or virus-based corruption."
  },
  274: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Because senior executives have rights to access sensitive data, they should use administrator accounts.",
    options: ["YES", "NO"],
    answer: "NO",
    explanation: "Even senior executives should follow the principle of least privilege. Having access rights to view sensitive data does not require an administrator account. Administrator accounts have extensive system-level privileges that far exceed what executives need for their work, and using them for daily tasks creates unnecessary security risk. Executives should have standard user accounts with appropriate data access permissions."
  },
  275: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "IPsec encrypts data.",
    options: ["YES", "NO"],
    answer: "YES",
    explanation: "IPsec (Internet Protocol Security) provides encryption at the network layer (Layer 3) of the OSI model. It uses the ESP (Encapsulating Security Payload) protocol to encrypt packet payloads, ensuring confidentiality of data in transit. It can also provide authentication and integrity using the AH (Authentication Header) protocol. IPsec can operate in Transport mode or Tunnel mode."
  },
  276: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The WPA2 PreShared Key (PSK) is created by using a passphrase and salting it with the [WPS PIN]. Is this correct?",
    options: ["Admin password", "Service Set Identifier (SSID)", "WEP key", "No change is needed"],
    answer: "Service Set Identifier (SSID)",
    explanation: "The WPA2-PSK (Pre-Shared Key) is derived from the passphrase combined with (salted by) the SSID using the PBKDF2 function. The SSID acts as the cryptographic salt to make the key unique per network. This is why using a unique SSID matters - common SSIDs like 'linksys' have precomputed rainbow tables. The WPS PIN is a different, weaker authentication method."
  },
  277: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "To log each time the computer validates your account credentials, which policy needs to be enabled?",
    options: ["Audit Object Access", "Audit account logon events", "Audit logon events"],
    answer: "Audit account logon events",
    explanation: "'Audit account logon events' records events on the domain controller when a domain account is authenticated - i.e., when credentials are validated. 'Audit logon events' records local logon/logoff events on the local machine. Since the question asks specifically about validating account credentials, 'Audit account logon events' is the correct policy to enable."
  },
  278: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Bridging is a process of sending packets from source to destination on OSI layer 3. Is this correct?",
    options: ["Routing", "Switching", "Repeating", "No change is needed."],
    answer: "Routing",
    explanation: "Routing operates at OSI Layer 3 (Network layer) and forwards packets between different networks based on IP addresses. Bridging and Switching operate at Layer 2 (Data Link layer) using MAC addresses within the same network segment. Repeating operates at Layer 1 (Physical layer). The statement should say 'Routing' since it describes Layer 3 packet forwarding between networks."
  },
  279: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You need to install a domain controller in a branch office that you cannot physically secure. What should you implement?",
    options: [
      "Read-Only Domain Controller",
      "Layer 2 Tunneling Protocol (L2TP)",
      "Server Core Domain Controller",
      "Point-to-Point Tunneling Protocol (PPTP)"
    ],
    answer: "Read-Only Domain Controller",
    explanation: "A Read-Only Domain Controller (RODC) is specifically designed for deployment in locations where physical security cannot be guaranteed. It holds a read-only replica of Active Directory - no changes can be written to it. If an RODC is compromised, an attacker cannot modify the domain database. RODC also uses credential caching policies to limit the impact of theft."
  },
  280: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "To enable auditing of all local events on workstations not in a domain, which Advanced Audit Policy should you turn on?",
    options: ["Logon/Logoff", "System", "Account Logon"],
    answer: "Account Logon",
    explanation: "For standalone workstations (not domain members), the 'Account Logon' Advanced Audit Policy category audits credential validation for local accounts. On domain-joined machines, account logon events are logged on the domain controller. On standalone machines, enabling 'Account Logon' captures all authentication events for local accounts."
  },
  281: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "There is a risk of losing access to encrypted files if a password is reset.",
    options: ["YES", "NO"],
    answer: "YES",
    explanation: "When EFS (Encrypting File System) is used, the encryption keys are tied to the user's certificate and private key, which are linked to the account's credentials. If a password is forcibly reset (by an administrator, not by the user through normal means), the private key may become inaccessible, locking the user out of their encrypted files permanently - unless a recovery agent or key backup exists."
  },
  282: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "IPsec requires network applications to be IPsec aware.",
    options: ["NO", "YES"],
    answer: "NO",
    explanation: "One of the major advantages of IPsec is that it operates transparently at the network layer (Layer 3), meaning applications do not need to be modified or made 'IPsec aware' to benefit from its protection. IPsec is handled by the OS networking stack, encrypting and authenticating packets below the application layer. Applications simply send data normally while IPsec handles security."
  },
  283: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "To allow a log file to be opened as an administrator from the Properties window, you should:",
    options: [
      "Click Advanced and choose 'run as administrator.'",
      "Click Run and choose 'run as administrator'",
      "Click on the Security tab and give admin rights to your standard account."
    ],
    answer: "Click Run and choose 'run as administer'",
    explanation: "In the file Properties window, clicking 'Run' provides the option to 'Run as administrator', allowing the application to launch with elevated privileges using provided admin credentials. This is the 'Run As' functionality in Windows. Modifying the Security tab to elevate a standard account's rights is a poor security practice and not the appropriate quick-access solution."
  },
  284: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "Cookies impact security by enabling: (Choose two.)",
    options: [
      "Higher security Web site protections.",
      "Storage of Web site passwords.",
      "Websites to track browsing habits.",
      "Secure Sockets Layer (SSL)."
    ],
    answer: ["Storage of Web site passwords.", "Websites to track browsing habits."],
    explanation: "Cookies can store website credentials (remembered passwords/session tokens) which, if stolen via XSS or other attacks, can be used to hijack accounts. Cookies are also used by websites and advertisers to track users' browsing habits across sessions and sites, raising privacy concerns. Cookies do not provide higher security protections or implement SSL/TLS - those are separate mechanisms."
  },
  285: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The Windows Firewall protects computers from unauthorized network connections. Is this correct?",
    options: ["Email viruses", "No change is needed", "Phishing scams", "Unencrypted network access"],
    answer: "No change is needed",
    explanation: "The statement is correct. Windows Firewall is a host-based stateful firewall that monitors and controls incoming and outgoing network connections based on configured rules. It does protect computers from unauthorized network connections by blocking traffic that doesn't match allowed rules. No change is needed to the underlined text."
  },
  286: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "The company wants to set up a secure network without any servers. Which three security methods require the use of a server?",
    options: [".802.1x", "WPA2 Personal", "802.11ac", "WPA2 Enterprise", "RADIUS"],
    answer: [".802.1x", "802.11ac", "RADIUS"],
    explanation: "Server-requiring security methods: (1) 802.1X requires an authentication server (RADIUS) for port-based access control, (2) WPA2 Enterprise requires a RADIUS server for per-user authentication, and (3) RADIUS itself is a centralized authentication server. Note: The question's listed answer includes 802.11ac which is actually a wireless standard (Wi-Fi speed), not a security method requiring a server - WPA2 Enterprise would be more logically correct."
  },
  287: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The Active Directory controls, enforces, and assigns security policies and access rights for all users. Is this correct?",
    options: ["User Account Control", "Registry", "NTFS permissions", "No change is needed"],
    answer: "No change is needed",
    explanation: "The statement is correct. Active Directory is the central directory service in Windows Server environments that manages and enforces security policies (through Group Policy), controls user authentication, and assigns access rights across the entire domain. It is the authoritative source for identity and access management in enterprise Windows networks."
  },
  288: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which type of firewall allows for inspection of all characteristics of a packet?",
    options: ["Stateless", "Windows Defender", "NAT", "Stateful"],
    answer: "Stateful",
    explanation: "A stateful firewall (also called a stateful inspection or dynamic packet filtering firewall) maintains a state table of active connections and inspects packets based on context - including source/destination IP, port, protocol, and the state of the connection. This allows it to make more intelligent decisions than stateless firewalls, which only examine individual packet headers without connection context."
  },
  289: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "System Administrators should use a standard user account when performing routine functions like reading emails and browsing the Internet.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "Following the principle of least privilege, even system administrators should use a standard user account for everyday tasks like email and web browsing. Admin credentials should only be used when specifically needed for administrative tasks. This minimizes the risk of malware gaining admin-level access if the user encounters a malicious email link or compromised website while using an admin account."
  },
  290: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which attack listens to network traffic of a computer resource?",
    options: ["Eavesdropping", "ARP poisoning", "Denial of service", "Logic bomb", "Resource gathering"],
    answer: "Eavesdropping",
    explanation: "Eavesdropping (also called sniffing or passive interception) involves silently monitoring and capturing network traffic without the knowledge of the communicating parties. Unlike active attacks that modify traffic, eavesdropping is passive. ARP poisoning redirects traffic, DoS disrupts availability, and logic bombs are delayed malware triggers - none simply listen to traffic."
  },
  291: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Before you deploy Network Access Protection (NAP), you must install:",
    options: [
      "Internet Information Server (IIS)",
      "Network Policy Server (NPS)",
      "Active Directory Federation Services",
      "Windows Update Service"
    ],
    answer: "Network Policy Server (NPS)",
    explanation: "Network Policy Server (NPS) is the prerequisite for NAP deployment. NPS acts as the RADIUS server and health policy server in a NAP infrastructure. It defines health policies, evaluates client health statements, and determines whether clients meet compliance requirements. Without NPS, NAP cannot function - it is the core component of the NAP architecture."
  },
  292: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Basic security questions used to reset a password are susceptible to:",
    options: ["Trojan horses", "Hashing", "Network sniffing", "Social engineering"],
    answer: "Social engineering",
    explanation: "Security questions (like 'What is your mother's maiden name?' or 'What was your first pet?') are susceptible to social engineering because attackers can often find this information through social media, public records, or by simply asking the person under a false pretense. This is why many security experts recommend using random, made-up answers for security questions."
  },
  293: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Domain Name System Security Extensions (DNSSEC) prevents man-in-the-middle attacks for DNS queries.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "DNSSEC adds cryptographic signatures to DNS records, allowing resolvers to verify that the DNS response came from the authoritative server and has not been tampered with. This prevents DNS cache poisoning and man-in-the-middle attacks where an attacker could redirect users to malicious servers by providing fake DNS responses."
  },
  294: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "To keep third-party content providers from tracking your movements on the web, enable [InPrivate Browsing]. Is this correct?",
    options: ["Compatibility Mode", "InPrivate Filtering", "SmartScreen Filter", "No change is needed"],
    answer: "InPrivate Filtering",
    explanation: "InPrivate Filtering (now called Tracking Protection in newer IE versions) specifically blocks third-party content providers from tracking your browsing across websites. InPrivate Browsing prevents local storage of session data but does not block third-party trackers. SmartScreen Filter protects against phishing and malware sites. For cross-site tracking prevention, InPrivate Filtering is the correct feature."
  },
  295: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "To make a new web server more secure, you should [add a second administrator account]. Is this correct?",
    options: ["Enable LM authentication", "No change is needed.", "Enable NTLM authentication", "Disable unused services"],
    answer: "Disable unused services",
    explanation: "Adding a second administrator account actually increases the attack surface by creating more privileged accounts to compromise. The correct hardening practice is to disable unused services - services that aren't needed represent unnecessary risk since they may contain vulnerabilities that attackers can exploit. Reducing the running services reduces the attack surface."
  },
  296: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Setting a minimum password age restricts when users can:",
    options: [
      "Request a password reset",
      "Set their own password expiration",
      "Change their passwords",
      "Log on by using their passwords"
    ],
    answer: "Change their passwords",
    explanation: "The Minimum Password Age policy setting defines how long (in days) a user must keep a password before they are allowed to change it. This prevents users from immediately cycling through passwords to get back to their favorite one, which would circumvent the password history policy. Without a minimum age, users could rapidly change passwords until they cycle back to the original."
  },
  297: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Password history policies are used to prevent:",
    options: [
      "Users from sharing passwords",
      "Brute force attacks",
      "Social engineering",
      "Passwords from being reused immediately"
    ],
    answer: "Passwords from being reused immediately",
    explanation: "Password history policy maintains a record of a user's previously used passwords and prevents them from reusing recent passwords. For example, a history of 24 means a user must use 24 different passwords before they can reuse an old one. This encourages true password rotation rather than trivial variations. It doesn't directly prevent sharing, brute force, or social engineering."
  },
  298: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The User Account Control (UAC) has one overall goal: to grant users the lowest level of permission required to complete their tasks.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "UAC's fundamental design goal is the enforcement of least privilege. By default, all users (including admins) run with standard user rights. Only when an operation specifically requires elevated permissions does UAC intervene and prompt for confirmation or admin credentials. This minimizes the potential damage from malware, bugs, or user mistakes by limiting what can be done with normal permissions."
  },
  299: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which technology enables you to filter communications between a program and the Internet?",
    options: ["Software firewall", "BitLocker To Go", "RADIUS server", "Antivirus software"],
    answer: "Software firewall",
    explanation: "A software firewall (host-based firewall) runs on individual computers and can filter network communications at the application level - allowing or blocking specific programs from accessing the Internet. Windows Firewall, for example, can be configured to allow or deny network access per application. BitLocker encrypts drives, RADIUS handles authentication, and antivirus detects malware."
  },
  300: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "A user who receives a large number of emails selling prescription medicine is probably receiving [pharming mail]. Is this correct?",
    options: ["No change is needed.", "Spoofed mail", "Malware", "Spam"],
    answer: "Spam",
    explanation: "Unsolicited bulk email advertising products (like prescription medicine) is spam. Pharming redirects users from legitimate websites to fraudulent ones by corrupting DNS or hosts file entries - it's not a type of email. Spoofed mail has a fake sender address, and malware contains or delivers malicious code. Mass commercial emails selling products = spam."
  },
  301: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Advanced audit policies applied by a Group Policy are compatible with a basic audit policy.",
    options: ["NO", "YES"],
    answer: "NO",
    explanation: "Advanced Audit Policy Configuration and basic (legacy) audit policies are NOT compatible. Microsoft warns that using both simultaneously on the same machine can cause unpredictable audit behavior. When Group Policy applies advanced audit policies, it can conflict with basic audit policy settings. Organizations should use one or the other, not both. Advanced audit policies offer more granular control."
  },
  302: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You can configure an email event notification for an audited activity.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "Windows supports configuring event-triggered tasks through Task Scheduler. You can create a task that triggers on a specific Event ID in the Security log (such as a failed login) and sends an email notification. While native Windows doesn't send emails directly from auditing, the combination of audit policies + Task Scheduler + email action enables this functionality."
  },
  303: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "User Account Control (UAC) cannot be disabled.",
    options: ["NO", "YES"],
    answer: "NO",
    explanation: "UAC can be disabled, though it is strongly discouraged. Administrators can turn UAC off through Control Panel -> User Accounts -> Change User Account Control settings (by moving the slider to 'Never notify') or via Group Policy or registry settings. Disabling UAC removes the protection that prevents unauthorized privilege escalation, significantly weakening system security."
  },
  304: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "What are two attributes in an email that should cause a user to question whether the message is a phishing attempt?",
    options: [
      "Use of bold and italics",
      "Spelling and grammar errors",
      "An image contained in the message",
      "Threats of losing service"
    ],
    answer: ["Spelling and grammar errors", "Threats of losing service"],
    explanation: "Common phishing indicators include: (1) Spelling and grammar errors - legitimate organizations proofread communications; errors suggest non-native speakers or rushed criminal operations, and (2) Threats of losing service - creating urgency ('Your account will be suspended') is a social engineering tactic to pressure users into acting without thinking. Bold/italics and images are used in both legitimate and phishing emails."
  },
  305: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "Which two security settings can be controlled by using group policy?",
    options: [
      "Encrypted access from a smart phone",
      "Automatic file locking",
      "Password complexity",
      "Access to the Run... command"
    ],
    answer: ["Password complexity", "Access to the Run... command"],
    explanation: "Group Policy (GPO) allows centralized management of many Windows settings including: (1) Password complexity requirements - enforcing length, character types, etc., and (2) Access to the Run command - you can use GPO to remove the Run option from the Start menu. Group Policy manages Windows desktop and security settings, not mobile device encryption or automatic file locking behaviors."
  },
  306: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "There are several built-in basic audit policies and advanced audit policies in Windows.",
    options: ["YES", "NO"],
    answer: "YES",
    explanation: "Windows includes both basic audit policies (9 categories in Local Security Policy -> Audit Policy) and advanced audit policies (53 subcategories in Advanced Audit Policy Configuration). The advanced policies provide more granular control over what gets audited. Both sets of policies are built into Windows and available without additional software."
  },
  307: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which is the minimum requirement to create BitLocker-To-Go media on a client computer?",
    options: [
      "Windows 7 Enterprise Edition",
      "Windows 2000 Professional Service Pack 4",
      "Windows Vista Enterprise Edition",
      "Windows XP Professional Service Pack 3"
    ],
    answer: "Windows XP Professional Service Pack 3",
    explanation: "Note: The ability to CREATE BitLocker to Go encrypted drives requires Windows 7 (Enterprise or Ultimate). Windows XP can only READ BitLocker to Go drives using the BitLocker to Go Reader app. The stated answer (Windows XP SP3) appears to be about the minimum to READ the media. For creating BitLocker to Go media, Windows 7 Enterprise is the correct minimum."
  },
  308: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You want to make your computer resistant to online hackers and malicious software. What should you do?",
    options: [
      "Configure a forward proxy.",
      "Turn on Windows Firewall.",
      "Install anti-virus software.",
      "Enable spam filtering."
    ],
    answer: "Install anti-virus software.",
    explanation: "While multiple measures provide defense in depth, installing anti-virus software is the most comprehensive answer for protecting against both online hackers (through behavior monitoring) and malicious software (through signature and heuristic detection). Windows Firewall alone blocks network access but doesn't detect malware already on the system or delivered through allowed channels like browsers."
  },
  309: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Keeping a server updated:",
    options: [
      "Fixes security holes",
      "Speeds up folder access",
      "Synchronizes the server",
      "Maximizes network efficiency"
    ],
    answer: "Fixes security holes",
    explanation: "Server updates (patches) primarily address known security vulnerabilities - 'security holes' in the OS, applications, and services that attackers could exploit. Security patches close these vulnerabilities by correcting the underlying code flaws. Updates may also fix bugs or add features, but their primary importance from a security standpoint is eliminating exploitable vulnerabilities."
  },
  310: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Many Internet sites require a user name and password. How do you secure these passwords?",
    options: [
      "Save them to an encrypted file",
      "Save them to a text file",
      "Reuse the same password",
      "Configure the browser to save passwords",
      "Enable session caching"
    ],
    answer: "Save them to an encrypted file",
    explanation: "Saving passwords to an encrypted file (or using an encrypted password manager) is the most secure practice. Plain text files can be read by anyone with file access. Reusing the same password means one breach compromises all accounts. Browser-saved passwords may not be encrypted or could be accessed by other users. An encrypted file requires a master password to access all stored credentials."
  },
  311: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You suspect a user's computer is infected by a virus. What should you do first?",
    options: [
      "Restart the computer in safe mode",
      "Install antivirus software on the computer",
      "Disconnect the computer from the network",
      "Replace the computer's hard disk drive"
    ],
    answer: "Install antivirus software on the computer",
    explanation: "Note: Best practice incident response typically starts with isolating the infected machine by disconnecting it from the network to prevent further spread. However, the listed answer is 'Install antivirus software', suggesting the scenario assumes no AV is present. Scanning with AV is necessary to identify and remove the virus. Disconnecting from the network should generally be the first containment step."
  },
  312: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The primary method of authentication in an SSL connection is [passwords]. Is this correct?",
    options: ["No change is needed", "Certificates", "Biometrics", "IPsec"],
    answer: "Certificates",
    explanation: "SSL/TLS authentication primarily relies on digital certificates (X.509 certificates) to verify the identity of the server (and optionally the client). During the SSL handshake, the server presents its certificate, which the client validates against trusted Certificate Authorities. Passwords are not the primary authentication mechanism in SSL - certificates and their underlying public key infrastructure are."
  },
  313: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Account lockout policies are used to prevent which type of security attack?",
    options: [
      "Brute force attacks",
      "Users sharing passwords",
      "Social engineering",
      "Passwords being reused immediately"
    ],
    answer: "Brute force attacks",
    explanation: "Account lockout policies lock a user account after a specified number of failed login attempts, directly countering brute force attacks that try many password combinations. By limiting attempts (e.g., 5 failed attempts = 30-minute lockout), brute force becomes impractical. Password history prevents reuse, social engineering education prevents manipulation, and sharing is an HR/policy issue."
  },
  314: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The purpose of Microsoft Baseline Security Analyzer is to:",
    options: [
      "Apply all current patches to a server.",
      "Set permissions to a default level.",
      "List system vulnerabilities.",
      "Correct a company's security state."
    ],
    answer: "List system vulnerabilities.",
    explanation: "Microsoft Baseline Security Analyzer (MBSA) is a free tool that scans Windows systems and identifies missing security updates, weak passwords, insecure configurations, and other security misconfigurations. It lists and reports vulnerabilities but does NOT automatically fix them - administrators must then remediate the identified issues manually or through other tools."
  },
  315: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Domain Name System Security Extensions (DNSSEC) prevents spoofing of query responses.",
    options: ["YES", "NO"],
    answer: "YES",
    explanation: "DNSSEC uses cryptographic digital signatures to sign DNS records. When a DNS resolver receives a response, it can validate the signature to verify the data came from the legitimate authoritative DNS server and hasn't been modified. This prevents DNS spoofing (cache poisoning) where attackers inject false DNS records to redirect users to malicious servers."
  },
  316: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "A digitally signed e-mail message:",
    options: ["Validates the recipient", "Validates the sender", "Is encrypted", "Is virus-free"],
    answer: "Validates the sender",
    explanation: "A digital signature on an email uses the sender's private key to create a cryptographic signature. Recipients can use the sender's public key to verify the signature, confirming the email genuinely came from the claimed sender and has not been altered in transit. A digital signature provides authentication and integrity but NOT confidentiality (encryption) or recipient verification."
  },
  317: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The certificate of a secure public web server on the Internet should be:",
    options: [
      "Issued by an enterprise certificate authority (CA)",
      "Issued by a public certificate authority (CA)",
      "Signed by using a 4096-bit key",
      "Signed by using a 1024-bit key"
    ],
    answer: "Issued by a public certificate authority (CA)",
    explanation: "Public-facing web servers need certificates from publicly trusted Certificate Authorities (like DigiCert, Comodo, Let's Encrypt) whose root certificates are pre-installed in browsers and operating systems worldwide. Enterprise CAs are only trusted within an organization's internal infrastructure. Using an enterprise CA for a public site would result in certificate warnings for external visitors."
  },
  318: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Coho Winery wants to set up a new webserver and avoid purchasing a new server. Which server is best to use, considering security and performance?",
    options: ["Application Server", "Domain Controller", "File Server", "SQL Server"],
    answer: "Domain Controller",
    explanation: "Note: This answer seems counterintuitive - domain controllers should NOT typically host web servers due to their sensitive role in authentication. The best practice answer would be a dedicated File Server repurposed as a web server, or the Application Server. The stated answer of Domain Controller appears to be an error in the source material; in practice, hosting web services on a DC is a security anti-pattern."
  },
  319: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "Which two characteristics should you recommend for a user's domain password?",
    options: [
      "Includes Unicode characters",
      "Hard to guess",
      "Easy to increment",
      "Easy to remember"
    ],
    answer: ["Hard to guess", "Easy to remember"],
    explanation: "A good password should be: (1) Hard to guess - using length, complexity, and avoiding personal information or dictionary words, and (2) Easy to remember - a password that's too complex to remember will be written down, defeating its purpose. 'Easy to increment' is a bad practice (Password1 -> Password2). Unicode characters add complexity but memorability is more critical for usability."
  },
  320: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Audit logs have a size limit and cannot be adjusted.",
    options: ["YES", "NO"],
    answer: "NO",
    explanation: "Audit log size limits in Windows can be adjusted through Event Viewer or Group Policy. For each log (Application, Security, System), you can configure the maximum size and the behavior when the log is full (overwrite events, archive the log, or stop recording new events). This allows administrators to balance storage constraints with audit retention requirements."
  },
  321: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which enables access to all of the logged-in user's capabilities on a computer?",
    options: ["Active Server Pages (ASP)", "Microsoft Silverlight", "ActiveX controls", "Java applets"],
    answer: "ActiveX controls",
    explanation: "ActiveX controls are software components that can run in Internet Explorer with access to all the capabilities and resources available to the logged-in user's account. This gives them significant power - and significant risk, as malicious ActiveX controls can perform nearly any action the user is authorized to do. This is why ActiveX has strong security zone controls in IE."
  },
  322: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "FAT32 has built-in security features that control user access.",
    options: ["NO", "YES"],
    answer: "NO",
    explanation: "FAT32 (File Allocation Table 32) does NOT have built-in security or permission features. Any user who can access the volume can read, modify, or delete any file. FAT32 was designed for simplicity and compatibility, not security. NTFS (New Technology File System) is the Windows file system that supports Access Control Lists (ACLs) for granular user/group permission management."
  },
  323: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "NTFS has built-in security features that control file access.",
    options: ["YES", "NO"],
    answer: "YES",
    explanation: "NTFS (New Technology File System) includes built-in Access Control Lists (ACLs) that allow administrators to set granular permissions (Read, Write, Execute, Modify, Full Control) for individual users and groups on files and folders. NTFS also supports EFS encryption, auditing via SACLs, and ownership - making it the required file system for secure Windows environments."
  },
  324: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "A client can connect to the network but the server is not responding. You confirm both have connectivity. Which should you check next?",
    options: [
      "Data Execution Prevention",
      "Windows Firewall",
      "Active Directory Domains and Trusts",
      "Microsoft Update"
    ],
    answer: "Active Directory Domains and Trusts",
    explanation: "If both machines have network connectivity but cannot communicate, a trust relationship issue between domains may be preventing authentication. Active Directory Domains and Trusts manages the trust relationships between domains that allow cross-domain authentication. Windows Firewall would also be a valid check, but the stated answer is Active Directory Domains and Trusts."
  },
  325: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You move a file from one NTFS server to another NTFS server. The file's permissions in the new location will:",
    options: [
      "Restrict access to the Administrators group",
      "Inherit the destination folder's permissions",
      "Enable full access to the everyone group",
      "Retain the original folder's permissions"
    ],
    answer: "Inherit the destination folder's permissions",
    explanation: "When a file is MOVED between different volumes (even if both are NTFS), it inherits the permissions of the destination folder. This is because moving across volumes is actually a copy-then-delete operation. If you move within the SAME volume, permissions are retained. Moving to a different server always results in inheritance of the destination folder's permissions."
  },
  326: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Smart cards can be used in biometrics-based systems.",
    options: ["YES", "NO"],
    answer: "YES",
    explanation: "Smart cards can be integrated into biometric authentication systems as part of multi-factor authentication. For example, a biometric system might require both a smart card (something you have) and a fingerprint scan (something you are). Some advanced smart cards even store biometric data on the card itself. Smart cards are compatible with and complement biometric systems."
  },
  327: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Dumpster diving refers to a physical threat where a hacker looks for information about a computer network. Is this correct?",
    options: ["Malware", "No change is needed", "Reverse Social engineering", "Phishing"],
    answer: "No change is needed",
    explanation: "The statement is correct. Dumpster diving is indeed a physical attack technique where hackers search through trash for discarded documents, printouts, sticky notes, or other materials containing network information, passwords, account numbers, or other sensitive data. Proper document disposal (shredding) is the defense against this attack."
  },
  328: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Your company requires a wireless security key with more than 15 characters, at least one letter, one number, and one symbol. Which security technology meets these requirements?",
    options: ["WPA2 PSK", "WPA2 Enterprise", "WEP", "MAC filtering"],
    answer: "WPA2 PSK",
    explanation: "WPA2 PSK (Pre-Shared Key / Personal) uses a passphrase that can be 8-63 characters long, supporting letters, numbers, and special characters. This meets all the stated requirements. WPA2 Enterprise uses RADIUS-based per-user authentication (no shared passphrase). WEP has weak encryption and limited key complexity. MAC filtering is access control, not passphrase-based authentication."
  },
  329: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Smart cards provide a means to securely store data on the card.",
    options: ["YES", "NO"],
    answer: "YES",
    explanation: "Smart cards contain an embedded microprocessor and memory that can securely store data such as cryptographic keys, certificates, PINs, and user credentials. The data is protected by the card's hardware security features and can only be accessed through proper authentication. This makes smart cards more secure than magnetic stripe cards for storing sensitive information."
  },
  330: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "What are three examples of two-factor authentication?",
    options: [
      "A password and a pin number",
      "A password and a smart card",
      "A fingerprint and a pattern",
      "A username and a password",
      "A pin number and a debit card"
    ],
    answer: [
      "A password and a smart card",
      "A fingerprint and a pattern",
      "A pin number and a debit card"
    ],
    explanation: "Two-factor authentication requires two DIFFERENT factor types: something you know, something you have, or something you are. Valid examples: (1) Password (know) + Smart card (have), (2) Fingerprint (are) + Pattern (know), (3) PIN (know) + Debit card (have). A password + PIN is two 'something you know' factors - not true 2FA. Username + password is single-factor (both are 'know')."
  },
  331: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which provides the highest level of security in a firewall?",
    options: ["Inbound packet filters", "Outbound packet filters", "Stateful inspection", "Stateless inspection"],
    answer: "Stateful inspection",
    explanation: "Stateful inspection (dynamic packet filtering) maintains a connection state table and makes decisions based on the full context of network connections - including prior packets, connection state, and expected protocol behavior. This is more sophisticated than stateless (simple packet header) filtering, which examines each packet in isolation without context. Stateful inspection can detect and block more sophisticated attacks."
  },
  332: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Passwords that contain recognizable words are vulnerable to a:",
    options: ["Denial of Service attack", "Replay attack", "Hashing attack", "Dictionary attack"],
    answer: "Dictionary attack",
    explanation: "A dictionary attack systematically tries words from a pre-compiled list (dictionary) including common words, names, phrases, and variations. Passwords containing recognizable words (like 'sunshine', 'password', 'dragon') are particularly vulnerable. Brute force tries all combinations, replay attacks reuse captured authentication data, and DoS attacks disrupt availability."
  },
  333: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Administrator passwords may contain ASCII characters generated by a combination of the ALT key and three digits on the numeric keypad.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "Extended ASCII characters (characters with codes above 127) can be typed by holding ALT and typing the character code on the numeric keypad. For example, ALT+0128 produces 'EUR'. Including these extended characters in passwords makes them significantly harder to crack because most dictionary attacks and some brute force tools don't include extended ASCII characters in their character sets."
  },
  334: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Shredding documents helps prevent:",
    options: [
      "Remote code execution",
      "Social networking",
      "File corruption",
      "Man-in-the-middle attacks",
      "Social engineering"
    ],
    answer: "Social engineering",
    explanation: "Shredding documents prevents dumpster diving - a social engineering technique where attackers search through discarded papers to find sensitive information (passwords written down, account numbers, network diagrams, personnel information). This information can be used in social engineering attacks or direct access attempts. Document shredding eliminates this physical information leakage vector."
  },
  335: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The 'cygwin.bat' file in the Properties dialog box is currently on the _______________ file system.",
    options: ["FAT32", "NTFS", "FAT16"],
    answer: "NTFS",
    explanation: "The presence of a Security tab in the file's Properties dialog box indicates it is on an NTFS file system. FAT32 and FAT16 file systems do not have security features and therefore do not display a Security tab in file properties. The Security tab allows configuration of NTFS permissions (ACLs) for users and groups."
  },
  336: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "An example of a biometric device is a fingerprint scanner.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "A fingerprint scanner is a classic example of a biometric device. Biometrics are authentication methods based on unique biological characteristics ('something you are'). Other examples include iris/retina scanners, facial recognition systems, voice recognition, hand geometry readers, and vein pattern scanners. Fingerprint scanners are widely used in laptops, smartphones, and access control systems."
  },
  337: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The removal of unused registry entries and executables increases the surface vulnerability of the server.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "Note: This appears to be a trick question or error. Removing unused registry entries and executables is a server HARDENING practice that DECREASES (not increases) attack surface vulnerability. Fewer installed components mean fewer potential vulnerabilities for attackers to exploit. The correct answer should be NO - removal reduces, not increases, attack surface."
  },
  338: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "What is the primary advantage of using Active Directory Integrated Zones?",
    options: ["Password protection", "Zone encryption", "Secure replication", "Non-repudiation"],
    answer: "Secure replication",
    explanation: "Active Directory Integrated DNS Zones store DNS data within Active Directory, which means zone data is replicated securely using AD replication (with encryption and authentication) rather than standard DNS zone transfers. This provides better security (no zone transfer vulnerabilities), automatic replication to all DCs, and simplified administration. It also enables DNSSEC and secure dynamic updates."
  },
  339: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Biometrics are used to authenticate users.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "Biometrics authenticate users by measuring unique physiological or behavioral characteristics - fingerprints, iris patterns, facial geometry, voice, typing rhythm, etc. The biometric data is compared against a stored template to verify identity. Biometrics represent the 'something you are' authentication factor and are used in laptops, smartphones, border control, and secure facility access systems."
  },
  340: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Your manager asks you to make password guess attempts harder by limiting login attempts. What should you do?",
    options: [
      "Enforce password sniffing.",
      "Enforce password history.",
      "Make password complexity requirements higher.",
      "Implement account lockout policy."
    ],
    answer: "Implement account lockout policy.",
    explanation: "Account lockout policy directly limits login attempts by locking an account after a specified number of failed attempts. This prevents brute force and automated password guessing attacks. Password complexity makes individual passwords harder to guess but doesn't limit attempts. Password history prevents reuse. Account lockout is the direct answer to limiting the number of guess attempts."
  },
  341: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "An attorney wants to increase wireless network security with just a modem and a router. Which security mode offers the highest security?",
    options: ["WEP", "WPA-Personal", "WPA2-Personal", "WPA-Enterprise"],
    answer: "WPA2-Personal",
    explanation: "Given only a modem and router (no RADIUS server), WPA2-Personal (WPA2-PSK) is the most secure available option. WPA2 uses AES encryption (vs. WPA's TKIP), providing strong protection. WPA-Enterprise would be more secure but requires a RADIUS server. WEP and WPA are deprecated with known vulnerabilities. WPA2-Personal is the practical best choice for simple home/office setups."
  },
  342: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "How does the sender policy framework (SPF) aim to reduce spoofed emails?",
    options: [
      "It provides a list of IP address ranges for particular domains so senders can be verified.",
      "It provides an encryption key so that authenticity of an email message can be validated",
      "It includes an XML policy file with each email that confirms the validity of the message.",
      "It lists servers that may legitimately forward mail for a particular domain."
    ],
    answer: "It provides a list of IP address ranges for particular domains so senders can be verified.",
    explanation: "SPF works by allowing domain owners to publish DNS TXT records listing the authorized IP addresses that can send email on behalf of their domain. When a receiving mail server gets an email, it checks the SPF record to verify the sending server's IP is authorized. If not listed, the email is likely spoofed. This prevents attackers from sending emails that appear to come from legitimate domains."
  },
  343: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The purpose of User Account Control (UAC) is to:",
    options: [
      "Secure your data from corruption",
      "Limit the privileges of software",
      "Facilitate Internet filtering",
      "Encrypt the user's account"
    ],
    answer: "Limit the privileges of software",
    explanation: "UAC limits the privileges that software can run with, ensuring applications run with standard user rights unless specifically granted elevated permissions. This prevents malware or poorly designed software from automatically gaining administrator-level access. Even if a virus infects a process, UAC restricts what that process can do to the system, containing potential damage."
  },
  344: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You need to limit the programs that can run on client computers to a specific list. Which technology should you implement?",
    options: [
      "AppLocker group policies",
      "Windows Security Center",
      "System Configuration Utility",
      "Security Accounts Manager"
    ],
    answer: "Windows Security Center",
    explanation: "Note: The correct answer should be AppLocker group policies. AppLocker is a Windows feature that allows administrators to specify which applications users are allowed to run, using rules based on file path, publisher, or hash - creating an application whitelist. Windows Security Center is a dashboard that monitors security status, not an application control mechanism."
  },
  345: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Windows Firewall is a built-in, host-based, [stateless] firewall. Is this correct?",
    options: ["Network layer", "No changes is needed", "Stateful", "Packet filter"],
    answer: "Stateful",
    explanation: "Windows Firewall is a stateful firewall, not stateless. It maintains a connection state table and tracks the state of network connections, allowing it to intelligently permit return traffic for established connections and block unsolicited inbound traffic. A stateless firewall would examine each packet independently without connection context, which is less secure."
  },
  346: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "All users on the same FAT32 file system have access rights to all files.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "FAT32 does not implement any access control or permissions system. Every user who can access the FAT32 volume has full access to all files on it - there is no way to restrict file access at the file system level on FAT32. This is why FAT32 is inappropriate for multi-user secure environments, and NTFS (with its ACL-based permissions) is required for proper access control."
  },
  347: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You need to allow Remote Desktop to get through your firewall for users on your company's domain network. Which settings should you enable?",
    options: [
      "Remote Desktop: Public",
      "Remote Assistance: Home/Work (Private)",
      "Remote Desktop: Home/Work (Private)",
      "Remote Assistance: Domain"
    ],
    answer: "Remote Assistance: Home/Work (Private)",
    explanation: "Note: To allow Remote Desktop on a domain network, you would typically enable 'Remote Desktop: Domain' in Windows Firewall. The stated answer 'Remote Assistance: Home/Work (Private)' appears inconsistent. For domain-joined computers, enabling Remote Desktop for the Domain network profile is the appropriate setting. The given answer may reflect the specific image shown in the original question."
  },
  348: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You would implement a wireless intrusion prevention system to:",
    options: [
      "Prevent rogue wireless access points",
      "Detect wireless packet theft",
      "Enforce SSID broadcasting",
      "Prevent wireless interference"
    ],
    answer: "Prevent rogue wireless access points",
    explanation: "A Wireless Intrusion Prevention System (WIPS) monitors the wireless spectrum for unauthorized access points (rogue APs) - devices set up by attackers to impersonate legitimate network APs or bypass security. WIPS can detect and even block these rogue APs. This is the primary use case for WIPS deployment in enterprise environments to protect against Wi-Fi-based attacks."
  },
  349: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "What does implementing Windows Server Update Services (WSUS) allow a company to manage?",
    options: [
      "Windows updates for workstations and servers",
      "Shared private encryption key updates",
      "Active Directory server replication",
      "Updates to Group Policy Objects"
    ],
    answer: "Windows updates for workstations and servers",
    explanation: "WSUS provides centralized management of Microsoft software updates for all computers in the organization - both workstations and servers. Administrators can approve, decline, and schedule updates, controlling which patches are deployed and when. Computers download approved updates from the internal WSUS server instead of directly from Microsoft, saving bandwidth and providing administrative control."
  },
  350: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "A honey pot is an appliance or piece of software that allows or denies network access based on a preconfigured set of rules.",
    options: ["YES", "NO"],
    answer: "NO",
    explanation: "The statement describes a firewall, not a honey pot. A honey pot is a decoy system designed to attract and trap attackers, allowing security teams to observe attacker techniques, gather threat intelligence, and detect intrusions. Honey pots appear to be legitimate valuable targets but are actually isolated monitored systems. Firewalls (not honey pots) allow/deny network access based on rules."
  },
  351: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "All computers that are not in compliance with NAP policies require manual intervention to be brought into compliance.",
    options: ["YES", "NO"],
    answer: "NO",
    explanation: "NAP can be configured with auto-remediation capabilities. Non-compliant computers can be automatically directed to a remediation server network where they automatically download and install missing updates, enable required services (like Windows Firewall), or apply necessary configurations. Once remediated, they are automatically reassessed and given full network access - no manual intervention required."
  },
  352: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You need to push an internal certificate to Internet Explorer on all 1000 Active Directory workstations. What is the quickest method?",
    options: ["Local policy", "Windows Update", "Logon script", "Group policy"],
    answer: "Local policy",
    explanation: "Note: For deploying certificates to 1000 domain-joined workstations, Group Policy is clearly the quickest and most scalable method. Group Policy allows pushing certificates to the Trusted Root CA store on all computers simultaneously. Local policy only affects individual machines. The stated answer 'Local policy' is likely an error in the source material - Group Policy is the correct answer."
  },
  353: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Honey pots are primarily used to attract potential attackers or hackers.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "Honey pots are deliberately designed and deployed as attractive decoy targets to lure attackers away from real systems and into a monitored environment. Security teams use honey pots to detect intrusion attempts, study attacker methods and tools, gather threat intelligence, and receive early warning of attacks. They provide valuable security insights by observing real attack behavior."
  },
  354: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Alice and Bob are exchanging messages. Chuck modifies the messages sent between them. Alice and Bob could add a _____ to avoid this type of attack.",
    options: ["Digital Signature", "Check sum", "Timestamp"],
    answer: "Digital Signature",
    explanation: "A digital signature uses asymmetric cryptography to ensure both authenticity and integrity. If Alice signs her message with her private key, Bob can verify the signature with Alice's public key. If Chuck modifies the message in transit, the signature verification will fail, alerting Bob to the tampering. A checksum detects accidental errors but can be recalculated by an attacker. A timestamp prevents replay attacks."
  },
  355: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The manager of a coffee shop wants to keep computer users from seeing each other's traffic. What should you use with an access point?",
    options: ["Client isolation mode", "MAC address filtering", "Client bridge mode", "Client mode"],
    answer: "Client isolation mode",
    explanation: "Client isolation (also called AP isolation or wireless client isolation) is an access point feature that prevents wireless clients connected to the same AP from communicating directly with each other. Traffic can only flow between a client and the router/internet - not between clients. This is essential for public Wi-Fi environments to prevent users from sniffing each other's traffic or launching attacks."
  },
  356: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "A security firm suggests Humongous Insurance implement password history policy. What is the likely reason?",
    options: [
      "Previous password breaches involved use of past passwords.",
      "Past passwords were easily cracked by the brute force method.",
      "Past passwords lacked complexity and special characters.",
      "Past passwords of users contained dictionary words."
    ],
    answer: "Past passwords of users contained dictionary words.",
    explanation: "Note: Password history policy prevents users from immediately reusing old passwords. The most logical reason to implement it would be that users were reusing old passwords or cycling back to previous ones quickly. The stated answer (dictionary words) is better addressed by complexity requirements, not history policy. The most direct reason for password history is preventing password reuse."
  },
  357: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which password attack uses all possible alphanumeric combinations?",
    options: [
      "Social engineering",
      "Brute force attack",
      "Dictionary attack",
      "Rainbow table attack"
    ],
    answer: "Dictionary attack",
    explanation: "Note: The answer here appears incorrect. A BRUTE FORCE attack tries all possible alphanumeric (and other character) combinations systematically. A dictionary attack only tries words from a pre-built wordlist. A rainbow table uses precomputed hashes. Social engineering manipulates people. The correct answer to 'tries all possible alphanumeric combinations' should be Brute Force Attack."
  },
  358: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "By setting up a honey pot, an administrator can get insightful information about the attacker, such as the IP address.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "When an attacker connects to a honey pot, the honeypot system can log extensive information about the attacker, including their IP address, attack tools and techniques used, exploits attempted, commands executed, malware deployed, and behavioral patterns. This intelligence is valuable for understanding threats, improving defenses, and potentially attributing attacks. Honey pots are powerful threat intelligence gathering tools."
  },
  359: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You cannot connect to an FTP server from a school lab, but you can from home. The lab computers can browse the Internet. What could be blocking the FTP connection?",
    options: ["A wireless access point", "A layer-2 hub", "A layer-2 switch", "A firewall"],
    answer: "A firewall",
    explanation: "FTP uses port 21 (and typically high ports for data transfer). The school network likely has a firewall that blocks FTP (port 21) while allowing HTTP/HTTPS (ports 80/443) for web browsing. This explains why the lab can browse the Internet but not use FTP. At home, no such firewall restriction exists. Layer-2 devices (hubs, switches) operate on MAC addresses and don't filter by protocol or port."
  },
  360: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The __________________ defense in the Microsoft Defense-in-Depth Security Model targets staff within an organization, explaining what to do, when, why, and by whom.",
    options: ["Data Defenses", "Physical Security", "Policies, Procedures, and Awareness"],
    answer: "Policies, Procedures, and Awareness",
    explanation: "In Microsoft's Defense-in-Depth model, the 'Policies, Procedures, and Awareness' layer specifically addresses the human element of security. It encompasses creating clear security policies, defining procedures for various scenarios, and training staff (awareness programs) about what actions to take, when, why, and who is responsible. This layer addresses social engineering and insider threats through education."
  },
  361: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Creating MD5 hash for files is an example of ensuring what?",
    options: ["Least privilege", "Confidentiality", "Availability", "Integrity"],
    answer: "Integrity",
    explanation: "MD5 hashing creates a fixed-length 'fingerprint' of a file. If the file is modified in any way, the MD5 hash changes. By comparing the current hash to the known original hash, you can verify that the file has not been altered - ensuring data integrity. MD5 does not encrypt data (confidentiality), control access (least privilege), or ensure uptime (availability)."
  },
  362: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The client computers on your network are stable and do not need any new features. Which is a benefit of applying operating system updates to these clients?",
    options: [
      "Keep the software licensed",
      "Keep the server ports available",
      "Close existing vulnerabilities",
      "Update the hardware firewall"
    ],
    answer: "Close existing vulnerabilities",
    explanation: "Even for stable systems that don't need new features, applying OS security updates is critical because they close known vulnerabilities - security holes that attackers can exploit. Without patches, even stable systems become increasingly vulnerable as new exploits are published. Security patches fix specific code flaws without necessarily adding new features, making them essential for all systems regardless of stability."
  },
  363: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Smart cards can read distances of several inches to many yards.",
    options: ["NO", "YES"],
    answer: "NO",
    explanation: "Contact smart cards must be physically inserted into a card reader - no read distance at all. Contactless smart cards (using RFID or NFC) typically have a read range of only a few centimeters to about 10cm (roughly 4 inches). Reading over several inches to many yards describes RFID tags used in supply chain or long-range RFID systems, not standard smart cards."
  },
  364: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "What is the standard or basic collection of NTFS permissions?",
    options: [
      "Read attributes, list folder/read data, traverse folder/execute file",
      "Read and execute, read, write, full control, modify, list folder contents",
      "Change permissions, read permissions, write permissions",
      "Create files/write data, create folders/append data, take ownership"
    ],
    answer: "Read and execute, read, write, full control, modify, list folder contents",
    explanation: "The standard (basic) NTFS permissions are: Read, Write, Read & Execute, Modify, Full Control, and List Folder Contents. These are the permissions visible in the basic Security tab of file/folder properties. Advanced (special) permissions are more granular sub-components of these standard permissions, accessible through the Advanced button. The basic permissions cover most common access control scenarios."
  },
  365: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You try to reuse an old password but the bank's [password history] prevents you. Is this correct?",
    options: ["Minimum password age", "Maximum password duration", "Password complexity", "No change is needed."],
    answer: "No change is needed.",
    explanation: "The statement is correct. Password history policy maintains a record of previously used passwords and prevents users from reusing them. The scenario perfectly describes password history in action: the user has changed passwords 5 times and wants to reuse an old one, but the policy blocks it by remembering previous passwords. No change is needed to the underlined text."
  },
  366: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which of the following describes a VLAN?",
    options: [
      "It allows different network protocols to communicate between different network segments.",
      "It connects to multiple networks and routes data packets.",
      "It is a subnetwork that reveals a company's externally facing resources to the public network.",
      "It is a logical broadcast domain across physical subnets."
    ],
    answer: "It is a logical broadcast domain across physical subnets.",
    explanation: "A VLAN (Virtual Local Area Network) creates a logical network segmentation at the data link layer, separating broadcast domains without requiring physical separation. Multiple VLANs can exist on the same physical switch infrastructure, with each VLAN acting as an independent broadcast domain. This enables security segmentation, traffic isolation, and network organization independent of physical topology."
  },
  367: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Biometrics data is usually encrypted when it is gathered.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "Biometric data (fingerprints, iris scans, facial geometry templates) is highly sensitive personal information that cannot be changed if compromised. Responsible biometric systems encrypt the captured data immediately upon collection and store only encrypted templates. This protects against identity theft if the biometric database is breached. Encryption of biometric data is a best practice and increasingly a legal requirement."
  },
  368: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "Your roommate has forgotten his password for a Standard User account on your Windows 7 desktop. What two actions can you take to reset his password?",
    options: [
      "Boot into Safe Mode using your roommate's account.",
      "Use your administrator account.",
      "From your roommate's account press CTRL+ALT+DELETE, and then click Change a password.",
      "Use your password reset disk."
    ],
    answer: ["Use your administrator account.", "Use your password reset disk."],
    explanation: "Two valid methods: (1) Use your administrator account - the admin can reset any local user's password through Control Panel -> User Accounts, and (2) Use your password reset disk - a reset disk created by the user beforehand allows password recovery. Note: Booting Safe Mode with an unknown password won't help, and pressing CTRL+ALT+DELETE requires knowing the current password to change it."
  },
  369: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "What three elements does HTTPS encrypt?",
    options: ["Website URL", "Port numbers", "Server IP address", "Browser cookies", "Login information"],
    answer: ["Website URL", "Browser cookies", "Login information"],
    explanation: "HTTPS (HTTP over TLS/SSL) encrypts the content of the HTTP communication, which includes: (1) Website URL paths (the full URL including path and query parameters after the domain), (2) Browser cookies (including session tokens), and (3) Login information (usernames, passwords, form data). The server's IP address and port numbers are part of the TCP/IP headers which are NOT encrypted by HTTPS - only the HTTP payload is encrypted."
  },
  370: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "An intruder can find a wireless network if the Service Set Identifier (SSID) is hidden.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "Hiding the SSID (disabling SSID broadcast) is often called 'security through obscurity' and provides minimal actual security. Attackers can still discover hidden SSIDs using wireless scanning tools like Kismet or Aircrack-ng, which capture probe request packets from client devices trying to connect. The SSID appears in management frames even when not broadcast. SSID hiding is not a reliable security measure."
  },
  371: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Tools like Microsoft Security Compliance Manager and Microsoft Baseline Security Analyzer can assist with server hardening.",
    options: ["YES", "NO"],
    answer: "YES",
    explanation: "Both tools assist with server hardening: Microsoft Security Compliance Manager (SCM) provides pre-built security baselines and Group Policy templates based on Microsoft and industry best practices, helping configure servers securely. Microsoft Baseline Security Analyzer (MBSA) scans servers for missing patches and security misconfigurations. Together, they help administrators identify and remediate security weaknesses."
  },
  372: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You create a new file in a folder that has inheritance enabled. By default, the new file:",
    options: [
      "Takes the permissions of other files in the same directory",
      "Takes the permissions of other folders in the same directory",
      "Does not take any permissions",
      "Takes the permissions of the parent folder"
    ],
    answer: "Takes the permissions of the parent folder",
    explanation: "NTFS permission inheritance means that new files and subfolders created within a folder automatically inherit the permissions of their parent folder. This is the default behavior when inheritance is enabled. The inherited permissions flow from parent to child objects, so a new file in a folder gets the same ACL as the folder. This simplifies permission management - set once at the folder level, files inherit automatically."
  },
  373: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You need to grant a set of users write access to a file on a network share. You should add the users to:",
    options: [
      "A security group",
      "The Everyone group",
      "The Authenticated Users group",
      "A distribution group"
    ],
    answer: "The Authenticated Users group",
    explanation: "Adding users to the 'Authenticated Users' group (which includes all authenticated domain/local users) or better yet a dedicated security group would manage access. However, the most appropriate answer for a SPECIFIC set of users with write access is to add them to a security group, then grant that group permissions. The Authenticated Users group would grant access to ALL authenticated users, not just the specific set."
  },
  374: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Where should you lock up the backup tapes for your servers?",
    options: ["The tape library", "A filing cabinet", "An offsite fire safe", "The server room"],
    answer: "An offsite fire safe",
    explanation: "Backup tapes should be stored in an offsite fire safe for two critical reasons: (1) Offsite storage protects against local disasters (fire, flood, building destruction) that could destroy both the servers and on-site backups simultaneously, and (2) Fire-safe storage protects the physical media from heat damage. Keeping backups in the same location as the servers defeats the purpose of disaster recovery planning."
  },
  375: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "E-mail spoofing:",
    options: [
      "Forwards e-mail messages to all contacts",
      "Copies e-mail messages sent from a specific user",
      "Obscures the true e-mail sender",
      "Modifies e-mail routing logs"
    ],
    answer: "Obscures the true e-mail sender",
    explanation: "Email spoofing involves forging the 'From' address in an email to make it appear to come from a different (usually trusted) source. The attacker obscures their true identity by impersonating another sender. This technique is used in phishing attacks and spam. Technologies like SPF, DKIM, and DMARC are designed to detect and prevent email spoofing by verifying sender authenticity."
  },
  376: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "WEP security is strong as long as it has a 128-bit key.",
    options: ["YES", "NO"],
    answer: "NO",
    explanation: "WEP (Wired Equivalent Privacy) is fundamentally broken regardless of key length. Its RC4 implementation has serious flaws including weak IVs (Initialization Vectors) that repeat, making keys recoverable through traffic analysis. Tools like Aircrack-ng can crack WEP encryption in minutes by collecting enough packets. The 128-bit key provides no meaningful additional security given these protocol-level vulnerabilities."
  },
  377: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "A brute force attack:",
    options: [
      "Tries all possible password variations",
      "Uses the strongest possible algorithms",
      "Targets all the ports",
      "Uses response filtering"
    ],
    answer: "Tries all possible password variations",
    explanation: "A brute force attack systematically tries every possible combination of characters until the correct password is found. Given enough time and computational power, it will eventually succeed against any password. The effectiveness depends on password length and character set - longer passwords with larger character sets exponentially increase the time needed, making brute force impractical for sufficiently complex passwords."
  },
  378: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "NAP can enforce that client computers are running a firewall.",
    options: ["NO", "YES"],
    answer: "YES",
    explanation: "NAP (Network Access Protection) health policies can require that client computers have Windows Firewall enabled as a condition for full network access. The Windows Security Health Validator (WSHV) checks firewall status along with other health requirements like antivirus, automatic updates, and spyware protection. Clients without a firewall enabled can be restricted to a quarantine network."
  },
  379: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "By using NAP, administrators can place non-compliant computers onto restricted networks.",
    options: ["YES", "NO"],
    answer: "YES",
    explanation: "NAP's enforcement mechanisms can restrict non-compliant computers to a quarantine or remediation network - a limited network with access only to resources needed to become compliant (like Windows Update servers or antivirus update servers). Once the computer meets all health requirements, it gains full network access. This protects healthy network resources from potentially vulnerable machines."
  },
  380: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "An intruder can spoof the MAC address to get around MAC address filtering.",
    options: ["YES", "NO"],
    answer: "YES",
    explanation: "MAC address filtering is easily bypassed through MAC spoofing. An attacker can use wireless monitoring tools to observe valid MAC addresses on the network, then change their own device's MAC address to match an authorized one. This takes only seconds with freely available tools on Linux or Windows. MAC filtering provides very weak security and should not be relied upon as a sole access control mechanism."
  },
  381: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "The primary purpose of Network Access Protection (NAP) is to prevent:",
    options: [
      "Unauthorized users from accessing a network.",
      "Non-compliant systems from connecting to a network.",
      "Loss of data from client computers on a network.",
      "Users on a network from installing software."
    ],
    answer: "Non-compliant systems from connecting to a network.",
    explanation: "NAP's primary purpose is to ensure that only computers meeting defined health/compliance requirements can connect to the network. It checks for required security configurations (firewall enabled, AV updated, patches installed) and blocks or restricts non-compliant systems. NAP does not authenticate users (that's AD/RADIUS) or prevent data loss or software installation - those are separate controls."
  },
  382: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Physically securing servers prevents:",
    options: ["Denial of Service attacks", "Man-in-the middle attacks", "Compromise of the certificate chain", "Theft"],
    answer: "Theft",
    explanation: "Physical security measures (locked server rooms, cages, cable locks, access badges, surveillance cameras) primarily prevent unauthorized physical access and theft of hardware. Physical security does not directly prevent network-based attacks like DoS or man-in-the-middle attacks, which require network-layer defenses. However, physical access can also enable bypassing of software security controls, so physical security is foundational."
  },
  383: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "To protect users from malicious browser pop-ups, you should set a default browser configuration that blocks untrusted pop-ups.",
    options: ["YES", "NO"],
    answer: "YES",
    explanation: "Configuring browsers to block untrusted pop-ups is an effective baseline security measure against malicious pop-ups that may display fake warnings, drive-by downloads, or social engineering content. Modern browsers include built-in pop-up blockers. Setting this as a default/enforced configuration (via Group Policy for enterprise) ensures users are protected even if they haven't manually enabled the setting."
  },
  384: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You have an application that uses IPsec to secure communications between an internet client and a server on the internal network. To which network security service must the IPsec client connect?",
    options: ["SSH", "VPN", "SFTP", "RADIUS"],
    answer: "VPN",
    explanation: "When IPsec is used to secure communications between an Internet client and an internal network server, the client must first establish a VPN (Virtual Private Network) connection. The VPN gateway (using IPsec tunnel mode) creates a secure encrypted tunnel across the Internet to the internal network, allowing the client to communicate with internal resources as if locally connected."
  },
  385: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "What is an example of physical security for a laptop?",
    options: ["Fingerprint reader", "Cable lock", "External USB drive", "Docking station"],
    answer: "Cable lock",
    explanation: "A cable lock (Kensington lock) is a physical security device that attaches to a laptop's security slot and anchors it to a fixed object, preventing theft. It is a tangible, physical security measure. A fingerprint reader is a biometric authentication method (logical security). An external USB drive is a storage device, and a docking station is a connectivity accessory - neither are security devices."
  },
  386: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "Which two strategies will help keep your devices free from viruses and malware?",
    options: [
      "Keep antivirus and anti-malware software definitions up to date.",
      "Ensure that Real-time Protection is disabled.",
      "Ensure that the Windows Firewall is disabled so it doesn't interfere with any anti-malware software scans.",
      "Ensure that all network ports are available so all important network traffic can get through.",
      "Configure full antivirus and anti-malware scans to run automatically on a regular schedule."
    ],
    answer: [
      "Keep antivirus and anti-malware software definitions up to date.",
      "Configure full antivirus and anti-malware scans to run automatically on a regular schedule."
    ],
    explanation: "Key strategies: (1) Keep AV definitions current - outdated signatures can't detect new malware variants, and (2) Schedule regular full scans - automated scans ensure consistent coverage even if users forget. Real-time protection should be ENABLED (not disabled). Windows Firewall should remain active. Opening all network ports dramatically increases attack surface - the opposite of security."
  },
  387: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which class of IP address is used for multicast?",
    options: ["Class B", "Class A", "Class D", "Class C"],
    answer: "Class D",
    explanation: "Class D IP addresses (ranging from 224.0.0.0 to 239.255.255.255) are reserved exclusively for multicast communications, where a single packet is sent to a group of receivers simultaneously. Class A (1-126.x.x.x), Class B (128-191.x.x.x), and Class C (192-223.x.x.x) are used for unicast (standard host) addressing. Class E (240-255.x.x.x) is reserved for experimental use."
  },
  388: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which is the correct sequence for the backup strategies? (Strategy 1: Full nightly; Strategy 2: Full Sunday + Incremental Mon-Sat; Strategy 3: Full Sunday + Differential Mon-Sat)",
    options: ["Strategy 1,3,2", "Strategy 1,2,3", "Strategy 2,1,3", "Strategy 3,2,1"],
    answer: "Strategy 1,3,2",
    explanation: "Ranked by recovery time (fastest to slowest): (1) Full backup nightly - single tape to restore, fastest recovery; (3) Differential - restore last full + last differential (2 tapes); (2) Incremental - restore last full + every incremental since (up to 7 tapes, slowest). Ranked by storage/time needed for backup: Incremental < Differential < Full. The answer ranks by fastest recovery: 1, 3, 2."
  },
  389: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "What is a user probably receiving if they get a large number of emails selling prescription medicine?",
    options: ["Spoofed mail", "Malware", "Pharming mail", "Spam"],
    answer: "Spam",
    explanation: "Receiving large volumes of unsolicited commercial email (selling prescription drugs, get-rich-quick schemes, etc.) is the definition of spam. Spam is bulk unsolicited email for commercial or fraudulent purposes. Pharming redirects web traffic via DNS manipulation, spoofed mail has a forged sender address, and malware contains malicious code. Mass commercial email advertisements = spam."
  },
  390: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "What is the primary purpose of a subnet mask in IP networking?",
    options: [
      "To divide an IP address into network and host portions",
      "To route traffic between networks",
      "To assign MAC addresses",
      "To encrypt data packets"
    ],
    answer: "To divide an IP address into network and host portions",
    explanation: "A subnet mask is a 32-bit number that divides an IP address into two parts: the network portion (identifies which network the host belongs to) and the host portion (identifies the specific device within that network). For example, a subnet mask of 255.255.255.0 means the first three octets identify the network, and the last octet identifies the host. This division enables proper routing and network organization."
  },
  391: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You can view audit logs in the Event Viewer.",
    options: ["True", "False"],
    answer: "True",
    explanation: "Windows Event Viewer is the primary tool for viewing audit logs. Security audit events are recorded in the Security log (under Windows Logs), which can be viewed and filtered in Event Viewer. Events include logon/logoff, account management changes, object access, privilege use, and policy changes. Administrators regularly review the Security log for security monitoring and compliance purposes."
  },
  392: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "Which two vulnerabilities is a wireless network client exposed to?",
    options: ["File corruption", "Buffer overflow", "Rogue access points", "Eavesdropping"],
    answer: ["Rogue access points", "Eavesdropping"],
    explanation: "Wireless clients face unique risks: (1) Rogue access points - attackers set up fake APs with legitimate-sounding names to trick clients into connecting, enabling man-in-the-middle attacks, and (2) Eavesdropping - wireless signals travel through open air and can be captured by anyone within range using a wireless adapter in monitor mode. File corruption and buffer overflow are general computing vulnerabilities, not wireless-specific."
  },
  393: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "What is the default subnet mask for a Class C IP address?",
    options: ["255.255.255.255", "255.0.0.0", "255.255.255.0", "255.255.0.0"],
    answer: "255.255.255.0",
    explanation: "Class C IP addresses (192.0.0.0 to 223.255.255.255) use a default subnet mask of 255.255.255.0 (/24 in CIDR notation). This means the first three octets (24 bits) identify the network and the last octet (8 bits) identifies hosts, allowing up to 254 usable host addresses per network. Class A uses 255.0.0.0, Class B uses 255.255.0.0, and 255.255.255.255 is the broadcast address."
  },
  394: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Why should you implement a wireless intrusion prevention system?",
    options: [
      "To detect wireless packet theft",
      "To prevent wireless interference",
      "To prevent rogue wireless access points",
      "To enforce SSID broadcasting"
    ],
    answer: "To prevent rogue wireless access points",
    explanation: "A WIPS (Wireless Intrusion Prevention System) actively monitors the RF spectrum for unauthorized wireless access points and can automatically take action (de-authentication, alerting) to prevent rogue APs from operating. Rogue APs can bypass physical network security, enabling unauthorized access. WIPS is the standard tool for detecting and preventing rogue AP threats in enterprise wireless environments."
  },
  395: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "How should the certificate of a secure public web server on the internet be signed?",
    options: [
      "By using a 4096-bit key",
      "By an enterprise certificate authority (CA)",
      "By a public certificate authority (CA)",
      "By using a 1024-bit key"
    ],
    answer: "By a public certificate authority (CA)",
    explanation: "Public-facing web servers need SSL/TLS certificates signed by a publicly trusted Certificate Authority (such as Let's Encrypt, DigiCert, GlobalSign) whose root certificates are included in browsers and operating systems by default. Enterprise CAs are only trusted within private organizational networks. Key length (1024 or 4096-bit) is a separate consideration from who signs the certificate."
  },
  396: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "What protocol is used to assign IP addresses dynamically to devices on a network?",
    options: ["FTP", "DNS", "HTTP", "DHCP"],
    answer: "DHCP",
    explanation: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses, subnet masks, default gateways, and DNS server addresses to devices when they connect to a network. Without DHCP, each device would need a manually configured static IP address. FTP transfers files, DNS resolves domain names to IP addresses, and HTTP transfers web content - none assign IP addresses."
  },
  397: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which of the following is a valid IPv4 address?",
    options: ["20010db885a3000000008a2e03707334", "10.0.0.256", "172.16.254.1", "192.168.300.1"],
    answer: "172.16.254.1",
    explanation: "A valid IPv4 address has four octets (0-255 each), separated by dots. 172.16.254.1 - all octets are within 0-255 range - VALID. 10.0.0.256 - 256 exceeds the maximum value of 255 - INVALID. 192.168.300.1 - 300 exceeds 255 - INVALID. The first option (20010db885a3000000008a2e03707334) is a hexadecimal IPv6 address without formatting - INVALID as IPv4."
  },
  398: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Protecting users from untrusted pop-up applications is mostly a function of awareness.",
    options: ["True", "False"],
    answer: "True",
    explanation: "While technical controls like pop-up blockers help, user awareness is the most critical defense against malicious pop-ups. Users who recognize social engineering tactics (fake security alerts, urgent warnings, prize notifications) are far less likely to interact with them. A technically sophisticated pop-up blocker is useless if a user is trained to click through warnings. Security awareness training is foundational to this protection."
  },
  399: {
    category: "GENERAL IT SECURITY",
    type: "MULTI-SELECT",
    question: "What are two benefits to using an incremental backup solution instead of a differential backup solution?",
    options: [
      "Less time needed to back up data",
      "Less administrative effort",
      "Less storage space required",
      "Less time needed to recover data"
    ],
    answer: ["Less time needed to back up data", "Less storage space required"],
    explanation: "Incremental backups only back up data that changed SINCE THE LAST BACKUP (incremental or full). This means: (1) Less time to back up - each backup is small (only recent changes), and (2) Less storage space - each backup set is minimal. However, recovery takes more time (need full + every incremental). Differential backups are easier to recover from (only need full + last differential) but use more storage."
  },
  400: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You move a file from one NTFS Windows Server to another NTFS Windows Server. What permissions does the file have in the new location?",
    options: [
      "The file inherits the destination folder's permissions",
      "Access will be limited to members of the Administrators group",
      "The file retains the original folder's permissions",
      "Members of the Everyone group will have full access to the file"
    ],
    answer: "The file inherits the destination folder's permissions",
    explanation: "When moving files between different servers (or volumes), Windows treats it as a copy-then-delete operation. The new file at the destination inherits the permissions of the destination folder. If you move within the same volume, permissions are preserved. Cross-server/cross-volume moves always result in the file taking on the destination folder's inherited permissions."
  },
  401: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Audit logs have a set size limit and cannot be adjusted.",
    options: ["True", "False"],
    answer: "False",
    explanation: "Audit log sizes are fully configurable in Windows. In Event Viewer, you can right-click any log and select Properties to set the maximum log size. Group Policy also allows configuring log sizes across multiple computers simultaneously. You can also configure behavior when the log is full: overwrite old events, archive and clear, or stop logging. Logs are not fixed in size."
  },
  402: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "What should you use to protect systems from buffer overflow errors?",
    options: ["An Intruder Prevention System", "A proxy server", "Data Execution Prevention", "Antivirus software"],
    answer: "Data Execution Prevention",
    explanation: "DEP (Data Execution Prevention) is specifically designed to prevent buffer overflow exploitation. It marks memory regions as non-executable so that code injected into data areas (the basis of buffer overflow attacks) cannot be executed. When malicious code attempts to run from a data segment, DEP triggers an exception and terminates the process. Hardware DEP (NX/XD bit) is supported by modern processors."
  },
  403: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which link is a valid secure link to the CompanyPro account management site?",
    options: [
      "http//VPN.VisitMe/logon.html",
      "http//secure.companypro/SecureSignIn",
      "http//VPN.VisitMe/SecureSignIn/",
      "https//companypro/SecureSignIn/"
    ],
    answer: "https//companypro/SecureSignIn/",
    explanation: "A valid secure link must use HTTPS (not HTTP) to ensure the connection is encrypted with SSL/TLS. The 'https' prefix indicates a secure, encrypted connection. The URL https//companypro/SecureSignIn/ uses HTTPS and points directly to the CompanyPro domain (not a third-party domain like VPN.VisitMe which could be a phishing site). Note: Valid URLs also need ':' after the protocol (https://)."
  },
  404: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Your off-domain computer may be infected with malware. After running anti-malware software, you are still unsure. What is the correct sequence of actions?",
    options: [
      "Back up -> Restore data -> Update everything -> Reinstall OS -> Reformat disk",
      "Reinstall OS -> Back up -> Restore data -> Update everything -> Reformat disk",
      "Back up -> Reformat disk -> Reinstall OS -> Update everything -> Restore data",
      "Update everything -> Reinstall OS -> Reformat disk -> Back up -> Restore data"
    ],
    answer: "Back up -> Reformat disk -> Reinstall OS -> Update everything -> Restore data",
    explanation: "The correct malware remediation sequence: (1) Back up user data - preserve files before wiping, (2) Reformat the disk - completely eliminates malware (including rootkits that survive reinstalls), (3) Reinstall the OS - fresh clean installation from trusted media, (4) Update everything - immediately patch OS, apps, and AV definitions before connecting to network, (5) Restore user data - from the clean backup."
  },
  405: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Your anti-spam program is blocking emails from a particular sender your company needs to receive. What should you do?",
    options: [
      "List the sender's email address in DNS",
      "Reconfigure the SMS Gateway",
      "Add the email address to the whitelist",
      "Accept RSS feeds from their domain"
    ],
    answer: "Add the email address to the whitelist",
    explanation: "A whitelist (also called a safelist or allowed list) in an anti-spam system explicitly permits email from specified addresses or domains, overriding spam filters. Adding the legitimate sender's email address to the whitelist ensures their emails are delivered regardless of content-based spam scoring. This is the standard method for resolving false-positive spam blocking."
  },
  406: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You can configure an event notification for an audited activity.",
    options: ["True", "False"],
    answer: "True",
    explanation: "Windows supports event-triggered notifications through Task Scheduler. You can create a scheduled task that triggers when a specific event is logged in Event Viewer (based on event ID, source, or level). The task action can send an email notification. This allows administrators to receive real-time alerts for specific audited events like failed logins, account lockouts, or security policy changes."
  },
  407: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which technology examines packet header information to determine whether network traffic is allowed to enter the internal network?",
    options: ["BitLocker To Go", "Antivirus software", "Dedicated firewall", "RADIUS server"],
    answer: "Dedicated firewall",
    explanation: "A dedicated firewall (hardware firewall) examines packet headers - including source/destination IP addresses, ports, protocols, and connection state - to determine whether traffic should be allowed or blocked. It operates at the network perimeter, inspecting all traffic entering or leaving the internal network. BitLocker encrypts drives, AV scans files for malware, and RADIUS handles authentication."
  },
  408: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "What is the first step when conducting a physical security audit?",
    options: [
      "Set up the system logs to audit security events",
      "Inventory the company's technology assets",
      "Install auditing software on your servers",
      "Set up a virus quarantine area"
    ],
    answer: "Inventory the company's technology assets",
    explanation: "The first step in any security audit - physical or otherwise - is to inventory all technology assets. You cannot assess, protect, or audit what you don't know exists. The asset inventory identifies all hardware, software, network equipment, data stores, and physical locations that need to be included in the security assessment. All subsequent steps depend on having a complete and accurate asset inventory."
  },
  409: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "One purpose of User Account Control (UAC) is to grant users the lowest level permissions required to complete their tasks.",
    options: ["True", "False"],
    answer: "True",
    explanation: "This is a core principle of UAC - enforcing least privilege. UAC ensures all processes run with standard user permissions by default, even for administrator accounts. Elevated permissions are only granted when specifically needed for a task, and the user must explicitly authorize the elevation. This minimizes the impact of malware or errors that might otherwise gain administrator-level system access."
  },
  410: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which type of threat mitigation educates the staff within an organization, explaining what to do, when, why, and by whom?",
    options: [
      "Acceptable Use Policy",
      "Policies, Procedures, and Awareness",
      "Physical Security",
      "Defense in Depth"
    ],
    answer: "Policies, Procedures, and Awareness",
    explanation: "The 'Policies, Procedures, and Awareness' layer in defense-in-depth specifically addresses the human element through education and training. It defines clear security policies (what is permitted), documented procedures (how to handle situations), and awareness programs (training staff to recognize threats). This is the only layer that directly educates people - physical security protects locations, and Defense in Depth is the overall strategy."
  },
  411: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "How does role separation improve server security?",
    options: [
      "By installing applications on separate hard disks.",
      "By enforcing the principle of least privilege.",
      "By physically separating high-security servers from other servers.",
      "By placing servers on separate VLANs."
    ],
    answer: "By placing servers on separate VLANs.",
    explanation: "Note: Both VLAN separation and least privilege are valid security benefits, but the stated answer here is 'By placing servers on separate VLANs.' VLAN separation creates isolated network segments, limiting what a compromised server can communicate with. However, role separation's PRIMARY security benefit is typically the enforcement of least privilege - each role has only the access it needs."
  },
  412: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Several employees downloaded a browser extension for language translation. What should you do?",
    options: [
      "Disable the browser extension and implement controls to allow only corporate-approved browser extensions",
      "Remove the browser extension because it will perform malicious activities",
      "Make sure the browser extension is set to read-only mode, so it cannot overwrite critical information",
      "Nothing, browser extensions pose no harm to the machine or the user"
    ],
    answer: "Disable the browser extension and implement controls to allow only corporate-approved browser extensions",
    explanation: "Browser extensions can access browsing data, passwords, and other sensitive information. Unapproved extensions pose security risks regardless of their stated purpose - they may have broad permissions, be from unvetted developers, or be modified maliciously. The correct response is to disable unauthorized extensions and implement a whitelist policy (via Group Policy) that only allows corporate-approved extensions."
  },
  413: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which networking protocol provides centralized authentication, authorization, and accounting?",
    options: ["HTTPS", "RADIUS", "OpenID", "SMTP"],
    answer: "RADIUS",
    explanation: "RADIUS (Remote Authentication Dial-In User Service) provides the three AAA functions: Authentication (verifying user identity), Authorization (determining what the user can access), and Accounting (logging user activity). It's used for centralizing access control for network devices, VPNs, wireless networks, and other services. HTTPS secures web traffic, OpenID is a federated identity protocol, and SMTP sends email."
  },
  414: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Because senior executives have rights to access sensitive data, they should use administrator accounts.",
    options: ["True", "False"],
    answer: "False",
    explanation: "Access rights to sensitive data are independent of account type. Senior executives need permissions to VIEW certain sensitive data, but this does not require administrator-level accounts which carry extensive system privileges. Following least privilege, executives should use standard accounts with specific data access permissions. Using admin accounts for daily work unnecessarily exposes the organization to greater risk if those accounts are compromised."
  },
  415: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Which protocol is responsible for resolving domain names to IP addresses?",
    options: ["ICMP", "TCP", "DNS", "DHCP"],
    answer: "DNS",
    explanation: "DNS (Domain Name System) is the protocol and distributed database system that translates human-readable domain names (like www.example.com) into machine-readable IP addresses (like 93.184.216.34). Without DNS, users would need to remember IP addresses for every website. ICMP handles network diagnostics (ping), TCP manages reliable data transmission, and DHCP assigns IP addresses dynamically."
  },
  416: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "What can intercept passwords that are transmitted in clear text?",
    options: ["A packet sniffer", "A rogue DHCP server", "An IPsec decoder", "A Kerberos client"],
    answer: "A packet sniffer",
    explanation: "A packet sniffer (network analyzer) captures all network traffic passing through a network interface. When passwords are transmitted in cleartext (using unencrypted protocols like HTTP, FTP, Telnet, or SMTP), a sniffer can capture and display them directly. This is why encrypted protocols (HTTPS, SFTP, SSH) are essential - even if a sniffer captures the packets, the content is unreadable without the encryption key."
  },
  417: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "All computers run Chrome. You need to prevent third-party cookies from being saved. What should you enforce?",
    options: ["SmartScreen Filter", "Antivirus protection", "Cross-Site Scripting Filter", "Incognito"],
    answer: "Incognito",
    explanation: "Chrome's Incognito mode (InPrivate equivalent) blocks third-party cookies from being saved and prevents other tracking mechanisms. For enterprise-wide enforcement, administrators can configure Chrome policies (via Group Policy or Chrome Enterprise) to block third-party cookies. SmartScreen and XSS filters are security features for different threats, and antivirus doesn't manage cookie behavior."
  },
  418: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "Pop-ups can display a realistic operating system or application error message.",
    options: ["True", "False"],
    answer: "True",
    explanation: "Malicious pop-ups can be designed to closely mimic legitimate OS error messages, security alerts, Windows dialogs, or application notifications. These realistic-looking fake alerts are used in technical support scams and malware distribution. For example, a pop-up might display a fake 'Windows Security Alert' warning about a virus to trick users into calling a fake support number or downloading malware."
  },
  419: {
    category: "GENERAL IT SECURITY",
    type: "MCQ",
    question: "You need to push an application security patch to all 1000 Active Directory domain workstations. What is the quickest method?",
    options: ["Local security policy", "Logon script", "Group policy", "Windows Update"],
    answer: "Group policy",
    explanation: "Group Policy Object (GPO) with Software Installation is the quickest method to deploy a patch to all domain-joined workstations simultaneously. GPOs linked to organizational units (OUs) or the domain automatically apply to all computers in scope. Local security policy only affects individual machines (not scalable for 1000 computers), logon scripts require more setup, and Windows Update may not support custom application patches."
  }
};
