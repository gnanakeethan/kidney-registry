<div class='flex items-start'>
	<div class='flex items-center h-5'>
		<input id={name}
		       name={name}
		       type='checkbox'
		       bind:checked={checked}
		       class='focus:ring-0 h-4 w-4 text-green-400/80 border-gray-300 rounded'>
	</div>
	<div class='ml-3 text-sm '>
		<label for={name} class='font-medium text-light-black'>{label}</label>
	</div>
</div>
<script>
	export let name = '';
	export let label = '';
	export let checked = false;
</script>
