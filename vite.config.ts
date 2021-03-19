import svelte from '@svitejs/vite-plugin-svelte';
import { resolve } from 'path';
import { sveltePreprocess } from 'svelte-preprocess/dist/autoProcess';
import { defineConfig, loadEnv } from 'vite';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig(({ mode }) => {
	Object.assign(process.env, loadEnv(mode, process.cwd()));

	const isProduction = mode === 'production';

	const port: number = parseInt(process.env.PORT) || 5000;

	const targets = ['es2020'];

	return {
		build: {
			cssCodeSplit: false,
			minify: isProduction,
			sourcemap: !isProduction,
			target: targets,
		},
		server: {
			port: port,
		},
		optimizeDeps: {
			exclude: ['@roxi/routify'],
		},
		resolve: {
			dedupe: ['@roxi/routify'],
			alias: {
				svelte: resolve(__dirname, 'node_modules/svelte'),
				$: resolve(__dirname, './src'),
			},
		},
		plugins: [
			WindiCSS(),
			svelte({
				preprocess: sveltePreprocess(),
				hot: !isProduction,
				emitCss: true,
				compilerOptions: {
					dev: !isProduction,
				},
			}),
			// tsconfigPaths(),
		],
	};
});
