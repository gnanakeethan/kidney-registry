<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types';

	export async function load(loadInput: LoadInput): Promise<LoadOutput> {
		const id = loadInput.params.id ?? '';
		console.log('', id);
		return { props: { id } };
	}
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import UserIcon from '~icons/bi/person';
	import Topbar from '../../../../lib/components/topbar/Topbar.svelte';
	import { activePath } from '../../../../lib/state/SidebarStore';

	export let id = '';
	$: console.log(id);
	$: setContext('recipientId', id);
	let props = {
		activeUrl: activePath,
		routes: [
			{ name: 'Patient', route: '/recipients/view/:id/', icon: UserIcon },
			{ name: 'Donors', route: '/recipients/view/:id/donors', icon: UserIcon }
		]
	};
</script>

<div class="flex flex-col">
	<Topbar {...props} />
	<div
		class="? h-full max-h-full w-full overflow-scroll border-r border-dashed border-neutral-500"
		style="height:calc(100vh - 5.7rem);min-height:fit-content;"
	>
		<slot recipientId={id} />
	</div>
</div>
