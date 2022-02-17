<script lang="ts">
	import UserIcon from '~icons/bi/person';
	import NewIcon from '~icons/bi/person-plus';

	import DashboardIcon from '~icons/ic/sharp-dashboard-customize';
	import Topbar from '../../lib/components/topbar/Topbar.svelte';
	import { activePath } from '../../lib/state/SidebarStore';

	let props = {
		activeUrl: activePath,
		routes: [
			{ name: 'Recipients', route: '/recipients', icon: DashboardIcon },
			{ name: 'New Recipient', route: '/recipients/new', icon: NewIcon },
			{ name: 'Recipient', route: '/recipients/view/:id', icon: UserIcon }
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
