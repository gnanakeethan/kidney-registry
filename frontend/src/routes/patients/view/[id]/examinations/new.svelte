<script>
	import { operationStore, query } from '@urql/svelte';
	import { ListExaminationsDocument } from '../../../../../lib/graphql/generated';
	import GenericExamination from './_examination-generic.svelte';

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

	function Clear() {
		examinationId = '';
	}
</script>

{#if $examinations.fetching}
	<p>Loading...</p>
{:else if $examinations.error}
	<p>Oh no... {$examinations.error.message}</p>
{:else}
	Select Examination
	<select class="form-select" name="" id="" bind:value={examinationId}>
		<option value="" />
		{#each $examinations.data.listExaminations.items as examination}
			<!--{examination.Details.Name} <br>-->
			<option disabled={examinationId !== ''} value={examination.ID}
				>{examination.Details.Name}</option
			>
		{/each}
	</select>
	<button on:click={() => Clear()}>Clear Selection</button>
{/if}
{#if examinationId}
	<div class="w-full px-8">
		<GenericExamination bind:examinationId />
	</div>
{/if}
<!--<GeneralExamination bind:examinationId />-->
