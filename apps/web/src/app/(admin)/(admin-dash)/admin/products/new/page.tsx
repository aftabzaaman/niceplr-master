"use client";

import React, { useActionState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { addProduct } from "@/lib/actions/products";

const initialState = { error: "" };

export default function NewProductPage() {
  const [state, formAction, isPending] = useActionState(addProduct, initialState);

  const input =
    "w-full px-3 py-2 rounded-lg border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400";
  const label = "block text-sm font-medium text-slate-700 mb-1.5";

  return (
    <div className="space-y-6 max-w-xl">
      <div className="flex items-center gap-3">
        <Link href="/admin/products" className="text-slate-400 hover:text-slate-900">
          <ArrowLeft size={18} />
        </Link>
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">New product</h1>
          <p className="text-sm text-slate-500 mt-0.5">Add a product to your catalog.</p>
        </div>
      </div>

      <form action={formAction} className="bg-white border border-slate-200 rounded-xl p-6 space-y-5">
        {state?.error && (
          <div className="p-3 bg-red-50 border border-red-100 text-red-600 rounded-lg text-sm font-medium">
            {state.error}
          </div>
        )}

        <div className="space-y-1.5">
          <label className={label}>Title *</label>
          <input name="title" required placeholder="Product name" className={input} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className={label}>Category</label>
            <input name="category" placeholder="Marketing, AI..." className={input} />
          </div>
          <div className="space-y-1.5">
            <label className={label}>Tier</label>
            <select name="tier" defaultValue="FREE" className={input}>
              <option value="FREE">FREE</option>
              <option value="PRO">PRO</option>
              <option value="EXPERT">EXPERT</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className={label}>Price (USD)</label>
          <input name="price" type="number" min="0" step="0.01" defaultValue="0" className={input} />
        </div>

        <div className="space-y-1.5">
          <label className={label}>Image URL</label>
          <input name="image" placeholder="/assets/products/xx.png" className={input} />
        </div>

        <div className="space-y-1.5">
          <label className={label}>Description</label>
          <textarea name="description" rows={3} className={input} />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={isPending}
            className="px-4 py-2 bg-black hover:bg-slate-800 text-white rounded-lg text-sm font-medium disabled:opacity-50"
          >
            {isPending ? "Saving..." : "Save product"}
          </button>
          <Link href="/admin/products" className="text-sm font-medium text-slate-500 hover:text-slate-900">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
