import { Client } from 'urql';

export interface QueryRepository<T> {
	client: Client;

	getItems(query: string, page: number, perPage: number): T[];
}
