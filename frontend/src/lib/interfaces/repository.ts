import { DocumentNode } from 'graphql';
import { Client, OperationResult, PromisifiedSource } from 'urql';

export interface QueryRepository<T> {
	client: Client;

	getItems(query: DocumentNode, page: number, perPage: number): PromisifiedSource<OperationResult>;
}
