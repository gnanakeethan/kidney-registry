<script lang="ts">
	export let text;
	export let amount;
	export let delta;
	import DecreaseArrowIcon from '~icons/sustain/decrease-arrow';
	import IncreaseArrowIcon from '~icons/sustain/increase-arrow';
</script>

<div class="col-span-3 flex flex-row rounded bg-white p-5 px-2">
	<div class="bg-dark-green my-auto rounded-full p-3">
		<slot />
	</div>
	<div class="my-auto mx-2">
		<h3 class="text-medium-black font-nunito text-4xl font-extrabold">{amount}</h3>
		<div class="flex flex-row items-center">
			<div class="text-light-black font-karla text-xxm">{text}</div>
			{#if delta > 0}
				<IncreaseArrowIcon class="text-light-green mx-1 fill-current text-xxs" />
			{:else}
				<DecreaseArrowIcon class="text-red-rose text-xxs fill-current mx-1" />
			{/if}

			{#if delta > 0}
				<p class="font-karla  text-xxm text-green-600">{delta}% Increase</p>
			{:else}
				<p class="text-red-rose  text-xxm font-karla">{delta}% Decrease</p>
			{/if}
		</div>
	</div>
</div>
