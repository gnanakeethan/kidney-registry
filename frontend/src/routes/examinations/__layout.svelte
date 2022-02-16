<script lang="ts">
	import NewIcon from '~icons/carbon/new-tab';
	import DashboardIcon from '~icons/ic/sharp-dashboard-customize';
	import Sidebar from '../../lib/components/sidebar/Sidebar.svelte';

	let props = {
		activeUrl: '/',
		routes: [
			{ name: 'Examinations', route: '/examinations', icon: DashboardIcon },
			{ name: 'New', route: '/examinations/new', icon: NewIcon }
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

<div class="flex flex-row">
	<div
		class="h-full border-r border-dashed border-neutral-500"
		style="height:calc(100vh - 3.25rem);min-height:fit-content"
	>
		<Sidebar {...props} />
	</div>
	<div
		class="h-full w-full border-r border-dashed border-neutral-500"
		style="height:calc(100vh - 3.25rem);min-height:fit-content;"
	>
		<slot />
	</div>
</div>
