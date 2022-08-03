import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';


/** @type {import('vite').UserConfig} */
const config = {
	server: {},
	ssr: {
		// noExternal: [production && '@carbon/charts'].filter(Boolean),
	},
	optimizeDeps: {
		include: ['@carbon/charts'],
		exclude: ['@urql/svelte']
	},
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
			customCollections: {
				sustain: FileSystemIconLoader('src/assets/icons')
			}
		})
	],
	resolve: {
		alias: {
			tslib: 'tslib/tslib.es6.js',
			'./runtimeConfig': './runtimeConfig.browser'
		}
	},
	build: {
		rollupOptions: {
			output: {
				intro: 'if(exports === undefined){var exports ={}; var self = {}}'
			}
		}
	}
};

export default config;
