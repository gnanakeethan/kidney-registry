<script lang='ts'>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

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
	export let limit = 10;
	$: filters = { orderBy: ['desc'], sortBy: ['CreatedAt'], limit: limit };

	let columns = [
		{ key: 'node.CreatedAt', name: 'Recorded On' },
		{ key: 'node.Details.Name', name: 'Examination Name' },
		{ key: 'node.Person.FirstName', name: 'Patient First Name' },
		{ key: 'node.Person.LastName', name: 'Patient Last Name' },
		{ key: 'node.ID', name: 'Examination Name' }
	];
	let displayedColumns = [
		'node.CreatedAt',
		'node.Details.Name',
		'node.Person.FirstName',
		'node.Person.LastName'
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
		rootAccessPath='data.listAllPersonExaminations.items'
	>
		<svelte:fragment let:element={examination} slot='actions'>
			<a href='/patients-recipient/view/{examination.node.Person.ID}/examinations/{examination.ID}'
			>View</a
			>
		</svelte:fragment>
	</Table>
</div>
