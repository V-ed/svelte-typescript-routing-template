<script lang="ts">
	import { Button } from 'sveltestrap';
	import Loader from './Loader.svelte';

	export let name: string;
	export let count: number = 0;
	export let isDone = false;

	$: isDone = count >= 10;

	export let promise: Promise<void> = new Promise((resolve, reject) => setTimeout(resolve, 2000));
</script>

<p class="item w-100 d-flex justify-content-between">
	<span>Item : {name}, count : {count}</span>
	<Button color="primary" disabled={isDone} on:click={() => count++}>Count Up pls</Button>
	<Loader {promise}>
		<span slot="popover-success-content">Test</span>
	</Loader>
</p>

<style>
	.item {
		display: flex;
	}
</style>
