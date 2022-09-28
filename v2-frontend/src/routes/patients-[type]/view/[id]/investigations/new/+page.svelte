<script>
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import { operationStore, query } from '@urql/svelte';
	import { ListInvestigationsDocument } from '../../../../../../lib/graphql/generated';
	import GenericInvestigation from '../_investigation-generic.svelte';
	import { goto } from '$app/navigation';
	import { recipientId } from '../../../../../../lib/state/recipient';

	const investigations = operationStore(ListInvestigationsDocument);
	query(investigations);
	export let investigationId = '';
	export let sub = false;

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
		investigationId = exam1?.node.ID;
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
			investigationId = investigations.data.listInvestigations.items[currentInvestigation - 1].node.ID;
		}, 200);
	}

	function Followup() {
		goto('/patients-recipient/view/' + $recipientId + '/followups/create');
	}

	export function idChanged(invId) {
		investigationId = '';
		setTimeout(() => {
			investigationId = invId;
		}, 100);
	}
</script>

{#if $investigations.fetching}
	<p>Loading...</p>
{:else if $investigations.error}
	<p>Oh no... {$investigations.error.message}</p>
{:else}
	<div class='flex flex-wrap'>
		{#each $investigations.data.listInvestigations.items as investigation}
			<!--{investigation.Details.Name} <br>-->
			<div class='p-4 bg-gray-100'
					 class:bg-gray-400={investigationId === investigation.node.ID}
					 class:text-white={investigationId === investigation.node.ID}
					 on:click={()=>idChanged(investigation.node.ID)}>{investigation.node.Details.Name}</div>
		{/each}
	</div>
{/if}
{#if investigationId}
	<div class='mx-auto'>
		<GenericInvestigation bind:investigationId />
	</div>
{/if}
<!--<GeneralInvestigation bind:investigationId />-->
