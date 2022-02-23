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
	let examinationDetail: {
		details: {
			name: string;
			description: string;
		};
		procedure: object;
		order: number;
	} = {
		details: {
			name: 'Cardiovascular Examination',
			description: 'Description'
		},
		procedure: {
			fields: [
				{
					type: 'input', // required
					name: 'PulseRate', // required
					value: '72', // required
					prefix: { classes: ['mb-2 w-full'] },
					attributes: {
						id: 'Type', // required
						classes: ['form-input rounded'], // optional
						label: 'Pulse Rate:', // optional
						disabled: false, // optional
						type: 'number',
						min: 20,
						step: 1,
						max: 250
					}
				},
				{
					type: 'input', // required
					name: 'PulseVolume', // required
					value: '', // required
					prefix: { classes: ['mb-2 w-full'] },
					attributes: {
						id: 'Type', // required
						classes: ['form-input rounded'], // optional
						label: 'Pulse Volume:', // optional
						disabled: false, // optional
						type: 'number',
						min: 20,
						step: 1,
						max: 250
					}
				},
				{
					type: 'input', // required
					name: 'Blood Pressure', // required
					value: '', // required
					prefix: { classes: ['mb-2 w-full'] },
					attributes: {
						id: 'Type', // required
						classes: ['form-input rounded'], // optional
						label: 'Blood Pressure:', // optional
						disabled: false // optional
					}
				},
				{
					type: 'input', // required
					name: 'Pulse Pressure', // required
					value: '', // required
					prefix: { classes: ['mb-2 w-full'] },
					attributes: {
						id: 'Type', // required
						classes: ['form-input rounded'], // optional
						label: 'Pulse Pressure:', // optional
						disabled: false // optional
					}
				},

				{
					type: 'customradio', // required
					name: 'JVP', // required
					prefix: {
						classes: 'w-full'
					},
					attributes: {
						id: 'id-field', // required
						classes: ['hidden'], // optional
						label: '', // optional
						labelClasses: 'px-4 py-2 border	 border-black rounded-xl labelStyle',
						fieldName: 'JVP: '
					},
					extra: {
						items: [
							{ value: 'Normal', id: 'Normal', name: 'JVP', title: 'Normal' },
							{ value: 'Elevated', id: 'Elevated', name: 'JVP', title: 'Elevated' }
						]
					}
				},
				{
					type: 'customradio', // required
					name: 'CarotidBruit', // required
					prefix: {
						classes: 'w-full'
					},
					attributes: {
						id: 'id-field', // required
						classes: ['hidden'], // optional
						label: '', // optional
						labelClasses: 'px-4 py-2 border	 border-black rounded-xl labelStyle',
						fieldName: 'Carotid Bruit: '
					},
					extra: {
						items: [
							{ value: 'Yes', id: 'Yes', name: 'CarotidBruit', title: 'Yes' },
							{ value: 'No', id: 'No', name: 'CarotidBruit', title: 'No' }
						]
					}
				},

				{
					type: 'textarea', // required
					name: 'Auscultation', // required
					value: '', // optional

					prefix: { classes: ['mx-2 flex-grow w-full'] },
					attributes: {
						id: 'id-field', // required
						classes: 'form-textarea rounded w-full my-2', // optional
						label: 'Auscultation', // optional
						disabled: false, // optional
						readonly: false, // optional
						rows: 1, // optional
						cols: null // optional
					}
				},

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
				}
				//old
			]
		},
		order: 0
	};
	console.log(JSON.stringify(examinationDetail));
	let message = '';
	let values = {};
	export let i = 0;
	export let others = 1;
	$: formSet = !!$recipient.ID;
	let baseFields = [];
	$: fields = [...baseFields, ...examinationDetail.procedure.fields];

	$: if (formSet) {
		baseFields = [
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
				const valuesRef = values;

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
		<form class="w-full rounded " on:submit|preventDefault={onSubmit}>
			{#if i === 0}
				<div class="my-8 text-xl font-bold capitalize">
					{examinationDetail.details.name.toString().toLowerCase()} For {$recipient.FirstName}
				</div>
			{/if}
			<div class="flex w-full flex-col items-center justify-between">
				<Field inline={true} bind:isValidForm bind:values {fields} />
				{message}
				<button class="rounded bg-green-400 py-2 px-4 uppercase text-white" type="submit"
					>Save
				</button>
			</div>
		</form>
	{:else}
		Loading...
	{/if}
</div>
