import { prisma } from '$lib/server/prisma';
import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const getNote = async () => {
		const note = await prisma.notes.findUnique({
			where: {
				id: Number(params.noteId)
			}
		});

		if (!note) {
			throw error(404, 'Note not found');
		}
		return note;
	};

	return {
		note: getNote()
	};
};

export const actions: Actions = {
	editNote: async ({ request, params }) => {
		let completed = true;
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};

		try {
			await prisma.notes.update({
				where: {
					id: Number(params.noteId)
				},
				data: {
					title,
					content
				}
			});
		} catch (err) {
			console.error(err);
			completed = false;
			return fail(500, { message: 'Could not find note' });
		}

		if (completed) {
			throw redirect(302, '/');
		}
	}
};
