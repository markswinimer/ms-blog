---

path: '/blog-posts'

date: '2020-05-15'

title: "What the blog!?"

tags: ["dev", "Portfolio", "Boston"]

excerpt: "My blog on web development and the documentation of my journey, past and present, starts here."

---

I'm Mark Swinimer, a web developer in the Boston area. Welcome to my personal blog. I've wanted to create a blog as a personal space to exercise and reflect on the work I'm doing and the new technologies I'm learning. There are lots of things I've learned on my journey to share.

An introduction to kick things off. Growing up, I gravitated towards adventure and fantasy, and I looked in every corner I could find it. Video games provided so many opportunities to experience this and it's my love for video games that got me interested in tech. Like many a nerd, I wanted to make a video game myself. I fantasized about being a game developer and creating whatever I envisioned. Turns out deciding to learn game development to create a game is a mountainous task, as my 12 year old self discovered. At one point I had decided to learn C++ to build my own framework, something I wanted to happen overnight. It was the wrong way to go about things and it wasn't until later on in college that I'd fall in love with web development and design.

In studying graphic desing at college, I brushed up to web developement and slowly it took over my interest. I began learning html/css and creating basic websites for myself. I found tuorials for Java online and begun teaching myself the language. I was creating blackjack and mock banking applications shortly after. I was hooked and knew this new hobby would eventually become my career.

##Launch Academy
In 2017-2018 I attended the Boston Based tech boot camp Launch Academy. Launch Academy was a 4 month full-time on campus program that had me learning full stack web development alongside a group of like minded developers. I saw others experiencing the delights and the struggles of learning to code. My cohortmates and I learned together, troubleshot problems with each other, and collaborated on functional web apps. Methods like peer programming, brainstorming sessions, and hackathons brought me further into the world of development.

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
