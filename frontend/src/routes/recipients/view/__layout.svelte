<script context="module" lang="ts">
	// Pass the id parameter from the dynamic path slug corresponding to /transactions/[id]
	// This gets set to the exported variable transaction_id

	// export async function load({ page: { params } }) {
	// 	const { id } = params
	// 	return { props: { transaction_id: id } }
	// }
</script>

<script lang="ts">
	import UserIcon from '~icons/bi/person';
	import Topbar from '../../../lib/components/topbar/Topbar.svelte';
	import { activePath } from '../../../lib/state/SidebarStore';

	let props = {
		activeUrl: activePath,
		routes: [
			// { name: 'Recipients', route: '/recipients', icon: DashboardIcon },
			// { name: 'New Recipient', route: '/recipients/new', icon: NewIcon },
			{ name: 'Patient', route: '/recipients/view/:id/', icon: UserIcon },
			{ name: 'Donors', route: '/recipients/view/:id/donors', icon: UserIcon }

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
		class="? h-full max-h-full w-full overflow-scroll border-r border-dashed border-neutral-500"
		style="height:calc(100vh - 5.7rem);min-height:fit-content;"
	>
		<slot />
	</div>
</div>
