<script>
	import { enhance } from '$app/forms';
	import { fly } from 'svelte/transition';

	export let data;
	$: ({ note } = data);
</script>

<form use:enhance action="?/editNote" method="POST" class="m-10" in:fly={{ y: 100, duration: 250 }}>
	<label>
		<span>Title</span>
		<input
			placeholder="Note title"
			type="text"
			name="title"
			class="input"
			bind:value={note.title}
			minlength="1"
			maxlength="50"
		/>
	</label>

	<label class="mt-5">
		<span>Contents</span>
		<textarea
			placeholder="Enter your text"
			name="content"
			class="textarea h-80"
			bind:value={note.content}
			minlength="1"
			maxlength="50"
		/>
	</label>

	<button class="btn variant-filled-primary mt-5" type="submit">Edit note</button>
</form>
