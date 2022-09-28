<script lang="ts">
	import { goto } from '$app/navigation';
	import { recipientId } from '../../../../../../../lib/state/recipient';
	import Surgical from '../_surgical.svelte';

	function GoToNext() {
		goto('/patients-recipient/view/' + $recipientId + '/history/new/social');
	}

	let surgicalList = [null];

	function add() {
		surgicalList[surgicalList.length] = null;
	}

	function Save() {
		console.log(surgicalList);
		surgicalList.forEach((list) => {
			list.onSubmit();
		});
	}
</script>

<div class="w-full">
	{#each surgicalList as _, i}
		<Surgical {i} id="Surgical{i}" others={surgicalList.length} bind:this={surgicalList[i]} />
	{/each}
	<div class="mx-auto w-full ">
		<button class="float-right m-4 bg-green-400 p-4" on:click={Save}>Save All</button>
		<button class="float-right m-4 bg-green-400 p-4" on:click={add}>Add</button>
		<button class="float-right m-4 bg-yellow-400 p-4" on:click={GoToNext}>Next</button>
	</div>
</div>
