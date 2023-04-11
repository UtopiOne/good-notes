<script>
	import { enhance } from '$app/forms';

	export let data;
	$: ({ note } = data);
</script>

<form use:enhance action="?/editNote" method="POST" class="m-10">
	<label>
		<span>Title</span>
		<input
			placeholder="Note title"
			type="text"
			name="title"
			class="input"
			bind:value={note.title}
		/>
	</label>

	<label class="mt-5">
		<span>Contents</span>
		<textarea
			placeholder="Enter your text"
			name="content"
			class="textarea h-80"
			bind:value={note.content}
		/>
	</label>

	<button class="btn variant-filled-primary mt-5" type="submit">Edit note</button>
</form>
