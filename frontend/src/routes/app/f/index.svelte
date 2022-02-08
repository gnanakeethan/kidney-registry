<div class="p-2 p-4">
	<table class="w-full border-collapse">
		<thead>
			<tr>
				{#each { length: 20 } as _, i}
					<th class="border border-neutral-600 bg-zinc-200/75 p-2">Testing</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each { length: 20 } as _, i}
				<tr>
					{#each { length: 20 } as _, i}
						<td class="border border-neutral-500 py-2 pl-1"> Testing Testing</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
