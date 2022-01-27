import { writable, Writable } from 'svelte/store';

export interface Notifications {
	notificationsActive: boolean;
	messagesActive: boolean;
	notificationCounter: number;
	messages: number;
}

export const NotificationsStatus: Writable<Notifications> = writable({
	notificationCounter: 2,
	messagesActive     : true,
	notificationsActive: true,
	messages           : 1
} as Notifications);
