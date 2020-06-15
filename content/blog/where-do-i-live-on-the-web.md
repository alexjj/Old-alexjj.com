---
title: Where do I live on the web?
summary: Navel gazing to find the perfect system (that doesn't exist).
date: 2020-06-15T21:05:11.180Z
category: blog
toc_run: false
---
I want to sort out my web setup - again...seems like an annual event...or even less frequently as that. At a high level: I have things I wanted to write about but never get round to it. This post is where I dive into the details of what I want, comparing options and ultimately hoping I find something that enables me to write what I want.

##  Why do I want a web presence?

* I like sharing useful things I find/figure out for other's benefits.
* Control my presence. If I'm absent then it says nothing
* Build network
* Demonstrate my skills and competencies
* Share for myself to look back on later

## What's important to me in doing this?

* Minimise cost
* Minimise friction to add content
* Some way of having conversations with people
* Minimise tracking/js junk/distractions
* Keep all my content either on my machine, server or (auto)exportable (and easily reusable)

## Options

* Static site
  * Pelican
  * Hugo
  * A million others on static gen
* Micro.blog hosted
  * I like the apps, community and spirit of it. 
  * The indieweb stuff means I could have this with other system but this makes it easy
* Other hosted options:
  * write.as
    * Can have multiple blogs under one account.
    * A photos site
    * Guess I'll be starting the 14 day trial - and this post will be the first on it!
* Self-hosted CMS
  * Wordpress
  * Ghost
  * ...[many others](https://github.com/awesome-selfhosted/awesome-selfhosted#content-management-systems-cms) or [blogging specific ones](https://github.com/awesome-selfhosted/awesome-selfhosted#blogging-platforms).
* Tiddlywiki
  * It's a wiki but quite unique so gets its own top level bullet :)
* A wiki
  * dokuwiki
  * ikiwiki
  * ...+++

## Review of options

I've always targeted very cheap/free hosting arrangements as I often go for long periods (years!) between writing anything and don't want to pay for something doing nothing. Conversely, if I was paying maybe I'd feel guilty and then use it. I also like to do things myself - self-hosting or configure things just how I like. Blogging/writing always ends up being about 80% orchestration and 20% actually content. The setting up was the fun part and then the writing starts well but ends up falling down. 

My favourite last few systems have been static generators. Think I've tried 3 or 4 and currently using Pelican. These are great for self-hosting and can be setup with zero cost - github/netlify arrangement makes for a very nice hosting solution. Plus I keep all the content on my computer, as well as "backed up" on Github. I did setup the Netlify CMS which has a UI for writing new posts, or I could've linked my repo to the variety of online markdown editors. I still didn't use it though...

If we set cost aside for now and discuss the options:

### Static Sites

A good starting point seeing as this is where I am now. The sites are exactly as I want, but all my time goes into the configuration. Even once it's all setup I still find a lot of friction to get going. The CI of netlify means I can just add a post to github and it'll rebuild. I have long since forgotten how I setup my current site, and whilst I could add to it, I worry that I'll want to change something. Part of me feels like I just need a change to get going again and I can't be bothered to learn another static site. 

### Micro.blog

Recently found this community and I really like the idea of it. It adds some social aspect to what has been missing from my site - although given the frequency of posts perhaps this isn't a good gauge. I like the apps on my phone for browsing and posting. Having used the trial for a little, and getting an extension, I'm not sure I want another time sink to endless browse other people's musings. So do I really want a social thing or just a publishing platform - with others commenting to me about my post. 

It does offer a self-hosted option (via Wordpress or something else) as it supports indieweb protocols and allows information to flow back and forth. This is probably what I'd ideally like to do, but having spent an evening researching this, it's starting to fall into the static gen endless configuration nonsense. Probably Wordpress is simple enough, install a few plugins, but I'm not sure I want to host wordpress...

Micro.blog also charges extra for multiple sites. One thing I've not mentioned is that I have a pictures site which right now is hosted myself on a static generator. It's a nice app but python2 and hasn't been updated (not that there's issues) but with python2 dead it might have a limited life. It's also a bit of a process to update. Be nice to make this a little less hassle - although iPhotos shared photo stream is a convenient way to share pictures. 

### Write.as

Found this one via Micro.blog and only just started having a look at it. Has a free trial so signed up. I like that it makes writing very easy, and publishing easy. Not much in the way of comments (yet) but I'm sure it can integrate with micro.blog or mastodon instance.  All in all, it looks like a very nice platform. Multiple blogs, or even setup for writing books/notes, has a photos gallery thing (does cost a little bit extra) and the principles around it are reassuring. Costwise it's similar to the others, if I want to commit I could go 5 years for $180 (~£2.40 a month) for a bargain. Right now it's probably my favourite but I have to see how it goes. Themes/custom CSS is okay, although tried to replicated this site and had some weird issues between Chrome and Firefox.

I like having a private blog site as well, for journal or just writing. Or at least I like the idea of it.

Aren't any mobile apps (that work), but guess can use the 

### Self-hosted CMS

I do like self-hosted, and using open source software, configuring and running servers....but is that how I want to spend my time? I don't have much time now, and more puppies to look after is not something I'm looking for. I would get exactly what I want, after setup, and depending on the platform it would integrate with other systems. Probably pick a big one like Wordpress or Ghost - they have nice browser editors and plugins to make things work well. Could run on my home computer for a free hosting session, but I prefer not to - for responsiveness and keeping people away from my home network (rightly or wrongly assuming that it matters). Otherwise, I'd need a VPS - there are plenty of cheap ones (I have some already) and I could set it up quickly. Just depends if I want to or not. Again, time...

In terms of self-hosting in general - why do I not want to pay for a service? Fear of losing my content? Don't want to spend money? Look "dumb" because I can't setup my own services and tools? I think it comes to a general principle of how much do I value my time and how should I use it? Just because I can, doesn't mean I should. Also setting up a server and installing Wordpress isn't that hard in the grand scale of things so does it really make me "look good"...

I just remembered I don't like using things that have a database as now it's another step when backing up. Probably as I've never researched the best way to back it up - and perhaps running using docker and on my home server would make that very easy.

### Tiddlywiki

Now this is a product I really like. I think it's excellent for a personal note system/wiki. The way it works is very clever and functional. I have one setup that I use as my personal notes system and daily journal (not that I often write in it. The tiddlers are ideal for adding a little note and throwing in the system but then being able to find it again. I'm going to be keeping this. Could it be my website as well? Maybe... Certainly could have another one which is my blog - could even be static hosted for free with a bit of jiggery-pokery (manipulation) to setup the hosting. It is very easy to use and I've seen lots of nice blogs using it. I like published articles to be a bit tidier/less complex to read and find. People expect blog posts in date order from a list. Not some cards that can be opened and closed and come in and out of the page. I think all the advanced features aren't necessary on a blog.

Be good to keep systems separate such that I get into the right frame of mind when using them. 

### A wiki

I do like wikis. Much of my content has been recipes - Linux flavoured - and a wiki is a nice place for them. I like to bring pieces of information together and a wiki is great for that. I really like dokuwiki and ikiwiki. Both of which I've used a lot in the past. In fact my dokuwiki site is my longest running hosted service (although a recent update [where it told me not to auto update but I did anyway...] broke it). Dokuwiki I can use ACL to keep private and public sections and it has plugins that make blogging work. I've always like the style of dokuwiki, and everything is saved to plain text files - which makes it very easy to back up.

ikiwiki has been a wiki/blog/content site that I've enjoyed for many years, although could never commit to fully using it. It's still maintained but I fear for the perl longevity - probably unjustified as many people are still using ikiwiki, and perl. Everything is plain text files, and the nice thing is that it's statically generated, so that can help with hosting options. It has blogging, commenting and wiki functions straight out of the box. I remember one time spending ages customising it and rearranging things to make it into my whole site. Talking about it now makes me want to use it again. Technically speaking it does have everything I want, although falls into the self-hosting bucket and time discussion. I should have some notes somewhere about setting it up, and maybe even the CSS and template changes I did. Whilst I quite like its default anti-theme, it's a bit harsh for others. 

## Conclusions

All through this post I'd made up my mind it was Write.as. Perhaps because I've just found it and it's been nice typing away 1800+ words on this site. However, just doing that last paragraph on ikiwiki made me doubt that decision. I must have a soft spot for ikiwiki, not sure how or why, because I always pine after it whenever I see it after a long time. Although it doesn't integrate with anything, beyond putting out a RSS feed. So lets say it's between Write.as and ikiwiki. Ikiwiki could always be swapped out for some other service, but I think between all the options it's Write.as vs. xyz at this stage.

### Write.as

#### What's important to me in doing this?

* Minimise cost - **$60 a year, or $36 if I commit (probably not right now). Not really that much**
* Minimise friction to add content **Very easy, open the website, and go. Save to anon if I'm not ready**
* Some way of having conversations with people **Have to integrate with other platforms until its comment systems comes out but not bad**
* Minimise tracking/js junk/distractions **The writer is certainly minimal, and think I can readily replicate my home site's theme**
* Keep all my content either on my machine, server or (auto)exportable (and easily reusable). ** Has an export function, possibly manual only**

### ikiwiki

* Minimise cost **Run on a VPS - £15/yr or other similar lowendbox/BF sales item. Free if on my home server. It is cheapest.**
* Minimise friction to add content **A lot of setup time but then mostly okay**
* Some way of having conversations with people **Feed integration with micro.blog? Does have comments and discussions built in**
* Minimise tracking/js junk/distractions **It's very minimal out of the box!**
* Keep all my content either on my machine, server or (auto)exportable (and easily reusable) **I own it all already. Just have to setup some backup system e.g. push to github.**

So my criteria whilst seemingly useful at the start, didn't really help :) 

Depends on that setup time, but let's see how these 14 days of trial go and then maybe I'll know if that setup time is worth it.

## Notes

* This is a nice [commenting](https://gitlab.com/commento/commento) system