import { storeProducts } from "@/lib/data/mock-store";

export function generateStaticParams() {
  return storeProducts.map((product) => ({ offerId: product.id }));
}

export async function GET() {
  return Response.json({ ok: true });
}
