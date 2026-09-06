export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1 text-slate-900 tracking-tight leading-none">Dashboard</h1>
          <p className="text-slate-400 font-semibold uppercase tracking-widest text-[10px]">Administrative Systems Online</p>
        </div>
        <div className="flex items-center gap-4 bg-white px-5 py-3 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest">Network Status</span>
            <span className="text-green-600 font-semibold text-sm">ENCRYPTED</span>
          </div>
          <div className="relative">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 blur-sm opacity-50" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Gross Revenue", value: "$42,500", trend: "+12.5% this mo", color: "text-purple-600", bg: "bg-purple-600/5" },
          { label: "Active Customers", value: "2,420", trend: "+340 new", color: "text-blue-600", bg: "bg-blue-600/5" },
          { label: "Catalog Items", value: "158", trend: "12 Pending", color: "text-amber-600", bg: "bg-amber-600/5" },
          { label: "Active Support", value: "4", trend: "0 Urgent", color: "text-rose-600", bg: "bg-rose-600/5" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-5 rounded-2xl border border-slate-100 space-y-3 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
            <div className={`w-8 h-8 rounded-lg ${stat.bg} flex items-center justify-center`}>
              <div className={`w-2 h-2 rounded-full ${stat.color} bg-current`} />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <div className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</div>
            </div>
            <p className="text-xs text-slate-400 font-semibold">{stat.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">Recent Activity</h3>
            <button className="text-xs font-semibold text-purple-600 hover:text-purple-700 uppercase tracking-widest">View All</button>
          </div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100/50 rounded-xl transition-colors group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center font-semibold text-slate-300 group-hover:text-purple-600 transition-colors">
                    {i}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-slate-900">User #{i * 42} acquired Master PDF</p>
                    <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-tight mt-0.5">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <span className="text-slate-900 font-semibold text-base">$99.00</span>
                  <span className="text-[10px] text-green-600 font-semibold uppercase">Cleared</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">Product Performance</h3>
            <div className="flex bg-slate-100 p-1 rounded-full">
              <button className="px-4 py-1.5 bg-white text-[10px] font-semibold text-slate-900 rounded-full shadow-sm uppercase tracking-widest">Weekly</button>
              <button className="px-4 py-1.5 text-[10px] font-semibold text-slate-400 hover:text-slate-600 rounded-full uppercase tracking-widest transition-colors">Monthly</button>
            </div>
          </div>

          <div className="flex-1 space-y-5">
            {[
              { name: "Ultimate PLR Bundle", sales: 142, revenue: "$14,058", color: "bg-purple-600", percent: "w-[85%]" },
              { name: "Digital Marketing Pro", sales: 98, revenue: "$9,702", color: "bg-blue-600", percent: "w-[65%]" },
              { name: "SaaS Launch Guide", sales: 74, revenue: "$7,326", color: "bg-emerald-600", percent: "w-[45%]" },
              { name: "Ebook Masterclass", sales: 42, revenue: "$4,158", color: "bg-amber-600", percent: "w-[30%]" },
            ].map((p) => (
              <div key={p.name} className="space-y-2">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{p.name}</p>
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mt-0.5">{p.sales} Units Sold</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-900">{p.revenue}</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full ${p.color} ${p.percent} rounded-full`} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100/50">
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Conversion Rate</p>
              <p className="text-lg font-bold text-slate-900">4.2% <span className="text-xs text-green-600 ml-1">+0.8%</span></p>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100/50">
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Avg. Order Value</p>
              <p className="text-lg font-bold text-slate-900">$99.00 <span className="text-xs text-slate-400 ml-1">Stable</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
