import { createLocalStorage, persist } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store';

export const recipientId = writable<string>('');
export const recipient = writable<object>({});
export const recipientOverview = writable<object>({});
export const patientType = writable<string>('');

export const lastRecipientId = persist(
	writable<string>(''),
	createLocalStorage(),
	'lastRecipientId'
);
export const lastRecipient = persist(
	writable<object>({}),
	createLocalStorage(),
	'lastRecipient'
);
export const donorSet = writable<boolean>(false);

export const donorsId = writable<string>('213456789');
