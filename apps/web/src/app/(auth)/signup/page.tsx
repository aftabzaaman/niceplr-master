"use client";

import React, { useActionState } from "react";
import Link from "next/link";
import { User, Mail, Lock, Chrome, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InfiniteScrollGallery } from "@/components/ui-blocks/infinite-scroll-gallery";
import { signup } from "@/app/auth/actions";

const initialState = {
  error: "",
  success: false,
  message: "",
};

export default function SignupPage() {
  const [state, formAction, isPending] = useActionState(signup, initialState);

  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">
      {/* Left Column: Scrolling Visuals (Hidden on small screens) */}
      <div className="hidden lg:flex lg:w-[60%] xl:w-[65%] relative overflow-hidden h-full">
        <InfiniteScrollGallery />
        
        {/* Brand Logo in Corner */}
        <div className="absolute top-10 left-12 z-30">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-600/20 group-hover:rotate-12 transition-transform duration-500">
               <span className="text-white font-black text-xl">N</span>
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tight">Nice<span className="text-purple-600">PLR</span></span>
          </Link>
        </div>
      </div>

      {/* Right Column: Signup Form */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-12 lg:p-20 bg-white overflow-y-auto">
        <div className="w-full max-w-md my-auto py-12">
          {/* Back to Home (Mobile only) */}
          <Link href="/" className="lg:hidden inline-flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to site</span>
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight mb-3 leading-tight">Create your account</h1>
            <p className="text-slate-500 font-medium">Join our community of 10,000+ creators today</p>
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

          <form action={formAction} className="space-y-5">
             <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 ml-1 uppercase tracking-[0.2em]">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-purple-500 transition-colors" />
                <input 
                  type="text" 
                  name="fullName"
                  required
                  placeholder="John Doe" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-slate-900 placeholder:text-slate-300 focus:border-purple-600/30 outline-none transition-all focus:ring-4 focus:ring-purple-600/5 shadow-sm" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 ml-1 uppercase tracking-[0.2em]">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-purple-500 transition-colors" />
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="name@company.com" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-slate-900 placeholder:text-slate-300 focus:border-purple-600/30 outline-none transition-all focus:ring-4 focus:ring-purple-600/5 shadow-sm" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 ml-1 uppercase tracking-[0.2em]">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-purple-500 transition-colors" />
                <input 
                  type="password" 
                  name="password"
                  required
                  placeholder="••••••••" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-slate-900 placeholder:text-slate-300 focus:border-purple-600/30 outline-none transition-all focus:ring-4 focus:ring-purple-600/5 shadow-sm" 
                />
              </div>
            </div>

            <Button 
              type="submit"
              disabled={isPending}
              className="w-full py-8 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-black text-lg shadow-xl shadow-purple-600/20 transition-all hover:scale-[1.01] active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creating account...
                </>
              ) : (
                "Get Started"
              )}
            </Button>
          </form>

          <div className="mt-10">
            <div className="relative mb-8 text-center">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-100"></span>
              </div>
              <span className="relative px-6 bg-white text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Or join with</span>
            </div>

            <Button variant="outline" className="w-full py-8 bg-white border-slate-200 text-slate-900 rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-300 flex items-center justify-center gap-3 transition-all shadow-sm">
              <Chrome className="w-5 h-5 text-purple-600" />
              Sign up with Google
            </Button>
          </div>

          <footer className="mt-10 text-center text-slate-500 font-medium text-sm">
            Already have an account? <Link href="/login" className="text-purple-600 font-bold hover:text-purple-500 decoration-purple-600/20 underline-offset-4 hover:underline">Sign in</Link>
          </footer>
        </div>
      </div>
    </div>
  );
}
