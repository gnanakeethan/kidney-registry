<script lang="ts">
	import { operationStore, query } from '@urql/svelte';
	import type { GetPatientQuery, Person } from '../../../../lib/graphql/generated';
	import { GetPatientDocument } from '../../../../lib/graphql/generated';
	import { recipientId } from '../../../../lib/state/recipient';

	const patientQuery = query<GetPatientQuery>(
		operationStore(GetPatientDocument, {
			id: $recipientId
		})
	);
	let patient: Person;
	$: if ($patientQuery.data) {
		patient = $patientQuery.data.getPatient;
	}
</script>

<div class="h-full w-full bg-gradient-to-b from-blue-100 to-stone-100 p-2">
	<div class="mx-auto my-auto p-2">
		{#if $patientQuery.fetching}
			<span>Loading Patient : {$recipientId}</span>
		{:else if $patientQuery.error}
			<p>Oh no... {$patientQuery.error.message}</p>
		{:else if $patientQuery.data}
			{patient.FirstName} <br />
			{patient.DateOfBirth}<br />
			{patient.Age}
		{/if}
	</div>
</div>
