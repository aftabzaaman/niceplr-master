"use client";

import React, { useState, useEffect } from "react";
import { UserHeader } from "@/components/app/user-header";
import Image from "next/image";
import { Download, Lock, Loader2, CheckCircle } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { canAccessProduct } from "@/lib/entitlements";
import type { MembershipTier } from "@/types";

const supabase = createClient();

type Product = {
  id: string;
  title: string;
  category: string | null;
  tier: string;
  price: number | string;
  image: string | null;
};

export default function UserDashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [membershipTier, setMembershipTier] = useState<MembershipTier>("FREE");
  const [ownedProductIds, setOwnedProductIds] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const { data: { user: currentUser } } = await supabase.auth.getUser();
      if (currentUser) {
        setUser(currentUser);

        const [{ data: profile }, { data: purchases }, { data: allProducts }] = await Promise.all([
          supabase.from("profiles").select("membership_tier").eq("id", currentUser.id).single(),
          supabase.from("user_purchases").select("product_id").eq("user_id", currentUser.id),
          supabase.from("products").select("id, title, category, tier, price, image").eq("status", "active").order("created_at"),
        ]);

        if (profile) setMembershipTier(profile.membership_tier);
        if (purchases) setOwnedProductIds(purchases.map((p: any) => p.product_id));
        if (allProducts) setProducts(allProducts);
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

  const owned = products.filter((p) => ownedProductIds.includes(p.id));
  const free = products.filter((p) => p.tier === "FREE" || Number(p.price) === 0);
  const premium = products.filter((p) => p.tier !== "FREE" && Number(p.price) > 0);

  const hasAccess = (product: Product) =>
    canAccessProduct(membershipTier, product.tier as MembershipTier, ownedProductIds, product.id);

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
          <span className="text-xs text-slate-400">{owned.length} items</span>
        </div>
        {owned.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-xl p-8 text-center">
            <p className="text-sm text-slate-500">You haven't unlocked any products yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {owned.map((item) => (
              <div key={item.id} className="flex bg-white border border-slate-200 rounded-xl overflow-hidden">
                <div className="w-28 h-28 relative shrink-0 bg-slate-100">
                  {item.image ? (
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  ) : null}
                </div>
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <p className="font-medium text-slate-900 text-sm line-clamp-2">{item.title}</p>
                    <p className="text-xs text-slate-400 mt-1">{item.category ?? "General"}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs text-slate-600">
                    <CheckCircle size={14} />
                    <span>Owned</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Free products */}
      <section>
        <h2 className="font-semibold text-slate-900 mb-4">Free products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {free.map((item) => (
            <div key={item.id} className="bg-white border border-slate-200 rounded-xl p-4">
              <div className="relative w-full aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden mb-3">
                {item.image ? <Image src={item.image} alt={item.title} fill className="object-cover" /> : null}
              </div>
              <p className="text-xs text-slate-400 font-medium">{item.category ?? "General"}</p>
              <p className="font-medium text-slate-900 text-sm mt-0.5 line-clamp-2">{item.title}</p>
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
          {premium.map((item) => {
            const unlocked = hasAccess(item);
            const price = Number(item.price);
            return (
              <div key={item.id} className="bg-white border border-slate-200 rounded-xl p-4">
                <div className="relative w-full aspect-[4/3] bg-slate-100 rounded-lg overflow-hidden mb-3">
                  {item.image ? (
                    <Image src={item.image} alt={item.title} fill className={`object-cover ${unlocked ? "" : "grayscale"}`} />
                  ) : null}
                  {!unlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40">
                      <Lock size={24} className="text-white" />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-slate-400 font-medium">{item.category ?? "General"}</p>
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
                    ${price} · Unlock
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
