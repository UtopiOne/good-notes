<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<div slot="lead" class="flex flex-row">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					class="w-8 h-8 mr-3 place-content-center"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m16.9 4.5 1.6-1.7a1.9 1.9 0 1 1 2.7 2.7L10.6 16a4.5 4.5 0 0 1-2 1.1L6 18l.8-2.7a4.5 4.5 0 0 1 1.1-1.9l9-9zm0 0L19.5 7M18 14v4.8a2.3 2.3 0 0 1-2.3 2.2H5.3A2.3 2.3 0 0 1 3 18.7V8.3A2.3 2.3 0 0 1 5.3 6H10"
					/>
				</svg>
				<a href="/" class="text-lg">My Notes App</a>
			</div>

			<div slot="trail">
				<LightSwitch />
			</div>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
