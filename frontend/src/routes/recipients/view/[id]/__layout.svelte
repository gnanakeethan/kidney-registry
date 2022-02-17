<script context="module" lang="ts">
	import { recipientId } from '$lib/state/recipient';
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types';

	export async function load(loadInput: LoadInput): Promise<LoadOutput> {
		const id = loadInput.params.id ?? '';
		console.log('RECIPIENT ID:', id);
		recipientId.set(id);
		return { props: { id } };
	}
</script>

<script lang="ts">
	import NewIcon from '~icons/ci/file-new';
	import UserIcon from '~icons/bi/person';
	import SearchIcon from '~icons/carbon/search-locate';
	import RecurringIcon from '~icons/ic/round-event-repeat';
	import Topbar from '../../../../lib/components/topbar/Topbar.svelte';
	import { activePath } from '../../../../lib/state/SidebarStore';

	let props = {
		activeUrl: activePath,
		base: '/recipients/view/' + $recipientId,
		routes: [
			{ name: 'Recipient', route: '/recipients/view/' + $recipientId, icon: UserIcon },
			{ name: 'Donors', route: '/recipients/view/' + $recipientId + '/donors', icon: UserIcon },
			{
				name: 'Follow Ups',
				route: '/recipients/view/' + $recipientId + '/followups',
				icon: RecurringIcon
			},
			{
				name: 'New Followup',
				route: '/recipients/view/' + $recipientId + '/followups/new',
				icon: NewIcon
			},
			{
				name: 'Investigations',
				route: '/recipients/view/' + $recipientId + '/investigations',
				icon: SearchIcon
			},
			{
				name: 'New Investigation',
				route: '/recipients/view/' + $recipientId + '/investigations/new',
				icon: NewIcon
			},
			{
				name: 'Examinations',
				route: '/recipients/view/' + $recipientId + '/examinations',
				icon: SearchIcon
			},
			{
				name: 'New Examination',
				route: '/recipients/view/' + $recipientId + '/examinations/new',
				icon: NewIcon
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
