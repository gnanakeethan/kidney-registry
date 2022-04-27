<script context='module' lang='ts'></script>

<script lang='ts'>
	import { activePath } from '$lib/state/SidebarStore';
	import NewIcon from '~icons/carbon/add';

	import DashboardIcon from '~icons/ic/sharp-dashboard-customize';
	import Topbar from '../../lib/components/topbar/Topbar.svelte';

	let props = {
		activeUrl: activePath,
		base: '/workflow',
		routes: [
			{ name: 'Current Workflows', route: '/workflow', icon: DashboardIcon },
			{ name: 'New', route: '/workflow/new', icon: NewIcon }
		]
	};
</script>

<div class='flex flex-col '>
	<Topbar {...props} />
	<div
		class='h-full max-h-full w-full overflow-scroll border-dashed border-neutral-500'
		style='height:calc(100vh - 5.7rem);min-height:fit-content;'
	>
		<slot />
	</div>
</div>
