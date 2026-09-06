const plans = [
  { name: "FREE", price: "$0", description: "Basic library access", features: ["Access to Master Library", "5 daily downloads", "Personal use license"] },
  { name: "PRO", price: "$149", description: "Our most popular choice", features: ["Unlimited downloads", "Premium video courses", "Commercial license"] },
  { name: "EXPERT", price: "$99", description: "Advanced scaling tools", features: ["Everything in PRO", "White-label branding", "1-on-1 strategy call"] },
];

export default function MembershipsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-slate-900">Memberships</h1>
        <p className="text-sm text-slate-500 mt-0.5">Manage subscription plans and tiers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white p-5 rounded-xl border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-slate-900">{plan.name}</h3>
              <span className="text-lg font-semibold text-slate-900">{plan.price}</span>
            </div>
            <p className="text-sm text-slate-500">{plan.description}</p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-1 h-1 rounded-full bg-slate-400" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
