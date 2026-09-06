export default function AccountPage() {
  return (
    <div className="space-y-6 max-w-xl">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Account</h1>
        <p className="text-sm text-slate-500 mt-0.5">Manage your profile.</p>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-5">
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-700">Full name</label>
          <input className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" />
        </div>
        <div className="space-y-1.5">
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400" />
        </div>
        <button className="px-4 py-2 bg-black hover:bg-slate-800 text-white rounded-lg text-sm font-medium">
          Save changes
        </button>
      </div>
    </div>
  );
}
