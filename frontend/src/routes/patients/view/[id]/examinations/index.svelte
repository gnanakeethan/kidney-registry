<script lang="ts">
	import AbdominalExamination from './_examination-abdominal.svelte';
	import CardioExamination from './_examination-cardio.svelte';
	import CNSExamination from './_examination-cns.svelte';
	import GeneralExamination from './_examination-general.svelte';
	import RespiratoryExamination from './_examination-respiratory.svelte';
</script>

<div class="mx-16 mt-8 w-1/2">
	<GeneralExamination />
	<CardioExamination />
	<RespiratoryExamination />
	<AbdominalExamination />
	<CNSExamination />
</div>
