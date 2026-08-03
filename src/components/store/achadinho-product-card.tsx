import Image from "next/image";
import { IconHeart, IconStarFilled } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { formatPercent, formatPrice } from "@/lib/utils";
import type { StoreProduct } from "@/lib/data/mock-store";

const marketplaceLabelStyles = {
  Amazon: "text-[#111111]",
  Shopee: "text-brand-orange",
  "Mercado Livre": "text-[#d4a000]",
  Magalu: "text-brand-blue",
} satisfies Record<StoreProduct["marketplace"], string>;

const marketplaceButtonStyles = {
  Amazon: "bg-[#191919] text-white",
  Shopee: "bg-[#fff1eb] text-brand-orange",
  "Mercado Livre": "bg-[#ffcb14] text-[#333333]",
  Magalu: "bg-brand-blue text-white",
} satisfies Record<StoreProduct["marketplace"], string>;

type AchadinhoProductCardProps = {
  product: StoreProduct;
  tag: string;
  tone?: "blue" | "green" | "orange";
  timer?: string;
};

export function AchadinhoProductCard({
  product,
  tag,
  tone = "blue",
  timer,
}: AchadinhoProductCardProps) {
  const toneClass =
    tone === "green"
      ? "bg-[#13a351] text-white"
      : tone === "orange"
        ? "bg-[#ff6b1a] text-white"
        : "bg-brand-blue text-white";

  const discount = ((product.oldPrice - product.price) / product.oldPrice) * 100;

  return (
    <article className="surface-card rounded-[20px] p-4 shadow-[0_8px_24px_rgba(28,63,132,0.08)]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <Badge tone="orange" className="rounded-[10px] px-2.5 py-1 text-[11px]">
            -{formatPercent(discount)}
          </Badge>
          <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${toneClass}`}>
            {tag}
          </span>
          {timer ? (
            <span className="rounded-full border border-[#ffd5bf] bg-[#fff5ef] px-2.5 py-1 text-[10px] font-semibold text-brand-orange">
              {timer}
            </span>
          ) : null}
        </div>
        <button type="button" className="rounded-full p-1.5 text-slate-500">
          <IconHeart size={18} />
        </button>
      </div>

      <div className="relative mt-2 h-40">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain p-1"
          sizes="(max-width: 768px) 100vw, 240px"
        />
      </div>

      <h3 className="mt-2 text-[15px] font-bold leading-5 text-brand-blue-dark">
        {product.name}
      </h3>
      <p className="mt-1 text-sm leading-5 text-brand-text-soft">{product.description}</p>

      <div className="mt-2 flex items-center gap-2 text-xs text-[#f7a800]">
        <IconStarFilled size={14} />
        <span className="font-semibold text-brand-blue-dark">{product.rating.toFixed(1)}</span>
        <span className="text-brand-text-soft">({product.reviewCount.toLocaleString("pt-BR")})</span>
      </div>

      <div className="mt-3">
        <div className="text-[18px] font-extrabold text-brand-blue">{formatPrice(product.price)}</div>
        <div className="text-xs text-brand-text-soft line-through">{formatPrice(product.oldPrice)}</div>
      </div>

      <div className={`mt-2 text-[13px] font-bold ${marketplaceLabelStyles[product.marketplace]}`}>
        {product.marketplace.toLowerCase()}
      </div>

      <div className="mt-3">
        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="noreferrer"
          className={`block rounded-full px-4 py-3 text-center text-sm font-semibold ${marketplaceButtonStyles[product.marketplace]}`}
        >
          Ver oferta
        </a>
      </div>
    </article>
  );
}
