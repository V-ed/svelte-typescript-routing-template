export function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Returns the path created using the env variable `VITE_API_ADDR`.
 *
 * @param path The remaining path / query objects used to create the api path.
 * @returns The full path desired.
 */
export function getApiUrl(path?: string): string {
	const apiServerAddr: string = (import.meta.env.VITE_API_ADDR as string) ?? 'http://localhost:3000';

	const finalPath = path ? path : '/';

	return `${apiServerAddr}${finalPath}`;
}
