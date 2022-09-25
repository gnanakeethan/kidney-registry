<script lang='ts'>
	import { goto } from '$app/navigation';

	import { GraphQLQueryRepository } from '$lib/api/query-repository';
	import { DataSourceConnector } from '$lib/api/table-datasource';
	import Table from '$lib/components/table/Table.svelte';
	import { donorSet, lastRecipient, lastRecipientId, recipient, recipientId } from '$lib/state/recipient';
	import { ListPersonOrganDonationDocument, Person } from '../../../../../lib/graphql/generated';

	interface User {
		name: string;
		ID: string;
	}

	let filters = {
		filter: {
			// PersonType: { comparison: 'EQUAL', value: 'RECIPIENT' }
		},
		orderBy: ['desc'],
		sortBy: ['CreatedAt'],
		ID: $recipientId
	};
	const queryRepository = new GraphQLQueryRepository<Person>();
	let dataSource = new DataSourceConnector<Person>(
		queryRepository,
		ListPersonOrganDonationDocument
	);
	let loading = true;
	dataSource.loadCurrentPage({}).then((data) => {
		console.log(data);
		loading = false;
	});

	let columns = [
		{ key: 'node.Donor.ID', name: 'ID' },
		{ key: 'node.Donor.FirstName', name: 'First Name' },
		{ key: 'node.Donor.LastName', name: 'Last Name' },
		{ key: 'node.Donor.Phn', name: 'Phn' },
		{ key: 'node.CreatedAt', name: 'Created Date' }
	];
	let displayedColumns = [
		// 'Donor.ID',
		'node.Donor.FirstName',
		'node.Donor.LastName',
		'node.Donor.Phn'
	];
	let element: User;
	let selectedRows = [];
	$: console.log(selectedRows);

	function openDonor(donorId) {
		console.log('DONOR ID', donorId);
		lastRecipientId.set($recipientId);
		lastRecipient.set($recipient);
		recipientId.set(donorId);
		donorSet.set(true);
		console.log(donorSet);
		console.log($lastRecipientId);
		console.log($lastRecipient);
		goto('/patients-donor/view/' + donorId + '/overview/');
	}
</script>

<div class='p-2 p-4'>
	<Table
		bind:dtSource={dataSource}
		bind:loading
		bind:selectedRows
		{columns}
		{displayedColumns}
		{filters}
		rootAccessPath='data.listPersonOrganDonations.items'
	>
		<svelte:fragment let:element={Patient} slot='actions'>
			
			<a on:click={() => openDonor(Patient.node.Donor.ID)}>View Donor</a>
		</svelte:fragment>
	</Table>
</div>
