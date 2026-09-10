"use client";

import React, { useActionState } from "react";
import Link from "next/link";
import { Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { updatePassword } from "@/app/auth/actions";

const initialState = { error: "" };

export default function ResetPasswordPage() {
  const [state, formAction, isPending] = useActionState(updatePassword, initialState);

  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Set new password</h1>
            <p className="text-white/50 font-medium">Choose a new password for your account.</p>
          </header>

          {state?.error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-sm font-medium">
              {state.error}
            </div>
          )}

          <form action={formAction} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-white/40 ml-1 uppercase tracking-[0.2em]">New Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-purple-400 transition-colors" />
                <input
                  type="password"
                  name="password"
                  required
                  minLength={6}
                  placeholder="••••••••"
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
                  Saving...
                </>
              ) : (
                "Update password"
              )}
            </Button>
          </form>

          <p className="mt-6 text-center text-white/40 text-sm">
            <Link href="/login" className="text-purple-400 hover:text-purple-300 font-medium">
              Back to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
