import Link from "next/link";
import { redirect } from "next/navigation";
import {
  IconChartBar,
  IconHome2,
  IconLogout2,
  IconPackage,
  IconPlus,
  IconSparkles,
} from "@tabler/icons-react";
import { clearAdminSession, getAdminSession } from "@/lib/auth/session";

const navigation = [
  { href: "/admin", label: "Dashboard", icon: IconChartBar },
  { href: "/admin/products", label: "Produtos", icon: IconPackage },
  { href: "/admin/products/new", label: "Cadastrar produto", icon: IconPlus },
  { href: "/", label: "Ver site", icon: IconHome2 },
];

export async function AdminShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAdminSession();

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#eef5ff_0%,#f8fbff_100%)] text-brand-blue-dark">
      <div className="mx-auto grid min-h-screen max-w-[1680px] gap-5 p-3 lg:grid-cols-[300px_minmax(0,1fr)] lg:p-5">
        <aside className="rounded-[32px] bg-[linear-gradient(180deg,#1768ff_0%,#114bb8_65%,#0c2c6f_100%)] p-6 text-white shadow-[0_22px_60px_rgba(17,63,163,0.24)]">
          <div className="rounded-[24px] bg-white/10 p-5 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/14">
                <IconSparkles size={22} />
              </div>
              <div>
                <div className="section-title text-2xl font-black">Magazine Gerrayd</div>
                <p className="mt-1 text-sm text-blue-100/80">Painel administrativo</p>
              </div>
            </div>
          </div>

          <nav className="mt-8 flex flex-col gap-2">
            {navigation.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="rounded-[20px] px-4 py-3.5 text-[15px] font-semibold text-white/90 hover:bg-white/10 hover:text-white"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/12">
                    <Icon size={18} />
                  </span>
                  {label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-10 rounded-[24px] bg-white/10 p-5 text-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100/70">
              Sessao atual
            </div>
            <div className="mt-3 text-lg font-bold">{session?.name ?? "Administrador"}</div>
            <div className="mt-1 text-blue-100/80">{session?.email ?? "Sessao demonstrativa"}</div>
            <form
              action={async () => {
                "use server";
                await clearAdminSession();
                redirect("/admin/login");
              }}
              className="mt-5"
            >
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/6 px-4 py-2.5 text-xs font-semibold text-white hover:bg-white/10"
              >
                <IconLogout2 size={14} />
                Encerrar sessao
              </button>
            </form>
          </div>
        </aside>

        <main className="rounded-[32px] border border-white/80 bg-white p-6 text-brand-blue-dark shadow-[0_18px_50px_rgba(34,76,160,0.10)] xl:p-7">
          {children}
        </main>
      </div>
    </div>
  );
}
