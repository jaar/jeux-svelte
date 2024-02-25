import type { Context } from '$lib/trpc/context';
import { initTRPC } from '@trpc/server';
import * as jeuxService  from "$lib/service/jeux.service.server"
import { z } from 'zod';
import { t } from '../t';

export const jeuxRouter = t.router({
  getJeux: t.procedure
  .input(z.string().optional())
  .query(async ({ctx, input}) => {

    const mesJeux = await jeuxService.getJeux(input);

    // return {
    //     jeux: mesJeux
    // }

    return mesJeux;

  })
});

export type Router = typeof jeuxRouter;