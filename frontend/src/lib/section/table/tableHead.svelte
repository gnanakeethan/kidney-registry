<script lang="ts">
	export let head;
	import SortOrderIcon from '~icons/sustain/sort-order';
</script>

<th class="relative w-1/5 px-6 py-3">
	{head}
	<!-- svelte-ignore missing-declaration -->
	<span class="absolute translate-y-1/3  fill-current pl-2 text-xxs "><SortOrderIcon /></span>
</th>
