<script>
	import TextInput from '$lib/components/_textinput.svelte';
	import CloseIcon from '~icons/sustain/close';
	import UploadIcon from '~icons/sustain/upload';

	let showModal = false;
	let selected = true;
</script>

{#if showModal}
	<div
		class="font-karla modal absolute left-0 top-0 z-20 flex h-screen w-full items-center justify-center bg-black bg-opacity-70"
	/>
	<div
		class="font-karla fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-70"
	>
		<!-- modal -->
		<div class="m-5 w-10/12 rounded bg-white p-2 shadow-lg md:w-5/12">
			<!-- modal header -->
			<div class=" flex items-center justify-between px-4  py-2">
				<div />
				<h3 class="text-lg font-semibold ">Add New Creative</h3>
				<button on:click={() => (showModal = false)} class="close-modal text-black ">
					<CloseIcon />
				</button>
			</div>
			<!-- modal body -->
			<div class="flex">
				<TextInput
					name="enter name"
					label="Creative Name"
					placeholder="Enter the name of the creative"
				/>
				<div class="p-3">
					<label for="location" class="text-xs font-bold">Type</label>
					<select
						class="form-select text-light-black border-dark-gray bg-light-gray focus:ring-light-green focus:border-light-green w-full space-y-2  rounded-md text-xs"
					>
						<option>Vertical Bannar 120 x 240px</option>
						<option>Vertical Bannar 240 x 480px</option>
					</select>
				</div>
			</div>
			<div class="p-3 font-bold">
				<label for="Description" class="text-xs">Description</label>
				<textarea
					class="text-light-black border-dark-gray focus:ring-light-green focus:border-light-green bg-light-gray  h-20 w-full rounded-md text-xs"
					placeholder="Enter Your Description here"
				/>
			</div>
			<div class="space-y-2 p-3 pt-0">
				<label for="location" class="text-xs">Provide Image via</label>
				<div class="text-light-black flex space-x-10">
					<label class="text-xs">
						<input
							type="radio"
							checked
							name="upload"
							bind:group={selected}
							value="true"
							class="text-light-green focus:ring-light-green  text-xs "
						/>
						Upload image</label
					>
					<label class="text-xs">
						<input
							type="radio"
							name="upload"
							bind:group={selected}
							value="false"
							class="text-light-green focus:ring-light-green text-xs "
						/>
						Provide Source URL</label
					>
				</div>
				{#if selected === 'false'}
					<div class="bg-light-gray flex h-20 items-center justify-center text-xs">
						<TextInput
							name="url"
							label="Paste the URL here"
							placeholder="https://www.example.com"
							class="mx-auto w-max"
						/>
					</div>
				{:else}
					<div class=" relative flex h-20 text-xs bg-light-gray justify-center items-center">
						<input
							type="file"
							multiple
							class="cursor-pointer relative opacity-0 z-30 w-full h-full "
						/>
						<div class="absolute flex">
							<UploadIcon class="text-light-black fill-current" />
							<div class="text-light-black">
								&nbsp;&nbsp; Drag and drop creative here or &nbsp;&nbsp;
							</div>

							<div class="text-dark-green">Browse files</div>
						</div>
					</div>
				{/if}
			</div>
			<div class="w-100 flex items-center justify-end border-t p-3 pt-12">
				<div class="relative">
					<button
						class="bg-red-rose absolute right-3 bottom-0 rounded-full p-1  px-6 text-base text-white"
					>
						Add
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}

<button
	class="bg-red-rose ml-5 rounded-full p-2 px-4 pt-2 text-sm text-white"
	on:click={() => (showModal = true)}
	>Add New Creatives
</button>
