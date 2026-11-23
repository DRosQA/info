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

### What about AI?
I do not work with genAI. With my specific skillset, **I find it easier and faster to work without any genAI assistance**, and it ensures I can vouch for the reliability of the work I provide.

I am a big fan of learning, and as such, I've spent my entire life looking up information and compiling it into a personal reservoir of knowledge and source references. I am skilled in coming up with keywords and finding knowledge from available documentation. As such, I have no need for AI in the usual ways it is applied, as a natural-language interface to search engines or as text- and idea-generator.

I do understand that it is not the case for everyone, though, and don't have qualms with coworkers using generative AI to supplement their coding or writing skills so long it doesn't impact the quality nor their ownership of the results. 
I do, however, oppose to using image generation models in any way, shape or form, as they're trained on primarily illegally-attained material. I also do not think genAI has any place in creative work. 
