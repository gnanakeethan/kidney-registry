<script lang='ts'>
	import { menuState, bottomMenuState, MenuItem, MenuState } from '../../state/menu';
	import { Writable } from 'svelte/store';

	import PaymentHistoryIcon from '~icons/sustain/menu-payment-history';
	import ReportsIcon from '~icons/sustain/menu-reports';
	import HelpIcon from '~icons/sustain/menu-help';
	import SettingsIcon from '~icons/sustain/menu-settings';
	import AccountSettingsIcon from '~icons/sustain/menu-account-settings';
	import CreativesIcon from '~icons/sustain/menu-creatives';
	import MyProgramIcon from '~icons/sustain/menu-my-programs';
	import MenuDashboardIcon from '~icons/sustain/menu-dashboard';
	import OutlineCalendar from '~icons/heroicons-outline/calendar';

</script>

<nav class='mt-5 px-2 space-y-1'>
	<div class='static text-dark-green bg-white'>
		{#each $menuState.menuItems as menu,i}
			<a href='{menu.url}'
			   class='{menu.url===location.pathname? "bg-gray-100" : "bg-red-400"}'>
				<svelte:component this={menu.icon} class='mr-4' />
				{menu.name} {i} {menuState.active}
			</a>
		{/each}
		<MyProgramIcon class='fill-current text-dark-green mr-4' />
		My Program
		<CreativesIcon class='fill-current  text-dark-green mr-4' />
		Creatives
		<ReportsIcon class='fill-current  text-dark-green mr-4' />
		Reports
		<PaymentHistoryIcon class='fill-current  text-dark-green mr-4' />
		Payment History
		<div class='absolute px-2 space-y-1 bottom-0 left-0'>
			<a href='/'
			   class='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md'>
				<!-- Heroicon name: outline/calendar -->
				<AccountSettingsIcon class='fill-current  text-dark-green mr-4' />
				Account Settings
			</a>
			<a href='/'
			   class='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md'>
				<!-- Heroicon name: outline/calendar -->
				<HelpIcon class='fill-current text-dark-green mr-4' />
				Help
			</a>
		</div>

</nav>
