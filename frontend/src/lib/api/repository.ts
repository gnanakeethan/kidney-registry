import { getClient } from '@urql/svelte';
import { Client, OperationResult } from '@urql/svelte/dist/types';
import { DocumentNode } from 'graphql';
import { QueryRepository } from 'lib/interfaces/repository';
import { PromisifiedSource } from 'urql';

export class GraphQLQueryRepository<T> implements QueryRepository<T> {
	client: Client;

	constructor() {
		this.client = getClient();
		console.log(this.client);
	}

	getItems(
		queryString: DocumentNode,
		page: number,
		perPage: number
	): PromisifiedSource<OperationResult<T>> {
		const reus = this.client.query(queryString);
		console.log(reus);
		return reus;
	}
}
