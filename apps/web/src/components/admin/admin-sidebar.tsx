"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BadgeCheck,
  Download,
  Settings,
  LogOut,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { logout } from "@/app/auth/actions";

export function AdminSidebar() {
  const pathname = usePathname();

  const adminMenuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/admin/dashboard" },
    { icon: Package, label: "Products", href: "/admin/products" },
    { icon: ShoppingCart, label: "Orders", href: "/admin/orders" },
    { icon: Users, label: "Customers", href: "/admin/customers" },
    { icon: BadgeCheck, label: "Memberships", href: "/admin/memberships" },
    { icon: Download, label: "Downloads", href: "/admin/downloads" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ];

  return (
    <aside className="w-64 h-screen bg-[#f9f9f9] border-r border-slate-200 flex flex-col shrink-0 sticky top-0">
      <div className="px-5 py-5">
        <Link href="/" className="flex items-center gap-2 text-slate-900 font-semibold text-lg">
          <div className="w-7 h-7 rounded-md bg-black flex items-center justify-center text-white text-xs font-bold">N</div>
          <span>Nice<span className="text-slate-500">PLR</span></span>
        </Link>
      </div>

      <div className="px-4 pb-2">
        <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-black hover:bg-slate-800 text-white rounded-lg text-sm font-medium transition-colors">
          <Plus size={16} />
          <span>New Product</span>
        </button>
      </div>

      <nav className="flex-1 px-3 py-2 space-y-0.5 overflow-y-auto">
        {adminMenuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              )}
            >
              <item.icon className={cn("w-4 h-4", isActive ? "text-slate-900" : "text-slate-400")} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-3 border-t border-slate-200">
        <form action={logout}>
          <button type="submit" className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors text-sm font-medium">
            <LogOut className="w-4 h-4 text-slate-400" />
            <span>Sign out</span>
          </button>
        </form>
      </div>
    </aside>
  );
}
