const downloads = [
  { user: "Dahiru Uziazu", product: "Ultimate PLR Bundle", size: "12.4 MB", date: "Sep 6, 2026" },
  { user: "Babu", product: "Digital Marketing Pro", size: "8.1 MB", date: "Sep 5, 2026" },
  { user: "Jamie", product: "AI Content Toolkit", size: "5.7 MB", date: "Sep 4, 2026" },
];

export default function DownloadsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Downloads</h1>
        <p className="text-sm text-slate-500 mt-0.5">Recent file download activity.</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-left text-xs font-medium text-slate-500 uppercase tracking-wide">
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Size</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {downloads.map((d) => (
              <tr key={d.user + d.product} className="border-t border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-slate-900">{d.user}</td>
                <td className="px-4 py-3 text-slate-600">{d.product}</td>
                <td className="px-4 py-3 text-slate-500">{d.size}</td>
                <td className="px-4 py-3 text-slate-500">{d.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
