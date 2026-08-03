export type MarketplaceProviderCapability =
  | "searchProducts"
  | "getProductDetails"
  | "updateProduct"
  | "generateAffiliateLink"
  | "validateAffiliateLink";

export type ProductSearchResult = {
  externalId: string;
  name: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  marketplaceSlug: string;
  available: boolean;
};

export type ProductDetails = ProductSearchResult & {
  description: string;
  rating: number;
  reviewCount: number;
  affiliateUrl: string;
};

export type ProductUpdateResult = {
  status: "updated" | "unsupported" | "not-found";
  updatedAt: Date;
  note?: string;
};

export interface MarketplaceProvider {
  readonly slug: string;
  readonly supports: MarketplaceProviderCapability[];
  searchProducts(query: string): Promise<ProductSearchResult[]>;
  getProductDetails(externalId: string): Promise<ProductDetails>;
  updateProduct(productId: string): Promise<ProductUpdateResult>;
  generateAffiliateLink(originalUrl: string): Promise<string>;
  validateAffiliateLink(url: string): Promise<boolean>;
}
