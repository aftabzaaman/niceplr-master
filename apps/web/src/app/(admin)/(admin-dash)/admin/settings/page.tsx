export default function SettingsPage() {
  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Settings</h1>
        <p className="text-sm text-slate-500 mt-0.5">Configure your store preferences.</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-5">
        {[
          { label: "Store name", value: "NicePLR" },
          { label: "Support email", value: "support@niceplr.com" },
          { label: "Currency", value: "USD" },
          { label: "Default membership", value: "FREE" },
        ].map((field) => (
          <div key={field.label} className="space-y-1.5">
            <label className="block text-sm font-medium text-slate-700">{field.label}</label>
            <input
              defaultValue={field.value}
              className="w-full px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400"
            />
          </div>
        ))}
        <button className="px-4 py-2 bg-black hover:bg-slate-800 text-white rounded-lg text-sm font-medium">
          Save changes
        </button>
      </div>
    </div>
  );
}
