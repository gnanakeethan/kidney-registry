<script>
	import { beforeUpdate } from 'svelte';
	import {
		activeUrl as storeActiveUrl,
		onLinkClick as storeOnLinkClick
	} from '$lib/state/SidebarStore';
	import NavigationLinkGroup from './NavigationLinkGroup.svelte';

	export let activeUrl = null;
	export let routes = [];
	export let base = '';
	export let onLinkClick = null;
	export let open = true;

	// Initialise the shared store with the values passed to `Sidebar` as props.
	beforeUpdate(() => {
		storeOnLinkClick.set(onLinkClick);
		storeActiveUrl.set(activeUrl);
	});

	const toggleOpen = () => (open = !open);
</script>

<nav class:open id="svelte-topbar">
	{#if open}
		<NavigationLinkGroup {routes} {base} />
	{/if}
</nav>
