import { createClient } from "@/utils/supabase/server";

type Plan = {
  id: string;
  name: string;
  price: number | string;
  description: string | null;
  features: string[] | null;
};

export default async function MembershipsPage() {
  const supabase = await createClient();
  const { data: plans } = await supabase
    .from("plans")
    .select("id, name, price, description, features")
    .order("price");

  const list = (plans ?? []) as Plan[];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Memberships</h1>
        <p className="text-sm text-slate-500 mt-0.5">Manage subscription plans and tiers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {list.map((plan) => {
          const price = Number(plan.price);
          return (
            <div key={plan.id} className="bg-white p-5 rounded-xl border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-slate-900">{plan.name}</h3>
                <span className="text-lg font-semibold text-slate-900">
                  {price > 0 ? `$${price}` : "Free"}
                </span>
              </div>
              <p className="text-sm text-slate-500">{plan.description ?? ""}</p>
              <ul className="mt-4 space-y-2">
                {(plan.features ?? []).map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                    <span className="w-1 h-1 rounded-full bg-slate-400" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
