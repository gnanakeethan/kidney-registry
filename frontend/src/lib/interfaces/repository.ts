export interface QueryRepository<T> {
	getItems(query: string, page: number, perPage: number): T[];
}

export class GraphQLQueryRepository<T> implements QueryRepository<T> {
	getItems(query: string, page: number, perPage: number): T[] {
		return [];
	}
}
