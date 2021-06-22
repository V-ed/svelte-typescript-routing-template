<script lang="ts">
	import Navbar from '$/components/nav/Navbar.svelte';
	import { isMobile, setBreakpoints, themeStore } from '$/stores';
	import { capitalize } from '$/utils';
	import { metatags, page } from '@roxi/routify';
	import { onMount } from 'svelte';
	import MaterialAppMin from 'svelte-materialify/src/components/MaterialApp/MaterialAppMin.svelte';

	const appTitle = (import.meta.env.VITE_TITLE as string) ?? 'Test';

	$: pageTitle = `${$page.title ? $page.title : ''}${$page.title && appTitle ? ' - ' : ''}${appTitle}`;
	$: metatags.title = capitalize(pageTitle);

	onMount(async () => {
		// @ts-ignore
		let breakpoints = await import('svelte-materialify/src/utils/breakpoints');
		setBreakpoints(breakpoints.default);
		isMobile.refresh();
	});
</script>

<svelte:window on:resize={isMobile.refresh} />

<MaterialAppMin theme={$themeStore}>
	<div class="flex flex-col" style="min-height: 100vh">
		<Navbar />

		<div class="container mx-auto flex flex-col flex-grow">
			<slot />
		</div>
	</div>
</MaterialAppMin>
