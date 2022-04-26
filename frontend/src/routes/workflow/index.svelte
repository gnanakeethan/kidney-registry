<script lang='ts'>
	import { GraphQLQueryRepository } from '../../lib/api/query-repository';
	import { DataSourceConnector } from '../../lib/api/table-datasource';
	import Table from '../../lib/components/table/Table.svelte';
	import { ListPatientsDocument, Person } from '../../lib/graphql/generated';

	interface User {
		name: string;
		ID: string;
	}

	let filters = {
		filter: {
			PersonType: { comparison: 'EQUAL', value: 'RECIPIENT' }
		},
		orderBy: ['desc'],
		sortBy: ['CreatedAt']
	};
	const queryRepository = new GraphQLQueryRepository<Person>();
	let dataSource = new DataSourceConnector<Person>(queryRepository, ListPatientsDocument);
	let loading = true;
	dataSource.loadCurrentPage({}).then((data) => {
		console.log(data);
		loading = false;
	});

	let columns = [
		{ key: 'node.FirstName', name: 'First Name' },
		{ key: 'node.LastName', name: 'Last Name' },
		{ key: 'node.Phn', name: 'Phn' },
		{ key: 'node.Status', name: 'Status' },
		{ key: 'node.CreatedAt', name: 'Created Date' }
	];
	let displayedColumns = [
		'node.Phn',
		'node.Address',
		'node.FirstName',
		'node.LastName',
		'node.CreatedAt',
		'node.Status'
	];
	let element: User;
	let selectedRows = [];
	$: console.log(selectedRows);
</script>

<div class='p-2 p-4'>
	<Table
		bind:dtSource={dataSource}
		bind:loading
		bind:selectedRows
		{columns}
		{displayedColumns}
		{filters}
		rootAccessPath='data.listPatients.items'
	>
		<svelte:fragment let:element={Patient} slot='actions'>
			<a href='/patients-recipient/view/{Patient.node.ID}/overview'>View Patient</a>
		</svelte:fragment>
	</Table>
</div>
