<script context="module" lang="ts">
	import '../../assets/styles/home.scss';
</script>

<script lang="ts">
	import { ENV } from '$lib/environment/environment';
	import { authState, AuthState } from '../../lib/state/auth';
	import { createClient, setClient } from '@urql/svelte';
	import { goto } from '$app/navigation';

	let auth: AuthState;
	authState.subscribe((authStateS: AuthState) => {
		auth = authStateS;
		if (auth.loggedIn && auth.token.length > 5) {
			goto(auth.redirectPage);
		}
	});
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
