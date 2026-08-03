import Link from "next/link";
import {
  IconCategory,
  IconChevronDown,
  IconFlame,
  IconHeart,
  IconLogin2,
  IconPercentage,
  IconPointFilled,
  IconSearch,
  IconStars,
  IconTicket,
} from "@tabler/icons-react";
import { BrandMark } from "@/components/store/brand-mark";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Ofertas", icon: IconPercentage, key: "ofertas" },
  {
    href: "/buscar?termo=fone+bluetooth",
    label: "Categorias",
    icon: IconCategory,
    caret: true,
    key: "categorias",
  },
  { href: "/#cupons", label: "Cupons", icon: IconTicket, key: "cupons" },
  { href: "/achadinhos", label: "Achadinhos", icon: IconStars, key: "achadinhos" },
];

type StoreHeaderProps = {
  activeNav?: "ofertas" | "categorias" | "cupons" | "achadinhos";
  showDomainBubble?: boolean;
};

export function StoreHeader({
  activeNav = "ofertas",
  showDomainBubble = false,
}: StoreHeaderProps) {
  const whatsappGroupUrl =
    "https://chat.whatsapp.com/Kh6OdjRatwO8xiE12GJTYf?s=sw&p=a&mlu=4";

  return (
    <header className="sticky top-0 z-40 border-b border-brand-line/70 bg-white/95 backdrop-blur-xl">
      <div className="bg-brand-blue text-white">
        <div className="container-shell flex items-center justify-between gap-3 py-2 text-[11px] md:text-sm">
          <div className="flex min-w-0 flex-1 items-center gap-4 overflow-x-auto whitespace-nowrap">
            <span className="flex items-center gap-1.5">
              <IconPointFilled size={10} />
              Ofertas selecionadas com carinho e seguranca
            </span>
            <span className="hidden items-center gap-1.5 md:flex">
              <IconPointFilled size={10} />
              Atualizado todos os dias
            </span>
            <span className="hidden items-center gap-1.5 lg:flex">
              <IconPointFilled size={10} />
              Suporte e confianca
            </span>
          </div>
          <div className="hidden items-center gap-3 text-xs md:flex">
            <span>Nos siga:</span>
            <a href="#" className="transition hover:text-white/80">
              Instagram
            </a>
            <a href="#" className="transition hover:text-white/80">
              YouTube
            </a>
            <a href="#" className="transition hover:text-white/80">
              TikTok
            </a>
            <a
              href={whatsappGroupUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/14 px-3 py-1 font-semibold transition hover:bg-white/22"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="container-shell py-4">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex items-center gap-4 pl-4 xl:min-w-[420px] xl:pl-6">
            <BrandMark />
            {showDomainBubble ? (
              <div className="hidden rounded-full bg-[#eef4ff] px-6 py-3 text-[17px] font-medium text-brand-blue shadow-[0_8px_20px_rgba(28,63,132,0.08)] md:block">
                magazinegerrayd.com.br
              </div>
            ) : null}
          </div>

          <form
            action="/buscar"
            className="flex flex-1 items-center overflow-hidden rounded-full border border-[#d6def4] bg-white shadow-[0_8px_24px_rgba(17,63,163,0.08)]"
          >
            <div className="px-5 text-brand-text-soft">
              <IconSearch size={18} />
            </div>
            <input
              name="termo"
              placeholder="O que voce esta procurando?"
              className="min-w-0 flex-1 bg-transparent py-3.5 text-sm outline-none"
            />
            <button
              type="submit"
              className="m-1 rounded-full bg-brand-blue px-10 py-3 text-sm font-semibold text-white hover:bg-brand-blue-dark"
            >
              Buscar
            </button>
          </form>

          <div className="flex items-center gap-6 text-sm font-medium text-slate-700">
            <Link href="/favoritos" className="flex items-center gap-2 hover:text-brand-blue">
              <IconHeart size={20} />
              Favoritos
            </Link>
            <Link href="/admin/login" className="flex items-center gap-2 hover:text-brand-blue">
              <IconLogin2 size={20} />
              Entrar
            </Link>
          </div>
        </div>

        <nav className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-brand-line/70 pt-3">
          <div className="flex flex-wrap items-center gap-3 md:gap-6">
            {navItems.map(({ href, label, icon: Icon, key, caret }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative flex items-center gap-2 px-2 py-2 text-sm font-semibold text-slate-800 hover:text-brand-blue",
                  activeNav === key && "text-brand-blue",
                )}
              >
                <Icon size={18} />
                {label}
                {caret ? <IconChevronDown size={15} /> : null}
                {activeNav === key ? (
                  <span className="absolute bottom-[-11px] left-0 h-[3px] w-full rounded-full bg-brand-blue" />
                ) : null}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 text-brand-orange">
            <IconFlame size={18} />
            <span className="text-sm font-semibold">Ofertas do dia</span>
          </div>
        </nav>
      </div>
    </header>
  );
}
