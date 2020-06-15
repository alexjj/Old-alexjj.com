---
title: Building my Iris keyboard
date: 2019-02-14
category: Hardware
tags: keyboard
summary: Build log of my Iris keyboard
toc_run: false
---
In my [previous post]({filename}planning-my-iris-keyboard.md) I decided I would build a new split keyboard, and explored the Iris. Here's my build log for it.

![Parts](/images/iris-parts.jpg)

The build guide on the [keeb.io](https://docs.keeb.io/iris-build-guide/) website is a great resource and covers pretty much everything you need to know. These are my supplemental pictures and notes to that.

![soldering](/images/soldering.jpg)

The first part is fairly straight forward soldering of lots of diodes and, if you want individual LEDs on the switches, resistors. I decided to solder all the resistors in case I wanted LEDs in the future. It's easy to add the LEDs later but a lot harder to add the resistors. You have to remove everything to get the resistors in. Takes a while but some good soldering practice!

Make sure you have good ventilation where you're soldering, the fumes are toxic! I had a big overhead fan blowing.

![bending](/images/diodes.jpg)

As the guide suggests use an edge to bend the diodes and resistors. I found it awkward to get them out of the "packaging" and grabbing a whole bunch and pulling out didn't work out well for me, so I ended up plucking them out in groups of 3 or 4 like plucking feathers from a chicken. 

![mofset](/images/mofset.jpg)
The tiny mofsets were fun...I've never been able to get solder to sit on a pad like the guide suggests - that's how I ruined my Clueboard LEDs a few years ago - and I didn't want the same fate to come to my Iris. I found I could hold the mofset with tweezers in one hand over the pads and trap a strip of solder underneath. Then with the other hand I used the soldering iron to heat the solder and it would stick to the mofset and the pad. Once one side was held in place the other two legs were easy to solder. I think there's some flux or other material you can buy to help in situations like this, but this worked well enough for me. Probably not a suitable method if you have lots of surface mount components.

![teensy-pins](/images/iris-controllerpcb.jpg)
I really like the offset holes for the teensy controller, it's just enough to hold it in place firmly without having to bend any pins, and makes soldering the headers so much easier. Nice design whoever thought of that first!

![iris-underside](/images/iris-underside.jpg)
Here's the final underside with pins, ports, components and stabilizers on both thumbs. I did put the stablizers on the wrong side the first time, and "left" and "right" sides can get mixed up if you're not careful. The PCB has different images on both sides and I used that as a reference to make sure things were on the correct side.

![leds](/images/leds.jpg)

This was my technique for soldering the wires onto the RGB LED strips. Again make sure you know which side is going on which as that'll change where you solder and the orientation of the wires on the strip. The ```RGB```, ```Ground```, and ```VCC``` pins are at the top next to the controller and the ```Extra Data``` pin is near the thumb switches. There are a couple of other pins incase you mess something up and fill the hole with solder and are unable to get it out...ahem...

![Controller](/images/controller.jpg)

Flashing the controller was pretty straight forward from the QMK instructions. I've not customised my layout from the default one yet - that'll be the next exercise - and the recommendation is that you do this before soldering the controller to the board. I'm not sure how you would tell if the controller isn't working but mine flashed and gave no errors. The reset pins are on the left side (as per my image above) opposite the green LED.

![right side complete](/images/right-side.jpg)
Here's a fully completed right side (when you type on it) PCB.

I decided to go with two 2u on the thumbs. It does mean that I lose two keys but I find the top thumb key difficult to reach and so I'm unlikely to use it. With only one key in the thumb position, the keymap will only pick up the bottom mapping. So if you look at the default map, the switch in the 2u position will be the KC_ENT and the KC_SPC. Which is good as it means you can start with the [default](https://github.com/qmk/qmk_firmware/blob/b2ee290c9f506e42dd9c4577c8147646c405aeb0/keyboards/keebio/iris/keymaps/default/keymap.c) map and not worry about it.

```
  [_QWERTY] = LAYOUT(
  //┌────────┬────────┬────────┬────────┬────────┬────────┐                          ┌────────┬────────┬────────┬────────┬────────┬────────┐
     KC_ESC,  KC_1,    KC_2,    KC_3,    KC_4,    KC_5,                               KC_6,    KC_7,    KC_8,    KC_9,    KC_0,    KC_BSPC,
  //├────────┼────────┼────────┼────────┼────────┼────────┤                          ├────────┼────────┼────────┼────────┼────────┼────────┤
     KC_TAB,  KC_Q,    KC_W,    KC_E,    KC_R,    KC_T,                               KC_Y,    KC_U,    KC_I,    KC_O,    KC_P,    KC_DEL,
  //├────────┼────────┼────────┼────────┼────────┼────────┤                          ├────────┼────────┼────────┼────────┼────────┼────────┤
     KC_LSFT, KC_A,    KC_S,    KC_D,    KC_F,    KC_G,                               KC_H,    KC_J,    KC_K,    KC_L,    KC_SCLN, KC_QUOT,
  //├────────┼────────┼────────┼────────┼────────┼────────┼────────┐        ┌────────┼────────┼────────┼────────┼────────┼────────┼────────┤
     KC_LCTL, KC_Z,    KC_X,    KC_C,    KC_V,    KC_B,    KC_HOME,          KC_END,  KC_N,    KC_M,    KC_COMM, KC_DOT,  KC_SLSH, KC_RSFT,
  //└────────┴────────┴────────┴───┬────┴───┬────┴───┬────┴───┬────┘        └───┬────┴───┬────┴───┬────┴───┬────┴────────┴────────┴────────┘
                                    KC_LGUI, LOWER,   KC_ENT,                    KC_SPC,  RAISE,   KC_LALT
                                // └────────┴────────┴────────┘                 └────────┴────────┴────────┘
),

```

![finished](/images/finished-iris.jpg)
Once the controller is soldered on, put it into the case and plug it in! I did find the TRRS cables were a bit stiff to push in and the first time one side wasn't in all the way and so keys weren't responding. I felt like I was going to break the port off but with gentle turning and pushing I managed to get it all the way in, and then everything worked perfectly. I'm looking to get some bolts to try tenting, and then comes the issue of actually typing on it!

So far I get about 10 wpm. Either I type at my normal speed and there's so many mistakes or I make no mistakes but type at snails pace. 20+ years of typing on a staggered layout means I have a lot of muscle memory to overcome. Seems like letters closer to the middle are okay but the further away the key is from the "FGHJ" area the less likely I am to be able to hit it without actively thinking/looking. Perhaps I should change layout for more "efficiencies" and then learning the new layout will help me learn the physical layout too. I'm just curious as to when I use a traditional staggered layout on a laptop or elsewhere what will happen if I get too used to the ortho style.

Anyway it was fun to build at least and I'll see how I get along with using it and customising the layout.

![model m](/images/modelm-iris.jpg)
