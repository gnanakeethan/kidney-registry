<script lang="ts">
	import { goto } from '$app/navigation';

	// import { UserLoginDocument } from '$lib/graphql/generated';
	import { mutation } from '@urql/svelte';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';
	import type { UserLoginMutation } from '../../lib/graphql/generated';
	import { UserLoginDocument } from '../../lib/graphql/generated';
	import { auth, authState } from '../../lib/state/auth';

	let loggingIn = false;
	let attempted = false;
	let message;

	const loginMutation = mutation<UserLoginMutation>({
		query: UserLoginDocument
	});
	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: yup.object().shape({
			email: yup.string().email().required(),
			password: yup.string().required()
		}),
		onSubmit: (values) => {
			loggingIn = true;
			// alert(JSON.stringify(values));
			loginMutation<UserLoginMutation>({ userLogin: values }).then((result) => {
				console.log(result);
				if (auth !== undefined) {
					auth.loggedIn = true;
					auth.token = result.data.userLogin.token;
					auth.user = result.data.userLogin.user;
					authState.set(auth);
					goto(auth.redirectPage);
					return;
				}
				attempted = true;
				message = 'Please check your credentials';
				loggingIn = false;
				// goto('/');
			});
		}
	});
</script>

<svelte:head>
	<title>Sign in</title>
</svelte:head>
<form
	class="mx-auto flex h-[100vh] w-2/3 w-full flex-col justify-center transition-all duration-[1s] md:w-1/2 lg:w-1/4"
	on:submit={handleSubmit}
	style="height:100vh"
>
	{#if attempted}
		<div class="bg-red-500/50 p-2 text-center text-white">
			{message}
		</div>
	{/if}
	{#if loggingIn}
		<div class="lds-roller">
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
			<div />
		</div>
	{:else}
		<div class="flex flex-col items-start py-2">
			<label for="email">Email</label>
			<input
				bind:value={$form.email}
				class="form-input w-full"
				id="email"
				name="email"
				on:change={handleChange}
				type="email"
			/>
			{#if $errors.email}
				<small>{$errors.email}</small>
			{/if}
		</div>
		<div class="flex flex-col items-start py-2">
			<label for="password">Password</label>
			<input
				bind:value={$form.password}
				class="form-input w-full"
				id="password"
				name="password"
				on:change={handleChange}
				type="password"
			/>
			{#if $errors.password}
				<small>{$errors.password}</small>
			{/if}
		</div>
		<button
			class="my-2 mx-auto w-1/2 bg-red-300/50 p-3 transition duration-200 hover:bg-green-700/25 hover:text-white"
			type="submit"
		>
			Login
		</button>
	{/if}
</form>

<style>
	.lds-roller {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;

		@apply mx-auto my-10;
	}

	.lds-roller div {
		animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		transform-origin: 40px 40px;
	}

	.lds-roller div:after {
		content: ' ';
		display: block;
		position: absolute;
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: #ccc;
		margin: -4px 0 0 -4px;
	}

	.lds-roller div:nth-child(1) {
		animation-delay: -0.036s;
	}

	.lds-roller div:nth-child(1):after {
		top: 63px;
		left: 63px;
	}

	.lds-roller div:nth-child(2) {
		animation-delay: -0.072s;
	}

	.lds-roller div:nth-child(2):after {
		top: 68px;
		left: 56px;
	}

	.lds-roller div:nth-child(3) {
		animation-delay: -0.108s;
	}

	.lds-roller div:nth-child(3):after {
		top: 71px;
		left: 48px;
	}

	.lds-roller div:nth-child(4) {
		animation-delay: -0.144s;
	}

	.lds-roller div:nth-child(4):after {
		top: 72px;
		left: 40px;
	}

	.lds-roller div:nth-child(5) {
		animation-delay: -0.18s;
	}

	.lds-roller div:nth-child(5):after {
		top: 71px;
		left: 32px;
	}

	.lds-roller div:nth-child(6) {
		animation-delay: -0.216s;
	}

	.lds-roller div:nth-child(6):after {
		top: 68px;
		left: 24px;
	}

	.lds-roller div:nth-child(7) {
		animation-delay: -0.252s;
	}

	.lds-roller div:nth-child(7):after {
		top: 63px;
		left: 17px;
	}

	.lds-roller div:nth-child(8) {
		animation-delay: -0.288s;
	}

	.lds-roller div:nth-child(8):after {
		top: 56px;
		left: 12px;
	}

	@keyframes lds-roller {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
