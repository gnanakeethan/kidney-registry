<script lang="ts">
	import Medical from './_medical.svelte';

	let medicalList = [null];

	function add() {
		medicalList[medicalList.length] = null;
	}

	function Save() {
		console.log(medicalList);
		medicalList.forEach((list) => {
			list.onSubmit();
		});
	}
</script>

<div class="w-full">
	{#each medicalList as _, i}
		<Medical {i} id="Medical{i}" others={medicalList.length} bind:this={medicalList[i]} />
	{/each}
	<div class="">
		<button class="float-right m-4 bg-green-400 p-4" on:click={Save}>Save All</button>
		<button class="float-right m-4 bg-green-400 p-4" on:click={add}>Add</button>
	</div>
</div>
