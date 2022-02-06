<script>
	import { afterUpdate, createEventDispatcher } from 'svelte';
	import { activeUrl, onLinkClick } from './SidebarStore';

	export let name;
	export let icon;
	export let route;
	export let disabled = false;
	export let activeGroup = false; // Whether the link is part of an active `NavigationLinkGroup`.

	let link;
	/*
	 * Whether the link is active is computed comparing the route
	 * with `activeRoute` from `SidebarStore`.
	 */
	$: active = $activeUrl === route;

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
	class="flex flex-row items-center border-b border-dashed border-neutral-500 bg-white fill-current px-4 py-2 first:border-t"
	class:activeGroup
	class:bg-neutral-500={active}
	class:font-bold={active}
	class:text-white={active}
	{disabled}
	href={route}
	on:click={onClick(event, route)}
	tabindex="0"
>
	<svelte:component this={icon} class="mr-1" />
	{name}
</a>
