<script lang="ts">
	import { goto } from '$app/navigation';
	import { recipientId } from '../../../../../../lib/state/recipient';
	import Social from './_social.svelte';

	function GoToNext() {
		goto('/patients-recipient/view/' + $recipientId + '/examinations/new');
	}

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
		<Social {i} id="Social{i}" others={socialList.length} bind:this={socialList[i]} />
	{/each}
	<div class="mx-auto w-full ">
		<button class="float-right m-4 bg-green-400 p-4" on:click={Save}>Save All</button>
		<button class="float-right m-4 bg-green-400 p-4" on:click={add}>Add</button>
		<button class="float-right m-4 bg-yellow-400 p-4" on:click={GoToNext}>Next</button>
	</div>
</div>
