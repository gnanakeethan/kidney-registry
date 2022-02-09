<script lang="ts">
	import { GraphQLQueryRepository } from '$lib/api/repository';
	import { DataSourceConnector } from '$lib/api/table-datasource';
	import Table from '$lib/components/table/Table.svelte';
	import { ListUsersDocument } from '$lib/graphql/generated';

	interface User {
		name: string;
		ID: string;
	}

	const queryRepository = new GraphQLQueryRepository<User>();
	let dataSource = new DataSourceConnector<User>(queryRepository, ListUsersDocument);
	dataSource.loadCurrentPage();
</script>

<div class="p-2 p-4">
	<Table bind:dtSource={dataSource} />
</div>
