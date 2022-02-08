import { QueryRepository } from 'lib/interfaces/repository';

export class GraphQLQueryRepository<T> implements QueryRepository<T> {
	getItems(query: string, page: number, perPage: number): T[] {
		return [];
	}
}
