<script lang='ts'>
	import Field from '$lib/components/form-builder/Components/Field.svelte';

	import {
		AddWorkflowDocument,
		AddWorkflowMutation,
		ListExaminationsDocument,
		ListInvestigationsDocument,
		ListWorkupsDocument
	} from '$lib/graphql/generated';
	import { mutation, operationStore, query } from '@urql/svelte';
	import { capitalize } from 'lodash';
	import { listOfComponents } from '../listOfComponents';
	// import { AddWorkflowMutation } from '../../lib/graphql/generated';

	const fields = [
		{
			type: 'input',
			name: 'Name',
			value: '',
			prefix: {
				classes: ['m-2']
			},
			attributes: {
				type: 'text',
				label: ' Name',
				id: 'name',
				classes: ['form-input rounded w-full float-right'],
				placeholder: 'Workflow Name'
			},
			rules: [],
			messages: {
				required: 'name field is required!',
				minlen: 'name field must have more that 6 characters!'
			}
		},

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
	let toggle = false;
	let isValidForm = false;
	let values = {};
	$: console.log(values);
	let listItems = {};
	let listItemsTemp = {};
	const workupsQuery = operationStore(ListWorkupsDocument);
	query(workupsQuery);
	workupsQuery.subscribe((data) => {
		console.log(data);
		if (data.fetching === false && data.stale === false) {
			listItemsTemp['workup'] = data.data.listWorkups.items;
			listItems = listItemsTemp;
		}
		toggle = true;
		console.log(listItems);
	});

	let investigations = [];
	const investigationsQuery = operationStore(ListInvestigationsDocument);
	query(investigationsQuery);
	investigationsQuery.subscribe((data) => {
		console.log(data);
		if (data.fetching === false && data.stale === false) {
			listItemsTemp['investigation'] = data.data.listInvestigations.items;
			listItems = listItemsTemp;

		}
		toggle = true;
		console.log(listItems);
	});
	let examinations = [];
	const examinationsQuery = operationStore(ListExaminationsDocument);
	query(examinationsQuery);
	examinationsQuery.subscribe((data) => {
		console.log(data);
		if (data.fetching === false && data.stale === false) {
			listItemsTemp['examination'] = data.data.listExaminations.items;
			listItems = listItemsTemp;
		}
		console.log(listItems);
		toggle = true;
	});
	let configuration = [];
	$:console.log(configuration);

	function newConfig(i, title) {
		console.log(i);
		configuration[i] = {};
		configuration[i]['component'] = title;
		configuration[i]['component_id'] = componentIds[i] ?? '';
	}

	function configurationChanged() {
		console.log(configuration);
	}

	let componentIds = [];
	const addWorkflow = mutation<AddWorkflowMutation>({
		query: AddWorkflowDocument
	});

	function save() {
		for (let i = 0; i < values.Reason.length; i++) {
			newConfig(i, values.Reason[i].title);
		}
		console.log(configuration);
		let workflowInput = {
			Name: values.Name,
			Configuration: { components: configuration }
		};
		addWorkflow({ workflowInput }).then((result) => {
			console.log(result);
			alert('Saved');
		});
	};
</script>
{#if toggle}

	<div>
		<Field bind:isValidForm bind:values {fields} inline={true} />
		{JSON.stringify(configuration)} <br>
		<div class='flex flex-col'>
			{#if values.Reason !== undefined && values.Reason.length > 0}
				{#each values.Reason as reason,i}
					<div class='flex flex-row m-4 items-center'>
						{#if listItems[reason.title] !== undefined && listItems[reason.title].length > 0}
							<div class='mx-4'>Select {capitalize(reason.title)}</div>
							<select name='' id='' bind:value={componentIds[i]} on:change={()=>configurationChanged()}
											class='form-select'>
								{#each listItems[reason.title] as item,j}
									<option value={item.node.ID}>{item.node.Details.Name}</option>
								{/each}
							</select>
						{/if}
					</div>
				{/each}
			{/if}
			<button class='bg-green-400 px-4 py-2 mx-4' on:click={()=> save()}>Save</button>
		</div>
	</div>

{/if}