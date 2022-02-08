<script lang="ts">
	import { DataSource } from 'lib/api/datasource';

	// ts:ignore
	type T = $$Generic; //MAGIC TYPE FROM Svelte for generics

	interface $$Slots {
		default: {
			// slot name
			item: T;
			index: number;
		};
	}

	export let columns = [
		{ key: 'id', name: 'ID' },
		{ key: 'name', name: 'Name' },
		{ key: 'address', name: 'Address' }
	];

	export let displayedColumns = ['id', 'name', 'address'];
	export let dtSource: DataSource<T> = null;
	export let currentPage = 1;
	export let totalPages: number;
	export let perPage = 15;
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
		{#each dtSource.currentRows as item}
			<tr>
				{#each columns.filter((i) => {
					return i.key in displayedColumns;
				}) as i}
					<td class="border border-neutral-500 py-2 pl-1"> {item[i.key]}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
