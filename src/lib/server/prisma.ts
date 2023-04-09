import { PrismaClient } from '@prisma/client';
import { globals } from 'svelte/internal';

const prisma = globals.prisma || new PrismaClient();

if (process.env.NODE_ENV === 'development') {
	globals.prisma = prisma;
}

export { prisma };
