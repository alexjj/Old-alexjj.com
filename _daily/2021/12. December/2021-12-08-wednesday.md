---
title: Wednesday, 8th December, 2021
date: 2021-12-08
tags: ['Daily Notes']
---

[This presentation](https://speakerdeck.com/whitep4nth3r/how-to-prevent-the-collapse-of-society-by-building-an-accessible-web) about web accessibility is both very funny but also makes very good points about the state of the internet. Even as a completely able internet user the amount of crap websites pack in and everyone's obsession with javascript is very annoying. There are some stores that don't work on my home network as I block ad domains. This mostly annoys my wife when she wants to buy something and either I have to disable everything or she switches to cellular and buys it on her phone. My stance is that if the company's website is that bad then I'm not going to buy from them. My website is not at all important but I like that it's clean, fast and has minimal javacsript. It would have none but I like having search, and the image zoom when you click on an image. I'm also looking for an image gallery which might have to be javascript as well. I was looking at [fotorama](https://fotorama.io/), but it needs jQuery and that put me off. I'm sure I could do something to improve accessibility and I might look into some of the tools to check the site like:

* [WAVE Web Accessibility Evaluation Tool](https://wave.webaim.org/)
* [Colour contrast checker](https://colourcontrast.cc/)
* [axe® - The Standard in Accessibility Testing](https://www.deque.com/axe/)

I made a list of all the non-fiction books I want to read...18 of them! Not sure I'll get to them all in 2022. Have to think about what and prioritise them. 🤔🧠

I want to make a book fo all our old DayOne journal entries. The book making is easy, but I really want to review all the previous posts first. There's about 600-700 😰. I just want to get rid of things that don't fit. It's 99% family but occasionally I thought I'd try it with work. Don't know why I didn't start a new journal for that. If I'm paying for it to be printed I don't want rubbish in there, but at the same time this might take me forever and then I never print it.

It's nice reading it all though. Even the stuff I delete afterwards.

Loqseq, git and Github could be a good solution for a work/private journal. Whilst there's nothing much to learn about Logseq, there are some good [practices](https://discuss.logseq.com/t/three-choices-new-users-need-to-make/3411)/methodologies people have developed to make the most of it. I've just got so used to Tiddlywiki I don't really want to learn something else. There's also no real mobile solution - editing or even viewing. There's convoluted systems but that's not what I'm looking for. So back to TW. Probably for the best.

I wanted to minify and concat all my CSS into a single file, so that it was one request. I don't have too many on this site: the main CSS, code highlighting, and then some CSS for the [zoom javascript](https://github.com/nishanths/zoom.js) plugin. However, I occasionally tweak, add, subtract things from my main CSS and re-minifying it was a pain. Luckily I have a script from the static photo site I like to use and just copied that over. Now I can edit the main CSS, run the script and commit the updated version to the repo. I want to maintain the order of the CSS in case highlights or zoom has to overwrite something else, so I just number them all and it adds them in order.

```bash
#!/bin/bash

# minify all .css-files
ls -1 *.css|grep -Ev "min.css$" | while read cssfile; do
	newfile="${cssfile%.*}.min.css"
	echo "$cssfile --> $newfile"
	curl -X POST -s --data-urlencode "input@$cssfile" https://www.toptal.com/developers/cssminifier/raw > $newfile
done

# merge all into one single file
rm -f styles.min.css
cat *.min.css > styles.min.css
```
