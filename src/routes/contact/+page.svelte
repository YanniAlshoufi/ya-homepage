<script>
	import ResponsiveContent from '../../comps/ResponsiveContent.svelte';
</script>

{#snippet content()}
	<h1>Contact and Exact Information about Me</h1>

	<strong>Email:</strong>
	<p>yanni.school.work@gmail.com</p>

	<strong>Linked-In:</strong>
	<a href="https://www.linkedin.com/in/yanni-alshoufi/">
		https://www.linkedin.com/in/yanni-alshoufi/
	</a>

	<table>
		<tbody>
			<tr>
				<th>Official First Name:</th>
				<td>Yane</td>
			</tr>
			<tr>
				<th>Official Last Name:</th>
				<td>Al Shoufi</td>
			</tr>
		</tbody>
	</table>

	<strong>Non-Exact Address:</strong>
	<p>
		4710 Grieskirchen<br />
		Upper Austria, AUSTRIA
	</p>
{/snippet}

<ResponsiveContent {content} />
