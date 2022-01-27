
{#if showModal}
	<div class='font-karla modal z-20 h-screen w-full absolute left-0 top-0 flex justify-center items-center bg-black bg-opacity-70'>
	</div>
	<div class='font-karla z-50 h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70'>
		<!-- modal -->
		<div class='bg-white rounded shadow-lg w-10/12 md:w-5/12 m-5 p-2'>
			<!-- modal header -->
			<div class=' px-4 py-2 flex justify-between  items-center'>
				<div></div>
				<h3 class='font-semibold text-lg '>Add New Creative</h3>
				<button on:click={() => showModal = false} class='text-black close-modal '>
					<CloseIcon />
				</button>
			</div>
			<!-- modal body -->
			<div class='flex'>
				<TextInput name='enter name' label='Creative Name' placeholder='Enter the name of the creative' />
				<div class='p-3'>
					<label for='location' class='font-bold text-xs'>Type</label>
					<select class='form-select text-xs w-full space-y-2 text-light-black border-dark-gray bg-light-gray focus:ring-light-green  focus:border-light-green rounded-md'>
						<option>Vertical Bannar 120 x 240px</option>
						<option>Vertical Bannar 240 x 480px</option>
					</select>
				</div>
			</div>
			<div class='p-3 font-bold'>
				<label for='Description' class='text-xs'>Description</label>
				<textarea class='text-light-black text-xs w-full border-dark-gray focus:ring-light-green  focus:border-light-green rounded-md bg-light-gray h-20'
				          placeholder='Enter Your Description here'></textarea>
			</div>
			<div class='p-3 pt-0 space-y-2'>
				<label for='location' class='text-xs'>Provide Image via</label>
				<div class='flex space-x-10 text-light-black'>
						<label  class='text-xs'>
							<input type='radio' checked name='upload' bind:group={selected} value=true  class='text-xs text-light-green  focus:ring-light-green '>
						Upload image</label>
						<label class='text-xs'>
							<input type='radio' name='upload' bind:group={selected} value=false class='text-xs text-light-green focus:ring-light-green '>
						Provide Source URL</label>
				</div>
				{#if selected === 'false'}
				<div class="flex h-20 text-xs bg-light-gray justify-center items-center">
					<TextInput name='url' label='Paste the URL here' placeholder='https://www.example.com' class='w-max mx-auto'/>
				</div>
				{:else}
				<div class=" relative flex h-20 text-xs bg-light-gray justify-center items-center">
					<input type="file" multiple class="cursor-pointer relative opacity-0 z-30 w-full h-full ">
					<div class="absolute flex">
						<UploadIcon  class="text-light-black fill-current" />
						<div class="text-light-black">
							&nbsp;&nbsp; Drag and drop creative here or  &nbsp;&nbsp;
						</div>
						
						<div class="text-dark-green">
							Browse files
						</div>
					</div>
				</div>
				{/if}
			</div>
			<div class='flex justify-end items-center w-100 pt-12 border-t p-3'>
				<div class='relative'>
					<button class='text-base p-1 px-6 bg-red-rose text-white rounded-full  absolute right-3 bottom-0'>
						Add
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}

<button on:click={() => showModal = true} class='pt-2 text-sm text-white bg-red-rose rounded-full ml-5 p-2 px-4'>Add New Creatives
</button>

<script>
    import TextInput from '$lib/components/_textinput.svelte';
	import CloseIcon from '~icons/sustain/close';
	import UploadIcon from '~icons/sustain/upload';
    let showModal  = false;
	let selected = true ;
</script>