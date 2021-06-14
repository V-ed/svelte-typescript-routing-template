import { OperationStore, SubscriptionHandler } from '@urql/svelte';

declare module '@urql/svelte' {
	export declare function subscription<Data = any, Result = Data, Variables = object>(
		store: OperationStore<Data, Variables>,
		handler?: SubscriptionHandler<Data, Result>,
	): OperationStore<Result, Variables>;
}
