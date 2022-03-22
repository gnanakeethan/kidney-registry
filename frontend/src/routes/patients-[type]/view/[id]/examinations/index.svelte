<script lang="ts">
	import { GraphQLQueryRepository } from '$lib/api/query-repository';
	import { DataSourceConnector } from '$lib/api/table-datasource';
	import Table from '$lib/components/table/Table.svelte';
	import { recipientId } from '$lib/state/recipient';
	import {
		ListPersonExaminationDocument,
		ListPersonExaminationQuery,
		PersonExaminationList
	} from '../../../../../lib/graphql/generated';

	interface User {
		name: string;
		ID: string;
	}

	const queryRepository = new GraphQLQueryRepository<ListPersonExaminationQuery>();
	let dataSource = new DataSourceConnector<PersonExaminationList>(
		queryRepository,
		ListPersonExaminationDocument
	);
	let loading = true;
	$: filters = { ID: $recipientId, orderBy: ['desc'], sortBy: ['CreatedAt'] };

	let columns = [
		{ key: 'node.CreatedAt', name: 'Recorded On' },
		{ key: 'node.Details.Name', name: 'Examination Name' },
		{ key: 'node.ID', name: 'Examination Name' }
	];
	let displayedColumns = ['node.CreatedAt', 'node.Details.Name'];
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
		rootAccessPath="data.listPersonExaminations.items"
	>
		<svelte:fragment let:element={examination} slot="actions">
			<a
				href="/patients-recipient/view/{examination.node.Person.ID}/examinations/{examination.node
					.ID}">View</a
			>
		</svelte:fragment>
	</Table>
</div>
