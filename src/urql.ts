import { createClient, defaultExchanges, subscriptionExchange } from '@urql/svelte';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { getApiUrl } from './utils';

const apiUrl = getApiUrl();

const subscriptionClient = new SubscriptionClient(`ws://${apiUrl.host}/graphql`, { reconnect: true });

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
