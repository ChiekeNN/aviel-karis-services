import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aviel Karis Services Ltd | Oil & Gas, Marine & Industrial Engineering — Port Harcourt",
  description:
    "Indigenous Nigerian upstream and midstream oil & gas services, procurement, pipeline, marine and industrial engineering contractor headquartered in Port Harcourt since 2015.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-brand-navy antialiased">{children}</body>
    </html>
  );
}
