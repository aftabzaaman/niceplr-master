"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ShieldCheck, 
  Users, 
  Package, 
  BarChart3, 
  Settings, 
  Bell,
  LogOut,
  Plus
} from "lucide-react";
import { cn } from "@/lib/utils";
import { logout } from "@/app/auth/actions";

export function AdminSidebar() {
  const pathname = usePathname();

  const adminMenuItems = [
    { icon: BarChart3, label: "Overview", href: "/admin/dashboard" },
    { icon: Package, label: "Inventory", href: "/admin/inventory" },
    { icon: Users, label: "Users", href: "/admin/users" },
    { icon: Bell, label: "Notifications", href: "/admin/notifications" },
    { icon: ShieldCheck, label: "Security", href: "/admin/security" },
    { icon: Settings, label: "Config", href: "/admin/settings" },
  ];

  return (
    <aside className="w-64 h-screen bg-white/70 backdrop-blur-xl border-r border-slate-200/60 flex flex-col p-6 sticky top-0 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      <div className="mb-12">
        <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white text-xs">N</div>
          <span>Nice<span className="text-purple-600">PLR</span></span>
        </Link>
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-2 font-black">Admin Portal</p>
      </div>

      <div className="mb-10">
        <button className="group flex items-center justify-center gap-2 w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold transition-all shadow-lg shadow-slate-900/10 active:scale-[0.98]">
          <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
          <span>New Product</span>
        </button>
      </div>

      <nav className="flex-1 space-y-1.5">
        {adminMenuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.label} 
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-200 font-bold text-sm",
                isActive 
                  ? "bg-purple-600/5 text-purple-600 border border-purple-600/10" 
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/50"
              )}
            >
              <item.icon className={cn(
                "w-5 h-5 transition-colors",
                isActive ? "text-purple-600" : "text-slate-400 group-hover:text-slate-600"
              )} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-slate-100">
        <form action={logout}>
          <button type="submit" className="flex items-center gap-3 px-5 py-3.5 w-full rounded-2xl hover:bg-red-50 text-slate-400 hover:text-red-500 transition-all group font-bold">
            <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Sign Out</span>
          </button>
        </form>
      </div>
    </aside>
  );
}
