import { writable } from 'svelte/store';

export const isDrawerOpen = writable<boolean>(false);

export { themeStore } from './theme';
