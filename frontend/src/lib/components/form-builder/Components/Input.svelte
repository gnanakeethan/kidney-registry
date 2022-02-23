<script>
	import { afterUpdate, createEventDispatcher } from 'svelte';
	import clsx from 'clsx';

	import { isRequired, scanValue } from '../lib/helpers';

	// Declar variables.
	export let field = {};
	const defaultAttributes = {
		type: 'text',
		id: '',
		classes: '',
		min: null,
		max: null,
		step: null,
		autocomplete: 'off',
		placeholder: '',
		disabled: false,
		readonly: false
	};
	const fieldAttributes = field.attributes ? field.attributes : {};
	field.attributes = { ...defaultAttributes, ...fieldAttributes };

	let classe = null;
	let defaulClasses = null;

	// Dispatch.
	const dispatch = createEventDispatcher();

	// Change value field.
	function onChangerValue(event) {
		dispatch('changeValue', {
			name: field.name,
			value: scanValue(field.attributes.type, event.target.value)
		});
	}

	// Lifecycle.
	afterUpdate(() => {
		field.value = field.value == undefined ? null : field.value;
	});
</script>

<input
	autocomplete={field.attributes.autocomplete}
	class={clsx(field.attributes.classes)}
	class:border-red-400={field.validation.dirty}
	disabled={field.attributes.disabled}
	id={field.attributes.id}
	max={field.attributes.max}
	min={field.attributes.min}
	name={field.name}
	on:input={onChangerValue}
	placeholder={field.attributes.placeholder}
	readonly={field.attributes.readonly}
	required={isRequired(field)}
	size="10"
	step={field.attributes.step}
	type={field.attributes.type}
	value={field.value}
/>
