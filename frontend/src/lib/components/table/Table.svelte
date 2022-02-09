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
</script>

<table class="w-full border-collapse">
	<thead>
		<tr>
			{#each activeColumns as i}
				<th class="border border-neutral-600 bg-zinc-200/75 p-2">{i.name}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#if dtSource != null}
			{#if $currentRowsSubscription.fetching}
				<p>Loading...</p>
			{:else if $currentRowsSubscription.error}
				<p>Oh no... {$currentRowsSubscription.error.message}</p>
			{:else}
				{#each currentRows as todo}
					<tr>
						{#each activeColumns as i}
							<th class="border border-neutral-600 bg-zinc-200/75 p-2">{todo[i.key]}</th>
						{/each}
					</tr>
				{/each}
			{/if}
		{/if}
	</tbody>
</table>
