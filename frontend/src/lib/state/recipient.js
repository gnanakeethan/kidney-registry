import { createLocalStorage, persist } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store';
export const recipientId = writable('');
export const recipient = writable({});
export const recipientOverview = writable({});
export const patientType = writable('');
export const lastRecipientId = persist(writable(''), createLocalStorage(), 'lastRecipientId');
export const lastRecipient = persist(writable({}), createLocalStorage(), 'lastRecipient');
export const donorSet = writable(false);
export const donorsId = writable('213456789');
//# sourceMappingURL=recipient.js.map