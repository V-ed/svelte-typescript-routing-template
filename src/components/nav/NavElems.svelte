<script lang="ts">
	import { isActive, url } from '@roxi/routify';

	export let nodes: ClientNodeApi[];
</script>

{#each nodes as node}
	<a
		href={$url(node.path)}
		class="{!$isActive(node.path)
			? 'inactive hover:text-white hover:bg-gray-700'
			: 'active'} nav-link px-3 py-2 block rounded-md text-base sm:text-sm font-medium my-auto"
	>
		{node.title}
	</a>
{/each}

<style>
	.nav-link {
		@apply capitalize;
	}

	.active {
		@apply bg-gray-900 text-white;
	}

	.inactive {
		@apply text-gray-300;

		/* Bug with tailwind / windicss intellisense : @apply and hover are not compatible :( */
		/* https://github.com/tailwindlabs/tailwindcss-intellisense/issues/216 */
		/* @apply hover:text-white; */
		/* @apply hover:bg-gray-700; */
	}
</style>
