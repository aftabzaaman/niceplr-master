import { AdminView } from "@payloadcms/next/views/Admin";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admin Panel | NicePLR",
};

const Page = ({ params }: { params: { segments: string[] } }) => {
  return <AdminView params={params} />;
};

export default Page;
