import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().min(1).default("postgresql://magazinegerrayd:magazinegerrayd@localhost:5432/magazine_gerrayd?schema=public"),
  DIRECT_URL: z.string().min(1).default("postgresql://magazinegerrayd:magazinegerrayd@localhost:5432/magazine_gerrayd?schema=public"),
  REDIS_URL: z.string().min(1).default("redis://localhost:6379"),
  APP_URL: z.string().url().default("http://localhost:3000"),
  JWT_SECRET: z.string().min(16).default("troque-esta-chave-por-uma-chave-longa-e-segura"),
  ADMIN_BOOTSTRAP_EMAIL: z.string().email().default("admin@magazinegerrayd.com.br"),
  ADMIN_BOOTSTRAP_PASSWORD: z.string().min(8).default("TroquePorUmaSenhaSegura123!"),
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_SITE_NAME: z.string().default("Magazine Gerrayd"),
});

export const env = envSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  DIRECT_URL: process.env.DIRECT_URL,
  REDIS_URL: process.env.REDIS_URL,
  APP_URL: process.env.APP_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  ADMIN_BOOTSTRAP_EMAIL: process.env.ADMIN_BOOTSTRAP_EMAIL,
  ADMIN_BOOTSTRAP_PASSWORD: process.env.ADMIN_BOOTSTRAP_PASSWORD,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
});
