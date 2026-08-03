import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconBrandWhatsapp,
  IconDiscount2,
  IconHeadset,
  IconShieldCheck,
  IconTruckDelivery,
} from "@tabler/icons-react";
import { PartnerCard } from "@/components/store/partner-card";

const whatsappGroupUrl =
  "https://chat.whatsapp.com/Kh6OdjRatwO8xiE12GJTYf?s=sw&p=a&mlu=4";

const serviceCards = [
  {
    title: "Ofertas filtradas",
    text: "Selecionamos oportunidades com mais clareza para voce bater o olho e entender rapido se vale a pena.",
    icon: IconDiscount2,
  },
  {
    title: "Compra com suporte",
    text: "O projeto reforca confianca e orientacao para que a compra aconteca com mais seguranca do inicio ao fim.",
    icon: IconHeadset,
  },
  {
    title: "Entrega e retirada",
    text: "Avaliamos cenarios que fazem sentido no frete, na retirada e no custo final da compra.",
    icon: IconTruckDelivery,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071227] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(29,114,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(37,197,255,0.14),transparent_32%),linear-gradient(180deg,#071227_0%,#09152b_52%,#08121f_100%)]" />

      <div className="relative">
        <header className="border-b border-white/8">
          <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-4 px-5 py-5 md:px-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/brand/logo-real.jpg"
                alt="Magazine Gerrayd"
                width={1079}
                height={1079}
                priority
                className="h-[78px] w-[78px] rounded-[18px] border border-white/10 object-cover shadow-[0_14px_30px_rgba(0,0,0,0.28)] md:h-[92px] md:w-[92px]"
              />
            </Link>

            <Link
              href={whatsappGroupUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(90deg,#17d868_0%,#33e6b9_100%)] px-5 py-3 text-sm font-black uppercase tracking-[0.05em] text-[#051d10] shadow-[0_10px_30px_rgba(23,216,104,0.2)]"
            >
              <IconBrandWhatsapp size={20} stroke={2.3} />
              Entrar no grupo
            </Link>
          </div>
        </header>

        <section className="mx-auto w-full max-w-[1240px] px-5 pb-10 pt-8 md:px-8 md:pb-14 md:pt-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-[640px]">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#224e99] bg-[#0b1d40] px-4 py-2 text-sm font-semibold text-[#9bc1ff]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffcf48]" />
                Plataformas de ofertas selecionadas
              </div>

              <h1 className="section-title mt-6 text-[38px] font-black leading-[1.02] tracking-[-0.05em] text-white md:text-[58px]">
                As melhores oportunidades
                <span className="block bg-[linear-gradient(90deg,#ffffff_0%,#78c7ff_48%,#37deff_100%)] bg-clip-text text-transparent">
                  para comprar melhor com o Gerrayd
                </span>
              </h1>

              <p className="mt-5 max-w-[560px] text-[17px] leading-8 text-[#a8bddf] md:text-[18px]">
                Ofertas selecionadas com foco em economia real, parceiros confiaveis e
                acesso rapido ao grupo para acompanhar promocoes, cupons e novidades.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href={whatsappGroupUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-[18px] bg-[linear-gradient(90deg,#155dff_0%,#24bbff_100%)] px-7 py-4 text-[15px] font-black uppercase tracking-[0.05em] text-white shadow-[0_18px_40px_rgba(21,93,255,0.24)] hover:translate-y-[-1px]"
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

              <div className="mt-8 flex items-start gap-3 rounded-[22px] border border-[#1d3d73] bg-[#09182f]/88 px-4 py-4">
                <IconShieldCheck size={22} className="mt-0.5 text-[#ffcf48]" />
                <p className="text-sm leading-7 text-[#a8bddf]">
                  A proposta aqui e simples: visual bonito, leitura mais leve e foco em
                  compra segura, selecao confiavel e economia real.
                </p>
              </div>
            </div>

            <div className="relative lg:self-end">
              <div className="absolute left-10 top-10 h-44 w-44 rounded-full bg-[#1585ff]/18 blur-3xl" />
              <div className="absolute bottom-8 right-10 h-40 w-40 rounded-full bg-[#2be1ff]/14 blur-3xl" />

              <div className="relative overflow-hidden rounded-[34px] border border-[#274f92] bg-[radial-gradient(circle_at_top,rgba(47,140,255,0.18),transparent_26%),linear-gradient(145deg,#0b2451_0%,#0a1d3f_58%,#09162d_100%)] px-6 pt-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] md:px-8 md:pt-8 lg:mt-10">
                <div className="absolute left-0 top-0 h-24 w-24 rounded-br-[40px] bg-[linear-gradient(180deg,rgba(255,207,72,0.34),rgba(255,207,72,0.02))]" />
                <Image
                  src="/brand/gerrayd-character.png"
                  alt="Personagem do Magazine Gerrayd"
                  width={1024}
                  height={1536}
                  priority
                  className="mx-auto h-auto w-full max-w-[360px] object-contain object-bottom drop-shadow-[0_22px_42px_rgba(0,0,0,0.34)]"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="parceiros"
          className="mx-auto w-full max-w-[1240px] px-5 pb-8 md:px-8 md:pb-12"
        >
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#37deff]">
                Parceiros em destaque
              </p>
              <h2 className="section-title mt-2 text-[30px] font-black tracking-[-0.04em] text-white md:text-[40px]">
                Compre nas principais lojas parceiras
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <PartnerCard partner="magalu" subtitle="Ofertas selecionadas" />
            <PartnerCard partner="shopee" subtitle="Cupons e promocoes" />
            <PartnerCard partner="mercado-livre" subtitle="Achados com entrega rapida" />
            <PartnerCard partner="amazon" subtitle="Produtos populares e confiaveis" />
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1240px] px-5 pb-12 md:px-8 md:pb-16">
          <div className="grid gap-4 lg:grid-cols-3">
            {serviceCards.map(({ title, text, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[28px] border border-[#1b3664] bg-[linear-gradient(180deg,rgba(9,23,48,0.94)_0%,rgba(8,18,35,0.98)_100%)] p-6 shadow-[0_14px_34px_rgba(0,0,0,0.16)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#1657da_0%,#103f9f_100%)] text-[#ffcf48] shadow-[0_10px_24px_rgba(22,87,218,0.2)]">
                    <Icon size={26} stroke={2.1} />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-black text-white">{title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-[#a8bddf]">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1240px] px-5 pb-20 md:px-8">
          <div className="overflow-hidden rounded-[34px] border border-[#234b8f] bg-[linear-gradient(135deg,#0d2450_0%,#0b1830_44%,#081321_100%)] px-6 py-10 md:px-10 md:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffcf48]">
                  Magazine Gerrayd
                </p>
                <h2 className="section-title mt-4 max-w-[720px] text-[34px] font-black leading-[1.04] tracking-[-0.05em] text-white md:text-[50px]">
                  Receba ofertas selecionadas com mais clareza, seguranca e agilidade.
                </h2>
                <p className="mt-4 max-w-[620px] text-[16px] leading-8 text-[#a8bddf]">
                  Entre no grupo oficial e acompanhe oportunidades em marketplaces
                  conhecidos, com uma apresentacao direta e facil de entender.
                </p>
              </div>

              <Link
                href={whatsappGroupUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-[18px] bg-[linear-gradient(90deg,#17d868_0%,#33e6b9_100%)] px-7 py-5 text-[15px] font-black uppercase tracking-[0.05em] text-[#051d10] shadow-[0_16px_34px_rgba(23,216,104,0.2)]"
              >
                <IconBrandWhatsapp size={22} stroke={2.2} />
                Entrar no grupo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
