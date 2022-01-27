<div class='relative'>
    <button on:click='{() => showFilter = true}'
            class='h-10 text-medium-black flex border px-2  rounded  border-dark-gray bg-light-gray'>
        <span class='text-xs p-2 my-auto'>Filter</span>
        <span class="my-auto"><FilterIcon class=' text-xs' /></span>
    </button>
    {#if showFilter}
        <div class='absolute z-10  w-72 h-max mt-3 bg-white text-xs rounded-xl right-0 drop-shadow-2xl	'>
            <div class='p-4 space-y-4'>
                <div class='flex justify-between  border-b text-xl'>
                    <div class=' font-semibold'>Filter by</div>
                    <button on:click='{() => showFilter = false}' class='text-light-black'>
                        <CloseIcon class="text-xs" />
                    </button>
                </div>
                <slot></slot>
            </div>
            <div class='bg-white drop-shadow-2xl z-50 flex justify-between p-2 rounded'>
                <div class='text-red-rose'>
                    Clear all filters
                </div>
                <div class='flex space-x-4'>
                    <div class='text-light-black'>
                        Cancel
                    </div>
                    <div class='text-light-green'>
                        Apply
                    </div>
                </div>
            </div>
        </div>
    {/if}
</div>
<script lang="ts">
    import CloseIcon from '~icons/sustain/close';
	import FilterIcon from '~icons/sustain/filter';
	let showFilter = false;
</script>