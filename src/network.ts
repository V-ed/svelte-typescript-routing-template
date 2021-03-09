/**
 * Change the type of Keys of T from NewType
 */
export type ChangeTypeOfKeys<T, Keys extends keyof T, NewType> = {
	[key in keyof T]: key extends Keys ? NewType : T[key];
};

export type FetchParams = Parameters<typeof fetch>;

export function get(...args: FetchParams): Promise<Response> {
	return fetch(...args);
}

export type FetchInputParam = RequestInfo;
export type FetchInitParam = ChangeTypeOfKeys<RequestInit, 'body', Record<string, unknown>>;

function getDefaultInit(method: string): RequestInit {
	return {
		method,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
	};
}

export function post(input: RequestInfo, init?: FetchInitParam): Promise<Response> {
	const defaultInit: RequestInit = getDefaultInit('POST');

	return fetch(input, { ...defaultInit, ...init, ...{ body: init?.body && JSON.stringify(init.body) } });
}

export function put(input: RequestInfo, init?: FetchInitParam): Promise<Response> {
	const defaultInit: RequestInit = getDefaultInit('PUT');

	return fetch(input, { ...defaultInit, ...init, ...{ body: init?.body && JSON.stringify(init.body) } });
}

export function del(input: RequestInfo, init?: FetchInitParam): Promise<Response> {
	const defaultInit: RequestInit = getDefaultInit('DELETE');

	return fetch(input, { ...defaultInit, ...init, ...{ body: init?.body && JSON.stringify(init.body) } });
}

export function patch(input: RequestInfo, init?: FetchInitParam): Promise<Response> {
	const defaultInit: RequestInit = getDefaultInit('PATCH');

	return fetch(input, { ...defaultInit, ...init, ...{ body: init?.body && JSON.stringify(init.body) } });
}

export function custom(method: string, input: RequestInfo, init?: FetchInitParam): Promise<Response> {
	const defaultInit: RequestInit = getDefaultInit(method);

	return fetch(input, { ...defaultInit, ...init, ...{ body: init?.body && JSON.stringify(init.body) } });
}
