<div class='flex flex-row text-medium-black space-x-3 items-center mx-8'>
    <span class=' text-xs space-x-2'>Display</span>
        <select bind:value={selected} class='h-10 form-select text-xs border rounded border-dark-gray bg-light-gray'>
            {#each options as option}
                <option value={option.id}>{option.value}</option>
            {/each}	
        </select>
    <span class='text-gray-700 text-xs'>entries</span>
</div>
<script lang="ts">
    let options = [
        { id: "10", value: 10 },
        { id: "20", value: 20 },
        { id: "50", value: 50 },
    ];  
    export let selected;
</script>