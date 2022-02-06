<script lang="ts">
	import CloseIcon from '~icons/sustain/close';
	import FilterIcon from '~icons/sustain/filter';

	let showFilter = false;
</script>

<div class="relative">
	<button
		class="text-medium-black border-dark-gray bg-light-gray flex h-10  rounded  border px-2"
		on:click={() => (showFilter = true)}
	>
		<span class="my-auto p-2 text-xs">Filter</span>
		<span class="my-auto"><FilterIcon class=" text-xs" /></span>
	</button>
	{#if showFilter}
		<div class="absolute right-0  z-10 mt-3 h-max w-72 rounded-xl bg-white text-xs drop-shadow-2xl	">
			<div class="space-y-4 p-4">
				<div class="flex justify-between  border-b text-xl">
					<div class=" font-semibold">Filter by</div>
					<button on:click={() => (showFilter = false)} class="text-light-black">
						<CloseIcon class="text-xs" />
					</button>
				</div>
				<slot />
			</div>
			<div class="z-50 flex justify-between rounded bg-white p-2 drop-shadow-2xl">
				<div class="text-red-rose">Clear all filters</div>
				<div class="flex space-x-4">
					<div class="text-light-black">Cancel</div>
					<div class="text-light-green">Apply</div>
				</div>
			</div>
		</div>
	{/if}
</div>
