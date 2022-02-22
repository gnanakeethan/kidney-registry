<script lang="ts">
	import { goto } from '$app/navigation';
	import { recipientId } from '../../../../../../lib/state/recipient';

	goto('/patients/view/' + $recipientId + '/history/new/history');
</script>

<div class="">&nbsp;</div>
