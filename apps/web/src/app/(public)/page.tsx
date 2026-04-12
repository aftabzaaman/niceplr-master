import { Button } from "@/components/ui/button";
import { 
  ShoppingBag, 
  Search, 
  Download, 
  Star
} from "lucide-react";
import { MainHero } from "@/components/ui-blocks/main-hero";
import { CTACard } from "@/components/ui-blocks/cta-card";
import { OrnamentalSection } from "@/components/ui-blocks/ornamental-section";
import { InfoCards } from "@/components/ui-blocks/info-cards";
import { BlogSection } from "@/components/ui-blocks/blog-section";
import { FAQSection } from "@/components/ui-blocks/faq-section";
import { TestimonialSection } from "@/components/ui-blocks/testimonial-section";

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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className="glass rounded-xl overflow-hidden group hover:glass-glow transition-all duration-500">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/5 relative">
                  <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary">
                    Digital Product
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center p-8 opacity-40 group-hover:scale-110 transition-transform duration-700">
                    <ShoppingBag className="w-1/2 h-1/2 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Digital Product {i}</h3>
                  <div className="flex items-center gap-1 mb-6">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground ml-2">(12 reviews)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black">Free</span>
                    <Button size="icon" variant="ghost" className="rounded-full h-12 w-12 glass hover:bg-primary hover:text-white group-hover:animate-bounce">
                      <Download className="w-5 h-5" />
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
        <section className="py-24">
          <CTACard />
        </section>
      </main>
    </>
  );
}
