---
id: 2
title: Top Plays
date: 2010-09-02 16:59:12 +0000
author: Admin
layout: page
permalink: /top-plays/
guid: http://kwur.com/?page_id=2
---

<ul class="post-list">
    {% for post in site.posts %}
    {% if post.category == "top" %}
      <li>
        {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
        <span class="post-meta">{{ post.date | date: date_format }}</span>

        <h5>
          <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
        </h5>
      </li>
    {% endif %}
    {% endfor %}
  </ul>