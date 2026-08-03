import Image from "next/image";
import Link from "next/link";
import { IconHeart } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { cn, formatPercent, formatPrice } from "@/lib/utils";
import type { StoreProduct } from "@/lib/data/mock-store";

const marketplaceButtonStyles = {
  Amazon: "bg-[#f3f3f3] text-[#111111]",
  Shopee: "bg-[#fff1eb] text-brand-orange",
  "Mercado Livre": "bg-[#fff7d9] text-[#d59600]",
  Magalu: "bg-[#edf4ff] text-brand-blue",
} satisfies Record<StoreProduct["marketplace"], string>;

type ProductCardProps = {
  product: StoreProduct;
  compact?: boolean;
};

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const discount = ((product.oldPrice - product.price) / product.oldPrice) * 100;

  return (
    <article
      className={cn(
        "surface-card rounded-[18px] p-4 shadow-[0_8px_26px_rgba(28,63,132,0.08)]",
        compact ? "flex gap-4" : "flex h-full flex-col",
      )}
    >
      <div className={cn("relative", compact ? "h-28 w-28 shrink-0" : "h-40 w-full")}>
        <Badge tone="orange" className="absolute left-0 top-0 z-10 rounded-[10px] px-2.5 py-1 text-[11px]">
          -{formatPercent(discount)}
        </Badge>
        <button
          type="button"
          className="absolute right-0 top-0 z-10 rounded-full p-1.5 text-slate-500"
        >
          <IconHeart size={18} />
        </button>
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain p-2"
          sizes="(max-width: 768px) 100vw, 280px"
        />
      </div>

      <div className={cn("flex flex-1 flex-col", compact ? "min-w-0" : "mt-2")}>
        <Badge tone="blue" className="w-fit px-2.5 py-1 text-[10px]">
          {product.badge}
        </Badge>
        <h3 className="mt-2 text-[15px] font-bold leading-5 text-brand-blue-dark">
          {product.name}
        </h3>
        <p className="mt-1 text-sm leading-5 text-brand-text-soft">{product.description}</p>

        <div className="mt-3">
          <div className="text-[18px] font-extrabold text-brand-blue">{formatPrice(product.price)}</div>
          <div className="text-xs text-brand-text-soft line-through">{formatPrice(product.oldPrice)}</div>
        </div>

        <div className="mt-3">
          <Link
            href={`/go/${product.id}`}
            className={cn(
              "block rounded-full px-4 py-2.5 text-center text-sm font-semibold",
              marketplaceButtonStyles[product.marketplace],
            )}
          >
            Ver oferta na {product.marketplace}
          </Link>
        </div>
      </div>
    </article>
  );
}
