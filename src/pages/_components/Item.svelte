<!--
	@component
	Here's some doc for the Item Component.
	
	***Sweet!***
-->
<script lang="ts">
	import Loader from '$/components/Loader.svelte';

	export let name: string;
	export let count: number = 0;
	export let isDone = false;

	$: isDone = count >= 10;

	export let promise: Promise<void> = new Promise((resolve, reject) => setTimeout(resolve, 2000));
</script>

<div class="flex flex-col sm:flex-row items-center mb-5">
	<span>Item : {name}, count : {count}</span>
	<button class="mt-2 sm:mt-0 button-blue py-2 px-4 mx-0 sm:mx-4" disabled={isDone} on:click={() => count++}> Count up! </button>
	<div class="flex mt-2 sm:mt-0">
		<Loader {promise} />
		<Loader
			promise={promise.then(() => {
				throw 'rip';
			})}
			class="ml-2"
		/>
	</div>
</div>

<style>
	button {
		@apply w-full sm:(w-auto);
	}
</style>
