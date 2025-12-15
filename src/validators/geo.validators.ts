import { z } from 'zod';

export const getCitySchema = z.object({
  params: z.object({
    city: z.string().min(1)
  })
});

export const getPopulationSchema = z.object({
  params: z.object({
    country: z.string().min(2).max(3)
  })
});

export const createGeoReportSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    description: z.string().optional(),
    location: z.string().optional()
  })
});
