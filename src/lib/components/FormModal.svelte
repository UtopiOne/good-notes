<form
	action="?/createNote"
	method="POST"
	class="p-10 bg-surface-100 dark:bg-surface-800 shadow-xl rounded-2xl"
>
	<label>
		<span>Title</span>
		<input placeholder="Note title" type="text" name="title" class="input" />
	</label>

	<label class="mt-5">
		<span>Contents</span>
		<textarea placeholder="Enter your text" name="content" class="textarea h-80" />
	</label>

	<button class="btn variant-filled-primary mt-5" type="submit">Create note</button>
</form>
