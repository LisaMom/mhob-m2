import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Quote, Star, Truck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import MenuItem from "@/components/menu-item";
import { cn } from "@/lib/utils";
import { categories, dishes, features, stats } from "@/lib/food";

const testimonials = [
  {
    quote:
      "The fish amok here tastes exactly like my grandmother used to make. Absolute comfort food.",
    name: "Sreymom Chan",
    role: "Phnom Penh",
    initials: "SC",
  },
  {
    quote:
      "Service was fast, the grilled skewers were smoky and juicy, and the prices were super fair.",
    name: "James Carter",
    role: "Foodie & Traveller",
    initials: "JC",
  },
  {
    quote:
      "My favourite lunch spot in the city. The garden bowl is so fresh I come back three times a week!",
    name: "Dara Sok",
    role: "Regular Guest",
    initials: "DS",
  },
];

function Testimonial({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) {
  return (
    <Card size="sm" className="gap-4">
      <CardContent className="flex flex-col gap-4">
        <Quote className="size-8 text-orange-500/30" />
        <p className="text-sm leading-relaxed">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
        <div className="mt-auto flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-orange-100 font-semibold text-orange-600">
            {testimonial.initials}
          </span>
          <div>
            <p className="text-sm font-semibold">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">
              {testimonial.role}
            </p>
          </div>
          <span className="ml-auto flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="size-3.5 fill-amber-400 text-amber-400"
              />
            ))}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
export default function Home() {
  return (
    <>
      {/* ===================== Hero ===================== */}
      <section id="home" className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-orange-50 via-amber-50/50 to-background dark:from-orange-950/40 dark:via-background"
        />
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pt-14 pb-20 sm:px-6 lg:grid-cols-2 lg:pt-20">
          <div className="space-y-8">
            <Badge variant="secondary" className="gap-1.5 px-3 py-1 text-xs">
              <span className="size-1.5 rounded-full bg-orange-500" />
              Fresh every day · រៀងរាល់ថ្ងៃ
            </Badge>

            <h1 className="text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Good food.
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Great vibes.
              </span>
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              From sunrise noodles to midnight skewers — Mhob-M2 serves honest,
              delicious Khmer street food cooked fresh in an open kitchen you
              can trust.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/product"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600"
                )}
              >
                Explore Menu
                <ArrowRight />
              </Link>
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" })
                )}
              >
                Our Story
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 border-t border-border pt-6">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-foreground">{value}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-orange-900/10 sm:aspect-[5/4]">
              <Image
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop"
                alt="A colourful, freshly prepared meal bowl"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border bg-background p-4 shadow-lg sm:left-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <Truck className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold">Delivered hot</p>
                <p className="text-xs text-muted-foreground">
                  In under 30 minutes
                </p>
              </div>
            </div>

            <div className="absolute top-5 right-4 flex items-center gap-2 rounded-full border border-border bg-background/90 px-4 py-2 shadow-md backdrop-blur-sm sm:right-6">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-semibold">4.9</span>
              <span className="text-xs text-muted-foreground">
                · 1,200+ reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== Category marquee ===================== */}
      <section className="overflow-hidden border-y border-border bg-muted/40 py-4">
        <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
          {[...categories, ...categories].map((category, index) => (
            <span
              key={`${category}-${index}`}
              className="flex items-center gap-8 text-sm font-semibold tracking-widest text-muted-foreground uppercase"
            >
              {category}
              <span className="text-orange-500">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ===================== Featured dishes ===================== */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3">
            <Badge variant="secondary">Our Menu · ម៉ឺនុយ</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Today&apos;s favourites
            </h2>
            <p className="max-w-xl text-muted-foreground">
              A little taste of what our kitchen does best — seasonal, honest
              and packed with flavour.
            </p>
          </div>
          <Link
            href="/product"
            className={cn(buttonVariants({ variant: "outline" }), "shrink-0")}
          >
            View Full Menu
            <ArrowRight />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.slice(0, 3).map((dish) => (
            <MenuItem key={dish.name} dish={dish} />
          ))}
        </div>
      </section>
      {/* ===================== About teaser ===================== */}
      <section className="bg-muted/40">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2">
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

          <div className="space-y-8">
            <div className="space-y-3">
              <Badge variant="secondary">Why Mhob-M2 · ហេតុអ្វី?</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Street food soul, home kitchen heart
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                We started with a tiny cart by the river and a stubborn belief:
                good ingredients + real fire + generous hands. Today that same
                recipe feeds our whole neighbourhood.
              </p>
            </div>

            <div className="grid gap-5">
              {features.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className={cn(
                buttonVariants({ variant: "link" }),
                "px-0 text-orange-600"
              )}
            >
              Read our full story
              <ChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== Testimonials ===================== */}
      <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="mb-12 space-y-3 text-center">
          <Badge variant="secondary">Guest Love · ការផ្ដល់យោបល់</Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by the neighbourhood
          </h2>
          <CardDescription className="mx-auto max-w-xl">
            Don&apos;t just take our word for it — here&apos;s what people say
            about eating at Mhob-M2.
          </CardDescription>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </>
  );
}
