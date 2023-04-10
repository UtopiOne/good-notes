import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import type { Actions, PageServerLoad } from './$types';

const noteSchema = z.object({
	title: z.string().min(1),
	content: z.string().min(1)
});

export const load: PageServerLoad = async (event) => {
	const noteForm = await superValidate(event, noteSchema);

	return {
		noteForm,
		notes: await prisma.notes.findMany()
	};
};

export const actions: Actions = {
	createNote: async ({ request }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};

		try {
			await prisma.notes.create({
				data: {
					title,
					content
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create note' });
		}
	},
	deleteNote: async ({ url }) => {
		const id = url.searchParams.get('id');

		if (!id) {
			return fail(400, { message: 'Invalid request' });
		}

		try {
			await prisma.notes.delete({
				where: {
					id: Number(id)
				}
			});
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not delete a note' });
		}
	}
};
