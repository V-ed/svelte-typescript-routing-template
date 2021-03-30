<script lang="ts">
	import Navbar from '$/components/nav/Navbar.svelte';
	import { metatags, page } from '@roxi/routify';
	import { capitalize } from '$/utils';
	import { MaterialApp } from 'svelte-materialify';

	metatags.template('title', (title: string) => `${title ? `${title} - ` : ''}Template`);
	$: metatags.title = capitalize($page.title);

	let theme: 'light' | 'dark' | undefined = 'dark';

	function toggleTheme() {
		if (theme === 'light') theme = 'dark';
		else theme = 'light';
	}
</script>

<MaterialApp {theme}>
	<Navbar />

	<div class="container mx-auto flex flex-col">
		<slot />
	</div>
</MaterialApp>
