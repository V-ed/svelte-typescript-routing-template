<script lang="ts">
	import Logo from './logo.svelte';
	import Counter from './counter.svelte';
	import Item from './Item.svelte';
	import { Input, Container, Form, FormGroup, Label, Col } from 'sveltestrap';
	import { Popover } from 'sveltestrap';
	import Navbar from './Navbar.svelte';

	export let name: string;

	const items = ['Item 1', 'Item 2', 'Item 3'];
	const itemsDone: boolean[] = new Array(items.length);
	const itemsCount: number[] = new Array(items.length);
</script>

<Navbar />

<Container class="d-flex flex-column align-items-center">
	<p>Hello {name}!</p>

	<Form class="w-100">
		<FormGroup row>
			<Label for="test-input" sm="4" class="col-form-label">This is a label</Label>
			<Col sm="8" class="d-flex align-items-center">
				<Input id="test-input" type="text" bind:value={name} />
			</Col>
		</FormGroup>
	</Form>

	<Logo />
	<Counter name="3" />

	<div class="my-5">
		<span id="test-id">Hello World</span>
		<Popover target="test-id">Test</Popover>
	</div>

	<div class="w-100">
		{#each items as item, index}
			{#if index == 0 || itemsDone[index - 1]}
				<Item name={item} bind:count={itemsCount[index]} bind:isDone={itemsDone[index]} />
			{/if}
		{/each}
	</div>

	<p class="d-flex flex-column">
		{#each itemsCount as counter, index}
			<span>Count {index + 1} : {counter}</span>
		{/each}
	</p>
</Container>
