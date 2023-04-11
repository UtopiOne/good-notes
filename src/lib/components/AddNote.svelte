<script>
	import { fly } from 'svelte/transition';
</script>

<button
	aria-label="Add note"
	transition:fly={{ y: 100, duration: 250 }}
	on:click
	class="flex justify-center h-[500px] w-full ring-outline-token rounded-container-token mt-5 lg:m-5 border-2 border-black dark:border-white border-dashed hover:scale-[1.01] opacity-50 hover:shadow-xl transition-all"
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		stroke="currentColor"
		stroke-width="1.5"
		class="w-12 h-12 self-center"
		viewBox="0 0 24 24"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
		/>
	</svg>
</button>

<slot />
