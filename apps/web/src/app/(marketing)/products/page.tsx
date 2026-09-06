import Image from "next/image";
import { ShoppingBag, Search, Download, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTACard } from "@/components/marketing/cta-card";
import { getCatalog } from "@/lib/api/products";

export default function ProductsPage() {
  const products = getCatalog();

  return (
    <main className="min-h-screen bg-[#030320] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-auto z-0 rotate-180 pointer-events-none">
        <Image
          src="/assets/decor/ellipse-13.svg"
          alt=""
          width={1200}
          height={600}
          className="w-full h-auto"
          priority
        />
      </div>

      <section className="relative w-full pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-500 text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles className="w-3 h-3" />
            Product Catalog
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
            The Master <br />
            <span className="text-purple-600">Product Library</span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto font-medium leading-relaxed">
            Browse our expansive collection of premium digital assets,
            professional courses, and high-converting templates.
          </p>
        </div>
      </section>

      <section className="relative z-10 -mt-10 pb-32 bg-white rounded-t-[3rem] md:rounded-t-[4rem]">
        <div className="container mx-auto px-6 lg:px-12 pt-24">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3 text-slate-900">The Full Collection</h2>
              <p className="text-slate-500 font-medium">Explore over 1,000+ digital resources for your business</p>
            </div>
            <div className="relative w-full md:w-64 lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full bg-slate-50 border border-slate-100 py-3 pl-12 pr-4 rounded-full text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all shadow-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {products.map((product) => (
              <div key={product.title} className="group bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 border border-slate-100 flex flex-col">
                <div className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden">
                  <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-purple-600 border border-purple-100 shadow-sm">
                    Premium Asset
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center p-8 group-hover:scale-110 transition-transform duration-700">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-purple-600 transition-colors uppercase tracking-tight leading-tight">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-purple-500 text-purple-500" />
                    ))}
                    <span className="text-xs text-slate-400 ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Price</span>
                      <span className="text-3xl font-black text-slate-900">{product.price}</span>
                    </div>
                    <Button size="icon" variant="ghost" className="rounded-2xl h-14 w-14 bg-purple-50 hover:bg-purple-600 text-purple-600 hover:text-white transition-all shadow-sm">
                      <Download className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 pt-32">
          <CTACard />
        </div>
      </section>
    </main>
  );
}
