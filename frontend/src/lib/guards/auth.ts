import { base } from '$app/paths';
import { LoadInput, LoadOutput } from '@sveltejs/kit';
import { AuthState, authState } from '../state/auth';

let auth: AuthState = null;
authState.subscribe((authStateS) => (auth = authStateS));

export async function authGuard({ url, params, props }: LoadInput): Promise<LoadOutput> {
	const token = url.searchParams.get('token');
	if (token !== undefined && token !== null && token.length > 32) {
		auth.token = token;
		auth.loggedIn = true;
		auth.redirectPage = url.pathname;
		authState.set(auth);
		return { status: 302, redirect: url.pathname };
	}
	if (auth.loggedIn && auth.token.length > 5) {
		return {};
	} else {
		auth.redirectPage = url.pathname;
		authState.set(auth);
		return { status: 302, redirect: base + '/auth/login' };
	}
}

export default {
	authGuard
};
