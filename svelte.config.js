/** @type {import('svelte-preprocess').default} */
// @ts-ignore
const sveltePreprocess = require('svelte-preprocess');
// const { preprocess: windicssPreprocess } = require('svelte-windicss-preprocess');

function createSveltePreprocessHandling() {
	return [
		sveltePreprocess({
			scss: {
				includePaths: ['theme'],
			},
		}),
		// windicssPreprocess({
		// 	compile: false,
		// 	prefix: 'windi-',
		// }),
	];
}

module.exports = {
	preprocess: createSveltePreprocessHandling(),
	createSveltePreprocessHandling,
};
