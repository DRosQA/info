---
title: TECH
tags: tabs
order: 3
---
## TECH STACK
### Languages
{%- assign lastItem = stack.lang | last %}  
{% for lang in stack.lang %}<span>{{lang}}{%- if lang != lastItem -%}, {% endif -%}</span>{% endfor %}

### Coding and tools
{%- assign lastItem = stack.tech | last %}  
<ul>
{% for tech in stack.tech %}<li>{{tech}}</li>{% endfor %}
</ul>