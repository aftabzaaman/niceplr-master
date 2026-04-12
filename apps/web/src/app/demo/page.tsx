import { CTACard } from "@/components/ui-blocks/cta-card";
import { Footer } from "@/components/ui-blocks/footer";
import { BlogSection } from "@/components/ui-blocks/blog-section";
import { BentoGridSection } from "@/components/ui-blocks/bento-grid-section";

export default function DemoPage() {
  return (
    <div className="min-h-screen flex flex-col gap-20 pt-20">
      <div className="w-full">
        <CTACard />
      </div>
      <div className="w-full">
        <BentoGridSection />
      </div>
      <div className="w-full">
        <BlogSection />
      </div>
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
