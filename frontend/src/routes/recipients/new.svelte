<script>
	import { get } from 'svelte/store';
	import { Field, valuesForm } from 'svelte-formly';

	const fields = [
		{
			type: 'meter',
			name: 'color',
			attributes: {
				min: '2',
				max: '100',
				low: '22',
				high: '66',
				optimum: '100',
				value: '5',
				label: 'Color',
				id: 'color',
				classes: ['class-field-color pl-4']
			}
		},
		{
			type: 'input',
			name: 'firstname',
			value: '',
			attributes: {
				type: 'text',
				label: 'Username',
				id: 'firstname',
				classes: ['form-control'],
				placeholder: 'Tap your first name'
			},
			rules: ['required', 'min:6'],
			messages: {
				required: 'Firstname field is required!',
				min: 'First name field must have more that 6 caracters!'
			}
		},
		{
			type: 'checkbox', // required
			name: 'name-field', // required
			attributes: {
				id: 'id-field', // required
				classes: [], // optional
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
		},
		{
			prefix: {
				classes: ['custom-form-group']
			},
			type: 'input',
			name: 'lastname',
			value: '',
			attributes: {
				type: 'text',
				id: 'lastname',
				placeholder: 'Tap your lastname',
				classes: ['form-control']
			},
			description: {
				classes: ['custom-class-desc'],
				text: 'Custom text for description'
			}
		},
		{
			type: 'input',
			name: 'email',
			value: '',
			attributes: {
				type: 'email',
				id: 'email',
				placeholder: 'Tap your email'
			},
			rules: ['required', 'email']
		},
		{
			type: 'radio',
			name: 'gender',
			extra: {
				items: [
					{
						id: 'female',
						value: 'female',
						title: 'Female'
					},
					{
						id: 'male',
						value: 'male',
						title: 'Male'
					}
				]
			}
		},
		{
			type: 'select',
			name: 'city',
			value: 1,
			attributes: {
				id: 'city',
				label: 'City'
			},
			rules: ['required'],
			extra: {
				options: [
					{
						value: null,
						title: 'All'
					},
					{
						value: 1,
						title: 'Agadir'
					},
					{
						value: 2,
						title: 'Casablanca'
					}
				]
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
