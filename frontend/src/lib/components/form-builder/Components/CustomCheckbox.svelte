<script>
	import { afterUpdate, createEventDispatcher, onMount } from 'svelte';
	import clsx from 'clsx';

	// Declar variables.
	export let field = {};
	let values = [];
	const defaultAttributes = {
		classes: ''
	};
	let classes = '';
	let labelClasses = '';
	let defaultClasses = '';
	let fieldLabelClasses = 'font-extrabold tracking-wide';

	// Dispatch.
	const dispatch = createEventDispatcher();

	// Change value.
	function onChangeValue(event) {
		if (values.length > 0) {
			values.map((item, index) => {
				if (item.name === event.target.name) {
					values[index].checked = event.target.checked;
				}
			});
			dispatch('changeValue', {
				name: field.name,
				value: values
			});
		}
	}

	// Insert default
	onMount(() => {
		if (field.extra.items.length > 0) {
			field.extra.items.map((i) => {
				values = [
					...values,
					{
						name: i.name,
						value: i.value,
						checked: i.checked ? i.checked : false
					}
				];
			});
		}
	});

	// Lifecycle.
	afterUpdate(() => {
		field.value = field.value === undefined ? null : field.value;
		field.attributes = { ...defaultAttributes, ...field.attributes };
		classes = clsx(field.attributes.classes, defaultClasses);
		labelClasses = clsx(field.attributes.labelClasses, labelClasses);
		fieldLabelClasses = clsx(field.attributes.fieldLabelClasses, fieldLabelClasses);
	});
</script>

<div class="flex flex-row items-center ">
	<div class={fieldLabelClasses}>{field.attributes.fieldName}</div>
	{#each field.extra.items as item, i}
		<div
			class:form-check-inline={field.extra.aligned === 'inline'}
			class:form-check={field.extra.aligned !== 'inline'}
			class="p-4"
		>
			<input
				type="checkbox"
				class={classes}
				value={item.value}
				name={item.name}
				id={item.name}
				checked={item.checked ? item.checked : false}
				on:input={onChangeValue}
			/>
			<label class={labelClasses} for={item.name}>{item.title}</label>
		</div>
	{/each}
</div>

<style>
	input[type='checkbox'] {
		display: none;
	}

	input[type='checkbox']:checked + label {
		@apply bg-green-500 text-white;
	}
</style>
