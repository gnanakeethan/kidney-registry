import { getClient } from '@urql/svelte';
import { Client, OperationResult } from '@urql/svelte/dist/types';
import { DocumentNode } from 'graphql';
import { QueryRepository } from 'lib/interfaces/query-repository';

interface FilterContext {
	ID: string;
}

export class GraphQLQueryRepository<T> implements QueryRepository<T> {
	client: Client;

	constructor() {
		this.client = getClient();
		console.log(this.client);
	}

	getItems(
		queryString: DocumentNode,
		filter: object,
		page: number,
		perPage: number
	): Promise<OperationResult<T>> {
		
		const finalVar = { page: page, limit: perPage };
		for (const filterKey in filter) {
			finalVar[filterKey] = filter[filterKey];
		}
		console.log('FINAL VARIABLES', finalVar);
		return this.client.query(queryString, finalVar).toPromise();
	}
}
