<script>
	import ResponsiveContent from '../../../comps/ResponsiveContent.svelte';
</script>

{#snippet content()}
	<h1>NiiC</h1>

	<a href="https://github.com/YanniAlshoufiHTL/NiiC">
		https://github.com/YanniAlshoufiHTL/NiiC
	</a>

	<p>
		In my high school (“HTBLA Leonding”), third year onwards, you have to create a software
		project and present it in front of all other classes at the end of each year. This project
		won our team the second place out of approximately 20 – 25 projects.
	</p>

	<p>
		Me and two friends of mine went on to create a calendar that I have personally really wanted
		for a long time; a modular calendar. It is quite simple, we have two target groups, devs and
		users. Devs create plugins for themselves and others and can publish them to certain users
		or to everybody. Our second target group, the users, can just use the vanilla calendar
		without any plugins, or they can go to the store and press install on a plugin and have
		access to it.
	</p>

	<p>
		This is very much still a work-in-progress but the first big prototype is already done and
		well documented by the issues and milestones on GitHub. Currently, I'm rewriting the entire
		codebase into SvelteKit on the frontend and ASP.NET Core Web APIs with Controllers on the
		backend, for which I am creating the YaFullstack template that is documented <a
			href="/projects/ya-fullstack">here</a
		>. This should be done at the end of summer 2024.
	</p>

	<div>
		<strong>Tech (in the current state):</strong>

		<ul>
			<li>Vanilla HTML, CSS</li>
			<li>TypeScript</li>
			<li>Web Components</li>
			<li>Express</li>
			<li>HTTP files</li>
			<li>Docker</li>
			<li>PostgreSQL</li>
		</ul>
	</div>
{/snippet}

<ResponsiveContent {content} />
