import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export default function AdminLoginPage() {
  return (
    <div className="w-full max-w-sm glass p-10 rounded-[2.5rem] border border-white/10 text-center">
      <div className="flex justify-center mb-6 text-purple-600">
        <ShieldAlert size={48} />
      </div>
      <h1 className="text-2xl font-black mb-2">Master Admin</h1>
      <p className="text-gray-500 text-sm mb-10 uppercase tracking-widest font-bold">Secure Access Only</p>
      
      <form className="space-y-4 text-left">
        <input 
          type="password" 
          placeholder="Master Key" 
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-purple-500 outline-none transition-all text-center tracking-[1em] text-lg" 
        />
        <button className="w-full py-4 bg-purple-600 text-white rounded-2xl font-bold mt-4 hover:bg-purple-700 transition-all shadow-[0_10_30_rgba(147,51,234,0.3)]">
          Authorize Access
        </button>
      </form>
      
      <Link href="/" className="mt-8 inline-block text-xs text-gray-500 hover:text-white transition-colors">
        Return to Public Site
      </Link>
    </div>
  );
}
