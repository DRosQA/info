---
title: DRoskQA
layout: index.html
---
<div class="surprise">
	<h2>Surprise!</h2>
	<p>You found the secret tab!</p><p class="prize">The prize for it is this little fella:</P>
	<p class="prize"><a href="https://www.pexels.com/photo/close-up-of-a-green-tree-frog-in-foliage-36181247/" title="Photo by y glmmes from Pexels"><img src="{{'/assets/pexels-y-glmmes-2147904764-36181247.jpg' | url}}"></a></p> 
</div>
{%- for tab in collections.navigation -%}
	<details name="openTab" {{ tab.data.default }}>
		<summary>{{ tab.data.title }}</summary>
		<div>
			{{ tab.content }}
		</div>
	</details>
{%- endfor -%}