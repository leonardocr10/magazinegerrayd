import type {
  MarketplaceProvider,
  MarketplaceProviderCapability,
  ProductDetails,
  ProductSearchResult,
  ProductUpdateResult,
} from "@/lib/marketplaces/types";

const sampleProducts: ProductSearchResult[] = [
  {
    externalId: "mock-headphone-1",
    name: "Fone Bluetooth Haylou S30 ANC",
    price: 199.9,
    oldPrice: 299.9,
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    marketplaceSlug: "magalu",
    available: true,
  },
  {
    externalId: "mock-drill-2",
    name: "Parafusadeira Mondial FPF-06M",
    price: 89.9,
    oldPrice: 149.9,
    imageUrl:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80",
    marketplaceSlug: "amazon",
    available: true,
  },
];

export class MockMarketplaceProvider implements MarketplaceProvider {
  readonly slug = "mock-provider";
  supports: MarketplaceProviderCapability[] = [
    "searchProducts",
    "getProductDetails",
    "updateProduct",
    "generateAffiliateLink",
    "validateAffiliateLink",
  ];

  async searchProducts(query: string) {
    const normalizedQuery = query.toLowerCase();
    return sampleProducts.filter((product) =>
      product.name.toLowerCase().includes(normalizedQuery),
    );
  }

  async getProductDetails(externalId: string): Promise<ProductDetails> {
    const match = sampleProducts.find((product) => product.externalId === externalId);

    if (!match) {
      throw new Error("Produto simulado nao encontrado.");
    }

    return {
      ...match,
      description:
        "Produto retornado por um provider de exemplo para demonstrar a arquitetura de integracao.",
      rating: 4.8,
      reviewCount: 214,
      affiliateUrl: `https://magazinegerrayd.com.br/go/${externalId}`,
    };
  }

  async updateProduct(productId: string): Promise<ProductUpdateResult> {
    return {
      status: "updated",
      updatedAt: new Date(),
      note: `Atualizacao simulada executada com sucesso para ${productId}.`,
    };
  }

  async generateAffiliateLink(originalUrl: string) {
    return `${originalUrl}${originalUrl.includes("?") ? "&" : "?"}utm_source=magazine-gerrayd`;
  }

  async validateAffiliateLink(url: string) {
    return url.startsWith("http://") || url.startsWith("https://");
  }
}
