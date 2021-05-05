import { writable } from 'svelte/store';
import { makeToggleable } from './toggleable';

export const isDrawerOpen = makeToggleable(writable(false), (drawerOpenStore) => drawerOpenStore.update((isOpen) => !isOpen));

export { localStorageStore } from './local-storage';
export { themeStore } from './theme';
