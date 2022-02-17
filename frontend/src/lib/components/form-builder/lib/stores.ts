import { Writable, writable } from 'svelte/store';

export const storeValues = writable({
	valid: true
});

export const currentFieldStore = writable(null);

export interface FormValues {
	valid: true;
	values: Record<string, unknown>;
}

export const valuesForm: Writable<FormValues> = writable({
	valid: true,
	values: {}
});

export const fieldsStore = writable([]);

export const settingStore = writable({
	style: null
});

export const alertsStore = writable([]);

export const testStore = writable([]);
