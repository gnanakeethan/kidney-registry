<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import Field from '$lib/components/form-builder/Components/Field.svelte';
	import { recipient } from '$lib/state/recipient';
	import { activeUrl } from '$lib/state/SidebarStore';

	let fields = [];
	let message = '';
	let values = {};
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
				name: 'Complaints', // required
				value: '', // optional
				attributes: {
					id: 'id-field', // required
					classes: 'form-textarea rounded w-full my-3', // optional
					label: 'Complaints', // optional
					disabled: false, // optional
					readonly: false, // optional
					rows: null, // optional
					cols: null // optional
				}
			},
			{
				type: 'textarea', // required
				name: 'RenalBiopsies', // required
				value: '', // optional
				attributes: {
					id: 'id-field', // required
					classes: 'form-textarea rounded w-full my-3', // optional
					label: 'Renal Biopsies', // optional
					disabled: false, // optional
					readonly: false, // optional
					rows: null, // optional
					cols: null // optional
				}
			},
			{
				type: 'textarea', // required
				name: 'CaseStatus', // required
				value: '', // optional
				attributes: {
					id: 'id-field', // required
					classes: 'form-textarea rounded w-full my-3', // optional
					label: 'Case Status', // optional
					disabled: false, // optional
					readonly: false, // optional
					rows: null, // optional
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

	function onSubmit() {
		console.log(values);
		console.log(isValidForm);
		if (isValidForm) {
			values = deepen(values);
			console.log(values);
			message = 'Saving Data....';
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

<div class="flex h-full flex-wrap bg-gradient-to-b from-blue-50 to-stone-50 p-2">
	{#if formSet}
		<form
			class="mx-auto my-auto rounded border border-neutral-300 p-4 shadow-2xl md:w-1/2"
			on:submit|preventDefault={onSubmit}
		>
			<div class="text-xl font-bold">History Record For {$recipient.FirstName}</div>
			<Field bind:isValidForm bind:values {fields} />
			{message}
			<button
				class="float-right mt-4 rounded bg-green-400 py-2 px-4 uppercase text-white"
				type="submit"
			>
				Add Followup
			</button>
		</form>
	{:else}
		Loading...
	{/if}
</div>
