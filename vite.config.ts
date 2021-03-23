import svelte from '@svitejs/vite-plugin-svelte';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import VitePluginWindicss from 'vite-plugin-windicss';
import { createSveltePreprocessHandling } from './svelte.config';

const DEFAULT_PORT = 5000;

export default defineConfig(({ mode }) => {
	Object.assign(process.env, loadEnv(mode, process.cwd()));

	const isProduction = mode === 'production';

	const port: number = parseInt(process.env.PORT) || DEFAULT_PORT;

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
			VitePluginWindicss(),
			svelte({
				preprocess: createSveltePreprocessHandling(),
				hot: !isProduction,
				compilerOptions: {
					dev: !isProduction,
				},
			}),
			// tsconfigPaths(),
		],
	};
});
