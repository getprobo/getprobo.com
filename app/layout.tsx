import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Probo - Compliance, minus the clutter",
    template: "%s | Probo",
  },
  description:
    "Open-source platform that helps startups navigate compliance with confidence",
  keywords: [
    "compliance",
    "open source",
    "security",
    "SOC2",
    "ISO27001",
    "startup",
    "regulatory compliance",
    "regulatory reporting",
    "regulatory reporting software",
    "regulatory reporting platform",
    "regulatory reporting software",
    "regulatory reporting platform",
    "regulatory reporting software",
    "regulatory reporting platform",
  ],
  authors: [
    { name: "Antoine", url: "https://linkedin.com/in/antoine" },
    { name: "Bryan", url: "https://linkedin.com/in/bryan" },
  ],
  creator: "Probo Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.getprobo.com",
    title: "Probo - Compliance, minus the clutter",
    description:
      "Open-source platform that helps startups navigate compliance with confidence",
    siteName: "Probo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Probo - Compliance Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Probo - Compliance, minus the clutter",
    description:
      "Open-source platform that helps startups navigate compliance with confidence",
    creator: "@getprobo",
    images: ["/twitter-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, GeistSans.variable)}>
        <div className="min-h-screen bg-black flex flex-col">
          <div className="max-w-[1250px] mx-auto w-full px-4">
            <Navigation />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
