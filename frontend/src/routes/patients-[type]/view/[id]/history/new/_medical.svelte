<script lang="ts">
	import { beforeNavigate, goto } from '$app/navigation';
	import Field from '$lib/components/form-builder/Components/Field.svelte';
	import { NewHistoryDocument, NewHistoryMutation } from '$lib/graphql/generated';
	import { recipient, recipientId } from '$lib/state/recipient';
	import { activeUrl } from '$lib/state/SidebarStore';
	import { mutation } from '@urql/svelte';

	const newHistory = mutation<NewHistoryMutation>({
		query: NewHistoryDocument
	});
	let fields = [];
	let message = '';
	let values = {};
	export let i = 1;
	export let others = 1;
	$: formSet = !!$recipient.ID;

	$: if (formSet) {
		fields = [
			{
				type: 'input',
				name: 'Person.ID',
				value: $recipient.ID,
				prefix: {
					classes: ['hidden flex flex-col items-center justify-between']
				},
				attributes: {
					type: 'text',
					label: 'ID',
					id: 'recipient_id',
					readonly: true,
					classes: ['form-input bg-gray-200 rounded my-2']
				}
			},
			{
				type: 'input', // required
				name: 'Type', // required
				value: 'MEDICAL', // required
				prefix: { classes: ['mx-2 hidden'] },
				attributes: {
					id: 'Type', // required
					classes: ['form-input rounded w-full readonly my-2'], // optional
					label: i === 0 ? 'Type' : '', // optional
					disabled: false, // optional
					readonly: true
				}
			},

			{
				type: 'autocomplete', // required
				name: 'Reason', // required
				value: '', // optional

				prefix: { classes: ['mx-2 flex-grow'] },
				attributes: {
					id: 'id-field', // required
					classes: 'form-textarea rounded w-full my-2', // optional
					label: i === 0 ? 'Disease' : '', // optional
					disabled: false, // optional
					readonly: false, // optional
					rows: 1, // optional
					cols: null // optional
				},
				extra: {
					multiple: false, // optional
					loadItems: [
						{ title: 'Diabetes mellitus', value: 'Diabetes mellitus' },
						{ title: 'Dyslipidemia', value: 'Dyslipidemia' },
						{ title: 'Hypertension', value: 'Hypertension' },
						{ title: 'Cerebrovascular Disease', value: 'Cerebrovascular Disease' },
						{ title: 'Heart disease', value: 'Heart disease' },
						{ title: 'Bronchial Asthma', value: 'Bronchial Asthma' },
						{ title: 'Lung disease', value: 'Lung disease' },
						{ title: 'Anemia', value: 'Anemia' },
						{ title: 'Hyperthyroidism', value: 'Hyperthyroidism' },
						{ title: 'Hypothyroidism', value: 'Hypothyroidism' },
						{ title: 'Chronic Kidney Disease', value: 'Chronic Kidney Disease' },
						{ title: 'Renal Failure', value: 'Renal Failure' },
						{ title: 'End Stage Renal Disease', value: 'End Stage Renal Disease' },
						{ title: 'Acute Kidney Injury', value: 'Acute Kidney Injury' },
						{ title: 'Depression', value: 'Depression' },
						{ title: 'Osteoporosis', value: 'Osteoporosis' },
						{ title: 'Arthritis', value: 'Arthritis' },
						{ title: 'Dengue Fever', value: 'Dengue Fever' },
						{ title: 'Covid 19 Infection', value: 'Covid 19 Infection' }
					]
				},
				rules: ['required'],
				messages: { required: 'Field must be filled' }
			},
			{
				type: 'input',
				name: 'StartDate',
				value: '',
				prefix: { classes: ['mx-2'] },
				attributes: {
					type: 'date',
					label: i === 0 ? 'Diagnosed Date' : '',
					id: 'dob',
					max: new Date().toISOString().split('T')[0],
					min: '1900-01-01',
					classes: ['form-input rounded w-full my-2']
				}
			},
			// {
			// 	type: 'input', // required
			// 	name: 'Reason', // required
			// 	attributes: {
			// 		id: 'id-field', // required
			// 		classes: ['form-input w-full my-2'], // optional
			// 		labelClasses: ['py-2 px-4 bg-gray-400 rounded'],
			// 		fieldName: '', // optional
			// 		label: 'Other Reasons' // optional
			// 	}
			// },

			{
				type: 'textarea', // required
				name: 'Description', // required
				value: '', // optional

				prefix: { classes: ['mx-2 flex-grow'] },
				attributes: {
					id: 'id-field', // required
					classes: 'form-textarea rounded w-full my-2', // optional
					label: i === 0 ? 'Description / Duration' : '', // optional
					disabled: false, // optional
					readonly: false, // optional
					rows: 1, // optional
					cols: null // optional
				}
			},
			{
				type: 'textarea', // required
				name: 'Medications', // required
				value: '', // optional
				prefix: { classes: ['mx-2 flex-grow'] },
				attributes: {
					id: 'id-field', // required
					classes: 'form-textarea rounded w-full my-2', // optional
					label: i === 0 ? 'Medications' : '', // optional
					disabled: false, // optional
					readonly: false, // optional
					rows: 1, // optional
					cols: null // optional
				}
			}
		];
	}
	let isValidForm = false;

	beforeNavigate(function (p1: { from: URL; to: URL | null; cancel: () => void }) {
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

	export function onSubmit() {
		if (isValidForm) {
			try {
				const valuesRef: { Reason: any } = deepen(values);

				newHistory({ input: valuesRef }).then((result) => {
					console.log(result);
					alert('Data Saved');
					if (others == 1) {
						goto('/patients-recipient/view/' + $recipientId + '/history/');
					}
				});
			} catch (e) {
				alert('Please fill all the required fields');
				message = 'Please fill all the required fields';
			}
			// message = 'Saving Data....';
		} else {
			message = 'Please fill all the required fields';
		}
	}

	function deepen(obj) {
		const result = {};

		// For each object path (property key) in the object
		for (const objectPath in obj) {
			// Split path into component parts
			const parts = objectPath.split('.');

			// Create sub-objects along path as needed
			let target = result;
			while (parts.length > 1) {
				const part = parts.shift();
				target = target[part] = target[part] || {};
			}

			// Set value at end of path
			target[parts[0]] = obj[objectPath];
		}

		return result;
	}
</script>

<div class="flex h-full flex-wrap p-2">
	{#if formSet}
		<form class="my-auto w-full rounded" on:submit|preventDefault={onSubmit}>
			{#if i === 0}
				<div class="text-xl font-bold capitalize">
					{values.Type?.toString().toLowerCase()} History Record For {$recipient.FirstName}
				</div>
			{/if}
			<div class="flex flex-row items-center justify-between">
				<Field bind:isValidForm bind:values {fields} />
				<button
					class="mx-4 h-10 w-20 rounded bg-green-400 py-2 px-4 uppercase text-white"
					type="submit"
					>Save
				</button>
			</div>
		</form>
	{:else}
		Loading...
	{/if}
</div>
