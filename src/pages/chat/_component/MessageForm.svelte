<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let username: string | undefined = undefined;
	export let message: string | undefined = undefined;

	function handleSend(_e: Event) {
		dispatch('send', {
			username,
			message,
		});
	}
</script>

<form on:submit|preventDefault={handleSend}>
	<div class="shadow sm:rounded-md sm:overflow-hidden">
		<div class="px-4 py-5 bg-white space-y-6 sm:p-6">
			<div class="grid grid-cols-3 gap-6">
				<div class="col-span-3 sm:col-span-2">
					<label for="username" class="block text-sm font-medium text-gray-700">Username</label>
					<div class="mt-1 flex rounded-md shadow-sm">
						<input
							type="text"
							name="username"
							id="username"
							class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded sm:text-sm border-gray-300"
							placeholder="www.example.com"
							bind:value={username}
						/>
					</div>
				</div>
			</div>

			<div>
				<label for="message" class="block text-sm font-medium text-gray-700">Message</label>
				<div class="mt-1">
					<textarea
						id="message"
						name="message"
						rows="3"
						class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
						placeholder="Type your message here..."
						bind:value={message}
					/>
				</div>
			</div>
		</div>
		<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
			<button
				type="submit"
				class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				Send
			</button>
		</div>
	</div>
</form>
