import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { BackToTop } from "@/components/site/back-to-top";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const SITE_URL = "https://snapfix.app";
const TITLE = "SnapFix — Snap the problem. Fix the problem.";
const DESCRIPTION =
  "SnapFix uses AI to identify your home problem from a photo and instantly matches you with qualified local pros. See pricing, ratings, and book in seconds.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "SnapFix",
  keywords: [
    "home repair",
    "AI handyman",
    "find a plumber",
    "find an electrician",
    "home services app",
    "snap fix",
    "fix home problems",
  ],
  authors: [{ name: "SnapFix Labs, Inc." }],
  creator: "SnapFix Labs",
  publisher: "SnapFix Labs",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "SnapFix",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@snapfix",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFF8F0" },
    { media: "(prefers-color-scheme: dark)", color: "#1F0E03" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-background text-foreground antialiased">
        {children}
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
