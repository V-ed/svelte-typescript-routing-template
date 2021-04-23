import VitePluginSvelte from '@sveltejs/vite-plugin-svelte';
import { defineConfig, loadEnv } from 'vite';
import { Options as VitePWAOptions, VitePWA } from 'vite-plugin-pwa';
import VitePluginWindicss from 'vite-plugin-windicss';
import VitePluginTsConfigPaths from 'vite-tsconfig-paths';
import { preprocessors } from './svelte.config';

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

	return {
		build: {
			// cssCodeSplit: false,
			minify: isProduction,
			sourcemap: !isProduction,
		},
		server: {
			port: port,
		},
		optimizeDeps: {
			exclude: ['@roxi/routify', 'svelte'],
		},
		resolve: {
			dedupe: ['@roxi/routify'],
		},
		plugins: [
			VitePWA({
				minify: !isProduction,
				manifest: manifestOptions,
			}),
			VitePluginWindicss(),
			VitePluginSvelte({
				preprocess: [preprocessors.svelte],
				hot: !isProduction,
			}),
			VitePluginTsConfigPaths({
				loose: true,
			}),
		],
	};
});
