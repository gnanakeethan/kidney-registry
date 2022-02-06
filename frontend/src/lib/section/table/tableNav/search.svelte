<script lang="ts">
	import SearchIcon from '~icons/sustain/search';
</script>

<div class=" text-medium-black relative mx-auto mr-0">
	<input
		class="border-1 border-dark-gray bg-light-gray h-10 rounded p-2 px-5  text-xs focus:outline-none"
		name="search"
		placeholder="Search"
		type="search"
	/>
	<button class="absolute right-0 top-0 mt-3 mr-4" type="submit">
		<SearchIcon class="text-md" />
	</button>
</div>
