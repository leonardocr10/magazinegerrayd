import Image from "next/image";
import { cn } from "@/lib/utils";

type PartnerCardProps = {
  partner: "magalu" | "shopee" | "mercado-livre" | "amazon";
  subtitle: string;
};

function MagaluLogo() {
  return (
    <div className="text-center leading-none">
      <div className="text-[22px] font-black tracking-[-0.05em] text-[#1877ff]">
        magalu
      </div>
    </div>
  );
}

function ShopeeLogo() {
  return (
    <div className="flex items-center justify-center gap-2 leading-none">
      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#ff5a1f] text-[15px] font-black text-white shadow-[0_4px_10px_rgba(255,90,31,0.18)]">
        S
      </span>
      <span className="text-[18px] font-black tracking-[-0.04em] text-[#ff5a1f]">
        Shopee
      </span>
    </div>
  );
}

function MercadoLivreLogo() {
  return (
    <div className="flex items-center justify-center gap-2 leading-none">
      <Image
        src="/partners/mercado-livre-logo.png"
        alt="Mercado Livre"
        width={42}
        height={28}
        className="h-7 w-auto"
      />
      <span className="text-[18px] font-black tracking-[-0.04em] text-[#e0a400]">
        Mercado Livre
      </span>
    </div>
  );
}

function AmazonLogo() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/partners/amazon-logo.png"
        alt="Amazon"
        width={84}
        height={30}
        className="h-8 w-auto"
      />
    </div>
  );
}

function PartnerLogo({ partner }: { partner: PartnerCardProps["partner"] }) {
  switch (partner) {
    case "magalu":
      return <MagaluLogo />;
    case "shopee":
      return <ShopeeLogo />;
    case "mercado-livre":
      return <MercadoLivreLogo />;
    case "amazon":
      return <AmazonLogo />;
  }
}

export function PartnerCard({ partner, subtitle }: PartnerCardProps) {
  return (
    <article
      className={cn(
        "rounded-[18px] border border-[#e7edf8] bg-white px-5 py-4 text-center",
        "shadow-[0_8px_20px_rgba(28,63,132,0.05)]",
      )}
    >
      <PartnerLogo partner={partner} />
      <div className="mt-1.5 text-xs text-[#7081a2]">{subtitle}</div>
    </article>
  );
}
