<script>
	import { userType } from '$lib/state/auth';

	let userTypeLocal = '';
	userType.subscribe((value) => {
		userTypeLocal = value;
	});
</script>

<div>
	<div>
		<div class="h-5 p-4">
			<p>Testing</p>
		</div>
	</div>
</div>
