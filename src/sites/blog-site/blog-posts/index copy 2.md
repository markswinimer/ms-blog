---

path: '/blog-posts'

date: '2020-05-01T12:00:00+00:00'

title: "This is a new title"

tags: ["dev", "II", "Boston"]

excerpt: "My first run of creating a personal blog. Welcome to my journey that is a blog and I will be writing about blogs. I'll also be writing about why blogs are blogs and what this sentence means."

---

I used to have an Apple laptop as my daily driver. I could do almost everything there; development, proposal writing, music composition etc. But the fear of vendor lock-in, the concern that I am depended on Apple’s whims and vices — which are arguably very expensive — led me to seek a new solution.

I started building a machine learning workstation; a great CPU, lots of RAM and a competent GPU, among others. My OS of choice for almost anything was Ubuntu, except I needed Microsoft Office for proposal writing. Office online is just not there yet and, let’s face it, LibreOffice is a disaster. So, the solution was to dual boot Ubuntu and Windows 10. The freedom you experience moving from Apple to Ubuntu is unparalleled, and the options you have building your own PC are almost infinite.
Dual boot was the answer for a long time. One million of context switches later, WSL came. Thus, I started moving a portion of my workflow to Windows. But still, there were many things missing. However, WSL 2 seems to be a game-changer. In this story, I will show you how to move your development workflow to Windows 10 and WSL 2, its new features and what to expect in the near future.
What is WSL 2

WSL 2 is the new version of the architecture in WSL. This version comes with several changes that dictate how Linux distributions interact with Windows.

With this release, you get increased file system performance and a full system call compatibility. Of course, you can choose to run your Linux distribution as either WSL 1 or WSL 2, and, moreover, you can switch between those versions at any time. WSL 2 is a major overhaul of the underlying architecture and uses virtualization technology and a Linux kernel to enable its new features. But Microsoft handles the nitty-gritty details so you can focus on what matters.

##Installation

Microsoft promises a smooth installation experience in the near future for WSL 2 and the ability to update the Linux kernel via Windows updates. For now, the installation process is a bit more involved but nothing scary.

In this example, we will install Ubuntu 20.04 on Windows 10. But the process is the same for any distribution available in Microsoft store. First, you should enable the Windows Subsystem for Linux optional feature. Open PowerShell as Administrator and run the following command:
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
On the next step, we will update our system to WSL 2. For this, Windows 10 must be updated to version 2004 and Intel’s virtualization technology must be enabled in BIOS settings. Launch PowerShell as 
Administrator and run the following command:

    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart

Restart your machine to complete the WSL install and update to WSL 2. Then, you need to set WSL 2 as our default version when installing a new distribution. For this, open PowerShell as Administrator and 

run the following command:
    
    wsl --set-default-version 2

You might see this message after running that command: WSL 2 requires an update to its kernel component. For information please visit https://aka.ms/wsl2kernel. Follow the link and install the MSI from that page to install a Linux kernel on your machine for WSL 2 to use. Once you have the kernel installed, run the command again and it should complete successfully without showing the message.
