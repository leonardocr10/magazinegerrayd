import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconBolt,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconCategory,
  IconChefHat,
  IconClockHour4,
  IconDiscount2,
  IconHome,
  IconShieldCheck,
  IconShoppingBag,
  IconTicket,
} from "@tabler/icons-react";

const whatsappGroupUrl = "https://achadinho.pro/magazinegerrayd";

const partnerStores = [
  {
    name: "Magalu",
    subtitle: "Magazine Luiza",
    description: "Ofertas selecionadas com os melhores preços.",
    logo: "magalu",
  },
  {
    name: "Shopee",
    subtitle: "Shopee",
    description: "Cupons e promoções imperdíveis todos os dias.",
    logo: "shopee",
  },
  {
    name: "Mercado Livre",
    subtitle: "Mercado Livre",
    description: "Achados com entrega rápida e segurança.",
    logo: "mercado-livre",
  },
  {
    name: "Amazon",
    subtitle: "Amazon",
    description: "Produtos populares e condições especiais.",
    logo: "amazon",
  },
];

const benefits = [
  {
    title: "Seleção objetiva",
    description:
      "Você bate o olho e entende o que vale a pena. Só o que realmente faz diferença.",
    icon: IconDiscount2,
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

function StoreLogo({ store }: { store: (typeof partnerStores)[number]["logo"] }) {
  if (store === "magalu") {
    return (
      <div className="text-center">
        <div className="text-[34px] font-black tracking-[-0.06em] text-[#1473ff]">
          magalu
        </div>
      </div>
    );
  }

  if (store === "shopee") {
    return (
      <div className="flex items-center justify-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[#ff5a1f] text-xl font-black text-white">
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
        width={240}
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
      <header className="border-b border-[#ebe8e1] bg-white/96 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-6 px-5 py-5 lg:px-8">
          <Link href="/" className="shrink-0">
            <Image
              src="/brand/gerrayd-logo-cropped.png"
              alt="Magazine Gerrayd"
              width={900}
              height={340}
              priority
              className="h-auto w-[180px] md:w-[220px]"
            />
          </Link>

          <nav className="hidden items-center gap-10 text-[16px] font-medium text-[#1f2937] lg:flex">
            <a href="#ofertas" className="hover:text-[#138a36]">
              Ofertas
            </a>
            <a href="#cupons" className="hover:text-[#138a36]">
              Cupons
            </a>
            <a href="#lojas" className="hover:text-[#138a36]">
              Lojas
            </a>
            <a href="#categorias" className="hover:text-[#138a36]">
              Categorias
            </a>
            <a href="#como-funciona" className="hover:text-[#138a36]">
              Como funciona
            </a>
          </nav>

          <Link
            href={whatsappGroupUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#16a34a] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_32px_rgba(22,163,74,0.18)] hover:bg-[#12813a]"
          >
            <IconBrandWhatsapp size={20} stroke={2.2} />
            Entrar no grupo
          </Link>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1280px] px-5 pb-10 pt-10 lg:px-8 lg:pb-16 lg:pt-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(460px,0.98fr)] lg:items-start">
          <div className="pt-3">
            <p className="text-[14px] font-extrabold uppercase tracking-[0.08em] text-[#15803d]">
              Ofertas e cupons todos os dias
            </p>

            <h1 className="mt-5 max-w-[640px] text-[50px] font-black leading-[0.98] tracking-[-0.06em] text-[#101828] md:text-[72px]">
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
                className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#16a34a] px-6 py-4 text-[16px] font-bold text-white shadow-[0_16px_34px_rgba(22,163,74,0.18)] hover:bg-[#12813a]"
              >
                <IconBrandWhatsapp size={22} stroke={2.2} />
                Receber ofertas agora
              </Link>

              <a
                href="#lojas"
                className="inline-flex items-center justify-center rounded-[14px] border border-[#d0d5dd] bg-white px-6 py-4 text-[16px] font-semibold text-[#101828] shadow-[0_8px_24px_rgba(16,24,40,0.05)] hover:border-[#bfc5cf]"
              >
                Ver lojas
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="flex items-start gap-3 text-[#667085]">
                <span className="mt-0.5 text-[#15803d]">
                  <IconTicket size={22} stroke={2.1} />
                </span>
                <span className="text-[15px] leading-6">
                  Ofertas e cupons verificados
                </span>
              </div>
              <div className="flex items-start gap-3 text-[#667085]">
                <span className="mt-0.5 text-[#15803d]">
                  <IconShieldCheck size={22} stroke={2.1} />
                </span>
                <span className="text-[15px] leading-6">
                  Lojas confiáveis e parceiras
                </span>
              </div>
              <div className="flex items-start gap-3 text-[#667085]">
                <span className="mt-0.5 text-[#15803d]">
                  <IconBolt size={22} stroke={2.1} />
                </span>
                <span className="text-[15px] leading-6">Novidades todos os dias</span>
              </div>
            </div>
          </div>

          <div
            id="categorias"
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2"
          >
            <article className="overflow-hidden rounded-[28px] border border-[#ebe8e1] bg-white shadow-[0_20px_40px_rgba(16,24,40,0.06)]">
              <div className="relative h-[250px]">
                <Image
                  src="/hero/sofa-sala.jpg"
                  alt="Sala com sofá"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#edf8f0] text-[#15803d]">
                  <IconHome size={22} stroke={2.1} />
                </div>
                <h2 className="mt-4 text-[28px] font-black tracking-[-0.04em] text-[#101828]">
                  Casa
                </h2>
                <p className="mt-2 text-[15px] leading-6 text-[#667085]">
                  Organização, decoração e muito mais.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[28px] border border-[#ebe8e1] bg-white shadow-[0_20px_40px_rgba(16,24,40,0.06)]">
              <div className="relative h-[250px]">
                <Image
                  src="/hero/cozinha-appliances.jpg"
                  alt="Cozinha com eletrodomésticos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#edf8f0] text-[#15803d]">
                  <IconChefHat size={22} stroke={2.1} />
                </div>
                <h2 className="mt-4 text-[28px] font-black tracking-[-0.04em] text-[#101828]">
                  Cozinha
                </h2>
                <p className="mt-2 text-[15px] leading-6 text-[#667085]">
                  Eletros, utensílios e praticidade.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-[28px] border border-[#ebe8e1] bg-white shadow-[0_20px_40px_rgba(16,24,40,0.06)]">
              <div className="relative h-[250px]">
                <Image
                  src="/hero/smart-tv-room.jpg"
                  alt="Tecnologia para casa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#edf8f0] text-[#15803d]">
                  <IconCategory size={22} stroke={2.1} />
                </div>
                <h2 className="mt-4 text-[28px] font-black tracking-[-0.04em] text-[#101828]">
                  Tecnologia
                </h2>
                <p className="mt-2 text-[15px] leading-6 text-[#667085]">
                  Eletrônicos, acessórios e inovação.
                </p>
              </div>
            </article>

            <article
              id="cupons"
              className="flex min-h-[354px] flex-col justify-between rounded-[28px] border border-[#ebe8e1] bg-white p-7 shadow-[0_20px_40px_rgba(16,24,40,0.06)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#edf8f0] text-[#15803d]">
                <IconDiscount2 size={22} stroke={2.1} />
              </div>
              <div className="mt-auto">
                <h2 className="text-[28px] font-black tracking-[-0.04em] text-[#101828]">
                  Cupons exclusivos
                </h2>
                <p className="mt-3 max-w-[250px] text-[15px] leading-6 text-[#667085]">
                  Descontos reais para você aproveitar agora.
                </p>
              </div>
              <div className="pointer-events-none mt-10 flex justify-end text-[#e5e7eb]">
                <IconTicket size={72} stroke={1.5} />
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="lojas" className="mx-auto w-full max-w-[1280px] px-5 pb-8 lg:px-8 lg:pb-14">
        <div className="rounded-[36px] border border-[#efede7] bg-white px-6 py-8 shadow-[0_18px_40px_rgba(16,24,40,0.04)] md:px-8 md:py-10">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[14px] font-extrabold uppercase tracking-[0.08em] text-[#15803d]">
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
                className="rounded-[24px] border border-[#ece9e2] bg-white px-6 py-7 text-center shadow-[0_18px_34px_rgba(16,24,40,0.04)]"
              >
                <div className="flex min-h-[60px] items-center justify-center">
                  <StoreLogo store={store.logo} />
                </div>
                <h3 className="mt-5 text-[24px] font-black tracking-[-0.04em] text-[#101828]">
                  {store.subtitle}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[#667085]">
                  {store.description}
                </p>
                <Link
                  href={whatsappGroupUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[#f3f7ef] px-6 py-3 text-[15px] font-bold text-[#2a6b38]"
                >
                  Ver ofertas
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-5 pb-8 lg:px-8 lg:pb-12">
        <p className="text-[14px] font-extrabold uppercase tracking-[0.08em] text-[#15803d]">
          Por que confiar?
        </p>
        <h2 className="mt-3 text-[34px] font-black tracking-[-0.05em] text-[#101828] md:text-[46px]">
          Benefícios que fazem a diferença
        </h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {benefits.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[24px] border border-[#ece9e2] bg-white p-6 shadow-[0_18px_34px_rgba(16,24,40,0.04)]"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#dfe8d6] bg-[#f7fbf4] text-[#15803d]">
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
        <p className="text-[14px] font-extrabold uppercase tracking-[0.08em] text-[#15803d]">
          Como funciona
        </p>
        <h2 className="mt-3 text-[34px] font-black tracking-[-0.05em] text-[#101828] md:text-[46px]">
          É simples aproveitar
        </h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {steps.map(({ number, title, description, icon: Icon }) => (
            <article
              key={number}
              className="relative rounded-[24px] border border-[#ece9e2] bg-white p-6 shadow-[0_18px_34px_rgba(16,24,40,0.04)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#edf8f0] text-sm font-black text-[#15803d]">
                  {number}
                </div>
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#dfe8d6] bg-[#f7fbf4] text-[#15803d]">
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
        <div className="overflow-hidden rounded-[36px] border border-[#ece9e2] bg-[linear-gradient(135deg,#fbfaf3_0%,#f6f5ee_48%,#f8f6ef_100%)] shadow-[0_18px_34px_rgba(16,24,40,0.04)]">
          <div className="grid gap-8 px-6 py-8 md:px-8 md:py-9 lg:grid-cols-[260px_minmax(0,1fr)_auto] lg:items-center lg:px-10">
            <div className="relative hidden h-[230px] lg:block">
              <div className="absolute bottom-0 left-6 h-[200px] w-[110px] rounded-[28px] border-[8px] border-[#0f1728] bg-white shadow-[0_20px_40px_rgba(16,24,40,0.10)]">
                <div className="mx-auto mt-3 h-2 w-14 rounded-full bg-[#d9dee7]" />
                <div className="px-3 pt-4">
                  <Image
                    src="/products/air-fryer.svg"
                    alt="Oferta do dia"
                    width={120}
                    height={120}
                    className="mx-auto h-auto w-[72px]"
                  />
                  <div className="mt-4 rounded-[14px] bg-[#f4f7fb] px-3 py-2 text-center text-[12px] font-bold text-[#0f1728]">
                    Oferta do dia
                  </div>
                  <div className="mt-3 text-center text-[12px] text-[#667085]">
                    Achadinhos e cupons
                  </div>
                </div>
              </div>
              <div className="absolute left-[128px] top-[44px] flex h-20 w-20 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-[0_18px_34px_rgba(34,197,94,0.24)]">
                <IconBrandWhatsapp size={44} stroke={1.9} />
              </div>
            </div>

            <div>
              <h2 className="max-w-[600px] text-[36px] font-black leading-[1.05] tracking-[-0.05em] text-[#101828] md:text-[52px]">
                Entre agora e receba ofertas que valem a pena.
              </h2>
              <p className="mt-4 max-w-[560px] text-[16px] leading-7 text-[#667085]">
                Participe do grupo oficial do Magazine Gerrayd no WhatsApp e
                economize todos os dias.
              </p>
            </div>

            <Link
              href={whatsappGroupUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#16a34a] px-6 py-4 text-[16px] font-bold text-white shadow-[0_16px_34px_rgba(22,163,74,0.18)] hover:bg-[#12813a]"
            >
              <IconBrandWhatsapp size={22} stroke={2.2} />
              Entrar no grupo agora
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#ece9e2] bg-white">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-5 py-10 md:grid-cols-[1.2fr_repeat(3,minmax(0,1fr))] lg:px-8">
          <div>
            <Image
              src="/brand/gerrayd-logo-cropped.png"
              alt="Magazine Gerrayd"
              width={900}
              height={340}
              className="h-auto w-[170px]"
            />
            <p className="mt-5 max-w-[280px] text-[15px] leading-7 text-[#667085]">
              Achadinhos, cupons e oportunidades das melhores lojas para você.
            </p>
          </div>

          <div>
            <h3 className="text-[16px] font-bold text-[#101828]">Navegação</h3>
            <ul className="mt-4 space-y-3 text-[15px] text-[#667085]">
              <li>
                <a href="#ofertas">Ofertas</a>
              </li>
              <li>
                <a href="#cupons">Cupons</a>
              </li>
              <li>
                <a href="#lojas">Lojas</a>
              </li>
              <li>
                <a href="#categorias">Categorias</a>
              </li>
              <li>
                <a href="#como-funciona">Como funciona</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-bold text-[#101828]">Institucional</h3>
            <ul className="mt-4 space-y-3 text-[15px] text-[#667085]">
              <li>Sobre nós</li>
              <li>Política de privacidade</li>
              <li>Termos de uso</li>
              <li>Fale conosco</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[16px] font-bold text-[#101828]">Siga a gente</h3>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e5e7eb] text-[#101828]"
              >
                <IconBrandInstagram size={22} stroke={2} />
              </a>
              <Link
                href={whatsappGroupUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e5e7eb] text-[#101828]"
              >
                <IconBrandWhatsapp size={22} stroke={2} />
              </Link>
            </div>
            <p className="mt-5 text-[15px] leading-7 text-[#667085]">
              © 2026 Magazine Gerrayd. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
