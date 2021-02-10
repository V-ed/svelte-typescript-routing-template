<!-- routify:options title="Chat" -->
<script lang="ts">
	import { getIO } from '$/sveltesocket';
	import { Button, Col, Form, FormGroup, Input, Label } from 'sveltestrap';
	import Loader from '$/pages/_components/Loader.svelte';
	import Message from './_component/Message.svelte';
	import { onMountPromise } from '$/svelteutils';
	import delayer from 'minimum-delayer';

	let username: string;
	let message: string;

	type Banana = { username: string; message: string };

	let messages: Banana[] = [];

	const socket = getIO();

	socket.on('send_message', ({ username, message }: { username: string; message: string }) => {
		console.log(username, message);
		messages = [...messages, { username, message }];
	});

	function handleSend(e: Event) {
		e.preventDefault();

		const object = { username, message };
		console.log('emitting object', object);

		socket.emit('send_message', object);

		message = '';
	}

	const promise = onMountPromise(async () => {
		const response = await delayer(() => fetch('http://localhost:3000/messages'), 1000);

		const newMessages = await response.value?.json();

		messages = [...messages, ...newMessages];
	});
</script>

<div class="border border-dark p-3 w-100 h-100">
	{#await promise}
		<div class="d-flex justify-content-center align-items-center">
			<span>Loading chat service...</span>
			<Loader {promise} class="ml-3" />
		</div>
	{:then}
		{#if !messages.length}
			<p class="font-italic">Messages will appear here...</p>
		{:else}
			<ul id="messages">
				{#each messages as { username, message }}
					<Message user={username} {message} />
				{/each}
			</ul>
		{/if}
		<Form class="w-100 h-100">
			<FormGroup row>
				<Label for="username" sm="4" class="col-form-label">Your username</Label>
				<Col sm="8" class="d-flex align-items-center">
					<Input id="username" type="text" bind:value={username} />
				</Col>
			</FormGroup>
			<FormGroup row class="mb-0">
				<Label for="message" sm="4" class="col-form-label">Message</Label>
				<Col sm="8" class="d-flex align-items-center">
					<Input id="message" type="text" bind:value={message} autocomplete="off" />
					<Button on:click={handleSend}>Send</Button>
				</Col>
			</FormGroup>
		</Form>
	{:catch error}
		<div class="d-flex justify-content-center align-items-center">
			<span class="text-danger">
				pls {error}
			</span>
		</div>
	{/await}
</div>
