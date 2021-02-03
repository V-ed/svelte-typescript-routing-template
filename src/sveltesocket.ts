import type { Socket } from 'socket.io-client';
import { io } from 'socket.io-client';
import { onDestroy } from 'svelte';

const socket = io();

type SocketOnParams = Parameters<typeof socket.on>;
type SocketOffParams = Parameters<typeof socket.off>;
type SocketOnAnyParams = Parameters<typeof socket.onAny>;
type SocketOffAnyParams = Parameters<typeof socket.offAny>;

export type SvelteSocket = Pick<Socket, keyof Socket>;

export function getIO(): SvelteSocket {
	let socketListeners: SocketOnParams[] = [];
	let socketAnyListeners: SocketOnAnyParams[] = [];

	onDestroy(() => {
		socketListeners.forEach((socketListener) => socket.off(...socketListener));
		socketAnyListeners.forEach((socketListener) => socket.offAny(...socketListener));
	});

	const overrides = {
		on: (...args: SocketOnParams) => {
			socketListeners.push(args);
			return socket.on(...args);
		},
		off: (...args: SocketOffParams) => {
			socketListeners = socketListeners.filter((item) => item !== args);
			return socket.off(...args);
		},
		onAny: (...args: SocketOnAnyParams) => {
			socketAnyListeners.push(args);
			return socket.onAny(...args);
		},
		offAny: (...args: SocketOffAnyParams) => {
			socketAnyListeners = socketAnyListeners.filter((item) => item !== args);
			return socket.offAny(...args);
		},
		connect: socket.connect,
		open: socket.open,
		send: socket.send,
		emit: socket.emit,
		disconnect: socket.disconnect,
		close: socket.close,
		compress: socket.compress,
		prependAny: socket.prependAny,
		hasListeners: socket.hasListeners,
		listenersAny: socket.listenersAny,
		active: socket.active,
		volatile: socket.volatile,
	};

	return { ...socket, ...overrides };
}
