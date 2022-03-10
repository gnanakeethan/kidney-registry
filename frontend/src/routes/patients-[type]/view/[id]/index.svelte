<script lang="ts">
	import { goto } from '$app/navigation';
	import { recipientId } from '../../../../lib/state/recipient';

	goto('/patients-recipient/view/' + $recipientId + '/overview');
</script>

<div class="">&nbsp;</div>
