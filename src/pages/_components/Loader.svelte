<script lang="ts">
	import { Popover, Spinner } from 'sveltestrap';
	import type * as CSS from 'csstype';

	let classes: string = '';

	export { classes as class };

	export let size: CSS.Properties['width'] = '2rem';
	export let promise: Promise<unknown>;
	export let doHide: boolean = false;
	export let name: string = (+new Date()).toString();

	promise.then(() => (isDone = true)).catch(() => {});

	let isDone = false;

	type LoaderPopoverProps = Popover['$$prop_def'];

	export let popoverSuccessOptions: Partial<LoaderPopoverProps> | undefined = undefined;
	export let popoverFailureOptions: Partial<LoaderPopoverProps> | undefined = undefined;

	const defaultPopoverSuccessOptions: LoaderPopoverProps = { target: `loader-success-${name}`, trigger: 'hover' };
	const defaultPopoverFailureOptions: LoaderPopoverProps = { target: `loader-failure-${name}`, trigger: 'hover' };

	const popoverSuccessProps = $$slots['popover-success-content'] && {
		...defaultPopoverSuccessOptions,
		...(popoverSuccessOptions ?? {}),
	};
	const popoverFailureProps = $$slots['popover-failure-content'] && {
		...defaultPopoverFailureOptions,
		...(popoverFailureOptions ?? {}),
	};
</script>

<div class="align-self-center {classes}" hidden={doHide && isDone}>
	{#await promise}
		<Spinner />
	{:then}
		<img id={`loader-success-${name}`} class="colorize-green" style="width: {size};" src="./images/check.svg" alt="Succès" />
		{#if popoverSuccessProps}
			<Popover {...popoverSuccessProps}>
				<slot name="popover-success-content" />
			</Popover>
		{/if}
	{:catch}
		<img id={`loader-failure-${name}`} class="colorize-red" style="width: {size};" src="./images/alert-octagon.svg" alt="Avertissement" />
		{#if popoverFailureProps}
			<Popover {...popoverFailureProps}>
				<slot name="popover-failure-content" />
			</Popover>
		{/if}
	{/await}
</div>

<style>
	img.colorize-red {
		filter: invert(27%) sepia(100%) saturate(3000%) hue-rotate(0deg);
	}

	img.colorize-green {
		filter: invert(27%) sepia(100%) saturate(3000%) hue-rotate(130deg);
	}
</style>
