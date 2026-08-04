import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconBrandWhatsapp,
  IconCheck,
  IconClockBolt,
  IconDiscount2,
  IconShieldCheck,
} from "@tabler/icons-react";
import { PartnerCard } from "@/components/store/partner-card";

const whatsappGroupUrl = "https://achadinho.pro/magazinegerrayd";

const quickPoints = [
  "Ofertas e cupons de lojas conhecidas",
  "Achadinhos para casa, cozinha e tecnologia",
  "Avisos frequentes para voce acompanhar com praticidade",
];

const showcaseProducts = [
  {
    title: "Eletros para cozinha",
    subtitle: "Geladeira, fogao e praticidade no dia a dia",
    image: "/hero/cozinha-appliances.jpg",
    accent: "bg-[#0f346f]",
  },
  {
    title: "Smart TV para sala",
    subtitle: "Opcoes para entretenimento e conforto",
    image: "/hero/smart-tv-room.jpg",
    accent: "bg-[#123a5d]",
  },
  {
    title: "Sofa para sala",
    subtitle: "Mais conforto para o seu ambiente",
    image: "/hero/sofa-sala.jpg",
    accent: "bg-[#3c284a]",
  },
];

const benefits = [
  {
    title: "Selecao mais objetiva",
    text: "Voce bate o olho e entende com mais facilidade o que vale acompanhar.",
    icon: IconDiscount2,
  },
  {
    title: "Mais confianca",
    text: "As ofertas aparecem com foco em lojas conhecidas e oportunidades mais claras.",
    icon: IconShieldCheck,
  },
  {
    title: "Mais agilidade",
    text: "Entre no grupo oficial e acompanhe novidades sem precisar procurar em varios lugares.",
    icon: IconClockBolt,
  },
];

const steps = [
  {
    number: "01",
    title: "Entre no grupo",
    text: "Acompanhe avisos, cupons e ofertas atualizadas.",
  },
  {
    number: "02",
    title: "Veja os destaques",
    text: "Compare oportunidades para casa, cozinha e tecnologia.",
  },
  {
    number: "03",
    title: "Aproveite quando fizer sentido",
    text: "Abra a loja parceira e finalize sua compra com mais praticidade.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071222] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(35,117,255,0.18),transparent_24%),radial-gradient(circle_at_top_right,rgba(0,204,255,0.10),transparent_18%),linear-gradient(180deg,#071222_0%,#08172c_54%,#09111d_100%)]" />

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
                className="h-[70px] w-[70px] rounded-[18px] border border-white/10 object-cover shadow-[0_14px_30px_rgba(0,0,0,0.28)] md:h-[82px] md:w-[82px]"
              />
              <div className="hidden md:block">
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#8ebdff]">
                  Magazine Gerrayd
                </div>
                <div className="mt-1 text-sm text-[#9fb4d3]">
                  Achadinhos, cupons e oportunidades
                </div>
              </div>
            </Link>

            <Link
              href={whatsappGroupUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#18d96a_0%,#37e5bc_100%)] px-5 py-3 text-sm font-black uppercase tracking-[0.05em] text-[#051d10] shadow-[0_10px_28px_rgba(23,216,104,0.18)]"
            >
              <IconBrandWhatsapp size={20} stroke={2.2} />
              Entrar no grupo
            </Link>
          </div>
        </header>

        <section className="w-full px-5 pb-14 pt-8 md:px-8 md:pb-18 md:pt-12 xl:px-12 2xl:px-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(430px,0.96fr)] lg:items-center xl:gap-16">
            <div className="max-w-[760px]">
              <div className="inline-flex items-center rounded-full border border-[#1e4682] bg-[#0a1a34] px-4 py-2 text-sm font-semibold text-[#9cc4ff]">
                Atualizado com ofertas e cupons
              </div>

              <h1 className="section-title mt-6 text-[42px] font-black leading-[0.98] tracking-[-0.06em] text-white md:text-[66px] xl:text-[78px]">
                Achadinhos para casa,
                <span className="block bg-[linear-gradient(90deg,#ffffff_0%,#8fc8ff_44%,#43deff_100%)] bg-clip-text text-transparent">
                  cozinha e tecnologia em um so lugar
                </span>
              </h1>

              <p className="mt-5 max-w-[690px] text-[17px] leading-8 text-[#a9bcda] md:text-[19px] xl:text-[20px]">
                Acompanhe ofertas, cupons e oportunidades de lojas conhecidas para
                economizar com mais praticidade no dia a dia.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={whatsappGroupUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-[18px] bg-[linear-gradient(90deg,#1661ff_0%,#2abaff_100%)] px-7 py-4 text-[15px] font-black uppercase tracking-[0.05em] text-white shadow-[0_18px_36px_rgba(21,93,255,0.20)]"
                >
                  Receber ofertas agora
                  <IconArrowRight size={19} />
                </Link>

                <a
                  href="#parceiros"
                  className="inline-flex items-center justify-center rounded-[18px] border border-[#24457a] bg-white/5 px-7 py-4 text-[15px] font-bold text-[#d8e6ff]"
                >
                  Ver lojas
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-1 lg:max-w-[680px]">
                {quickPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[18px] border border-white/8 bg-white/4 px-4 py-3 text-sm text-[#d8e5fb]"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#12356a] text-[#8fc8ff]">
                      <IconCheck size={14} stroke={2.6} />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-12 h-40 w-40 rounded-full bg-[#1c6dff]/16 blur-3xl" />
              <div className="absolute bottom-12 right-8 h-36 w-36 rounded-full bg-[#27d4ff]/12 blur-3xl" />

              <div className="overflow-hidden rounded-[36px] border border-[#264a82] bg-[linear-gradient(145deg,#0b2147_0%,#0a1731_62%,#09121f_100%)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)] md:p-6">
                <div className="grid gap-5 xl:grid-cols-[0.88fr_1.12fr]">
                  <div className="grid gap-4">
                    {showcaseProducts.map((product) => (
                      <article
                        key={product.title}
                        className="overflow-hidden rounded-[24px] border border-white/8 bg-white/5"
                      >
                        <div className="relative h-[170px] overflow-hidden">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,15,31,0.05)_0%,rgba(6,15,31,0.62)_100%)]" />
                          <div className="absolute left-3 top-3 rounded-full bg-[#ff7a1a] px-2.5 py-1 text-[10px] font-black uppercase text-white">
                            Destaque
                          </div>
                        </div>
                        <div className="p-4">
                          <div className={`inline-flex rounded-full ${product.accent} px-3 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-white`}>
                            Oferta
                          </div>
                          <h2 className="mt-3 text-[18px] font-black text-white">{product.title}</h2>
                          <p className="mt-2 text-sm leading-6 text-[#a9bcda]">{product.subtitle}</p>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(52,143,255,0.18),transparent_28%),linear-gradient(180deg,#0d2550_0%,#0a1730_100%)] px-5 pt-5">
                    <div className="absolute left-0 top-0 h-24 w-24 rounded-br-[36px] bg-[linear-gradient(180deg,rgba(255,207,72,0.32),rgba(255,207,72,0.02))]" />
                    <div className="relative z-10 max-w-[280px]">
                      <div className="rounded-full border border-[#305ea0] bg-[#0d2347]/90 px-4 py-2 text-sm font-semibold text-[#9ec7ff]">
                        Achados todos os dias
                      </div>
                      <h2 className="mt-5 text-[30px] font-black leading-tight text-white md:text-[38px]">
                        Mais praticidade para encontrar oportunidades em lojas conhecidas
                      </h2>
                      <p className="mt-4 text-sm leading-7 text-[#a9bcda] md:text-[15px]">
                        Acompanhe novidades para sua casa, sua rotina e seu bolso com mais clareza.
                      </p>
                    </div>
                    <Image
                      src="/brand/gerrayd-character.png"
                      alt="Personagem do Magazine Gerrayd"
                      width={1024}
                      height={1536}
                      priority
                      className="relative z-10 ml-auto mt-6 h-auto w-full max-w-[360px] object-contain object-bottom drop-shadow-[0_20px_38px_rgba(0,0,0,0.34)]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="parceiros"
          className="w-full px-5 pb-10 md:px-8 md:pb-14 xl:px-12 2xl:px-16"
        >
          <div className="rounded-[30px] border border-white/8 bg-white/[0.04] p-5 md:p-6">
            <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div className="max-w-[720px]">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#43deff]">
                  Lojas em destaque
                </p>
                <h2 className="section-title mt-2 text-[28px] font-black tracking-[-0.04em] text-white md:text-[40px]">
                  Acompanhe oportunidades de lojas conhecidas com mais confianca
                </h2>
              </div>
              <div className="text-sm text-[#9fb4d3]">
                Amazon, Shopee, Mercado Livre e Magalu
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <PartnerCard partner="magalu" subtitle="Ofertas selecionadas" />
              <PartnerCard partner="shopee" subtitle="Cupons e promocoes" />
              <PartnerCard partner="mercado-livre" subtitle="Achados com entrega rapida" />
              <PartnerCard partner="amazon" subtitle="Produtos populares e confiaveis" />
            </div>
          </div>
        </section>

        <section className="w-full px-5 pb-10 md:px-8 md:pb-14 xl:px-12 2xl:px-16">
          <div className="grid gap-4 lg:grid-cols-3">
            {benefits.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[28px] border border-white/8 bg-white/[0.04] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#103567] text-[#ffcf48]">
                  <Icon size={24} stroke={2.1} />
                </div>
                <h2 className="mt-5 text-[22px] font-black text-white">{title}</h2>
                <p className="mt-3 text-[15px] leading-7 text-[#a9bcda]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="w-full px-5 pb-10 md:px-8 md:pb-14 xl:px-12 2xl:px-16">
          <div className="rounded-[34px] border border-[#1e467f] bg-[linear-gradient(135deg,#0b1c39_0%,#0a1730_100%)] p-6 md:p-8">
            <div className="max-w-[760px]">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#ffcf48]">
                Como funciona
              </p>
              <h2 className="section-title mt-3 text-[30px] font-black tracking-[-0.04em] text-white md:text-[42px]">
                Veja como acompanhar ofertas e aproveitar oportunidades com mais facilidade
              </h2>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-[26px] border border-white/8 bg-white/[0.04] p-5"
                >
                  <div className="text-[13px] font-black uppercase tracking-[0.18em] text-[#43deff]">
                    {step.number}
                  </div>
                  <h3 className="mt-3 text-[22px] font-black text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#a9bcda]">{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full px-5 pb-20 md:px-8 xl:px-12 2xl:px-16">
          <div className="rounded-[36px] border border-[#244d8d] bg-[linear-gradient(135deg,#0f2a5d_0%,#0b1830_44%,#081321_100%)] px-6 py-10 shadow-[0_24px_70px_rgba(0,0,0,0.20)] md:px-10 md:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-[720px]">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffcf48]">
                  Entre agora
                </p>
                <h2 className="section-title mt-4 text-[36px] font-black leading-[1.04] tracking-[-0.05em] text-white md:text-[54px]">
                  Receba ofertas, cupons e oportunidades em um so lugar.
                </h2>
                <p className="mt-4 text-[16px] leading-8 text-[#a9bcda]">
                  Entre no grupo oficial do Magazine Gerrayd e acompanhe selecoes,
                  avisos e achadinhos de lojas conhecidas com mais praticidade.
                </p>
              </div>

              <Link
                href={whatsappGroupUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-[18px] bg-[linear-gradient(90deg,#18d96a_0%,#37e5bc_100%)] px-7 py-5 text-[15px] font-black uppercase tracking-[0.05em] text-[#051d10] shadow-[0_16px_34px_rgba(23,216,104,0.18)]"
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
