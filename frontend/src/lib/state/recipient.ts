import { writable } from 'svelte/store';

export const recipientId = writable<string>('');
export const recipient = writable<object>({});
export const donorsId = writable<string>('213456789');
