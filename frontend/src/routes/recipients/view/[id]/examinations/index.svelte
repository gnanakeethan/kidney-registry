<script lang="ts">
	import { recipientId } from '../../../../../lib/state/recipient';
</script>

<div class="p-2">
	<div class=" p-2">
		DONORS {$recipientId}
		<a href="/recipients/view/{$recipientId}/examinations/{$recipientId}">Donor</a>
	</div>
</div>
