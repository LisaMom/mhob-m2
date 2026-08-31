import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu — Mhob-M2",
  description: "The Mhob-M2 menu.",
};

export default function MenuPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-16 pb-20 sm:px-6">
      {/* 
        🍽️ Menu page — under construction.
        This is where the full menu goes. Add it here!
      */}
      <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-border bg-muted/40 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Menu</h1>
        <p className="text-sm text-muted-foreground">
          Coming soon — the full menu is being prepared.
        </p>
      </div>
    </div>
  );
}