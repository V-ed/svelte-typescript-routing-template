<script lang="ts">
	import Navbar from '$/components/nav/Navbar.svelte';
	import { metatags, page } from '@roxi/routify';
	import { capitalize } from '$/utils';
	import { MaterialAppMin } from 'svelte-materialify/src';
	import { themeStore } from '$/stores';

	metatags.template('title', (title: string) => `${title ? `${title} - ` : ''}Template`);
	$: metatags.title = capitalize($page.title);
</script>

<MaterialAppMin theme={$themeStore}>
	<div class="flex flex-col" style="min-height: 100vh">
		<Navbar />

		<div class="container mx-auto flex flex-col flex-grow">
			<slot />
		</div>
	</div>
</MaterialAppMin>
