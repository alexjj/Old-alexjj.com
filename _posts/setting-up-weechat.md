+++
date = 2016-09-26T00:00:00Z
description = "Notes for setting up a basic weechat client with irc and XMPP."
tags = ["config"]
title = "Setting up Weechat"

+++
I like to run weechat in tmux on a VPS and then ssh into it and pick up where I left off. I also use bitlbee to connect to XMPP servers. Weechat has lots of options and these are some notes for setting up. Mostly taken from a variety of sources online when you search for weechat setup.


[WeeChat quick start](https://weechat.org/files/doc/stable/weechat_quickstart.en.html) is good to get going for freenode.

    /save at the end


### Weechat configuration

Set detault nick for all servers:

    /set irc.server_default.nicks alexjj

Allow for multi-line input:

    /set weechat.bar.input.size 0
    /set weechat.bar.input.size_max 3

Hide join/leave messages in IRC (After enabling freenode)

    /set irc.look.smart_filter on
    /filter add irc_smart * irc_smart_filter *

Making it look a bit nicer:

    /set weechat.look.prefix_same_nick "⤷"
    /set weechat.look.prefix_error "⚠"
    /set weechat.look.prefix_action "⚡"
    /set weechat.look.bar_more_down "▼▼"
    /set weechat.look.bar_more_left "◀◀"
    /set weechat.look.bar_more_right "▶▶"
    /set weechat.look.bar_more_up "▲▲"
    /set weechat.look.prefix_suffix "╡"
    /set weechat.color.chat_nick_colors red,green,brown,blue,magenta,cyan,white,lightred,lightgreen,yellow,lightblue,lightmagenta,lightcyan
    /set weechat.color.separator 31
    /set buffers.color.current_fg 31
    /set buffers.color.current_bg white
    /set buffers.color.hotlist_message_fg 229
    /set buffers.color.hotlist_private_fg 121
    /set buffers.color.hotlist_highlight_fg 163
    /set buffers.color.number 239
    /set buffers.color.number_char 245
    /set weechat.bar.title.conditions "${inactive}"
    /set weechat.bar.title.color_fg black
    /set weechat.bar.title.color_bg 31         #Or white if 31 does nothing



Away checks and limits

    /set irc.server_default.away_check 10
    /set irc.server_default.away_check_max_nicks 25

Toggle nicklist with esc n

    /key bind meta-n /bar toggle nicklist

#### Adjust title, status, and input bars

This creates new root bars to replace the per window ones. So there's not repetition when you break up the window for highlight mon.

Create and customise activetitle bar

    /bar add activetitle window top 1 0 buffer_title
    /set weechat.bar.activetitle.priority 500
    /set weechat.bar.activetitle.conditions "${active}"
    /set weechat.bar.activetitle.color_fg white
    /set weechat.bar.activetitle.color_bg 31
    /set weechat.bar.activetitle.separator on

Customize the title bar

    /set weechat.bar.title.conditions "${inactive}"
    /set weechat.bar.title.color_fg black
    /set weechat.bar.title.color_bg 31

Create and customise the rootstatus bar

    /bar add rootstatus root bottom 1 0 [time],[buffer_count],[buffer_plugin],buffer_number+:+buffer_name+(buffer_modes)+{buffer_nicklist_count}+buffer_filter,[bitlbee_typing_notice],[lag],[aspell_dict],[aspell_suggest],[hotlist],completion,scroll
    /set weechat.bar.rootstatus.color_fg 31
    /set weechat.bar.rootstatus.color_bg 234
    /set weechat.bar.rootstatus.separator on
    /set weechat.bar.rootstatus.priority 500
    /bar del status
    /bar set rootstatus name status

Create and customise the rootinput bar

    /bar add rootinput root bottom 1 0 [buffer_name]+[input_prompt]+(away),[input_search],[input_paste],input_text,[spell_correction]
    /set weechat.bar.rootinput.color_bg black
    /set weechat.bar.rootinput.priority 1000
    /bar del input
    /bar set rootinput name input

Customise the nicklist bar

    /set weechat.bar.nicklist.color_fg 229
    /set weechat.bar.nicklist.separator on
    /set weechat.bar.nicklist.conditions "${nicklist} && ${window.number} == 1"
    /set weechat.bar.nicklist.size_max 14
    /set weechat.bar.nicklist.size 14

### Scripts

Install iset.pl script manager:

    /script install iset.pl
    /script

[Scripts](https://weechat.org/scripts/) I like:

* buffers - sidebar with list of buffers
* autojoin_on_invite
* autosort - keeps the buffer list tidy
* bitlbeescompletion - add tab completion for bitlbee
* colorize nicks - makes nicks pretty colours
* go - quick jump to buffers
* highmon - adds a highlight buffer
* recoverop - claim op in empty channel
* screen away - automatically set away when detaching from tmux

To skip to the answer:

    /script install buffers.pl iset.pl go.py colorize_nicks.py bitlbee_completion.py autosort.py autojoin_on_invite.py screen_away.pl recoverop.pl highmon.pl

#### Configuring Scripts

**Buffers.pl**

Edit buffer bar:

    /set irc.look.server_buffer independent
    /set weechat.bar.buffers.position top
    /set buffers.color.number white
    /set buffers.look.hotlist_counter on
    /set buffers.name_size_max 20
    /set buffers.color.current_bg default
    /set buffers.color.current_fg lightcyan
    /set buffers.color.hotlist_message_bg default
    /set buffers.color.hotlist_message_fg yellow


**Highmon**


    /set plugins.var.perl.highmon.alignment "nchannel"
    /window splith 15
    /buffer highmon

To move back to main window press F7 or F8 but if those don't work (e.g. via GateOne) type <code>/window +1</code>

**Go.py**


    /key bind meta-g /go

Binds ESC + G to run go. It then displays a row of buffers and you can press 1,2,3... etc to go to them or start typing the channel. Tab completion also included.

**Recoverop.pl**

Turn on recover op for my channel:

    /set plugins.var.perl.recoverop.regex "\A(freenode\.#alexjj)\Z"

**screen away**

    /set plugins


### Save!

    /set weechat.look.save_layout_on_exit all
    /save



## Bitlbee

#### Setup connection to bitblee:

    /server add im localhost/6667 -autoconnect
    /connect im
In &bitlbee buffer:

    register YOUR_PASS
Back in weechat buffer:

    /set irc.server.im.command "/msg &bitlbee identify YOUR_PASS"
    /save

#### Add account

    acc add jabber username@server.com PASSWORD
    acc 0 set
    Change any settings
    acc 0 on

To see all the accounts and number:

    acc list
    save
#### Add and join group chat

    chat add 0 room@conference.server.com
    /join #room

#### Auto join channel

Find all channels

    channel list
    channel 1 set auto_join true

Or whatever the channel number is.

Chat away! 💻