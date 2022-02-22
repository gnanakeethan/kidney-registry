<script lang="ts">
	import { GraphQLQueryRepository } from '$lib/api/query-repository';
	import { DataSourceConnector } from '$lib/api/table-datasource';
	import Table from '$lib/components/table/Table.svelte';
	import { recipientId } from '$lib/state/recipient';
	import {
		ListPersonMedicalHistoryDocument,
		ListPersonMedicalHistoryQuery,
		PersonMedicalHistoryList
	} from '../../../../../lib/graphql/generated';

	interface User {
		name: string;
		ID: string;
	}

	const queryRepository = new GraphQLQueryRepository<ListPersonMedicalHistoryQuery>();
	let dataSource = new DataSourceConnector<PersonMedicalHistoryList>(
		queryRepository,
		ListPersonMedicalHistoryDocument
	);
	let loading = true;
	$: filters = { ID: $recipientId, orderBy: ['desc', 'desc'], sortBy: ['StartDate', 'CreatedAt'] };

	let columns = [
		{ key: 'CreatedAt', name: 'Recorded On' },
		{ key: 'StartDate', name: 'Occurance Date (if any)' },
		{ key: 'ID', name: 'ID' },
		{ key: 'Type', name: 'Type' },
		{ key: 'Reason', name: 'Reason' },
		{ key: 'Description', name: 'Description' }
		// { key: 'UpdatedAt', name: 'Updated On' }
		// { key: 'FirstName', name: 'First Name' },
		// { key: 'LastName', name: 'Last Name' },
		// { key: 'Phn', name: 'Phn' }
	];
	let displayedColumns = [
		// 'ID',
		'StartDate',
		'Type',
		'Reason',
		'Description',
		'CreatedAt',
		'UpdatedAt'
	];
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
		rootAccessPath="data.listPersonMedicalHistories.histories"
	>
		<svelte:fragment let:element={Patient} slot="actions">
			<!--			<a href="/patients/view/{Patient.ID}">View Patient</a>-->
		</svelte:fragment>
	</Table>
</div>
