export interface Toggleable<T = void> {
	toggle(): T;
}

export function makeToggleable<W, T = void>(o: W, toggler: (o: W) => T): typeof o & Toggleable<T> {
	return {
		toggle: () => toggler(o),
		...o,
	};
}
