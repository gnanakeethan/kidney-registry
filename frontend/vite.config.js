import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import path from 'path';
import watchAndRun from '@kitql/vite-plugin-watch-and-run';
import houdini from 'houdini/vite';

/** @type {import('vite').UserConfig} */
const config = {
	server: {
		fs: {
			allow: ['.'],
		},
	},
	ssr: {
		// noExternal: [production && '@carbon/charts'].filter(Boolean),
	},
	optimizeDeps: {
		include: ['@carbon/charts'],
		exclude: ['@urql/svelte']
	},
	plugins: [
		houdini(),
		sveltekit(),
		watchAndRun([
			{
				name: 'Houdini',
				watch: path.resolve('src/**/*.(gql|graphql|svelte)'),
				run: 'npm run generate',
				delay: 100,
				watchKind: ['ready', 'add', 'change', 'unlink'],
			},
			{
				name: 'Houdini',
				watch: path.resolve('houdini.config.js'),
				run: 'npm run generate',
				delay: 100,
			},
		]),
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
