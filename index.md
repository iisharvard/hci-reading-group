---
layout: home
---
{% comment %}
  Collect all term keys, extract years, and sort descending
{% endcomment %}
{% assign term_keys = '' | split: '' %}
{% for t in site.data.schedule %}
  {% assign term_keys = term_keys | push: t[0] %}
{% endfor %}
{% assign years = '' | split: '' %}
{% for t in term_keys %}
  {% assign y = t | split: '-' | last %}
  {% assign years = years | push: y %}
{% endfor %}
{% assign years = years | uniq | sort | reverse %}
{% comment %}
  Define season order (you can adjust the order of preference)
{% endcomment %}
{% assign season_order = 'fall,spring,summer' | split: ',' %}
{% comment %}
  Find the most recent (latest) term
{% endcomment %}
{% assign latest_term = null %}
{% for y in years %}
  {% for s in season_order %}
    {% for t in term_keys %}
      {% assign season = t | split: '-' | first %}
      {% assign year = t | split: '-' | last %}
      {% if year == y and season == s %}
        {% assign latest_term = t %}
        {% break %}
      {% endif %}
    {% endfor %}
    {% if latest_term %}{% break %}{% endif %}
  {% endfor %}
  {% if latest_term %}{% break %}{% endif %}
{% endfor %}

## About

This site provides the current schedule for the Harvard HCI Reading Group, as well as an archive of past reading groups
over the years.

---

{% if latest_term %}
  {% assign sessions = site.data.schedule[latest_term] %}
  {% include schedule-table.html sessions=sessions %}
{% else %}
  <p>No schedule found.</p>
{% endif %}
