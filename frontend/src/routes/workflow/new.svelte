<script>
	import FollowUpComponent from '../patients-[type]/view/[id]/followups/create.svelte';
	import WorkupComponent from '../patients-[type]/view/[id]/workups/new.svelte';
	import ExaminationComponent from '../patients-[type]/view/[id]/examinations/new.svelte';
	import MedicalHistoryComponent from '../patients-[type]/view/[id]/history/new/medical.svelte';
	import SurgicalHistoryComponent from '../patients-[type]/view/[id]/history/new/surgical.svelte';
	import Field from '$lib/components/form-builder/Components/Field.svelte';

	const listOfComponents = [];
	listOfComponents.push({ title: 'followup', value: FollowUpComponent });
	listOfComponents.push({ title: 'workup', value: WorkupComponent });
	listOfComponents.push({ title: 'examination', value: ExaminationComponent });
	listOfComponents.push({ title: 'medical-history', value: MedicalHistoryComponent });
	listOfComponents.push({ title: 'surgical-history', value: SurgicalHistoryComponent });
	const fields = [
		{
			type: 'autocomplete', // required
			name: 'Reason', // required
			value: '', // optional
			prefix: { classes: ['mx-2 flex-grow'] },
			attributes: {
				id: 'id-field', // required
				classes: 'form-input rounded w-full my-2', // optional
				label: 'Sample', // optional
				disabled: false, // optional
				readonly: false, // optional
				rows: 1, // optional
				cols: null // optional
			},
			rules: ['required'],
			messages: { required: 'Field must be filled' },
			extra: {
				multiple: true,
				loadItems: listOfComponents
			}
		}
	];
	let isValidForm = false;
	let values = {};
	$: console.log(values);
</script>

<div>
	<Field bind:isValidForm bind:values {fields} />
	{#if values.Reason !== undefined && values.Reason.length > 0}
		{#each values.Reason as reason}
			{reason.title}
			<svelte:component this={reason.value} />
		{/each}
	{/if}
</div>
