import { base } from '$app/paths';
import { LoadInput, LoadOutput } from '@sveltejs/kit';
import { AuthState, authState } from '../state/auth';

let auth: AuthState = { loggedIn: false, token: '', loginAs: null };
authState.subscribe((authStateS) => (auth = authStateS));

export async function authGuard({ url, params, props }: LoadInput): Promise<LoadOutput> {
	const token = url.searchParams.get('token');
	console.log(url, params, props, auth);
	if (token !== undefined && token !== null && token.length > 32) {
		authState.set({ loggedIn: true, token: token, loginAs: null });
		console.log(base, '1');
		return { status: 302, redirect: '/' };
	}
	if (auth.loggedIn && auth.token.length > 5) {
		return {};
	} else {
		console.log(base, '3');
		return { status: 302, redirect: base + '/auth/login' };
	}
}

export default {
	authGuard
};
