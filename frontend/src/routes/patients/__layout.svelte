<script lang="ts">
	import { recipientId } from '$lib/state/recipient';
	import { activePath } from '$lib/state/SidebarStore';
	import UserIcon from '~icons/bi/person';
	import NewIcon from '~icons/bi/person-plus';

	import DashboardIcon from '~icons/ic/sharp-dashboard-customize';
	import Topbar from '../../lib/components/topbar/Topbar.svelte';

	let props = {
		activeUrl: activePath,
		base: '/patients',
		routes: [
			{ name: 'Patients', route: '/patients', icon: DashboardIcon },
			{ name: 'New Patient', route: '/patients/new', icon: NewIcon }
		]
	};
	$: if ($recipientId != '') {
		props.routes[2] = {
			name: 'View Patient',
			route: '/patients/view/' + $recipientId,
			icon: UserIcon
		};
	} else {
		props.routes.splice(2, 1);
	}
</script>

<div class="flex flex-col ">
	<Topbar {...props} />
	<div
		class="h-full max-h-full w-full overflow-scroll border-dashed border-neutral-500"
		style="height:calc(100vh - 5.7rem);min-height:fit-content;"
	>
		<slot />
	</div>
</div>
