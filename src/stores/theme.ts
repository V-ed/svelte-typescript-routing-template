import { localStorageStore } from './local-store';

const themeLocalStore = localStorageStore<'light' | 'dark'>('app-theme', 'dark');

type ThemeStore = typeof themeLocalStore & {
	/**
	 * Toggles the theme between 'light' and 'dark'.
	 */
	toggle(): void;
};

export const themeStore: ThemeStore = {
	toggle: (): void => themeLocalStore.update((current) => (current == 'light' ? 'dark' : 'light')),
	...themeLocalStore,
};
