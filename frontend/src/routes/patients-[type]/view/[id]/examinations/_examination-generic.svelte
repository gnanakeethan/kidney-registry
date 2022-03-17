<script lang="ts">
	import { beforeNavigate, goto } from '$app/navigation';
	import Field from '$lib/components/form-builder/Components/Field.svelte';
	import { recipient } from '$lib/state/recipient';
	import { activeUrl } from '$lib/state/SidebarStore';
	import { mutation, operationStore, query } from '@urql/svelte';
	import { createEventDispatcher } from 'svelte';
	import {
		Examination,
		GetExaminationDocument,
		NewPersonExaminationDocument,
		NewPersonExaminationMutation
	} from '../../../../../lib/graphql/generated';

	const newPersonExamination = mutation<NewPersonExaminationMutation>({
		query: NewPersonExaminationDocument
	});
	export let examinationId = '';
	let examination: Examination;
	let formSet = false;
	if (examinationId != '') {
		const result = query(
			operationStore(GetExaminationDocument, {
				id: examinationId
			})
		).subscribe(({ data }) => {
			if (data?.getExamination) {
				examination = data?.getExamination;
				console.log(examination);
				formSet = true;
			}
		});
	}
	let message = '';
	let values = {};
	export let i = 0;
	export let others = 1;

	let baseFields = [];
	let fields = [];
	$: if (examination !== undefined) {
		fields = [...baseFields];
		examination.Procedure.fields.forEach((field) => {
			if (!field.name.startsWith('Results.')) {
				field.name = 'Results.' + field.name;
			}
			fields = [...fields, field];
		});
	}

	$: if (formSet && examination !== undefined && examination.ID !== undefined) {
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
				name: 'Examination.ID',
				value: examination.ID,
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

	// Dispatch.
	const dispatch = createEventDispatcher();

	export async function onSubmit() {
		if (isValidForm) {
			try {
				console.log(values);
				values = deepen(values);
				console.log(values);
				newPersonExamination({ input: values }).then((result) => {
					console.log(result);
					alert('Saved =>' + result.data.createPersonExamination.ID);
					goto('/patients-recipient/view/' + $recipient.ID);
				});
			} catch (e) {
				alert('Please fill all the required fields');
				message = 'Please fill all the required fields';
			}
			// message = 'Saving Data....';
		} else {
			message = 'Please fill all the required fields';
		}
		return true;
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
					{examination?.Details?.Name?.toString().toLowerCase()} For {$recipient.FirstName}
				</div>
			{/if}
			<div class="flex w-full flex-col items-center justify-between">
				<Field
					inline={examination?.Details?.Inline ?? false}
					bind:isValidForm
					bind:values
					{fields}
				/>
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
