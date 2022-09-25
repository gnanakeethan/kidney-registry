<script context="module" lang="ts">
	throw new Error("@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)");

	// import { donorsId } from '$lib/state/recipient';
	// import type { LoadEvent,LoadOutput } from "@sveltejs/kit";

	// export async function load(loadInput: LoadEvent): Promise<LoadOutput> {
	// 	console.log(loadInput.url);
	// 	const { donorId } = loadInput.params;
	// 	donorsId.set(donorId);
	// 	return { props: { donorId } };
	// }
</script>

<script lang="ts">
	throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

	import { recipientId } from '$lib/state/recipient';

	export let donorId = '';
</script>

<div class="p-2">
	<div class="p-2">
		PATIENT :{$recipientId}
		DONOR: {donorId}
	</div>
</div>
