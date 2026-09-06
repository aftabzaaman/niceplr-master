import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Search,
  Download,
  Star,
} from "lucide-react";
import { MainHero } from "@/components/marketing/main-hero";
import { CTACard } from "@/components/marketing/cta-card";
import { OrnamentalSection } from "@/components/marketing/ornamental-section";
import { InfoCards } from "@/components/marketing/info-cards";
import { BlogSection } from "@/components/marketing/blog-section";
import { FAQSection } from "@/components/marketing/faq-section";
import { TestimonialSection } from "@/components/marketing/testimonial-section";
import { getCatalog } from "@/lib/api/products";

const products = getCatalog();

export default function Home() {
  return (
    <>
      <MainHero />
      <InfoCards />

      <main className="pb-20">
        {/* Master Library Grid */}
        <section className="container mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">Master Library</h2>
              <p className="text-muted-foreground">The most popular digital products this week</p>
            </div>
            <div className="hidden md:flex relative w-64 lg:w-80">
               <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
               <input 
                type="text" 
                placeholder="Search resources..." 
                className="w-full glass py-2 pl-10 pr-4 rounded-full border-white/5 focus:outline-none focus:ring-2 focus:ring-primary/50"
               />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {products.map((product) => (
              <div key={product.title} className="glass rounded-xl overflow-hidden group hover:glass-glow transition-all duration-500">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary/10 to-accent/5 relative overflow-hidden">
                  <div className="absolute top-3 left-3 z-10 bg-white px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-primary shadow-sm">
                    Digital Product
                  </div>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem]">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-0.5 mb-3">
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    <Star className="w-3 h-3 fill-primary text-primary" />
                    <Star className="w-3 h-3 text-primary" />
                    <span className="text-[10px] text-muted-foreground ml-1.5">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black">{product.price}</span>
                    <Button size="icon" variant="ghost" className="rounded-full h-9 w-9 glass hover:bg-primary hover:text-white group-hover:animate-bounce">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" className="rounded-full glass h-14 px-8">
              Load More Products
            </Button>
          </div>
        </section>

        {/* User Testimonials Section */}
        <TestimonialSection />

        {/* Ornamental Feature & Blog Articles (Unified Dark Block) */}
        <OrnamentalSection />
        <BlogSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <section>
          <CTACard />
        </section>
      </main>
    </>
  );
}
