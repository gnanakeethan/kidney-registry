<script context="module" lang="ts">
	import { goto } from '$app/navigation';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import { authGuard } from '$lib/guards/auth';
	import { NotificationsStatus } from '$lib/state/notifications';
	import { minimized as minimized } from '$lib/state/SidebarStore';
	import type { LoadInput, LoadOutput } from '@sveltejs/kit/types';
	import MessageIcon from '~icons/ant-design/message-outlined';
	import PatientIcon from '~icons/bi/person';
	import UserIcon from '~icons/bi/person';
	import NotificationIcon from '~icons/carbon/notification';
	import SearchIcon from '~icons/carbon/search-locate';
	import SettingsIcon from '~icons/carbon/settings';
	import CollapsibleIcon from '~icons/clarity/collapse-line';
	import DoctorIcon from '~icons/healthicons/doctor-outline';
	import PreferencesIcon from '~icons/healthicons/ui-preferences-outline';
	import RecurringIcon from '~icons/ic/round-event-repeat';
	import DashboardIcon from '~icons/ic/sharp-dashboard-customize';
	import KidneyOutline from '~icons/whh/kidney';
	import '../assets/styles/app.scss';
	import { activePath } from '../lib/state/SidebarStore';

	// import makeServer from '../../mirage/mirage';
	//
	// if (process.env.NODE_ENV === 'development' && typeof makeServer === 'function') {
	// 	makeServer(); // For people following the tutorial
	// }

	let props = {
		activeUrl: activePath,
		routes: [
			{ name: 'Dashboard', route: '/', icon: DashboardIcon },
			{ name: 'Follow Ups', route: '/followups', icon: RecurringIcon },
			{ name: 'Investigations', route: '/investigations', icon: SearchIcon },
			{ name: 'Examinations', route: '/examinations', icon: SearchIcon },
			{ name: 'Patients', route: '/patients-recipient', icon: PatientIcon },
			{ name: 'Doctors', route: '/doctors', icon: DoctorIcon },
			{ name: 'Users', route: '/users', icon: UserIcon },
			{ name: 'Workflow', route: '/workflow/new', icon: UserIcon }
			// { name: '', route: '/i', icon: DoctorIcon }
		]
	};
	let bottomProps = {
		activeUrl: activePath,
		routes: [
			{ name: 'System Settings', route: '/settings', icon: SettingsIcon },
			{ name: 'Preferences', route: '/preferences', icon: PreferencesIcon }
		]
	};

	export async function load(loadInput: LoadInput): Promise<LoadOutput> {
		console.log(loadInput.url);
		// activeUrl.set(loadInput.url.pathname);
		props.activeUrl = loadInput.url.pathname;
		bottomProps.activeUrl = loadInput.url.pathname;
		return await authGuard(loadInput);
	}
</script>

<script lang="ts">
	import { createClient, setClient } from '@urql/svelte';
	import { ENV } from '$lib/environment/environment';
	import { auth, authState } from '../lib/state/auth';

	auth.viewLoaded = true;
	authState.set(auth);
	const client = createClient({
		url: ENV.basePath,
		fetchOptions: () => {
			console.log(auth);
			if (auth.token.length > 0) {
				return {
					headers: { authorization: auth.token.length > 0 ? `Bearer ${auth.token}` : '' }
				};
			}
			return {};
		},
		requestPolicy: 'cache-and-network'
	});
	setClient(client);

	function logout() {
		auth.token = '';
		auth.loggedIn = false;
		auth.user = null;
		authState.set(auth);
		goto('/auth/login');
	}
</script>

<div
	class="text-system sticky top-0 z-10 flex h-[3.25rem] flex-row items-center bg-zinc-100 text-gray-500"
>
	<a class="flex flex-row items-center py-2 pl-4 text-neutral-600" href="/">
		<KidneyOutline class="rotate-180 fill-current text-2xl" />
		<div class="font-raleway text-2xl font-extrabold">Registry</div>
	</a>
	<div class="w-full flex-grow text-lg font-bold">
		<div class="mx-auto w-1/2">
			{auth.user?.name ?? ''}
			<span class="mx-2 capitalize">({auth.user?.Roles.map((i) => i.name).join(',')})</span>
		</div>
	</div>
	<div class="relative mx-4 flex flex-row items-center">
		<input
			class="bg-light-gray block h-8 w-32 flex-grow border-gray-300 pl-4 pr-12 font-sans text-xs text-sm focus:border-none focus:ring-0"
			placeholder="Search"
			type="text"
		/>
	</div>
	<div
		class="mx-1.5 inline-flex items-center rounded p-2 {$NotificationsStatus.messagesActive
			? 'bg-zinc-300'
			: ''}"
	>
		<a class="relative inline-block" href="/messaging">
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
		class="mx-1.5 inline-flex items-center rounded p-2 {$NotificationsStatus.notificationsActive
			? 'bg-zinc-300'
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
	<div class="mx-4 flex flex-row items-center">
		<a href="/profile">
			<img
				alt="descriptive"
				class="hidden h-full w-10 rounded-full md:block"
				src="https://picsum.photos/seed/profile/90/90"
			/>
		</a>
	</div>
	<button
		class="mx-2 rounded bg-yellow-400 px-2 py-1 text-white"
		on:click={() => {
			logout();
		}}
		>Logout
	</button>
</div>
<div
	class="text-system flex w-full flex-row bg-gradient-to-b from-blue-50 to-stone-50"
	style="height:calc(100vh - 3.25rem);min-height:fit-content"
>
	<div
		class="relative flex flex-col justify-between overflow-scroll"
		style="min-width: fit-content"
	>
		<Sidebar {...props} />
		<Sidebar {...bottomProps} />
		<div
			class="absolute bottom-32 right-5"
			on:click={() => {
				minimized.set(!$minimized);
			}}
		>
			<div
				class="fixed flex h-8 w-8 flex-row items-center justify-around rounded-full border border-dashed border-neutral-500 bg-white"
				class:bg-neutral-500={$minimized}
				class:text-white={$minimized}
			>
				{#if $minimized}
					<CollapsibleIcon class="rotate-90 text-xl" />
				{:else}
					<CollapsibleIcon class="-rotate-90 text-xl" />
				{/if}
			</div>
		</div>
	</div>
	<div
		class="flex-grow overflow-scroll border-l border-t border-dashed border-neutral-500 bg-white"
	>
		<slot />
	</div>
</div>
