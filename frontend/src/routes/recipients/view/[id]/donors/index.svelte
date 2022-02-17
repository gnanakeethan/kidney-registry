<script lang="ts">
	import { recipientId } from '../../../../../lib/state/recipient';
</script>

<div class="h-full bg-gradient-to-b from-green-100 to-stone-50 p-2">
	<div class=" p-2">
		DONORS {$recipientId}
		<a href="/recipients/view/{$recipientId}/donors/{$recipientId}">Donor</a>
	</div>
</div>
