import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Small Capital Aviation | Cargo & Logistics Excellence",
  description:
    "Elevating global logistics through professional cargo operations and innovative aviation solutions. Air cargo, ground handling, and supply chain management in Nairobi, Kenya.",
  keywords: [
    "aviation",
    "cargo",
    "logistics",
    "air freight",
    "ground handling",
    "Kenya",
    "Nairobi",
  ],
  authors: [{ name: "Small Capital Aviation" }],
  openGraph: {
    title: "Small Capital Aviation",
    description: "Cargo & Logistics Excellence",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-[var(--background)]`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
