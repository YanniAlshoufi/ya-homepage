<script>
	import ResponsiveContent from '../../comps/ResponsiveContent.svelte';

	const possibleDescriptions = [aFireThatNeverStops, languages, techPreferences];
	let currentDescription = $state(possibleDescriptions[0]);
</script>

<div class="flex min-h-20 items-center justify-center">
	<div class="flex gap-5">
		{#each possibleDescriptions as description}
			<label
				class="h-5 w-5 rounded bg-white ring-2 ring-white [&:has(input:checked)]:bg-zinc-900"
			>
				<input
					class="opacity-0"
					type="radio"
					name="group"
					checked={currentDescription === description}
					onchange={() => (currentDescription = description)}
				/>
			</label>
		{/each}
	</div>
</div>

<ResponsiveContent content={currentDescription} />

<img class="fixed bottom-0 right-0 w-[15%] max-lg:hidden" src="/img/profile.png" alt="Profile" />

<!--DESCRIPTION SNIPPETS-->

{#snippet aFireThatNeverStops()}
	<h1>A Fire that Never Stops!!</h1>
	<p>
		About 2 to 3 years after my family’s refuge to Austria in 2015, I started learning a lot
		about programming. This little interest of mine has truly changed my life for the better,
		and I think I know why…
	</p>

	<p>
		Knowing how to program is knowing how to learn. As such, and because I love learning new
		things, software development has the ability to keep my inner fire going! Every new problem
		I face motivates me. Before I knew it, dev had become more than just a hobby for me.
		Programming, and by extension learning new things constantly, is my passion!
	</p>

	<p>
		Because of that, I am currently attending a high school called “HTBLA Leonding”, a technical
		college in Upper Austria that is focused on software development/engineering. I have never
		been more content in life. I learn new things every day and it is absolutely awesome! :))
	</p>
{/snippet}

{#snippet languages()}
	<h1>Programming Languages</h1>

	<p>
		(very familiar > quite familiar > familiar > sufficiently familiar > somewhat familiar > not
		that familiar)
	</p>

	<strong>Favorites: </strong>

	<ol>
		<li>C# (very familiar)</li>
		<li>F# (familiar)</li>
		<li>Rust (familiar)</li>
		<li>Kotlin (sufficiently familiar)</li>
		<li>SQL (quite familiar)</li>
		<li>C/C++ (somewhat familiar)</li>
		<li>TypeScript (very familiar)</li>
		<li>Shell (quite familiar)</li>
	</ol>

	<p>Would be down to program in (no specific order):</p>

	<ul>
		<li>Java (very familiar)</li>
		<li>Lua (sufficiently familiar)</li>
		<li>Gleam (not that familiar, would love to learn)</li>
		<li>Go (somewhat familiar)</li>
		<li>GD Script (not that familiar)</li>
		<li>PHP (quite familiar)</li>
		<li>Python (sufficiently familiar)</li>
	</ul>
{/snippet}

{#snippet techPreferences()}
	<h1>Tech Preferences (Don’t Hate Me :))</h1>
	<p>
		Yeah yeah, I know, DX is an illusion, code style preferences are a matter of habit, and no
		one cares about my code editor, but this is my website, so here are my tech preferences
		anyway! xD
	</p>

	<h2>It Is Obvious!</h2>

	<p>
		OK, easy things first, static types are the way to go (sorry JS,) comments are annoying but
		please document public APIs, Windows should give us all the games and then die for good, vim
		motions are simply superior, but stop configuring everything all the time, inheritance is
		mostly bad, algebraic data types are essential in modern programming languages, good
		abstractions are rare, stop nesting, loop breaks and multiple returns are fine in most
		cases, and, for the love of god, stop making UIs in Rust!
	</p>

	<p>Now, for the two people still reading…</p>

	<h2>Languages</h2>

	<p>
		If I had to rank my favorite languages today, the list would probably look something like
		this:
	</p>

	<p>
		(very familiar > quite familiar > familiar > sufficiently familiar > somewhat familiar > not
		that familiar)
	</p>

	<ol>
		<li>C# (very familiar)</li>
		<li>F# (familiar)</li>
		<li>Rust (familiar)</li>
		<li>Kotlin (sufficiently familiar)</li>
		<li>SQL (quite familiar)</li>
		<li>C/C++ (somewhat familiar)</li>
		<li>TypeScript (very familiar)</li>
		<li>Shell (quite familiar)</li>
	</ol>

	<p>
		And here are some languages that I would be down to code in but would not actively choose
		for no reason (no specific order):
	</p>

	<ul>
		<li>Java (very familiar)</li>
		<li>Lua (sufficiently familiar)</li>
		<li>Gleam (not that familiar, would love to learn)</li>
		<li>Go (somewhat familiar)</li>
		<li>GD Script (not that familiar)</li>
		<li>PHP (quite familiar)</li>
		<li>Python (sufficiently familiar)</li>
	</ul>

	<h2>Editor</h2>

	<p>I use Neovim for light edits and JetBrains products for everything else.</p>

	<h2>Controversial</h2>

	<p>Now, for the really controversial part!</p>

	<ul>
		<li>
			I think the Allman brace notation is nice. Yes, I said it, I think it looks clean, OK!‽?
			(That being said, just follow whatever your team is doing, please!)
		</li>
		<li>
			TypeScript on the server is fine for little projects, MAYBE for small startups, but that
			is the absolute limit! More or less the same goes for PHP with WordPress/Laravel.
		</li>
		<li>Agile is fine. I do not really care.</li>
		<li>
			Unit testing is great in a lot of cases but not for driving correctness. As such, code
			coverage is a lie.
		</li>
		<li>VSCode is not bad. I do not use it myself but it is good enough for most people.</li>
		<li>
			I have seen exceptions but I do think that touch typing is essential for most
			programmers.
		</li>
		<li>
			Math is really important for many kinds of programming. While being great at it is not
			essential for becoming a dev, being horrible at math is a huge setback when learning new
			skills.
		</li>
	</ul>
{/snippet}
