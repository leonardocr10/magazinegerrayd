import { AdminShell } from "@/components/admin/admin-shell";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/lib/data/mock-store";
import { createManualProductAction } from "@/app/admin/products/new/actions";
import { slugify } from "@/lib/utils";

type NewProductPageProps = {
  searchParams: Promise<{ status?: string; mensagem?: string }>;
};

export default async function NewProductPage({ searchParams }: NewProductPageProps) {
  const params = await searchParams;
  const feedbackMessage = params.mensagem;
  const feedbackTone = params.status === "erro" ? "orange" : "blue";

  return (
    <AdminShell>
      <div className="rounded-[28px] bg-[linear-gradient(135deg,#f3f8ff_0%,#ffffff_65%,#fff9ec_100%)] p-6">
        <Badge tone="blue">Cadastro manual inicial</Badge>
        <h1 className="section-title mt-3 text-4xl font-black text-brand-blue-dark">
          Novo produto
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-brand-text-soft">
          Este formulario prepara a base para importacao oficial por providers, mas
          tambem permite cadastrar ofertas manualmente quando a integracao ainda nao
          estiver disponivel.
        </p>
      </div>

      {feedbackMessage ? (
        <div className="mt-5">
          <Badge tone={feedbackTone}>{feedbackMessage}</Badge>
        </div>
      ) : null}

      <form
        action={createManualProductAction}
        className="mt-8 grid gap-5 rounded-[30px] border border-[#e7eefb] bg-white p-6 shadow-[0_10px_26px_rgba(28,63,132,0.06)] lg:grid-cols-2"
      >
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-brand-blue-dark">Nome do produto</span>
          <input
            name="name"
            className="w-full rounded-2xl border border-[#dce6f8] bg-[#fbfdff] px-4 py-3 outline-none"
            placeholder="Ex.: Echo Dot 5a geracao com Alexa"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-brand-blue-dark">Imagem principal</span>
          <input
            name="imageUrl"
            className="w-full rounded-2xl border border-[#dce6f8] bg-[#fbfdff] px-4 py-3 outline-none"
            placeholder="https://..."
          />
        </label>

        <label className="block lg:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-brand-blue-dark">Resumo curto</span>
          <textarea
            name="shortDescription"
            rows={4}
            className="w-full rounded-2xl border border-[#dce6f8] bg-[#fbfdff] px-4 py-3 outline-none"
            placeholder="Resumo do produto para cards e SEO."
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-brand-blue-dark">Preco atual</span>
          <input
            name="price"
            type="number"
            step="0.01"
            className="w-full rounded-2xl border border-[#dce6f8] bg-[#fbfdff] px-4 py-3 outline-none"
            placeholder="199.90"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-brand-blue-dark">Preco anterior</span>
          <input
            name="oldPrice"
            type="number"
            step="0.01"
            className="w-full rounded-2xl border border-[#dce6f8] bg-[#fbfdff] px-4 py-3 outline-none"
            placeholder="249.90"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-brand-blue-dark">Marketplace</span>
          <select
            name="marketplaceSlug"
            className="w-full rounded-2xl border border-[#dce6f8] bg-[#fbfdff] px-4 py-3 outline-none"
          >
            <option value="amazon">Amazon</option>
            <option value="shopee">Shopee</option>
            <option value="mercado-livre">Mercado Livre</option>
            <option value="magalu">Magalu</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-brand-blue-dark">Categoria</span>
          <select
            name="categorySlug"
            className="w-full rounded-2xl border border-[#dce6f8] bg-[#fbfdff] px-4 py-3 outline-none"
          >
            {categories.map((category) => (
              <option key={category} value={slugify(category)}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label className="block lg:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-brand-blue-dark">Link de afiliado</span>
          <input
            name="affiliateUrl"
            className="w-full rounded-2xl border border-[#dce6f8] bg-[#fbfdff] px-4 py-3 outline-none"
            placeholder="https://..."
          />
        </label>

        <div className="flex flex-wrap gap-4 lg:col-span-2">
          <label className="flex items-center gap-2 text-sm text-brand-text-soft">
            <input name="featured" type="checkbox" />
            Produto em destaque
          </label>
          <label className="flex items-center gap-2 text-sm text-brand-text-soft">
            <input name="dailyOffer" type="checkbox" />
            Oferta do dia
          </label>
          <label className="flex items-center gap-2 text-sm text-brand-text-soft">
            <input name="gerraydChoice" type="checkbox" />
            Escolha do Gerrayd
          </label>
        </div>

        <div className="lg:col-span-2">
          <button
            type="submit"
            className="rounded-full bg-brand-blue px-6 py-4 font-semibold text-white shadow-[0_10px_24px_rgba(23,104,255,0.18)]"
          >
            Salvar produto
          </button>
        </div>
      </form>
    </AdminShell>
  );
}
