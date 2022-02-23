<script lang="ts">
	import clsx from 'clsx';
	import { afterUpdate, createEventDispatcher } from 'svelte';

	import { isRequired, scanValue } from '../lib/helpers';

	// Declar variables.
	export let field: { attributes: object; name: string; value: object } = {};
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

	interface Item {
		x: number;
		y: number;

		data: {
			description: string;
		};
	}

	let x,
		y = 0;
	let items: Item[] = [];

	function mouseHandler(e) {
		const rect = e.currentTarget.getBoundingClientRect();
		x = e.clientX - rect.x;
		y = e.clientY - rect.y;
		items = [
			...items,
			{
				x: x,
				y: y,
				data: {
					description: ''
				}
			}
		];
	}

	function removeItem(i: number) {
		items.splice(i, 1);
	}
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
	step={field.attributes.step}
	type={field.attributes.type}
	value={field.value}
/>
<div>
	<div class="relative cursor-crosshair">
		<img on:click={mouseHandler} class="z-5 grayscale" src={field.attributes.image} alt="Svelte" />
		{#each items as item, i}
			<div class="absolute z-10 m-4 text-white" style="top:{item.y}px;left:{item.x}px">
				<div class="relative flex h-3 w-3">
					<div class="relative inline-flex h-1  w-1 rounded-full bg-red-700" />
					<div
						class="absolute -left-1 -top-1 h-3 w-3 animate-ping rounded-full bg-red-400 opacity-75"
					/>
				</div>
				<div class="absolute left-2 top-2">
					<div>
						<textarea
							placeholder="Type here ..."
							class="relative mx-auto rounded border-2   indent-2 text-sm text-black"
							bind:value={item.data.description}
						/>
						<div
							on:click={removeItem(i)}
							class="absolute -top-1 -right-2 h-4 w-4 rounded-full bg-red-500 text-center text-xs text-white"
						>
							X
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div>
		X : {x}
		<br /> Y : {y}
	</div>
	{#each items as item}
		<div>Test{item.x} {item.y} {item.data.description}</div>
	{/each}
</div>
