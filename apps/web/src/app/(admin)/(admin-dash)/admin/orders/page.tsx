import { createClient } from "@/utils/supabase/server";

export default async function OrdersPage() {
  const supabase = await createClient();
  await supabase.auth.getUser();

  const [{ data: orders }, { data: products }] = await Promise.all([
    supabase.from("orders").select("*").order("created_at", { ascending: false }),
    supabase.from("products").select("id, title"),
  ]);

  const productMap = new Map((products ?? []).map((p: any) => [p.id, p.title]));

  const list = (orders ?? []).map((o: any) => ({
    id: o.id,
    customer: o.user_email ?? "Unknown",
    product: productMap.get(o.product_id) ?? "Unknown",
    amount: Number(o.amount),
    status: o.status,
    date: new Date(o.created_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Orders</h1>
        <p className="text-sm text-slate-500 mt-0.5">Track purchases and payments.</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-left text-xs font-medium text-slate-500 uppercase tracking-wide">
              <th className="px-4 py-3">Order</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {list.length === 0 ? (
              <tr className="border-t border-slate-100">
                <td colSpan={6} className="px-4 py-8 text-center text-slate-400">
                  No orders yet.
                </td>
              </tr>
            ) : (
              list.map((o: any) => (
                <tr key={o.id} className="border-t border-slate-100 hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-900">{o.id.slice(0, 8)}</td>
                  <td className="px-4 py-3 text-slate-600">{o.customer}</td>
                  <td className="px-4 py-3 text-slate-600">{o.product}</td>
                  <td className="px-4 py-3 text-slate-900">{o.amount > 0 ? `$${o.amount}` : "Free"}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
                      {o.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-500">{o.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
