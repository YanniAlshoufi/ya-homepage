<script>
	import ResponsiveContent from '../../../comps/ResponsiveContent.svelte';
</script>

{#snippet content()}
	<h1>Ya Fullstack</h1>

	<a
		href="https://github.com/YanniAlshoufi/ya-monadshttps://github.com/YanniAlshoufi/ya-fullstack"
	>
		https://github.com/YanniAlshoufi/ya-monadshttps://github.com/YanniAlshoufi/ya-fullstack
	</a>

	<p>
		An opinionated C# template for creating fullstack Blazor app quickly (including an Option &
		a Result type and scripts—e. g. for creating CRUD services).
	</p>

	<p>I’m making this because I need it for NiiC and because it is handy for a quick start.</p>

	<div>
		<strong>Tech:</strong>
		<ul>
			<li>BlazorWASM</li>
			<li>Api Controllers</li>
			<li>XUnit</li>
			<li>NSubstitute</li>
			<li>Mapperly</li>
			<li>Self-made Option/Result type</li>
			<li>Many small scripts</li>
		</ul>
	</div>
{/snippet}

<ResponsiveContent {content} />
