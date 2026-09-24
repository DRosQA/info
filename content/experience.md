---
title: EXP
tags: tabs
order: 2
---
## EDUCATION
- [ISTQB® Certified Tester](https://istqb.org/), Foundation Level | 2014 | gasq Service GmbH
- English B2 certificate | 2011 | [Foreign Language Teaching Centre University of Silesia](https://us.edu.pl/en/)
- College of Interdisciplinary Individual Studies in Humanities and Social Sciences | 2009 — 2012 | [University of Silesia](https://us.edu.pl/en/)


## EXPERIENCE
{% for company in exp %}
### [{{company[0]}}]({{company[1].link}})
<strong>{{company[1].role}}</strong> | {{company[1].start}} — {% if company[1].end %}{{company[1].end}}{% else %}present{% endif %}</summary>
  

**Description**  
{{company[1].description}}

**Techstack**{% assign lastItem = company[1].stack | last %}  
{% for tech in company[1].stack %}<span>{{tech}}{%- if tech != lastItem -%}, {% endif -%}</span>{% endfor %}

**Key responsibilities**
<ul>
{% for resp in company[1].responsibilities -%}<li>{{resp}}</li>{% endfor %}
</ul>
<hr>
{% endfor %}

### Other
- **Dobre Relacje**, Content Manager, Social Media Manager | 01.2013 — 04.2013 
- **TextPartner**, Proofreader, Junior DPT | 06.2011 — 08.2011 
