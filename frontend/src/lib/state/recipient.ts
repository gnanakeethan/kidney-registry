import { localStorage, persist, PersistentStore } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store';

export const recipientId = writable<string>('');
export const recipient = writable<object>({});
export const recipientOverview = writable<object>({});
export const patientType = writable<string>('');

export const lastRecipientId: PersistentStore<string> = persist(
	writable<string>(''),
	localStorage(),
	'lastRecipientId'
);
export const lastRecipient: PersistentStore<object> = persist(
	writable<object>({}),
	localStorage(),
	'lastRecipient'
);
export const donorSet = writable<boolean>(false);

export const donorsId = writable<string>('213456789');
