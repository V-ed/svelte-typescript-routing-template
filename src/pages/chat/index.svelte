<script lang="ts">
	import { getIO } from '$/sveltesocket';
	import { onMount } from 'svelte';
	import { Button, Col, Form, FormGroup, Input, Label } from 'sveltestrap';

	import Message from './_component/Message.svelte';

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

	onMount(async () => {
		const response = await fetch('http://localhost:3000/messages');

		const newMessages = await response.json();

		messages = [...messages, ...newMessages];
	});
</script>

<!-- routify:options title="Chat" -->

<div class="border border-dark p-3 w-100 h-100">
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
		<FormGroup row>
			<Label for="message" sm="4" class="col-form-label">Message</Label>
			<Col sm="8" class="d-flex align-items-center">
				<Input id="message" type="text" bind:value={message} autocomplete="off" />
				<Button on:click={handleSend}>Send</Button>
			</Col>
		</FormGroup>
	</Form>
</div>
