throw new Error("@migration task: Check if you need to migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
export async function load(loadInput) {
    const workflow_id = loadInput.params.workflow ?? '';
    const segment = loadInput.params.segment ?? '';
    const against = loadInput.params.against ?? '';
    console.log('WORKFLOW IDENTIFIER:', workflow_id);
    console.log('SEGMENT:', segment);
    console.log('AGAINST:', against);
    return { workflow_id, segment, against };
}
//# sourceMappingURL=+page.js.map