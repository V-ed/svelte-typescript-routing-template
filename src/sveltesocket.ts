import type { Socket } from 'socket.io-client';
import { io } from 'socket.io-client';
import { onDestroy } from 'svelte';

const socket = io('http://localhost:3000/', {
	transports: ['websocket', 'polling'],
	autoConnect: false,
});

type SocketOnParams = Parameters<typeof Socket['prototype']['on']>;
type SocketOnAnyParams = Parameters<typeof Socket['prototype']['onAny']>;

type SocketOnFunction = {
	key: 'on';
	arguments: SocketOnParams;
};
type SocketOnAnyFunction = {
	key: 'onAny';
	arguments: SocketOnAnyParams;
};

export function getIO(): Socket {
	if (!socket.connected) {
		socket.connect();
	}

	let socketListeners: (SocketOnFunction | SocketOnAnyFunction)[] = [];

	onDestroy(() => {
		socketListeners.forEach((socketListener) => {
			if (socketListener.key == 'on') {
				socket.off(...socketListener.arguments);
			} else {
				socket.offAny(...socketListener.arguments);
			}
		});

		socket.disconnect();
	});

	return new Proxy(socket, {
		get: (target, prop: keyof Socket, receiver) => {
			const origMethod = Reflect.get(target, prop, receiver);

			if (typeof origMethod == 'function') {
				if (prop == 'on') {
					return (...args: SocketOnParams) => {
						socketListeners.push({ key: prop, arguments: args });
						return target[prop](...args);
					};
				} else if (prop == 'off') {
					const origMethodProxied: typeof target['off'] = (...args) => {
						socketListeners = socketListeners.filter((item) => item.key == 'onAny' || item.arguments !== args);
						return target[prop](...args);
					};

					return origMethodProxied;
				} else if (prop == 'onAny') {
					return (...args: SocketOnAnyParams) => {
						socketListeners.push({ key: prop, arguments: args });
						return target[prop](...args);
					};
				} else if (prop == 'offAny') {
					const origMethodProxied: typeof target['offAny'] = (...args) => {
						socketListeners = socketListeners.filter((item) => item.key == 'on' || item.arguments !== args);
						return target[prop](...args);
					};

					return origMethodProxied;
				}
			}

			return origMethod;
		},
	});
}
