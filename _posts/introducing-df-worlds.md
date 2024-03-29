+++
title = "Introducing DF Worlds"
date = "2013-10-21"
tags = ["python", "django", "dwarf fortress",]
description = "Building a django powered dwarf fortress world repository"
+++

![df](/images/df.jpg)

I love playing [Dwarf Fortress](http://www.bay12games.com/dwarves/). The level of detail, the stories (and my [adaptations](http://df.alexjj.com/) of them, the eye bleeding ascii, it's all amazing. However, this isn't a post about my endless love of this weird game but rather my small contribution back to the community.

One part of the game is creating the world in which you're going to play. The world generation is almost a game in itself, and as well as generating the terrain and minerals it also simulates wars and the entire history of all civilisation including who lived and died when and what colour their third best pair of trousers are. Once the world is created then you can search for a good spot to start your fortress. Good is an interesting word. Depending on who you are this can mean bountiful ores, pleasant plains and light forests with a small stream trickling by offering soothing trout for lunch. Alternatively, it can mean horrendous ravines, eyeballs on stalks growing out of the ground, necromancers for neighbours and artic conditions all year round. Either way once you've found somewhere good it's nice to share it with others so they can enjoy the necromancer's dog barking at 6 am when that plump helmet spirit is working its finest on your skull. 

For all time the way to share your worlds and embark locations was through the [df forum](http://www.bay12forums.com/smf/index.php?topic=140180.0), more recently a subreddit, [/r/dfworldgen](https://www.reddit.com/r/dfworldgen), was another place. However both weren't that easy to search through and find something you want. Generally you'd have to read through the whole thread and try and make a list for yourself. Sometimes you'd find a good one but then the embark location was missing or a hosted image had been taken down etc. Someone had made a website to share worlds but it didn't seem complete and no-one was using it.

At the time I wanted to learn python/django and thought that this was the perfect opportunity to learn whilst making something useful. My friend had just learnt django and he provided some help after I did the tutorials. There were many blog posts available that helped explain setting up a django project and using heroku's free tier to host it. 

As my first project, it was going to be pretty simple, just a way to enter all the information and then display it and make it searchable. There's a lot of data available about a world and so deciding on what I wanted and how to structure the database was the main task. I settled for about 15 or so different properties I wanted to capture and then just have a description box to talk about the nuances in more detail. Otherwise it was going to become too complex, and having some data would at least help narrow down the search for a world. For example, aquifers: I have it set as a simple Yes/No, but if a world does have an aquifer then there's a lot more to it than just is it present. What layer(s) is it on? How deep is it? These are all things people can write in the description box if they want, although with aquifers usually people just want to avoid them.

It took me a while to make, but the end code is pretty simple and django makes it very easy (once you know how!) to make a site like this. I made use of the built in views, and with some CSS tweaks (including some contributed by another github user!) they worked perfectly for what I wanted. This saved a lot of effort on my part. Together with [bootstrap](https://getbootstrap.com/) for a simple yet clean theme and a jQuery plug-in called [DataTables](https://datatables.net/), I had a functional and searchable database for worlds! 

The site is hosted on Heroku's free tier, which only offers basic features but more than adequte for my starter site's needs. I "cheated" the static content (css, js) by just using collectstatic, I think generally it's preferred to host them on S3 or some other service, but I didn't want to pay for that. I also used imgur to host the images - again probably not strictly in line with their TOS but for a learning project it worked well enough. Similarly, with submitted worlds I required the screenshots to be hosted elsewhere, and the user just inputs the url. Future improvements would obviously enable people to upload their screenshots directly.

It was a fun project and I learnt a lot, although having not really learnt python properly I suffered and I think I need to go and read some python books. 

[Visit the site](http://dfworlds.alexjj.com/).  
![alttext][logo]

So how is it doing? Well it's okay. A couple of people added their worlds; most of them are me adding my favourites from the forums. I think the audience is quite small and most of them are set in their ways of posting to the forum. The creator of the other "non-maintained" site contacted me and said he was maintaining it, but given the low interest he didn't see the point. I had a lot of ideas about how to improve my site, but again, the limited usage reduced my motivation to do anything extra. It's still in my mind as a future project though, if nothing more than for further learning about python and django, and perhaps the myriad of other technologies.

The moderator of /r/dfworlds contacted me and asked about making a new site or collection of df sites. I said I was interested but nothing much has come of it, guess we're all too busy building exquisite shoes in game to spend any time on it.

[logo]: /images/dfworldslogo.png "DF Worlds"
