title: Setting up and using my ergodox
date: 2016-03-27
category: hardware
tags: keyboard
summary: Creating a layout for the Ergodox keyboard. 


## Introduction

For a long time I've been using mechanical keyboards. I enjoy the feedback they give when typing on them and I also like the customisation. For several years I've used a Poker 2, and recently took it to work to use there. I liked the small size of it, it's a 60% board - meaning it is only 60% of a full sized keyboard. This allows me to keep my mouse close to my keyboard which helps reduce RSI pains. It also feels efficient to use. For a similarly long time I've been looking at the Ergodox keyboard. This is an open source keyboard designed by the user base and has to be assembled from components. It has two separate parts, one for each hand and has a thumb cluster. A Teensy logic board controls it and means it is completely programmable. For the past few years Massdrop has been running group buys for all the components of the ergodox and even an assembly service. There are also a couple of people on reddit and geekhack forums who make them and sell them assembled. In 2015 an indiegogo kickstarter-like campaign was started for the ergodox, called the [Ergodox EZ](https://www.indiegogo.com/projects/ergodox-ez-an-incredible-mechanical-keyboard). This offered a fully assembled keyboard with a sturdy body and optional tent kit (to angle the keyboard sides) and wrist supports. You got to choose the types of mechanical keys as well. The price seemed good (it was expensive but similar to the massdrop runs), so I went for it. A few months later and it arrived!

![Ergodox Render](/images/ErgoDox_001.png)

> Render from ergodox.org

![Poker 2 at work](/images/poker2.jpg)

> My previous setup. The joystick mouse is pretty cool.


## First impressions

It looked great! I plugged it in and started typing...whoa, what is this. I did not like it. The Gateron yellows I went for felt great (linear - similar to Cherry blacks), but the layout was very hard to adjust to. I could barely type even 20 wpm, and had a huge error rate. I also began to get severe discomfort in my left shoulder, which was weird given this is meant to be an ergo board. I messed about with it for a few days but in the end put it away. I contacted Erez Zukerman, the campaign founder, about it. They did offer for me to return it to Thailand for a refund and gave me some advice about how to set it up. I tried and then took it to the post office. However, it was going to cost $60 to send it back. In the end I just put it away and ignored it for 6 weeks. I could try and sell it on reddit or eBay but I knew I'd lose my money. After a while, I started reading some threads online about using the ergodox and how everyone loved it, so I thought it was perhaps just me. Many people said they found it hard to type on at first but after perservering with it they got used to it and really enjoyed typing on it.

About the same time I bought a massive bag of random key caps from Signature Plastics and started making some keycap layouts. I got the ergodox out and started making it up with SA keys - which I now love! I decided it was time to use the board again. This time I'd configure the keys properly and take the time to learn how to type properly on it.

![SA caps](/images/rl-layout.jpg)

## Configuring the layout

When I first got the keyboard I used the [massdrop configurator](https://www.massdrop.com/ext/ergodox) to make my layout. This is pretty good for a website but it does have limitations when compared to the [quantum controller](https://github.com/jackhumbert/qmk_firmware) that's available. So I forked it and started editing.

My plan was to use this keyboard at work, and as it's a laptop with US key layout I though it was best to stick to that. However, I really like being able to type £ without having to Google gbp symbol and copy and paste it. So I figured I could programme it into the keyboard! The quantum firmware supports unicode, which means there's endless characters and symbols available to use. After many hours of faffing about and changing the code and registry edits in Windows I realised that (and I have always know this) Windows sucks. In this case, specifically for unicode. You can enable it with a regedit tweak, but then not all applications will accept it or they all use different encodings (not UTF-8) and the whole thing just becomes a giant hassle. During my process of trying to figure it out I even made a unicode entry layer which had the hexidecimal inputs and alt and all the numbers were numpad ones. In the end I found that the old faithful Alt codes was the best way to do this. This works well and I made a macro in the code and then could press two keys and ta-da!

The quantum code is very easy to work with and you can many layers and put keys anywhere you want, or have key combinations sent from a single key. Having Ctrl+Alt+Del from one key was useful for logging in in the morning with only one hand whilst drinking tea with the other!

Here are what my two main layers look like.

### Base layer

```
,--------------------------------------------------.           ,--------------------------------------------------.
|   ESC  |  1!  |  2@  |  3#  |  4$  |  5%  |  6^  |           |  7&  |  8*  |  9(  |  0)  |  -_  |  +=  |  BkSp  |
|--------+------+------+------+------+-------------|           |------+------+------+------+------+------+--------|
| Tab    |   Q  |   W  |   E  |   R  |   T  |  {   |           |   }  |   Y  |   U  |   I  |   O  |   P  |  |\    |
|--------+------+------+------+------+------|  [   |           |   ]  |------+------+------+------+------+--------|
| Win    |   A  |   S  |   D  |   F  |   G  |------|           |------|   H  |   J  |   K  |   L  |  :;  |  '"    |
|--------+------+------+------+------+------| Home |           | End  |------+------+------+------+------+--------|
| LShift |Z/Alt |   X  |   C  |   V  |   B  |      |           |      |   N  |   M  |   ,  |   .  | Alt  | RShift |
`--------+------+------+------+------+-------------'           `-------------+------+------+------+------+--------'
  |LCtrl | COPY | PASTE| Left | Right|                                       | Down |  Up  |Hyper |  `~  | RCtrl |
  `----------------------------------'                                       `----------------------------------'
                                       ,-------------.       ,-------------.
  Hyper = Ctrl+Super+Alt+Shift         | ~L3  |  F5  |       |  F2  | ~L2  |
                                ,------|------|------|       |------+------+------.
                                |      |      | PgUp |       | Ins  |      |      |
                                | Enter| BkSp |------|       |------| ~L1  |Space |
                                |      |      | PgDn |       | Del  |      |      |
                                `--------------------'       `--------------------'
```

### Symbol Layer:

```
,--------------------------------------------------.           ,--------------------------------------------------.
|        |  F1  |  F2  |  F3  |  F4  |  F5  |  F6  |           |  F7  |  F8  |  F9  |  F10 |  F11 |  F12 |PrintScr|
|--------+------+------+------+------+-------------|           |------+------+------+------+------+------+--------|
|        |   !  |   @  |   {  |   }  |   |  |      |           |      |   Up |   7  |   8  |   9  |   *  |        |
|--------+------+------+------+------+------|      |           |      |------+------+------+------+------+--------|
|        |   #  |   $  |   (  |   )  |   `  |------|           |------| Down |   4  |   5  |   6  |   +  |        |
|--------+------+------+------+------+------|      |           |      |------+------+------+------+------+--------|
|        |   %  |   ^  |   [  |   ]  |   ~  |      |           |      |   &  |   1  |   2  |   3  |   \  |        |
`--------+------+------+------+------+-------------'           `-------------+------+------+------+------+--------'
  |      |   £  |      |      |      |                                       |      |    . |   0  |   =  |Alt+F4|
  `----------------------------------'                                       `----------------------------------'
             ↑                         ,-------------.       ,-------------.
          THERE!                       |      |      |       |      |      |
                                ,------|------|------|       |------+------+------.
   CAD = Ctrl + Alt + Delete    |      |      |      |       |      |      |      |
                                |      |      |------|       |------|      |      |
                                |      |      |      |       | CAD  |      |      |
                                `--------------------'       `--------------------'
```

The full details are [here](https://github.com/qmk/qmk_firmware/tree/04e4428e8c971f803f01eb58489b1c1d1a410b4d/keyboard/ergodox_ez/keymaps/alexjj). I've also submitted a pull request to the main repo so hopefully it'll be added along with many others that have been contributed. It's great to look at what other's have done to get some ideas on what you might want to do. Like anything that's completely customisable, sometimes it's good to have other examples to look at to get some ideas.

## Key cap customisation

Now this is the real <del>fun</del> expensive part. Getting the massive grab bag of keys was great for sampling lots of keycap sets that are (or could be) available. A lot of key cap sets are made in batches for group buys, either on [geekhack](http://geekhack.org) or [massdrop](https://www.massdrop.com/mechanical-keyboards/drops?mode=guest_open), to name a couple. These are only available for short periods of time and then afterwards there's limited to no option to buy them other than second hand. Usually, popular designs will make repeat appearances but again in limited timeframes. Having been quite content with my Poker 2 at work and my industrial IBM Model M from 1987 at home, I'd not really been following or planning on buying keycaps. Which is a shame as it turned out a whole load of great caps (especially SA profile) had dropped. From the grab bag I soon learnt that I loved SA and that I wanted the [Carbon set](http://www.massdrop.community/mechkeys/carbon/). This set may run again in 2016, but if it does I probably won't seem them until December or probably Q1 2017.
![Isn't it lovely](/images/carbon.jpg)

SA profile is a special cap design by Signature Plastics (one of the main manufacturers of keyboard keys) which are tall, fairly thick plastic with a curved profile to them. I think they look stunning and feel solid to type on.
![Profiles](/images/key-family-center.jpg)

For now the random selection will have to do, and I'm subscribed to massdrop for when the keys do come round. Although it's going to be very tempting to buy a lot more...

## Final thoughts

I'm still trying to work out the best layout and improving my touch typing skills, but I still get a weird pain in my left shoulder - I think it's the thumb keys or how I hover my thumb over the thumb keys when typing. I'm going to switch the space around, and I may even change it to be the last 1.0 key on the bottom row. I hope it becomes more comfortable to use and that I can return to my normal typing speed soon. I think part of the problem is that whilst it's super adjustable to get the best layout and position, I don't know what the best layout/position is and so I may be putting it into a bad one that causes issues. Maybe I should just give it up and go back to my Poker 2, it works fine and I had no discomfort with it...Although I really do like the programmable keys. Having shortcuts and multiple keys from one one key is awesome. Guess that means I'll have to get a Planck!

### Update

My ergodox is for sale now...and I've signed up to the Planck massdrop and planning my own build (as such - using a flexible PCB, not entirely own build, maybe for next time!).

## Resources

If you want to find out more about mechanical keyboards, the subreddit [/r/mechanicalkeyboards](https://www.reddit.com/r/mechanicalkeyboards) has a great wiki and posts.

![CAPS](/images/capsorganised.jpg)
