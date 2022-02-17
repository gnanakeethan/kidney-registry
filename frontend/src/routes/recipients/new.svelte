<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import Field from '$lib/components/form-builder/Components/Field.svelte';
	import { recipientId } from '$lib/state/recipient';
	import { activeUrl } from '$lib/state/SidebarStore';
	import { get, writable, Writable } from 'svelte/store';
	import { FormValues } from '../../lib/components/form-builder/lib/stores';

	const fields = [
		{
			type: 'input',
			name: 'patient_identifier',
			value: $recipientId,
			prefix: {
				classes: ['flex flex-col items-center justify-between w-full py-2']
			},
			attributes: {
				type: 'text',
				label: 'Recipient ID',
				id: 'recipient_id',
				classes: ['form-input bg-gray-200 rounded w-full']
			},
			rules: ['required', 'min:6'],
			messages: {
				required: 'Firstname field is required!',
				min: 'First name field must have more that 6 caracters!'
			}
		},
		{
			type: 'input',
			name: 'first_name',
			value: '',
			prefix: {
				classes: ['flex flex-row items-center justify-between w-full py-2']
			},
			attributes: {
				type: 'text',
				label: 'First Name',
				id: 'firstname',
				classes: ['form-input rounded w-full'],
				placeholder: "Patient's First Name"
			},
			rules: ['required', 'min:6'],
			messages: {
				required: 'Firstname field is required!',
				min: 'First name field must have more that 6 caracters!'
			}
		},
		{
			type: 'input',
			name: 'last_name',
			value: '',
			prefix: {
				classes: ['flex flex-row items-center justify-between w-full py-2']
			},
			attributes: {
				type: 'text',
				label: 'Last Name',
				id: 'lastname',
				classes: ['form-input rounded w-full'],
				placeholder: "Patient's Last Name"
			},
			rules: ['required', 'min:6'],
			messages: {
				required: 'Lastname field is required!',
				min: 'Last name field must have more that 6 caracters!'
			}
		}
	];
	let message = '';
	let values = {};
	export let contextKey = 'test';
	let valuesForm: Writable<FormValues> = writable<FormValues>({
		valid: true,
		values: { test: 'test1' }
	});

	beforeNavigate(function (p1: { from: URL; to: URL | null; cancel: () => void }) {
		const data = get(valuesForm) as FormValues;
		if (!data.valid) {
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
		const data = get(valuesForm);
		if (data.valid) {
			values = data.values;
			message = 'Congratulation! now your form is valid';
		} else {
			message = 'Your form is not valid!';
		}
	}
</script>

<div class="h-full bg-gradient-to-b from-blue-50 to-stone-50 p-2">
	<form
		class="custom-form mx-auto my-auto w-1/2 rounded-xl border border-neutral-500 p-4"
		on:submit|preventDefault={onSubmit}
	>
		<div class="text-xl font-bold">New Recipient</div>
		<Field {fields} {valuesForm} />
		<button class=" m-8 rounded bg-green-400 py-2 px-4 text-lg uppercase" type="submit">
			Save
		</button>
	</form>
</div>

<style>
	.custom-form :global(.form-group) {
		padding: 10px;
		margin-bottom: 10px;
	}

	.custom-form :global(.custom-form-group) {
		padding: 10px;
		color: white;
		margin-bottom: 10px;
	}

	.custom-form :global(.class-description) {
	}
</style>
