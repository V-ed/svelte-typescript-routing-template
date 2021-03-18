import App from '$/App.svelte';
import '$/style.css';
import HMR from '@roxi/routify/hmr';
import 'virtual:windi.css';

const isProd = import.meta.env.PROD;

const app = isProd ? new App({ target: document.body }) : HMR(App, { target: document.body }, 'routify-app');

export default app;