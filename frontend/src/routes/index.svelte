<script>
	import { userType } from '$lib/state/auth';

	let userTypeLocal = '';
	userType.subscribe((value) => {
		userTypeLocal = value;
	});
</script>

<div class="">
	<a href="/app">App Page</a>
</div>
