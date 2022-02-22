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
	import FemaleIcon from '~icons/foundation/torso-female';
	import EditIcon from '~icons/carbon/edit';
	import MaleIcon from '~icons/fontisto/male';
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
			{
				name: 'History',
				route: '/patients/view/' + $recipientId + '/history',
				icon: SearchIcon
			},
			{
				name: 'New Record',
				route: '/patients/view/' + $recipientId + '/history/history',
				icon: NewIcon
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
			},
			{
				name: 'Donor Details',
				route: '/patients/view/' + $recipientId + '/donors',
				icon: UserIcon
			},
			{
				name: 'Edit',
				route: '/patients/view/' + $recipientId + '/edit',
				icon: EditIcon
			}
		]
	};
</script>

<div class="flex flex-row">
	<div class="flex flex-col border-b border-dashed p-3 transition-all">
		<div class="h-20 w-20">
			{#if $recipient.Gender === 'FEMALE'}
				<FemaleIcon class="h-20 text-6xl" />
			{:else}
				<MaleIcon class="text-6xl" />
			{/if}
		</div>
		<div>
			<span class="text-gray-700">Patient Name: <br /></span>
			<span class="font-bold">{$recipient.FirstName} {$recipient.LastName}</span> <br />
			<span class="text-gray-800">Date of Birth : <br /></span>
			<span class="font-bold">{$recipient.DateOfBirth} ({$recipient.Age})</span><br />
			<span class="text-gray-800">Phn : <br /></span>
			<span class="font-bold">{$recipient.Phn}</span> <br />
		</div>
	</div>
	<div class="flex-grow">
		<Topbar {...props} />
		<div
			class="h-full w-full overflow-scroll border-r border-l border-dashed border-neutral-500"
			style="height:calc(100vh - 7.8rem);min-height:fit-content;"
		>
			<slot />
		</div>
	</div>
</div>
