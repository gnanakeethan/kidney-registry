<script lang="ts">
	import { goto } from '$app/navigation';
	import { recipientId } from '../../../../lib/state/recipient';

	goto('/patients-recipient/view/' + $recipientId + '/history');
</script>

<div class="">&nbsp;</div>
