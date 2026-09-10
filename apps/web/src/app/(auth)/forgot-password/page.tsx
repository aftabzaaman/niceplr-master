"use client";

import React, { useActionState } from "react";
import Link from "next/link";
import { Mail, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { resetPassword } from "@/app/auth/actions";

const initialState = { error: "", success: false, message: "" };

export default function ForgotPasswordPage() {
  const [state, formAction, isPending] = useActionState(resetPassword, initialState);

  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Link href="/login" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium mb-8">
          <ArrowLeft size={16} />
          Back to login
        </Link>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Reset password</h1>
            <p className="text-white/50 font-medium">Enter your email and we&apos;ll send you a reset link.</p>
          </header>

          {state?.error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-sm font-medium">
              {state.error}
            </div>
          )}

          {state?.success && state?.message && (
            <div className="mb-6 p-4 bg-green-50 border border-green-100 text-green-700 rounded-2xl text-sm font-medium">
              {state.message}
            </div>
          )}

          <form action={formAction} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-white/40 ml-1 uppercase tracking-[0.2em]">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white placeholder:text-white/30 focus:border-purple-500/50 outline-none transition-all focus:ring-4 focus:ring-purple-500/10"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isPending}
              className="w-full py-7 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold text-base flex items-center justify-center gap-2"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send reset link"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
