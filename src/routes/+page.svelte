<script>
	import AddNote from '$lib/components/AddNote.svelte';
</script>

<section class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 m-10">
	<div class="card card-hover h-full m-5">
		<h4 class="card-header">Title</h4>
		<p class="m-5 text-justify">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies augue nec tellus
			porttitor, sit amet dignissim leo mattis. Curabitur eu felis mi. Maecenas in vulputate orci,
			vestibulum dictum lacus. Quisque pulvinar auctor aliquam. Ut tempor ac odio sit amet sodales.
			Praesent cursus lorem sed nunc pharetra maximus. Ut placerat arcu sem, nec ornare dolor
			elementum in. Integer vel malesuada nisi, eu dapibus nunc. Curabitur et tellus vel purus porta
			semper.
		</p>
		<div class="card-footer">
			<button class="btn variant-filled-primary mr-3">Edit</button>
			<button class="btn variant-filled-secondary">Delete</button>
		</div>
	</div>
	<AddNote />
</section>
