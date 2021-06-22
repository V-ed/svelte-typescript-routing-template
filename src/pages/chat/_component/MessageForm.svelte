<script lang="ts">
	import { SendNewMessageDocument } from '$/graphql/@generated';
	import { client } from '$/utils/urql';
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
			} catch (error) {
				// no error management yet
			} finally {
				isSending = false;

				messageRef?.focus();
			}
		}
	}
</script>

<form on:submit|preventDefault>
	<TextField bind:value={username} disabled={isSending} class="mt-3">Username</TextField>
	<TextField bind:value={message} disabled={isSending} class="mt-5" inputElement={messageRef} autocomplete="off">Message</TextField>
	<div class="flex justify-center mt-5">
		<Button disabled={!canSend} on:click={handleSend}>
			Send Message
			<Icon path={mdiSend} class="ml-3" />
		</Button>
	</div>
</form>
