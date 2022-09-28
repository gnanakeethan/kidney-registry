import { writable } from 'svelte/store';
export const NotificationsStatus = writable({
    notificationsActive: true,
    notificationCounter: 2,
    messages: 2,
    messagesActive: true
});
//# sourceMappingURL=notifications.js.map