<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
	<!--
		This example requires updating your template:

		```
		<html class="h-full bg-white">
		<body class="h-full">
		```
	-->
	<div class="min-h-full">
		<TransitionRoot as="template" :show="sidebarOpen">
			<Dialog as="div" class="relative z-40 lg:hidden" @close="sidebarOpen = false">
				<TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
					<div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
				</TransitionChild>

				<div class="fixed inset-0 z-40 flex">
					<TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
						<DialogPanel class="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
							<TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
								<div class="absolute top-0 right-0 -mr-12 pt-2">
									<button type="button" class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
										<span class="sr-only">Close sidebar</span>
										<XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
									</button>
								</div>
							</TransitionChild>
							<div class="flex flex-shrink-0 items-center px-4">
								<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=500" alt="Your Company" />
							</div>
							<div class="mt-5 h-0 flex-1 overflow-y-auto">
								<nav class="px-2">
									<div class="space-y-1">
										<a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50', 'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md']" :aria-current="item.current ? 'page' : undefined">
											<component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
											{{ item.name }}
										</a>
									</div>
									<div class="mt-8">
										<h3 class="px-3 text-sm font-medium text-gray-500" id="mobile-teams-headline">Teams</h3>
										<div class="mt-1 space-y-1" role="group" aria-labelledby="mobile-teams-headline">
											<a v-for="team in teams" :key="team.name" :href="team.href" class="group flex items-center rounded-md px-3 py-2 text-base font-medium leading-5 text-gray-600 hover:bg-gray-50 hover:text-gray-900">
												<span :class="[team.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full']" aria-hidden="true" />
												<span class="truncate">{{ team.name }}</span>
											</a>
										</div>
									</div>
								</nav>
							</div>
						</DialogPanel>
					</TransitionChild>
					<div class="w-14 flex-shrink-0" aria-hidden="true">
						<!-- Dummy element to force sidebar to shrink to fit close icon -->
					</div>
				</div>
			</Dialog>
		</TransitionRoot>

		<!-- Static sidebar for desktop -->
		<div class="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4">
			<div class="flex flex-shrink-0 items-center px-6">
				<img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=purple&shade=500" alt="Your Company" />
			</div>
			<!-- Sidebar component, swap this element with another sidebar if you like -->
			<div class="mt-5 flex h-0 flex-1 flex-col overflow-y-auto pt-1">
				<!-- User account dropdown -->
				<Menu as="div" class="relative inline-block px-3 text-left">
					<div>
						<MenuButton class="group w-full rounded-md bg-gray-100 px-3.5 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              <span class="flex w-full items-center justify-between">
                <span class="flex min-w-0 items-center justify-between space-x-3">
                  <img class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="" />
                  <span class="flex min-w-0 flex-1 flex-col">
                    <span class="truncate text-sm font-medium text-gray-900">Jessy Schwarz</span>
                    <span class="truncate text-sm text-gray-500">@jessyschwarz</span>
                  </span>
                </span>
                <ChevronUpDownIcon class="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
              </span>
						</MenuButton>
					</div>
					<transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
						<MenuItems class="absolute right-0 left-0 z-10 mx-3 mt-1 origin-top divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
							<div class="py-1">
								<MenuItem v-slot="{ active }">
									<a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">View profile</a>
								</MenuItem>
								<MenuItem v-slot="{ active }">
									<a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Settings</a>
								</MenuItem>
								<MenuItem v-slot="{ active }">
									<a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Notifications</a>
								</MenuItem>
							</div>
							<div class="py-1">
								<MenuItem v-slot="{ active }">
									<a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Get desktop app</a>
								</MenuItem>
								<MenuItem v-slot="{ active }">
									<a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>
								</MenuItem>
							</div>
							<div class="py-1">
								<MenuItem v-slot="{ active }">
									<a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Logout</a>
								</MenuItem>
							</div>
						</MenuItems>
					</transition>
				</Menu>
				<!-- Sidebar Search -->
				<div class="mt-5 px-3">
					<label for="search" class="sr-only">Search</label>
					<div class="relative mt-1 rounded-md shadow-sm">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3" aria-hidden="true">
							<MagnifyingGlassIcon class="mr-3 h-4 w-4 text-gray-400" aria-hidden="true" />
						</div>
						<input type="text" name="search" id="search" class="block w-full rounded-md border-gray-300 pl-9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Search" />
					</div>
				</div>
				<!-- Navigation -->
				<nav class="mt-6 px-3">
					<div class="space-y-1">
						<a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50', 'group flex items-center px-2 py-2 text-sm font-medium rounded-md']" :aria-current="item.current ? 'page' : undefined">
							<component :is="item.icon" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500', 'mr-3 flex-shrink-0 h-6 w-6']" aria-hidden="true" />
							{{ item.name }}
						</a>
					</div>
					<div class="mt-8">
						<!-- Secondary navigation -->
						<h3 class="px-3 text-sm font-medium text-gray-500" id="desktop-teams-headline">Teams</h3>
						<div class="mt-1 space-y-1" role="group" aria-labelledby="desktop-teams-headline">
							<a v-for="team in teams" :key="team.name" :href="team.href" class="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900">
								<span :class="[team.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full']" aria-hidden="true" />
								<span class="truncate">{{ team.name }}</span>
							</a>
						</div>
					</div>
				</nav>
			</div>
		</div>
		<!-- Main column -->
		<div class="flex flex-col lg:pl-64">
			<!-- Search header -->
			<div class="sticky top-0 z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:hidden">
				<button type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden" @click="sidebarOpen = true">
					<span class="sr-only">Open sidebar</span>
					<Bars3CenterLeftIcon class="h-6 w-6" aria-hidden="true" />
				</button>
				<div class="flex flex-1 justify-between px-4 sm:px-6 lg:px-8">
					<div class="flex flex-1">
						<form class="flex w-full md:ml-0" action="#" method="GET">
							<label for="search-field" class="sr-only">Search</label>
							<div class="relative w-full text-gray-400 focus-within:text-gray-600">
								<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
									<MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
								</div>
								<input id="search-field" name="search-field" class="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm" placeholder="Search" type="search" />
							</div>
						</form>
					</div>
					<div class="flex items-center">
						<!-- Profile dropdown -->
						<Menu as="div" class="relative ml-3">
							<div>
								<MenuButton class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
									<span class="sr-only">Open user menu</span>
									<img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
								</MenuButton>
							</div>
							<transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
								<MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
									<div class="py-1">
										<MenuItem v-slot="{ active }">
											<a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">View profile</a>
										</MenuItem>
										<MenuItem v-slot="{ active }">
											<a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Settings</a>
										</MenuItem>
										<MenuItem v-slot="{ active }">
											<a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Notifications</a>
										</MenuItem>
									</div>
									<div class="py-1">
										<MenuItem v-slot="{ active }">
											<a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Get desktop app</a>
										</MenuItem>
										<MenuItem v-slot="{ active }">
											<a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Support</a>
										</MenuItem>
									</div>
									<div class="py-1">
										<MenuItem v-slot="{ active }">
											<a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Logout</a>
										</MenuItem>
									</div>
								</MenuItems>
							</transition>
						</Menu>
					</div>
				</div>
			</div>
			<main class="flex-1">
				<!-- Page title & actions -->
				<div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
					<div class="min-w-0 flex-1">
						<h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">Home</h1>
					</div>
					<div class="mt-4 flex sm:mt-0 sm:ml-4">
						<button type="button" class="sm:order-0 order-1 ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-0">Share</button>
						<button type="button" class="order-0 inline-flex items-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:order-1 sm:ml-3">Create</button>
					</div>
				</div>
				<!-- Pinned projects -->
				<div class="mt-6 px-4 sm:px-6 lg:px-8">
					<h2 class="text-sm font-medium text-gray-900">Pinned Projects</h2>
					<ul role="list" class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
						<li v-for="project in pinnedProjects" :key="project.id" class="relative col-span-1 flex rounded-md shadow-sm">
							<div :class="[project.bgColorClass, 'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md']">{{ project.initials }}</div>
							<div class="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
								<div class="flex-1 truncate px-4 py-2 text-sm">
									<a href="#" class="font-medium text-gray-900 hover:text-gray-600">{{ project.title }}</a>
									<p class="text-gray-500">{{ project.totalMembers }} Members</p>
								</div>
								<Menu as="div" class="flex-shrink-0 pr-2">
									<MenuButton class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
										<span class="sr-only">Open options</span>
										<EllipsisVerticalIcon class="h-5 w-5" aria-hidden="true" />
									</MenuButton>
									<transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
										<MenuItems class="absolute right-10 top-3 z-10 mx-3 mt-1 w-48 origin-top-right divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
											<div class="py-1">
												<MenuItem v-slot="{ active }">
													<a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">View</a>
												</MenuItem>
											</div>
											<div class="py-1">
												<MenuItem v-slot="{ active }">
													<a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Removed from pinned</a>
												</MenuItem>
												<MenuItem v-slot="{ active }">
													<a href="#" :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">Share</a>
												</MenuItem>
											</div>
										</MenuItems>
									</transition>
								</Menu>
							</div>
						</li>
					</ul>
				</div>

				<!-- Projects list (only on smallest breakpoint) -->
				<div class="mt-10 sm:hidden">
					<div class="px-4 sm:px-6">
						<h2 class="text-sm font-medium text-gray-900">Projects</h2>
					</div>
					<ul role="list" class="mt-3 divide-y divide-gray-100 border-t border-gray-200">
						<li v-for="project in projects" :key="project.id">
							<a href="#" class="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6">
                <span class="flex items-center space-x-3 truncate">
                  <span :class="[project.bgColorClass, 'w-2.5 h-2.5 flex-shrink-0 rounded-full']" aria-hidden="true" />
                  <span class="truncate text-sm font-medium leading-6">
                    {{ project.title }}
                    {{ ' ' }}
                    <span class="truncate font-normal text-gray-500">in {{ project.team }}</span>
                  </span>
                </span>
								<ChevronRightIcon class="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
							</a>
						</li>
					</ul>
				</div>

				<!-- Projects table (small breakpoint and up) -->
				<div class="mt-8 hidden sm:block">
					<div class="inline-block min-w-full border-b border-gray-200 align-middle">
						<table class="min-w-full">
							<thead>
							<tr class="border-t border-gray-200">
								<th class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900" scope="col">
									<span class="lg:pl-2">Project</span>
								</th>
								<th class="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900" scope="col">Members</th>
								<th class="hidden border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900 md:table-cell" scope="col">Last updated</th>
								<th class="border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-sm font-semibold text-gray-900" scope="col" />
							</tr>
							</thead>
							<tbody class="divide-y divide-gray-100 bg-white">
							<tr v-for="project in projects" :key="project.id">
								<td class="w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900">
									<div class="flex items-center space-x-3 lg:pl-2">
										<div :class="[project.bgColorClass, 'flex-shrink-0 w-2.5 h-2.5 rounded-full']" aria-hidden="true" />
										<a href="#" class="truncate hover:text-gray-600">
                        <span>
                          {{ project.title }}
                          {{ ' ' }}
                          <span class="font-normal text-gray-500">in {{ project.team }}</span>
                        </span>
										</a>
									</div>
								</td>
								<td class="px-6 py-3 text-sm font-medium text-gray-500">
									<div class="flex items-center space-x-2">
										<div class="flex flex-shrink-0 -space-x-1">
											<img v-for="member in project.members" :key="member.handle" class="h-6 w-6 max-w-none rounded-full ring-2 ring-white" :src="member.imageUrl" :alt="member.name" />
										</div>
										<span v-if="project.totalMembers > project.members.length" class="flex-shrink-0 text-xs font-medium leading-5">+{{ project.totalMembers - project.members.length }}</span>
									</div>
								</td>
								<td class="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">{{ project.lastUpdated }}</td>
								<td class="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
									<a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
								</td>
							</tr>
							</tbody>
						</table>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import {
	Dialog,
	DialogPanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	TransitionChild,
	TransitionRoot
} from '@headlessui/vue';
import { Bars3CenterLeftIcon, Bars4Icon, ClockIcon, HomeIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import {
	ChevronRightIcon,
	ChevronUpDownIcon,
	EllipsisVerticalIcon,
	MagnifyingGlassIcon
} from '@heroicons/vue/20/solid';

const navigation = [
	{ name: 'Home', href: '#', icon: HomeIcon, current: true },
	{ name: 'My tasks', href: '#', icon: Bars4Icon, current: false },
	{ name: 'Recent', href: '#', icon: ClockIcon, current: false },
]
const teams = [
	{ name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
	{ name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
	{ name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
]
const projects = [
	{
		id: 1,
		title: 'GraphQL API',
		initials: 'GA',
		team: 'Engineering',
		members: [
			{
				name: 'Dries Vincent',
				handle: 'driesvincent',
				imageUrl:
					'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				name: 'Lindsay Walton',
				handle: 'lindsaywalton',
				imageUrl:
					'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				name: 'Courtney Henry',
				handle: 'courtneyhenry',
				imageUrl:
					'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				name: 'Tom Cook',
				handle: 'tomcook',
				imageUrl:
					'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
		],
		totalMembers: 12,
		lastUpdated: 'March 17, 2020',
		pinned: true,
		bgColorClass: 'bg-pink-600',
	},
	// More projects...
]
const pinnedProjects = projects.filter((project) => project.pinned)

const sidebarOpen = ref(false)
</script>
