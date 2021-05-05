import App from '$/App.svelte';
import '$/css/style.css';
import '$/css/tw-fixes.css';
import HMR from '@roxi/routify/hmr';
import { registerSW } from 'virtual:pwa-register';
import 'virtual:windi.css';

const isProd = import.meta.env.PROD;

const app = isProd ? new App({ target: document.body }) : HMR(App, { target: document.body }, 'routify-app');

registerSW();

export default app;
