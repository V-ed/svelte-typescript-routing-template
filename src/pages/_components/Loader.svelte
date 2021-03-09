<script lang="ts">
	import { Popover, Spinner } from 'sveltestrap';
	import type * as CSS from 'csstype';

	let classes: string = '';

	export { classes as class };

	export let small: boolean = false;
	export let type: string = 'border';

	export let size: CSS.Properties['width'] = `${small ? '1.3' : '2'}rem`;
	export let promise: Promise<unknown>;
	export let doHide: boolean = false;
	export let name: string = Date.now().toString();

	promise.catch(() => {}).then(() => (isDone = true));

	let isDone = false;
	$: isHidden = doHide && isDone;

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

<div class="{isHidden ? '' : 'd-flex '}align-self-center align-items-center {classes}" class:d-none={isHidden}>
	{#await promise}
		<Spinner {size} {type} class={small ? `spinner-${type}-sm` : ''} />
	{:then}
		<img
			id={`loader-success-${name}`}
			class="colorize-green"
			style="width: {size};"
			src="./images/check.svg"
			alt="Succès"
		/>{#if popoverSuccessOptions && popoverSuccessProps}
			<Popover {...popoverSuccessProps}>
				<slot name="popover-success-content" />
			</Popover>
		{/if}
	{:catch}
		<img
			id={`loader-failure-${name}`}
			class="colorize-red"
			style="width: {size};"
			src="./images/alert-octagon.svg"
			alt="Avertissement"
		/>{#if popoverFailureOptions && popoverFailureProps}
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
