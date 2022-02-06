<script lang="ts">
	let options = [
		{ id: '10', value: 10 },
		{ id: '20', value: 20 },
		{ id: '50', value: 50 }
	];
	export let selected;
</script>

<div class="text-medium-black mx-8 flex flex-row items-center space-x-3">
	<span class=" space-x-2 text-xs">Display</span>
	<select
		bind:value={selected}
		class="form-select border-dark-gray bg-light-gray h-10 rounded border text-xs"
	>
		{#each options as option}
			<option value={option.id}>{option.value}</option>
		{/each}
	</select>
	<span class="text-xs text-gray-700">entries</span>
</div>
