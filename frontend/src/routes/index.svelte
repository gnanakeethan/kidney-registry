<script>
	import { userType } from '$lib/state/auth';

	let userTypeLocal = '';
	userType.subscribe((value) => {
		userTypeLocal = value;
	});
</script>

<div class="?">
	<div>
		<div class="grid h-5 w-1/6 grid-cols-4 p-4">
			<div class="font-serif">Testing</div>
			<div>Testing</div>
			<div class="font-sans">Testing</div>
			<div class="font-serif">Testing</div>
			<div>Testing</div>
			<div class="font-serif">Testing</div>
		</div>
	</div>
</div>
