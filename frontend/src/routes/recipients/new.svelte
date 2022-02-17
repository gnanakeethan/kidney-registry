<script lang="ts">
	import { beforeNavigate } from '$app/navigation';
	import Field from '$lib/components/form-builder/Components/Field.svelte';
	import { activeUrl } from '$lib/state/SidebarStore';
	import { getContext, setContext } from 'svelte';
	import { get, writable, Writable } from 'svelte/store';
	import { FormValues } from '../../lib/components/form-builder/lib/stores';

	const fields = [
		{
			type: 'input',
			name: 'firstsga',
			value: '',
			attributes: {
				type: 'text',
				label: 'First Name',
				id: 'firstname',
				classes: ['form-input'],
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
			name: 'firstsfa',
			value: '',
			attributes: {
				type: 'text',
				label: 'First Name',
				id: 'firstname',
				classes: ['form-input'],
				placeholder: "Patient's First Name"
			},
			rules: ['required', 'min:6'],
			messages: {
				required: 'Firstname field is required!',
				min: 'First name field must have more that 6 caracters!'
			}
		}
	];
	const fields2 = [
		{
			type: 'input',
			name: 'firstfdef',
			value: '',
			attributes: {
				type: 'text',
				label: 'First Name',
				id: 'firstname',
				classes: ['form-input'],
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
			name: 'firstsub',
			value: '',
			attributes: {
				type: 'text',
				label: 'First Name',
				id: 'firstname',
				classes: ['form-input'],
				placeholder: "Patient's First Name"
			},
			rules: ['required', 'min:6'],
			messages: {
				required: 'Firstname field is required!',
				min: 'First name field must have more that 6 caracters!'
			}
		}
	];

	let message = '';
	let values = {};
	export let contextKey = 'test';
	let valuesForm: Writable<FormValues> = writable<FormValues>({
		valid: true,
		values: {}
	});
	$: console.log(contextKey);

	$: contextP = getContext(contextKey);
	$: console.log($contextP);
	$: if (contextP !== undefined) {
		console.log($contextP);
		valuesForm = getContext(contextKey) as Writable<FormValues>;
	} else {
		setContext('test1', valuesForm);
		setContext('test2', valuesForm);
	}

	function log() {
		console.log($contextP);
	}

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
		log();
		const data = get(valuesForm);
		if (!data.valid) {
			values = data.values;
			message = 'Congratulation! now your form is valid';
		} else {
			message = 'Your form is not valid!';
		}
	}
</script>

<div class="h-full bg-gradient-to-b from-blue-50 to-stone-50 p-2">
	<h3>{message}</h3>
	<form
		class="custom-form rounded-xl border border-neutral-500 p-4 py-8"
		on:submit|preventDefault={onSubmit}
	>
		<input bind:value={contextKey} class="form-input" type="text" />
		<Field contextKey={'test1'} {fields} />
		<Field contextKey={'test2'} fields={fields2} />
		<button class="rounded bg-green-400 p-4 text-lg uppercase" type="submit">Save</button>
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
