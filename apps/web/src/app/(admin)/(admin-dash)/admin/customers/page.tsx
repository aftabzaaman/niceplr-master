const customers = [
  { name: "Jamie", email: "jaimeafroz@gmail.com", membership: "FREE", orders: 0, joined: "Sep 6, 2026" },
  { name: "Babu", email: "morsalin675@gmail.com", membership: "FREE", orders: 1, joined: "Jun 19, 2026" },
  { name: "Dahiru Uziazu", email: "duziazu@gmail.com", membership: "FREE", orders: 2, joined: "Jun 19, 2026" },
];

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Customers</h1>
        <p className="text-sm text-slate-500 mt-0.5">All registered buyers.</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-left text-xs font-medium text-slate-500 uppercase tracking-wide">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Membership</th>
              <th className="px-4 py-3">Orders</th>
              <th className="px-4 py-3">Joined</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.email} className="border-t border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">{c.name}</td>
                <td className="px-4 py-3 text-slate-600">{c.email}</td>
                <td className="px-4 py-3 text-slate-500">{c.membership}</td>
                <td className="px-4 py-3 text-slate-600">{c.orders}</td>
                <td className="px-4 py-3 text-slate-500">{c.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
