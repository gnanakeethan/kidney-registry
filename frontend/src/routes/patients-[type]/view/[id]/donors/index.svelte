<script lang="ts">
	import { goto } from '$app/navigation';

	import { GraphQLQueryRepository } from '$lib/api/query-repository';
	import { DataSourceConnector } from '$lib/api/table-datasource';
	import Table from '$lib/components/table/Table.svelte';
	import {
		donorSet,
		lastRecipient,
		lastRecipientId,
		recipient,
		recipientId
	} from '$lib/state/recipient';
	import { ListPersonOrganDonationDocument, Person } from '../../../../../lib/graphql/generated';

	interface User {
		name: string;
		ID: string;
	}

	let filters = {
		ID: $recipientId,
		filter: {
			// PersonType: { comparison: 'EQUAL', value: 'RECIPIENT' }
		},
		orderBy: ['desc'],
		sortBy: ['CreatedAt']
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
		{ key: 'Donor.ID', name: 'ID' },
		{ key: 'Donor.FirstName', name: 'First Name' },
		{ key: 'Donor.LastName', name: 'Last Name' },
		{ key: 'Donor.Phn', name: 'Phn' },
		{ key: 'CreatedAt', name: 'Created Date' }
	];
	let displayedColumns = [
		// 'Donor.ID',
		'Donor.FirstName',
		'Donor.LastName',
		'Donor.Phn'
	];
	let element: User;
	let selectedRows = [];
	$: console.log(selectedRows);

	function openDonor(donorId) {
		lastRecipientId.set($recipientId);
		lastRecipient.set($recipient);
		recipientId.set(donorId);
		donorSet.set(true);
		console.log(donorSet);
		console.log($lastRecipientId);
		console.log($lastRecipient);
		goto('/patients-donor/view/' + donorId + '/history/');
	}
</script>

<div class="p-2 p-4">
	<Table
		bind:dtSource={dataSource}
		bind:loading
		bind:selectedRows
		{columns}
		{displayedColumns}
		{filters}
		rootAccessPath="data.listPersonOrganDonations.items"
	>
		<svelte:fragment let:element={Patient} slot="actions">
			<a on:click={() => openDonor(Patient.Donor.ID)}>View Donor</a>
		</svelte:fragment>
	</Table>
</div>
