<script lang='ts'>
	import { goto } from '$app/navigation';
	import { operationStore, query } from '@urql/svelte';
	import { ListExaminationsDocument } from '../../../../../lib/graphql/generated';
	import { recipientId } from '../../../../../lib/state/recipient';
	import GenericExamination from './_examination-generic.svelte';

	const examinations = operationStore(ListExaminationsDocument);
	query(examinations);
	export let examinationId = '';
	export let sub = false;
	let currentExamination = 0;
	let examsLength = 0;
	examinations.subscribe((data) => {
		examsLength = data?.data?.listExaminations.items.length;
		let exam1 = data?.data?.listExaminations.items[0].node;
		examinationId = exam1?.ID;
		currentExamination = 1;
	});

	function Clear() {
		examinationId = '';
	}

	async function Save() {
		examination.onSubmit();
	}

	async function Next() {
		console.log('NEXT PAGE');
		console.log(currentExamination);
		console.log(examsLength);
		examinationId = '';
		await sleep(200);
		currentExamination++;
		if (currentExamination > examsLength) {
			currentExamination = 1;
		}

		console.log(examinations);
		await sleep(200);
		// setTimeout(() => {

		examinationId = examinations.data.listExaminations.items[currentExamination - 1].node.ID;
		// }, 200);/
	}

	async function sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	function Investigate() {
		goto('/patients-recipient/view/' + $recipientId + '/examinations/new');
	}

	let examination;

	export function idChanged(ID) {
		examinationId = '';
		setTimeout(() => {
			examinationId = ID;
		}, 200);
	}
</script>

{#if $examinations.fetching}
	<p>Loading...</p>
{:else if $examinations.error}
	<p>Oh no... {$examinations.error.message}</p>
{:else}
	<div class='flex flex-wrap'>
		{#each $examinations.data.listExaminations.items as examination}
			<!--{examination.Details.Name} <br>-->
			<div class='p-4 bg-gray-100'
					 class:bg-gray-400={examinationId === examination.node.ID}
					 class:text-white={examinationId === examination.node.ID}
					 on:click={()=>idChanged(examination.node.ID)}>{examination.node.Details.Name}</div>
		{/each}
	</div>
{/if}
{#if examinationId}
	<div class='w-full px-8'>
		<GenericExamination {examinationId} bind:this={examination} />
	</div>
	<button on:click={() => Save()} class='bg-green-400 p-4 m-2'>Save</button>
	<button on:click={() => Investigate()} class='bg-green-400 p-4 m-2'>Investigations</button>
{/if}
<!--<GeneralExamination bind:examinationId />-->
