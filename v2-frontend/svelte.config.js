import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import houdini from 'houdini-svelte/preprocess';
import * as path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [houdini(), vitePreprocess()],

	kit: {
		adapter: adapter(),
		alias: {
			$houdini: path.resolve('.', '$houdini')
		}
	}
};

export default config;
