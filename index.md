---
layout: home
---

# Current schedule

{% assign first_term = site.data.schedule | first %}
{% if first_term %}
{% assign sessions = first_term[1] %}
{% for item in sessions %}

  <li>
  <div>
  <small>{{item.date}}</small>
  <h3>{{item.title}}</h3>
  </div>
  <ul>
  {% if item.readings and item.readings.size > 0 %}
  {% for r in item.readings %}
    <li>
    {% if r.url %}
      <a href="{{ r.url }}">{{ r.title }}</a>
    {% else %}
      {{ r.title }}
    {% endif %}
    </li>
  {% endfor %}
  {% endif %}
  </ul>
  {% if item.person %}
  <p><em>Presented by {{ item.person }}</em></p>
  {% endif %}
  {% if item.note %}
  <small>{{ item.note }}</small>
  {% endif %}
  </li>

{% endfor %}
{% endif %}

## Past Terms

{% for term in site.data.schedule %}

{% assign sessions = term[1] %}
{% if term[0] != site.current_term %}

- [{{ term[0] | replace: '-', ' ' | capitalize }}]({{ site.baseurl }}/schedule/{{ term[0 ]}})
  {% endif %}
  {% endfor %}
