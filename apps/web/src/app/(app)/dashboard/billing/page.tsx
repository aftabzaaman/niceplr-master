export default function BillingPage() {
  return (
    <div className="space-y-6 max-w-xl">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Billing</h1>
        <p className="text-sm text-slate-500 mt-0.5">Manage your membership.</p>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-900">Current plan</p>
            <p className="text-2xl font-semibold text-slate-900 mt-1">FREE</p>
          </div>
          <button className="px-4 py-2 bg-black hover:bg-slate-800 text-white rounded-lg text-sm font-medium">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}
