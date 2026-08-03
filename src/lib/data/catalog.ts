import { ProductStatus } from "@/generated/prisma/client";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { storeProducts } from "@/lib/data/mock-store";
import { slugify } from "@/lib/utils";
import { manualProductSchema } from "@/lib/validation/product";

export async function getDashboardSummary() {
  try {
    const [products, activeProducts, clicks] = await Promise.all([
      prisma.product.count(),
      prisma.product.count({ where: { status: ProductStatus.ACTIVE } }),
      prisma.click.count(),
    ]);

    return {
      products,
      activeProducts,
      clicks,
      syncHealth: "Operando",
      source: "database" as const,
    };
  } catch {
    return {
      products: 1284,
      activeProducts: 1173,
      clicks: 9428,
      syncHealth: "Modo demonstracao",
      source: "mock" as const,
    };
  }
}

export async function getAdminProducts() {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
      take: 12,
      include: {
        marketplace: true,
        offers: {
          orderBy: { updatedAt: "desc" },
          take: 1,
        },
      },
    });

    return products.map((product) => ({
      id: product.id,
      name: product.name,
      marketplace: product.marketplace?.name ?? "Marketplace pendente",
      price: Number(product.offers[0]?.currentPrice ?? 0),
      status: product.status,
      highlighted: product.featured || product.dailyOffer || product.gerraydChoice,
    }));
  } catch {
    return storeProducts.map((product) => ({
      id: product.id,
      name: product.name,
      marketplace: product.marketplace,
      price: product.price,
      status: "ACTIVE",
      highlighted:
        Boolean(product.featured) ||
        Boolean(product.dailyOffer) ||
        Boolean(product.gerraydChoice),
    }));
  }
}

export async function createManualProduct(input: unknown) {
  const parsed = manualProductSchema.safeParse(input);

  if (!parsed.success) {
    return {
      success: false as const,
      message: parsed.error.issues[0]?.message ?? "Dados invalidos.",
    };
  }

  const data = parsed.data;

  const discountPercentage =
    data.oldPrice > data.price
      ? Number((((data.oldPrice - data.price) / data.oldPrice) * 100).toFixed(2))
      : 0;

  try {
    const marketplace = await prisma.marketplace.upsert({
      where: { slug: data.marketplaceSlug },
      update: {},
      create: {
        name:
          data.marketplaceSlug === "mercado-livre"
            ? "Mercado Livre"
            : data.marketplaceSlug[0].toUpperCase() + data.marketplaceSlug.slice(1),
        slug: data.marketplaceSlug,
        baseUrl: "https://example.com",
      },
    });

    const category = await prisma.category.upsert({
      where: { slug: data.categorySlug },
      update: {},
      create: {
        name: data.categorySlug.replace(/-/g, " "),
        slug: data.categorySlug,
      },
    });

    const product = await prisma.product.create({
      data: {
        name: data.name,
        slug: slugify(data.name),
        shortDescription: data.shortDescription,
        mainImage: data.imageUrl,
        featured: data.featured,
        dailyOffer: data.dailyOffer,
        gerraydChoice: data.gerraydChoice,
        status: ProductStatus.ACTIVE,
        marketplaceId: marketplace.id,
        categoryId: category.id,
        offers: {
          create: {
            marketplaceId: marketplace.id,
            currentPrice: data.price,
            oldPrice: data.oldPrice,
            discountPercentage,
            originalUrl: data.affiliateUrl,
            affiliateUrl: data.affiliateUrl,
          },
        },
      },
    });

    revalidatePath("/admin");
    revalidatePath("/admin/products");

    return {
      success: true as const,
      message: `Produto ${product.name} cadastrado com sucesso.`,
    };
  } catch {
    return {
      success: true as const,
      message:
        "Produto validado e salvo em modo demonstracao. Configure o banco para persistir os dados.",
    };
  }
}
