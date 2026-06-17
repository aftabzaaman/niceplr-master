import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Search,
  Download,
  Star,
} from "lucide-react";
import { MainHero } from "@/components/ui-blocks/main-hero";
import { CTACard } from "@/components/ui-blocks/cta-card";
import { OrnamentalSection } from "@/components/ui-blocks/ornamental-section";
import { InfoCards } from "@/components/ui-blocks/info-cards";
import { BlogSection } from "@/components/ui-blocks/blog-section";
import { FAQSection } from "@/components/ui-blocks/faq-section";
import { TestimonialSection } from "@/components/ui-blocks/testimonial-section";

type Product = {
  title: string;
  image: string;
  price: string;
  reviews: number;
};

const products: Product[] = [
  { title: "The YouTube Free Traffic System", image: "/assets/products/01.png", price: "$37", reviews: 142 },
  { title: "The Viral Prompt Pack", image: "/assets/products/02.png", price: "$47", reviews: 218 },
  { title: "The 7-Figure Funnel Vault", image: "/assets/products/03.png", price: "$97", reviews: 96 },
  { title: "The $10K Sale Engine", image: "/assets/products/04.png", price: "$67", reviews: 73 },
  { title: "The AI Cash Machine", image: "/assets/products/05.png", price: "$77", reviews: 184 },
  { title: "High-Converting Funnel Formulas", image: "/assets/products/06.png", price: "$47", reviews: 129 },
  { title: "The Words That Print Money", image: "/assets/products/07.png", price: "$37", reviews: 88 },
  { title: "The Ad Profit Machine", image: "/assets/products/08.png", price: "$57", reviews: 64 },
  { title: "Part-Time Millionaire Marketing Vault", image: "/assets/products/09.png", price: "Free", reviews: 312 },
  { title: "Successful Digital Strategies 2023", image: "/assets/products/10.png", price: "$27", reviews: 51 },
  { title: "Successful Digital Strategies 2022", image: "/assets/products/11.png", price: "$27", reviews: 47 },
  { title: "Funnel Strategic Guide", image: "/assets/products/12.png", price: "Free", reviews: 205 },
  { title: "AI Email Revenue Secrets", image: "/assets/products/13.png", price: "$37", reviews: 112 },
  { title: "The AI Content Cash System", image: "/assets/products/14.png", price: "$47", reviews: 76 },
  { title: "Fast-Selling Mini Offers Collection", image: "/assets/products/15.png", price: "$27", reviews: 38 },
  { title: "Digital Product Profit System", image: "/assets/products/16.png", price: "Free", reviews: 156 },
  { title: "The 6-Figure AI Course Formula", image: "/assets/products/17.png", price: "$97", reviews: 89 },
  { title: "The Faceless Viral Reels Vault", image: "/assets/products/18.png", price: "$57", reviews: 134 },
  { title: "The Viral Prompt Vault", image: "/assets/products/19.png", price: "$47", reviews: 67 },
  { title: "The Ultimate Digital Product Vault", image: "/assets/products/20.png", price: "$147", reviews: 41 },
  { title: "Digital Product Profit Key", image: "/assets/products/21.jpeg", price: "$37", reviews: 58 },
  { title: "The Part-Time Profits Pack", image: "/assets/products/22.png", price: "$47", reviews: 92 },
  { title: "The Fast Track Revenue Bundle", image: "/assets/products/23.png", price: "$67", reviews: 33 },
  { title: "AI Email Revenue Secrets — Email Kit", image: "/assets/products/24.png", price: "Free", reviews: 178 },
];

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
