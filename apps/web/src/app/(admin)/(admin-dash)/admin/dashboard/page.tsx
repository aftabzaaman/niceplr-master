export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Dashboard</h1>
        <p className="text-sm text-slate-500 mt-0.5">Overview of your store performance.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Gross Revenue", value: "$42,500", trend: "+12.5% this month" },
          { label: "Active Customers", value: "2,420", trend: "+340 new" },
          { label: "Catalog Items", value: "158", trend: "12 pending" },
          { label: "Downloads", value: "8,104", trend: "0 urgent" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-5 rounded-xl border border-slate-200">
            <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
            <div className="text-2xl font-semibold text-slate-900 mt-1.5">{stat.value}</div>
            <p className="text-xs text-slate-400 mt-1">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Recent orders</h3>
            <button className="text-xs font-medium text-slate-500 hover:text-slate-900">View all</button>
          </div>
          <div className="space-y-1">
            {[
              { user: "User #168", item: "Master PDF", amount: "$99.00", time: "2m ago" },
              { user: "User #126", item: "Ultimate PLR Bundle", amount: "$147.00", time: "14m ago" },
              { user: "User #84", item: "Ebook Masterclass", amount: "$47.00", time: "1h ago" },
              { user: "User #42", item: "SaaS Launch Guide", amount: "$67.00", time: "3h ago" },
            ].map((o) => (
              <div key={o.user + o.item} className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0">
                <div>
                  <p className="text-sm font-medium text-slate-900">{o.item}</p>
                  <p className="text-xs text-slate-400">{o.user} · {o.time}</p>
                </div>
                <span className="text-sm font-medium text-slate-900">{o.amount}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Top products</h3>
            <div className="flex bg-slate-100 p-0.5 rounded-lg">
              <button className="px-3 py-1 bg-white text-xs font-medium text-slate-900 rounded-md shadow-sm">Weekly</button>
              <button className="px-3 py-1 text-xs font-medium text-slate-500 hover:text-slate-900">Monthly</button>
            </div>
          </div>

          <div className="flex-1 space-y-4">
            {[
              { name: "Ultimate PLR Bundle", sales: 142, percent: "w-[85%]" },
              { name: "Digital Marketing Pro", sales: 98, percent: "w-[65%]" },
              { name: "SaaS Launch Guide", sales: 74, percent: "w-[45%]" },
              { name: "Ebook Masterclass", sales: 42, percent: "w-[30%]" },
            ].map((p) => (
              <div key={p.name} className="space-y-1.5">
                <div className="flex justify-between items-end">
                  <p className="text-sm font-medium text-slate-900">{p.name}</p>
                  <span className="text-xs text-slate-400">{p.sales} sold</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full bg-slate-900 ${p.percent} rounded-full`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
