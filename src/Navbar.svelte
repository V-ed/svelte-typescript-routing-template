<script lang="ts">
	import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Collapse } from 'sveltestrap';

	let isOpen = false;
</script>

<Navbar dark color="dark" expand="md">
	<NavbarBrand href="#">Navbar</NavbarBrand>
	<NavbarToggler on:click={() => (isOpen = !isOpen)} />
	<Collapse {isOpen} navbar expand="md">
		<Nav navbar class="ml-auto">
			<NavItem>
				<NavLink href="#components/">Components</NavLink>
			</NavItem>
		</Nav>
	</Collapse>
</Navbar>
