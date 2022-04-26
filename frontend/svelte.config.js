import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-node';
import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

import getRepoInfo from 'git-repo-info';

var info = getRepoInfo();
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base: process.env.APP_PATH ?? ''
		},
		csp: {
			mode: 'auto',
			directives: {
				'script-src': ['self']
			}
		},
		files: {
			assets: 'src/assets',
			routes: 'src/routes',
			template: 'src/app.html'
		},
		prerender: {
			enabled: true,
			default: true
		},
		trailingSlash: 'always',
		version: {
			name: info.lastTag + '-' + info.commitsSinceLastTag + '-' + info.abbreviatedSha,
			pollInterval: 1000 * 60 * 60 * 24 * 30
		},
		floc: false,
		vite: {
			server: {},
			optimizeDeps: {
				exclude: ['@urql/svelte']
			},
			plugins: [
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
		}
	}
};

export default config;
