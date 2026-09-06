const products = [
  { name: "Ultimate PLR Bundle", category: "Business", tier: "PRO", price: "$147", status: "Active" },
  { name: "Digital Marketing Pro", category: "Marketing", tier: "PRO", price: "$97", status: "Active" },
  { name: "SaaS Launch Guide", category: "SaaS", tier: "EXPERT", price: "$67", status: "Active" },
  { name: "Ebook Masterclass", category: "Education", tier: "FREE", price: "$47", status: "Draft" },
  { name: "AI Content Toolkit", category: "AI", tier: "PRO", price: "$57", status: "Active" },
];

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Products</h1>
          <p className="text-sm text-slate-500 mt-0.5">Manage your digital product catalog.</p>
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
            {products.map((p) => (
              <tr key={p.name} className="border-t border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">{p.name}</td>
                <td className="px-4 py-3 text-slate-500">{p.category}</td>
                <td className="px-4 py-3 text-slate-500">{p.tier}</td>
                <td className="px-4 py-3 text-slate-900">{p.price}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex px-2 py-0.5 rounded-md text-xs font-medium ${p.status === "Active" ? "bg-slate-100 text-slate-700" : "bg-slate-50 text-slate-400"}`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
