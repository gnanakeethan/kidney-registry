<script lang="ts">
	import { goto } from '$app/navigation';
	import { ENV } from '$lib/environment/environment';
	import { createClient, setClient } from '@urql/svelte';
	import { authState, AuthState } from '../../../lib/state/auth';

	let auth: AuthState;
	authState.subscribe((authStateS: AuthState) => {
		auth = authStateS;
		if (auth.loggedIn && auth.token.length > 5) {
			goto(auth.redirectPage);
		}
	});
	auth.viewLoaded = true;
	authState.set(auth);
	const client = createClient({
		url: ENV.basePath,
		fetchOptions: () => {
			console.log(auth);
			if (auth.token.length > 0) {
				return {
					headers: { authorization: auth.token.length > 0 ? `Bearer ${auth.token}` : '' }
				};
			}
			return {};
		},
		requestPolicy: 'cache-and-network'
	});
	setClient(client);
</script>

<slot />
