<script lang="ts">
	import { onMount } from 'svelte';

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
	export let isValidForm = true;
	export let values;
	let itemsField = [];
	$: listFields = itemsField;
	// Change values.
	const changeValueHander = async (event) => {
		values = {
			...values,
			[event.detail.name]: event.detail.value
		};
		let mylist = await Promise.all(
			listFields.map(async (field) => {
				if (field.name == event.detail.name) {
					field.validation.dirty = true;
					field.value = event.detail.value;
				} else {
					return field;
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
		const dirty = mylist.find((item: { validation: { dirty: boolean } }) => {
			if (item.validation) {
				return item.validation.dirty === true;
			}
		});
		isValidForm = !dirty;
		itemsField = mylist;
		console.log(itemsField);
		console.log(isValidForm);
	};

	// Lifecycle.
	onMount(async () => {
		const mylist = await Promise.all(
			fields.map(async (field) => {
				if (
					values[field.name] !== undefined &&
					values[field.name] !== null &&
					values[field.name] !== ''
				) {
					field.value = values[field.name];
				}
				values = { ...values, [field.name]: field.value };
				if (field.preprocess) {
					const fnc = field.preprocess;
					field = await preprocessField(field, fields, values);
				}
				field = await validate(field);
				console.log(field);
				values[`${field.name}`] = field.value;
				return field;
			})
		);
		const dirty = mylist.find((item) => {
			// if (item.validation) {
			// 	return item.validation.dirty === true;
			// }
		});
		isValidForm = !dirty;
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
		<div class="flex w-full flex-row items-center justify-between">
			{#if field.attributes}
				{#if field.attributes.label}
					<label for={field.id} class="label w-1/4">{field.attributes.label}</label>
				{/if}
				<div class="w-3/4">
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
				</div>
			{/if}
		</div>
		{#if field.description || field.dirty}
			<div class="flex w-full flex-row">
				<div class="w-1/2">&nbsp;</div>
				<div class="flex w-1/2 flex-col">
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
						{#if field.dirty && field.validation.errors.length > 0}
							{#each field.validation.errors as error}
								<Message {error} messages={field.messages ? field.messages : []} />
							{/each}
						{/if}
					{/if}
				</div>
			</div>
		{/if}
		<!-- Field -->
	</Tag>
{/each}
