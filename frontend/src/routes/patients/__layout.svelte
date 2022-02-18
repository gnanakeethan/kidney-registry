<script lang="ts">
	import { recipientId } from '$lib/state/recipient';
	import { activePath } from '$lib/state/SidebarStore';
	import UserIcon from '~icons/bi/person';
	import NewIcon from '~icons/bi/person-plus';

	import DashboardIcon from '~icons/ic/sharp-dashboard-customize';
	import Topbar from '../../lib/components/topbar/Topbar.svelte';

	$: props = {
		activeUrl: activePath,
		base: '/patients',
		routes: [
			{ name: 'Patients', route: '/patients', icon: DashboardIcon },
			{ name: 'New Patient', route: '/patients/new', icon: NewIcon },
			{ name: 'View Patient', route: '/patients/view/' + $recipientId, icon: UserIcon }
		]
	};
</script>

<div class="flex flex-col">
	<Topbar {...props} />
	<div
		class="h-full max-h-full w-full overflow-scroll border-r border-dashed border-neutral-500"
		style="height:calc(100vh - 5.7rem);min-height:fit-content;"
	>
		<slot />
	</div>
</div>
