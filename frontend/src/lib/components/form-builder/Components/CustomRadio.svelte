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
			const valuesRef = values.filter((item, index) => {
				return event.target.value === item.value;
			});
			console.log(valuesRef);

			dispatch('changeValue', {
				name: field.name,
				value: valuesRef[0]?.value
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
						value: i.value
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

<div class="my-2 flex flex-row items-center">
	<div class={fieldLabelClasses}>{field.attributes.fieldName}</div>
	{#each field.extra.items as item, i}
		<div
			class:form-check-inline={field.extra.aligned === 'inline'}
			class:form-check={field.extra.aligned !== 'inline'}
			class="inline p-4"
		>
			<input
				type="radio"
				class={classes}
				value={item.value}
				name={item.name}
				id={item.id}
				checked={item.value === field.value}
				on:input={onChangeValue}
			/>
			<label class={labelClasses} for={item.id}>{item.title}</label>
		</div>
	{/each}
</div>

<style>
	input[type='radio']:checked + label.labelStyle {
		@apply bg-green-500 text-white;
	}
</style>
