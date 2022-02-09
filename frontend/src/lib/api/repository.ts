import { getClient } from '@urql/svelte';
import { DocumentNode } from 'graphql';
import { QueryRepository } from 'lib/interfaces/repository';
import { Client, OperationResult, PromisifiedSource } from 'urql';

export class GraphQLQueryRepository<T> implements QueryRepository<T> {
	client: Client;

	constructor() {
		this.client = getClient();
		console.log(this.client);
	}

	getItems(query: DocumentNode, page: number, perPage: number): PromisifiedSource<OperationResult> {
		return this.client.query(query, {
			page: page,
			perPage: perPage
		});
	}
}
