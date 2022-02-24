<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types';

	export async function load(loadInput: LoadInput): Promise<LoadOutput> {
		console.log(loadInput.url);
		const { workupId } = loadInput.params;
		return { props: { workupId } };
	}
</script>

<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import Field from '$lib/components/form-builder/Components/Field.svelte';
	import { recipient } from '$lib/state/recipient';
	import { activeUrl } from '$lib/state/SidebarStore';
	import { mutation, operationStore, query } from '@urql/svelte';
	import {
		GetPersonWorkupDocument,
		UpdatePersonWorkupDocument,
		UpdatePersonWorkupMutation,
		PersonWorkup
	} from '../../../../../lib/graphql/generated';

	const updatePersonWorkup = mutation<UpdatePersonWorkupMutation>({
		query: UpdatePersonWorkupDocument
	});
	export let workupId = '';
	let workup: PersonWorkup;

	let message = '';
	let values = {};
	export let i = 0;
	export let others = 1;
	$: formSet = !!$recipient.ID && !!workup?.ID;
	let baseFields = [];
	let fields = [];
	$: if (workup !== undefined) {
		fields = [...baseFields];
		workup.Procedure.fields.forEach((field) => {
			if (!field.name.startsWith('Results.')) {
				field.name = 'Results.' + field.name;
			}
			fields = [...fields, field];
		});
	}

	$: if (formSet && workup !== undefined && workup.ID !== undefined) {
		baseFields = [
			{
				type: 'input',
				name: 'ID',
				value: workupId,
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
				type: 'input',
				name: 'Workup.ID',
				value: workup.Workup.ID,
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
			// {
			// 	type: 'input',
			// 	name: 'ValidDays',
			// 	value: workup.ValidDays,
			// 	prefix: {
			// 		classes: ['w-full  items-center justify-between']
			// 	},
			// 	attributes: {
			// 		type: 'text',
			// 		label: 'Valid Days',
			// 		id: 'recipient_id',
			// 		classes: ['form-input rounded my-2']
			// 	}
			// },
			//
			// {
			// 	type: 'input',
			// 	name: 'CreatedAt',
			// 	value: new Date().toISOString().split('T')[0],
			// 	prefix: {
			// 		classes: ['w-full items-center justify-between']
			// 	},
			// 	attributes: {
			// 		type: 'date',
			// 		label: 'Requested Date',
			// 		id: 'recipient_id',
			// 		readonly: true,
			// 		classes: ['form-input rounded my-2']
			// 	}
			// },
			// {
			// 	type: 'input',
			// 	name: 'ExpectedDate',
			// 	value: workup.ExpectedDate === '0001-01-01' ? '' : workup.ExpectedDate,
			// 	prefix: {
			// 		classes: ['w-full items-center justify-between']
			// 	},
			// 	attributes: {
			// 		type: 'date',
			// 		label: 'Expected Date',
			// 		id: 'recipient_id',
			// 		classes: ['form-input rounded my-2']
			// 	}
			// },
			// {
			// 	type: 'input',
			// 	name: 'ObtainedDate',
			// 	value: workup.ObtainedDate === '0001-01-01' ? '' : workup.ObtainedDate,
			// 	prefix: {
			// 		classes: ['w-full items-center justify-between']
			// 	},
			// 	attributes: {
			// 		type: 'date',
			// 		label: 'Obtained Date',
			// 		id: 'recipient_id',
			// 		classes: ['form-input rounded my-2']
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
				values = deepen(values);
				console.log(values);
				updatePersonWorkup({ input: values }).then((result) => {
					console.log(result);
					alert('Saved =>' + result.data.updatePersonWorkup.ID);
					// goto('/patients/view/' + $recipientId + '/workups');
				});
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

	if (workupId != '') {
		const result = query(
			operationStore(GetPersonWorkupDocument, {
				id: workupId
			})
		).subscribe(({ data }) => {
			if (data?.getPersonWorkup) {
				workup = data?.getPersonWorkup;
				console.log(workup.Results);
				// for (let [i, results] of workup.Results) {
				// 	if (!i.startsWith('Results.')) {
				// 		i = 'Results.' + i;
				// 	}
				// 	values[i] = results;
				// }
				Object.entries(workup.Results).forEach(([key, value]) => {
					if (!key.startsWith('Results.')) {
						key = 'Results.' + key;
					}
					values[key] = value;
				});
				console.log(values);
			}
		});
	}
</script>

<div class="flex h-full flex-wrap p-2 px-8">
	{#if formSet}
		<form class="w-full rounded " on:submit|preventDefault={onSubmit}>
			{#if i === 0}
				<div class="my-8 text-xl font-bold capitalize">
					{workup?.Details?.Name?.toString().toLowerCase()} For {$recipient.FirstName}
				</div>
			{/if}
			<div class="flex w-full flex-col items-center justify-between">
				<Field inline={workup?.Details?.Inline ?? false} bind:isValidForm bind:values {fields} />
				<button class="self-end rounded bg-green-400 py-2 px-4 uppercase text-white" type="submit"
					>Save
				</button>
			</div>
		</form>
	{:else}
		Loading...
	{/if}
</div>
