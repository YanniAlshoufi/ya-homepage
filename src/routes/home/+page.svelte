<script>
	import ResponsiveContent from '../../comps/ResponsiveContent.svelte';
	import ProjectListing from '../../comps/ProjectListing.svelte';
</script>

<ResponsiveContent isTextContent={true}>
	<div class="flex min-h-[50dvh] items-center text-pretty max-sm:flex-col-reverse max-sm:gap-10">
		<div class="flex flex-[3] flex-col justify-center gap-6 max-sm:text-center">
			<h1 class="text-3xl">I’m a 19 y/o dev who loves solving hard problems :)</h1>
			<div class="flex flex-col gap-4 text-xl">
				<h2 class="font-bold">Some Tech:</h2>

				<ul
					class="flex translate-x-5 list-outside list-['—_'] flex-col gap-2 [&>li]:relative [&>li]:pl-5"
				>
					<li class="list-['♥_']">C# (&lt;3), F#, Rust (BTW), SQL, Linux (Arch, BTW)</li>
					<li class="list-['♥_']">
						ASP.NET, Blazor, HTMX, Angular, Vue, Tailwind, Shell
					</li>
					<li>Git (obviously), Java, Kotlin, C, Typo3</li>
				</ul>
			</div>
		</div>
		<div class="overflow-clip max-sm:w-1/3 max-sm:rounded-full sm:flex-1">
			<img
				class="object-cover max-sm:aspect-square max-sm:w-full"
				src="img/profile.png"
				alt="Profile"
			/>
		</div>
	</div>
</ResponsiveContent>

<ProjectListing />
