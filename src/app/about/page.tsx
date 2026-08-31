

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { features, stats } from "@/lib/food";

export const metadata: Metadata = {
  title: "About — Mhob-M2",
  description:
    "Our story: from a tiny riverside cart in Phnom Penh to a neighbourhood kitchen serving honest Khmer food.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50 via-amber-50/50 to-background"
        />
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <Badge variant="secondary">Our Story · រឿងរបស់យើង</Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Street food soul,
              <br /> home kitchen heart
            </h1>
            <p className="max-w-xl text-muted-foreground">
              We started with a tiny cart by the river and a stubborn belief:
              good ingredients + real fire + generous hands.
            </p>
          </div>
        </div>
      </section>

      {/* Story with images */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop"
                alt="Fresh vegetarian ingredients"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-3 -bottom-6 hidden w-52 overflow-hidden rounded-2xl border-4 border-background shadow-lg sm:block">
              <Image
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=500&auto=format&fit=crop"
                alt="Charcoal grilled skewers"
                width={400}
                height={300}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <p className="leading-relaxed">
              Mhob-M2 was born in 2016 on a humble pushcart by the Tonlé Sap
              river. What began as a few bowls of kuy teav for the morning
              market crowd grew — thanks to our regulars — into the kitchen
              you see today.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              We still cook the same way we always have: shop the market at
              dawn, build every stock from scratch, and grill over real
              charcoal. No shortcuts, no frozen anything — just food worth
              waiting for.
            </p>
            <div className="flex flex-wrap items-center gap-6 border-t border-border pt-6 text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-4 text-orange-500" />
                Riverside, Phnom Penh
              </span>
              <span className="flex items-center gap-2 text-muted-foreground">
                <Clock className="size-4 text-orange-500" />
                Open 7 days a week
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="bg-muted/40">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-12 max-w-2xl space-y-3">
            <Badge variant="secondary">Why Mhob-M2 · ហេតុអ្វី?</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What we promise
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-8 rounded-3xl border border-border bg-background p-8 text-center sm:grid-cols-3 sm:p-10">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-extrabold text-orange-600">
                  {value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Come taste the story
            </h2>
            <p className="text-orange-50/90">
              Visit us along the river, or browse the menu and order ahead.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/menu"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-white text-orange-600 hover:bg-orange-50"
              )}
            >
              Browse Menu
              <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
