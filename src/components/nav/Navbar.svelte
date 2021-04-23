<script lang="ts">
	// import { layout } from '@roxi/routify';
	import { AppBar, Button, Menu, ListItem, Icon, NavigationDrawer, Overlay } from 'svelte-materialify/src';
	import { mdiMenu, mdiDotsVertical, mdiThemeLightDark } from '@mdi/js';
	// import NavElems from './NavElems.svelte';
	import DrawerContent from '../drawer/DrawerContent.svelte';
	import { themeStore, isDrawerOpen } from '$/stores';

	function toggleDrawer() {
		isDrawerOpen.set(!$isDrawerOpen);
	}

	function toggleTheme() {
		themeStore.toggle();
	}
</script>

<!-- <NavElems nodes={$layout.children} /> -->

<AppBar fixed class="w-screen sm:pr-3">
	<div slot="icon">
		<Button fab depressed on:click={toggleDrawer}>
			<Icon path={mdiMenu} />
		</Button>
	</div>
	<div slot="title">
		<span>Title</span>
	</div>
	<div style="flex-grow: 1" />
	<Button>Item</Button>
	<Menu right>
		<div slot="activator">
			<Button fab depressed>
				<Icon path={mdiDotsVertical} />
			</Button>
		</div>
		<ListItem>Item 1</ListItem>
		<ListItem>Item 2</ListItem>
		<ListItem>Item 3</ListItem>
	</Menu>
	<Button fab depressed on:click={toggleTheme}>
		<Icon path={mdiThemeLightDark} />
	</Button>
</AppBar>

<NavigationDrawer style="height: calc(100vh - var(--s-nav-clipped-height)); top: var(--s-nav-clipped-height)" fixed active={$isDrawerOpen}>
	<DrawerContent />
</NavigationDrawer>
<Overlay active={$isDrawerOpen} on:click={toggleDrawer} index={1} />

<div class="h-14" />

<style>
	:global(.s-app-bar) {
		@apply flex-initial;
	}
</style>
