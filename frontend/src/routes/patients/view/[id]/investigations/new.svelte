<script>
	import { operationStore, query } from '@urql/svelte';
	import { ListInvestigationsDocument } from '../../../../../lib/graphql/generated';
	import GenericInvestigation from './_investigation-generic.svelte';
	import { goto } from '$app/navigation';
	import { recipientId } from '../../../../../lib/state/recipient';

	const investigations = operationStore(ListInvestigationsDocument);
	query(investigations);
	let investigationId = '';
	$: if (investigationId) {
		const backup = investigationId;
		investigationId = '';
		// setTimeout(()  => {
		investigationId = backup;
		// }, 100);
	}
	let currentInvestigation = 0;
	let examsLength = 0;
	investigations.subscribe((data) => {
		examsLength = data?.data?.listInvestigations.items.length;
		let exam1 = data?.data?.listInvestigations.items[0];
		investigationId = exam1?.ID;
		currentInvestigation = 1;
	});

	function Clear() {
		investigationId = '';
	}

	function Next() {
		console.log(currentInvestigation);
		currentInvestigation++;
		if (currentInvestigation > examsLength) {
			currentInvestigation = 1;
		}
		investigationId = '';

		console.log(investigations);
		setTimeout(() => {
			investigationId = investigations.data.listInvestigations.items[currentInvestigation - 1].ID;
		}, 200);
	}

	function Investigate() {
		goto('/patients/view/' + $recipientId + '/investigations/new');
	}
</script>

{#if $investigations.fetching}
	<p>Loading...</p>
{:else if $investigations.error}
	<p>Oh no... {$investigations.error.message}</p>
{:else}
	Select Investigation
	<select class="form-select" name="" id="" bind:value={investigationId}>
		{#each $investigations.data.listInvestigations.items as investigation}
			<!--{investigation.Details.Name} <br>-->
			<option disabled={investigationId !== ''} value={investigation.ID}
				>{investigation.Details.Name}</option
			>
		{/each}
	</select>
	<button on:click={() => Clear()} class="bg-yellow-400 p-4 m-2">Clear Selection</button>
	<button on:click={() => Next()} class="bg-green-400 p-4 m-2">Next</button>
	<button on:click={() => Investigate()} class="bg-green-400 p-4 m-2">Investigate</button>
{/if}
{#if investigationId}
	<div class="w-full px-8">
		<GenericInvestigation bind:investigationId />
	</div>
{/if}
<!--<GeneralInvestigation bind:investigationId />-->
