import { AdminShell } from "@/components/admin/admin-shell";

export default function NewProductPage() {
  return (
    <AdminShell>
      <div className="rounded-[28px] bg-[linear-gradient(135deg,#f3f8ff_0%,#ffffff_65%,#fff9ec_100%)] p-6">
        <h1 className="section-title mt-3 text-4xl font-black text-brand-blue-dark">
          Novo produto
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-text-soft">
          O formulario de cadastro manual volta na proxima fase, quando o projeto
          estiver rodando com banco e autenticacao.
        </p>
      </div>

      <div className="mt-8 rounded-[30px] border border-[#e7eefb] bg-white p-6 shadow-[0_10px_26px_rgba(28,63,132,0.06)]">
        <div className="text-lg font-bold text-brand-blue-dark">Cadastro pausado nesta versao</div>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-brand-text-soft">
          Nesta entrega, a vitrine publica foi priorizada para funcionar como site
          estatico. O cadastro de novos produtos volta junto com a estrutura de painel.
        </p>
      </div>
    </AdminShell>
  );
}
