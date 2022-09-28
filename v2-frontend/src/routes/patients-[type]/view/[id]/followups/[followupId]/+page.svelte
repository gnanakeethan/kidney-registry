<script lang="ts">
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import { recipientId } from '$lib/state/recipient';

	export let donorId = '';
</script>

<div class="p-2">
	<div class="p-2">
		PATIENT :{$recipientId}
		DONOR: {donorId}
	</div>
</div>
