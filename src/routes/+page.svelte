<script lang="ts">
	import { enhance } from '$app/forms';
	import AddNote from '$lib/components/AddNote.svelte';
	import CreateNoteModal from '$lib/components/CreateNoteModal.svelte';
	import type { ModalComponent, ModalSettings } from '@skeletonlabs/skeleton';
	import { modalStore } from '@skeletonlabs/skeleton';
	import { fly } from 'svelte/transition';

	export let data;

	$: ({ notes } = data);

	const createNoteModalComponent: ModalComponent = {
		ref: CreateNoteModal,
		props: { background: 'bg-white-100', shadow: 'shadow-xl' }
	};

	const createNoteModal: ModalSettings = {
		type: 'component',
		component: createNoteModalComponent
	};
</script>

<section class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 m-10">
	{#each notes as note}
		<div
			class="card card-hover h-[500px] lg:m-5 overflow-auto"
			transition:fly={{ y: 100, duration: 250 }}
		>
			<h4 class="card-header text-clip">{note.title}</h4>
			<p class="m-5 text-justify whitespace-pre-line scroll-m-14 overflow-hidden">{note.content}</p>
			<div class="flex card-footer flex-row">
				<a href="/{note.id}" class="btn variant-ghost-primary mr-3">Edit</a>
				<form use:enhance action="?/deleteNote&id={note.id}" method="POST">
					<button class="btn variant-ghost-secondary">Delete</button>
				</form>
			</div>
		</div>
	{/each}

	<AddNote on:click={() => modalStore.trigger(createNoteModal)} />
</section>
