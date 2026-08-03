import { NextResponse } from "next/server";
import { storeProducts } from "@/lib/data/mock-store";

type RouteProps = {
  params: Promise<{ offerId: string }>;
};

export async function GET(_: Request, { params }: RouteProps) {
  const { offerId } = await params;
  const product = storeProducts.find((entry) => entry.id === offerId);

  const fallbackUrl = new URL("https://magazinegerrayd.com.br");

  return NextResponse.redirect(
    product
      ? new URL(`/buscar?termo=${encodeURIComponent(product.name)}`, fallbackUrl)
      : fallbackUrl,
  );
}
