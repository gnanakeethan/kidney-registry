<!--</script>-->
<script lang="ts">
	import { beforeNavigate, goto } from '$app/navigation';
	import Field from '$lib/components/form-builder/Components/Field.svelte';
	import { FormValues } from '$lib/components/form-builder/lib/stores';
	import { activeUrl } from '$lib/state/SidebarStore';
	import { mutation } from '@urql/svelte';
	// import { Person } from 'lib/graphql/generated';
	import {
		UpdatePatientDocument,
		UpdatePatientMutation
	} from '../../../../../lib/graphql/generated';

	import { recipient } from '../../../../../lib/state/recipient';

	async function awaitRecipient() {
		while ($recipient.ID === undefined || $recipient.ID === '') {
			await sleep(10);
		}
		loadFields();
		formSet = true;
		return;
	}

	async function sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	const updatePatient = mutation<UpdatePatientMutation>({
		query: UpdatePatientDocument
	});
	let fields = [];

	function loadFields() {
		values = $recipient;
		fields = [
			{
				type: 'input',
				name: 'ID',
				value: $recipient.ID,
				prefix: {
					classes: ['flex flex-col items-center justify-between w-full py-2']
				},
				attributes: {
					type: 'text',
					label: 'Recipient ID',
					id: 'recipient_id',
					classes: ['form-input bg-gray-200 rounded w-full']
				},
				rules: ['required', 'minlen:6'],
				messages: {
					required: 'Firstname field is required!',
					minlen: 'First name field must have more that 6 characters!'
				}
			},
			{
				type: 'input',
				name: 'Phn',
				value: $recipient.Phn,
				prefix: {
					classes: ['flex flex-col items-center justify-between w-full py-2']
				},
				attributes: {
					type: 'text',
					label: 'PHN',
					id: 'phn',
					classes: ['form-input bg-gray-200 rounded w-full']
				},
				rules: ['required', 'minlen:6'],
				messages: {
					required: 'Firstname field is required!',
					minlen: 'First name field must have more that 6 characters!'
				}
			},
			{
				type: 'input',
				name: 'FirstName',
				value: $recipient.FirstName,
				prefix: {
					classes: ['flex flex-col items-center justify-between w-full py-2']
				},
				attributes: {
					type: 'text',
					label: 'First Name',
					id: 'firstname',
					classes: ['form-input rounded w-full'],
					placeholder: "Patient's First Name"
				},
				rules: ['required', 'minlen:6'],
				messages: {
					required: 'Firstname field is required!',
					minlen: 'First name field must have more that 6 characters!'
				}
			},
			{
				type: 'input',
				name: 'LastName',
				value: $recipient.LastName,
				prefix: {
					classes: ['flex flex-col items-center justify-between w-full py-2']
				},
				attributes: {
					type: 'text',
					label: 'Last Name',
					id: 'lastname',
					classes: ['form-input rounded w-full'],
					placeholder: "Patient's Last Name"
				},
				rules: ['required', 'minlen:6'],
				messages: {
					required: 'Lastname field is required!',
					minlen: 'Last name field must have more that 6 characters!'
				}
			},
			{
				type: 'select', // required
				name: 'MaritalStatus', //required
				value: $recipient.MaritalStatus,
				attributes: {
					id: 'MaritalStatus', // required
					classes: ['form-input rounded w-full'], // optional
					label: 'Marital Status', // optional
					disabled: false // optional
				},
				extra: {
					options: [
						{
							value: 'NA',
							title: 'N/A'
						},
						{
							value: 'SINGLE',
							title: 'Single'
						},
						{
							value: 'MARRIED',
							title: 'Married'
						}
					]
				}, // optional
				rules: [] // optional
			},
			{
				type: 'select', // required
				name: 'Status', //required
				value: $recipient.MaritalStatus,
				attributes: {
					id: 'Status', // required
					classes: ['form-input rounded w-full'], // optional
					label: 'Patient Status', // optional
					disabled: false // optional
				},
				extra: {
					options: [
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
				type: 'select', // required
				name: 'Gender', // required
				value: $recipient.Gender,
				attributes: {
					id: 'Gender', // required
					classes: ['form-input rounded w-full'], // optional
					label: 'Gender', // optional
					disabled: false // optional
				},
				extra: {
					options: [
						{
							value: 'NA',
							title: 'N/A'
						},
						{
							value: 'MALE',
							title: 'Male'
						},
						{
							value: 'FEMALE',
							title: 'Female'
						}
					]
				}, // optional
				rules: [] // optional
			},
			{
				type: 'input',
				name: 'DateOfBirth',
				value: $recipient.DateOfBirth,
				prefix: {
					classes: ['flex flex-col items-center justify-between w-full py-2']
				},
				attributes: {
					type: 'date',
					label: 'Date of Birth',
					id: 'dob',
					max: new Date().toISOString().split('T')[0],
					min: '1900-01-01',
					classes: ['form-input rounded w-full']
				}
			}
			//phonenumber
		];
	}

	let message = '';
	let values = {};
	let formSet = false;
	let isValidForm = false;

	beforeNavigate(function (p1: { from: URL; to: URL | null; cancel: () => void }) {
		const data = values as FormValues;
		if (!isValidForm) {
			if (
				!confirm(
					'Are you sure you want to navigate away from this page?\n\n' +
						'\n\nPress OK to continue, or Cancel to stay on the current page.'
				)
			) {
				p1.cancel();
			} else {
				console.log(p1.from);
				$activeUrl = p1.from.pathname;
			}
		}
	});

	function onSubmit() {
		console.log(values);
		console.log(isValidForm);
		if (isValidForm) {
			message = 'Saving Data....';
			updatePatient({ patientInput: values }).then((result) => {
				console.log(result);
				goto('/patients-recipient/view/' + result.data.updatePatient.ID);
			});
		} else {
			message =
				'Please check the fields ' +
				fields
					.filter((field) => field.dirty)
					.map((field) => field.name)
					.join(' ,');
		}
	}
</script>

<div class="flex h-full flex-wrap bg-gradient-to-b from-blue-50 to-stone-50 p-2">
	{#await awaitRecipient()}
		<div class="mx-auto my-auto text-3xl">Loading...</div>
	{:then formSet}
		<form
			class="mx-auto my-auto rounded border border-neutral-300 p-4 shadow-2xl md:w-1/2"
			on:submit|preventDefault={onSubmit}
		>
			<div class="text-xl font-bold">Edit Patient {$recipient.FirstName}</div>
			<Field {fields} bind:values bind:isValidForm />
			{message}
			<button
				class="float-right mt-4 rounded bg-green-400 py-2 px-4 uppercase text-white"
				type="submit"
			>
				Save
			</button>
		</form>
	{/await}
</div>
