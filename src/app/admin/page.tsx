import {
  IconActivityHeartbeat,
  IconBox,
  IconClick,
  IconPlugConnected,
  IconRefresh,
} from "@tabler/icons-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { Badge } from "@/components/ui/badge";
import { getDashboardSummary } from "@/lib/data/catalog";
import { syncSchedule } from "@/lib/services/catalog-sync-service";

export default async function AdminDashboardPage() {
  const summary = await getDashboardSummary();

  const cards = [
    { label: "Produtos monitorados", value: summary.products, icon: IconBox },
    { label: "Produtos ativos", value: summary.activeProducts, icon: IconActivityHeartbeat },
    { label: "Cliques registrados", value: summary.clicks, icon: IconClick },
    { label: "Saude das integracoes", value: summary.syncHealth, icon: IconPlugConnected },
  ];

  return (
    <AdminShell>
      <div className="rounded-[28px] bg-[linear-gradient(135deg,#f3f8ff_0%,#ffffff_65%,#fff9ec_100%)] p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <Badge tone="blue">Arquitetura inicial entregue</Badge>
            <h1 className="section-title mt-3 text-4xl font-black text-brand-blue-dark">
              Dashboard administrativo
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-text-soft">
              Esta primeira etapa ja inclui autenticacao, schema Prisma, cadastro
              manual, providers desacoplados e cronograma de sincronizacao.
            </p>
          </div>
          <Badge tone={summary.source === "database" ? "blue" : "yellow"}>
            {summary.source === "database" ? "Conectado ao banco" : "Modo demonstracao"}
          </Badge>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ icon: Icon, label, value }) => (
          <article
            key={label}
            className="rounded-[28px] border border-[#e7eefb] bg-white p-5 shadow-[0_10px_26px_rgba(28,63,132,0.06)]"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-brand-text-soft">{label}</span>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-muted text-brand-blue">
                <Icon size={22} />
              </span>
            </div>
            <div className="mt-4 text-3xl font-black text-brand-blue-dark">{value}</div>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-4 xl:grid-cols-[1fr_0.9fr]">
        <section className="rounded-[30px] border border-[#e7eefb] bg-white p-6 shadow-[0_10px_26px_rgba(28,63,132,0.06)]">
          <div className="flex items-center gap-2 text-brand-blue">
            <IconRefresh size={18} />
            <span className="text-sm font-semibold">Servico de atualizacao</span>
          </div>
          <h2 className="section-title mt-3 text-3xl font-bold text-brand-blue-dark">
            Frequencias sugeridas nesta entrega
          </h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {Object.entries(syncSchedule).map(([scope, frequency]) => (
              <div
                key={scope}
                className="rounded-[24px] bg-[linear-gradient(180deg,#f8fbff_0%,#f1f6ff_100%)] p-4"
              >
                <div className="font-semibold text-brand-blue-dark">{scope}</div>
                <div className="mt-2 text-sm text-brand-text-soft">{frequency}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-[#e7eefb] bg-white p-6 shadow-[0_10px_26px_rgba(28,63,132,0.06)]">
          <h2 className="section-title text-3xl font-bold text-brand-blue-dark">
            Proximos passos oficiais
          </h2>
          <div className="mt-5 space-y-3 text-sm leading-6 text-brand-text-soft">
            <p>Conectar cada provider apenas com APIs e documentacoes oficiais.</p>
            <p>Adicionar fila BullMQ, cron jobs e logs estruturados por marketplace.</p>
            <p>Persistir historico de preco e cliques com rastreamento anonimo.</p>
            <p>Expandir CRUD de categorias, banners, cupons e usuarios administrativos.</p>
          </div>
        </section>
      </div>
    </AdminShell>
  );
}
