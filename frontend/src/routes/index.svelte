<script lang='ts'>
	import Examinations from './examinations/index.svelte';
	import FollowUps from './followups/index.svelte';
	import Investigations from './investigations/index.svelte';
</script>
<div class='m-4'>
	<div class='text-3xl'>
		Latest Follow Ups
	</div>
	<FollowUps limit='2' />
	<div class='text-3xl'>
		Latest Investigations
	</div>
	<Investigations limit='2' />
	<div class='text-3xl'>
		Latest Examinations
	</div>
	<Examinations limit='2' />
</div>