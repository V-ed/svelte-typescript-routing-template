import { Options as VitePWAOptions } from 'vite-plugin-pwa';

export const pwaOptions: Partial<VitePWAOptions> = {
	manifest: {
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
	},
};

export default pwaOptions;
