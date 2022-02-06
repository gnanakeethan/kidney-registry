<script>
	import SaleValueIcon from '~icons/sustain/sale-value-icon';

	export let text;
	export let delta;
	export let amount;
</script>

<div class="col-span-3 grid grid-cols-1 gap-2 rounded bg-white p-4">
	<h5 class="text-medium-black  mx-auto font-nunito text-lg font-bold">{text}</h5>
	<div class="bg-dark-green mx-auto rounded-full p-3">
		<SaleValueIcon class="mx-auto fill-current text-white" />
	</div>
	<h3 class="mx-auto font-nunito text-4xl font-extrabold">
		${amount}
	</h3>
	{#if delta > 0}
		<p class="font-karla  mx-auto text-xxm text-green-600">{delta}% Increase</p>
	{:else}
		<p class="text-red-rose  text-xxm font-karla mx-auto">{delta}% Decrease</p>
	{/if}
</div>
