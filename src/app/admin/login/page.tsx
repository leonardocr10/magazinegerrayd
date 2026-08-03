import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="surface-card grid w-full max-w-5xl overflow-hidden rounded-[36px] lg:grid-cols-[1.1fr_0.9fr]">
        <section className="grid-overlay bg-[linear-gradient(180deg,#f8fbff_0%,#eef5ff_100%)] p-8 lg:p-12">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full bg-brand-orange/10 px-4 py-2 text-sm font-semibold text-brand-orange">
              Acesso administrativo
            </span>
            <h1 className="section-title mt-6 text-4xl font-black text-brand-blue-dark md:text-6xl">
              Painel do Magazine Gerrayd
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-8 text-brand-text-soft">
              Entre para gerenciar produtos, destaques, integracoes e o ritmo de
              atualizacao das ofertas.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-[28px] bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-brand-blue">Catalogo</div>
                <div className="mt-2 text-sm text-brand-text-soft">Produtos, ofertas e cupons.</div>
              </div>
              <div className="rounded-[28px] bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-brand-blue">Integracoes</div>
                <div className="mt-2 text-sm text-brand-text-soft">Providers desacoplados por marketplace.</div>
              </div>
              <div className="rounded-[28px] bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-brand-blue">Sincronizacao</div>
                <div className="mt-2 text-sm text-brand-text-soft">Atualizacao automatica por cron e filas.</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 lg:p-12">
          <h2 className="section-title text-3xl font-bold text-brand-blue-dark">
            Painel em preparacao
          </h2>
          <p className="mt-3 text-sm leading-6 text-brand-text-soft">
            Nesta primeira publicacao, a area administrativa ficou temporariamente
            desativada para permitir uma hospedagem estatica gratuita.
          </p>

          <div className="mt-8 rounded-[28px] border border-[#dce8fb] bg-[#f8fbff] p-6">
            <p className="text-sm leading-7 text-brand-text-soft">
              Quando a segunda fase com banco de dados entrar, o login volta aqui com
              autenticacao real e gerenciamento completo de produtos.
            </p>
            <Link
              href="/admin"
              className="mt-6 inline-flex rounded-full bg-brand-blue px-6 py-4 font-semibold text-white"
            >
              Voltar para a visao geral
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
