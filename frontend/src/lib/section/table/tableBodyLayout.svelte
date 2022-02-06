<tbody class='bg-white divide-y divide-gray-200'>
{#each {length: 20} as _,i}
    <tr class="text-medium-black">
        <td class='px-6 py-4 whitespace-nowrap has-tooltip '>
            <div class='flex items-center relative'>
                <button class='text-sm  relative flex text-gray-900'>
                    <img src='https://picsum.photos/seed/{Math.floor(Math.random() * 10000)}/40/40' alt=''>
                    <span class='absolute p-3 left-8 text-xs flex '>
                vertical-Banner.html
                            </span>
                </button>
                <div class='tooltip p-2 absolute h-40 w-40 bg-white'>
                    <img src='https://picsum.photos/seed/{Math.floor(Math.random() * 10000)}/400/400'
                         alt=''>
                </div>
            </div>
        </td>
        <td class='px-6 py-4 whitespace-nowrap'>
            <div class='text-xs  overflow-ellipsis overflow-hidden'>
                Lorem ipsum dolor sit amet, consetetur
            </div>
        </td>
        <td class='px-6 py-4 whitespace-nowrap text-xs'>
            Vertical Banner
        </td>
        <td class='px-6 py-4 whitespace-nowrap text-xs'>
            120 x 240 px
        </td>
        <td class='px-6 py-4 whitespace-nowrap text-xs'>
            21/12/21
        </td>
        <td class='text-right px-6 py-4 whitespace-nowrap text-xs'>
            ...
        </td>
    </tr>
{/each}
</tbody>