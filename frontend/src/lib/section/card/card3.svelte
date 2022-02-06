<script lang="ts">
	export let text;
</script>

<div class="col-span-1 rounded">
	<div class=" h-full rounded bg-white p-5">
		<div class="flex flex-row items-center">
			<div class="flex-1 ">
				<h5 class="text-head-black pb-2 font-nunito text-lg font-bold">{text}</h5>
				<div class="font-karla space-y-3">
					{#each { length: 4 } as _, i}
						<div class="relative flex flex-row rounded-md border p-3">
							<div class="mr-2 h-6 w-6 flex-shrink-0 items-center ">
								<img
									class="rounded-full"
									src="https://picsum.photos/seed/{Math.floor(Math.random() * 10000)}/40/40"
									width="40"
									height="40"
									alt="Alex Shatov"
								/>
							</div>
							<div class="place-self-center text-xs text-gray-800">Alex Shatov</div>
							<div class="text-light-green absolute right-2 float-right place-self-center text-xs ">
								Website
							</div>
						</div>
					{/each}
					<slot />
				</div>
			</div>
		</div>
	</div>
</div>
