import { localStorage, persist, PersistentStore } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store';

export interface AuthState {
	loggedIn: boolean;
	redirectPage: string;
	token: string;
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
