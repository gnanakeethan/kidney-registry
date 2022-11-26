import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
// import adapter from '@sveltejs/adapter-node';
import getRepoInfo from 'git-repo-info';

var info = getRepoInfo();
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		}),
	],
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		alias: {
		},
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
			appTemplate: 'src/app.html'
		},
		version: {
			name: info.lastTag + '-' + info.commitsSinceLastTag + '-' + info.abbreviatedSha,
			pollInterval: 1000 * 60 * 60 * 24 * 30
		},
	}
};

export default config;
