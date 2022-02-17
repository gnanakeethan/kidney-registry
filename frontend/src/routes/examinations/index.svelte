<script lang="ts">
</script>

<div class="? p-2">
	<div class="? w-full overflow-scroll bg-red-400/10 p-4">
		{#each { length: 100 } as _, i}
			{#each { length: 100 } as _, i}
				{i * 2}
			{/each}
			<br />
		{/each}
	</div>
</div>
