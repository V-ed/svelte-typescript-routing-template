/** @type {import('svelte-preprocess').default} */
// @ts-ignore
const sveltePreprocess = require('svelte-preprocess');

const preprocessors = {
	svelte: sveltePreprocess({
		scss: {
			includePaths: ['theme'],
		},
	}),
};

module.exports = {
	preprocess: Object.values(preprocessors),
	preprocessors,
};
