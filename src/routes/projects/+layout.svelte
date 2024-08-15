<script>
	import ProjectListing from '../../comps/ProjectListing.svelte';
	import IconArrowDown from 'virtual:icons/iconamoon/arrow-down-2-bold';
	import IconArrowUp from 'virtual:icons/iconamoon/arrow-up-2-bold';
	import { projectListingInformation } from '$lib/project-listing-height.svelte';

	const { children } = $props();

	let isCollapsed = $state(false);

	function toggleProjectWidgets() {
		isCollapsed = !isCollapsed;
	}
</script>

<button
	class="relative z-20 flex h-10 w-full items-center justify-center bg-zinc-900 sm:hidden"
	onclick={toggleProjectWidgets}
>
	{#if isCollapsed}
		<IconArrowDown />
	{:else}
		<IconArrowUp />
	{/if}
</button>

<ProjectListing shouldAddTitle={false} {isCollapsed}></ProjectListing>

<div
	class="projects-project-listing transition-transform duration-500 ease-in-out"
	style={isCollapsed ? `transform: translateY(-${projectListingInformation.height}px);` : ''}
>
	{@render children()}
</div>

<style lang="postcss">
	@media screen(sm) {
		.projects-project-listing {
			transform: translateY(0) !important;
		}
	}
</style>
