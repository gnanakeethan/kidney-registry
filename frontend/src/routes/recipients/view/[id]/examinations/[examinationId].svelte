<script context="module" lang="ts">
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types';

	export async function load(loadInput: LoadInput): Promise<LoadOutput> {
		console.log(loadInput.url);
		const { examinationId } = loadInput.params;
		return { props: { examinationId } };
	}
</script>

<script lang="ts">
	import { recipientId } from '$lib/state/recipient';

	export let examinationId = '';
</script>

<div class="p-2">
	<div class="p-2">
		RECIPIENT :{$recipientId}
		DONOR: {examinationId}
	</div>
</div>
