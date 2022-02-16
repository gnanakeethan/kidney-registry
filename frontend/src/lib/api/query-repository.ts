import { getClient } from '@urql/svelte';
import { Client, OperationResult } from '@urql/svelte/dist/types';
import { DocumentNode } from 'graphql';
import { QueryRepository } from 'lib/interfaces/query-repository';

export class GraphQLQueryRepository<T> implements QueryRepository<T> {
	client: Client;

	constructor() {
		this.client = getClient();
		console.log(this.client);
	}

	getItems(queryString: DocumentNode, page: number, perPage: number): Promise<OperationResult<T>> {
		return this.client.query(queryString, { currentPage: page }).toPromise();
	}
}
