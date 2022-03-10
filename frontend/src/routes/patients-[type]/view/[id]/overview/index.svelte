<script lang="ts">
	import { recipient, recipientId } from '$lib/state/recipient';

	import { operationStore, query } from '@urql/svelte';
	// import { Person } from 'lib/graphql/generated';
	import {
		GetPatientOverviewDocument,
		GetPatientOverviewQuery
	} from '../../../../../lib/graphql/generated';

	$: query<GetPatientOverviewQuery>(
		operationStore(GetPatientOverviewDocument, {
			id: $recipientId
		})
	).subscribe(({ data, error }) => {
		if (data) {
			const person = data.getPatient;
			if (person) {
				recipient.set(person);
				console.log('EXTENDED PERSON', person);
			}
		}
	});
</script>

{JSON.toString($recipient)}
