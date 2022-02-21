<script lang="ts">
	import { GraphQLQueryRepository } from '$lib/api/query-repository';
	import { DataSourceConnector } from '$lib/api/table-datasource';
	import Table from '$lib/components/table/Table.svelte';
	import {
		ListPatientsDocument,
		Person,
		PersonMedicalHistoryList
	} from '../../../../../lib/graphql/generated';

	interface User {
		name: string;
		ID: string;
	}

	const queryRepository = new GraphQLQueryRepository<PersonMedicalHistoryList>();
	let dataSource = new DataSourceConnector<Person>(queryRepository, ListPatientsDocument);
	let loading = true;
	dataSource.loadCurrentPage().then((data) => {
		console.log(data);
		loading = false;
	});

	let columns = [
		// { key: 'ID', name: 'ID' },
		{ key: 'FirstName', name: 'First Name' },
		{ key: 'LastName', name: 'Last Name' },
		{ key: 'Phn', name: 'Phn' }
	];
	let displayedColumns = ['Phn', 'Address', 'FirstName', 'LastName'];
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
		rootAccessPath="data.listPatients.persons"
	>
		<svelte:fragment let:element={Patient} slot="actions">
			<a href="/patients/view/{Patient.ID}">View Patient</a>
		</svelte:fragment>
	</Table>
</div>
