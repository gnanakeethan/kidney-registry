<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import Field from '$lib/components/form-builder/Components/Field.svelte';
	import { valuesForm } from '$lib/components/form-builder/lib/stores';
	import { activeUrl } from '$lib/state/SidebarStore';
	import { get } from 'svelte/store';
	import { FormValues } from '../../../../../lib/components/form-builder/lib/stores';

	const fields = [
		{
			type: 'input',
			name: 'firstname',
			value: 'sd',
			attributes: {
				type: 'text',
				label: 'Username',
				id: 'firstname',
				classes: ['form-input'],
				placeholder: 'Tap your first name'
			},
			rules: ['required', 'min:6'],
			messages: {
				required: 'Firstname field is required!',
				min: 'First name field must have more that 6 caracters!'
			}
		},
		{
			type: 'customcheckbox', // required
			name: 'name-field', // required
			attributes: {
				fieldName: 'Field',
				fieldLabelClasses: '',
				id: 'id-field', // required
				classes: ['p-2'], // optional
				labelClasses: ['p-2'], // optional
				label: '' // optional
			},
			extra: {
				items: [
					{
						value: 1,
						name: 'checkbox-1',
						title: 'checkbox 1'
					},
					{
						value: 2,
						name: 'checkbox-2',
						title: 'checkbox 2'
					}
				]
			},
			rules: [], // optional
			preprocess: (field, fields, values) => {
				// Hook to alter current field
				return field;
			}
		}
	];

	let message = '';
	let values = {};
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
		if (!data.valid) {
			values = data.values;
			message = 'Congratulation! now your form is valid';
		} else {
			message = 'Your form is not valid!';
		}
	}
</script>

<div class="bg-red-50 p-2">
	<div class="font-raleway text-3xl font-bold">New Recipient</div>
	<h3>{message}</h3>
	<form class="custom-form" on:submit|preventDefault={onSubmit}>
		<Field {fields} />
		<button class="btn btn-primary" type="submit">Submit</button>
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
