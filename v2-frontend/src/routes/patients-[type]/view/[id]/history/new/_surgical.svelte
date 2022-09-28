<script lang="ts">
	import { beforeNavigate, goto } from '$app/navigation';
	import Field from '$lib/components/form-builder/Components/Field.svelte';
	import { NewHistoryDocument, NewHistoryMutation } from '$lib/graphql/generated';
	import { recipient, recipientId } from '$lib/state/recipient';
	import { activeUrl } from '$lib/state/SidebarStore';
	import { mutation } from '@urql/svelte';

	const newHistory = mutation<NewHistoryMutation>({
		query: NewHistoryDocument
	});
	let fields = [];
	let message = '';
	let values = {};
	export let i = 1;
	export let others = 1;
	$: formSet = !!$recipient.ID;

	$: if (formSet) {
		fields = [
			{
				type: 'input',
				name: 'Person.ID',
				value: $recipient.ID,
				prefix: {
					classes: ['hidden flex flex-col items-center justify-between']
				},
				attributes: {
					type: 'text',
					label: 'ID',
					id: 'recipient_id',
					readonly: true,
					classes: ['form-input bg-gray-200 rounded my-2']
				}
			},
			{
				type: 'input', // required
				name: 'Type', // required
				value: 'SURGICAL', // required
				prefix: { classes: ['mx-2 hidden'] },
				attributes: {
					id: 'Type', // required
					classes: ['hidden form-input rounded w-full readonly my-2'], // optional
					label: 'Type', // optional
					disabled: false, // optional
					readonly: true
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
					label: i === 0 ? 'Surgery' : '', // optional
					disabled: false, // optional
					readonly: false, // optional
					rows: 1, // optional
					cols: null // optional
				},
				rules: ['required'],
				messages: { required: 'Field must be filled' },
				extra: {
					multiple: false,
					loadItems: [
						{ title: 'Hernial Repair', value: 'Hernial Repair' },
						{ title: 'Lump removal', value: 'Lump removal' },
						{ title: 'Appendicectomy', value: 'Appendicectomy' },
						{ title: 'Thyroidectomy', value: 'Thyroidectomy' },
						{ title: 'Mastectomy', value: 'Mastectomy' },
						{ title: 'Road Traffic Accident', value: 'Road Traffic Accident' },
						{ title: 'Suturing', value: 'Suturing' },
						{ title: 'Kidney Transplant', value: 'Kidney Transplant' },
						{ title: 'AVF Creation', value: 'AVF Creation' }
					]
				}
			},
			{
				type: 'textarea', // required
				name: 'Description', // required
				value: '', // optional

				prefix: { classes: ['mx-2 flex-grow'] },
				attributes: {
					id: 'id-field', // required
					classes: 'form-textarea rounded w-full my-2', // optional
					label: i === 0 ? 'Description' : '', // optional
					disabled: false, // optional
					readonly: false, // optional
					rows: 1, // optional
					cols: null // optional
				}
			},
			{
				type: 'textarea', // required
				name: 'Medications', // required
				value: '', // optional
				prefix: { classes: ['mx-2 flex-grow'] },
				attributes: {
					id: 'id-field', // required
					classes: 'form-textarea rounded w-full my-2', // optional
					label: i === 0 ? 'Medications' : '', // optional
					disabled: false, // optional
					readonly: false, // optional
					rows: 1, // optional
					cols: null // optional
				}
			},
			{
				type: 'input',
				name: 'StartDate',
				value: '',
				prefix: { classes: ['mx-2'] },
				attributes: {
					type: 'date',
					label: i === 0 ? 'Surgery Date' : '',
					id: 'dob',
					max: new Date().toISOString().split('T')[0],
					min: '1900-01-01',
					classes: ['form-input rounded w-full']
				}
			}
		];
	}
	let isValidForm = false;

	beforeNavigate(function (p1: { from: URL; to: URL | null; cancel: () => void }) {
		if (!isValidForm) {
			if (
				!confirm(
					'Are you sure you want to navigate away from this page?\n\n' +
						'\n\nPress OK to continue, or Cancel to stay on the current page.'
				)
			) {
				p1.cancel();
			} else {
				console.log(p1.from);
				$activeUrl = p1.from.pathname;
			}
		}
	});

	export function onSubmit() {
		if (isValidForm) {
			try {
				const valuesRef: { Reason: any } = deepen(values);

				newHistory({ input: valuesRef }).then((result) => {
					console.log(result);
					alert('Data Saved');
					if (others == 1) {
						goto('/patients-recipient/view/' + $recipientId + '/history/');
					}
				});
			} catch (e) {
				alert('Please fill all the required fields');
				message = 'Please fill all the required fields';
			}
			// message = 'Saving Data....';
		} else {
			message = 'Please fill all the required fields';
		}
	}

	function deepen(obj) {
		const result = {};

		// For each object path (property key) in the object
		for (const objectPath in obj) {
			// Split path into component parts
			const parts = objectPath.split('.');

			// Create sub-objects along path as needed
			let target = result;
			while (parts.length > 1) {
				const part = parts.shift();
				target = target[part] = target[part] || {};
			}

			// Set value at end of path
			target[parts[0]] = obj[objectPath];
		}

		return result;
	}
</script>

<div class="flex h-full flex-wrap p-2">
	{#if formSet}
		<form class="mx-auto my-auto w-full rounded" on:submit|preventDefault={onSubmit}>
			{#if i === 0}
				<div class="text-xl font-bold capitalize">
					{values.Type?.toString().toLowerCase()} History Record For {$recipient.FirstName}
				</div>
			{/if}
			<div class="flex flex-row items-center justify-between">
				<Field bind:isValidForm bind:values {fields} />
				{message}
				<button class="rounded bg-green-400 py-2 px-4 uppercase text-white" type="submit"
					>Save
				</button>
			</div>
		</form>
	{:else}
		Loading...
	{/if}
</div>
