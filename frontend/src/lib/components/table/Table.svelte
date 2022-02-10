<script lang="ts">
	export let columns = [];
	export let displayedColumns = [];
	// Type DataSource<T>
	export let dtSource;
	export let currentPage = 1;
	export let totalPages: number;
	export let perPage = 15;
	export let rootAccessPath = '';
	export let currentRows = [];
	export let loading = true;
	export let selectedRows = [];
	$: if (loading) {
		let accessPath = rootAccessPath.split('.');
		let data = dtSource.currentRows.then((data) => {
			console.log(accessPath);
			for (let i = 0; i < accessPath.length; i++) {
				data = data[accessPath[i]];
				console.log(data);
				currentRows = data;
			}
			loading = false;
		});
	}

	// $: if (!$currentRowsSubscription.fetching && !$currentRowsSubscription.error) {
	//
	// }
	$: activeColumns = columns.filter((i) => {
		return displayedColumns.includes(i.key);
	});
	$: selectedRows = currentRows.filter((i) => i.__selected);
	$: console.log(activeColumns);
	$: console.log(currentRows);
	let indeterminateSelected = false;

	let selectedAll = false;

	function selectAll() {
		console.log(selectedAll);
		currentRows.forEach((data, i) => {
			currentRows[i].__selected = selectedAll;
			console.log(currentRows[i]);
		});
	}

	function nextPage() {
		console.log(dtSource);
		if (dtSource !== null) {
			loading = true;
			dtSource.goToNextPage();
		}
	}

	function elementSelected(element) {
		let selected = true;
		let noneSelected = true;
		currentRows.forEach((data, i) => {
			selected = selected && currentRows[i].__selected;
			if (currentRows[i].__selected) {
				noneSelected = false;
				indeterminateSelected = currentRows[i].__selected;
				console.log(currentRows[i].__selected);
			}
		});
		if (noneSelected) {
			selectedAll = false;
			indeterminateSelected = false;
		}
		if (selected) {
			selectedAll = true;
			indeterminateSelected = false;
		}
	}
</script>

<table class="w-full border-collapse">
	<thead>
		<tr>
			<th class="w-10 border border-neutral-600 bg-zinc-200/75 p-2">
				<input
					bind:checked={selectedAll}
					bind:indeterminate={indeterminateSelected}
					on:change={selectAll}
					type="checkbox"
				/>
			</th>
			{#each activeColumns as i}
				<th class="border border-neutral-600 bg-zinc-200/75 p-2">{i.name}</th>
			{/each}
			<th class="border border-neutral-600 bg-zinc-200/75 p-2">actions</th>
		</tr>
	</thead>
	<tbody>
		{#if loading}
			{#each { length: 5 } as _, i}
				<tr class="animate-pulse">
					<td class="w-10 border border-neutral-600 bg-zinc-200/75 p-2">
						<div class="h-2 bg-zinc-400">&nbsp;</div>
					</td>
					{#each activeColumns as i}
						<td class="border border-neutral-600 bg-zinc-200/75 p-2">
							<div class="h-2 bg-zinc-400">&nbsp;</div>
						</td>
					{/each}
					<td class="border border-neutral-600 bg-zinc-200/75 p-2">
						<div class="h-2 bg-zinc-400">&nbsp;</div>
					</td>
				</tr>
			{/each}
			<!--{:else if $currentRowsSubscription.error}-->
			<!--			<p>Oh no... {$currentRowsSubscription.error.message}</p>-->
		{:else}
			{#each currentRows as element}
				<tr>
					<td class="w-10 border border-neutral-600 bg-zinc-200/75 p-2 text-center">
						<input type="checkbox" bind:checked={element.__selected} on:change={elementSelected} />
					</td>
					{#each activeColumns as i}
						<td class="border border-neutral-600 bg-zinc-200/75 p-2">{element[i.key]}</td>
					{/each}
					<td class="border border-neutral-600 bg-zinc-200/75 p-2">
						<slot name="actions" {element} />
					</td>
				</tr>
			{/each}
		{/if}
	</tbody>
</table>
{#if loading}Loading{/if}
<button on:click={nextPage}>Next</button>
