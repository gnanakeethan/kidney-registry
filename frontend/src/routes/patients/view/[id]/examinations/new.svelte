<script>
	import { operationStore, query } from '@urql/svelte';
	import { ListExaminationsDocument } from '../../../../../lib/graphql/generated';
	import GenericExamination from './_examination-generic.svelte';
	import { goto } from '$app/navigation';
	import { recipientId } from '../../../../../lib/state/recipient';

	const examinations = operationStore(ListExaminationsDocument);
	query(examinations);
	let examinationId = '';
	$: if (examinationId) {
		const backup = examinationId;
		examinationId = '';
		// setTimeout(()  => {
		examinationId = backup;
		// }, 100);
	}
	let currentExamination = 0;
	let examsLength = 0;
	examinations.subscribe((data) => {
		examsLength = data?.data?.listExaminations.items.length;
		let exam1 = data?.data?.listExaminations.items[0];
		examinationId = exam1?.ID;
		currentExamination = 1;
	});

	function Clear() {
		examinationId = '';
	}

	function Next() {
		console.log(currentExamination);
		currentExamination++;
		if (currentExamination > examsLength) {
			currentExamination = 1;
		}
		examinationId = '';

		console.log(examinations);
		setTimeout(() => {
			examinationId = examinations.data.listExaminations.items[currentExamination - 1].ID;
		}, 200);
	}

	function Investigate() {
		goto('/patients/view/' + $recipientId + '/investigations/new');
	}
</script>

{#if $examinations.fetching}
	<p>Loading...</p>
{:else if $examinations.error}
	<p>Oh no... {$examinations.error.message}</p>
{:else}
	Select Examination
	<select class="form-select" name="" id="" bind:value={examinationId}>
		{#each $examinations.data.listExaminations.items as examination}
			<!--{examination.Details.Name} <br>-->
			<option disabled={examinationId !== ''} value={examination.ID}
				>{examination.Details.Name}</option
			>
		{/each}
	</select>
	<button on:click={() => Clear()} class="bg-yellow-400 p-4 m-2">Clear Selection</button>
	<button on:click={() => Next()} class="bg-green-400 p-4 m-2">Next</button>
	<button on:click={() => Investigate()} class="bg-green-400 p-4 m-2">Investigate</button>
{/if}
{#if examinationId}
	<div class="w-full px-8">
		<GenericExamination bind:examinationId />
	</div>
{/if}
<!--<GeneralExamination bind:examinationId />-->
