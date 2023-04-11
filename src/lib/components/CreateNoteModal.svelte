<script lang="ts">
	import { enhance } from '$app/forms';
	import { modalStore } from '@skeletonlabs/skeleton';
</script>

<form
	use:enhance
	action="?/createNote"
	method="POST"
	class="p-10 w-full lg:w-1/3 bg-surface-100 dark:bg-surface-800 shadow-xl rounded-2xl"
>
	<label>
		<span>Title</span>
		<input placeholder="Note title" type="text" name="title" class="input" />
	</label>

	<label class="mt-5">
		<span>Contents</span>
		<textarea placeholder="Enter your text" name="content" class="textarea h-80" />
	</label>

	<button class="btn variant-filled-primary mt-5" type="submit" on:click={() => modalStore.close()}
		>Create note</button
	>
</form>
