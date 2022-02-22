<script lang="ts">
	import Social from './_social.svelte';

	let socialList = [null];

	function add() {
		socialList[socialList.length] = null;
	}

	function Save() {
		console.log(socialList);
		socialList.forEach((list) => {
			list.onSubmit();
		});
	}
</script>

<div class="w-full">
	{#each socialList as _, i}
		<Social id="Social{i}" others={socialList.length} bind:this={socialList[i]} />
	{/each}
	<div class="mx-auto w-1/2 ">
		<button class="float-right m-4 bg-green-400 p-4" on:click={Save}>Save All</button>
		<button class="float-right m-4 bg-green-400 p-4" on:click={add}>Add</button>
	</div>
</div>
