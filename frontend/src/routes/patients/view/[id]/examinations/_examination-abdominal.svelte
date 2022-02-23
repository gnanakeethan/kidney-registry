<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import Field from '$lib/components/form-builder/Components/Field.svelte';
	import { recipient } from '$lib/state/recipient';
	import { activeUrl } from '$lib/state/SidebarStore';

	let examinationDetail: {
		details: {
			name: string;
			description: string;
		};
		procedure: object;
		order: number;
	} = {
		details: {
			name: 'Respiratory Examination',
			description: 'Description'
		},
		procedure: {
			fields: [
				{
					type: 'textarea', // required
					name: 'Findings', // required
					value: '', // optional

					prefix: { classes: ['mx-2 flex-grow w-full'] },
					attributes: {
						id: 'id-field', // required
						classes: 'form-textarea rounded w-full my-2', // optional
						label: 'Findings', // optional
						disabled: false, // optional
						readonly: false, // optional
						rows: 1, // optional
						cols: null // optional
					}
				},

				{
					type: 'imagedetail', // required
					name: 'AbdominalDiagram', // required
					value: '30', // required
					prefix: { classes: ['mb-2 w-full'] },
					attributes: {
						id: 'Type', // required
						classes: ['form-input rounded'], // optional
						label: 'Abdominal Diagram Notes:', // optional
						disabled: false, // optional
						type: 'number',
						image:
							'https://kidney-project-lka-public-media.s3.ap-southeast-1.amazonaws.com/abdominal.png',
						min: 1,
						step: 1,
						max: 250
					}
				}
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

				// newHistory({ input: valuesRef }).then((result) => {
				// 	console.log(result);
				// 	alert('Data Saved');
				// 	if (others == 1) {
				// 		goto('/patients/view/' + $recipientId + '/history/');
				// 	}
				// });
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
				<Field inline={false} bind:isValidForm bind:values {fields} />
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
