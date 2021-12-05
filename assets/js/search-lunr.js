---
layout: null
excluded_in_search: true
permalink: /assets/js/search-lunr.js
---
var documents = {
  {% for post in site.posts %}
    "{{ site.baseurl }}{{ post.url }}": {
      "title"    : "{{ post.title | xml_escape }}",
      "url"      : "{{ site.baseurl }}{{ post.url }}",
      "content" : "{{ post.content | strip_html | strip_newlines | slugify: 'ascii' | replace: '-',' ' }}"
    } {% unless forloop.last %},{% endunless %}
  {% endfor %}
};
