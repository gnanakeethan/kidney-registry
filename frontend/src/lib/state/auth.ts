import {localStorage, persist, PersistentStore} from '@macfja/svelte-persistent-store';
import {writable} from 'svelte/store';

export interface AuthState {
    loggedIn: boolean;
    token: string;
    loginAs: {
        token: string,
        displayName: string,
        email: string,
        userType: string,
    }
}

export const userType: PersistentStore<String> = persist(writable('consultant'), localStorage(), 'userType');
export const authState: PersistentStore<AuthState> = persist(writable({
    loggedIn: false,
    token: '',
    loginAs: {
        token: '',
        displayName: '',
        email: '',
        userType: '',
    }
} as AuthState), localStorage(), 'authState');
