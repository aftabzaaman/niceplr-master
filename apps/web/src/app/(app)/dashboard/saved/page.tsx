export default function SavedPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Saved</h1>
        <p className="text-sm text-slate-500 mt-0.5">Products you saved for later.</p>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-10 text-center">
        <p className="text-sm text-slate-500">Nothing saved yet.</p>
      </div>
    </div>
  );
}
