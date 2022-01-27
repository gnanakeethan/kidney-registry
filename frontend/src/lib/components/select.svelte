<script>
	import { writable, derived } from 'svelte/store';
	
	const items = writable(['dog', 'cat', 'fish', 'iguana']);
	const term = writable('');
	let val = '';
	const filtered = derived(
	[term, items], 
	([$term, $items]) => $items.filter(x => x.includes($term))
);
	$: term.set(val);
    let showSelect=false;
    import DecreaseArrowIcon from '~icons/sustain/decrease-arrow';
    import IncreaseArrowIcon from '~icons/sustain/increase-arrow';

</script>
<div class="border rounded p-2 border-dark-green ">
    <div on:click={() => showSelect = true} class='relative text-medium-black px-3 text-lg cursor-pointer'>
        {#if val === ''}select{:else}{val}{/if}
        <span class="absolute p-2 right-0">
            {#if showSelect}
             <IncreaseArrowIcon class="text-medium-black text-xs fill-current " />
             {:else}
             <DecreaseArrowIcon class="text-medium-black text-xs fill-current " />
             {/if}
        </span>
    </div>
    {#if showSelect}
    <input bind:value={val} type="text" id="searchInput" class="drop-shadow-lg focus:shadow-dark-green border  rounded text-medium-black px-2 w-full text-md p-1 border-light-green focus:border-dark-green focus:ring-dark-green" autofocus >
    {#each $filtered as item}
        <div on:click={() => {val = item;showSelect=false}} class=" w-full text-medium-black px-3 text-lg p-2 border-medium-black focus:border-dark-green focus:ring-dark-green cursor-pointer hover:bg-dark-gray rounded " >
            {item}
        </div >
    {/each}
    {/if}
</div>

