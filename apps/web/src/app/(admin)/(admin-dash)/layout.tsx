import React from "react";
import { AdminSidebar } from "@/components/admin/admin-sidebar";

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-white text-slate-900 font-sans">
      <AdminSidebar />
      <main className="flex-1 p-6 md:p-8 max-w-5xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
}
