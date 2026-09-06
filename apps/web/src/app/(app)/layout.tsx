import React from "react";
import { UserSidebar } from "@/components/app/user-sidebar";

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-white text-slate-900 font-sans">
      <UserSidebar />
      <main className="flex-1 p-6 md:p-8">
        {children}
      </main>
    </div>
  );
}
