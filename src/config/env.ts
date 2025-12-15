import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const EnvSchema = z.object({
  PORT: z.coerce.number().default(3000),
  MONGODB_URI: z.string().min(1).optional(),
  GEO_NAMES_USERNAME: z.string().optional(),
  WORLD_BANK_BASE_URL: z.string().url().default('http://api.worldbank.org/v2'),
  WHO_BASE_URL: z.string().url().default('https://ghoapi.azureedge.net/ghoapi'),
  TRANSIT_API_KEY: z.string().optional(),
  TRANSIT_API_BASE_URL: z.string().url().optional()
});

const parsed = EnvSchema.safeParse(process.env);

if (!parsed.success) {
  // eslint-disable-next-line no-console
  console.error('Variables de entorno inválidas:', parsed.error.flatten().fieldErrors);
  process.exit(1);
}

const config = {
  port: parsed.data.PORT,
  mongoUri: parsed.data.MONGODB_URI,
  geoNamesUser: parsed.data.GEO_NAMES_USERNAME,
  worldBankBaseUrl: parsed.data.WORLD_BANK_BASE_URL,
  whoBaseUrl: parsed.data.WHO_BASE_URL,
  transitApiKey: parsed.data.TRANSIT_API_KEY,
  transitBaseUrl: parsed.data.TRANSIT_API_BASE_URL
};

export default config;
