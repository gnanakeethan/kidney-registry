<script lang='ts'>
	import { GraphQLQueryRepository } from '$lib/api/query-repository';
	import { DataSourceConnector } from '$lib/api/table-datasource';
	import Table from '$lib/components/table/Table.svelte';
	import { recipientId } from '$lib/state/recipient';
	import {
		ListPersonInvestigationDocument,
		ListPersonInvestigationQuery,
		PersonInvestigationList
	} from '../../../../../lib/graphql/generated';
	import New from './new.svelte';

	interface User {
		name: string;
		ID: string;
	}

	const queryRepository = new GraphQLQueryRepository<ListPersonInvestigationQuery>();
	let dataSource = new DataSourceConnector<PersonInvestigationList>(
		queryRepository,
		ListPersonInvestigationDocument
	);
	let loading = true;
	let filters = { ID: $recipientId, orderBy: ['desc'], sortBy: ['CreatedAt'] };

	let columns = [
		{ key: 'node.Details.Name', name: 'Investigation Name' },
		{ key: 'node.CreatedAt', name: 'Recorded On' },
		{ key: 'node.Results.Hb', name: 'HB' },
		{ key: 'node.Results.Total Cholesterol ', name: 'Total Cl' },
	];
	let displayedColumns = ['node.CreatedAt', 'node.Results.Hb', 'node.Details.Name','node.Results.Total Cholesterol '];
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
		rootAccessPath='data.listPersonInvestigations.items'
	>
		<svelte:fragment let:element={investigation} slot='actions'>
			<a href='/patients-recipient/view/{$recipientId}/investigations/{investigation.node.ID}'>View</a>
		</svelte:fragment>
	</Table>
	<div class='relativex bottom-0 bg-white'>
		<New></New>
	</div>
</div>
