<script>
	export let label = '';
	export let name = '';
	export let placeholder = '';
</script>

<div class="p-3 font-bold">
	<label class="text-medium-black text-xs" for={name}>{label}</label>
	<input
		class="text-light-black border-dark-gray focus:ring-light-green focus:border-light-green bg-light-gray  w-full rounded-md text-xs"
		id={name}
		{placeholder}
		type="text"
	/>
</div>
