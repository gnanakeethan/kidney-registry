<script context='module' lang='ts'>
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types';

	export async function load(loadInput: LoadInput): Promise<LoadOutput> {
		const workflow = loadInput.params.workflow ?? '';
		const segment = loadInput.params.segment ?? '';
		const against = loadInput.params.against ?? '';
		console.log('WORKFLOW IDENTIFIER:', workflow);
		console.log('SEGMENT:', segment);
		console.log('AGAINST:', against);
		return { props: { workflow, segment, against } };
	}
</script>

<script lang='ts'>
	console.log('processing');
	let workflow, segment, against = '';
	$: console.log('WORKFLOW IDENTIFIER:', workflow);
	$: console.log('SEGMENT:', segment);
	$: console.log('AGAINST:', against);
</script>

<div />
