import { writable } from 'svelte/store';
import { makeRefreshable } from './refreshable';
import { makeToggleable } from './toggleable';

let breakpoints: Record<string, string> | undefined = undefined;

export function setBreakpoints(newBreakpoints: Record<string, string>): void {
	breakpoints = newBreakpoints;
}

export const isDrawerOpen = makeToggleable(writable(false), (drawerOpenStore) => drawerOpenStore.update((isOpen) => !isOpen));
export const isMobile = makeRefreshable(writable(true), (isMobileStore) => {
	return breakpoints ? isMobileStore.set(window.matchMedia(breakpoints['md-and-down']).matches) : true;
});

export { localStorageStore } from './local-storage';
export { themeStore } from './theme';
