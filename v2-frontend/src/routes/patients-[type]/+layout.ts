import { patientType } from '$lib/state/recipient';
import type { LoadEvent,LoadOutput } from "@sveltejs/kit";

throw new Error("@migration task: Check if you need to migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
export async function load(loadInput: LoadEvent): Promise<LoadOutput> {
	const type = loadInput.params.type ?? '';
	console.log('PATIENT TYPE:', type);
	patientType.set(type);
	return { type };
}
