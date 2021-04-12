const { sveltePreprocess } = require('svelte-preprocess/dist/autoProcess');
const { preprocess: windicssPreprocess } = require('svelte-windicss-preprocess');

const preprocessors = {
	svelte: sveltePreprocess(),
	windicss: windicssPreprocess({
		compile: false,
		prefix: 'windi-',
	}),
};

module.exports = {
	preprocess: Object.values(preprocessors),
	preprocessors,
};
