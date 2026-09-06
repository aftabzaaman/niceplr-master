"use client";

import React, { useState, useEffect } from "react";
import { UserHeader } from "@/components/app/user-header";
import Image from "next/image";
import { Download, Lock, Loader2, CheckCircle } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { canAccessProduct } from "@/lib/entitlements";
import type { MembershipTier } from "@/types";

const supabase = createClient();

const MY_LIBRARY = [
  {
    title: "The 6-Day YouTube Accelerator Course",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400",
    category: "Video Course",
    format: "MP4 Video + PDF",
    id: "lib-1",
  },
  {
    title: "Mastering Digital Product Mockups & Assets",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400",
    category: "Design Kit",
    format: "Figma + PSD Templates",
    id: "lib-2",
  },
];

const FREE_PRODUCTS = [
  { title: "100+ High-Converting Hook Templates", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400", category: "Marketing", format: "PDF Guide", id: "free-1" },
  { title: "AI Content Creation Prompts Toolkit", image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400", category: "AI", format: "Notion Template", id: "free-2" },
  { title: "No-Code SaaS Landing Page UI Kit", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400", category: "SaaS", format: "Figma File", id: "free-3" },
];

const PREMIUM_PRODUCTS = [
  { title: "Google Performance Max Campaigns", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400", category: "Paid Traffic", price: "$49", tier: "PRO" as MembershipTier, id: "prem-1" },
  { title: "Multi-Bucket Savings & Finance Blueprint", image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400", category: "Finance", price: "$29", tier: "PRO" as MembershipTier, id: "prem-2" },
  { title: "Scaling Your Agency to $10k/Month", image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400", category: "Business", price: "$79", tier: "EXPERT" as MembershipTier, id: "prem-3" },
];

export default function UserDashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [membershipTier, setMembershipTier] = useState<MembershipTier>("FREE");
  const [ownedProductIds, setOwnedProductIds] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const { data: { user: currentUser } } = await supabase.auth.getUser();
      if (currentUser) {
        setUser(currentUser);

        const { data: profile } = await supabase
          .from("profiles")
          .select("membership_tier")
          .eq("id", currentUser.id)
          .single();

        if (profile) setMembershipTier(profile.membership_tier);

        const { data: purchases } = await supabase
          .from("user_purchases")
          .select("product_id")
          .eq("user_id", currentUser.id);

        if (purchases) setOwnedProductIds(purchases.map((p: any) => p.product_id));
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUnlock = async (productId: string) => {
    if (!user) return;
    setActionLoadingId(productId);
    try {
      const { error } = await supabase
        .from("user_purchases")
        .insert({ user_id: user.id, product_id: productId });
      if (!error) setOwnedProductIds([...ownedProductIds, productId]);
    } catch (e) {
      console.error(e);
    } finally {
      setActionLoadingId(null);
    }
  };

  const hasAccessToPremium = (product: typeof PREMIUM_PRODUCTS[0]) =>
    canAccessProduct(membershipTier, product.tier, ownedProductIds, product.id);

  if (loading) {
    return (
      <div className="flex h-[80vh] w-full items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-slate-400" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <UserHeader />

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900 tracking-tight">
            Welcome back{user?.user_metadata?.full_name ? `, ${user.user_metadata.full_name}` : ""}
          </h1>
          <p className="text-sm text-slate-500 mt-0.5">Explore your library and premium products.</p>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
          {membershipTier} plan
        </span>
      </div>

      {/* My Library */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-slate-900">My Library</h2>
          <span className="text-xs text-slate-400">{MY_LIBRARY.length} items</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MY_LIBRARY.map((item) => (
            <div key={item.id} className="flex bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div className="w-28 h-28 relative shrink-0 bg-slate-100">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <p className="font-medium text-slate-900 text-sm line-clamp-2">{item.title}</p>
                  <p className="text-xs text-slate-400 mt-1">{item.category} · {item.format}</p>
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-slate-600">
                  <CheckCircle size={14} />
                  <span>Owned</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Free products */}
      <section>
        <h2 className="font-semibold text-slate-900 mb-4">Free products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FREE_PRODUCTS.map((item) => (
            <div key={item.id} className="bg-white border border-slate-200 rounded-xl p-4">
              <div className="relative w-full aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden mb-3">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <p className="text-xs text-slate-400 font-medium">{item.category}</p>
              <p className="font-medium text-slate-900 text-sm mt-0.5 line-clamp-2">{item.title}</p>
              <p className="text-xs text-slate-400 mt-1">{item.format}</p>
              <button className="mt-3 w-full py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2">
                <Download size={14} /> Download
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Premium products */}
      <section>
        <h2 className="font-semibold text-slate-900 mb-4">Premium products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PREMIUM_PRODUCTS.map((item) => {
            const unlocked = hasAccessToPremium(item);
            return (
              <div key={item.id} className="bg-white border border-slate-200 rounded-xl p-4">
                <div className="relative w-full aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden mb-3">
                  <Image src={item.image} alt={item.title} fill className={`object-cover ${unlocked ? "" : "grayscale"}`} />
                  {!unlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40">
                      <Lock size={24} className="text-white" />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-400 font-medium">{item.category}</p>
                  <span className="text-xs font-medium text-slate-500">{item.tier}</span>
                </div>
                <p className="font-medium text-slate-900 text-sm mt-0.5 line-clamp-2">{item.title}</p>
                {unlocked ? (
                  <button className="mt-3 w-full py-2 rounded-lg bg-black text-white text-sm font-medium flex items-center justify-center gap-2">
                    <Download size={14} /> Download
                  </button>
                ) : (
                  <button
                    onClick={() => handleUnlock(item.id)}
                    disabled={actionLoadingId === item.id}
                    className="mt-3 w-full py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2"
                  >
                    {actionLoadingId === item.id ? <Loader2 size={14} className="animate-spin" /> : <Lock size={14} />}
                    {item.price} · Unlock
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
