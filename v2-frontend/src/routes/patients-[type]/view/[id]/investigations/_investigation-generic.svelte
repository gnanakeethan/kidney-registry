<script lang='ts'>
	import { beforeNavigate, goto } from '$app/navigation';
	import Field from '$lib/components/form-builder/Components/Field.svelte';
	import { recipient, recipientId } from '$lib/state/recipient';
	import { activeUrl } from '$lib/state/SidebarStore';
	import { mutation, operationStore, query } from '@urql/svelte';
	import {
		GetInvestigationDocument,
		Investigation,
		NewPersonInvestigationDocument,
		NewPersonInvestigationMutation
	} from '../../../../../lib/graphql/generated';

	const newPersonInvestigation = mutation<NewPersonInvestigationMutation>({
		query: NewPersonInvestigationDocument
	});
	export let investigationId = '';
	let investigation: Investigation;

	if (investigationId != '') {
		const result = query(
			operationStore(GetInvestigationDocument, {
				id: investigationId
			})
		).subscribe(({ data }) => {
			if (data?.getInvestigation) {
				investigation = data?.getInvestigation.node;
				console.log(investigation);
			}
		});
	}
	let message = '';
	let values = {};
	export let i = 0;
	export let others = 1;
	$: formSet = !!$recipient.ID && !!investigation?.ID;
	let baseFields = [];
	let fields = [];
	$: if (investigation !== undefined) {
		fields = [...baseFields];
		investigation.Procedure.fields.forEach((field) => {
			if (!field.name.startsWith('Results.')) {
				field.name = 'Results.' + field.name;
			}
			fields = [...fields, field];
		});
	}

	$: if (formSet && investigation !== undefined && investigation.ID !== undefined) {
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
			},
			{
				type: 'input',
				name: 'Investigation.ID',
				value: investigation.ID,
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
				name: 'ValidDays',
				value: investigation.Details.ValidDays,
				prefix: {
					classes: ['']
				},
				attributes: {
					type: 'text',
					label: 'Valid Days',
					id: 'recipient_id',
					classes: ['form-input rounded my-2']
				}
			},

			{
				type: 'input',
				name: 'CreatedAt',
				value: new Date().toISOString().split('T')[0],
				prefix: {
					classes: ['']
				},
				attributes: {
					type: 'date',
					label: 'Requested Date',
					id: 'recipient_id',
					readonly: true,
					classes: ['form-input rounded my-2']
				}
			},
			{
				type: 'input',
				name: 'ExpectedDate',
				value: '',
				prefix: {
					classes: ['']
				},
				attributes: {
					type: 'date',
					label: 'Expected Date',
					id: 'recipient_id',
					classes: ['form-input rounded my-2']
				}
			},
			{
				type: 'input',
				name: 'ObtainedDate',
				value: '',
				prefix: {
					classes: ['']
				},
				attributes: {
					type: 'date',
					label: 'Obtained Date',
					id: 'recipient_id',
					classes: ['form-input rounded my-2']
				}
			}
		];
	}
	let isValidForm = false;

	beforeNavigate(function(p1: { from: URL; to: URL | null; cancel: () => void }) {
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
				console.log(values);
				values = deepen(values);
				console.log(values);
				newPersonInvestigation({ input: values }).then((result) => {
					console.log(result);
					alert('Saved =>' + result.data.createPersonInvestigation.ID);
					goto('/patients-recipient/view/' + $recipientId + '/investigations');
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

<div class='flex h-full flex-wrap p-2'>
	{#if formSet}
		<form class='w-full rounded ' on:submit|preventDefault={onSubmit}>
			{#if i === 0}
				<div class='my-8 text-xl font-bold capitalize'>
					{investigation?.Details?.Name?.toString()} For {$recipient.FirstName}
				</div>
			{/if}
			<div class='flex flex-wrap items-center justify-between'>
				<Field
					inline={investigation?.Details?.Inline ?? true}
					bind:isValidForm
					bind:values
					{fields}
				/>
				{message}
				<button class='self-end rounded bg-green-400 py-2 px-4 uppercase text-white' type='submit'
				>Save
				</button>
			</div>
		</form>
	{:else}
		Loading...
	{/if}
</div>
