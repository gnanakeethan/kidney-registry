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
	import { recipient } from '$lib/state/recipient';
	import NewIcon from '~icons/ci/file-new';
	import UserIcon from '~icons/bi/person';
	import SearchIcon from '~icons/carbon/search-locate';
	import RecurringIcon from '~icons/ic/round-event-repeat';
	import Topbar from '../../../../lib/components/topbar/Topbar.svelte';
	import { activePath } from '../../../../lib/state/SidebarStore';

	import { operationStore, query } from '@urql/svelte';
	// import { Person } from 'lib/graphql/generated';
	import { GetPatientDocument, GetPatientQuery, Person } from '../../../../lib/graphql/generated';

	query<GetPatientQuery>(
		operationStore(GetPatientDocument, {
			id: $recipientId
		})
	).subscribe(({ data, error }) => {
		if (data) {
			const person = data.getPatient;
			if (person) {
				recipient.set(person);
				console.log($recipient);
				console.log(person);
				console.log($recipient);
			}
		}
	});
	let props = {
		activeUrl: activePath,
		base: '/patients/view/' + $recipientId,
		routes: [
			{ name: 'Patient Details', route: '/patients/view/' + $recipientId, icon: UserIcon },
			{
				name: 'Donor Details',
				route: '/patients/view/' + $recipientId + '/donors',
				icon: UserIcon
			},
			{
				name: 'New Donor',
				route: '/patients/view/' + $recipientId + '/donors/new',
				icon: UserIcon
			},
			{
				name: 'Follow Ups',
				route: '/patients/view/' + $recipientId + '/followups',
				icon: RecurringIcon
			},
			{
				name: 'New Followup',
				route: '/patients/view/' + $recipientId + '/followups/new',
				icon: NewIcon
			},
			{
				name: 'Investigations',
				route: '/patients/view/' + $recipientId + '/investigations',
				icon: SearchIcon
			},
			{
				name: 'New Investigation',
				route: '/patients/view/' + $recipientId + '/investigations/new',
				icon: NewIcon
			},
			{
				name: 'Examinations',
				route: '/patients/view/' + $recipientId + '/examinations',
				icon: SearchIcon
			},
			{
				name: 'New Examination',
				route: '/patients/view/' + $recipientId + '/examinations/new',
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
