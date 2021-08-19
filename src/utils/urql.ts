import { createClient, defaultExchanges, subscriptionExchange } from '@urql/svelte';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { getApiUrl } from '.';

const apiUrl = getApiUrl();

const subscriptionClient = new SubscriptionClient(`ws://${apiUrl.origin}/graphql`, { reconnect: true });

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
