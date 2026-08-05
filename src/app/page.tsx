import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconBolt,
  IconBrandWhatsapp,
  IconCategory,
  IconChefHat,
  IconClockHour4,
  IconDiscount2,
  IconHome,
  IconShieldCheck,
  IconShoppingBag,
  IconTargetArrow,
  IconTicket,
} from "@tabler/icons-react";

const whatsappGroupUrl = "https://achadinho.pro/magazinegerrayd";

const navItems = [
  { href: "#ofertas", label: "Ofertas" },
  { href: "#cupons", label: "Cupons" },
  { href: "#lojas", label: "Lojas" },
  { href: "#categorias", label: "Categorias" },
  { href: "#como-funciona", label: "Como funciona" },
];

const partnerStores = [
  {
    name: "Magazine Luiza",
    description: "Ofertas selecionadas com os melhores preços.",
    logo: "magalu",
    url: "https://www.magazinevoce.com.br/magazinegerrayd/",
  },
  {
    name: "Shopee",
    description: "Cupons e promoções imperdíveis todos os dias.",
    logo: "shopee",
    url: "https://s.shopee.com.br/5q78eQxfHl",
  },
  {
    name: "Mercado Livre",
    description: "Achados com entrega rápida e segurança.",
    logo: "mercado-livre",
    url: "https://www.mercadolivre.com.br/",
  },
  {
    name: "Amazon",
    description: "Produtos populares e condições especiais.",
    logo: "amazon",
    url: "https://link.amazon/B06IQ2LmW",
  },
];

const benefits = [
  {
    title: "Seleção objetiva",
    description:
      "Você bate o olho e entende o que vale a pena. Só o que realmente faz diferença.",
    icon: IconTargetArrow,
  },
  {
    title: "Mais confiança",
    description:
      "Trabalhamos com lojas conhecidas e cupons verificados para compras seguras.",
    icon: IconShieldCheck,
  },
  {
    title: "Mais agilidade",
    description:
      "Entrou no grupo, viu a oferta e aproveitou. Simples, rápido e eficiente.",
    icon: IconClockHour4,
  },
];

const steps = [
  {
    number: "1",
    title: "Entre no grupo",
    description:
      "Acompanhe avisos, cupons e ofertas atualizadas todos os dias.",
    icon: IconBrandWhatsapp,
  },
  {
    number: "2",
    title: "Veja os destaques",
    description:
      "Ofertas selecionadas de casa, cozinha, tecnologia e outras categorias.",
    icon: IconTicket,
  },
  {
    number: "3",
    title: "Aproveite quando fizer sentido",
    description:
      "Abra a loja parceira e finalize sua compra com mais praticidade.",
    icon: IconShoppingBag,
  },
];

const quickBenefits = [
  {
    text: "Ofertas e cupons verificados",
    icon: IconDiscount2,
  },
  {
    text: "Lojas confiáveis e parceiras",
    icon: IconShieldCheck,
  },
  {
    text: "Novidades todos os dias",
    icon: IconBolt,
  },
];

function HeaderBrand({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className={`block shrink-0 overflow-visible ${compact ? "w-[170px]" : "w-[190px] md:w-[225px]"}`}
    >
      <Image
        src="/brand/gerrayd-logo-cropped.png"
        alt="Magazine Gerrayd"
        width={900}
        height={340}
        priority={!compact}
        className="h-auto w-full max-w-none object-contain"
      />
    </Link>
  );
}

function StoreLogo({ store }: { store: (typeof partnerStores)[number]["logo"] }) {
  if (store === "magalu") {
    return (
      <div className="text-center">
        <div className="text-[34px] font-black tracking-[-0.06em] text-[#1877ff]">
          magalu
        </div>
      </div>
    );
  }

  if (store === "shopee") {
    return (
      <div className="flex items-center justify-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#ff5a1f] text-xl font-black text-white shadow-[0_6px_18px_rgba(255,90,31,0.12)]">
          S
        </span>
        <span className="text-[30px] font-black tracking-[-0.05em] text-[#ff5a1f]">
          Shopee
        </span>
      </div>
    );
  }

  if (store === "mercado-livre") {
    return (
      <Image
        src="/partners/mercado-livre-logo.png"
        alt="Mercado Livre"
        width={250}
        height={70}
        className="h-14 w-auto"
      />
    );
  }

  return (
    <Image
      src="/partners/amazon-logo.png"
      alt="Amazon"
      width={210}
      height={70}
      className="h-14 w-auto"
    />
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#101828]">
      <header className="sticky top-0 z-30 border-b border-[#e7ebf3] bg-white/95 shadow-[0_1px_0_rgba(16,24,40,0.03)] backdrop-blur">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-6 px-5 py-5 lg:px-8">
          <HeaderBrand />

          <nav className="hidden items-center gap-9 text-[16px] font-medium text-[#344054] lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-[#1769e0]">
                {item.label}
              </a>
            ))}
          </nav>

          <Link
            href={whatsappGroupUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-[16px] bg-[#087bff] px-5 py-3 text-sm font-bold text-white shadow-[0_16px_34px_rgba(8,123,255,0.22)] hover:bg-[#1769e0]"
          >
            <IconBrandWhatsapp size={20} stroke={2.2} />
            Entrar no grupo
          </Link>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1280px] px-5 pb-12 pt-10 lg:px-8 lg:pb-18 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(460px,0.95fr)] lg:items-start">
          <div className="pt-4">
            <p className="text-[14px] font-extrabold uppercase tracking-[0.08em] text-[#1769e0]">
              Ofertas e cupons todos os dias
            </p>

            <h1 className="mt-5 max-w-[660px] text-[48px] font-black leading-[0.98] tracking-[-0.06em] text-[#101828] md:text-[72px]">
              Achadinhos para casa, cozinha e tecnologia em um só lugar.
            </h1>

            <p className="mt-7 max-w-[620px] text-[18px] leading-8 text-[#667085]">
              Selecionamos as melhores ofertas, cupons e oportunidades das lojas
              mais confiáveis para você economizar com praticidade todos os dias.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={whatsappGroupUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-[16px] bg-[#087bff] px-6 py-4 text-[16px] font-bold text-white shadow-[0_16px_34px_rgba(8,123,255,0.2)] hover:bg-[#1769e0]"
              >
                <IconBrandWhatsapp size={22} stroke={2.2} />
                Receber ofertas agora
              </Link>

              <a
                href="#lojas"
                className="inline-flex items-center justify-center rounded-[16px] border border-[#d0d5dd] bg-white px-6 py-4 text-[16px] font-semibold text-[#101828] shadow-[0_8px_22px_rgba(16,24,40,0.04)] hover:border-[#b7c4db]"
              >
                Ver lojas
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {quickBenefits.map(({ text, icon: Icon }) => (
                <div key={text} className="flex items-start gap-3 text-[#667085]">
                  <span className="mt-0.5 text-[#1769e0]">
                    <Icon size={22} stroke={2.1} />
                  </span>
                  <span className="text-[15px] leading-6">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            id="categorias"
            className="grid gap-4 sm:grid-cols-2"
          >
            <article className="overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-white shadow-[0_22px_46px_rgba(16,24,40,0.06)]">
              <div className="relative h-[260px]">
                <Image
                  src="/hero/sofa-sala.jpg"
                  alt="Sala moderna"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="m-4 -mt-16 rounded-[22px] bg-white/96 p-5 shadow-[0_10px_24px_rgba(16,24,40,0.08)] backdrop-blur">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf3ff] text-[#1769e0]">
                  <IconHome size={22} stroke={2.1} />
                </div>
                <h2 className="mt-4 text-[28px] font-black tracking-[-0.04em] text-[#101828]">
                  Casa
                </h2>
                <p className="mt-2 text-[15px] leading-6 text-[#667085]">
                  Organização, decoração e muito mais
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-white shadow-[0_22px_46px_rgba(16,24,40,0.06)]">
              <div className="relative h-[260px]">
                <Image
                  src="/hero/cozinha-appliances.jpg"
                  alt="Cozinha moderna"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="m-4 -mt-16 rounded-[22px] bg-white/96 p-5 shadow-[0_10px_24px_rgba(16,24,40,0.08)] backdrop-blur">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf3ff] text-[#1769e0]">
                  <IconChefHat size={22} stroke={2.1} />
                </div>
                <h2 className="mt-4 text-[28px] font-black tracking-[-0.04em] text-[#101828]">
                  Cozinha
                </h2>
                <p className="mt-2 text-[15px] leading-6 text-[#667085]">
                  Eletros, utensílios e praticidade
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-white shadow-[0_22px_46px_rgba(16,24,40,0.06)]">
              <div className="relative h-[260px]">
                <Image
                  src="/hero/smart-tv-room.jpg"
                  alt="Notebook, fones e smartphone"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="m-4 -mt-16 rounded-[22px] bg-white/96 p-5 shadow-[0_10px_24px_rgba(16,24,40,0.08)] backdrop-blur">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf3ff] text-[#1769e0]">
                  <IconCategory size={22} stroke={2.1} />
                </div>
                <h2 className="mt-4 text-[28px] font-black tracking-[-0.04em] text-[#101828]">
                  Tecnologia
                </h2>
                <p className="mt-2 text-[15px] leading-6 text-[#667085]">
                  Eletrônicos, acessórios e inovação
                </p>
              </div>
            </article>

            <article
              id="cupons"
              className="relative flex min-h-[374px] flex-col justify-between overflow-hidden rounded-[28px] border border-[#e5e7eb] bg-[linear-gradient(180deg,#ffffff_0%,#f4f8ff_100%)] p-7 shadow-[0_22px_46px_rgba(16,24,40,0.06)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#eaf3ff] text-[#1769e0]">
                <IconDiscount2 size={22} stroke={2.1} />
              </div>
              <div className="relative z-10 mt-auto">
                <h2 className="text-[28px] font-black tracking-[-0.04em] text-[#101828]">
                  Cupons exclusivos
                </h2>
                <p className="mt-3 max-w-[250px] text-[15px] leading-6 text-[#667085]">
                  Descontos reais para você aproveitar agora
                </p>
              </div>
              <div className="pointer-events-none absolute bottom-4 right-3 text-[#d8e6fb]">
                <IconTicket size={90} stroke={1.5} />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="lojas" className="mx-auto w-full max-w-[1280px] px-5 pb-8 lg:px-8 lg:pb-14">
        <div className="rounded-[36px] border border-[#e7ebf3] bg-white px-6 py-8 shadow-[0_20px_40px_rgba(16,24,40,0.04)] md:px-8 md:py-10">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[14px] font-extrabold uppercase tracking-[0.08em] text-[#1769e0]">
                Lojas parceiras
              </p>
              <h2 className="mt-3 text-[34px] font-black tracking-[-0.05em] text-[#101828] md:text-[46px]">
                Ofertas das melhores lojas para você
              </h2>
            </div>
            <a
              href="#ofertas"
              className="inline-flex items-center gap-2 text-[16px] font-semibold text-[#101828]"
            >
              Ver todas as lojas
              <IconArrowRight size={18} stroke={2.2} />
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {partnerStores.map((store) => (
              <article
                key={store.name}
                className="rounded-[24px] border border-[#e7ebf3] bg-white px-6 py-7 text-center shadow-[0_14px_28px_rgba(16,24,40,0.04)]"
              >
                <Link
                  href={store.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <div className="flex min-h-[62px] items-center justify-center">
                    <StoreLogo store={store.logo} />
                  </div>
                  <h3 className="mt-5 text-[24px] font-black tracking-[-0.04em] text-[#101828]">
                    {store.name}
                  </h3>
                </Link>
                <p className="mt-3 text-[15px] leading-7 text-[#667085]">
                  {store.description}
                </p>
                <Link
                  href={store.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[#eaf3ff] px-6 py-3 text-[15px] font-bold text-[#1769e0]"
                >
                  Ver ofertas
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-5 pb-8 lg:px-8 lg:pb-12">
        <p className="text-[14px] font-extrabold uppercase tracking-[0.08em] text-[#1769e0]">
          Por que confiar?
        </p>
        <h2 className="mt-3 text-[34px] font-black tracking-[-0.05em] text-[#101828] md:text-[46px]">
          Benefícios que fazem a diferença
        </h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {benefits.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[24px] border border-[#e7ebf3] bg-white p-6 shadow-[0_14px_28px_rgba(16,24,40,0.04)]"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#d9e7ff] bg-[#f5f9ff] text-[#1769e0]">
                <Icon size={28} stroke={2} />
              </div>
              <h3 className="mt-5 text-[24px] font-black tracking-[-0.04em] text-[#101828]">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-[#667085]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="como-funciona"
        className="mx-auto w-full max-w-[1280px] px-5 pb-8 lg:px-8 lg:pb-14"
      >
        <p className="text-[14px] font-extrabold uppercase tracking-[0.08em] text-[#1769e0]">
          Como funciona
        </p>
        <h2 className="mt-3 text-[34px] font-black tracking-[-0.05em] text-[#101828] md:text-[46px]">
          É simples aproveitar
        </h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {steps.map(({ number, title, description, icon: Icon }, index) => (
            <article
              key={number}
              className="relative rounded-[24px] border border-[#e7ebf3] bg-white p-6 shadow-[0_14px_28px_rgba(16,24,40,0.04)]"
            >
              {index < steps.length - 1 ? (
                <div className="pointer-events-none absolute right-[-22px] top-1/2 hidden h-px w-10 -translate-y-1/2 bg-[#d8e6fb] lg:block" />
              ) : null}
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf3ff] text-sm font-black text-[#1769e0]">
                  {number}
                </div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#d9e7ff] bg-[#f5f9ff] text-[#1769e0]">
                  <Icon size={28} stroke={2} />
                </div>
              </div>
              <h3 className="mt-5 text-[24px] font-black tracking-[-0.04em] text-[#101828]">
                {title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-[#667085]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="ofertas" className="mx-auto w-full max-w-[1280px] px-5 pb-12 lg:px-8 lg:pb-16">
        <div className="overflow-hidden rounded-[36px] border border-[#e7ebf3] bg-[linear-gradient(135deg,#ffffff_0%,#f6faff_52%,#eef6ff_100%)] shadow-[0_18px_34px_rgba(16,24,40,0.04)]">
          <div className="grid gap-10 px-6 py-8 md:px-8 md:py-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:items-center lg:px-10">
            <div className="relative hidden h-[260px] lg:block">
              <div className="absolute left-6 top-3 h-10 w-10 rounded-full bg-[#dcecff]" />
              <div className="absolute bottom-6 right-10 h-14 w-14 rounded-full bg-[#eff6ff]" />

              <div className="absolute bottom-0 left-4 w-[170px] rounded-[38px] bg-[#101828] p-[8px] shadow-[0_24px_44px_rgba(16,24,40,0.16)]">
                <div className="overflow-hidden rounded-[30px] bg-white">
                  <div className="flex justify-center py-3">
                    <div className="h-2.5 w-16 rounded-full bg-[#d9dee7]" />
                  </div>
                  <div className="px-4 pb-4">
                    <div className="rounded-[18px] bg-[#f3f8ff] px-3 py-2 text-center text-[12px] font-bold text-[#1769e0]">
                      Oferta do dia
                    </div>
                    <div className="mt-4 rounded-[22px] bg-[#f8fafc] px-4 py-5">
                      <Image
                        src="/products/air-fryer.svg"
                        alt="Produto em promoção"
                        width={120}
                        height={120}
                        className="mx-auto h-auto w-[70px]"
                      />
                    </div>
                    <div className="mt-4 rounded-[16px] bg-[#f8fbff] px-3 py-2.5 text-center text-[12px] font-semibold leading-5 text-[#475467]">
                      Achadinhos e cupons
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-[132px] top-[42px] flex h-20 w-20 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-[0_20px_38px_rgba(34,197,94,0.20)]">
                <IconBrandWhatsapp size={42} stroke={2} />
              </div>
            </div>

            <div className="relative">
              <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
                <div className="max-w-[640px]">
                  <h2 className="text-[34px] font-black leading-[1.04] tracking-[-0.05em] text-[#101828] md:text-[52px]">
                    Entre agora e receba ofertas que valem a pena.
                  </h2>
                  <p className="mt-4 max-w-[560px] text-[16px] leading-8 text-[#667085]">
                    Participe do grupo oficial do Magazine Gerrayd no WhatsApp e
                    economize todos os dias.
                  </p>
                </div>

                <div className="relative shrink-0">
                  <Link
                    href={whatsappGroupUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 inline-flex items-center justify-center gap-2 rounded-[16px] bg-[#087bff] px-6 py-4 text-[16px] font-bold text-white shadow-[0_16px_34px_rgba(8,123,255,0.2)] hover:bg-[#1769e0]"
                  >
                    <IconBrandWhatsapp size={22} stroke={2.2} />
                    Entrar no grupo agora
                  </Link>
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-[-46px] right-[-28px] hidden xl:block">
                <div className="absolute bottom-14 left-14 h-36 w-36 rounded-full bg-[#dcebff] blur-3xl" />
                <Image
                  src="/brand/gerrayd-character.png"
                  alt="Personagem do Magazine Gerrayd"
                  width={1024}
                  height={1536}
                  className="relative z-10 h-[238px] w-auto object-contain drop-shadow-[0_16px_28px_rgba(16,24,40,0.14)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
