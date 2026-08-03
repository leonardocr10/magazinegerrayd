import { IconAdjustmentsHorizontal, IconSearch } from "@tabler/icons-react";
import { ProductCard } from "@/components/store/product-card";
import { StoreFooter } from "@/components/store/store-footer";
import { StoreHeader } from "@/components/store/store-header";
import { relatedSearches, storeProducts } from "@/lib/data/mock-store";

type SearchPageProps = {
  searchParams: Promise<{ termo?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const term = params.termo?.trim() || "fone bluetooth";
  const normalizedTerm = term.toLowerCase();

  const results = storeProducts.filter((product) =>
    `${product.name} ${product.description} ${product.category}`
      .toLowerCase()
      .includes(normalizedTerm),
  );

  const visibleResults = results.length > 0 ? results : storeProducts;

  return (
    <>
      <StoreHeader />
      <main className="container-shell py-8">
        <div className="text-sm text-brand-text-soft">Pagina inicial &gt; Resultados de busca</div>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="section-title text-4xl font-black text-brand-blue-dark">
              Resultados para <span className="text-gradient">{term}</span>
            </h1>
            <p className="mt-3 text-brand-text-soft">
              {visibleResults.length} resultados encontrados nesta primeira demonstracao.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-brand-line bg-white px-4 py-3 text-sm font-semibold text-brand-blue-dark">
            <IconAdjustmentsHorizontal size={18} />
            Ordenar por: Mais relevantes
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[260px_minmax(0,1fr)_280px]">
          <aside className="surface-card rounded-[28px] p-5">
            <h2 className="font-bold text-brand-blue-dark">Filtros</h2>
            <div className="mt-5 space-y-5 text-sm">
              <div>
                <div className="font-semibold text-brand-blue-dark">Categorias</div>
                <div className="mt-3 space-y-2 text-brand-text-soft">
                  <div>Audio</div>
                  <div>Fones de ouvido</div>
                  <div>Acessorios para celular</div>
                  <div>Eletronicos</div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-brand-blue-dark">Faixa de preco</div>
                <div className="mt-3 space-y-2 text-brand-text-soft">
                  <div>Ate R$100</div>
                  <div>R$100 a R$200</div>
                  <div>R$200 a R$500</div>
                </div>
              </div>
              <div>
                <div className="font-semibold text-brand-blue-dark">Frete</div>
                <div className="mt-3 space-y-2 text-brand-text-soft">
                  <div>Frete gratis</div>
                  <div>Entrega rapida</div>
                </div>
              </div>
            </div>
          </aside>

          <section>
            <div className="mb-5 flex flex-wrap gap-3">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-blue">Limpar filtros</span>
              <span className="rounded-full bg-brand-muted px-4 py-2 text-sm font-semibold text-brand-blue">{term}</span>
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-blue-dark">Ate R$200</span>
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-blue-dark">Frete gratis</span>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {visibleResults.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>

          <aside className="space-y-5">
            <div className="surface-card rounded-[28px] p-5">
              <h2 className="font-bold text-brand-blue-dark">Buscas relacionadas</h2>
              <div className="mt-4 space-y-3 text-sm text-brand-text-soft">
                {relatedSearches.map((related) => (
                  <div key={related} className="flex items-center gap-2">
                    <IconSearch size={16} className="text-brand-blue" />
                    <span>{related}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface-card rounded-[28px] p-5">
              <h2 className="font-bold text-brand-blue-dark">Talvez voce tambem goste</h2>
              <div className="mt-4 space-y-4">
                {storeProducts.slice(0, 3).map((product) => (
                  <div key={product.id} className="rounded-[24px] bg-slate-50 p-4">
                    <div className="text-sm font-semibold text-brand-blue-dark">{product.name}</div>
                    <div className="mt-1 text-lg font-bold text-brand-blue">R$ {product.price.toFixed(2)}</div>
                    <div className="mt-2 text-sm text-brand-orange">Ver oferta</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
      <StoreFooter />
    </>
  );
}
