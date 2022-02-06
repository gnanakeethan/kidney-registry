<script>
    import {beforeUpdate} from 'svelte';
    import {activeUrl as storeActiveUrl, onLinkClick as storeOnLinkClick} from './SidebarStore';
    import NavigationLinkGroup from './NavigationLinkGroup.svelte';

    export let activeUrl = null;
    export let routes = [];
    export let onLinkClick = null;
    export let open = true;

    // Initialise the shared store with the values passed to `Sidebar` as props.
    beforeUpdate(() => {
        storeOnLinkClick.set(onLinkClick);
        storeActiveUrl.set(activeUrl);
    });

    const toggleOpen = () => (open = !open);
</script>

<nav class:open id="svelte-sidebar">
    <slot name="header"/>
    <!--	<button-->
    <!--		aria-controls="svelte-sidebar"-->
    <!--		aria-expanded={open}-->
    <!--		aria-label="Toggle the navigation sidebar"-->
    <!--		class="sidebar-toggle"-->
    <!--		class:open-->
    <!--		on:click={toggleOpen}-->
    <!--		title="Toggle the navigation sidebar"-->
    <!--		>- -->
    <!--	</button>-->
    {#if open}
        <NavigationLinkGroup {routes}/>
        <slot name="footer"/>
    {/if}
</nav>
