import {writable, Writable} from 'svelte/store';

export interface Notifications {
    notificationsActive: boolean;
    messagesActive: boolean;
    notificationCounter: number;
    messages: number;
}

export const NotificationsStatus: Writable<Notifications> = writable({
    notificationsActive: true,
    notificationCounter: 2,
    messages: 2,
    messagesActive: true
} as Notifications);
