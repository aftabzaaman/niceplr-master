export default function DownloadsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Downloads</h1>
        <p className="text-sm text-slate-500 mt-0.5">Your downloaded files.</p>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-10 text-center">
        <p className="text-sm text-slate-500">No downloads yet.</p>
      </div>
    </div>
  );
}
