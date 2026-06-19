import type { Metadata } from "next";
import React from "react";
import config from "@/payload.config";
import { RootPage, generatePageMetadata } from "@payloadcms/next/views";
import { importMap } from "../importMap.js";

type Args = {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params, searchParams: searchParams as any });

const Page = async (props: Args) => {
  const { params, searchParams } = props;
  return <RootPage config={config} params={params} searchParams={searchParams as any} importMap={importMap} />;
};

export default Page;
