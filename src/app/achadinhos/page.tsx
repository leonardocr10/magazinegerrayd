import Link from "next/link";
import {
  IconBell,
  IconCircleCheck,
  IconCoins,
  IconLink,
  IconShieldCheck,
  IconSparkles,
} from "@tabler/icons-react";
import { AchadinhoProductCard } from "@/components/store/achadinho-product-card";
import { StoreFooter } from "@/components/store/store-footer";
import { StoreHeader } from "@/components/store/store-header";
import { storeProducts } from "@/lib/data/mock-store";

const highlightCards = [
  {
    title: "Top 10 eletronicos em oferta",
    action: "Ver selecao",
    theme: "bg-[linear-gradient(135deg,#eef5ff_0%,#dfeeff_100%)] text-[#0f2247]",
    art: "text-[#1768ff]",
  },
  {
    title: "Achados para casa",
    action: "Ver selecao",
    theme: "bg-[linear-gradient(135deg,#fff8ee_0%,#fff0dd_100%)] text-[#0f2247]",
    art: "text-[#c28b2b]",
  },
  {
    title: "Itens baratos que valem a pena",
    action: "Ver selecao",
    theme: "bg-[linear-gradient(135deg,#ebfbf5_0%,#dbf5ea_100%)] text-[#1a684f]",
    art: "text-[#17a574]",
  },
  {
    title: "Ofertas relampago",
    action: "Ver selecao",
    theme: "bg-[linear-gradient(135deg,#fff4ef_0%,#ffe7dd_100%)] text-[#ff5a1f]",
    art: "text-[#ff8b1f]",
  },
];

const curatedProducts = [
  { product: storeProducts[0], tag: "Escolha do Gerrayd", tone: "blue" as const },
  { product: storeProducts[1], tag: "Melhor custo-beneficio", tone: "green" as const },
  { product: storeProducts[2], tag: "Mais vendido", tone: "orange" as const },
  { product: storeProducts[3], tag: "Escolha do Gerrayd", tone: "blue" as const },
  {
    product: storeProducts[4],
    tag: "Oferta relampago",
    tone: "orange" as const,
    timer: "03:45:12",
  },
];

export default function AchadinhosPage() {
  const whatsappGroupUrl =
    "https://chat.whatsapp.com/Kh6OdjRatwO8xiE12GJTYf?s=sw&p=a&mlu=4";

  return (
    <>
      <StoreHeader activeNav="achadinhos" showDomainBubble />
      <main className="container-shell py-6">
        <div className="grid gap-8 xl:grid-cols-[1fr_300px]">
          <section>
            <div className="flex items-center gap-2 text-[#f4b400]">
              <IconSparkles size={22} />
              <span className="text-sm font-semibold">Curadoria editorial</span>
            </div>
            <h1 className="section-title mt-3 text-[54px] font-black leading-[0.95] text-brand-blue-dark">
              Achadinhos do <span className="text-brand-blue">Gerrayd</span>
            </h1>
            <p className="mt-4 max-w-3xl text-[18px] leading-8 text-brand-text-soft">
              Uma selecao especial feita a mao com produtos incriveis, precos justos
              e avaliacoes reais. Tudo escolhido com carinho para voce!
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {highlightCards.map((card, index) => (
                <article
                  key={card.title}
                  className={`overflow-hidden rounded-[24px] border border-[#e7edf8] p-5 shadow-[0_8px_24px_rgba(28,63,132,0.06)] ${card.theme}`}
                >
                  <div className="flex min-h-[126px] flex-col justify-between">
                    <div className="max-w-[180px] text-[18px] font-black leading-6">
                      {card.title}
                    </div>
                    <div className="flex items-end justify-between gap-4">
                      <Link href="/buscar?termo=achadinhos" className="text-sm font-semibold">
                        {card.action}
                      </Link>
                      <div className={`text-6xl font-black opacity-90 ${card.art}`}>
                        {index === 0 ? "%" : index === 1 ? "⌂" : index === 2 ? "$" : "⏰"}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-[#f4b400]">
                  <IconSparkles size={18} />
                  <span className="text-sm font-semibold">Produtos selecionados para voce</span>
                </div>
                <p className="mt-1 text-sm text-brand-text-soft">
                  Achadinhos com precos incriveis e avaliacoes reais
                </p>
              </div>
              <Link
                href="/buscar?termo=achadinhos"
                className="text-sm font-semibold text-brand-blue"
              >
                Ver todos os achadinhos
              </Link>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {curatedProducts.map((entry) => (
                <AchadinhoProductCard
                  key={entry.product.id}
                  product={entry.product}
                  tag={entry.tag}
                  tone={entry.tone}
                  timer={entry.timer}
                />
              ))}
            </div>

            <div className="mt-5 rounded-[22px] border border-[#dce8fb] bg-[linear-gradient(180deg,#f8fbff_0%,#edf5ff_100%)] px-5 py-4 shadow-[0_8px_24px_rgba(28,63,132,0.05)]">
              <div className="grid gap-4 lg:grid-cols-3">
                <div className="flex items-start gap-3">
                  <IconShieldCheck size={24} className="mt-1 text-brand-blue" />
                  <div>
                    <div className="text-sm font-bold text-brand-blue-dark">Produtos verificados</div>
                    <div className="text-sm text-brand-text-soft">Selecionamos apenas lojas confiaveis e seguras.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconCoins size={24} className="mt-1 text-brand-blue" />
                  <div>
                    <div className="text-sm font-bold text-brand-blue-dark">Precos atualizados</div>
                    <div className="text-sm text-brand-text-soft">Monitoramos os melhores precos todos os dias para voce.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <IconCircleCheck size={24} className="mt-1 text-brand-blue" />
                  <div>
                    <div className="text-sm font-bold text-brand-blue-dark">So o que vale a pena</div>
                    <div className="text-sm text-brand-text-soft">Nada de enrolacao: aqui so entram produtos que aprovamos.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <aside className="space-y-5">
            <div className="surface-card rounded-[28px] p-6">
              <div className="flex items-start gap-3">
                <IconShieldCheck size={28} className="text-brand-blue" />
                <div>
                  <h2 className="text-[20px] font-bold text-brand-blue-dark">Compre com seguranca</h2>
                  <p className="mt-2 text-sm leading-6 text-brand-text-soft">
                    Dicas rapidas para uma compra tranquila e sem surpresas.
                  </p>
                </div>
              </div>
              <div className="mt-5 space-y-3 text-sm text-brand-text-soft">
                <div className="flex items-start gap-2"><IconCircleCheck size={16} className="mt-1 text-brand-blue" /> Confira sempre a reputacao da loja.</div>
                <div className="flex items-start gap-2"><IconCircleCheck size={16} className="mt-1 text-brand-blue" /> Leia avaliacoes de outros compradores.</div>
                <div className="flex items-start gap-2"><IconCircleCheck size={16} className="mt-1 text-brand-blue" /> Desconfie de precos muito abaixo do normal.</div>
                <div className="flex items-start gap-2"><IconCircleCheck size={16} className="mt-1 text-brand-blue" /> Use formas de pagamento seguras.</div>
                <div className="flex items-start gap-2"><IconCircleCheck size={16} className="mt-1 text-brand-blue" /> Guarde seus comprovantes.</div>
              </div>
            </div>

            <div className="surface-card rounded-[28px] p-6">
              <div className="flex items-start gap-3">
                <IconLink size={28} className="text-brand-blue" />
                <div>
                  <h2 className="text-[20px] font-bold text-brand-blue-dark">Como funcionam os links afiliados</h2>
                  <p className="mt-3 text-sm leading-6 text-brand-text-soft">
                    Quando voce compra por um dos nossos links, o Magazine Gerrayd pode receber uma pequena comissao sem nenhum custo a mais para voce.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-brand-text-soft">
                    Isso nos ajuda a continuar selecionando as melhores ofertas todos os dias.
                  </p>
                </div>
              </div>
              <div className="mt-5 rounded-full border border-[#ffd9c6] bg-[#fff6f1] px-4 py-3 text-center text-sm font-semibold text-brand-orange">
                Voce nao paga nada a mais por isso!
              </div>
            </div>

            <div className="surface-card rounded-[28px] p-6">
              <div className="flex items-start gap-3">
                <IconBell size={28} className="text-[#f4b400]" />
                <div>
                  <h2 className="text-[20px] font-bold text-brand-blue-dark">Nao perca nada!</h2>
                  <p className="mt-2 text-sm leading-6 text-brand-text-soft">
                    Ative as notificacoes e receba os melhores achadinhos em primeira mao.
                  </p>
                </div>
              </div>
              <a
                href={whatsappGroupUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 w-full rounded-full border border-[#ffd69c] bg-[#fff8e8] px-5 py-3 font-semibold text-[#d58e00]"
              >
                Ativar notificacoes
              </a>
            </div>
          </aside>
        </div>
      </main>
      <StoreFooter />
    </>
  );
}
