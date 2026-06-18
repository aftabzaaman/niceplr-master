"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  PlusCircle, 
  FileText, 
  Bookmark, 
  Percent, 
  GraduationCap, 
  Layout, 
  BookOpen, 
  RefreshCw, 
  AlignLeft, 
  Lightbulb, 
  Type,
  Menu,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { logout } from "@/app/auth/actions";

export function UserSidebar() {
  const pathname = usePathname();

  const sections = [
    {
      title: "Master Library",
      items: [
        { icon: Home, label: "Home", href: "/dashboard" },
        { icon: PlusCircle, label: "Product Request", href: "/dashboard/request" },
        { icon: FileText, label: "Samples", href: "/dashboard/samples" },
        { icon: Bookmark, label: "Saved", href: "/dashboard/saved" },
      ]
    },
    {
      title: "Resources",
      items: [
        { icon: Percent, label: "Special Deals", href: "/dashboard/deals" },
        { icon: GraduationCap, label: "Digital Product University", href: "/dashboard/university" },
        { icon: Layout, label: "Product Mockup", href: "/dashboard/mockup" },
        { icon: BookOpen, label: "Book Cover", href: "/dashboard/covers" },
      ]
    },
    {
      title: "Tools",
      items: [
        { icon: RefreshCw, label: "PDF Rebranded", href: "/dashboard/rebrand" },
        { icon: AlignLeft, label: "Product Description", href: "/dashboard/description" },
        { icon: Lightbulb, label: "Product Ideas", href: "/dashboard/ideas" },
        { icon: Type, label: "Book Title Generator", href: "/dashboard/titles" },
      ]
    }
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-slate-100 flex flex-col p-6 sticky top-0 overflow-y-auto custom-scrollbar">
      <div className="mb-8 flex items-center justify-between">
        <Link href="/" className="text-3xl font-black tracking-tighter text-blue-600">
          Nice<span className="text-blue-500/80 font-bold">PLR</span>
        </Link>
        <button className="lg:hidden p-2 text-slate-400 hover:text-slate-600 transition-colors">
          <Menu size={20} />
        </button>
      </div>

      <nav className="flex-1 flex flex-col gap-8">
        {sections.map((section) => (
          <div key={section.title} className="space-y-4">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black px-4">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link 
                    key={item.label} 
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 group relative",
                      isActive 
                        ? "bg-blue-50 text-blue-600 font-bold shadow-sm" 
                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                    )}
                  >
                    <item.icon className={cn(
                      "w-4 h-4 transition-colors",
                      isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"
                    )} />
                    <span className="text-sm">{item.label}</span>
                    {isActive && (
                       <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-blue-600 shadow-sm" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="mt-auto pt-6 border-t border-slate-100">
        <form action={logout}>
          <button 
            type="submit"
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-red-500 hover:text-red-700 hover:bg-red-50 transition-all duration-200 font-bold"
          >
            <LogOut className="w-4 h-4 text-red-400" />
            <span className="text-sm">Logout</span>
          </button>
        </form>
      </div>
    </aside>
  );
}
