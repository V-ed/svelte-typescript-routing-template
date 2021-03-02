import { onDestroy } from 'svelte';

const socket = new WebSocket('ws://localhost:3000/');

type SocketAddParams = Parameters<typeof socket.addEventListener>;
type SocketRemoveParams = Parameters<typeof socket.addEventListener>;

export function getSocket(): WebSocket {
	// if (!socket.connected) {
	// 	socket.connect();
	// }

	let socketListenersParams: SocketAddParams[] = [];

	onDestroy(() => {
		socketListenersParams.forEach((socketListenerParams) => {
			socket.removeEventListener(...socketListenerParams);
		});
		socket.close();
	});

	return new Proxy(socket, {
		get: (target, prop: keyof WebSocket, receiver) => {
			const origMethod = Reflect.get(target, prop, receiver);

			if (typeof origMethod == 'function') {
				if (prop == 'addEventListener') {
					return (...args: SocketAddParams) => {
						socketListenersParams.push(args);
						return target[prop](...args);
					};
				} else if (prop == 'removeEventListener') {
					return (...args: SocketRemoveParams) => {
						socketListenersParams = socketListenersParams.filter((item) => item !== args);
						return target[prop](...args);
					};
				}
			}

			return origMethod;
		},
	});
}
