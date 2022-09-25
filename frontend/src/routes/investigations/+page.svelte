<script lang='ts'>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import { GraphQLQueryRepository } from '$lib/api/query-repository';
	import { DataSourceConnector } from '$lib/api/table-datasource';
	import Table from '$lib/components/table/Table.svelte';
	import { recipientId } from '$lib/state/recipient';
	import {
		ListAllPersonInvestigationDocument,
		ListAllPersonInvestigationQuery,
		PersonInvestigationList
	} from '../../lib/graphql/generated';

	interface User {
		name: string;
		ID: string;
	}

	const queryRepository = new GraphQLQueryRepository<ListAllPersonInvestigationQuery>();
	let dataSource = new DataSourceConnector<PersonInvestigationList>(
		queryRepository,
		ListAllPersonInvestigationDocument
	);
	let loading = true;
	export let limit = 10;

	let filters = { ID: $recipientId, orderBy: ['desc'], sortBy: ['CreatedAt'], limit };

	let columns = [
		{ key: 'node.CreatedAt', name: 'Recorded On' },
		{ key: 'node.Details.Name', name: 'Investigation Name' },
		{ key: 'node.Person.Phn', name: 'PHN' },
		{ key: 'node.Person.FirstName', name: 'First Name' },
		{ key: 'node.ID', name: 'Investigation Name' }
	];
	let displayedColumns = [
		'node.CreatedAt',
		'node.Person.Phn',
		'node.Person.FirstName',
		'node.Details.Name'
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
		rootAccessPath='data.listAllPersonInvestigations.items'
	>
		<svelte:fragment let:element={investigation} slot='actions'>
			<a href='/patients-recipient/view/{investigation.node.Person.ID}/investigations/{investigation.node.ID}'
			>View</a
			>
		</svelte:fragment>
	</Table>
</div>
