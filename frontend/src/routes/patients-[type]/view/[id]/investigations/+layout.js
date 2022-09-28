import { recipientId } from '$lib/state/recipient';
throw new Error("@migration task: Check if you need to migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
export async function load(loadInput) {
    const id = loadInput.params.id ?? '';
    console.log('PATIENT ID:', id);
    recipientId.set(id);
    return { id };
}
//# sourceMappingURL=+layout.js.map