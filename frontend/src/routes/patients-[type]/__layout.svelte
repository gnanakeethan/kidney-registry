<script context="module" lang="ts">
	import { patientType } from '$lib/state/recipient';
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types';

	export async function load(loadInput: LoadInput): Promise<LoadOutput> {
		const type = loadInput.params.type ?? '';
		console.log('PATIENT TYPE:', type);
		patientType.set(type);
		return { props: { type } };
	}
</script>

<script lang="ts">
	import { donorSet, lastRecipient, lastRecipientId, recipientId } from '$lib/state/recipient';
	import { activePath } from '$lib/state/SidebarStore';
	import UserIcon from '~icons/bi/person';
	import NewIcon from '~icons/bi/person-plus';

	import DashboardIcon from '~icons/ic/sharp-dashboard-customize';
	import Topbar from '../../lib/components/topbar/Topbar.svelte';

	let type = '';
	let props = {
		activeUrl: activePath,
		base: '/patients-recipient',
		routes: [
			{ name: 'Patients', route: '/patients-recipient', icon: DashboardIcon },
			{ name: 'New Patient', route: '/patients-recipient/new', icon: NewIcon }
		]
	};
	$: if ($recipientId !== '' && $recipientId !== null && $patientType !== 'donor') {
		props.routes[2] = {
			name: 'View ' + $patientType,
			route: '/patients-' + $patientType + '/view/' + $recipientId,
			icon: UserIcon
		};
	} else {
		props.routes.splice(2, 1);
	}
	$: if ($patientType === 'donor') {
		props.routes[2] = {
			name: 'View Recipient',
			route: '/patients-recipient/view/' + $lastRecipientId,
			icon: UserIcon
		};
		props.routes[3] = {
			name: 'View ' + $patientType,
			route: '/patients-' + $patientType + '/view/' + $recipientId,
			icon: UserIcon
		};
	} else {
		props.routes.splice(3, 1);
	}
</script>

<div class="flex flex-col ">
	<Topbar {...props} />
	<div
		class="h-full max-h-full w-full overflow-scroll border-dashed border-neutral-500"
		style="height:calc(100vh - 5.7rem);min-height:fit-content;"
	>
		<slot />
	</div>
</div>
