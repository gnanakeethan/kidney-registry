<script context='module' lang='ts'>
	import '../../assets/styles/app.scss';
	import makeServer from '../../mirage/mirage';
	import { authGuard } from '../../lib/guards/auth';
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types';

	import { base, assets } from '$app/paths';
	import { NotificationsStatus } from '../../lib/state/notifications';
	import PaymentHistoryIcon from '~icons/sustain/menu-payment-history';
	import ReportsIcon from '~icons/sustain/menu-reports';
	import MessageIcon from '~icons/sustain/message';
	import NotificationIcon from '~icons/sustain/notification';
	import HelpIcon from '~icons/sustain/menu-help';
	import SettingsIcon from '~icons/sustain/menu-settings';
	import AccountSettingsIcon from '~icons/sustain/menu-account-settings';
	import CreativesIcon from '~icons/sustain/menu-creatives';
	import MyProgramIcon from '~icons/sustain/menu-my-programs';
	import MenuDashboardIcon from '~icons/sustain/menu-dashboard';
	import SearchIcon from '~icons/sustain/search';
	import OutlineCalendar from '~icons/heroicons-outline/calendar';
	import Sidebar from '../../lib/components/sidebar/Sidebar.svelte';

	if (process.env.NODE_ENV === 'development' && typeof makeServer === 'function') {
		makeServer(); // For people following the tutorial
	}

	let props       = {
		activeUrl: location.pathname,
		routes   : []
	};
	let bottomProps = {
		activeUrl: location.pathname,
		routes   : []
	};


	function defaultroutes() {
		props.activeUrl       = location.pathname;
		bottomProps.activeUrl = location.pathname;
		props.routes          = [
			{ 'name': 'Dashboard', 'route': '/app/publisher', icon: MenuDashboardIcon },
			{ 'name': 'My Programs', 'route': '/app/publisher/myprograms', icon: MyProgramIcon },
			{ 'name': 'Join a Program', 'route': '/app/publisher/joinaprogram', icon: MyProgramIcon },
			{ 'name': 'Join a Program Page', 'route': '/app/publisher/joinaprogrampage', icon: MyProgramIcon },
			{ 'name': 'Joined Program', 'route': '/app/publisher/joinedprogram', icon: MyProgramIcon },
			{ 'name': 'Creatives', 'route': '/app/publisher/creatives', icon: CreativesIcon },
			{ 'name': 'Reports', 'route': '/app/publisher/reports', icon: ReportsIcon },
			{ 'name': 'Payment History', 'route': '/app/publisher/payment_history', icon: PaymentHistoryIcon }
		];

		bottomProps.routes = [
			{ 'name': 'Account Settings', 'route': '/app/publisher/profile', icon: AccountSettingsIcon },
			{ 'name': 'Help', 'route': '/app/publisher/help', icon: HelpIcon }
		];
		props = props;
		bottomProps = bottomProps;
	}

	export async function load(loadInput: LoadInput): Promise<LoadOutput> {
		console.log(loadInput.page.path);
		return await authGuard(loadInput);
	}

</script>
<script>
	import { userType } from '$lib/state/auth';

	userType.subscribe((userType) => {
		defaultroutes()
	});
</script>

<div class='sticky z-10 bg-white top-0 h-20 flex flex-row items-center text-gray-500 border-b'>
	<a href='/'>
		<img src='{assets}/logo/png/named-normal.png' class='h-[100px]' alt=''>
	</a>
	<div class='flex-grow bg-white'></div>
	<div class='mx-4 relative rounded-md shadow-sm flex flex-row items-center'>
		<input placeholder='Search'
		       type='text'
		       name='price'
		       id='price'
		       class='h-11 focus:ring-0 focus:border-none block bg-light-gray flex-grow pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'>
		<SearchIcon class='absolute inset-y-3 right-2 flex items-center' />
	</div>
	<div class='mx-1.5 p-3 inline-flex items-center rounded {$NotificationsStatus.messagesActive?"bg-gray-200":""}'>
		<a class='relative inline-block' href='/app/messaging'>
			<MessageIcon class='subpixel-antialiased fill-current text-xl {$NotificationsStatus.messages>0?"text-gray-900":"text-gray-500"}' />
			{#if $NotificationsStatus.messages > 0}
				<div class='absolute top-0.5 right-0 inline-flex items-center justify-center p-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-dark-green rounded-full'
				     style='font-size: 8px'>
					{$NotificationsStatus.messages > 99 ? 99 : $NotificationsStatus.messages}{$NotificationsStatus.messages > 99 ? '+' : ''}
				</div>
			{/if}
		</a>
	</div>
	<div class='mx-1.5 p-3 inline-flex items-center rounded {$NotificationsStatus.notificationsActive?"bg-gray-200":""}'>
		<div class='relative inline-block'>
			<NotificationIcon class='subpixel-antialiased fill-current text-xl {$NotificationsStatus.notificationCounter>0?" text-gray-900":"text-gray-500"}' />
			{#if $NotificationsStatus.notificationCounter > 0}
				<div class='absolute top-0.5 right-1 inline-flex items-center justify-center p-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-dark-green rounded-full'
				     style='font-size: 8px'>
					{$NotificationsStatus.notificationCounter > 99 ? 99 : $NotificationsStatus.notificationCounter}{$NotificationsStatus.notificationCounter > 99 ? '+' : ''}
				</div>
			{/if}
		</div>
	</div>
	<div class='mx-4'>
		<a href='/app/{$userType}/profile'>
			<img class='h-full rounded-full w-12 hidden md:block'
			     src='https://picsum.photos/seed/profile/90/90'
			     alt='descriptive' />
		</a>
	</div>
</div>
<div class='w-full flex flex-row'>
	<div class='relative min-w-[250px] font-karla px-4 flex flex-col justify-between'
	     style='height:calc(100vh - 5rem)'>
		<div>
			<Sidebar {...props} />
		</div>
		<div>
			<Sidebar {...bottomProps} />
		</div>
	</div>
	<div class='flex-grow bg-white-gray w-full overflow-scroll border-l'>
		<slot />
	</div>
</div>
