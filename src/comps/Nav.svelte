<script lang="ts">
	import ResponsiveContent from './ResponsiveContent.svelte';
	import IconBurgerMenu from 'virtual:icons/iconamoon/menu-burger-horizontal-bold';
	import IconBack from '~icons/pajamas/go-back';
	import { pages, defaultPage } from '$lib/pages.js';

	let isMenuVisible = $state(false);

	let menuVisibilityClassName = $derived(isMenuVisible ? '' : 'max-sm:-translate-x-full');

	function showNavBar() {
		isMenuVisible = true;
	}

	function hideNavBar() {
		isMenuVisible = false;
	}

	$effect(() => {
		if (isMenuVisible) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	});
</script>

<ResponsiveContent wrapperClassName="min-h-20 bg-gray-800 text-blue-200 sticky top-0 z-30">
	<nav class="flex">
		<ul
			class="flex flex-1 items-center justify-between gap-5 text-2xl [&>li]:relative
				   [&>li]:cursor-pointer max-sm:[&_.hide-for-burger-menu]:hidden"
		>
			{#each pages as page}
				{#if page !== defaultPage}
					<li class="cursor-pointer max-sm:hidden">
						<a href={page.link}>{page.name}</a>
					</li>
				{/if}
			{/each}
			<li class="sm:hidden">
				<button onclick={showNavBar}>
					<IconBurgerMenu />
				</button>
			</li>
		</ul>
		<div
			class="font-title flex flex-1 cursor-pointer select-none justify-end text-center
					   text-4xl font-bold text-rose-400"
		>
			<a
				class="inline border-gray-500 px-3 pb-1 pt-2 hover:scale-110 hover:border
					   hover:ring-offset-8 focus:scale-100 active:scale-105"
				href="/home"
			>
				Yanni
			</a>
		</div>
	</nav>
</ResponsiveContent>

<nav
	class="fixed bottom-0 left-0 top-0 w-dvw justify-center bg-black bg-opacity-50 transition
		   ease-in-out {menuVisibilityClassName} z-40 pt-5 sm:-translate-x-full"
>
	<div class="pl-5">
		<button class="cursor-pointer text-3xl text-gray-400" onclick={hideNavBar}>
			<IconBack />
		</button>
	</div>

	<ul
		class="flex max-h-[80dvh] min-h-[60dvh] flex-col justify-center gap-10
			   overflow-y-auto p-10 pt-40"
	>
		{#each pages as page}
			<li class="rounded bg-rose-500 text-rose-100 ring-2 ring-rose-700">
				<a href={page.link} onclick={hideNavBar} class="block h-full w-full p-5 text-xl"
					>{page.name}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<style lang="postcss">
	ul > li:not(.sm\:hidden) {
		&:after {
			content: '';
			display: inline-block;
			background-color: theme(colors.white);
			position: absolute;
			height: 2px;
			transition: width 0.2s ease-in-out;
			left: -5px;
			width: 0;
			bottom: -5px;
		}

		&:hover:after {
			width: 110%;
		}
	}
</style>
