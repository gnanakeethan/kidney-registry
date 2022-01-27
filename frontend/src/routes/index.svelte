<script>
	import { userType } from '$lib/state/auth';

	let userTypeLocal = '';
	userType.subscribe(value => {
		userTypeLocal = value;
	});

	// function switchUserType() {
	// 	if (userTypeLocal === 'advertiser') {
	// 		userType.set('publisher');
	// 	} else {
	// 		userType.set('advertiser');
	// 	}
	// }
</script>
