---
layout: home
---

## This week

Coming soon...

---

## This semester's schedule

<ul class="schedule">
{% assign first_term = site.data.schedule | first %}
{% if first_term %}
{% assign sessions = first_term[1] %}
{% for item in sessions %}

{% include schedule_item.html item=item %}

{% endfor %}
{% endif %}

</ul>

## Past Terms

{% for term in site.data.schedule %}

{% assign sessions = term[1] %}
{% if term[0] != site.current_term %}

- [{{ term[0] | replace: '-', ' ' | capitalize }}]({{ site.baseurl }}/schedule/{{ term[0 ]}})
  {% endif %}
  {% endfor %}
