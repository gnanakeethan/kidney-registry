<th class='px-6 py-3 relative w-1/5'>
    {head}
    <!-- svelte-ignore missing-declaration -->
    <span class='absolute text-xxs  fill-current translate-y-1/3 pl-2 '><SortOrderIcon/></span>
</th>
<script lang="ts">
    export let head;
    import SortOrderIcon from '~icons/sustain/sort-order';
</script>