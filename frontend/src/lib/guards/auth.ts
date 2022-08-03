import { base } from '$app/paths';
import { LoadEvent, LoadOutput } from '@sveltejs/kit';
import { auth, authState } from '../state/auth';

export async function authGuard({ url, params, props }: LoadEvent): Promise<LoadOutput> {
	const token = url.searchParams.get('token');
	if (token !== undefined && token !== null && token.length > 32) {
		auth.token = token;
		auth.loggedIn = true;
		auth.redirectPage = url.pathname;
		authState.set(auth);
		return { status: 302, redirect: url.pathname };
	}
	if ((auth.loggedIn && auth.token.length > 5) || auth.viewLoaded !== undefined) {
		return {};
	} else {
		return { status: 302, redirect: base + '/auth/login' };
	}
}
