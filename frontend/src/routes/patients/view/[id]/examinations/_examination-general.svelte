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
			name: 'General Examination',
			description: 'Description'
		},
		procedure: {
			fields: [
				{
					type: 'customradio', // required
					name: 'name-field', // required
					attributes: {
						id: 'id-field', // required
						classes: [], // optional
						label: '', // optional
						labelClasses: 'px-4 py-2',
						fieldName: 'Body Build'
					},
					extra: {
						items: [
							{ value: 'Lean', id: 'Lean', name: 'BUILD', title: 'Lean' },
							{ value: 'Average', id: 'Average', name: 'BUILD', title: 'Average' },
							{ value: 'Obese', id: 'Obese', name: 'BUILD', title: 'Obese' }
						]
					},
					rules: [], // optional
					preprocess: (field, fields, values) => {
						// Hook to alter current field
						return field;
					}
				},
				{
					type: 'autocomplete', // required
					name: 'Reason2', // required
					value: '', // optional
					prefix: { classes: ['mx-2'] },
					attributes: {
						id: 'id-field', // required
						classes: 'form-textarea rounded w-full my-2', // optional
						label: 'Reason2', // optional
						disabled: false, // optional
						readonly: false, // optional
						rows: 1, // optional
						cols: null // optional
					},
					extra: {
						multiple: false, // optional
						loadItems: []
					},
					rules: ['required'],
					messages: { required: 'Field must be filled' }
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
				const valuesRef: { Reason: any } = deepen(values);

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
				<div class="text-xl font-bold capitalize">
					{examinationDetail.details.name.toString().toLowerCase()} For {$recipient.FirstName}
				</div>
			{/if}
			<div class="flex flex-col items-center justify-between">
				<Field bind:isValidForm bind:values {fields} />
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
