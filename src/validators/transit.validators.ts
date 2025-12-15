import { z } from 'zod';

export const getRoutesSchema = z.object({
  params: z.object({
    city: z.string().min(1)
  })
});

export const getEtaSchema = z.object({
  query: z.object({
    stop_id: z.string().min(1)
  })
});

export const createTransitIncidentSchema = z.object({
  body: z.object({
    type: z.string().min(1),
    description: z.string().optional(),
    route: z.string().optional()
  })
});
