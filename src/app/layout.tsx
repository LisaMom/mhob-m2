import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Khmer } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import AmbientMotion from "@/components/ambient-motion";

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
  subsets: ["khmer"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Mhob-M2 — Good Food, Great Vibes",
  description:
    "Authentic Cambodian street food and home-cooked classics, made fresh every single day.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="km"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${notoKhmer.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (() => {
            let theme;
            try { theme = localStorage.getItem('mhob-theme'); } catch {}
            const dark = theme === 'dark' || (theme !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches);
            document.documentElement.classList.toggle('dark', dark);
          })();
        ` }} />
      </head>
      <body className="min-h-screen flex flex-col font-khmer bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1 w-full">{children}</main>
        <SiteFooter />
        <AmbientMotion />
      </body>
    </html>
  );
}
