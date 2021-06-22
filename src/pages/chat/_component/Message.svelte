<script lang="ts">
	export let username: string;
	export let text: string;

	export let time: string | undefined;

	$: convertedTime = (time && new Date(time)) || undefined;

	$: formattedDate = convertedTime?.toLocaleDateString();
	$: formattedTime = convertedTime?.toLocaleTimeString();
</script>

<li>
	{#if formattedTime}
		<span class="italic">{formattedTime}</span>
		<span> - </span>
	{/if}
	<span class="font-weight-bold">{username}</span>
	<span> : </span>
	<span>
		{text}
	</span>
</li>
