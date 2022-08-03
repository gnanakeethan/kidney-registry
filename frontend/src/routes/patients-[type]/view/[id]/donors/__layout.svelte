<script context="module" lang="ts">
	import { donorsId, recipientId } from '$lib/state/recipient';
	import type { LoadEvent,LoadOutput } from "@sveltejs/kit";

	export async function load(loadInput: LoadEvent): Promise<LoadOutput> {
		const id = loadInput.params.id ?? '';
		console.log('PATIENT ID:', id);
		recipientId.set(id);
		return { props: { id } };
	}
</script>

<script lang="ts">
	import NewIcon from '~icons/ci/file-new';
	import UserIcon from '~icons/bi/person';
	import SearchIcon from '~icons/carbon/search-locate';
	import RecurringIcon from '~icons/ic/round-event-repeat';
	import Topbar from '../../../../../lib/components/topbar/Topbar.svelte';
	import { activePath } from '../../../../../lib/state/SidebarStore';

	let props = {
		activeUrl: activePath,
		base: '/patients-recipient/view/' + $recipientId + '/donors',
		routes: [
			{
				name: 'New Donor',
				route: '/patients-recipient/view/' + $recipientId + '/donors/new',
				icon: UserIcon
			},
			{
				name: 'Donors List',
				route: '/patients-recipient/view/' + $recipientId + '/donors',
				icon: UserIcon
			},
			{
				name: 'View Donor',
				route: '/patients-recipient/view/' + $recipientId + '/donors/' + $donorsId,
				icon: UserIcon
			}
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
