import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';
import { jeuxRouter } from './routes/jeux.router';
import { t } from './t';

export const router = t.router({jeuxRouter});

export type Router = typeof router;