import { createClient } from '@urql/svelte';
import { QueryRepository } from 'lib/interfaces/repository';
import { authState } from 'lib/state/auth';
import { Client } from 'urql';

let auth = { loggedIn: false, token: '', loginAs: null };
authState.subscribe((authStateS) => (auth = authStateS));

export class GraphQLQueryRepository<T> implements QueryRepository<T> {
	private client: Client;

	constructor() {
		this.client = createClient({
			url: 'http://localhost:3000/graphql',
			fetchOptions: () => {
				if (auth.token.length > 0) {
					return {
						headers: { authorization: auth.token.length > 0 ? `Bearer ${auth.token}` : '' }
					};
				}
				return {};
			}
		});
	}

	getItems(query: string, page: number, perPage: number): T[] {
		// this.client.query(query);
		return [];
	}
}
