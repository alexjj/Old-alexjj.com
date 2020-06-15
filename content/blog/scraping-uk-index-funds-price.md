---
title: Scraping UK index funds' prices
date: 2016-02-10
category: Projects
tags: python, finance, web
summary: Building a django powered dwarf fortress world repository
---

For four months or so I've been using [ledger](http://www.ledger-cli.org/) for tracking and managing my finances. It's great and I'll discuss that another time. One reason why I switched to ledger was to manage all my finances in one place, including tracking index funds. Ledger uses a pricesdb file to track the prices of any commodities, stocks, currencies, shoes, whatever!

Having also taken the time to finally understand index funds to save for the long term I wanted a way to track these in ledger. The usual finance sites, google/yahoo, don't list index prices and my broker's site often took a few days to update. Although that probably wouldn't have mattered the price was two days old as these are 20 + year investments. Anyway, I found iii.co.uk listed all the funds I have and updated it's prices regularly. To help matters the url contained the fund's code. In my efforts to learn python, I thought this would be a nice little task: grab the price from the site, and write it into the ledger pricedb file. If I want to automate it, I could just use cron.

Time to open the beautiful soup [manual](http://www.crummy.com/software/BeautifulSoup/bs4/doc/). There were several ways to actually get the site before passing it to bs4, and requests seemed the easiest - plus everyone says how great [requests](http://docs.python-requests.org/en/master/) is so I should check it out.

Whilst I was testing my python script, I'd downloaded a copy of the page to my computer so I wasn't making endless requests to the real site. In a few lines of code I could easily grab the price. It especially helped that the actual price was contained in a div called "price". Perfect! I then built a function that created the ledger pricedb line, and one to write it to the file, something like this:

```P 2016/02/10 09:00:00 FUND     100.00 GBP``` <br>
Meaning: on 10th Feb 2016 one unit of FUND had a value of 100.00 GBP.

With a list of fund names, I could pass this to the price fetcher, create a list of strings and then write (append) that list to the file. Now to test it out on the live site...

It didn't work.

Seems like iii.co.uk has something that prevents scraping of its price data. I don't know exactly what or how but you can see how the price and graph loads last, and seems like some unique key is generated. Okay, so next idea.

From doing a good django tutorial in the past using test driven development, I knew that [selenium](http://www.seleniumhq.org/) could load firefox and then get information from the site. So....

```python
from selenium import webdriver

browser = webdriver.Firefox()
browser.get(base_url + fund + end_url)
price = browser.find_element_by_class_name('price').text
browser.quit()
```

No site scraping issues now (although maybe some moral issue with circumventing iii's website). However, having firefox pop up each time wasn't idea, and I often have firefox setup with a SOCKS proxy so if I didn't have the tunnel up it wouldn't work. In comes [PhantomJS](http://phantomjs.org/), as a headless browser. Install and simply replace Firefox() with PhantomJS() and away we go. I did have to add a sleep between each request as sometimes it would refuse the connection otherwise. 

Tested it several days and had no issues. A week or so later I'm running some reports on my ledger and suddenly I have a lot more money, like A LOT more. Turns out that some funds are listed in pounds and some in pence, but the website doesn't show you that. Once I found which funds, I made a new list and got the price function to check if the fund is in this penny list and just divide by 100 before passing it on.

It works, but feels a bit messy. I've since found some other sites that list prices and possibly I might be better off using them as at least they display the units!

I should clean up the ledger string code, and make sure it is always aligned, but I never open the file to look at it, so what difference does one or two spaces make. 

Ledger is a great tool for managing anyone's finances no matter their arrangements, and my quest to build automation using it continues. If only I knew what I wanted it to do.

Full source on [github](https://github.com/alexjj/money-scripts/blob/master/ukindexprices.py)