const { sveltePreprocess } = require('svelte-preprocess/dist/autoProcess');
const { preprocess: windicssPreprocess } = require('svelte-windicss-preprocess');

function createSveltePreprocessHandling() {
	return [
		windicssPreprocess({
			compile: false,
			prefix: 'windi-',
		}),
		sveltePreprocess(),
	];
}

module.exports = {
	preprocess: createSveltePreprocessHandling(),
	createSveltePreprocessHandling,
};
