import React from "react";
import { RootLayout } from "@payloadcms/next/layouts";
import { importMap } from "./admin/importMap.js";

type Args = {
  children: React.ReactNode;
};

const Layout = ({ children }: Args) => (
  <RootLayout importMap={importMap}>
    {children}
  </RootLayout>
);

export default Layout;
