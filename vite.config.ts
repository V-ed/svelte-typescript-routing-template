import VitePluginSvelte from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import { defineConfig, loadEnv } from 'vite';
import { Options as VitePWAOptions, VitePWA as VitePluginPWA } from 'vite-plugin-pwa';
import VitePluginWindicss from 'vite-plugin-windicss';
import VitePluginTsconfigPaths from 'vite-tsconfig-paths';

const DEFAULT_PORT = 5000;

export const manifestOptions: VitePWAOptions['manifest'] = {
	name: 'Svelte Typescript Routing Template',
	short_name: 'Svelte Typescript Routing Template',
	icons: [
		{
			src: '/icons/pwa/icon-192x192.png',
			sizes: '192x192',
			type: 'image/png',
		},
		{
			src: '/icons/pwa/icon-256x256.png',
			sizes: '256x256',
			type: 'image/png',
		},
		{
			src: '/icons/pwa/icon-384x384.png',
			sizes: '384x384',
			type: 'image/png',
		},
		{
			src: '/icons/pwa/icon-512x512.png',
			sizes: '512x512',
			type: 'image/png',
		},
	],
};

export default defineConfig(({ mode }) => {
	Object.assign(process.env, loadEnv(mode, process.cwd()));

	const isProduction = mode === 'production';

	const port: number = parseInt(process.env.PORT) || DEFAULT_PORT;

	const targets = ['es2020'];

	return {
		build: {
			// cssCodeSplit: false,
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
		},
		plugins: [
			VitePluginPWA({
				minify: !isProduction,
				manifest: manifestOptions,
			}),
			VitePluginWindicss(),
			VitePluginSvelte({
				hot: !isProduction,
				preprocess: [sveltePreprocess()],
			}),
			VitePluginTsconfigPaths({
				loose: true,
			}),
		],
	};
});
