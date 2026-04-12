import React from "react";
import { MainHeader } from "@/components/ui-blocks/main-header";
import { Footer } from "@/components/ui-blocks/footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainHeader />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </div>
  );
}
