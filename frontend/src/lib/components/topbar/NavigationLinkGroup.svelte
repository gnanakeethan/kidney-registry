<script>
	import { createEventDispatcher, onDestroy } from 'svelte';
	import { scale } from 'svelte/transition';
	import { activeUrl } from '../../../lib/state/SidebarStore';
	import NavigationLink from './NavigationLink.svelte';
	import CollapsibleIcon from '~icons/clarity/collapse-line';

	export let routes = [];
	export let name = null;
	export let route = null;
	export let disabled = false;
	export let icon = null;

	export let groupOpen = true;
	let activeSubRoute = null;

	const dispatch = createEventDispatcher();

	const toggleGroup = () => (groupOpen = !groupOpen);

	/*
	 * A child route of this `NavigationLinkGroup` is active,
	 * which it signalled by dispatching the `active` event.
	 * As the current `NavigationLinkGroup` is part of the active navigation
	 * tree, it's supposed to be opened.
	 * As the navigation tree can have deep nestings, this
	 * `NavigationLinkGroup` in turn signals to its parent,
	 * that it is part of the active tree.
	 */
	const handleActiveChange = (event) => {
		// Open current group, as it's part of the active tree.
		groupOpen = true;
		/*
		 * Allow child `NavigationLink`s to know that they are part
		 * of the same group as the active `NavigationLink`.
		 */
		activeSubRoute = event.detail.activeSubRoute;
		/*
		 * Escalate the `active` event to the parent to inform it
		 * that it is part of the active tree.
		 */
		dispatch(event.type, { activeSubRoute: route });
	};

	/*
	 * Whenever the active URL changes in the store, the active subroutes
	 * will change too, which is why the existing active subroute is reset.
	 * The new active subroute is determined in `handleActiveChange`.
	 */
	const unsubscribe = activeUrl.subscribe((value) => {
		activeSubRoute = null;
	});

	// The active unsubscribe is required due the usage of a callback function.
	onDestroy(unsubscribe);
	$: console.log(groupOpen);
</script>

<div class="flex flex-row bg-green-50">
	<!-- A groups heading is differentiated by having a name and a route -->
	{#if name && route}
		<!--
            If a group's root route is part of the active tree,
            the root link considers itself to be "active".
        -->
		<NavigationLink
			{name}
			{route}
			{disabled}
			{icon}
			on:click={toggleGroup}
			activeGroup={Boolean(activeSubRoute)}
			on:active={handleActiveChange}
		/>
		<!--
            Don't allow disabled groups to be opened:
            Child routes are considered disabled when their parent is.
        -->
		{#if !disabled}
			<button
				class:bg-neutral-500={groupOpen}
				class="border-b border-dashed border-neutral-500 bg-white"
				on:click={toggleGroup}
				aria-expanded={groupOpen}
				aria-controls={`${route}-group`}
				aria-label="Toggle the visibility of child navigation links"
				title="Toggle the visibility of child navigation links"
			>
				{#if groupOpen}
					<CollapsibleIcon class="rotate-180 text-xl" />
				{:else}
					<CollapsibleIcon class="rotate-90 text-xl" />
				{/if}
			</button>
		{/if}
	{/if}
</div>
<!-- Child routes of the group -->
<div
	class="flex flex-row border-b border-dashed border-neutral-500"
	hidden={!groupOpen || disabled}
	id={`${route ? route : 'root'}-group`}
	in:scale={{ duration: 250 }}
>
	{#each routes as route (route.route)}
		{#if route.childRoutes}
			<div class:group={route.childRoutes}>
				<!--
                    If the child route has children in return,
                    render a nested `NavigationLinkGroup`.
                    It's crucial that `NavigationLinkGroup`s
                    pass on the active change event to their parent.
                -->
				<svelte:self
					routes={route.childRoutes}
					name={route.name}
					route={route.route}
					disabled={route.disabled}
					on:active={handleActiveChange}
				/>
			</div>
		{:else}
			<NavigationLink
				{...route}
				activeGroup={activeSubRoute === route.route}
				on:active={handleActiveChange}
			/>
		{/if}
	{/each}
</div>
