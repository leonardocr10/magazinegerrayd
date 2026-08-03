import { marketplaceProviders } from "@/lib/marketplaces";

export type SyncScope = "featured-products" | "catalog" | "out-of-stock" | "coupons";

export const syncSchedule = {
  "featured-products": "a cada 30 minutos",
  catalog: "a cada 2 horas",
  "out-of-stock": "a cada 12 horas",
  coupons: "a cada 1 hora",
} satisfies Record<SyncScope, string>;

export async function runCatalogSync(scope: SyncScope) {
  const provider = marketplaceProviders.mock;
  const result = await provider.updateProduct("sync-placeholder");

  return {
    scope,
    provider: provider.slug,
    result,
    startedAt: new Date(),
    retryStrategy: "backoff exponencial",
  };
}
