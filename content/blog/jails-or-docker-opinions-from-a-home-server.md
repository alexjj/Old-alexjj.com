+++
title = "Jails or Docker: Opinions from a home server"
date = "2016-10-25"
tags = ["linux", "freebsd",]
description = "My opinions of each as a home user"
+++

Firstly, this isn't a detailed technical evaluation or comparison of the two pieces of software. It is merely an 'average' users thoughts on both as applied in a home server environment.

# Introduction

In the eternal struggle of deciding upon one's home computing setup, the home server is probably one of the only givens. Perhaps you could have a decent workstation which also acted as a home server but I like having a dedicated box. It sits and serves and is generally safe from my constant fiddling and tweaking - for the most part. For me the demands upon it are very low, mostly most but occasionally 2-3 users watching Plex, backing up or syncing content between other computers or remote locations, and sharing files over the network. Every so often I leave it encoding media with Handbrake. It could do so much more.

Browsing /r/selfhosted and the [awesome-selfhosted repo](https://github.com/Kickball/awesome-selfhosted) showed me what more it could do. However, I didn't like the idea of just installing all these things to the server. The most important part of it is serving Plex to everyone, particularly my wife! Plex is fairly robust and is self contained so the risk of screwing things up was slim. However, I also like trying and learning new things and I like setting up my server to be reliable and recoverable fairly quickly should an issue arise. e.g. I love zfs for data integrity and continuity. Really I should get another SSD for the OS to mirror it but if I can set up all the services to be quickly restored that's not much of a big deal. Plus starting fresh often brings improvements too. Tools like anisble and chef were options I considered but decided not to try at this time. I wanted separation to enable me to pick and choose several apps and test them out before deciding what I ultimately want to keep. I wanted the easy ability to wipe away an app if I don't like it and not worry about breaking something existing on the system

## FreeBSD

My server has been running FreeBSD for about a year or so now. Previously it was running Arch Linux. I really like FreeBSD for my home server. I still really like Arch Linux, but FreeBSD is so simple, efficient and insanely reliable. Initially, I didn't understand how the OS and software were kept separate, I guess I'd never really thought about it running Linux. After a while I realised how sensible it was (the realisation came when I didn't know where anything was installing to). It's how FreeBSD earns it's reputation as reliable and efficient. The OS maintainers can keep everything in check and everything works together. It's how Windows and OS X are. You get Windows and OS X updates and they don't impact the software you install. It makes a lot of sense. It also means you can have a stable OS and run crazy new software and (for the most part) not destroy your uptime. Having ZFS built in is great. I always had issues on Arch Linux with zfsonlinux not always mounting things and erratic behaviour - my data was always fine but minor annoyances. Anyway there's way better posts on why FreeBSD is good. 

There are a few things I don't like/didn't understand. Installing ports and packages was a bit confusing at first, until I realised that portmaster and pkg don't 'remember' what you installed as a package and what as a port. So I had a few install everything from packages then everything from ports moments. Building from ports is great, except I generally don't know what I do or don't want. Sometimes the whole build would stop because one thing wouldn't build and then I was left not being able to upgrade things. I think generally, for my usage, packages are adequate. Yes, I should've read the manual more or something but I did read the Handbook and this fact wasn't totally obvious to me as a new user. Having to maintain symlinks on python packages is a hassle I can't be bothered with. For a while I considered using the server as a desktop machine too but no Haswell graphics were available so it would have zero graphical power and I wanted to do photo and video editing on it. Some things didn't build or weren't maintained anymore, like Handbrake. Maybe I could take over maintenance but I probably don't know enough and have too many other things I want to learn and don't have time for any of them. 

# Jars and other containers

## Docker

This is the fancy, shiny, hip container system on Linux. Uses kernel magic and stereotypical developer lucky charms fancy name and cutsy logo to separate processes into isolated containers. I've seen lots of posts asking are they really secure and various other issues, I don't know about all that. I'm using them to make it easy to install/uninstall and maintain config and application data. Docker works great for that. The best part is the docker hub where other people post their containers and you can run them. There's official ones maintained by docker and then there's randoms. This is somewhat like the AUR on Arch Linux, which everywhere says don't install things you don't know and massive security risk etc. All very valid and true but I think most people are generally good intentioned and most stuff works fine. Luckily it's all open source so go look at it first if you're worry. 

What's great is that [someone](https://www.linuxserver.io/) has made a bunch of containers with all the typical home server apps on it and you can put it all together in a compose file and within minutes fire up a whole bunch of services effortlessly and with the application data kept on the raidz1 array have everything reliably setup. 

I suspect docker is never going to be as inherently as secure as FreeBSD jails, but the "social" sharing aspect makes it a great timesaver. Like all open source software, it works so well because everyone can work on it and improve it. The docker containers are no exception to this, so you can leverage everyone else's knowledge and accelerate yourself to get what you need.

Actually I think someone made docker run on FreeBSD but that wasn't they way it was meant to be run so probably a silly idea.

## Jails

This is FreeBSD's (older and original) answer separation. It comes built in and essentially creates an independent mini-system that generally behaviours like a regular FreeBSD environment.  Once you have one setup, everything you know about running FreeBSD applies inside the jail and so you don't need to learn anything more. They're very efficient resources wise and using basejails, and zfs they can be hard drive space efficient. They're pretty simple to setup, probably networking is the most complex part of it. 

You make a jail, log in and just install things as if you have a shiny new computer. If somethings goes wrong or you don't like it, you can just kill the whole jail and your base host is unaffected. 

A recommended and reliable tool to manage jails is ezjail, and it comes with flavours. I like they way they spelt that. This is a recipe and files that the jail can be built with. e.g. a list of packages to install, timezone setup, adding using, etc. all automatically when you make the jail with the flavour, or a default flavour can be set. So one could create a bunch of flavours and then reliably create the same jails over and over. Similar to docker recipes. They only difference is that I have to write them and I've not found many online to use. I can put the time in once to make them, plus the time to work out the best way to set everything up.

## Others

Virtulisation is probably most of the others. KVM, XEN, OpenVZ Virtualbox, bhyve, VMWare, Parallels to name a few. These make a pretend computer and you run inside it and it looks like a whole new computer. You tend to need more space and resources to run these, unless you cheat and borrow some but if you use too much and can't pay it back then hello 2008 financial crisis. I didn't intend to write about this and can't be bothered to do this section justice.

# Conclusion

Unfortunately I think I'm going to go with Docker on Linux. Why abandon the stone fortress of FreeBSD? It's simply due to the ease of using other people's containers and getting the benefit of, no doubt, hours of their time in perfecting the setup. I have lots of other things to do, and whilst I enjoy system administration I enjoy other things more. Although now I need to find a time slot to install Linux when no-one is watching anything...!

*Update - 2016-10-31:* Over the weekend I installed Arch Linux, Docker and a bunch of services. It was very easy to setup, write a docker-compose file and quickly have several services running in no time. However, (too) late Sunday night I reinstalled FreeBSD.

Why?

* I missed ZFS being built-in
  * FreeBSD makes ZFS on root easy, it's possible in Linux but I didn't do it as I was uncomfortable to commit to it. I didn't want issues when I next did a kernel update that potentially rendered my system unbootable. Maybe if I'd gone with Debian I'd be okay, but then I'd be stuck with old packages and other Debian quirks.
* Turns out I can't just accept other people's docker containers.
  * It's not I don't trust other people, I just want to know what is installed on my machine
  * One I installed didn't work. I then had no idea how to fix it other than find another container on docker hub to install, which also led to me to:
  * I kept thinking that I'd make my own containers to replace the ones I installed. Things didn't work, or I wanted to set up something in a particular way for my system, and I just wanted to know what was installed. This sounded a lot like setting up my own jails, and goes against the very reason I wanted to use docker in the first place.
  * I was missing the ability to use the container (easily) as just another system to play about with. I realised I want a jail mini-system just to install things as normal and do stuff but knowing that when I'm done or if I don't like it I can just wipe it away. You can do that with docker but it seemed convulted.
* Linux felt...messy
  * I really do like the separation of base system and installed packages.
  * I like updating the OS with it's tools and know it'll still work when I reboot!
  * I like having a manual to refer to!
  
It's entirely personal preference, but FreeBSD is mine.

## How tos

Just google it. FreeBSD  - see the handbook. Docker - see the docs on the website! There are too many people writing how tos which get old and then are wrong. I do like FreeBSD, and other BSDs, style of using man pages. I've grown up with Linux and always went to Google to find the answer and generally found it on someone's blog or a forum. Latterly the Arch Wiki has been my source of information. Since using FreeBSD I have found myself typing ```man x``` instead and often finding the answer there. Linux has man pages too, but I'm not sure why I never used them before. Maybe it's more that I'm older and more patient to read through documentation.

There's still a place for blogs and wiki guides for when you're setting up whole systems of several pieces of software together. Generally the man page only tells you how to setup that particular thing, not how to use it with others.