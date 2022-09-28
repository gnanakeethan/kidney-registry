import { createSessionStorage, persist } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store';
/*
 * The store allows to avoid passing `activeUrl` and `onLinkClick`
 * as prop to every `NavigationLinkGroup` & `NavigationLink`.
 */
export const minimized = persist(writable(false), createSessionStorage(), 'sidebarState');
export const activeUrl = writable('');
export const activeGroup = writable(null);
export const onLinkClick = writable(null);
export let activePath = '';
activeUrl.subscribe((result) => {
    activePath = result;
});
//# sourceMappingURL=SidebarStore.js.map