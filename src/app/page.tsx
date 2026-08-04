import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconBadge,
  IconBellRinging,
  IconBrandWhatsapp,
  IconClockBolt,
  IconCreditCard,
  IconGift,
  IconLockCheck,
  IconSearch,
  IconShieldCheck,
  IconSparkles,
  IconTruckDelivery,
} from "@tabler/icons-react";
import { PartnerCard } from "@/components/store/partner-card";

const whatsappGroupUrl =
  "https://achadinho.pro/magazinegerrayd";

const highlights = [
  "Ofertas selecionadas com leitura rapida",
  "Links para lojas conhecidas e confiaveis",
  "Grupo com avisos e oportunidades recorrentes",
];

const benefitCards = [
  {
    title: "Curadoria mais clara",
    text: "Voce nao perde tempo com excesso de informacao. A vitrine foca no que vale abrir e acompanhar.",
    icon: IconSearch,
  },
  {
    title: "Compra mais segura",
    text: "A comunicacao prioriza lojas conhecidas, leitura objetiva e orientacao para comprar com mais confianca.",
    icon: IconShieldCheck,
  },
  {
    title: "Alertas mais rapidos",
    text: "O grupo ajuda a acompanhar oportunidades, descontos e avisos de produtos que podem acabar rapido.",
    icon: IconBellRinging,
  },
];

const steps = [
  {
    title: "Entre no grupo",
    text: "Acesse o canal oficial para receber os avisos e acompanhar as oportunidades selecionadas.",
    icon: IconBrandWhatsapp,
  },
  {
    title: "Veja o destaque do dia",
    text: "As melhores oportunidades ficam mais faceis de identificar, com visual direto e leitura leve.",
    icon: IconSparkles,
  },
  {
    title: "Abra o parceiro",
    text: "Quando fizer sentido, voce segue para a loja parceira e finaliza a compra no ambiente oficial.",
    icon: IconLockCheck,
  },
];

const trustItems = [
  {
    title: "Lojas conhecidas",
    text: "Amazon, Shopee, Mercado Livre e Magalu aparecem como referencias visuais da proposta.",
    icon: IconBadge,
  },
  {
    title: "Leitura objetiva",
    text: "Layout pensado para o cliente entender a proposta em poucos segundos.",
    icon: IconClockBolt,
  },
  {
    title: "Economia e praticidade",
    text: "Foco em promocoes, cupons, frete, retirada e percepcao de valor antes da compra.",
    icon: IconTruckDelivery,
  },
];

const heroProducts = [
  {
    title: "Air Fryer Mondial",
    price: "R$ 299,90",
    badge: "-18%",
    image: "/products/air-fryer.svg",
    position:
      "left-[-10px] top-[26px] md:left-[-24px] md:top-[40px] lg:left-[-54px]",
    cardTone: "from-[#0d1e3e] to-[#122f63]",
  },
  {
    title: "Mop Flash Limp",
    price: "R$ 169,90",
    badge: "-15%",
    image: "/products/mop-flash.svg",
    position:
      "right-[-10px] top-[120px] md:right-[-28px] md:top-[148px] lg:right-[-54px]",
    cardTone: "from-[#0e213f] to-[#0f3d5d]",
  },
  {
    title: "Chapinha Philco",
    price: "R$ 119,90",
    badge: "-20%",
    image: "/products/chapinha.svg",
    position:
      "left-[16px] bottom-[18px] md:left-[22px] md:bottom-[30px] lg:left-[-6px]",
    cardTone: "from-[#101d37] to-[#3a2347]",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071227] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(31,120,255,0.18),transparent_30%),radial-gradient(circle_at_center_right,rgba(0,205,255,0.12),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,192,54,0.08),transparent_26%),linear-gradient(180deg,#071227_0%,#08152a_46%,#08111d_100%)]" />

      <div className="relative">
        <header className="border-b border-white/8">
          <div className="flex w-full items-center justify-between gap-4 px-5 py-5 md:px-8 xl:px-12 2xl:px-16">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/brand/logo-real.jpg"
                alt="Magazine Gerrayd"
                width={1079}
                height={1079}
                priority
                className="h-[72px] w-[72px] rounded-[18px] border border-white/10 object-cover shadow-[0_14px_30px_rgba(0,0,0,0.28)] md:h-[86px] md:w-[86px]"
              />
              <div className="hidden md:block">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7eb6ff]">
                  Magazine Gerrayd
                </div>
                <div className="mt-1 text-sm text-[#a8bddf]">
                  Ofertas selecionadas para comprar melhor
                </div>
              </div>
            </Link>

            <Link
              href={whatsappGroupUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#17d868_0%,#33e6b9_100%)] px-5 py-3 text-sm font-black uppercase tracking-[0.05em] text-[#051d10] shadow-[0_10px_30px_rgba(23,216,104,0.22)]"
            >
              <IconBrandWhatsapp size={20} stroke={2.3} />
              Entrar no grupo
            </Link>
          </div>
        </header>

        <section className="w-full px-5 pb-14 pt-8 md:px-8 md:pb-20 md:pt-12 xl:px-12 2xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(420px,0.88fr)] lg:items-center xl:gap-14">
            <div className="max-w-[820px]">
              <h1 className="section-title text-[40px] font-black leading-[0.98] tracking-[-0.06em] text-white md:text-[68px] xl:text-[78px]">
                Promocoes, cupons e
                <span className="block bg-[linear-gradient(90deg,#ffffff_0%,#8cc7ff_42%,#39deff_100%)] bg-clip-text text-transparent">
                  oportunidades em um so lugar
                </span>
              </h1>

              <p className="mt-5 max-w-[720px] text-[17px] leading-8 text-[#a8bddf] md:text-[19px] xl:text-[20px]">
                Uma pagina direta para apresentar o Magazine Gerrayd, destacar os
                parceiros certos e levar o visitante para o grupo oficial com mais
                clareza, confianca e conversao.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-[#214479] bg-[#0b1a34]/90 px-4 py-2 text-sm font-medium text-[#dce8ff]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={whatsappGroupUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-[18px] bg-[linear-gradient(90deg,#155dff_0%,#24bbff_100%)] px-7 py-4 text-[15px] font-black uppercase tracking-[0.05em] text-white shadow-[0_18px_40px_rgba(21,93,255,0.24)]"
                >
                  Receber ofertas agora
                  <IconArrowRight size={19} />
                </Link>

                <a
                  href="#parceiros"
                  className="inline-flex items-center justify-center rounded-[18px] border border-[#274b88] bg-[#0b1c38]/80 px-7 py-4 text-[15px] font-bold text-[#d7e4ff]"
                >
                  Ver parceiros
                </a>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3 xl:max-w-[920px]">
                <div className="rounded-[24px] border border-[#1a3663] bg-[#09182f]/88 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#12356a] text-[#ffcf48]">
                    <IconGift size={24} />
                  </div>
                  <div className="mt-4 text-lg font-black text-white">Ofertas relevantes</div>
                  <div className="mt-2 text-sm leading-7 text-[#a8bddf]">
                    Menos ruido e mais foco no que chama atencao de verdade.
                  </div>
                </div>
                <div className="rounded-[24px] border border-[#1a3663] bg-[#09182f]/88 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#12356a] text-[#ffcf48]">
                    <IconCreditCard size={24} />
                  </div>
                  <div className="mt-4 text-lg font-black text-white">Compra orientada</div>
                  <div className="mt-2 text-sm leading-7 text-[#a8bddf]">
                    Comunicacao feita para reduzir duvida e facilitar a decisao.
                  </div>
                </div>
                <div className="rounded-[24px] border border-[#1a3663] bg-[#09182f]/88 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#12356a] text-[#ffcf48]">
                    <IconLockCheck size={24} />
                  </div>
                  <div className="mt-4 text-lg font-black text-white">Parceiros fortes</div>
                  <div className="mt-2 text-sm leading-7 text-[#a8bddf]">
                    Visual alinhado com marketplaces conhecidos pelo publico.
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[620px]">
              <div className="absolute left-10 top-10 h-44 w-44 rounded-full bg-[#1585ff]/18 blur-3xl" />
              <div className="absolute bottom-8 right-10 h-40 w-40 rounded-full bg-[#2be1ff]/14 blur-3xl" />

              <div className="relative overflow-hidden rounded-[36px] border border-[#274f92] bg-[radial-gradient(circle_at_top,rgba(47,140,255,0.18),transparent_28%),linear-gradient(145deg,#0b2451_0%,#0a1d3f_58%,#09162d_100%)] px-6 pt-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:px-8 md:pt-8 xl:min-h-[620px]">
                <div className="absolute left-0 top-0 h-24 w-24 rounded-br-[40px] bg-[linear-gradient(180deg,rgba(255,207,72,0.34),rgba(255,207,72,0.02))]" />
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-[18%] top-[14%] h-28 w-28 rounded-full border border-white/8 bg-white/4 blur-[2px]" />
                  <div className="absolute right-[14%] top-[8%] h-36 w-36 rounded-full border border-[#66bfff]/10 bg-[#66bfff]/6 blur-[2px]" />
                  <div className="absolute bottom-[10%] right-[12%] h-24 w-24 rounded-full border border-[#ffcf48]/10 bg-[#ffcf48]/6 blur-[2px]" />
                  <Image
                    src="/products/air-fryer.svg"
                    alt=""
                    width={190}
                    height={190}
                    aria-hidden="true"
                    className="absolute left-[2%] top-[8%] hidden rotate-[-12deg] opacity-[0.12] md:block"
                  />
                  <Image
                    src="/products/mop-flash.svg"
                    alt=""
                    width={210}
                    height={210}
                    aria-hidden="true"
                    className="absolute right-[4%] top-[30%] hidden rotate-[10deg] opacity-[0.1] md:block"
                  />
                  <Image
                    src="/products/chapinha.svg"
                    alt=""
                    width={170}
                    height={170}
                    aria-hidden="true"
                    className="absolute bottom-[8%] left-[10%] hidden rotate-[-18deg] opacity-[0.08] md:block"
                  />
                </div>
                <Image
                  src="/brand/gerrayd-character.png"
                  alt="Personagem do Magazine Gerrayd"
                  width={1024}
                  height={1536}
                  priority
                  className="relative z-10 mx-auto h-auto w-full max-w-[400px] object-contain object-bottom drop-shadow-[0_22px_42px_rgba(0,0,0,0.34)] xl:max-w-[460px]"
                />
              </div>

              {heroProducts.map((product) => (
                <div
                  key={product.title}
                  className={`absolute z-20 hidden w-[178px] rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,18,39,0.94)_0%,rgba(9,24,49,0.94)_100%)] p-3 shadow-[0_16px_40px_rgba(0,0,0,0.28)] backdrop-blur md:block ${product.position}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="rounded-full bg-[#ff7a1a] px-2.5 py-1 text-[10px] font-black text-white">
                      {product.badge}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9bc1ff]">
                      Oferta
                    </span>
                  </div>
                  <div
                    className={`mt-3 rounded-[18px] bg-gradient-to-br ${product.cardTone} p-3`}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={120}
                      height={120}
                      className="mx-auto h-[88px] w-auto object-contain"
                    />
                  </div>
                  <div className="mt-3 text-sm font-bold text-white">{product.title}</div>
                  <div className="mt-1 text-base font-black text-[#ffcf48]">{product.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full px-5 pb-8 md:px-8 md:pb-12 xl:px-12 2xl:px-16">
          <div className="grid gap-4 lg:grid-cols-3">
            {benefitCards.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[28px] border border-[#18335f] bg-[linear-gradient(180deg,rgba(9,23,48,0.94)_0%,rgba(8,18,35,0.98)_100%)] p-6 shadow-[0_14px_34px_rgba(0,0,0,0.16)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#1657da_0%,#103f9f_100%)] text-[#ffcf48] shadow-[0_10px_24px_rgba(22,87,218,0.2)]">
                  <Icon size={26} stroke={2.1} />
                </div>
                <h2 className="mt-5 text-[24px] font-black text-white">{title}</h2>
                <p className="mt-3 text-[15px] leading-7 text-[#a8bddf]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="parceiros"
          className="w-full px-5 pb-8 pt-4 md:px-8 md:pb-14 xl:px-12 2xl:px-16"
        >
          <div className="mb-6 max-w-[760px]">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#37deff]">
              Parceiros visuais
            </p>
            <h2 className="section-title mt-2 text-[32px] font-black tracking-[-0.04em] text-white md:text-[46px]">
              A pagina comunica o projeto com marcas conhecidas pelo publico
            </h2>
            <p className="mt-4 text-[16px] leading-8 text-[#a8bddf]">
              A proposta da landing e apresentar o Magazine Gerrayd com cara de marca
              forte, visual profissional e CTA direto para o grupo.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <PartnerCard partner="magalu" subtitle="Ofertas selecionadas" />
            <PartnerCard partner="shopee" subtitle="Cupons e promocoes" />
            <PartnerCard partner="mercado-livre" subtitle="Achados com entrega rapida" />
            <PartnerCard partner="amazon" subtitle="Produtos populares e confiaveis" />
          </div>
        </section>

        <section className="w-full px-5 pb-8 md:px-8 md:pb-14 xl:px-12 2xl:px-16">
          <div className="rounded-[34px] border border-[#1d3f74] bg-[linear-gradient(135deg,#0b1d3c_0%,#0a1730_100%)] px-6 py-8 md:px-8 md:py-10">
            <div className="max-w-[740px]">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffcf48]">
                Como funciona
              </p>
              <h2 className="section-title mt-3 text-[32px] font-black tracking-[-0.04em] text-white md:text-[44px]">
                Um fluxo simples para levar o visitante da descoberta ate a acao
              </h2>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {steps.map(({ title, text, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-[26px] border border-[#234575] bg-[#0a1a34]/90 p-5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#12356a] text-[#6fd2ff]">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-4 text-[22px] font-black text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#a8bddf]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full px-5 pb-8 md:px-8 md:pb-14 xl:px-12 2xl:px-16">
          <div className="grid gap-4 lg:grid-cols-3">
            {trustItems.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[26px] border border-[#18335f] bg-[#09172c]/90 p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#12356a] text-[#ffcf48]">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-black text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#a8bddf]">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="w-full px-5 pb-20 md:px-8 xl:px-12 2xl:px-16">
          <div className="overflow-hidden rounded-[36px] border border-[#234b8f] bg-[linear-gradient(135deg,#0f2b5f_0%,#0b1830_44%,#081321_100%)] px-6 py-10 shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:px-10 md:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-[720px]">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffcf48]">
                  CTA principal
                </p>
                <h2 className="section-title mt-4 text-[36px] font-black leading-[1.04] tracking-[-0.05em] text-white md:text-[54px]">
                  Coloque o Magazine Gerrayd no centro da sua captacao.
                </h2>
                <p className="mt-4 text-[16px] leading-8 text-[#a8bddf]">
                  Uma landing page pensada para apresentar a marca com mais valor
                  percebido e direcionar o publico para o grupo oficial.
                </p>
              </div>

              <Link
                href={whatsappGroupUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-[18px] bg-[linear-gradient(90deg,#17d868_0%,#33e6b9_100%)] px-7 py-5 text-[15px] font-black uppercase tracking-[0.05em] text-[#051d10] shadow-[0_16px_34px_rgba(23,216,104,0.2)]"
              >
                <IconBrandWhatsapp size={22} stroke={2.2} />
                Entrar no grupo agora
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
