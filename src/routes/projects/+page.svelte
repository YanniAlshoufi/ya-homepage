<script>
	import ResponsiveContent from '../../comps/ResponsiveContent.svelte';
</script>

{#snippet content()}
	<h1>Welcome to my projects page! :)</h1>

	<p>Click on a project to learn more about it.</p>
{/snippet}

<ResponsiveContent {content} />
