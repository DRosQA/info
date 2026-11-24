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

### generative AI
My previous workplaces have not implemented third-party genAI due to data security and IP protection policies, and the smaller in-house models available left much to desire in terms of output quality. Because of that, I found it easier and faster to work without genAI assistance, as it ensured I can vouch for the reliability of the work I provide.

I am however always open to learning, and implementing tools and workflows according to company policies.

