import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Khmer } from "next/font/google";
import Link from "next/link";
import { Utensils } from "lucide-react";
import "./globals.css";

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
  title: "Mhob-M2 - Food & Products Catalog",
  description: "Display all food products with detailed views",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="km"
      className={`${geistSans.variable} ${geistMono.variable} ${notoKhmer.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-khmer bg-background text-foreground">
        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-black text-xl text-primary">
              <Utensils className="w-6 h-6 text-primary" />
              <span>Mhob Khmer</span>
            </Link>

            <nav className="flex items-center gap-6 text-sm font-semibold">
              <Link href="/" className="hover:text-primary transition-colors">
                ទំព័រដើម (Home)
              </Link>
              <Link href="/product" className="hover:text-primary transition-colors">
                មុខម្ហូបទាំងអស់ (Products)
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="grow">{children}</main>

        {/* Footer */}
        <footer className="border-t border-border/40 bg-muted/40 py-8">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground space-y-2">
            <p className="font-semibold text-foreground">Mhob Khmer - Food Products Catalog</p>
            <p>© 2026 Mhob Khmer. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
