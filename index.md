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

  <li class="schedule-item">
  <div class="schedule-item-header">
  <h3 class="schedule-title">{{item.title}}</h3>
  <div>
  {% if item.person %} <small class="schedule-pill">{{item.person}}</small> {% endif %}
  <small class="schedule-pill">{{item.date | date: "%B %d, %Y"}}</small>
</div>
  </div>
  {% if item.note %}
  <p class="schedule-note">{{ item.note }}</p>
  {% endif %}
  {% if item.readings and item.readings.size > 0 %}
  <h4>Readings</h4>
  <ul class="schedule-readings">
  {% for r in item.readings %}
    <li>
    {% if r.url %}
      <a href="{{ r.url }}" target="_blank" rel="noopener noreferrer">{{ r.title }}</a>
    {% else %}
      {{ r.title }} <span class="reading-no-link">(Link on Slack)</span>
    {% endif %}
    {% if r.optional %}
      <em> (optional)</em>
    {% endif %}
    </li>
  {% endfor %}
    </ul>
    {% else %}
    <p>No readings assigned.</p>
  {% endif %}
  </li>

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
