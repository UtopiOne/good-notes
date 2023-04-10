<script lang="ts">
	import { enhance } from '$app/forms';
	import AddNote from '$lib/components/AddNote.svelte';
	import FormModal from '$lib/components/FormModal.svelte';
	import type { ModalComponent, ModalSettings } from '@skeletonlabs/skeleton';
	import { modalStore } from '@skeletonlabs/skeleton';
	import { fly } from 'svelte/transition';

	export let data;

	$: ({ notes } = data);

	const formModal: ModalComponent = {
		ref: FormModal,
		props: { background: 'bg-white-100', shadow: 'shadow-xl' }
	};

	const form: ModalSettings = {
		type: 'component',
		component: formModal
	};
</script>

<section class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 m-10">
	{#each notes as note}
		<div class="card card-hover h-[500px] m-5" transition:fly={{ y: 100, duration: 250 }}>
			<h4 class="card-header">{note.title}</h4>
			<p class="m-5 text-justify text-clip">{note.content}</p>
			<div class="flex card-footer flex-row">
				<form use:enhance action="?/editNote&id={note.id}" method="POST">
					<button class="btn variant-ghost-primary mr-3">Edit</button>
				</form>
				<form use:enhance action="?/deleteNote&id={note.id}" method="POST">
					<button class="btn variant-ghost-secondary">Delete</button>
				</form>
			</div>
		</div>
	{/each}

	<AddNote on:click={() => modalStore.trigger(form)} />
</section>
