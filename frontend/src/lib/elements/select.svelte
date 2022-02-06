<script>
	import { derived, writable } from 'svelte/store';
	import DecreaseArrowIcon from '~icons/sustain/decrease-arrow';
	import IncreaseArrowIcon from '~icons/sustain/increase-arrow';

	const items = writable(['dog', 'cat', 'fish', 'iguana']);
	const term = writable('');
	let val = '';
	const filtered = derived([term, items], ([$term, $items]) =>
		$items.filter((x) => x.includes($term))
	);
	$: term.set(val);
	let showSelect = false;
</script>

<div class="border-dark-green rounded border p-2 ">
	<div
		class="text-medium-black relative cursor-pointer px-3 text-lg"
		on:click={() => (showSelect = true)}
	>
		{#if val === ''}select{:else}{val}{/if}
		<span class="absolute right-0 p-2">
			{#if showSelect}
				<IncreaseArrowIcon class="text-medium-black fill-current text-xs " />
			{:else}
				<DecreaseArrowIcon class="text-medium-black text-xs fill-current " />
			{/if}
		</span>
	</div>
	{#if showSelect}
		<input
			bind:value={val}
			type="text"
			id="searchInput"
			class="focus:shadow-dark-green text-medium-black text-md  border-light-green focus:border-dark-green focus:ring-dark-green w-full rounded border p-1 px-2 drop-shadow-lg"
			autofocus
		/>
		{#each $filtered as item}
			<div
				on:click={() => {
					val = item;
					showSelect = false;
				}}
				class=" text-medium-black border-medium-black focus:border-dark-green focus:ring-dark-green hover:bg-dark-gray w-full cursor-pointer rounded p-2 px-3 text-lg "
			>
				{item}
			</div>
		{/each}
	{/if}
</div>
