import { writable } from 'svelte/store';
import Component from 'svelte/types/compiler/compile/Component';
export const menuState = writable({
    menuItems: [
        {
            name: 'Dashboard',
            icon: null,
            url: '/'
        }
    ],
    active: 0
});
export const bottomMenuState = writable({
    menuItems: [
        {
            name: 'Account Settings',
            icon: null,
            url: '/account-settings'
        }
    ],
    active: 0
});
//# sourceMappingURL=menu.js.map