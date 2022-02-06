<script>
	export let name = '';
	export let label = '';
	export let checked = false;
</script>

<div class="flex items-start">
	<div class="flex h-5 items-center">
		<input
			bind:checked
			class="h-4 w-4 rounded border-gray-300 text-green-400/80 focus:ring-0"
			id={name}
			{name}
			type="checkbox"
		/>
	</div>
	<div class="ml-3 text-sm ">
		<label class="text-light-black font-medium" for={name}>{label}</label>
	</div>
</div>
