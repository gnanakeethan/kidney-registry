import { goto } from '$app/navigation';
import { createLocalStorage, persist } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store';

export interface AuthState {
	user?: {
		name: string;
		id: string;
		Roles: {
			name: string;
		}[];
	};
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

export const userType = persist(
	writable('consultant'),
	createLocalStorage(),
	'userType'
);
export const authState = persist(
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
	createLocalStorage(),
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
