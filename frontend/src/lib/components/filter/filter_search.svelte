<div>
    {#each configuration as item}
        {#if item.type === 'select'}
            Select
            <select bind:value='{filterOutput[item.key]}' on:change={()=>{console.log(filterOutput)}}>
                {#each item.values as value}
                    <option value='{value.key}'>{value.value}</option>
                {/each}
            </select>
        {:else if item.type === 'text'}
            <input type='text' class='border border-red-400' bind:value='{filterOutput[item.key]}'/>
        {:else if item.type === 'checkbox'}
            <input type='text'/>
        {/if}
    {/each}
</div>

<script lang='ts'>
    export let configuration = [
        {
            key: 'select1',
            type: 'select',
            values: [{value: 'value', key: 'key1'}, {value: 'value3', key: 'key3'}]
        }
    ];
    export let filterOutput = {};
    export let output = 'test';
</script>


