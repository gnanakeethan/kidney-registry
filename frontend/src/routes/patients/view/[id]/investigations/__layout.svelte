<script context="module" lang="ts">
	import { recipientId } from '$lib/state/recipient';
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types';

	export async function load(loadInput: LoadInput): Promise<LoadOutput> {
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
		base: '/patients/view/' + $recipientId + '/investigations/',
		routes: [
			{
				name: 'New',
				route: '/patients/view/' + $recipientId + '/investigations/new',
				icon: UserIcon
			},
			{
				name: 'Previous Records',
				route: '/patients/view/' + $recipientId + '/investigations/',
				icon: UserIcon
			}
		]
	};
</script>

<div class="flex flex-col">
	<Topbar {...props} />
	<div
		class=" h-full w-full overflow-scroll border-dashed border-neutral-500"
		style="height:calc(100vh - 10.2rem);min-height:fit-content;"
	>
		<slot />
	</div>
</div>
