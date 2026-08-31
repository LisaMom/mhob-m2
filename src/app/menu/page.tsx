import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import MenuItem from "@/components/menu-item";
import { cn } from "@/lib/utils";
import { categories, dishes } from "@/lib/food";

export const metadata: Metadata = {
  title: "Menu — Mhob-M2",
  description:
    "Browse our full menu: Khmer street food, noodles, BBQ, desserts and more.",
};

export default function MenuPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-16 pb-20 sm:px-6">
      {/* Page header */}
      <div className="mb-12 max-w-2xl space-y-3">
        <Badge variant="secondary">Our Menu · ម៉ឺនុយ</Badge>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Full menu
        </h1>
        <p className="text-muted-foreground">
          Made to order from our open kitchen — every dish uses ingredients
          picked fresh the same morning.
        </p>

        <div className="flex flex-wrap gap-2 pt-3">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="bg-muted/50 text-xs"
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      {/* Dish grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish) => (
          <MenuItem key={dish.name} dish={dish} />
        ))}
      </div>

      {/* Order CTA */}
      <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-border bg-muted/40 p-8 text-center sm:p-10">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Hungry already?
        </h2>
        <p className="max-w-md text-sm text-muted-foreground">
          Call ahead and we&apos;ll have your food hot and ready when you
          arrive.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:+85512345678"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
            )}
          >
            <Phone />
            +855 12 345 678
          </a>
        </div>
      </div>
    </div>
  );
}