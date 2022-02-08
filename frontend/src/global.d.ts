/// <reference types="@sveltejs/kit" />
interface ImportMetaEnv {
	VITE_BASE_URL: string;
}

declare module '~icons/*' {
	export { SvelteComponentDev as default } from 'svelte/internal';
}
