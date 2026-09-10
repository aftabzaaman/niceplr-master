import { createClient } from "@/utils/supabase/server";

type Product = {
  id: string;
  title: string;
  slug: string;
  category: string | null;
  tier: string;
  price: number | string;
  status: string;
};

export default async function ProductsPage() {
  const supabase = await createClient();
  const { data: products } = await supabase
    .from("products")
    .select("id, title, category, tier, price, status")
    .order("created_at", { ascending: true });

  const list = (products ?? []) as Product[];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Products</h1>
          <p className="text-sm text-slate-500 mt-0.5">{list.length} products in catalog.</p>
        </div>
        <button className="px-4 py-2 bg-black hover:bg-slate-800 text-white rounded-lg text-sm font-medium">
          New product
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-left text-xs font-medium text-slate-500 uppercase tracking-wide">
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Tier</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {list.map((p) => {
              const price = Number(p.price);
              return (
                <tr key={p.id} className="border-t border-slate-100 hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-900">{p.title}</td>
                  <td className="px-4 py-3 text-slate-500">{p.category ?? "—"}</td>
                  <td className="px-4 py-3 text-slate-500">{p.tier}</td>
                  <td className="px-4 py-3 text-slate-900">{price > 0 ? `$${price}` : "Free"}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                      {p.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
