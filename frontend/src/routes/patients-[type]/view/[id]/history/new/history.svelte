<script lang="ts">
	import { goto } from '$app/navigation';
	import { recipientId } from '../../../../../../lib/state/recipient';
	import History from './_history.svelte';

	function GoToNext() {
		goto('/patients-recipient/view/' + $recipientId + '/history/new/medical');
	}

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
		<button class="float-right m-4 bg-yellow-400 p-4" on:click={GoToNext}>Next</button>
	</div>
</div>
