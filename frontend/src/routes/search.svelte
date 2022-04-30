<script lang='ts'>
	import Field from '$lib/components/form-builder/Components/Field.svelte';
	import { ComparisonType, ListPatientsDocument, ListPatientsQuery, PersonFilter } from '$lib/graphql/generated';
	import { NotificationsStatus } from '$lib/state/notifications';
	import { operationStore, query } from '@urql/svelte';

	let showFilter = false;
	let showModal = false;
	$: $NotificationsStatus.notificationsActive = $NotificationsStatus.notificationCounter > 0;
	$: $NotificationsStatus.messagesActive = $NotificationsStatus.messages > 0;
	let filter: PersonFilter = {
		PersonType: { comparison: ComparisonType.Equal, value: 'RECIPIENT' }
	};
	$: patients = operationStore(ListPatientsDocument, {
		filter: filter,
		orderBy: ['desc'],
		sortBy: ['CreatedAt']
	});
	$: query<ListPatientsQuery>(patients);

	const fields = [
		{
			type: 'select', // required
			name: 'Status', //required
			attributes: {
				id: 'Status', // required
				classes: ['form-input rounded m-2	'], // optional
				label: 'Patient Status', // optional
				disabled: false // optional
			},
			extra: {
				options: [
					{ value: '', title: '' },
					{ value: 'ACTIVE', title: 'Active' },
					{ value: 'INACTIVE', title: 'Inactive' },
					{ value: 'NA', title: 'N/A' },
					{ value: 'WORKING_UP', title: 'Working Up' },
					{ value: 'SUSPENDED', title: 'Suspended' },
					{ value: 'PERMANENTLY_UNFIT', title: 'Permanently Unfit' },
					{
						value: 'DECEASED_WILL_AWAITING_TRANSPLANT',
						title: 'Deceased Will Awaiting Transplant'
					},
					{
						value: 'DECEASED_POST_CADAVERIC_TRANSPLANT',
						title: 'Deceased Post Cadaveric Transplant'
					},
					{ value: 'RECEIVED_LIVE_TRANSPLANT', title: 'Received Live Transplant' },
					{ value: 'CADAVERIC_DONOR', title: 'Cadaveric Donor' },
					{ value: 'LIVE_DONOR', title: 'Live Donor' }
				]
			}, // optional
			rules: [] // optional
		},
		{
			type: 'input',
			name: 'Phn',
			value: '',
			prefix: {
				classes: ['m-2']
			},
			attributes: {
				type: 'text',
				label: 'PHN',
				id: 'phn',
				classes: ['form-input rounded w-full']
			}
		},
		{
			type: 'input',
			name: 'FirstName',
			value: '',
			prefix: {
				classes: ['m-2']
			},
			attributes: {
				type: 'text',
				label: 'First Name',
				id: 'firstname',
				classes: ['form-input rounded w-full min-w-100vw'],
				placeholder: 'Patient\'s First Name'
			}
		}
	];
	let values = {};
	let isValidForm = true;
	$: if (values != {}) {
		console.log(values);
		if (values.Status !== undefined && values.Status !== null && values.Status !== '') {
			filter.Status = { comparison: ComparisonType.Equal, value: values.Status };
			// filter.Status.value = values.Status;
		} else if (values.Status !== undefined || values.Status !== null || values.Status === '') {
			delete filter.Status;
			console.log(filter);
			filter = filter;
		}
		if (values.Phn !== undefined && values.Phn !== null && values.Phn !== '') {
			filter.Phn = { comparison: ComparisonType.StartsWith, value: values.Phn };
		} else if (values.Phn !== undefined || values.Phn === '' || values.Phn === null) {
			delete filter.Phn;
			filter = filter;
		}
		if (values.FirstName !== undefined && values.FirstName !== null && values.FirstName !== '') {
			filter.FirstName = { comparison: ComparisonType.StartsWith, value: values.FirstName };
		} else if (
			values.FirstName !== undefined ||
			values.FirstName === '' ||
			values.FirstName === null
		) {
			delete filter.FirstName;
			filter = filter;
		}
	}

	function getColor(Status: string) {
		let topbarColor = '';
		switch (Status) {
			case 'ACTIVE': {
				topbarColor = 'bg-blue-200';
				break;
			}
			case 'INACTIVE': {
				topbarColor = 'bg-gray-200/75';
				break;
			}
			case 'NA': {
				break;
			}
			case 'WORKING_UP': {
				topbarColor = 'bg-green-200';
				break;
			}
			case 'SUSPENDED': {
				topbarColor = 'bg-red-200';

				break;
			}
			case 'PERMANENTLY_UNFIT': {
				topbarColor = 'bg-red-900/10';
				break;
			}
			case 'DECEASED_WILL_AWAITING_TRANSPLANT': {
				topbarColor = 'bg-indigo-300/50';
				break;
			}
			case 'DECEASED_POST_CADAVERIC_TRANSPLANT': {
				topbarColor = 'bg-indigo-300';
				break;
			}
			case 'RECEIVED_LIVE_TRANSPLANT': {
				topbarColor = 'bg-yellow-200';
				break;
			}
			case 'RECEIVED_CADAVERIC_TRANSPLANT': {
				topbarColor = 'bg-yellow-300/50';
				break;
			}
			case 'CADAVERIC_DONOR': {
				break;
			}
			case 'LIVE_DONOR': {
				break;
			}
		}
		return topbarColor;
	}
</script>

<div class='col-span-6 row-span-2 m-4 rounded'>
	<Field
		bind:isValidForm
		bind:values
		inline={true}
		{fields} />
	{#if $patients.fetching}
		<p>Loading...</p>
	{:else if $patients.error}
		<p>Oh no... {$patients.error.message}</p>
	{:else if $patients.data.listPatients.items !== null && $patients.data.listPatients.items.length > 0}
		<div class='flex flex-wrap p-2'>
			{#each $patients.data.listPatients.items as patient}
				<div class='flex flex-col m-2 {getColor(patient.Status)} p-2 rounded border border-black'>
					<span>Name: {patient.node.FirstName} {patient.node.LastName}</span>
					<span>PHN: {patient.node.Phn}</span>
					<span>Age: {patient.node.Age}</span>
					<span>Gender: {patient.node.Gender}</span>
					<span>BloodGroup: {patient.node.BloodGroup ?? ''}</span>
					<span>Status: {patient.node.Status}</span>
					<a
						class='bg-green-400 text-white rounded py-2 px-4 m-2'
						href='/patients-recipient/view/{patient.node.ID}'
					>
						View Patient
					</a>
				</div>
			{/each}
		</div>
	{:else}
		No Records
	{/if}
	<a class='py- bg-green-400 px-4' href='/patients-recipient/new'>New Patient</a>
	<!--	Messages : <input-->
	<!--		bind:value={$NotificationsStatus.messages}-->
	<!--		max="100"-->
	<!--		min="0"-->
	<!--		step="1"-->
	<!--		type="number"-->
	<!--	/><br />-->
	<!--	Notifications:-->
	<!--	<input-->
	<!--		bind:value={$NotificationsStatus.notificationCounter}-->
	<!--		max="100"-->
	<!--		min="0"-->
	<!--		step="1"-->
	<!--		type="number"-->
	<!--	/>-->
</div>
