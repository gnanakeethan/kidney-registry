<script lang="ts">
	import { recipientId } from '../../../../../lib/state/recipient';

	function checkedClick(i) {
		checked[i] = checked[i] !== undefined ? !checked[i] : true;
	}

	let checked = [];
</script>

<div class="p-2">
	<div class=" p-2">
		DONORS {$recipientId}
		<a href="/recipients/view/{$recipientId}/examinations/{$recipientId}">Donor</a>
	</div>
	<div class="select-size flex flex-row">
		{#each { length: 10 } as _, i}
			<div>
				<input type="checkbox" bind:checked={checked[i]} id={i} />
				<label
					for={i}
					class="inline-block  cursor-pointer rounded-full border px-2 py-1 text-center"
				>
					Headache {i}
				</label>
			</div>
		{/each}
	</div>
</div>

<style>
	input[type='checkbox'] {
		display: none;
	}

	input[type='checkbox']:checked + label {
		@apply bg-green-500 text-white;
	}
</style>
