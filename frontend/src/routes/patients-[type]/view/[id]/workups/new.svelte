<script>
	import { operationStore, query } from '@urql/svelte';
	import { ListWorkupsDocument } from '../../../../../lib/graphql/generated';
	import GenericWorkup from './_workup-generic.svelte';
	import { goto } from '$app/navigation';
	import { recipientId } from '../../../../../lib/state/recipient';

	const workups = operationStore(ListWorkupsDocument);
	query(workups);
	export let workupId = '';
	let currentWorkup = 0;
	let examsLength = 0;
	export let sub = false;

	workups.subscribe((data) => {
		examsLength = data?.data?.listWorkups.items.length;
		let exam1 = data?.data?.listWorkups.items[0].node;
		workupId = exam1?.ID;
		currentWorkup = 1;
	});

	function Clear() {
		workupId = '';
	}

	function Next() {
		console.log(currentWorkup);
		currentWorkup++;
		if (currentWorkup > examsLength) {
			currentWorkup = 1;
		}
		workupId = '';

		console.log(workups);
		setTimeout(() => {
			workupId = workups.data.listWorkups.items[currentWorkup - 1].node.ID;
		}, 500);
	}

	function Followup() {
		if (!sub)
			goto('/patients-recipient/view/' + $recipientId + '/followups/create');
	}

	export function idChanged() {
		const backup = workupId;
		workupId = '';
		setTimeout(() => {
			workupId = backup;
		}, 100);
	}
</script>

{#if $workups.fetching}
	<p>Loading...</p>
{:else if $workups.error}
	<p>Oh no... {$workups.error.message}</p>
{:else}
	Select Workup
	<select class='form-select' name='' id='' bind:value={workupId} on:change={()=>idChanged()}>
		{#each $workups.data.listWorkups.items as workup}
			<!--{workup.Details.Name} <br>-->
			<option value={workup.node.ID}>{workup.node.Details.Name}</option>
		{/each}
	</select>
	<button on:click={() => Clear()} class='bg-yellow-400 p-4 m-2'>Clear Selection</button>
	<button on:click={() => Next()} class='bg-green-400 p-4 m-2'>Next</button>
	<button on:click={() => Followup()} class='bg-green-400 p-4 m-2'>FollowUp</button>
{/if}
{#if workupId}
	<div class='mx-auto w-3/4'>
		<GenericWorkup bind:workupId />
	</div>
{/if}
<!--<GeneralWorkup bind:workupId />-->
