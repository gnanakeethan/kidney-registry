<script lang="ts">
	import { GraphQLQueryRepository } from '$lib/api/query-repository';
	import { DataSourceConnector } from '$lib/api/table-datasource';
	import Table from '$lib/components/table/Table.svelte';
	import { recipientId } from '$lib/state/recipient';
	import { ListPersonOrganDonationDocument, Person } from '../../../../../lib/graphql/generated';

	interface User {
		name: string;
		ID: string;
	}

	let filters = {
		ID: $recipientId,
		filter: {
			ID: $recipientId
			// PersonType: { comparison: 'EQUAL', value: 'RECIPIENT' }
		},
		orderBy: ['desc'],
		sortBy: ['CreatedAt']
	};
	const queryRepository = new GraphQLQueryRepository<Person>();
	let dataSource = new DataSourceConnector<Person>(
		queryRepository,
		ListPersonOrganDonationDocument
	);
	let loading = true;
	dataSource.loadCurrentPage({}).then((data) => {
		console.log(data);
		loading = false;
	});

	let columns = [
		{ key: 'Donor.ID', name: 'ID' },
		{ key: 'Donor.FirstName', name: 'First Name' },
		{ key: 'Donor.LastName', name: 'Last Name' },
		{ key: 'Donor.Phn', name: 'Phn' },
		{ key: 'CreatedAt', name: 'Created Date' }
	];
	let displayedColumns = ['ID', 'Phn', 'Address', 'FirstName', 'LastName', 'CreatedAt'];
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
		rootAccessPath="data.listPersonOrganDonations.items"
	>
		<svelte:fragment let:element={Patient} slot="actions">
			<a href="/patient/view/{Patient.Donor.ID}/history">View Patient</a>
		</svelte:fragment>
	</Table>
</div>
