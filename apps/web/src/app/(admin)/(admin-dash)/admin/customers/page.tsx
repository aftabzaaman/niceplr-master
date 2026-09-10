import { createClient } from "@/utils/supabase/server";

export default async function CustomersPage() {
  const supabase = await createClient();
  await supabase.auth.getUser();

  const { data: customers } = await supabase
    .from("profiles")
    .select("id, full_name, membership_tier, role, updated_at")
    .order("updated_at", { ascending: false, nullsFirst: false });

  const list = (customers ?? []).map((c: any) => ({
    id: c.id,
    name: c.full_name || "Unknown",
    membership: c.membership_tier,
    role: c.role,
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Customers</h1>
        <p className="text-sm text-slate-500 mt-0.5">{list.length} registered buyers.</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-left text-xs font-medium text-slate-500 uppercase tracking-wide">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Membership</th>
              <th className="px-4 py-3">Role</th>
            </tr>
          </thead>
          <tbody>
            {list.map((c: any) => (
              <tr key={c.id} className="border-t border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">{c.name}</td>
                <td className="px-4 py-3 text-slate-500">{c.membership}</td>
                <td className="px-4 py-3 text-slate-500">{c.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
