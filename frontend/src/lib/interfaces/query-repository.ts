import { Client, OperationResult } from '@urql/svelte/dist/types';
import { DocumentNode } from 'graphql';

export interface QueryRepository<T> {
	client: Client;

	getItems(
		query: DocumentNode,
		filter: object,
		page: number,
		perPage: number
	): Promise<OperationResult<T>>;
}
