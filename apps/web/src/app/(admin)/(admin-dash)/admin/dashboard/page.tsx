export default function AdminDashboard() {
  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black mb-2 text-slate-900 tracking-tight leading-none">Dashboard</h1>
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px]">Administrative Systems Online</p>
        </div>
        <div className="flex items-center gap-6 bg-white px-6 py-4 rounded-[2rem] border border-slate-100 shadow-sm">
          <div className="flex flex-col items-end">
            <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Network Status</span>
            <span className="text-green-600 font-black text-sm">ENCRYPTED</span>
          </div>
          <div className="relative">
            <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
            <div className="absolute inset-0 w-4 h-4 rounded-full bg-green-500 blur-sm opacity-50" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { label: "Gross Revenue", value: "$42,500", trend: "+12.5% this mo", color: "text-purple-600", bg: "bg-purple-600/5" },
          { label: "Active Customers", value: "2,420", trend: "+340 new", color: "text-blue-600", bg: "bg-blue-600/5" },
          { label: "Catalog Items", value: "158", trend: "12 Pending", color: "text-amber-600", bg: "bg-amber-600/5" },
          { label: "Active Support", value: "4", trend: "0 Urgent", color: "text-rose-600", bg: "bg-rose-600/5" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 space-y-5 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:scale-[1.02] transition-transform duration-300">
            <div className="flex flex-col gap-1">
               <div className={`w-10 h-10 rounded-2xl ${stat.bg} flex items-center justify-center mb-2`}>
                 <div className={`w-2 h-2 rounded-full ${stat.color} bg-current`} />
               </div>
               <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </div>
            <div className={`text-4xl font-black text-slate-900`}>{stat.value}</div>
            <p className="text-xs text-slate-400 font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              {stat.trend}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 min-h-[400px] shadow-[0_10px_40px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Recent Activity</h3>
            <button className="text-xs font-black text-purple-600 hover:text-purple-700 uppercase tracking-widest">View All</button>
          </div>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between p-5 bg-slate-50 hover:bg-slate-100/50 rounded-3xl transition-colors group cursor-pointer">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center font-black text-slate-300 group-hover:text-purple-600 transition-colors">
                    {i}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-900">User #{i * 42} acquired Master PDF</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight mt-0.5">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                   <span className="text-slate-900 font-black text-lg">$99.00</span>
                   <span className="text-[10px] text-green-600 font-black uppercase">Cleared</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-slate-100 min-h-[400px] shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Product Performance</h3>
            <div className="flex bg-slate-100 p-1 rounded-full">
               <button className="px-4 py-1.5 bg-white text-[10px] font-black text-slate-900 rounded-full shadow-sm uppercase tracking-widest">Weekly</button>
               <button className="px-4 py-1.5 text-[10px] font-black text-slate-400 hover:text-slate-600 rounded-full uppercase tracking-widest transition-colors">Monthly</button>
            </div>
          </div>
          
          <div className="flex-1 space-y-6">
            {[
              { name: "Ultimate PLR Bundle", sales: 142, revenue: "$14,058", color: "bg-purple-600", percent: "w-[85%]" },
              { name: "Digital Marketing Pro", sales: 98, revenue: "$9,702", color: "bg-blue-600", percent: "w-[65%]" },
              { name: "SaaS Launch Guide", sales: 74, revenue: "$7,326", color: "bg-emerald-600", percent: "w-[45%]" },
              { name: "Ebook Masterclass", sales: 42, revenue: "$4,158", color: "bg-amber-600", percent: "w-[30%]" },
            ].map((p) => (
              <div key={p.name} className="space-y-3">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm font-black text-slate-900">{p.name}</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">{p.sales} Units Sold</p>
                  </div>
                  <span className="text-sm font-black text-slate-900">{p.revenue}</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div className={`h-full ${p.color} ${p.percent} rounded-full transition-all duration-1000`} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-4">
             <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100/50">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Conversion Rate</p>
                <p className="text-xl font-black text-slate-900">4.2% <span className="text-xs text-green-600 ml-1">+0.8%</span></p>
             </div>
             <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100/50">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Avg. Order Value</p>
                <p className="text-xl font-black text-slate-900">$99.00 <span className="text-xs text-slate-400 ml-1">Stable</span></p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
