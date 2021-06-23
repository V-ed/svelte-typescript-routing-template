<script lang="ts">
	import Navbar from '$/components/nav/Navbar.svelte';
	import { isMobile, setBreakpoints, themeStore } from '$/stores';
	import { capitalize } from '$/utils';
	import { metatags, page } from '@roxi/routify';
	import { onMount } from 'svelte';
	import Container from 'svelte-materialify/src/components/Grid/Container.svelte';
	import MaterialAppMin from 'svelte-materialify/src/components/MaterialApp/MaterialAppMin.svelte';
	import Drawer from '../components/drawer/Drawer.svelte';

	const appTitle = (import.meta.env.VITE_TITLE as string) ?? '';

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
	<Navbar />

	<Drawer />

	<main class:nav-forced-open={!$isMobile} class="min-h-screen">
		<Container class="flex flex-col">
			<slot />
		</Container>
	</main>
</MaterialAppMin>

<style>
	main {
		/* Svelte-Materialify's navbar height */
		margin-top: 56px;
	}

	main.nav-forced-open {
		/* Svelte-Materialify's drawer width */
		margin-left: 256px;
	}
</style>
