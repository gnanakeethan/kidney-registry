<div class='col-span-3 rounded bg-white grid grid-cols-1 gap-2 p-4'>
    <h5 class='font-bold  text-medium-black font-nunito text-lg mx-auto'>{text}</h5>
    <div class='rounded-full bg-dark-green mx-auto p-3'>
        <SaleValueIcon class='text-white fill-current mx-auto' />
    </div>
    <h3 class='font-extrabold text-4xl font-nunito mx-auto'>
        ${amount}
    </h3>
    {#if delta > 0}
        <p class='text-green-600  text-xxm font-karla mx-auto'>{delta}% Increase</p>
    {:else}
        <p class='text-red-rose  text-xxm font-karla mx-auto'> {delta}% Decrease</p>
    {/if}</div>

<script>
	import SaleValueIcon from '~icons/sustain/sale-value-icon';
    export let text;
    export let delta;
    export let amount;
</script>