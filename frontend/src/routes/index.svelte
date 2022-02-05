<script>
	import { userType } from '$lib/state/auth';

	let userTypeLocal = '';
	userType.subscribe((value) => {
		userTypeLocal = value;
	});
</script>

<div>
	<div>
		<div class="m-4 m-2 h-5 p-4">
			<div />
		</div>
	</div>
</div>
