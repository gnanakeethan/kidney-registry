<script lang='ts'>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

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
	export let limit = 10;
	$: filters = { orderBy: ['desc'], sortBy: ['CreatedAt'], limit: limit };

	let columns = [
		{ key: 'node.CreatedAt', name: 'Recorded On' },
		{ key: 'node.CaseStatus', name: 'CaseStatus' },
		{ key: 'node.Referrals', name: 'Referrals' },
		{ key: 'node.Person.Phn', name: 'PHN' },
		{ key: 'node.Person.FirstName', name: 'First Name' },
		{ key: 'node.ConsultantOpinion', name: 'Consultant Opinion' }
	];
	let displayedColumns = [
		'node.CreatedAt',
		'node.CaseStatus',
		'node.Referrals',
		'node.Person.Phn',
		'node.Person.FirstName',
		'node.ConsultantOpinion',
		'node.UpdatedAt'
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
		rootAccessPath='data.listAllPersonFollowUps.items'
	>
		<svelte:fragment let:element={Patient} slot='actions'>
			<a href='/patients-recipient/view/{Patient.ID}'>View Patient</a>
		</svelte:fragment>
	</Table>
</div>
