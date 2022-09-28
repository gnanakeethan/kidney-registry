import { getClient } from '@urql/svelte';
import { Client } from '@urql/svelte/dist/types';
export class GraphQLQueryRepository {
    constructor() {
        this.client = getClient();
        console.log(this.client);
    }
    getItems(queryString, filter, page, perPage) {
        const finalVar = { page: page, limit: perPage };
        for (const filterKey in filter) {
            finalVar[filterKey] = filter[filterKey];
        }
        console.log('FINAL VARIABLES', finalVar);
        return this.client.query(queryString, finalVar).toPromise();
    }
}
//# sourceMappingURL=query-repository.js.map