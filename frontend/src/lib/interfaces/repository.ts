import { Client, OperationResult } from '@urql/svelte/dist/types';
import { DocumentNode } from 'graphql';
import { PromisifiedSource } from 'urql';

export interface QueryRepository<T> {
	client: Client;

	getItems(
		query: DocumentNode,
		page: number,
		perPage: number
	): PromisifiedSource<OperationResult<T>>;
}
