<script lang="ts">
	import { GraphQLQueryRepository } from '$lib/api/query-repository';
	import { DataSourceConnector } from '$lib/api/table-datasource';
	import Table from '$lib/components/table/Table.svelte';
	import {
		ListAllPersonFollowUpDocument,
		ListAllPersonFollowUpQuery,
		PersonFollowUpList
	} from '../../lib/graphql/generated';

	interface User {
		name: string;
		ID: string;
	}

	const queryRepository = new GraphQLQueryRepository<ListAllPersonFollowUpQuery>();
	let dataSource = new DataSourceConnector<PersonFollowUpList>(
		queryRepository,
		ListAllPersonFollowUpDocument
	);
	let loading = true;
	$: filters = { orderBy: ['desc'], sortBy: ['CreatedAt'] };

	let columns = [
		{ key: 'CreatedAt', name: 'Recorded On' },
		{ key: 'CaseStatus', name: 'CaseStatus' },
		{ key: 'Referrals', name: 'Referrals' },
		{ key: 'ConsultantOpinion', name: 'Consultant Opinion' }
	];
	let displayedColumns = ['CreatedAt', 'CaseStatus', 'Referrals', 'ConsultantOpinion', 'UpdatedAt'];
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
		rootAccessPath="data.listAllPersonFollowUps.items"
	>
		<!--		<svelte:fragment let:element={Patient} slot="actions">-->
		<!--			<a href="/patients/view/{Patient.ID}">View Patient</a>-->
		<!--		</svelte:fragment>-->
	</Table>
</div>
