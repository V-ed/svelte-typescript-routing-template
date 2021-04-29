import { writable } from 'svelte/store';
import { makeToggleable } from './toggleable';

export const isDrawerOpen = makeToggleable(writable<boolean>(false), (drawerOpenStore) => drawerOpenStore.update((isOpen) => !isOpen));

export { themeStore } from './theme';
