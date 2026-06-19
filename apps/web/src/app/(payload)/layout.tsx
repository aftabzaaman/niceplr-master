import React from "react";
import { RootLayout, handleServerFunctions } from "@payloadcms/next/layouts";
import { importMap } from "./admin/importMap.js";
import config from "@/payload.config";

import "@payloadcms/next/css";

type Args = {
  children: React.ReactNode;
};

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap} serverFunction={handleServerFunctions}>
    {children}
  </RootLayout>
);

export default Layout;
