<script lang="ts">
	import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'sveltestrap';
	import { url, layout } from '@roxi/routify';

	let isOpen = false;
</script>

<div>
	<Navbar dark color="dark" expand="md">
		<NavbarBrand href="/">Navbar</NavbarBrand>
		<NavbarToggler on:click={() => (isOpen = !isOpen)} />
		<Collapse {isOpen} navbar expand="md">
			<Nav navbar class="ml-auto">
				{#each $layout.children as node}
					<NavItem>
						<NavLink href={$url(node.path)}>{node.title}</NavLink>
					</NavItem>
				{/each}
			</Nav>
		</Collapse>
	</Navbar>
</div>

<style>
	div :global(.nav-link) {
		text-transform: capitalize;
	}
</style>
