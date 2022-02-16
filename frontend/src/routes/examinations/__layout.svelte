<script lang="ts">
	import DashboardIcon from '~icons/ic/sharp-dashboard-customize';
	import Topbar from '../../lib/components/topbar/Topbar.svelte';
	import { activePath } from '../../lib/state/SidebarStore';

	let props = {
		activeUrl: activePath,
		routes: [
			{ name: 'Examinations', route: '/examinations', icon: DashboardIcon },
			{ name: 'Examinations', route: '/examinations/new', icon: DashboardIcon }
			// { name: 'Follow Ups', route: '/followups', icon: RecurringIcon },
			// { name: 'Investigations', route: '/investigations', icon: SearchIcon },
			// { name: 'Examinations', route: '/examinations', icon: SearchIcon },
			// { name: 'Recipients', route: '/recipients', icon: PatientIcon },
			// { name: 'Donors', route: '/donors', icon: DonorIcon },
			// { name: 'Doctors', route: '/doctors', icon: DoctorIcon },
			// { name: 'Users', route: '/users', icon: UserIcon }
			// { name: '', route: '/i', icon: DoctorIcon }
		]
	};
</script>

<div class="flex flex-col">
	<Topbar {...props} />
	<div
		class="h-full w-full border-r border-dashed border-neutral-500"
		style="height:calc(100vh - 3.25rem);min-height:fit-content;"
	>
		<slot />
	</div>
</div>
