<script context='module' lang='ts'>
	throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

	// import type { LoadEvent,LoadOutput } from "@sveltejs/kit";
	// import { recipientId } from '../../../../lib/state/recipient';

	// export async function load(loadInput: LoadEvent): Promise<LoadOutput> {
	// 	const id = loadInput.params.id ?? '';
	// 	console.log('PATIENT ID:', id);
	// 	recipientId.set(id);
	// 	return { props: { id } };
	// }
</script>

<script lang='ts'>
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
	import {
		GetPatientDocument,
		GetPatientQuery,
		ListWorkflowsDocument,
		Person
	} from '../../../../lib/graphql/generated';
	import { activeUrl } from '$lib/state/SidebarStore';

	let workflows = [];
	const workflowsQuery = operationStore(ListWorkflowsDocument);
	query(workflowsQuery);
	workflowsQuery.subscribe((data) => {
		if (data.fetching === false && data.stale === false) {
			workflows = data.data.listWorkflows.items;
			console.log(workflows);
		}
	});
	$: query<GetPatientQuery>(
		operationStore(GetPatientDocument, {
			id: $recipientId
		})
	).subscribe(({ data, error }) => {
		if (data) {
			const person = data.getPatient.node;
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
					route: '/patients-' + $patientType + '/view/' + $recipientId + '/followups/create',
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
				},
				{
					name: 'Edit',
					route: '/patients-' + $patientType + '/view/' + $recipientId + '/edit',
					icon: EditIcon
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
	let topbarColor = '';
	$: if ($recipient != null) {
		switch ($recipient.Status) {
			case 'ACTIVE': {
				topbarColor = 'bg-blue-200';
				break;
			}
			case 'INACTIVE': {
				topbarColor = 'bg-gray-200/75';
				break;
			}
			case 'NA': {
				break;
			}
			case 'WORKING_UP': {
				topbarColor = 'bg-green-200';
				break;
			}
			case 'SUSPENDED': {
				topbarColor = 'bg-red-200';

				break;
			}
			case 'PERMANENTLY_UNFIT': {
				topbarColor = 'bg-red-900/10';
				break;
			}
			case 'DECEASED_WILL_AWAITING_TRANSPLANT': {
				topbarColor = 'bg-indigo-300/50';
				break;
			}
			case 'DECEASED_POST_CADAVERIC_TRANSPLANT': {
				topbarColor = 'bg-indigo-300';
				break;
			}
			case 'RECEIVED_LIVE_TRANSPLANT': {
				topbarColor = 'bg-yellow-200';
				break;
			}
			case 'RECEIVED_CADAVERIC_TRANSPLANT': {
				topbarColor = 'bg-yellow-300/50';
				break;
			}
			case 'CADAVERIC_DONOR': {
				break;
			}
			case 'LIVE_DONOR': {
				break;
			}
		}
	}
	$: console.log(topbarColor);
</script>

<div class={topbarColor}>
	<Topbar {...props} />
</div>
<div class='flex flex-row'>
	<div
		class='flex min-w-[140px] max-w-[240px] flex-col break-words border-b border-dashed {topbarColor} p-3 transition-all'
	>
		<span class='mx-auto text-xl font-bold'>{$recipient.PersonType}</span> <br />
		<div class='mx-auto h-20 w-20'>
			{#if $recipient.Gender === 'FEMALE'}
				<FemaleIcon class='h-20 text-6xl' />
			{:else}
				<MaleIcon class='text-6xl' />
			{/if}
		</div>
		<div>
			<span class='text-gray-700'>Patient Name: <br /></span>
			<span class='text-wrap font-bold'>{$recipient.FirstName} {$recipient.LastName}</span>
			<br />
			<br />
			<span class='text-gray-800'>Date of Birth : <br /></span>
			<span class='font-bold'>{$recipient.DateOfBirth} <br /> ({$recipient.Age})</span><br />
			<br />
			<span class='text-gray-800'>Phn : <br /></span>
			<span class='font-bold'>{$recipient.Phn}</span> <br />
			<br />
			<span class='text-gray-800'>Blood Group : <br /></span>
			<span class='font-bold'>{$recipient.BloodGroup}</span> <br />
		</div>
	</div>
	<div class='flex-grow'>
		<div
			class='h-full w-full overflow-scroll border-r border-l border-dashed border-neutral-500'
			style='height:calc(100vh - 7.8rem);min-height:fit-content;'
		>
			<slot />
		</div>
	</div>
	<div class='flex m-2 flex-col'>
		<div class='text-lg m-4'>Available Workflows</div>
		<br>
		<div class='flex flex-col'>
			{#each workflows as workflow}
				<a href='/workflow/{$recipientId}-{workflow.node.ID}-0'
					 class='flex flex-row bg-green-400 m-2 p-2 rounded shadow'>{workflow.node.Name}</a>
			{/each}
		</div>
	</div>
</div>
