<script lang="ts">
	import { GraphQLQueryRepository } from '$lib/api/query-repository';
	import { DataSourceConnector } from '$lib/api/table-datasource';
	import Table from '$lib/components/table/Table.svelte';
	import { recipientId } from '$lib/state/recipient';
	import {
		ListPersonWorkupDocument,
		ListPersonWorkupQuery,
		PersonWorkupList
	} from '../../../../../lib/graphql/generated';

	interface User {
		name: string;
		ID: string;
	}

	const queryRepository = new GraphQLQueryRepository<ListPersonWorkupQuery>();
	let dataSource = new DataSourceConnector<PersonWorkupList>(
		queryRepository,
		ListPersonWorkupDocument
	);
	let loading = true;
	$: filters = { ID: $recipientId, orderBy: ['desc'], sortBy: ['CreatedAt'] };

	let columns = [
		{ key: 'CreatedAt', name: 'Recorded On' },
		{ key: 'Details.Name', name: 'Workup Name' },
		{ key: 'ID', name: 'Workup Name' }
	];
	let displayedColumns = ['CreatedAt', 'Details.Name'];
	let element: User;
	let selectedRows = [];
	$: console.log(selectedRows);
</script>

<div class="p-2 p-4">
	<Table
		bind:dtSource={dataSource}
		bind:loading
		bind:selectedRows
		{columns}
		{displayedColumns}
		{filters}
		rootAccessPath="data.listPersonWorkups.items"
	>
		<svelte:fragment let:element={workup} slot="actions">
			<a href="/patients/view/{$recipientId}/workups/{workup.ID}">View</a>
		</svelte:fragment>
	</Table>
</div>
