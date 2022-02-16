<script lang="ts">
	import { GraphQLQueryRepository } from '$lib/api/query-repository';
	import { DataSourceConnector } from '$lib/api/table-datasource';
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
	let selectedRows = [];
	$: console.log(selectedRows);
</script>

<div class="? p-2">
	<div class="? flex flex-row justify-between p-2">
		<div class="pl-2 font-nunito text-xl font-extrabold">Donors</div>
		<div>
			<a
				class="m-2 rounded bg-green-600 p-2 font-raleway text-lg font-bold text-white"
				href="/investigations/new">New</a
			>
		</div>
	</div>
	<div class="? p-2">
		<Table
			bind:dtSource={dataSource}
			bind:loading
			bind:selectedRows
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
</div>
