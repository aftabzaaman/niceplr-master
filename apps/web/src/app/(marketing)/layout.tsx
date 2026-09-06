import React from "react";
import { MainHeader } from "@/components/marketing/main-header";
import { Footer } from "@/components/marketing/footer";

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
