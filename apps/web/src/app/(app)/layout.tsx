import React from "react";
import { UserSidebar } from "@/components/app/user-sidebar";

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      <div className="fixed inset-y-0 left-0 z-50 w-64 hidden lg:block">
        <UserSidebar />
      </div>
      
      <main className="flex-1 lg:ml-64 min-h-screen">
        {/* Global User Header could go here or inside children */}
        <div className="p-4 md:p-8 lg:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
