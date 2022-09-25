<script lang="ts">
	import { donorsId, recipientId } from '../../../../../lib/state/recipient';

	donorsId.set($recipientId);
</script>

<div class="h-full bg-gradient-to-b from-green-100 to-stone-50 p-2">
	<div class=" p-2">
		RECIPIENT {$recipientId} <br />
		DONOR {$donorsId}
		<a href="/patients-recipient/view/{$recipientId}/donors/{$donorsId}">Donor</a>
	</div>
</div>
