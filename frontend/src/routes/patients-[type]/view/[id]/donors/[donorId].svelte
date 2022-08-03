<script context="module" lang="ts">
	import { donorsId } from '$lib/state/recipient';
	import type { LoadEvent,LoadOutput } from "@sveltejs/kit";

	export async function load(loadInput: LoadEvent): Promise<LoadOutput> {
		console.log(loadInput.url);
		const { donorId } = loadInput.params;
		donorsId.set(donorId);
		return { props: { donorId } };
	}
</script>

<script lang="ts">
	import { recipientId } from '$lib/state/recipient';

	export let donorId = '';
</script>

<div class="p-2">
	<div class="p-2">
		PATIENT :{$recipientId}
		DONOR: {donorId}
	</div>
</div>
