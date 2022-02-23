<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import Field from '$lib/components/form-builder/Components/Field.svelte';
	import { FormValues } from '$lib/components/form-builder/lib/stores';
	import { recipientId } from '$lib/state/recipient';
	import { activeUrl } from '$lib/state/SidebarStore';
	import { deepen } from '$lib/utils';
	import { defULID } from '@thi.ng/ksuid';
	import { mutation } from '@urql/svelte';
	// import { Person } from 'lib/graphql/generated';
	import {
		NewPersonFollowUpDocument,
		NewPersonFollowUpMutation
	} from '../../../../../lib/graphql/generated';

	const id = defULID();

	const newPersonFollowUp = mutation<NewPersonFollowUpMutation>({
		query: NewPersonFollowUpDocument
	});
	const dialysisPlanFields = [
		{
			type: 'input',
			name: 'DialysisPlan.Type',
			value: '',
			prefix: {
				classes: ['flex flex-col items-center justify-between w-full py-2']
			},
			attributes: {
				type: 'text',
				label: 'Type',
				id: 'recipient_id',
				classes: ['form-input rounded w-full readonly']
			}
		},
		{
			type: 'input',
			name: 'DialysisPlan.Plan',
			value: '',
			prefix: {
				classes: ['flex flex-col items-center justify-between w-full py-2']
			},
			attributes: {
				type: 'text',
				label: 'Plan',
				id: 'recipient_id',
				classes: ['form-input rounded w-full readonly']
			}
		},
		{
			type: 'input',
			name: 'DialysisPlan.Frequency',
			value: '',
			prefix: {
				classes: ['flex flex-col items-center justify-between w-full py-2']
			},
			attributes: {
				type: 'text',
				label: 'Frequency',
				id: 'recipient_id',
				classes: ['form-input rounded w-full readonly']
			}
		}
	];
	const medicineFields = [
		{
			type: 'input',
			name: 'ID',
			value: id.next(),
			prefix: {
				classes: ['hidden flex flex-col items-center justify-between w-full py-2']
			},
			attributes: {
				type: 'text',
				label: 'ID',
				id: 'recipient_id',
				classes: ['form-input bg-gray-200 rounded w-full readonly'],
				readonly: true
			}
		},
		{
			type: 'input',
			name: 'Name',
			value: '',
			prefix: {
				classes: ['flex flex-col mx-2 items-center justify-between w-full py-2']
			},
			attributes: {
				type: 'text',
				label: 'Type',
				id: 'recipient_id',
				classes: ['form-input rounded w-full readonly']
			}
		},
		{
			type: 'input',
			name: 'Dosage',
			value: '',
			prefix: {
				classes: ['flex flex-col mx-2 items-center justify-between w-full py-2']
			},
			attributes: {
				type: 'text',
				label: 'Dosage',
				id: 'recipient_id',
				classes: ['form-input rounded w-full readonly']
			}
		},
		{
			type: 'input',
			name: 'Frequency',
			value: '',
			prefix: {
				classes: ['flex flex-col mx-2 items-center justify-between w-full py-2']
			},
			attributes: {
				type: 'text',
				label: 'Frequency',
				id: 'recipient_id',
				classes: ['form-input rounded w-full readonly']
			}
		}
	];
	const fields = [
		{
			type: 'input',
			name: 'ID',
			value: id.next(),
			prefix: {
				classes: ['hidden flex flex-col items-center justify-between w-full py-2']
			},
			attributes: {
				type: 'text',
				label: 'ID',
				id: 'recipient_id',
				classes: ['form-input bg-gray-200 rounded w-full readonly'],
				readonly: true
			}
		},

		{
			type: 'input',
			name: 'Person.ID',
			value: $recipientId,
			prefix: {
				classes: ['hidden flex flex-col items-center justify-between w-full py-2']
			},
			attributes: {
				type: 'text',
				label: 'ID',
				id: 'recipient_id',
				classes: ['form-input bg-gray-200 rounded w-full readonly'],
				readonly: true
			}
		},

		{
			type: 'select', // required
			name: 'CaseStatus', // required
			prefix: { classes: ['mb-2 w-full'] },

			attributes: {
				id: 'id-field', // required
				classes: ['form-select'], // optional
				label: 'Case Status', // optional
				disabled: false // optional
			},
			extra: {
				options: [
					{ value: 'WORKING_UP', title: 'Working Up' },
					{ value: 'ACTIVE', title: 'Active' },
					{ value: 'SUSPENDED', title: 'Suspended' },
					{ value: 'PERMANENTLY_UNFIT', title: 'Permanently Unfit' },
					{ value: 'DECEASED_AWAITING_TRANSPLANT', title: 'Deceased Awaiting Transplant' },
					{
						value: 'DECEASED_POST_CADAVERIC_TRANSPLANT',
						title: 'Deceased Post Cadaveric Transplant'
					},
					{ value: 'RECEIVED_LIVE_TRANSPLANT', title: 'Non Received Live Transplant' }
				]
			} // optional
		},
		// WORKING_UP
		// ACTIVE
		// SUSPENDED
		// PERMANENTLY_UNFIT
		// DECEASED_WILL_AWAITING_TRANSPLANT
		// DECEASED_POST_CADAVERIC_TRANSPLANT
		// RECEIVED_LIVE_TRANSPLANT
		{
			type: 'textarea', // required
			name: 'OtherFindings', // required
			value: '', // optional

			prefix: { classes: ['mx-2 flex-grow w-full'] },
			attributes: {
				id: 'id-field', // required
				classes: 'form-textarea rounded w-full my-2', // optional
				label: 'Other Findings', // optional
				disabled: false, // optional
				readonly: false, // optional
				rows: 1, // optional
				cols: null // optional
			}
		},
		{
			type: 'textarea', // required
			name: 'Referrals', // required
			value: '', // optional

			prefix: { classes: ['mx-2 flex-grow w-full'] },
			attributes: {
				id: 'id-field', // required
				classes: 'form-textarea rounded w-full my-2', // optional
				label: 'Referrals', // optional
				disabled: false, // optional
				readonly: false, // optional
				rows: 1, // optional
				cols: null // optional
			}
		},
		{
			type: 'textarea', // required
			name: 'ConsultantOpinion', // required
			value: '', // optional

			prefix: { classes: ['mx-2 flex-grow w-full'] },
			attributes: {
				id: 'id-field', // required
				classes: 'form-textarea rounded w-full my-2', // optional
				label: 'Consultant Opinion', // optional
				disabled: false, // optional
				readonly: false, // optional
				rows: 1, // optional
				cols: null // optional
			}
		}
	];
	let message = '';
	let values = {
		Medicines: []
	};
	let medicines = [{}, {}];
	let dialysisValues = {};
	let formSet = !!$recipientId;
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
			Object.assign({}, values, dialysisValues);
			values.Medicines = [];
			medicines.forEach((medicine) => {
				const medicineValue = deepen(medicine);
				values.Medicines.push(medicineValue);
			});
			values = deepen(values);
			console.log(values);
			newPersonFollowUp({ input: values }).then((result) => {
				console.log(result);
				alert('Saved =>' + result.data.createPersonFollowUp.ID);
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

<div class="flex h-full flex-wrap bg-gradient-to-b from-teal-50 to-stone-50 p-2">
	{#if formSet}
		<form
			class="mx-auto my-auto rounded border border-neutral-300 p-4 shadow-2xl md:w-1/2"
			on:submit|preventDefault={onSubmit}
		>
			<div class="text-xl font-bold">New FollowUp</div>
			<fieldset class="my-4 flex flex-col rounded border  border-black p-2">
				<legend>Medicines</legend>
				{#each medicines as medicine, i}
					<div class="flex flex-row">
						<Field fields={medicineFields} bind:values={medicine} bind:isValidForm />
					</div>
				{/each}
			</fieldset>
			<fieldset class="my-4 w-full rounded border border-black  p-2">
				<legend>Dialysis Plan</legend>
				<Field
					inline={true}
					fields={dialysisPlanFields}
					bind:values={dialysisValues}
					bind:isValidForm
				/>
			</fieldset>

			<Field {fields} bind:values bind:isValidForm />
			{message}
			<button
				class="float-right mt-4 rounded bg-green-400 py-2 px-4 uppercase text-white"
				type="submit"
			>
				Register Patient
			</button>
		</form>
	{/if}
</div>
