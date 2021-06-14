<!-- routify:options title="Chat" -->
<script lang="ts">
	import { onMountPromise } from '$/svelteutils';
	import { client } from '$/urql';
	import type { ChatMessageFragment } from '$gql';
	import { GetMessagesDocument, NewMessagesDocument } from '$gql';
	import { operationStore, subscription } from '@urql/svelte';
	import { delayer } from 'minimum-delayer';
	import ProgressCircular from 'svelte-materialify/src/components/ProgressCircular/ProgressCircular.svelte';
	import Message from './_component/Message.svelte';
	import Form from './_component/MessageForm.svelte';

	let messages: ChatMessageFragment[] | undefined = undefined;

	const messagesPromise = onMountPromise(async () => {
		const response = await delayer(() => client.query(GetMessagesDocument).toPromise(), 500);

		if (response.value?.error) {
			throw response.value.error.message;
		}

		const messageQuery = response.value?.data;

		if (messageQuery) {
			messages = messageQuery.messages;
		}
	});

	subscription(operationStore(NewMessagesDocument), (prevMessages: ChatMessageFragment[] = [], data) => {
		if (messages) {
			messages = [...messages, data.messageAdded];
		}
		return [...prevMessages, data.messageAdded];
	});
</script>

<div class="block border p-3">
	{#await messagesPromise}
		<div class="flex justify-center">
			<span class="self-center">Loading chat service...</span>
			<ProgressCircular indeterminate color="primary" class="ml-3" />
		</div>
	{:then}
		{#if messages}
			<ul id="messages" class="list-disc list-inside px-5 pt-2 pb-5">
				{#each messages as { user, text, time }}
					<Message username={user.username} {text} {time} />
				{/each}
			</ul>
		{/if}
		<Form />
	{:catch error}
		<div class="flex justify-center">
			<span>pls <span class="text-red-600 font-bold">{error}</span></span>
		</div>
	{/await}
</div>
