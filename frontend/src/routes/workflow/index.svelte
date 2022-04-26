<script lang='ts'>
	import { GraphQLQueryRepository } from '../../lib/api/query-repository';
	import { DataSourceConnector } from '../../lib/api/table-datasource';
	import Table from '../../lib/components/table/Table.svelte';
	import { ListWorkflowsDocument, Workflow } from '../../lib/graphql/generated';
	import { authState } from '../../lib/state/auth';

	interface User {
		name: string;
		ID: string;
	}

	let filters = {};
	authState.subscribe((authStateS) => {
		console.log(authStateS);
		if (authStateS.user === undefined || authStateS.user === null) {
			return;
		}
		filters = {
			filter: {
				User: { id: { comparison: 'EQUAL', value: authStateS.user.ID } }
			}
		};
	});
	const queryRepository = new GraphQLQueryRepository<Workflow>();
	let dataSource = new DataSourceConnector<Workflow>(queryRepository, ListWorkflowsDocument);
	let loading = true;
	dataSource.loadCurrentPage({}).then((data) => {
		console.log(data);
		loading = false;
	});

	let columns = [
		{ key: 'node.Name', name: 'Name' }
	];
	let displayedColumns = [
		'node.Name'
	];
	let element: Workflow;
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
		rootAccessPath='data.listWorkflows.items'
	>
		<svelte:fragment let:element={workflow} slot='actions'>
			{workflow.node.id}
			<!--			<a href='/patients-recipient/view/{Patient.node.ID}/overview'>View Patient</a>-->
		</svelte:fragment>
	</Table>
</div>
