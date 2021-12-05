---
layout: page
title: Testing Markdown
permalink: /testing/
excluded_in_search: true
sitemap: false
---

## <a name="top"></a>Contents

* [Headings](#Headings)
* [Blockquotes](#Blockquotes)
* [Lists](#Lists)
* [Horizontal rule](#Horizontal)
* [Table](#Table)
* [Code](#Code)
* [Inline elements](#Inline)

***

# <a name="Headings"></a>Headings

# Heading one

1

## Heading two

2

### Heading three

3

#### Heading four

4

##### Heading five

5

###### Heading six

6


[[Top]](#top)


# <a name="Blockquotes"></a>Blockquotes

> Quote here.
>
> -- <cite>Benjamin Franklin</cite>


[[Top]](#top)

# <a name="Lists"></a>Lists

### Ordered List

1. Longan
2. Lychee
3. Excepteur ad cupidatat do elit laborum amet cillum reprehenderit consequat quis.
    Deserunt officia esse aliquip consectetur duis ut labore laborum commodo aliquip aliquip velit pariatur dolore.
4. Marionberry
5. Melon
    - Cantaloupe
    - Honeydew
    - Watermelon
6. Miracle fruit
7. Mulberry

### Unordered List

- Olive
- Orange
    - Blood orange
    - Clementine
- Papaya
- Ut aute ipsum occaecat nisi culpa Lorem id occaecat cupidatat id id magna laboris ad duis. Fugiat cillum dolore veniam nostrud proident sint consectetur eiusmod irure adipisicing.
- Passionfruit

[[Top]](#top)

# <a name="Horizontal"></a>Horizontal rule

Above

***

Below

[[Top]](#top)

# <a name="Table"></a>Table

Here be the table:

| Table Heading 1 | Table Heading 2 | Center align    | Right align     | Table Heading 5 |
| :-------------- | :-------------- | :-------------: | --------------: | :-------------- |
| Item 1          | Item 2          | Item 3          | Item 4          | Item 5          |
| Item 1          | Item 2          | Item 3          | Item 4          | Item 5          |
| Item 1          | Item 2          | Item 3          | Item 4          | Item 5          |
| Item 1          | Item 2          | Item 3          | Item 4          | Item 5          |
| Item 1          | Item 2          | Item 3          | Item 4          | Item 5          |

There went the table.

[[Top]](#top)

# <a name="Code"></a>Code

## Inline code

Inline is when something is wait for it...*in line*. Such as <kbd>Ctrl + C</kbd> or just `backticked` out. Not sure I'm liking this css, probably need to change `style.css`.

## Highlighted

Et

```go
package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}
```

Could be improved but will do for now.

[[Top]](#top)

# <a name="Inline"></a>Inline elements

Picture is full width...but is that just because it's big? This CSS makes things float right when inside a `<p>`. Which adding the image just does.

![Super wide](http://placekitten.com/1280/800)

![Not so big](http://placekitten.com/96/139)

{% include aside.html content="This one is better sized for right floating." %}

Let's try my image html include:

{% include image.html src="me.jpg" title="That's me" %}


Of course there's sorting out the CSS a little better e.g.: ([Source](https://talk.jekyllrb.com/t/inclusion-image-on-left-side-and-text-on-the-right-side-using-markdown-in-jekyll-site/3413/10))

```css
/* add to you stylesheet */
.img-left {
  float: left;
  margin-right: 1em;
}
/* the markdown: */
![image](path-to-image.jpg){: .img-left}
```
