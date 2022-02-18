<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import Field from '$lib/components/form-builder/Components/Field.svelte';
	import { FormValues } from '$lib/components/form-builder/lib/stores';
	import { recipientId } from '$lib/state/recipient';
	import { activeUrl } from '$lib/state/SidebarStore';
	import { get, writable, Writable } from 'svelte/store';

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
			rules: ['required', 'minlen:6'],
			messages: {
				required: 'Firstname field is required!',
				minlen: 'First name field must have more that 6 characters!'
			}
		},
		{
			type: 'input',
			name: 'first_name',
			value: '',
			prefix: {
				classes: ['flex flex-col items-center justify-between w-full py-2']
			},
			attributes: {
				type: 'text',
				label: 'First Name',
				id: 'firstname',
				classes: ['form-input rounded w-full'],
				placeholder: "Patient's First Name"
			},
			rules: ['required', 'minlen:6'],
			messages: {
				required: 'Firstname field is required!',
				minlen: 'First name field must have more that 6 characters!'
			}
		},
		{
			type: 'input',
			name: 'last_name',
			value: '',
			prefix: {
				classes: ['flex flex-col items-center justify-between w-full py-2']
			},
			attributes: {
				type: 'text',
				label: 'Last Name',
				id: 'lastname',
				classes: ['form-input rounded w-full'],
				placeholder: "Patient's Last Name"
			},
			rules: ['required', 'minlen:6'],
			messages: {
				required: 'Lastname field is required!',
				minlen: 'Last name field must have more that 6 characters!'
			}
		},
		{
			type: 'input',
			name: 'dob',
			value: '',
			prefix: {
				classes: ['flex flex-col items-center justify-between w-full py-2']
			},
			attributes: {
				type: 'date',
				label: 'Date of Birth',
				id: 'dob',
				classes: ['form-input rounded w-full'],
				placeholder: "Patient's Date of Birth"
			}
		}
		//phonenumber
	];
	let message = '';
	let values = {};
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

<div class="flex h-full flex-wrap bg-gradient-to-b from-blue-50 to-stone-50 p-2">
	<form
		class="mx-auto my-auto rounded-xl border border-neutral-500 p-4 md:w-1/2"
		on:submit|preventDefault={onSubmit}
	>
		<div class="text-xl font-bold">New Patient</div>
		<Field {fields} {valuesForm} />
		<button
			class="float-right mt-4 rounded bg-green-400 py-2 px-4 uppercase text-white"
			type="submit"
		>
			Register Patient
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
