<div class='flex flex-col '>
	<Topbar {...props} />
	<div
		class='h-full max-h-full w-full overflow-scroll border-dashed border-neutral-500'
		style='height:calc(100vh - 5.7rem);min-height:fit-content;'
	>
		<slot />
	</div>
</div>
