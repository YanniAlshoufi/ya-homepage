<script lang="ts">
	import ResponsiveContent from './ResponsiveContent.svelte';
	import { projects } from '$lib/projects';
	import { page } from '$app/stores';
	import { projectListingInformation } from '$lib/project-listing-height.svelte';
	import { onMount } from 'svelte';

	const {
		shouldAddTitle = true,
		isCollapsed = false,
	}: {
		shouldAddTitle?: boolean;
		isCollapsed?: boolean;
	} = $props();
	const currentLink = {
		get url() {
			return $page.url.href;
		},
	};
	const focusedProject = $derived(
		currentLink.url.substring(currentLink.url.indexOf('projects/') + 'projects/'.length),
	);

	const classNamesOfIsCollapsed = $derived(isCollapsed ? 'max-sm:-translate-y-full' : '');

	$effect(() => console.log(focusedProject));

	let innerListingElement: HTMLDivElement;

	const setHeight = () => {
		projectListingInformation.height = innerListingElement.clientHeight;
	};

	onMount(function () {
		setHeight();
		window.addEventListener('resize', setHeight);
	});
</script>

<ResponsiveContent
	wrapperClassName="bg-rose-500 border-t border-b border-white {shouldAddTitle ? 'pt-5' : 'pt-9'}
					  transition-transform duration-500 ease-in-out z-10 relative
					  {classNamesOfIsCollapsed}"
>
	<div class="w-full" bind:this={innerListingElement}>
		{#if shouldAddTitle}
			<h3 class="my-4 text-2xl font-semibold text-red-100">Some of My Projects:</h3>
		{/if}

		<ul
			class="flex flex-wrap justify-center gap-5 pb-10 [&_img]:aspect-[1/0.82]
			   [&_img]:w-60 [&_img]:cursor-pointer [&_li:active]:scale-95
			   [&_li:focus]:scale-100 [&_li:hover]:scale-105"
		>
			{#each projects as project}
				<li>
					<a href="/projects/{project}">
						<img
							src="/img/widgets/{project}.png"
							alt={project}
							class="select-none {focusedProject === project
								? 'ring ring-blue-500'
								: ''}"
						/>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</ResponsiveContent>
