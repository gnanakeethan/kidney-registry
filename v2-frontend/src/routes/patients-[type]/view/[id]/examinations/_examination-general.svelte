<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import Field from '$lib/components/form-builder/Components/Field.svelte';
	import { NewHistoryDocument, NewHistoryMutation } from '$lib/graphql/generated';
	import { recipient } from '$lib/state/recipient';
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
			name: 'General Examination',
			description: 'Description'
		},
		procedure: {
			fields: [
				{
					type: 'customradio', // required
					name: 'Build', // required
					prefix: {
						classes: 'w-full'
					},
					attributes: {
						id: 'id-field', // required
						classes: ['hidden'], // optional
						label: '', // optional
						labelClasses: 'px-4 py-2 border	 border-gray-400 rounded-xl labelStyle',
						fieldName: 'Build: '
					},
					extra: {
						items: [
							{ value: 'Lean', id: 'Lean', name: 'BUILD', title: 'Lean' },
							{ value: 'Average', id: 'Average', name: 'BUILD', title: 'Average' },
							{ value: 'Obese', id: 'Obese', name: 'BUILD', title: 'Obese' }
						]
					}
				},
				{
					type: 'input', // required
					name: 'BuildComments', // required
					value: '', // required
					prefix: { classes: [' w-full'] },
					attributes: {
						id: 'Type', // required
						classes: ['form-input rounded w-full'], // optional
						label: 'Build Comments:', // optional
						disabled: false // optional
					}
				},
				{
					type: 'customradio', // required
					name: 'Temperature', // required
					prefix: {
						classes: 'w-full'
					},
					attributes: {
						id: 'id-field', // required
						classes: ['hidden'], // optional
						label: '', // optional
						labelClasses: 'px-4 py-2 border	 border-gray-400 rounded-xl labelStyle',
						fieldName: 'Temperature: '
					},
					extra: {
						items: [
							{ value: 'Febrile', id: 'Febrile', name: 'Temp', title: 'Febrile' },
							{ value: 'Afebrile', id: 'Afebrile', name: 'Temp', title: 'Afebrile' }
						]
					}
				},
				{
					type: 'input', // required
					name: 'TemperatureIfFebrile', // required
					value: '37.5', // required
					prefix: { classes: ['mb-2 w-full'] },
					attributes: {
						id: 'Type', // required
						classes: ['form-input rounded'], // optional
						label: 'Body Temperature If Febrile:', // optional
						disabled: false, // optional
						type: 'number',
						min: 20,
						step: 0.1,
						max: 45
					}
				},
				{
					type: 'customcheckbox', // required
					name: 'General', // required
					prefix: {
						classes: 'w-full'
					},
					attributes: {
						id: 'id-field', // required
						classes: ['hidden'], // optional
						label: '', // optional
						labelClasses:
							'px-4 py-2 border border-gray-400 rounded-xl labelStyle whitespace-nowrap',
						fieldName: 'General: '
					},
					extra: {
						items: [
							{ value: 'Dyspnoea', name: 'Dyspnoea', title: 'Dyspnoea' },
							{ value: 'Cyanosis', name: 'Cyanosis', title: 'Cyanosis' },
							{ value: 'Pallor', name: 'Pallor', title: 'Pallor' },
							{ value: 'Not Pale', name: 'Not Pale', title: 'Not Pale' },
							{ value: 'Clubbing', name: 'Clubbing', title: 'Clubbing' }
						]
					}
				},

				{
					type: 'customradio', // required
					name: 'Extremities', // required
					prefix: {
						classes: 'w-full'
					},
					attributes: {
						id: 'id-field', // required
						classes: ['hidden'], // optional
						label: '', // optional
						labelClasses: 'px-4 py-2 border	 border-gray-400 rounded-xl labelStyle',
						fieldName: 'Extremities: '
					},
					extra: {
						items: [
							{ value: 'Warm', id: 'Warm', name: 'Extremities', title: 'Warm' },
							{
								value: 'Cold & Clammy',
								id: 'Cold & Clammy',
								name: 'Extremities',
								title: 'Cold & Clammy'
							}
						]
					}
				},

				{
					type: 'customradio', // required
					name: 'Dehydration', // required
					prefix: {
						classes: 'w-full'
					},
					attributes: {
						id: 'id-field', // required
						classes: ['hidden'], // optional
						label: '', // optional
						labelClasses: 'px-4 py-2 border	 border-gray-400 rounded-xl labelStyle',
						fieldName: 'Dehydration: '
					},
					extra: {
						items: [
							{ value: 'Good', id: 'Good', name: 'Good', title: 'Good' },
							{ value: 'Dehydrated', id: 'Dehydrated', name: 'Dehydrated', title: 'Dehydrated' }
						]
					}
				},

				{
					type: 'customcheckbox', // required
					name: 'Skin', // required
					prefix: {
						classes: 'w-full'
					},
					attributes: {
						id: 'id-field', // required
						classes: ['hidden'], // optional
						label: '', // optional
						labelClasses:
							'px-4 py-2 border border-gray-400 rounded-xl labelStyle whitespace-nowrap',
						fieldName: 'Skin: '
					},
					extra: {
						items: [
							{ value: 'Rashes', name: 'Rashes', title: 'Rashes' },
							{ value: 'Wounds', name: 'Wounds', title: 'Wounds' },
							{ value: 'Tattoos', name: 'Tattoos', title: 'Tattoos' },
							{ value: 'Scars', name: 'Scars', title: 'Scars' }
						]
					}
				},

				{
					type: 'customcheckbox', // required
					name: 'Dental', // required
					prefix: {
						classes: 'w-full'
					},
					attributes: {
						id: 'id-field', // required
						classes: ['hidden'], // optional
						label: '', // optional
						labelClasses:
							'px-4 py-2 border border-gray-400 rounded-xl labelStyle whitespace-nowrap',
						fieldName: 'Dental: '
					},
					extra: {
						items: [
							{ value: 'Carius Teeth', name: 'Carius Teeth', title: 'Carius Teeth' },
							{ value: 'Oral Ulcers', name: 'Oral Ulcers', title: 'Oral Ulcers' }
						]
					}
				},

				{
					type: 'textarea', // required
					name: 'OtherComments', // required
					value: '', // optional

					prefix: { classes: ['mx-2 flex-grow w-full'] },
					attributes: {
						id: 'id-field', // required
						classes: 'form-textarea rounded w-full my-2', // optional
						label: 'Other Comments', // optional
						disabled: false, // optional
						readonly: false, // optional
						rows: 1, // optional
						cols: null // optional
					}
				},

				{
					type: 'customradio', // required
					name: 'PainScale', // required
					prefix: {
						classes: 'w-full'
					},
					attributes: {
						id: 'id-field', // required
						classes: ['hidden'], // optional
						label: '', // optional
						labelClasses: 'py-1 px-2 border	border-gray-400 rounded-full labelStyle',
						fieldName: 'Pain Scale: '
					},
					extra: {
						items: [
							{ value: '1', id: '1', name: 'pain_scale', title: '1' },
							{ value: '2', id: '2', name: 'pain_scale', title: '2' },
							{ value: '3', id: '3', name: 'pain_scale', title: '3' },
							{ value: '4', id: '4', name: 'pain_scale', title: '4' },
							{ value: '5', id: '5', name: 'pain_scale', title: '5' },
							{ value: '6', id: '6', name: 'pain_scale', title: '6' },
							{ value: '7', id: '7', name: 'pain_scale', title: '7' },
							{ value: '8', id: '8', name: 'pain_scale', title: '8' },
							{ value: '9', id: '9', name: 'pain_scale', title: '9' },
							{ value: '10', id: '10', name: 'pain_scale', title: '10' }
						]
					}
				}
			]
		},
		order: 0
	};
	let message = '';
	let values = {};
	export let i = 0;
	export let others = 1;
	$: formSet = !!$recipient.ID;
	let baseFields = [];
	console.log(JSON.stringify(examinationDetail));

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
				<Field bind:isValidForm bind:values {fields} />
				{message}
				<button class="self-end rounded bg-green-400 py-2 px-4 uppercase text-white" type="submit"
					>Save
				</button>
			</div>
		</form>
	{:else}
		Loading...
	{/if}
</div>
