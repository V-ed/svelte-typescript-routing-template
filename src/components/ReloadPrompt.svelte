<script lang="ts">
	import { mdiReload } from '@mdi/js';
	import Button from 'svelte-materialify/src/components/Button/Button.svelte';
	import Icon from 'svelte-materialify/src/components/Icon/Icon.svelte';
	import Snackbar from 'svelte-materialify/src/components/Snackbar/Snackbar.svelte';
	import { useRegisterSW } from 'virtual:pwa-register/svelte';

	export let offlineReadyTimeout: number = 3000;

	const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW({
		onRegistered(swr) {
			console.log(`SW registered: ${swr}`);
		},
		onRegisterError(error) {
			console.log('SW registration error', error);
		},
	});

	function close() {
		offlineReady.set(false);
		needRefresh.set(false);
	}

	$: toast = $offlineReady || $needRefresh;
</script>

<Snackbar class="justify-between" right bottom bind:active={toast} timeout={$offlineReady ? offlineReadyTimeout : undefined}>
	{#if $offlineReady}
		<span>App ready to work offline</span>
	{:else}
		<span>New content available, click on reload button to update.</span>
	{/if}
	{#if $needRefresh}
		<Button fab on:click={() => updateServiceWorker(true)} class="mr-3">
			<Icon path={mdiReload} />
		</Button>
	{:else}
		<Button text on:click={close} class="ml-3">Dismiss</Button>
	{/if}
</Snackbar>
