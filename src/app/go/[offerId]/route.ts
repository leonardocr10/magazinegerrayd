import { storeProducts } from "@/lib/data/mock-store";

type RouteProps = {
  params: Promise<{ offerId: string }>;
};

export function generateStaticParams() {
  return storeProducts.map((product) => ({ offerId: product.id }));
}

export async function GET(_: Request, { params }: RouteProps) {
  const { offerId } = await params;
  const product = storeProducts.find((entry) => entry.id === offerId);

  return Response.json(
    {
      ok: true,
      offerId,
      target: product?.affiliateUrl ?? "https://magazinegerrayd.com.br",
    },
    {
      headers: {
        "cache-control": "public, max-age=31536000, immutable",
      },
    },
  );
}
