<script>
	import ResponsiveContent from '../../../comps/ResponsiveContent.svelte';
</script>

{#snippet content()}
	<h1>NiiC</h1>

	<a href="https://github.com/YanniAlshoufiHTL/NiiC">
		https://github.com/YanniAlshoufiHTL/NiiC
	</a>

	<p>
		In my high school (“HTBLA Leonding”), starting with the third year, you have to create a
		software project and present it in front of all other classes at the end of the year. This
		project won our team the second place out of approximately three projects per class (there
		are 4 of those).
	</p>

	<p>
		Me and two friends of mine went on to create a calendar that I have personally really wanted
		for a long time; a modular calendar. It is quite simple, we have two target groups, devs and
		users. Devs create plugins for themselves and others and can publish it to certain users or
		all users. Our second target group, the users, can just use the vanilla calendar without any
		plugins, or they can just go to the store and press install on a plugin and have access to
		it.
	</p>

	<p>
		This is very much still a work-in-progress but the first big prototype is already done and
		well documented in the issues and milestones on GitHub. During this summer, I’m rewriting
		the entire codebase into ASP.NET with BlazorWASM on the frontend and ASP.NET Core Web APIs
		with Controllers on the backend, for which I am currently creating the YaFullstack template
		that is documented here.
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
