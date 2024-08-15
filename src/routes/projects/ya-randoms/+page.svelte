<script>
	import ResponsiveContent from '../../../comps/ResponsiveContent.svelte';
</script>

{#snippet content()}
	<h1>YA Randoms</h1>

	<p>
		This is a collection of random things I made because I was testing something, was bored, had
		an assignment that I decided to go a bit overkill on, ETC. This is not an exhaustive list.
	</p>

	<section>
		<h2>Yanni Snake</h2>
		<a href="https://yanni-snake.web.app"> https://yanni-snake.web.app </a>
		<p>
			This is just a snake game I made one day a while back because I had always wanted to
			make one.
		</p>

		<strong> Tech: </strong>
		<ul>
			<li>Vanilla HTML, CSS, JS</li>
		</ul>
	</section>

	<section>
		<h2>Yanni Clock</h2>
		<a href="https://yanni-clock.web.app">https://yanni-clock.web.app</a>
		<p>
			A—in my opinion—cool clock that I made back when I was still learning about sin, cos,
			and tan. It was a lot of fun.
		</p>

		<div>
			<strong>Tech:</strong>
			<li>Vanilla HTML, CSS, JS</li>
			<li>P5JS</li>
			<li>I also made a version with Processing and Java instead</li>
		</div>
	</section>

	<section>
		<h2>YA Chess</h2>

		<a href="https://github.com/dachsapp/YaChess"> https://github.com/dachsapp/YaChess </a>

		<p>
			A little chess game for school. We had an assignment to make a game that uses many
			Unicode characters and I really wanted to program chess, so I did. I learned a lot and
			for some reason fell back to manually programming a bunch of mathematical concepts like
			vectors. The game is missing some game rules (like castling) but I stopped working on it
			because the year was over and I wanted to do other things. This was in my first year of
			high school.
		</p>

		<strong>Tech:</strong>
		<ul>
			<li>C# with .NET</li>
			<li>A bunch of math</li>
			<li>Unicode</li>
		</ul>
	</section>
{/snippet}

<ResponsiveContent {content} />
