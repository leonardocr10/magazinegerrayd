"use server";

import { redirect } from "next/navigation";
import { createManualProduct } from "@/lib/data/catalog";

export async function createManualProductAction(formData: FormData) {
  const result = await createManualProduct({
    name: formData.get("name"),
    shortDescription: formData.get("shortDescription"),
    price: formData.get("price"),
    oldPrice: formData.get("oldPrice"),
    imageUrl: formData.get("imageUrl"),
    categorySlug: formData.get("categorySlug"),
    marketplaceSlug: formData.get("marketplaceSlug"),
    affiliateUrl: formData.get("affiliateUrl"),
    featured: formData.get("featured") === "on",
    dailyOffer: formData.get("dailyOffer") === "on",
    gerraydChoice: formData.get("gerraydChoice") === "on",
  });

  const status = result.success ? "sucesso" : "erro";
  redirect(`/admin/products/new?status=${status}&mensagem=${encodeURIComponent(result.message)}`);
}
