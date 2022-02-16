<script lang="ts">
	import { NotificationsStatus } from '$lib/state/notifications';

	let showFilter = false;
	let showModal = false;
	$: $NotificationsStatus.notificationsActive = $NotificationsStatus.notificationCounter > 0;
	$: $NotificationsStatus.messagesActive = $NotificationsStatus.messages > 0;
</script>

<div class="col-span-6 row-span-2 m-4 rounded">
	Messages : <input
		bind:value={$NotificationsStatus.messages}
		max="100"
		min="0"
		step="1"
		type="number"
	/><br />
	Notifications:
	<input
		bind:value={$NotificationsStatus.notificationCounter}
		max="100"
		min="0"
		step="1"
		type="number"
	/>
</div>
