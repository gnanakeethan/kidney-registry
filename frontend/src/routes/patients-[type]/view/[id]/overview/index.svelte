<script lang='ts'>
	import { recipientId, recipientOverview } from '$lib/state/recipient';

	import { operationStore, query } from '@urql/svelte';
	// import { Person } from 'lib/graphql/generated';
	import {
		GetPatientOverviewDocument,
		GetPatientOverviewQuery
	} from '../../../../../lib/graphql/generated';
	import { patientType } from '../../../../../lib/state/recipient';

	$: query<GetPatientOverviewQuery>(
		operationStore(GetPatientOverviewDocument, {
			id: $recipientId
		})
	).subscribe(({ data, error }) => {
		if (data) {
			const person = data.getPatient.node;
			if (person) {
				recipientOverview.set(person);
				console.log('EXTENDED PERSON', person);
			}
		}
	});
</script>

<div class='flex min-h-full flex-col bg-gray-200 p-4'>
	{#if $recipientOverview}
		<div class='p-2'>
			{#if $recipientOverview.FollowUps !== undefined && $recipientOverview.FollowUps.items.length > 0}
				<div class='flex flex-col bg-white p-4'>
					<span class='text-lg'> Latest Follow Up : </span>
					<span class='align mx-2 flex-grow text-lg text-gray-700'>
						{#if $recipientOverview.FollowUps.items[0].node.CaseStatus !== ''}
							<span class='font-bold'>
								Case Status: {$recipientOverview?.FollowUps?.items[0].node.CaseStatus} <br />
								Recorded On: {$recipientOverview?.FollowUps?.items[0].node.CreatedAt} <br />
							</span>
						{/if}
						{#if $recipientOverview?.FollowUps.items[0].node.OtherFindings !== ''}
							Findings: {$recipientOverview.FollowUps.items[0].node.OtherFindings} <br />
						{/if}
						{#if $recipientOverview?.FollowUps.items[0].node.ConsultantOpinion !== ''}
							Consultant Opinion: {$recipientOverview.FollowUps.items[0].node.ConsultantOpinion} <br />
						{/if}
						{#if $recipientOverview?.FollowUps.items[0].node.Referrals !== ''}
							Referrals: {$recipientOverview.FollowUps.items[0].node.Referrals} <br />
						{/if}
					</span>
				</div>
			{:else}
				No FollowUps
				<div class='m-2'>
					<a
						class=' rounded bg-green-500 p-2 text-white shadow'
						href='/patients-{$patientType}/view/{$recipientOverview.ID}/followups/create'
					>
						New Follow Up
					</a>
				</div>
			{/if}
		</div>
		<div class='p-2'>
			{#if $recipientOverview.Investigations !== undefined && $recipientOverview.Investigations.items.length > 0}
				<div class='flex flex-col bg-white p-4'>
					<span class='text-lg'> Latest Investigation : </span>
					<div class='align mx-2 my-2 text-lg text-gray-700'>
						{#if $recipientOverview.Investigations.items[0].node.Details.Description}
							<div class='font-bold'>
								Type: {$recipientOverview?.Investigations?.items[0].node.Details.Name}
								<br />
								Requested On: {$recipientOverview?.Investigations?.items[0].node.CreatedAt}
								<br />
								{#if $recipientOverview?.Investigations?.items[0].ExpectedDate !== '0001-01-01'}
									Expected On: {$recipientOverview?.Investigations?.items[0].node.ExpectedDate}
									<br />
								{/if}
								{#if $recipientOverview?.Investigations?.items[0].ObtainedDate !== '0001-01-01'}
									Obtained On: {$recipientOverview?.Investigations?.items[0].node.ObtainedDate}
									<br />
								{:else}
									Not Yet Received <br />
								{/if}
							</div>
							<div class='m-2'>
								<a
									class=' rounded bg-green-500 p-2 text-white shadow'
									href='/patients-{$patientType}/view/{$recipientOverview.ID}/investigations/{$recipientOverview
										?.Investigations?.items[0].node.ID}'
								>
									View Investigation Results
								</a>
							</div>
						{/if}
					</div>
				</div>
			{:else}
				No Investigations.
				<div class='m-2'>
					<a
						class=' rounded bg-green-500 p-2 text-white shadow'
						href='/patients-{$patientType}/view/{$recipientOverview.ID}/investigations/new'
					>
						Request Investigation
					</a>
				</div>
			{/if}
		</div>
		<div class='p-2'>
			{#if $recipientOverview.Examinations !== undefined && $recipientOverview.Examinations.items.length > 0}
				<div class='flex flex-col bg-white p-4'>
					<span class='text-lg'> Latest Examination : </span>
					<div class='align mx-2 my-2 text-lg text-gray-700'>
						{#if $recipientOverview.Examinations.items[0].node.Details.Description}
							<div class='font-bold'>
								Type: {$recipientOverview?.Examinations?.items[0].node.Details.Name}
								<br />
								Completed On: {$recipientOverview?.Examinations?.items[0].node.CreatedAt}
								<br />
							</div>
							<div class='m-2'>
								<a
									class=' rounded bg-green-500 p-2 text-white shadow'
									href='/patients-{$patientType}/view/{$recipientOverview.ID}/examinations/{$recipientOverview
										?.Examinations?.items[0].node.ID}'
								>
									View Examination Results
								</a>
							</div>
						{/if}
					</div>
				</div>
			{:else}
				No Examinations.
				<div class='m-2'>
					<a
						class=' rounded bg-green-500 p-2 text-white shadow'
						href='/patients-{$patientType}/view/{$recipientOverview.ID}/examinations/new'
					>
						New Examination
					</a>
				</div>
			{/if}
		</div>
	{/if}
</div>
