<script lang="ts">
	import AccountSettingsIcon from '~icons/sustain/menu-account-settings';
	import CreativesIcon from '~icons/sustain/menu-creatives';
	import HelpIcon from '~icons/sustain/menu-help';
	import MyProgramIcon from '~icons/sustain/menu-my-programs';

	import PaymentHistoryIcon from '~icons/sustain/menu-payment-history';
	import ReportsIcon from '~icons/sustain/menu-reports';
	import { menuState } from '../../state/menu';
</script>

<nav class="mt-5 space-y-1 px-2">
	<div class="text-dark-green static bg-white">
		{#each $menuState.menuItems as menu, i}
			<a href={menu.url} class={menu.url === location.pathname ? 'bg-gray-100' : 'bg-red-400'}>
				<svelte:component this={menu.icon} class="mr-4" />
				{menu.name}
				{i}
				{menuState.active}
			</a>
		{/each}
		<MyProgramIcon class="text-dark-green mr-4 fill-current" />
		My Program
		<CreativesIcon class="text-dark-green  mr-4 fill-current" />
		Creatives
		<ReportsIcon class="text-dark-green  mr-4 fill-current" />
		Reports
		<PaymentHistoryIcon class="text-dark-green  mr-4 fill-current" />
		Payment History
		<div class="absolute bottom-0 left-0 space-y-1 px-2">
			<a
				class="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
				href="/"
			>
				<!-- Heroicon name: outline/calendar -->
				<AccountSettingsIcon class="text-dark-green  mr-4 fill-current" />
				Account Settings
			</a>
			<a
				class="group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900"
				href="/"
			>
				<!-- Heroicon name: outline/calendar -->
				<HelpIcon class="text-dark-green mr-4 fill-current" />
				Help
			</a>
		</div>
	</div>
</nav>
