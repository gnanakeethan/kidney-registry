<script lang='ts'>
	import { PatientStatusChartDocument, PatientStatusChartQuery } from '$lib/graphql/generated';
	import { PieChart } from '@carbon/charts-svelte';
	import '@carbon/charts/styles.min.css';
	import { operationStore, query } from '@urql/svelte';
	// import 'carbon-components/css/carbon-components.min.css';
	import Examinations from './examinations/+page.svelte';
	import FollowUps from './followups/+page.svelte';
	import Investigations from './investigations/+page.svelte';

	$: patients = operationStore(PatientStatusChartDocument);
	$: query<PatientStatusChartQuery>(patients);
</script>
<div class='m-4'>
	{#if $patients.fetching}
		<p>Loading...</p>
	{:else if $patients.error}
		<p>Oh no... {$patients.error.message}</p>
	{:else if $patients.data.patientStatusChart.data !== null}
		<PieChart data={$patients.data.patientStatusChart.data}
							options={{"title":$patients.data.patientStatusChart.name,"resizable":true,"height":"400px"}} />
	{:else}
		No Records
	{/if}

	<div class='text-3xl'>
		Latest Follow Ups
	</div>
	<FollowUps limit='2' />
	<div class='text-3xl'>
		Latest Investigations
	</div>
	<Investigations limit='2' />
	<div class='text-3xl'>
		Latest Examinations
	</div>
	<Examinations limit='2' />
</div>
