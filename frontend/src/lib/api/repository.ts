import { getClient } from '@urql/svelte';
import { QueryRepository } from 'lib/interfaces/repository';
import { Client } from 'urql';

export class GraphQLQueryRepository<T> implements QueryRepository<T> {
	client: Client;

	constructor() {
		this.client = getClient();
		console.log(this.client);
	}

	getItems(query: string, page: number, perPage: number): T[] {
		this.client.query(query);
		return [];
	}
}
