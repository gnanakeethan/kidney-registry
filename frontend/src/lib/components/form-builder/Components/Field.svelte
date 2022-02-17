<script lang="ts">
	import { FormValues } from '$lib/components/form-builder/lib/stores';
	import { getContext, onMount } from 'svelte';
	import { Writable } from 'svelte/store';

	import { preprocessField } from '../lib/helpers';
	import { validate } from '../Validation/index';
	import AutoComplete from './AutoComplete.svelte';
	import Checkbox from './Checkbox.svelte';
	import CustomCheckbox from './CustomCheckbox.svelte';
	import File from './File.svelte';
	import Input from './Input.svelte';
	import Message from './Message.svelte';
	import Radio from './Radio.svelte';
	import Select from './Select.svelte';

	// Import components.
	import Tag from './Tag.svelte';
	import Textarea from './Textarea.svelte';

	// Declar variables;
	export let fields = [];
	let isValidForm = true;
	let values = {};
	let itemsField = [];
	$: listFields = itemsField;

	export let contextKey = 'values';
	$: console.log(contextKey);
	$: valuesForm = getContext(contextKey) as Writable<FormValues>;
	// Change values.
	const changeValueHander = async (event) => {
		console.log(contextKey);
		values = {
			...values,
			[event.detail.name]: event.detail.value,
			touched: event.detail.name
		};
		let mylist = await Promise.all(
			listFields.map(async (field) => {
				if (field.name == event.detail.name) {
					field.value = event.detail.value;
				}
				if (field.preprocess) {
					const fnc = field.preprocess;
					field = await preprocessField(field, listFields, values);
					values[`${field.name}`] = field.value;
				}
				field = await validate(field);
				return field;
			})
		);
		console.log(mylist);
		const dirty = mylist.find((item: { validation: { dirty: boolean } }) => {
			if (item.validation) {
				return item.validation.dirty === true;
			}
		});
		isValidForm = !dirty;
		console.log($valuesForm);
		valuesForm.set({ values, valid: isValidForm });
		console.log($valuesForm);
		itemsField = mylist;
	};

	// Lifecycle.
	onMount(async () => {
		const mylist = await Promise.all(
			fields.map(async (field) => {
				values = { ...values, [field.name]: field.value };
				if (field.preprocess) {
					const fnc = field.preprocess;
					field = await preprocessField(field, fields, values);
				}
				field = await validate(field);
				values[`${field.name}`] = field.value;
				return field;
			})
		);
		const dirty = mylist.find((item) => {
			// if (item.validation) {
			// 	return item.validation.dirty === true;
			// }
		});
		isValidForm = dirty ? false : true;
		valuesForm.set(<FormValues>{ values: values, valid: isValidForm });
		itemsField = mylist;
	});
</script>

{#each listFields as field (field.name)}
	<Tag
		tag={field.prefix ? (field.prefix.tag ? field.prefix.tag : 'div') : 'div'}
		classes={field.prefix
			? field.prefix.classes
				? field.prefix.classes
				: 'form-group'
			: 'form-group'}
	>
		<!-- Label -->
		{#if field.attributes}
			{#if field.attributes.label}
				<label for={field.id} class="label">{field.attributes.label}</label>
			{/if}
		{/if}

		<!-- Field -->
		{#if field.type === 'input'}
			<Input {field} on:changeValue={changeValueHander} />
		{:else if field.type === 'textarea'}
			<Textarea {field} on:changeValue={changeValueHander} />
		{:else if field.type === 'select'}
			<Select {field} on:changeValue={changeValueHander} />
		{:else if field.type === 'autocomplete'}
			<AutoComplete {field} on:changeValue={changeValueHander} on:onSelectItem />
		{:else if field.type === 'radio'}
			<Radio {field} on:changeValue={changeValueHander} />
		{:else if field.type === 'checkbox'}
			<Checkbox {field} on:changeValue={changeValueHander} />
		{:else if field.type === 'customcheckbox'}
			<CustomCheckbox {field} on:changeValue={changeValueHander} />
		{:else if field.type === 'file'}
			<File {field} on:changeValue={changeValueHander} />
		{/if}

		<!-- Description -->
		{#if field.description}
			{#if field.description.text}
				<Tag
					tag={field.description.tag}
					classes={field.description.classes ? field.description.classes : ''}
				>
					{field.description.text}
				</Tag>
			{/if}
		{/if}

		<!-- Error messages -->
		{#if !isValidForm}
			{#if field.validation.errors.length > 0}
				{#each field.validation.errors as error}
					<Message {error} messages={field.messages ? field.messages : []} />
				{/each}
			{/if}
		{/if}
	</Tag>
{/each}
