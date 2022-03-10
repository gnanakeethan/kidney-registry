<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types';
	import { recipientId } from '../../../../lib/state/recipient';

	export async function load(loadInput: LoadInput): Promise<LoadOutput> {
		const id = loadInput.params.id ?? '';
		console.log('PATIENT ID:', id);
		recipientId.set(id);
		return { props: { id } };
	}
</script>

<script lang="ts">
	import { recipient } from '$lib/state/recipient';
	import { patientType } from '$lib/state/recipient';
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
	import { activeUrl } from '$lib/state/SidebarStore';

	$: query<GetPatientQuery>(
		operationStore(GetPatientDocument, {
			id: $recipientId
		})
	).subscribe(({ data, error }) => {
		if (data) {
			const person = data.getPatient;
			if (person) {
				recipient.set(person);
				// console.log($recipient);
				// console.log(person);
				// console.log($recipient);
			}
		}
	});
	let props = { routes: [], base: '', activeUrl: '' };
	$: if ($patientType !== '' || $recipientId !== '') {
		props = {
			activeUrl: activePath,
			base: '/patients-' + $patientType + '/view/' + $recipientId,
			routes: [
				{
					name: 'Overview',
					route: '/patients-' + $patientType + '/view/' + $recipientId + '/overview',
					icon: SearchIcon
				},
				{
					name: 'History',
					route: '/patients-' + $patientType + '/view/' + $recipientId + '/history/',
					icon: SearchIcon
				},
				// {
				// 	name: 'New Record',
				// 	route: '/patients-'+$patientType+'/view/' + $recipientId + '/history/new',
				// 	icon: NewIcon
				// },
				{
					name: 'Follow Ups',
					route: '/patients-' + $patientType + '/view/' + $recipientId + '/followups',
					icon: RecurringIcon
				},
				{
					name: 'New Followup',
					route: '/patients-' + $patientType + '/view/' + $recipientId + '/followups/new',
					icon: NewIcon
				},
				{
					name: 'Investigations',
					route: '/patients-' + $patientType + '/view/' + $recipientId + '/investigations',
					icon: SearchIcon
				},
				{
					name: 'Examinations',
					route: '/patients-' + $patientType + '/view/' + $recipientId + '/examinations',
					icon: SearchIcon
				},
				{
					name: 'New Examination',
					route: '/patients-' + $patientType + '/view/' + $recipientId + '/examinations/new',
					icon: NewIcon
				},
				{
					name: 'Workups',
					route: '/patients-' + $patientType + '/view/' + $recipientId + '/workups',
					icon: SearchIcon
				},
				{
					name: 'New Workup',
					route: '/patients-' + $patientType + '/view/' + $recipientId + '/workups/new',
					icon: SearchIcon
				}
			]
		};
	}

	$: if ($patientType === 'recipient') {
		props.routes.push({
			name: 'Donor Details',
			route: '/patients-' + $patientType + '/view/' + $recipientId + '/donors',
			icon: UserIcon
		});
	}
</script>

<div class="bg-yellow-100">
	<Topbar {...props} />
</div>
<div class="flex flex-row">
	{#if $activeUrl !== '/patients-' + $patientType + '/view/' + $recipientId + '/overview'}
		<div
			class="flex max-w-[140px] flex-col break-words border-b border-dashed bg-yellow-100 p-3 transition-all"
		>
			<span class="mx-auto text-xl font-bold">{$recipient.PersonType}</span> <br />
			<div class="mx-auto h-20 w-20">
				{#if $recipient.Gender === 'FEMALE'}
					<FemaleIcon class="h-20 text-6xl" />
				{:else}
					<MaleIcon class="text-6xl" />
				{/if}
			</div>
			<div>
				<span class="text-gray-700">Patient Name: <br /></span>
				<span class="text-wrap font-bold">{$recipient.FirstName} {$recipient.LastName}</span>
				<br />
				<br />
				<span class="text-gray-800">Date of Birth : <br /></span>
				<span class="font-bold">{$recipient.DateOfBirth} <br /> ({$recipient.Age})</span><br />
				<br />
				<span class="text-gray-800">Phn : <br /></span>
				<span class="font-bold">{$recipient.Phn}</span> <br />
			</div>
		</div>
	{/if}
	<div class="flex-grow">
		<div
			class="h-full w-full overflow-scroll border-r border-l border-dashed border-neutral-500"
			style="height:calc(100vh - 7.8rem);min-height:fit-content;"
		>
			<slot />
		</div>
	</div>
</div>
