import React from "react";

export default function DebugPage() {
  return (
    <div style={{ padding: "4rem", fontFamily: "sans-serif", textAlign: "center", color: "#333" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Next.js Route Debug</h1>
      <p style={{ fontSize: "1.2rem", color: "#666" }}>
        If you see this page, Next.js routing for <strong>/admin</strong> is working perfectly!
      </p>
      <div style={{ marginTop: "2rem", padding: "1rem", background: "#f4f4f4", borderRadius: "8px", display: "inline-block" }}>
        Path: <code>apps/web/src/app/(payload)/admin/[[...segments]]/page.tsx</code>
      </div>
    </div>
  );
}
