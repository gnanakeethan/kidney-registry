import { donorsId, recipientId } from '$lib/state/recipient';
import type { LoadEvent,LoadOutput } from "@sveltejs/kit";

throw new Error("@migration task: Check if you need to migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
export async function load(loadInput: LoadEvent): Promise<LoadOutput> {
	const id = loadInput.params.id ?? '';
	console.log('PATIENT ID:', id);
	recipientId.set(id);
	return { id };
}
