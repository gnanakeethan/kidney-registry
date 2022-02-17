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
	import UserIcon from '~icons/bi/person';
	import Topbar from '../../../../lib/components/topbar/Topbar.svelte';
	import { activePath } from '../../../../lib/state/SidebarStore';

	let props = {
		activeUrl: activePath,
		base: '/recipients/view/' + $recipientId,
		routes: [
			{ name: 'Recipient', route: '/recipients/view/' + $recipientId, icon: UserIcon },
			{ name: 'Donors', route: '/recipients/view/' + $recipientId + '/donors', icon: UserIcon }
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
