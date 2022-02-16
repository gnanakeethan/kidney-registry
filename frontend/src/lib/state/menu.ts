import { Writable, writable } from 'svelte/store';
import Component from 'svelte/types/compiler/compile/Component';

export interface MenuState {
	menuItems: MenuItem[];
	active: number;
	activeUrl: string;
}

export interface MenuItem {
	name: string;
	icon: Component;
	url: string;
	active: boolean;
}

export const menuState: Writable<MenuState> = writable({
	menuItems: [
		{
			name: 'Dashboard',
			icon: null,
			url: '/'
		}
	],
	active: 0
} as MenuState);

export const bottomMenuState: Writable<MenuState> = writable({
	menuItems: [
		{
			name: 'Account Settings',
			icon: null,
			url: '/account-settings'
		}
	],
	active: 0
} as MenuState);
