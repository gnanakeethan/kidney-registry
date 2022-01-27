<div class='col-span-1 rounded'>
    <div class=' h-full bg-white p-5 rounded'>
        <div class='flex flex-row items-center'>
            <div class='flex-1 '>
                <h5 class='font-bold text-head-black text-lg pb-2 font-nunito'>{text}</h5>
                <div class='space-y-3 font-karla'>
                    {#each { length: 4 } as _,i}
                        <div class='flex flex-row relative p-3 border rounded-md'>
                            <div class='items-center w-6 h-6 flex-shrink-0 mr-2 '>
                                <img class='rounded-full'
                                    src='https://picsum.photos/seed/{Math.floor(Math.random() * 10000)}/40/40'
                                    width='40'
                                    height='40'
                                    alt='Alex Shatov'>
                            </div>
                            <div class='place-self-center text-xs text-gray-800'>Alex Shatov</div>
                            <div class='place-self-center text-xs float-right absolute right-2 text-light-green '>Website
                            </div>
                        </div>
                    {/each}
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</div>
<script lang="ts">
    export let text;
</script>