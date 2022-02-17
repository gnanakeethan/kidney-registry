<script lang="ts">
	import { getContext } from 'svelte';

	let recipientId = getContext('recipientId') as string;
	$: console.log(recipientId);
</script>

<div class="? p-2">
	<div class="? p-2">
		DONORS {recipientId}
	</div>
</div>
