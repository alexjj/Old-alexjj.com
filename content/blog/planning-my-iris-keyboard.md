---
title: Planning my Iris keyboard
date: 2019-01-04
category: Hardware
tags: keyboard
summary: The journey to endgame continues. 
toc_run: false
---
![Iris Example](/images/iris-example.jpg)

It's been a while but suddenly I decided I needed to build a new keyboard. This time it'll be the perfect one that I'll love forever and never need to change...

I've been looking at split keyboards for a while now. I did join a group buy for a Let's Split but that never worked out and I asked Paypal to refund my money on the very last day of their protection. The seller said he was really ill and it seemed pretty bad if it was all true but after 6 months I'd given up hope. I'd seen the Iris board and other similar split designs on reddit over time and thought they all looked good. I also wanted the RGB 🕺

The keyboard was originally designed by Lewis Ridden but picked up and "commericalised" by [Danny/bakingpy](https://keeb.io). [Here's]( https://medium.com/@keebio/lewis-ridden-and-the-story-behind-the-iris-7a70b03cfb80) the back story of how that happened. It features "ortholinear" key layout, in two parts that can be moved around and even tented to find that perfect comfort spot. Ortholinear essentially means all the keys are vertically aligned, as opposed to being offset like traditional keyboards. The idea being that your fingers move vertically up and down when you bend your knuckle and not diagaonlly, and therefore "better" to use. After 20 odd years on a traditional keyboard, it's a lot of muscle memory unlearning before we get to that better. 

As my blog [shows]({filename}setting-up-and-using-my-ergodox.md), I used to own an ergodox. The Iris is very similar in layout and design but smaller and has fewer keys -  only 48 plus between 6-8 on the thumbs. I sold my ergodox as I didn't like the yellow gaterons I'd chosen, they were too stiff and made typing uncomfortable. This time I wasn't going to make that mistake, and I'm going for Gateron Clears. These are linear switchs but have a very light activation force of 35g.

### Layout

I like the idea of 2u on the thumbs. My experience with the ergodox was that it was generally hard to hit that top thumb button and so it was rarely used. It does eat up a whole key per side that might be important now there's fewer but just means I need to be smarter with my layout. I also think it adds some difference to the look. Here's one with tenting done with some bolts.

![iris-tenting](/images/iris-tent.jpg)

There seem to be lots of user submitted layouts in the qmk repo, so should help for ideas. I generally start with the default for a while and then start tweaking. Most of the time the default is pretty good for the bulk of the keys and I just need to change a few things to suit how I like to type. For example, I've noticed that I use my left thumb to hit the space bar, so it makes sense that Space is on the left 2u thumb for me - the default puts it on the right.

Getting the layout right takes a long time...and qmk offers so much customisation it takes a long time to get to that perfect spot. I have that to look forward to...assuming I manage through the initial 10 wpm stage of the transition.


### Parts

Pretty much everything for the iris can be bought from [keeb.io](https://keeb.io). PCB, case, LEDs, etc. Switches and keycaps will need to be sources elsewhere. I ordered my switchs and caps from [KBDfans](https://kbdfans.cn/) as everything is very reasonable. It comes from China so takes a few weeks but I'm not in a rush.

Keeb.io sells acrylic and metal cases but depending on stocks may not have any or all that you need. Conveniently, they offer the designs for the case on [Github](https://github.com/keebio/iris-case) so you can get them made yourself.

I looked into Steel from Laserboost and Lastergist, I estimated the cost to be around $105 and $125 respectively for brushed stainless steel. If you want the figures to enter yourself or buy they are:


* Bottom path length: 626.4 mm
* Top path length: 2224.7 mm
* Height: 133.9 mm
* Width: 153.7 mm
* Thickness: 1.5 mm

I did find someone on reddit selling acrylic cases so bought them as they were very reasonable, and whilst I love the look of the steel cases didn't really want to double the cost of it just for that. If I do *really* love it, I could always replace the case or build a new one - so I could have one at work and home!

I'd ordered all this a while back and now it's all ready to go. I'll post the build and what I think of it soon.

![iris parts](/images/iris-parts.jpg)

### Links

To find everything you need to build one yourself:

* [Store page](https://keeb.io/collections/split-keyboard-parts/products/iris-keyboard-split-ergonomic-keyboard)
* [Build Instructions](https://docs.keeb.io/iris-build-guide/)
* [Firmware](https://github.com/qmk/qmk_firmware/tree/master/keyboards/keebio/iris)
* [Case files](https://github.com/keebio/iris-case)
* [Laser cutting](https://shop.laserboost.com)
