<script lang="ts">
	import { recipientId } from '$lib/state/recipient';

	recipientId.set('25DZi7TRDfmVDEgDBjuRRsLfWzy');
</script>

<div class="p-2">
	<div class="p-2">
		{$recipientId}
		<slot />
	</div>
</div>
