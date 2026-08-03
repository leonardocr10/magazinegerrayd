import Link from "next/link";
import { IconPlus } from "@tabler/icons-react";
import { AdminShell } from "@/components/admin/admin-shell";
import { Badge } from "@/components/ui/badge";
import { getAdminProducts } from "@/lib/data/catalog";
import { formatPrice } from "@/lib/utils";

export default async function AdminProductsPage() {
  const products = await getAdminProducts();

  return (
    <AdminShell>
      <div className="rounded-[28px] bg-[linear-gradient(135deg,#f3f8ff_0%,#ffffff_65%,#fff9ec_100%)] p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <Badge tone="orange">Cadastro manual e curadoria</Badge>
            <h1 className="section-title mt-3 text-4xl font-black text-brand-blue-dark">
              Produtos no painel
            </h1>
          </div>
          <Link
            href="/admin/products/new"
            className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-3 font-semibold text-white shadow-[0_10px_24px_rgba(23,104,255,0.18)]"
          >
            <IconPlus size={18} />
            Novo produto
          </Link>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-[28px] border border-[#e7eefb] bg-white shadow-[0_10px_26px_rgba(28,63,132,0.06)]">
        <table className="w-full">
          <thead className="bg-[linear-gradient(180deg,#f7fbff_0%,#eef5ff_100%)] text-left text-sm text-brand-text-soft">
            <tr>
              <th className="px-5 py-4">Produto</th>
              <th className="px-5 py-4">Marketplace</th>
              <th className="px-5 py-4">Preco</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Curadoria</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t border-[#edf2fb]">
                <td className="px-5 py-4 font-semibold text-brand-blue-dark">{product.name}</td>
                <td className="px-5 py-4 text-brand-text-soft">{product.marketplace}</td>
                <td className="px-5 py-4 text-brand-text-soft">{formatPrice(product.price)}</td>
                <td className="px-5 py-4">
                  <Badge tone="blue">{product.status}</Badge>
                </td>
                <td className="px-5 py-4 text-brand-text-soft">
                  {product.highlighted ? "Destaque ativo" : "Sem destaque"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
