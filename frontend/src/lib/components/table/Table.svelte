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
				<div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4 shadow">
					<div class="flex animate-pulse space-x-4">
						<div class="h-10 w-10 rounded-full bg-slate-200" />
						<div class="flex-1 space-y-6 py-1">
							<div class="h-2 rounded bg-slate-200" />
							<div class="space-y-3">
								<div class="grid grid-cols-3 gap-4">
									<div class="col-span-2 h-2 rounded bg-slate-200" />
									<div class="col-span-1 h-2 rounded bg-slate-200" />
								</div>
								<div class="h-2 rounded bg-slate-200" />
							</div>
						</div>
					</div>
				</div>
				{#each { length: 4 } as _, i}
					<tr class="animate-pulse">
						{#each activeColumns as i}
							<td class="p-2">
								<span class="h-2 w-full bg-neutral-400">&nbsp;</span>
							</td>
						{/each}
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
							<td class="border border-neutral-600 bg-zinc-200/75 p-2">
								<slot name="actions" {element} />
							</td>
						{/each}
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
