<!-- routify:options title="Chat" -->
<script lang="ts">
	import { getIO } from '$/sveltesocket';
	import Loader from '$/components/Loader.svelte';
	import Message from './_component/Message.svelte';
	import { onMountPromise } from '$/svelteutils';
	import delayer from 'minimum-delayer';
	import axios from 'axios';
	import Form from './_component/MessageForm.svelte';
	import { getApiUrl } from '$/utils';

	type Banana = { user: { username: string }; message: string };

	let formMessage: string;

	let messages: Banana[] = [];

	const socket = getIO();

	socket.on('send_message', ({ user, message }: { user: { username: string }; message: string }) => {
		messages = [...messages, { user, message }];
	});

	async function handleSend(e: CustomEvent) {
		const { username, message } = e.detail;

		const data = { username, message };

		// socket.emit('send_message', object);
		await axios.post(getApiUrl('/messages'), data);

		formMessage = '';
	}

	const request = axios.get(getApiUrl('/messages'));

	const promise = onMountPromise(async () => {
		const response = await delayer(() => request, 250);

		const newMessages = await response.value?.data;

		if (newMessages) {
			messages = [...newMessages];
		}
	});
</script>

<div class="block border p-3">
	{#await promise}
		<div class="text-center">
			<span>Loading chat service...</span>
			<Loader {promise} class="ml-3" />
		</div>
	{:then}
		{#if !messages.length}
			<p class="text-center italic">Messages will appear here...</p>
		{:else}
			<ul id="messages" class="list-disc list-inside px-5 pt-2 pb-5">
				{#each messages as { user, message }}
					<Message user={user.username} {message} />
				{/each}
			</ul>
		{/if}
		<Form on:send={handleSend} bind:message={formMessage} />
	{:catch error}
		<div class="text-center">
			<span>pls </span>
			<span class="text-red-600 font-bold">{error}</span>
		</div>
	{/await}
</div>
