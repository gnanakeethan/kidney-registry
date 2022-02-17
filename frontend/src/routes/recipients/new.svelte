<script lang="ts">
	import { get } from 'svelte/store';
	import Field from '../../lib/components/form-builder/Components/Field.svelte';
	import { valuesForm } from '../../lib/components/form-builder/lib/stores';

	const fields = [
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

<div class="p-2">
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
