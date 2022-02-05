<script>
	import { authState } from '../../lib/state/auth';
	import { goto } from '$app/navigation';
	import { createForm } from 'svelte-forms-lib';
	import * as yup from 'yup';

	let username = '';
	let password = '';
	let email = '';

	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			name: '',
			email: ''
		},
		validationSchema: yup.object().shape({
			password: yup.string().required(),
			email: yup.string().email().required()
		}),
		onSubmit: (values) => {
			// alert(JSON.stringify(values));
			authState.set({
				loggedIn: true,
				token: 'sometokehrestdyfugihojpihugytfrdestyfguhijon',
				loginAs: null
			});
			goto('/app');
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
	<div class="flex flex-col items-start py-2">
		<label for="email">Email</label>
		<input
			bind:value={$form.email}
			class="w-full"
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
			class="w-full"
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
		submit
	</button>
</form>
