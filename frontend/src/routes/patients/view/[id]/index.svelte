<script lang="ts">
	import { operationStore, query } from '@urql/svelte';
	import type { GetPatientQuery } from '../../../../lib/graphql/generated';
	import { GetPatientDocument } from '../../../../lib/graphql/generated';
	import { recipientId } from '../../../../lib/state/recipient';

	const newPatient = query<GetPatientQuery>(
		operationStore(GetPatientDocument, {
			id: $recipientId
		})
	);
</script>

<div class="h-full bg-gradient-to-b from-blue-100 to-stone-100 p-2">
	<div class="p-2">
		PATIENT VIEW ID: {$recipientId}
	</div>
</div>
