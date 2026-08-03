import { IconLockPassword, IconMail } from "@tabler/icons-react";
import { loginAdminAction } from "@/app/admin/login/actions";

type AdminLoginPageProps = {
  searchParams: Promise<{ erro?: string }>;
};

export default async function AdminLoginPage({ searchParams }: AdminLoginPageProps) {
  const params = await searchParams;
  const errorMessage =
    params.erro === "credenciais"
      ? "Credenciais invalidas. Confira e tente novamente."
      : params.erro === "validacao"
        ? "Preencha um e-mail valido e uma senha com pelo menos 8 caracteres."
        : null;

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
            Entrar no painel
          </h2>
          <p className="mt-3 text-sm leading-6 text-brand-text-soft">
            Use o usuario bootstrap definido nas variaveis de ambiente ou um admin salvo no banco.
          </p>

          {errorMessage ? (
            <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {errorMessage}
            </div>
          ) : null}

          <form action={loginAdminAction} className="mt-8 space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-brand-blue-dark">E-mail</span>
              <div className="flex items-center gap-3 rounded-2xl border border-brand-line px-4 py-3">
                <IconMail size={18} className="text-brand-text-soft" />
                <input
                  name="email"
                  type="email"
                  defaultValue="admin@magazinegerrayd.com.br"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-brand-blue-dark">Senha</span>
              <div className="flex items-center gap-3 rounded-2xl border border-brand-line px-4 py-3">
                <IconLockPassword size={18} className="text-brand-text-soft" />
                <input
                  name="password"
                  type="password"
                  defaultValue="TroquePorUmaSenhaSegura123!"
                  className="w-full bg-transparent outline-none"
                />
              </div>
            </label>

            <button
              type="submit"
              className="w-full rounded-full bg-brand-blue px-6 py-4 font-semibold text-white hover:bg-brand-blue-dark"
            >
              Entrar
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
