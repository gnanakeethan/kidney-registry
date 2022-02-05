<script context="module" lang="ts">
	import '../../assets/styles/app.scss';
	import makeServer from '../../mirage/mirage';
	import { authGuard } from '../../lib/guards/auth';
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types';
	import { NotificationsStatus } from '../../lib/state/notifications';
	import Sidebar from '../../lib/components/sidebar/Sidebar.svelte';
	import MessageIcon from '~icons/ant-design/message-outlined';
	import NotificationIcon from '~icons/carbon/notification';

	if (process.env.NODE_ENV === 'development' && typeof makeServer === 'function') {
		makeServer(); // For people following the tutorial
	}

	let props = {
		activeUrl: '/',
		routes: []
	};
	let bottomProps = {
		activeUrl: '/',
		routes: []
	};

	export async function load(loadInput: LoadInput): Promise<LoadOutput> {
		console.log(loadInput);
		return await authGuard(loadInput);
	}
</script>

<script>
	import { userType } from '$lib/state/auth';

	userType.subscribe((userType) => {});
</script>

<div class="sticky top-0 z-10 flex h-20 flex-row items-center border-b bg-white text-gray-500">
	<a class="px-10" href="/app">
		<div class="font-raleway text-4xl font-extrabold tracking-wide">KiyReg</div>
	</a>
	<div class="? flex-grow" />
	<div class="relative mx-4 flex flex-row items-center rounded-md shadow-sm">
		<input
			class="bg-light-gray block h-11 flex-grow rounded-md border-gray-300 pl-7 pr-12 focus:border-none focus:ring-0 sm:text-sm"
			id="price"
			name="price"
			placeholder="Search"
			type="text"
		/>
	</div>
	<div
		class="mx-1.5 inline-flex items-center rounded p-3 {$NotificationsStatus.messagesActive
			? 'bg-gray-200'
			: ''}"
	>
		<a class="relative inline-block" href="/app/messaging">
			<MessageIcon
				class="fill-current text-xl subpixel-antialiased {$NotificationsStatus.messages > 0
					? 'text-gray-900'
					: 'text-gray-500'}"
			/>
			{#if $NotificationsStatus.messages > 0}
				<div
					class="absolute top-0.5 right-0 inline-flex translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-red-400 p-1 text-xs font-bold leading-none text-white"
					style="font-size: 8px"
				>
					{$NotificationsStatus.messages > 99
						? 99
						: $NotificationsStatus.messages}{$NotificationsStatus.messages > 99 ? '+' : ''}
				</div>
			{/if}
		</a>
	</div>
	<div
		class="mx-1.5 inline-flex items-center rounded p-3 {$NotificationsStatus.notificationsActive
			? 'bg-gray-200'
			: ''}"
	>
		<div class="relative inline-block">
			<NotificationIcon
				class="fill-current text-xl subpixel-antialiased {$NotificationsStatus.notificationCounter >
				0
					? ' text-gray-900'
					: 'text-gray-500'}"
			/>
			{#if $NotificationsStatus.notificationCounter > 0}
				<div
					class="absolute top-0.5 right-1 inline-flex translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-red-400 p-1 text-xs font-bold leading-none text-white"
					style="font-size: 8px"
				>
					{$NotificationsStatus.notificationCounter > 99
						? 99
						: $NotificationsStatus.notificationCounter}{$NotificationsStatus.notificationCounter >
					99
						? '+'
						: ''}
				</div>
			{/if}
		</div>
	</div>
	<div class="mx-4">
		<a href="/app/{$userType}/profile">
			<img
				alt="descriptive"
				class="hidden h-full w-12 rounded-full md:block"
				src="https://picsum.photos/seed/profile/90/90"
			/>
		</a>
	</div>
</div>
<div class="flex w-full flex-row">
	<div
		class="font-karla relative flex min-w-[250px] flex-col justify-between px-4"
		style="height:calc(100vh - 5rem)"
	>
		<div>
			<Sidebar {...props} />
		</div>
		<div>
			<Sidebar {...bottomProps} />
		</div>
	</div>
	<div class="bg-white-gray w-full flex-grow overflow-scroll border-l">
		<slot />
	</div>
</div>
