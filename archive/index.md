---
layout: page
title: Archive
description: A collection of past reading groups
---

{% comment %} Get all term keys (e.g. "fall-2025", "winter-2025") {% endcomment
%} {% assign term_keys = "" | split: "" %} {% for t in site.data.schedule %} {%
assign term_keys = term_keys | push: t[0] %} {% endfor %} {% comment %} Extract
unique years and sort descending {% endcomment %} {% assign years = "" | split:
"" %} {% for t in term_keys %} {% assign y = t | split: "-" | last %} {% assign
years = years | push: y %} {% endfor %} {% assign years = years | uniq | sort |
reverse %} {% comment %} Define the order seasons should appear within a year.
Change this array if you want a different order. {% endcomment %} {% assign
season_order = "fall,winter,spring,summer" | split: "," %} {% comment %} Build a
new list of terms sorted by year DESC, then season_order {% endcomment %} {%
assign sorted_terms = "" | split: "" %} {% for y in years %} {% for s in
season_order %} {% for t in term_keys %} {% assign season = t | split: "-" |
first %} {% assign year = t | split: "-" | last %} {% if year == y and season ==
s %} {% assign sorted_terms = sorted_terms | push: t %} {% endif %} {% endfor %}
{% endfor %} {% endfor %}

<ul class="terms-list">
  {% for term in sorted_terms %}
  <li>
    <a href="{{ site.baseurl }}/schedule/{{ term | strip }}">
      {{ term | replace: '-', ' ' | capitalize }}
    </a>
  </li>
  {% endfor %}
</ul>
