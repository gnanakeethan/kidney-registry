<div class='flex flex-row items-center  relative bg-white p-5'>
    <div class='font-bold text-head-black  text-lg'> {title} </div>
    <slot></slot>
</div>
<script lang="ts">
    export let title;
</script>