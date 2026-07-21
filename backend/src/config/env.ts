import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

console.log("DATABASE_URL exists:", Boolean(process.env.DATABASE_URL));

const envSchema = z.object({
  PORT: z.string().default('5000'),
  NODE_ENV: z.string().default('production'),
  DATABASE_URL: z.string().min(1, 'DATABASE_URL environment variable is required'),
  JWT_SECRET: z.string().default('supersecretkey_change_in_production'),
  CORS_ORIGIN: z.string().default('*'),
  FRONTEND_URL: z.string().default('*'),
});

export const env = envSchema.parse(process.env);
