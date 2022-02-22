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
	export let others = 1;
	$: formSet = !!$recipient.ID;

	$: if (formSet) {
		fields = [
			{
				type: 'input',
				name: 'Person.ID',
				value: $recipient.ID,
				prefix: {
					classes: ['hidden flex flex-col items-center justify-between w-full py-2']
				},
				attributes: {
					type: 'text',
					label: 'Recipient PHN',
					id: 'recipient_id',
					readonly: true,
					classes: ['form-input bg-gray-200 rounded w-full']
				}
			},
			{
				type: 'input',
				name: 'Person.Phn',
				value: $recipient.Phn,
				prefix: {
					classes: ['flex flex-col items-center justify-between w-full py-2']
				},
				attributes: {
					type: 'text',
					label: 'Recipient PHN',
					id: 'recipient_idd',
					readonly: true,
					classes: ['form-input bg-gray-200 rounded w-full']
				}
			},
			{
				type: 'input', // required
				name: 'Type', // required
				value: 'MEDICAL', // required
				attributes: {
					id: 'Type', // required
					classes: ['form-input rounded w-full readonly my-2'], // optional
					label: 'Type', // optional
					disabled: false, // optional
					readonly: true
				}
			},
			{
				type: 'customcheckbox', // required
				name: 'Reason', // required
				attributes: {
					id: 'id-field', // required
					classes: [''], // optional
					labelClasses: ['py-2 px-4 bg-gray-400 rounded'],
					fieldName: '', // optional
					label: 'Reason', // optional
					required: true
				},
				extra: {
					items: [
						{
							value: 'DIABETIC',
							name: 'DIABETIC',
							title: 'DIABETIC'
						},
						{
							value: 'CANCER',
							name: 'CANCER',
							title: 'CANCER'
						},
						{
							value: 'OTHER',
							name: 'OTHER',
							title: 'OTHER'
						}
					]
				},
				rules: ['required'], // optional
				messages: {
					required: 'Field is needed'
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
				attributes: {
					id: 'id-field', // required
					classes: 'form-textarea rounded w-full my-3', // optional
					label: 'Description', // optional
					disabled: false, // optional
					readonly: false, // optional
					rows: null, // optional
					cols: null // optional
				}
			},
			{
				type: 'textarea', // required
				name: 'Medications', // required
				value: '', // optional
				attributes: {
					id: 'id-field', // required
					classes: 'form-textarea rounded w-full my-3', // optional
					label: 'Medications', // optional
					disabled: false, // optional
					readonly: false, // optional
					rows: null, // optional
					cols: null // optional
				}
			},
			{
				type: 'input',
				name: 'StartDate',
				value: '',
				prefix: {
					classes: ['flex flex-col items-center justify-between w-full py-2']
				},
				attributes: {
					type: 'date',
					label: 'Start Date',
					id: 'dob',
					max: new Date().toISOString().split('T')[0],
					min: '1900-01-01',
					classes: ['form-input rounded w-full']
				}
			},
			{
				type: 'input',
				name: 'EndDate',
				value: '',
				prefix: {
					classes: ['flex flex-col items-center justify-between w-full py-2']
				},
				attributes: {
					type: 'date',
					label: 'End Date',
					id: 'dob',
					max: new Date().toISOString().split('T')[0],
					min: '1900-01-01',
					classes: ['form-input rounded w-full']
				}
			}

			// {
			// 	type: 'textarea', // required
			// 	name: 'Description', // required
			// 	value: '', // optional
			// 	attributes: {
			// 		id: 'id-field', // required
			// 		classes: 'form-textarea rounded w-full my-3', // optional
			// 		label: 'Description', // optional
			// 		disabled: false, // optional
			// 		readonly: false, // optional
			// 		rows: null, // optional
			// 		cols: null // optional
			// 	}
			// }
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
				console.log(valuesRef);
				valuesRef.Reason = valuesRef.Reason.filter((reason) => reason.checked)
					.map((reason: { value: string }) => {
						return reason.value;
					})
					.join(',');

				newHistory({ input: valuesRef }).then((result) => {
					console.log(result);
					alert('Data Saved');
					if (others == 1) {
						goto('/patients/view/' + $recipientId + '/history/');
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
		<form
			class="mx-auto my-auto rounded border border-neutral-300 p-4 shadow-2xl md:w-1/2"
			on:submit|preventDefault={onSubmit}
		>
			<div class="text-xl font-bold capitalize">
				{values.Type?.toString().toLowerCase()} History Record For {$recipient.FirstName}
			</div>
			<Field bind:isValidForm bind:values {fields} />
			{message}
			<button
				class="float-right mt-4 rounded bg-green-400 py-2 px-4 uppercase text-white"
				type="submit"
			>
				Save
			</button>
		</form>
	{:else}
		Loading...
	{/if}
</div>
