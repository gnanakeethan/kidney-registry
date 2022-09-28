import { goto } from '$app/navigation';
import { createLocalStorage, persist } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store';
export const userType = persist(writable('consultant'), createLocalStorage(), 'userType');
export const authState = persist(writable({
    loggedIn: false,
    token: '',
    loginAs: {
        token: '',
        displayName: '',
        email: '',
        userType: ''
    },
    redirectPage: '/'
}), createLocalStorage(), 'authState');
export let auth = null;
authState.subscribe((authStateS) => {
    auth = authStateS;
    if (auth.loggedIn && auth.token.length > 5) {
        if (auth.redirectPage !== '/') {
            goto(auth.redirectPage);
        }
    }
});
//# sourceMappingURL=auth.js.map