<script lang="ts">
	import { GraphQLQueryRepository } from '$lib/api/query-repository';
	import { DataSourceConnector } from '$lib/api/table-datasource';
	import Table from '$lib/components/table/Table.svelte';
	import { recipientId } from '$lib/state/recipient';
	import {
		ListPersonFollowUpDocument,
		ListPersonFollowUpQuery,
		PersonFollowUpList
	} from '../../../../../lib/graphql/generated';

	interface User {
		name: string;
		ID: string;
	}

	const queryRepository = new GraphQLQueryRepository<ListPersonFollowUpQuery>();
	let dataSource = new DataSourceConnector<PersonFollowUpList>(
		queryRepository,
		ListPersonFollowUpDocument
	);
	let loading = true;
	$: filters = { ID: $recipientId, orderBy: ['desc'], sortBy: ['CreatedAt'] };

	let columns = [
		{ key: 'node.CreatedAt', name: 'Recorded On' },
		{ key: 'node.CaseStatus', name: 'CaseStatus' },
		{ key: 'node.Referrals', name: 'Referrals' },
		{ key: 'node.ConsultantOpinion', name: 'Consultant Opinion' }
	];
	let displayedColumns = [
		'node.CreatedAt',
		'node.CaseStatus',
		'node.Referrals',
		'node.ConsultantOpinion',
		'node.UpdatedAt'
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
		rootAccessPath="data.listPersonFollowUps.items"
	>
		<svelte:fragment let:element={Patient} slot="actions">
			<!--			<a href="/patients-recipient/view/{Patient.ID}">View Patient</a>-->
		</svelte:fragment>
	</Table>
</div>
