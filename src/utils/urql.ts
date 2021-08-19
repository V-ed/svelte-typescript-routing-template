import { createClient, defaultExchanges, subscriptionExchange } from '@urql/svelte';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { getApiUrl } from '.';

const apiUrl = getApiUrl();

const wsProtocol = apiUrl.protocol == 'https:' ? 'wss' : 'ws';

const subscriptionClient = new SubscriptionClient(`${wsProtocol}://${apiUrl.host}/graphql`, { reconnect: true });

export const client = createClient({
	url: `${apiUrl.origin}/graphql`,
	exchanges: [
		...defaultExchanges,
		subscriptionExchange({
			forwardSubscription(operation) {
				return subscriptionClient.request(operation);
			},
		}),
	],
});
