<script>
	import ResponsiveContent from '../../../comps/ResponsiveContent.svelte';
</script>

{#snippet content()}
	<h1>Dachsapp</h1>

	<a href="https://github.com/dachsapp/main-app/tree/main">
		https://github.com/dachsapp/main-app/tree/main
	</a>

	<p>
		This was my first big app. It is something of a Pokémon Go clone. We had a team back then
		but I was the only programmer. This one year before high school, so I was still self-taught.
	</p>

	<p>
		This project was part of our team’s (and my school’s) participation in LegoLeague. For the
		app, we won the first place in Upper Austria.
	</p>

	<p>
		Back then, Pokémon Go was still in the hype and my school was called “Dachsberg” (GR:
		“Badger Mountain”), so we decided to create a clone that is all about collecting coins to
		buy clothing for the badger you play as.
	</p>

	<p>It was a lot of fun and I learned a lot, even had my first real burn out after. xD</p>

	<div>
		<strong>Tech:</strong>
		<ul>
			<li>Express</li>
			<li>Node Mailer</li>
			<li>Leaflet API</li>
			<li>Angular</li>
			<li>HTML, SCSS, TS</li>
		</ul>
	</div>
{/snippet}

<ResponsiveContent {content} />
