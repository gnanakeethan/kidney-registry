<div class='col-span-3 rounded flex flex-row p-5 px-2 bg-white'>
    <div class='rounded-full p-3 bg-dark-green my-auto'>
        <slot></slot>
    </div>
    <div class='my-auto mx-2'>
        <h3 class='font-extrabold text-medium-black font-nunito text-4xl'>{amount} </h3>
        <div class='flex flex-row items-center'>
            <div class='text-light-black text-xxm font-karla'>{text}</div>
            {#if delta > 0}
                <IncreaseArrowIcon class="text-light-green text-xxs fill-current mx-1"/>
            {:else}
                <DecreaseArrowIcon class="text-red-rose text-xxs fill-current mx-1"/>
            {/if}

            {#if delta > 0}
                <p class='text-green-600  text-xxm font-karla'>{delta}% Increase</p>
            {:else}
                <p class='text-red-rose  text-xxm font-karla'> {delta}% Decrease</p>
            {/if}
        </div>
    </div>
</div>
<script lang="ts">
    export let text;
    export let amount;
    export let delta;
    import DecreaseArrowIcon from '~icons/sustain/decrease-arrow';
    import IncreaseArrowIcon from '~icons/sustain/increase-arrow';
</script>