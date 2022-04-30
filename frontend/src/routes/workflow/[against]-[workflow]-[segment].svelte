<script context='module' lang='ts'>
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types';

	export async function load(loadInput: LoadInput): Promise<LoadOutput> {
		const workflow_id = loadInput.params.workflow ?? '';
		const segment = loadInput.params.segment ?? '';
		const against = loadInput.params.against ?? '';
		console.log('WORKFLOW IDENTIFIER:', workflow_id);
		console.log('SEGMENT:', segment);
		console.log('AGAINST:', against);
		return { props: { workflow_id, segment, against } };
	}
</script>

<script lang='ts'>
	export let workflow_id, segment, against;
	import { GetWorkflowDocument, GetWorkflowQuery } from '$lib/graphql/generated';
	import { capitalize } from 'lodash';
	import { listOfComponents } from './listOfComponents';
	import { operationStore, query } from '@urql/svelte';
	import { GetPatientDocument, GetPatientQuery } from '$lib/graphql/generated';
	import { recipient } from '$lib/state/recipient';
	import { mapOfComponents } from './listOfComponents';

	console.log('processing');
	console.log(listOfComponents);
	console.log(against);
	query<GetPatientQuery>(
		operationStore(GetPatientDocument, {
			id: against
		})
	).subscribe(({ data, error }) => {
		if (data) {
			const person = data.getPatient.node;
			if (person) {
				recipient.set(person);
				console.log($recipient);
				console.log(person);
			}
		}
	});
	$: console.log('WORKFLOW IDENTIFIER:', workflow_id);
	$: console.log('SEGMENT:', segment);
	$: console.log('AGAINST:', against);
	let workflow;
	let componentProps = {};
	let child;

	query<GetWorkflowQuery>(
		operationStore(GetWorkflowDocument, {
			id: workflow_id
		})
	).subscribe((data) => {
		if (data.fetching === false && data.stale === false) {
			workflow = data.data.getWorkflow.node;
			for (let i = 0; i < workflow.Configuration.components.length; i++) {
				let component = workflow.Configuration.components[i];
				if (component.component_id !== '') {
					setTimeout(() => {
						child.idChanged(component.component_id);
						console.log('id change triggered');
					}, 200);
				}
			}
		}
	});
</script>

<div>
	{#if workflow}
		<div>
			<span
				class='text-2xl font-bold mx-10  bg-green-200 w-full text-center'>Processing Workflow {workflow.Name} {capitalize(workflow.Configuration.components[segment].component)}
				for {$recipient.FirstName} - Stage {parseInt(segment) + 1} of {workflow.Configuration.components.length}</span>

			<svelte:component
				sub={true}
				this={mapOfComponents[workflow.Configuration.components[segment].component]}
				bind:this={child}
			></svelte:component>
			{JSON.stringify(componentProps[workflow.Configuration.components[segment].component])}
		</div>
		{#if workflow.Configuration.components.length > parseInt(segment) + 1}
			<div class='flex w-full flex-row'>
				<a href='/workflow/{against}-{workflow_id}-{parseInt(segment)+1}'
					 class='flex flex-row bg-green-400 p-4 text-lg text-gray-800'>Next Segment</a>
			</div>
		{:else}
			<div class='flex w-full flex-row'>
				<a href='/patients-recipient/view/{against}' class='flex flex-row bg-green-400 p-4 text-lg text-gray-800'>Continue
					to
					Person</a>
			</div>
		{/if}
	{/if}
</div>
