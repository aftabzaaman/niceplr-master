import type { Metadata } from "next";
import React from "react";
import config from "@/payload.config";
import { RootPage, generatePageMetadata } from "@payloadcms/next/views";

type Args = {
  params: Promise<{ segments: string[] }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params, searchParams });

const Page = async (props: Args) => {
  const { params, searchParams } = props;
  return <RootPage config={config} params={params} searchParams={searchParams} />;
};

export default Page;
