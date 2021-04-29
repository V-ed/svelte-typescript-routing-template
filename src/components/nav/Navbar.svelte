<script lang="ts">
	// import { layout } from '@roxi/routify';
	// import { AppBar, Button, Menu, ListItem, Icon, NavigationDrawer, Overlay } from 'svelte-materialify/src';
	import AppBar from 'svelte-materialify/src/components/AppBar/AppBar.svelte';
	import Button from 'svelte-materialify/src/components/Button/Button.svelte';
	import Menu from 'svelte-materialify/src/components/Menu/Menu.svelte';
	import ListItem from 'svelte-materialify/src/components/List/ListItem.svelte';
	import Icon from 'svelte-materialify/src/components/Icon/Icon.svelte';
	import { mdiMenu, mdiDotsVertical, mdiThemeLightDark } from '@mdi/js';
	// import NavElems from './NavElems.svelte';
	import Drawer from '../drawer/Drawer.svelte';
	import { themeStore, isDrawerOpen } from '$/stores';
</script>

<!-- <NavElems nodes={$layout.children} /> -->

<AppBar fixed class="w-screen sm:pr-3">
	<div slot="icon">
		<Button fab depressed on:click={isDrawerOpen.toggle}>
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
	<Button fab depressed on:click={themeStore.toggle}>
		<Icon path={mdiThemeLightDark} />
	</Button>
</AppBar>

<Drawer />

<div class="h-14" />

<style>
	:global(.s-app-bar) {
		@apply flex-initial;
	}
</style>
