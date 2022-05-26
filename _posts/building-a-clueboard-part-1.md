+++
title = "Building a Clueboard. Part 1"
date = "2016-04-06"
tags = ["keyboard",]
description = "Looking for the perfect keyboard." 
+++

## Introduction

After not having much success with my ergodox, I decided I needed to find an alternative. I had, at least, learnt a few things on the way with the ergodox, namely:

1. I wanted to use the [quantum firmware](https://github.com/jackhumbert/qmk_firmware) - or at least have the keyboard programmable.
2. I'd like an UK ISO layout (think massive Return key)
3. Tenkeyless at the biggest
4. I still really want the Carbon SA keycaps.

![dat Return](/images/carbontkl.jpg)

## The search

### Planck

A keyboard that appears a lot on /r/mk is the Planck. This is a so called "ortholinear" keyboard designed by Jack Humbert (who wrote quantum). This is a very small keyboard, 40% of a regular one, with just 48 single keys arranged in a 4x12 orthongonal layout. It's aim is to keep your hands on the home row and have very little travel needed to press all the keys. It gets around the limited numbers of keys by using several layers, usually at least 2 layers on top of the base. These can be bought directly from [Jack's website](http://olkb.com/), or from massdrop when it cycles around. Jack was just finishing off the last massdrop round where he offered to build each one if requested (and paid for), compared to his site where you buy the kit and solder yourself. Turns out this was a massive chore and backed up his store. A new massdrop round started and only offered a kit, and so I signed up.

![Planck](/images/planck-layout.png)

It doesn't satisfy all my criteria but it's not too expensive (for custom mech board!) and I'd like to build one so I'll stick with it. I then realised I could "justify" it by also replacing my IBM Model M at home. So Planck for work and this new programmable ISO for home. However, I still don't know what to get.

### WASD Keyboards

Buying UK ISO mechanical board is hard enough in UK, but in the US it's even harder (unsurprisingly). However, one site I knew offered ISO layouts from looking before was [WASD keyboards](http://www.wasdkeyboards.com/). They do an 88 key tkl model with [ISO layout](http://www.wasdkeyboards.com/index.php/products/mechanical-keyboard/wasd-v2-88-key-iso-custom-mechanical-keyboard.html). You can also choose key switches too. It's a very nice model, well built and has a few extra nice features, including being able to completely customise the keycaps (although I still want SA). They also offer a special "Code" model with backlighting too. Either of which would be a perfect candidate, especially at home where other people will need to use the keyboard. However...it's not programmable, and building one is a lot more fun! If all else fails I can come back to this.

It's on my shortlist. Maybe it would make a nice keyboard at home, and do I really need it to be programmable when it has all the keys? I've got the planck to play with for that.

### Clueboard ‽

Somehow, and I can't remember how, but probably browsing /r/mk, I found the [Clueboard](http://clueboard.co/). This is a custom keyboard based off the Leopold FC660M model - a 60% keyboard but with arrow keys and two extra buttons - ins and del on the Leopold I think. Having used a Poker 2 for a long time, one thing I did occasionally find I was looking for were arrow keys (have to use Fn+WASD) and it would be nice to have a couple of extra keys, although not for ins and del but maybe Page up and down. Looking in more detail at the clueboard it seemed that it offered a great deal of flexibility. The PCB he designed allowed several layouts possible. Once of which was ISO! When I found out it used the quantum firmware I was sold!

![All the possibilities](/images/layouts.png)

#### Layout Design

Given the huge amount of flexbility the PCB offers (which by the way is incredible, as a PCB means no hand wiring, and the teensy controller is built in) and I got to work in designing my layout. I first just used GIMP to edit the layout image above to make some designs, but then thought it would be better to see what it looked like with the Carbon keys and have them all next to each other to compare. A great tool is the keyboard layout configurator, it allows you to design keyboard layouts. You can even export it to another [tool](http://builder.swillkb.com/) which creates the plate for you to send off somewhere to be made. Here's [mine](http://www.keyboard-layout-editor.com/#/gists/db01d8e7b0b8ce5b3139090f982df080), it's 6 possible layouts I evaluated.

I quickly narrowed it down to these two:  
![A normal keyboard](/images/regulariso.PNG)

> Mostly a regular (66%) keyboard

![Maximised row 4](/images/maxiso.PNG)

> Maximising the number of keys on row 4

A made use of the colouring on the configurator and chose the Carbon one, along with a few of the novelty keys.

I really like the look of the maximised row 4 layout. Given it's programmable having more function modifiers seems like it would be really useful. I opted for the 2x2U keys as they're a lot more common to find than a single 4U key, plus I may use one for a shift or some other modifier. I've noticed I always hit space bar with my left thumb between V and B, so the left 2U key would be enough of a space bar.

#### Case and switches and flashy lights

So I'd decided upon the Clueboard, I now just had to pick the case and the switches. Oh, and I wanted LED backlighting...who doesn't like flashy lights.

Given I want LED backlighting (which is different from LEDs under the keys, which the clueboard supports that too: on Esc, PgDn, CapsLock and the arrow keys), I wasn't going to look for a milled aluminium case - even if they are very nice. That left the acrylic cases. These are made up of layers of different coloured acrylic to build the case. Whilst the clueboard store offered a great number of colours and combinations, there weren't many pictures of the colours and how the layers made up the case. I posted to [reddit](https://www.reddit.com/r/clueboard/comments/4cgm0z/planning_my_clueboard/) talking about my design and questioned some other people on the [/r/clueboard](https://www.reddit.com/r/clueboard) subreddit and got some good information and a nice diagram that one person created from another's case photo. (I had to adjust it as they mistook the middle layer as two layers)

![Build a case](/images/caselayers.png)

From this image I decided I wanted a black top and base and clear on the sides, I could always use some spray on froster if the clear was too transparent and the backlighting didn't work how I wanted it to. My design of the two space bars meant I'd need another 2u stabiliser, but Zach at Clueboard was kind enough just to throw one in for free.

#### Switches

These are what make a mechanical keyboard...mechanical. For more science I'd recommend the /r/mk wiki, but generally there are three types of switches commonly sold today:

* Linear - smooth stroke up and down
* Tactile - Has a bump when it actuates
* Clicky - Makes a click noise when it actuates. Generally considered noisy.

Tactile and clicky offer feedback when you type as to when you've actually triggered the key. Keys also come in different resistances, i.e. the amount of force you need to apply before it actuates. The types and force generally get represented by colours of the stems, and so keys are known as blues, or blacks etc.

![All the colours](/images/switches.jpg)

Switches have been made by Cherry for a long time, and recently a company called Gateron has started selling similar switches, and they seem just as good - perhaps even better? They both make coloured switches but they're not always the same strength or type, so make sure you check before you buy!

The ones in the image are Gaterons:

* Blacks - 50g Linear
* Blues - 55g Clicky
* Browns - 45g Tactile
* Clears - 35g Linear
* Greens - 80g Clicky
* Reds - 45g Linear
* Yellows - 50g Linear

My Poker 2 has Cherry Browns, 45g tactile, and I like the actuation feedback but they've always felt a bit weak. The Ergodox I had, had Gateron yellows. I like the extra force they required and I did like linear more than I expected, however, I'm not sure I wanted linear again. Something that I noticed on reddit were the [zealios](https://zealpc.net/products/zealio) switches. These are like MX Clears (a heavier brown) but supposedly much smoother and more defined, due to their unique shape and spring.

![Different bump](/images/zealio.jpg)

ZealPC still had a group buy running offering discounted prices, so I figured why not! I like browns and if these are better than it should all be good. Plus if I don't like them I'm sure I can easily sell them on the forums.

#### Flashy lights

The final piece is for the keyboard to have flashy lights. Who doesn't want that?! The Clueboard has support for 14 [SMD LEDs](https://www.sparkfun.com/products/13667) which can soldered on to the board and can be programmed and controlled from the firmware. I've not dug into it yet, but it seems like the quantum firmware offers several built in modes, like rainbow, pulsing and knight rider style. I'm excited to play with it. These LEDs can due every colour and their hue/brightness etc. can be adjusted from the keyboard. I'm currently not planning on installed LEDs under the key caps, I may change my mind and add them, perhaps to show what layer is selected or something, but I don't plan on having transparent or caps with slots to show the light, so it seems a bit of a waste.

### Waiting

Now just to wait for all the parts to arrive. I ordered my soldering iron and solder, someone recommended Kester 44 63/37 solder in either 0.02" or 0.031". 63/37 solder is eutectic which means that it goes from liquid state to solid really quickly, and no mushy stuff in between cooling periods.  They set their iron to 650°F with a 3-3.5mm chisel tip. So I'll see how the soldering goes, first time in about 15 years!

I plan on starting to design the layers and actual key layout whilst I wait. That may help me determine if I still want the maximised row 4 layer or whether a regular ISO layout is good enough.

The wait for Carbon SA is going to be huge. They've not even dropped again, although [rumoured](https://geekhack.org/index.php?topic=72241.msg2039016#msg2039016) to be some time this summer. Even if that's true, at best they'll arrive by Christmas 2016, more likely by March? 2017. I think they're worth the wait though:

![Sweet caps](/images/endgame.jpg)


### After thoughts

One thing that did occur to me, after I'd ordered everything, and inspired by this [post](https://medium.com/@DavidNZ/hand-wired-custom-keyboard-cdd14429c7b3), was that maybe I should make my own keyboard from scratch. Using keyboard layout configurator and the plate designer makes it really easy to generate a plate template. There are many companies out there that will cut and make plates and cases from designs and ship them to me. This means I could create my perfect layout and a plate and case to house it. Truely this is endgame material?

This would come at a cost, having one of things made generally isn't cheap. It would also mean that I'd need to hand wire the controller and the key caps. Supposedly not hard just intricate work.

However, I don't think I'm ready for this yet. I would want the board to be perfect, and I'm not sure I've had enough experience to know what makes a perfect board. Although I do really like the layout in that post. Probably there is no perfect layout, but it's fun trying to find one.
