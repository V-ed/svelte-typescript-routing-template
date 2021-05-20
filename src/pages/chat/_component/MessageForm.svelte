<script lang="ts">
	import { SendNewMessageDocument } from '$/graphql/@generated';
	import { client } from '$/urql';
	import { mdiSend } from '@mdi/js';
	import Button from 'svelte-materialify/src/components/Button/Button.svelte';
	import Icon from 'svelte-materialify/src/components/Icon/Icon.svelte';
	import TextField from 'svelte-materialify/src/components/TextField/TextField.svelte';

	export let username: string | undefined = undefined;
	export let message: string | undefined = undefined;

	let isSending = false;

	$: canSend = username && message && !isSending;

	let messageRef: HTMLElement;

	async function handleSend() {
		if (username && message) {
			try {
				isSending = true;

				await client.mutation(SendNewMessageDocument, { text: message, username }).toPromise();

				message = undefined;
				isSending = false;

				messageRef.focus();
			} catch (error) {}
		}
	}
</script>

<form on:submit|preventDefault>
	<TextField disabled={isSending} class="mt-3" bind:value={username}>Username</TextField>
	<TextField inputElement={messageRef} autocomplete="off" disabled={isSending} class="mt-5" bind:value={message}>Message</TextField>
	<div class="flex justify-center mt-5">
		<Button disabled={!canSend} on:click={handleSend}>
			Send Message
			<Icon path={mdiSend} class="ml-3" />
		</Button>
	</div>
</form>
