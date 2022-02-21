<script lang="ts">
	import { Pagination } from '$lib/graphql/generated';
	import { onMount } from 'svelte';

	export let columns = [];
	export let displayedColumns = [];
	// Type DataSource<T>
	export let dtSource;
	export let currentPage = 1;
	export let totalPages: number;
	export let perPage = 15;
	export let filters = {};
	export let rootAccessPath = '';
	export let currentRows = [];
	export let loading = true;
	export let pagination: Pagination = null;
	export let selectedRows = [];
	let accessPath = rootAccessPath.split('.');
	console.log(accessPath);
	console.log('DTSource', dtSource);
	// loadUp();
	$: gotoPage(currentPage);

	function loadUp() {
		dtSource.currentRows.then((data) => {
			for (let i = 0; i < accessPath.length; i++) {
				console.log(data);
				if (data !== undefined && data !== null && data[accessPath[i]] !== undefined) {
					if (data['pagination'] !== undefined) {
						pagination = data['pagination'];
					}
					data = data[accessPath[i]];
					currentRows = data;
				} else {
					break;
				}
			}
			loading = false;
		});
	}

	$: activeColumns = columns.filter((i) => {
		return displayedColumns.includes(i.key);
	});
	$: selectedRows = currentRows.filter((i) => i.__selected);
	let indeterminateSelected = false;

	let selectedAll = false;

	function selectAll() {
		//console.log(selectedAll);
		currentRows.forEach((data, i) => {
			currentRows[i].__selected = selectedAll;
			//console.log(currentRows[i]);
		});
	}

	function gotoPage(page: number) {
		console.log('PAGE', page);
		if (dtSource !== null) {
			loading = true;
			dtSource.gotoPage(filters, page);
			loadUp();
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
				//console.log(currentRows[i].__selected);
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

	onMount(() => {
		dtSource.loadCurrentPage(filters);
	});
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
<!--{JSON.stringify(pagination)}-->
{#if pagination}
	{#if pagination.prevPage > 0}
		<button class="m-4 bg-green-400 p-4" on:click={gotoPage(pagination.prevPage)}>Prev</button>
	{/if}
	{#if pagination.nextPage > 0}
		<button class="m-4 bg-green-400 p-4" on:click={gotoPage(pagination.nextPage)}>Next</button>
	{/if}
{/if}
