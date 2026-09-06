const orders = [
  { id: "#1042", customer: "Dahiru Uziazu", product: "Ultimate PLR Bundle", amount: "$147.00", status: "Paid", date: "Sep 6, 2026" },
  { id: "#1041", customer: "Babu", product: "Digital Marketing Pro", amount: "$97.00", status: "Paid", date: "Sep 5, 2026" },
  { id: "#1040", customer: "Jamie", product: "SaaS Launch Guide", amount: "$67.00", status: "Pending", date: "Sep 5, 2026" },
  { id: "#1039", customer: "Dahiru Uziazu", product: "Ebook Masterclass", amount: "$47.00", status: "Paid", date: "Sep 4, 2026" },
];

export default function OrdersPage() {
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
            {orders.map((o) => (
              <tr key={o.id} className="border-t border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">{o.id}</td>
                <td className="px-4 py-3 text-slate-600">{o.customer}</td>
                <td className="px-4 py-3 text-slate-600">{o.product}</td>
                <td className="px-4 py-3 text-slate-900">{o.amount}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex px-2 py-0.5 rounded-md text-xs font-medium ${o.status === "Paid" ? "bg-slate-100 text-slate-700" : "bg-slate-50 text-slate-400"}`}>
                    {o.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-500">{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
