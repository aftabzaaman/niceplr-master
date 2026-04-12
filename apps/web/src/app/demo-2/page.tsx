"use client";

import { FAQSection } from "@/components/ui-blocks/faq-section";
import { Footer } from "@/components/ui-blocks/footer";
import { OrnamentalSection } from "@/components/ui-blocks/ornamental-section";
import { ImageMaskSection } from "@/components/ui-blocks/image-mask-section";
import { TestimonialSection } from "@/components/ui-blocks/testimonial-section";

export default function Demo2Page() {
  return (
    <div className="min-h-screen bg-[#030310] flex flex-col pt-20">
      <div className="w-full">
        <ImageMaskSection 
          badge="MASTER CLASS"
          headlinePrefix="Learn how to build"
          headlineItalic="Winning Products"
          paragraphs={["Unlock the secrets of high-converting digital assets with our proven frameworks and community insights."]}
          images={[
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
          ]}
          theme="dark"
        />
      </div>
      <div className="w-full">
        <TestimonialSection />
      </div>
      {/* FAQ Section as the Star of the Page */}
      <div className="w-full">
        <OrnamentalSection />
      </div>
      <div className="flex-1 w-full flex items-center justify-center py-20">
        <FAQSection />
      </div>

      {/* Footer to ground the page */}
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
