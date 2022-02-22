<script lang="ts">
	import History from './_history.svelte';

	let historyList = [null];

	function add() {
		historyList[historyList.length] = null;
	}

	function Save() {
		console.log(historyList);
		historyList.forEach((list) => {
			list.onSubmit();
		});
	}
</script>

<div class="w-full">
	{#each historyList as _, i}
		<History {i} id="History{i}" others={historyList.length} bind:this={historyList[i]} />
	{/each}
	<div>
		<button class="float-right m-4 bg-green-400 p-4" on:click={Save}>Save All</button>
		<button class="float-right m-4 bg-green-400 p-4" on:click={add}>Add</button>
	</div>
</div>
