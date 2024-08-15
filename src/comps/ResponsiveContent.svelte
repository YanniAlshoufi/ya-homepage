<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		wrapperClassName = '',
		isTextContent = false,
		children,
		content,
	}: {
		wrapperClassName?: string;
		isTextContent?: boolean;
		children?: Snippet;
		content?: Snippet;
	} = $props();
</script>

<div class="flex items-center justify-center {wrapperClassName}">
	<div
		class="flex w-2/3 flex-col gap-10 text-xl max-lg:w-4/5 max-sm:w-9/12
			   {isTextContent ? 'py-20' : ''}"
	>
		{@render children?.()}

		{#if content !== undefined}
			<div
				class="my-10 flex flex-col gap-5 break-words bg-zinc-900 px-10 py-10
					   text-xl ring-4 ring-rose-400 [&_a]:text-blue-400 [&_h1]:text-4xl [&_h2]:text-2xl
					   [&_ol]:list-inside [&_ol]:list-decimal [&_section]:flex [&_section]:flex-col
					   [&_section]:gap-5 [&_section]:border-t [&_section]:pt-6 [&_table]:text-left
					   [&_tbody]:block [&_th]:pr-3 [&_ul]:list-inside [&_ul]:list-disc"
			>
				{@render content()}
			</div>
		{/if}
	</div>
</div>
