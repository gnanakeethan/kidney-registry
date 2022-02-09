import { Client } from '@urql/svelte/dist/types';
import { DocumentNode } from 'graphql';

export interface QueryRepository<T> {
	client: Client;

	getItems(query: DocumentNode, page: number, perPage: number);
}
