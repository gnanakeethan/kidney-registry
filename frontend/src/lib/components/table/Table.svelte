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

	$: currentRowsSubscription = dtSource.currentRows;
	$: if (!$currentRowsSubscription.fetching && !$currentRowsSubscription.error) {
		let accessPath = rootAccessPath.split('.');
		let data = $currentRowsSubscription;
		console.log($currentRowsSubscription);
		console.log(accessPath);
		for (let i = 0; i < accessPath.length; i++) {
			data = data[accessPath[i]];
			console.log(data);
			currentRows = data;
		}
	}
	$: activeColumns = columns.filter((i) => {
		return displayedColumns.includes(i.key);
	});
	$: console.log(activeColumns);

	function nextPage() {
		console.log(dtSource);
		if (dtSource !== null) {
			dtSource.goToNextPage();
		}
	}
</script>

<table class="w-full border-collapse">
	<thead>
		<tr>
			<th class="border border-neutral-600 bg-zinc-200/75 p-2">
				<input type="checkbox" />
			</th>
			{#each activeColumns as i}
				<th class="border border-neutral-600 bg-zinc-200/75 p-2">{i.name}</th>
			{/each}
			<th class="border border-neutral-600 bg-zinc-200/75 p-2">actions</th>
		</tr>
	</thead>
	<tbody>
		{#if dtSource != null}
			{#if $currentRowsSubscription.fetching}
				{#each { length: 4 } as _, i}
					<tr class="animate-pulse">
						<td class="border border-neutral-600 bg-zinc-200/75 p-2">
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
			{:else if $currentRowsSubscription.error}
				<p>Oh no... {$currentRowsSubscription.error.message}</p>
			{:else}
				{#each currentRows as element}
					<tr>
						<td class="border border-neutral-600 bg-zinc-200/75 p-2 text-center">
							<input type="checkbox" />
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
		{:else}
			<tr>
				{#each activeColumns as i}
					<td>&nbsp;</td>
				{/each}
			</tr>
		{/if}
	</tbody>
</table>
<button on:click={nextPage}>Next</button>
