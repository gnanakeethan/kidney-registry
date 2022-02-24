<script lang="ts">
	import { GraphQLQueryRepository } from '$lib/api/query-repository';
	import { DataSourceConnector } from '$lib/api/table-datasource';
	import Table from '$lib/components/table/Table.svelte';
	import {
		ListAllPersonExaminationDocument,
		ListAllPersonExaminationQuery,
		PersonExaminationList
	} from '../../lib/graphql/generated';

	interface User {
		name: string;
		ID: string;
	}

	const queryRepository = new GraphQLQueryRepository<ListAllPersonExaminationQuery>();
	let dataSource = new DataSourceConnector<PersonExaminationList>(
		queryRepository,
		ListAllPersonExaminationDocument
	);
	let loading = true;
	$: filters = { orderBy: ['desc'], sortBy: ['CreatedAt'] };

	let columns = [
		{ key: 'CreatedAt', name: 'Recorded On' },
		{ key: 'Details.Name', name: 'Examination Name' },
		{ key: 'Person.FirstName', name: 'Patient First Name' },
		{ key: 'Person.LastName', name: 'Patient Last Name' },
		{ key: 'ID', name: 'Examination Name' }
	];
	let displayedColumns = ['CreatedAt', 'Details.Name', 'Person.FirstName', 'Person.LastName'];
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
		rootAccessPath="data.listAllPersonExaminations.items"
	>
		<svelte:fragment let:element={examination} slot="actions">
			<a href="/patients/view/{examination.Person.ID}/examinations/{examination.ID}">View</a>
		</svelte:fragment>
	</Table>
</div>
