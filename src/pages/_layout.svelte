<script lang="ts">
	import { Container } from 'sveltestrap';
	import Navbar from './_components/Navbar.svelte';
	import { metatags, page } from '@roxi/routify';
	import { capitalize } from 'src/utils';

	metatags.template('title', (title: string) => `${title ? `${title} - ` : ''}Template`);
	$: metatags.title = capitalize($page.title);
</script>

<Navbar />

<Container class="d-flex flex-column align-items-center">
	<slot />
</Container>
