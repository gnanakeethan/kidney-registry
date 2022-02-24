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
	function onChangedValue(event) {
		dispatch('changeValue', {
			name: field.name,
			value: items
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

	let x = 0;
	let y = 0;
	let items: Item[] = [];
	$: console.log(items);
	if (field.value !== undefined || field.value !== {}) {
		if (field.value[0].x !== undefined) {
			items = field.value as Item[];
		}
	}

	function mouseHandler(e) {
		const rect = e.currentTarget.getBoundingClientRect();
		x = e.clientX - rect.x;
		y = e.clientY - rect.y;
		console.log(items);
		let itemItems = [
			...items,
			{
				x: x,
				y: y,
				data: {
					description: ''
				}
			} as Item
		];
		items = itemItems;
		console.log(items);
		console.log(itemItems);
	}

	function removeItem(i: number) {
		items.splice(i, 1);
		items = items;
	}
</script>

<div>
	<div class="relative cursor-crosshair">
		<img alt="Svelte" class="grayscale" on:click={mouseHandler} src={field.attributes.image} />
		{#each items as item, i}
			<div class=" absolute text-white" style="top:{item.y}px;left:{item.x}px">
				<div class="relative flex h-3 w-3">
					<div class="relative inline-flex h-1  w-1 rounded-full bg-red-700" />
					<div
						class="absolute -left-1 -top-1 h-3 w-3 animate-ping rounded-full bg-red-400 opacity-75"
					/>
				</div>
				<button
					on:click={() => removeItem(i)}
					class="absolute -top-1 -right-2 h-4 w-4 rounded-full bg-red-500 text-center text-xs text-white"
					>X</button
				>
				<div class="left-2 top-2">
					<div>
						<div class="bg-blue-500 px-4 font-bold text-white">
							{i + 1}
						</div>
						<textarea
							on:change={onChangedValue}
							placeholder="Type here ..."
							class="relative mx-auto rounded border-2   indent-2 text-sm text-black"
							bind:value={item.data.description}
						/>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="flex flex-col">
		{#each items as item, i}
			<div class="m-1 flex flex-row justify-between rounded border border-gray-300 p-2">
				<div class="w-11/12">
					{i + 1}:
					<textarea
						placeholder="Type here ..."
						rows="3"
						on:change={onChangedValue}
						class="w-full flex-grow rounded border-2 indent-2 text-sm text-black"
						bind:value={item.data.description}
					/>
				</div>
				<button
					on:click={() => removeItem(i)}
					class=" h-4 w-4 rounded-full bg-red-500 text-center text-xs text-white">X</button
				>
			</div>
		{/each}
	</div>
</div>
