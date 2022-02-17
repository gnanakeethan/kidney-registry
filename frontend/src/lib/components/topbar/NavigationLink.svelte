<script>
	import { afterUpdate, createEventDispatcher } from 'svelte';
	import { activeUrl, minimized, onLinkClick } from '$lib/state/SidebarStore';

	export let name;
	export let icon;
	export let route;
	export let disabled = false;
	export let minimizedActive = false;
	export let activeGroup = false; // Whether the link is part of an active `NavigationLinkGroup`.

	let link;
	/*
	 * Whether the link is active is computed comparing the route
	 * with `activeRoute` from `SidebarStore`.
	 */
	$: active = $activeUrl === route;
	$: $minimized === true
		? setTimeout(() => {
				minimizedActive = true;
		  }, 100)
		: setTimeout(() => {
				minimizedActive = false;
		  }, 100);

	function onClick(event, route) {
		$activeUrl = route;
		if (disabled) {
			event.preventDefault();
		} else if ($onLinkClick) {
			event.preventDefault();
			$onLinkClick(event);
		}
		return event;
	}

	const scrollIntoView = () => link && link.scrollIntoView({ block: 'end', behavior: 'smooth' });

	const dispatch = createEventDispatcher();

	afterUpdate(() => {
		if (active) {
			/*
			 * `NavigationLink` informs the parent "bottom up", that it became
			 * active. That way, `Sidebar` can have an O(n) performance:
			 * When n `NavigationLink`s render, no additional iteration
			 * over the nested route-structure is required to determine,
			 * which `NavigationLink` is active.
			 */
			dispatch('active', { activeSubRoute: route });
			/*
			 * Scroll component into view when it becomes active.
			 * The delay is to wait for the rendering to be finished.
			 * Without it, there is cases where the scrolling
			 * is triggered before the DOM is ready.
			 */
			setTimeout(scrollIntoView, 250);
		}
	});
</script>

<a
	{active}
	bind:this={link}
	class="flex flex-row items-center border-r border-dashed border-neutral-500 bg-white fill-current py-2.5 transition-all duration-300 ease-in-out"
	class:activeGroup
	class:bg-neutral-500={active || activeGroup}
	class:border-white={active}
	class:font-bold={active || activeGroup}
	class:px-2={$minimized}
	class:px-3={!$minimized}
	class:text-white={active || activeGroup}
	{disabled}
	href={route}
	on:click={onClick(event, route)}
	tabindex="0"
>
	<svelte:component this={icon} class="mr-1" />
	<div class="" class:hidden={minimizedActive} class:opacity-0={$minimized}>
		{name}
	</div>
</a>
