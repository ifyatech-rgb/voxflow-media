import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voxflowmedia.com"),
  title:
    "Voxflow Media | #1 Facebook Ads & Appointment System for Home Improvement Companies",
  description:
    "Voxflow Media helps roofers, HVAC companies, remodelers and contractors book $50k-$100k in new monthly revenue using Facebook ads, AI follow-up, and human appointment setters. 312+ appointments booked. 30-day guarantee.",
  keywords:
    "home improvement marketing agency, facebook ads for contractors, roofing marketing, hvac marketing, contractor leads, appointment setting for home improvement",
  openGraph: {
    title:
      "Voxflow Media | #1 Appointment System for Home Improvement Companies",
    description:
      "We help home improvement companies book $50k-$100k in new monthly revenue. Facebook ads + AI follow-up + human appointment setters. 30-day guarantee.",
    url: "https://voxflowmedia.com",
    siteName: "Voxflow Media",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voxflow Media | Home Improvement Marketing Agency",
    description:
      "Book $50k-$100k in new monthly revenue with our done-for-you system.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/voxflow-logo.png",
        type: "image/png",
      },
    ],
    shortcut: "/voxflow-logo.png",
    apple: "/voxflow-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", inter.variable)}>
      <body className="antialiased bg-[#000000] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
