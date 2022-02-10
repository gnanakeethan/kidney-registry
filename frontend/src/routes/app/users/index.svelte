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
	let loading = true;
	dataSource.loadCurrentPage().then((data) => {
		console.log(data);
		loading = false;
	});

	let columns = [
		{ key: 'id', name: 'ID' },
		{ key: 'name', name: 'Name' },
		{ key: 'address', name: 'Address' }
	];
	let displayedColumns = ['id', 'name', 'address'];
	let element: User;
</script>

<div class="p-2 p-4">
	<Table
		bind:dtSource={dataSource}
		bind:loading
		{columns}
		{displayedColumns}
		rootAccessPath="data.users.users"
	>
		<svelte:fragment let:element={User} slot="actions">
			{User.id}
			{User.name}
			{JSON.stringify(element)}
		</svelte:fragment>
	</Table>
</div>
