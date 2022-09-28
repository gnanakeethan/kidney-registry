throw new Error("@migration task: Check if you need to migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
export async function load(loadInput) {
    console.log(loadInput.url);
    const { workupId } = loadInput.params;
    return { workupId };
}
//# sourceMappingURL=+page.js.map