<script lang='ts'>
	import { beforeNavigate, goto } from '$app/navigation';
	import Field from '$lib/components/form-builder/Components/Field.svelte';
	import { FormValues } from '$lib/components/form-builder/lib/stores';
	import { recipientId } from '$lib/state/recipient';
	import { activeUrl } from '$lib/state/SidebarStore';
	import { deepen } from '$lib/utils';
	import { mutation } from '@urql/svelte';
	import { onMount } from 'svelte';
	// import { Person } from 'lib/graphql/generated';
	import {
		CreatePersonOrganDonationDocument,
		CreatePersonOrganDonationMutation,
		NewPatientDocument,
		NewPatientMutation
	} from '../../../../../lib/graphql/generated';

	const newPatient = mutation<NewPatientMutation>({
		query: NewPatientDocument
	});
	const createPersonOrganDonation = mutation<CreatePersonOrganDonationMutation>({
		query: CreatePersonOrganDonationDocument
	});
	onMount(() => {
		newPatient<NewPatientDocument>(null).then((root: { data: NewPatientDocument }) => {
			let patient = root.data.newPatient.node;
			Object.entries(patient).forEach(([key, value]) => {
				key = 'Donor.' + key;
				values[key] = value;
			});
			console.log(values);
			formSet = true;
		});
	});
	const fields = [
		{
			type: 'input',
			name: 'Recipient.ID',
			value: $recipientId,
			prefix: {
				classes: ['hidden flex flex-col items-center justify-between w-full py-2']
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
			name: 'Donor.ID',
			value: '',
			prefix: {
				classes: ['hidden flex flex-col items-center justify-between w-full py-2']
			},
			attributes: {
				type: 'text',
				label: 'Donor ID',
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
			name: 'Donor.RecordStatus',
			value: 'DRAFT',
			prefix: {
				classes: ['hidden flex flex-col items-center justify-between w-full py-2']
			},
			attributes: {
				type: 'text',
				label: 'Donor ID',
				id: 'recipient_id',
				classes: ['form-input bg-gray-200 rounded w-full']
			}
		},
		{
			type: 'input',
			name: 'Donor.Phn',
			value: '',
			prefix: {
				classes: ['w-full mt-4']
			},
			attributes: {
				type: 'text',
				label: 'PHN',
				id: 'phn',
				classes: ['form-input w-full']
			},
			rules: ['required', 'minlen:6'],
			messages: {
				required: 'Firstname field is required!',
				minlen: 'First name field must have more that 6 characters!'
			}
		},
		{
			type: 'input',
			name: 'Donor.FirstName',
			value: '',
			prefix: {
				classes: ['w-full mt-4']
			},
			attributes: {
				type: 'text',
				label: 'First Name',
				id: 'firstname',
				classes: ['form-input w-full'],
				placeholder: 'Donor\'s First Name'
			},
			rules: ['required', 'minlen:6'],
			messages: {
				required: 'Firstname field is required!',
				minlen: 'First name field must have more that 6 characters!'
			}
		},
		{
			type: 'input',
			name: 'Donor.LastName',
			value: '',
			prefix: {
				classes: ['w-full mt-4']

			},
			attributes: {
				type: 'text',
				label: 'Last Name',
				id: 'lastname',
				classes: ['form-input w-full'],
				placeholder: 'Donor\'s Last Name'
			},
			rules: ['required', 'minlen:6'],
			messages: {
				required: 'Lastname field is required!',
				minlen: 'Last name field must have more that 6 characters!'
			}
		},
		{
			type: 'select', // required
			name: 'Donor.MaritalStatus', //required
			prefix: {
				classes: ['w-full mt-4']
			},
			attributes: {
				id: 'MaritalStatus', // required
				classes: ['form-input w-full'], // optional
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
			name: 'Donor.Gender', // required
			prefix: {
				classes: ['w-full mt-4']
			},
			attributes: {
				id: 'Gender', // required
				classes: ['form-input w-full'], // optional
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
			name: 'Donor.DateOfBirth',
			value: '',
			prefix: {
				classes: ['w-full mt-4']
			},
			attributes: {
				type: 'date',
				label: 'Date of Birth',
				id: 'dob',
				max: new Date().toISOString().split('T')[0],
				min: '1900-01-01',
				classes: ['form-input  w-full']
			}
		},

		{
			type: 'select', // required
			name: 'Donor.Status', // required
			value: 'ACTIVE',
			prefix: { classes: ['mt-4 w-full'] },

			attributes: {
				id: 'id-field', // required
				classes: ['form-input w-full'],
				label: 'Patient Status', // optional
				disabled: false // optional
			},
			extra: {
				options: [
					{ value: '', title: '' },
					{ value: 'ACTIVE', title: 'Active' },
					{ value: 'INACTIVE', title: 'Inactive' }
				]
			} // optional
		},
		{
			type: 'select', // required
			name: 'Donor.PersonType', // required
			value: 'DONOR',
			prefix: { classes: ['mt-4 w-full'] },
			attributes: {
				id: 'id-field', // required
				classes: ['form-select w-full'], // optional
				label: 'Person Type', // optional
				disabled: false, // optional,
				readonly: true
			},
			extra: {
				options: [
					{ value: 'DONOR', title: 'Donor' }
				]
			} // optional
		},
		{
			type: 'select', // required
			name: 'Donor.BloodGroup', // required
			value: 'NA',
			prefix: { classes: ['mt-4 w-full'] },
			attributes: {
				id: 'BloodGroup', // required
				classes: ['form-select w-full'], // optional
				label: 'BloodGroup', // optional
				disabled: false // optional
			},
			extra: {
				options: [
					{ value: 'NA', title: 'N/A' },
					{ value: 'A_POS', title: 'A_POS' },
					{ value: 'A_NEG', title: 'A_NEG' },
					{ value: 'B_POS', title: 'B_POS' },
					{ value: 'B_NEG', title: 'B_NEG' },
					{ value: 'O_POS', title: 'O_POS' },
					{ value: 'O_NEG', title: 'O_NEG' },
					{ value: 'AB_POS', title: 'AB_POS' },
					{ value: 'AB_NEG', title: 'AB_NEG' }
				]
			}, // optional
			rules: [] // optional
		},

		{
			type: 'select', // required
			name: 'DonationType', // required
			value: 'LIVE',
			prefix: { classes: ['mt-4 w-full'] },
			attributes: {
				id: 'id-field', // required
				classes: ['form-select w-full'], // optional
				label: 'Donation Type', // optional
				disabled: false // optional
			},
			extra: {
				options: [
					{ value: 'LIVE', title: 'Live' },
					{ value: 'CADAVERIC', title: 'Cadaveric' }
				]
			} // optional
		}
		//phonenumber
	];
	let message = '';
	let values = {};
	let formSet = false;
	let isValidForm = false;

	beforeNavigate(function(p1: { from: URL; to: URL | null; cancel: () => void }) {
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
			const valuesRef = deepen(values);
			createPersonOrganDonation({ input: valuesRef }).then((result) => {
				console.log(result);
				alert('Saved');
				goto(
					'/patients-recipient/view/' +
						result.data.createPersonOrganDonation.Donor.ID +
						'/history/new/history'
				);
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

<div class='flex h-full flex-wrap overflow-scroll bg-gradient-to-b from-blue-50 to-stone-50 p-2'>
	{#if formSet}
		<form
			class='mx-auto my-auto rounded border border-neutral-300 p-4 shadow-2xl md:w-1/2'
			on:submit|preventDefault={onSubmit}
		>
			<div class='text-xl font-bold'>New Patient</div>
			<Field {fields} bind:values bind:isValidForm inline={true} />
			{message}
			<button
				class='float-right mt-4 rounded bg-green-400 py-2 px-4 uppercase text-white'
				type='submit'
			>
				Register Patient
			</button>
		</form>
	{/if}
</div>

<style>
    .custom-form :global(.form-group) {
        padding: 10px;
        margin-bottom: 10px;
    }

    .custom-form :global(.custom-form-group) {
        padding: 10px;
        color: white;
        margin-bottom: 10px;
    }

    .custom-form :global(.class-description) {
    }
</style>
