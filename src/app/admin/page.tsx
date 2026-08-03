import Link from "next/link";
import { IconArrowRight, IconBrandWhatsapp } from "@tabler/icons-react";
import { AdminShell } from "@/components/admin/admin-shell";

const whatsappGroupUrl =
  "https://chat.whatsapp.com/Kh6OdjRatwO8xiE12GJTYf?s=sw&p=a&mlu=4";

export default function AdminDashboardPage() {
  return (
    <AdminShell>
      <div className="rounded-[32px] border border-[#dce8fb] bg-[linear-gradient(135deg,#f8fbff_0%,#ffffff_60%,#eef6ff_100%)] p-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-brand-blue/10 px-4 py-2 text-sm font-semibold text-brand-blue">
            Versao publica estatica
          </span>
          <h1 className="section-title mt-5 text-4xl font-black text-brand-blue-dark">
            Painel administrativo em preparacao
          </h1>
          <p className="mt-4 text-base leading-8 text-brand-text-soft">
            Para publicar a primeira versao no Cloudflare Pages, deixamos o site em
            modo estatico. O painel administrativo volta na proxima etapa, junto com
            login, cadastro e integracoes.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <section className="rounded-[28px] border border-[#e7eefb] bg-white p-6 shadow-[0_10px_26px_rgba(28,63,132,0.06)]">
          <h2 className="text-2xl font-black text-brand-blue-dark">O que fica ativo agora</h2>
          <div className="mt-5 space-y-3 text-sm leading-7 text-brand-text-soft">
            <p>Home page com visual completo e identidade da marca.</p>
            <p>Pagina de busca com filtro pelo termo digitado.</p>
            <p>Sessao de achadinhos com links diretos para parceiros.</p>
            <p>Hospedagem gratuita em Cloudflare Pages sem banco de dados.</p>
          </div>
        </section>

        <section className="rounded-[28px] border border-[#e7eefb] bg-white p-6 shadow-[0_10px_26px_rgba(28,63,132,0.06)]">
          <h2 className="text-2xl font-black text-brand-blue-dark">Proxima fase</h2>
          <div className="mt-5 space-y-3 text-sm leading-7 text-brand-text-soft">
            <p>Painel de administracao com autenticacao real.</p>
            <p>Cadastro de produtos, banners e cupons.</p>
            <p>Banco de dados e automacoes de atualizacao.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-3 font-semibold text-white"
            >
              Voltar para o site
            </Link>
            <a
              href={whatsappGroupUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#cfe0ff] px-5 py-3 font-semibold text-brand-blue-dark"
            >
              <IconBrandWhatsapp size={18} />
              Abrir grupo
            </a>
          </div>
        </section>
      </div>

      <div className="mt-8 rounded-[28px] bg-[linear-gradient(135deg,#1768ff_0%,#25bfff_100%)] p-6 text-white shadow-[0_16px_40px_rgba(23,104,255,0.18)]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.12em] text-white/80">
              Publicacao inicial
            </div>
            <h2 className="mt-2 text-3xl font-black">
              O foco agora e colocar o site no ar com estabilidade.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-white/85">
              Assim que a home estiver publicada no dominio, a gente pode seguir para
              painel, banco e integracoes sem travar essa entrega.
            </p>
          </div>
          <Link
            href="/achadinhos"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-brand-blue-dark"
          >
            Ver area publica
            <IconArrowRight size={18} />
          </Link>
        </div>
      </div>
    </AdminShell>
  );
}
