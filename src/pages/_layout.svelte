<script lang="ts">
	import Navbar from '$/components/nav/Navbar.svelte';
	import { metatags, page } from '@roxi/routify';
	import { capitalize } from '$/utils';

	metatags.template('title', (title: string) => `${title ? `${title} - ` : ''}Template`);
	$: metatags.title = capitalize($page.title);
</script>

<Navbar />

<div class="container mx-auto flex flex-col">
	<slot />
</div>
