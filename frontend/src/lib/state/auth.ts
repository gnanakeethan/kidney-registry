import { goto } from '$app/navigation';
import { localStorage, persist, PersistentStore } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store';

export interface AuthState {
	loggedIn: boolean;
	redirectPage: string;
	token: string;
	viewLoaded?: boolean;
	loginAs: {
		token: string;
		displayName: string;
		email: string;
		userType: string;
	};
}

export const userType: PersistentStore<string> = persist(
	writable('consultant'),
	localStorage(),
	'userType'
);
export const authState: PersistentStore<AuthState> = persist(
	writable({
		loggedIn: false,
		token: '',
		loginAs: {
			token: '',
			displayName: '',
			email: '',
			userType: ''
		},
		redirectPage: '/'
	} as AuthState),
	localStorage(),
	'authState'
);

export let auth: AuthState = null;
authState.subscribe((authStateS) => {
	auth = authStateS;
	if (auth.loggedIn && auth.token.length > 5) {
		if (auth.redirectPage !== '/') {
			goto(auth.redirectPage);
		}
	}
});
