<tbody class="divide-y divide-gray-200 bg-white">
	{#each { length: 20 } as _, i}
		<tr class="text-medium-black">
			<td class="has-tooltip whitespace-nowrap px-6 py-4 ">
				<div class="relative flex items-center">
					<button class="relative  flex text-sm text-gray-900">
						<img
							src="https://picsum.photos/seed/{Math.floor(Math.random() * 10000)}/40/40"
							alt=""
						/>
						<span class="absolute left-8 flex p-3 text-xs "> vertical-Banner.html </span>
					</button>
					<div class="tooltip absolute h-40 w-40 bg-white p-2">
						<img
							src="https://picsum.photos/seed/{Math.floor(Math.random() * 10000)}/400/400"
							alt=""
						/>
					</div>
				</div>
			</td>
			<td class="whitespace-nowrap px-6 py-4">
				<div class="overflow-hidden  overflow-ellipsis text-xs">
					Lorem ipsum dolor sit amet, consetetur
				</div>
			</td>
			<td class="whitespace-nowrap px-6 py-4 text-xs"> Vertical Banner</td>
			<td class="whitespace-nowrap px-6 py-4 text-xs"> 120 x 240 px</td>
			<td class="whitespace-nowrap px-6 py-4 text-xs"> 21/12/21</td>
			<td class="whitespace-nowrap px-6 py-4 text-right text-xs"> ...</td>
		</tr>
	{/each}
</tbody>
