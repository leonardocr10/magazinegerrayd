import { AdminShell } from "@/components/admin/admin-shell";

export default function AdminProductsPage() {
  return (
    <AdminShell>
      <div className="rounded-[28px] bg-[linear-gradient(135deg,#f3f8ff_0%,#ffffff_65%,#fff9ec_100%)] p-6">
        <h1 className="section-title text-4xl font-black text-brand-blue-dark">
          Produtos no painel
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-text-soft">
          O cadastro administrativo sera reativado na proxima fase. Nesta publicacao
          inicial, os produtos exibidos no site usam dados estaticos para permitir
          hospedagem gratuita no Cloudflare Pages.
        </p>
      </div>

      <div className="mt-8 rounded-[28px] border border-[#e7eefb] bg-white p-6 shadow-[0_10px_26px_rgba(28,63,132,0.06)]">
        <div className="text-lg font-bold text-brand-blue-dark">Modulo temporariamente desativado</div>
        <p className="mt-3 text-sm leading-7 text-brand-text-soft">
          O gerenciamento real de catalogo depende de login, banco de dados e acoes de
          servidor. Para esta etapa, mantivemos apenas a area publica para facilitar a
          publicacao.
        </p>
      </div>
    </AdminShell>
  );
}
