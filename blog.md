---
title: Blog
layout: "layout.html"
---

A place to navigate blogs

![alt text](/images/random_image.jpg)

<ul>
{% for post in collections.posts %}
    <li>
        <a href="{{ post.url }}"> {{ post.data.title }}</a>
    </li>
{% endfor %}<s>
</ul>
