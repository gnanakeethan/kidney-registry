import { localStorage, persist } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store';

/*
 * The store allows to avoid passing `activeUrl` and `onLinkClick`
 * as prop to every `NavigationLinkGroup` & `NavigationLink`.
 */

export const activeUrl = writable(null);

export const onLinkClick = writable(null);

export const minimized = persist(writable(false), localStorage(), 'sidebarState');

export let activePath = '';

activeUrl.subscribe((result) => {
	console.log(result);
	activePath = result;
});
