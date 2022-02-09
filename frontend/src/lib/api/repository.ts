import { getClient, operationStore, query } from '@urql/svelte';
import { Client } from '@urql/svelte/dist/types';
import { DocumentNode } from 'graphql';
import { QueryRepository } from 'lib/interfaces/repository';

export class GraphQLQueryRepository<T> implements QueryRepository<T> {
	client: Client;

	constructor() {
		this.client = getClient();
		console.log(this.client);
	}

	getItems(queryString: DocumentNode, page: number, perPage: number) {
		return query(operationStore(queryString));
	}
}
