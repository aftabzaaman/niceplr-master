import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen bg-white text-slate-900 selection:bg-purple-500/10 overflow-hidden">
      {children}
    </div>
  );
}
