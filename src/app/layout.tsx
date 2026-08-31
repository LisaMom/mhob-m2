import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Khmer } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

// 1. Initialize all fonts with required subsets
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoKhmer = Noto_Sans_Khmer({
  variable: "--font-noto-khmer",
  subsets: ["khmer"], // Define weights needed for Khmer text
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Mhob-M2 — Good Food, Great Vibes",
  description:
    "Authentic Cambodian street food and home-cooked classics, made fresh every single day.",
};

// 2. Define proper TypeScript layout props
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="km" // Changed to 'km' for Khmer language accessibility
      className={`${geistSans.variable} ${geistMono.variable} ${notoKhmer.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-khmer">
        <SiteHeader />

        {/* The grow class ensures the main content fills the space, pushing the footer down */}
        <main className="grow">{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}

