
/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChefHat,
  Flame,
  GraduationCap,
  MapPin,
  Soup,
  Star,
  Heart,
  Users,
} from "lucide-react";
import type { ComponentType } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us — Mhob Khmer",
  description:
    "Street food soul, home kitchen heart. Our story: from a tiny cart by the Tonlé Sap river to a neighbourhood kitchen serving honest Khmer food.",
};

type Feature = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Soup,
    title: "Fresh, every day",
    description: "Market runs at dawn and same-day cooking — nothing sits in a freezer.",
  },
  {
    icon: Flame,
    title: "Real charcoal fire",
    description: "Every skewer and grilled dish gets that smoky, open-flame char.",
  },
  {
    icon: Users,
    title: "Generous portions",
    description: "Cooked like we're feeding family, not just customers.",
  },
];

const stats = [
  { value: "50+", label: "Signature dishes" },
  { value: "10k+", label: "Happy guests" },
  { value: "4.9/5", label: "Average rating" },
];

const team = [
  {
    name: "Chhun Sopharoth",
    role: "Founder & Head Chef",
    bio: "Still runs the same pushcart recipes she started with in 2016.",
    image: "/images/paroth.jpg",
  },
  {
    name: "Chhomna Daraguel",
    role: "Co-Founder & Operations",
    bio: "Keeps the kitchen running and the market runs on schedule.",
    image: "/images/Raguel.jpg",
  },
  {
    name: "Kim Sreypin",
    role: "Sous Chef",
    bio: "Grill master — every skewer passes through her hands.",
    image: "/images/Kim%20sreypin.jpg",
  },
  {
    name: "Kong Kimlong",
    role: "Front of House",
    bio: "The friendly face that greets every guest at the door.",
    image: "/images/Kimlong.jpg",
  },
  {
    name: "Mom Lisa",
    role: "Pastry & Desserts",
    bio: "Turns leftover market fruit into daily dessert specials.",
    image: "/images/Mom%20lisa.jpg",
  },
  {
    name: "Keo Hengleap",
    role: "Delivery & Logistics",
    bio: "Makes sure every order arrives hot, in under 30 minutes.",
    image: "/images/HengLeap.png",
  },
];

const container = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const eyebrow = "mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-orange-700 uppercase dark:text-orange-400";

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <section aria-labelledby="about-heading" className="overflow-hidden bg-orange-50/60 py-12 dark:bg-orange-950/15 sm:py-16 lg:py-20">
        <div className={cn(container, "grid items-center gap-10 lg:grid-cols-2 lg:gap-16")}>
          <div>
            <p className={eyebrow}><span className="h-px w-8 bg-current" /> Our Story · រឿងរបស់យើង</p>
            <h1 id="about-heading" className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Street food soul.<br /><span className="text-orange-600 dark:text-orange-400">Home kitchen heart.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              From a tiny cart by the river to a kitchen full of familiar faces.
              We bring people together over honest Khmer food, made with care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/product" className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full bg-orange-600 px-6 text-white hover:bg-orange-700")}>
                Explore our menu <ArrowRight className="size-4" />
              </Link>
              <a href="#team" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-12 rounded-full px-6")}>Meet the team</a>
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground"><MapPin aria-hidden="true" className="size-4 text-orange-600 dark:text-orange-400" /> Rooted in Riverside, Phnom Penh</p>
          </div>
          <figure className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-xl shadow-orange-950/10">
            <div className="aspect-[5/4] overflow-hidden">
              <img src="https://malis.thalias.com.kh/wp-content/uploads/2021/03/5_Malis-e1617104757527.jpg" alt="Kuy teav soup with fresh herbs and lime" className="h-full w-full object-cover" />
            </div>
            <figcaption className="flex flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-6">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300"><ChefHat aria-hidden="true" className="size-5" /></span>
                <div><p className="text-sm font-semibold">A little taste of home</p><p className="mt-0.5 text-xs text-muted-foreground">Cooked fresh, every single day.</p></div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-2 text-sm font-semibold"><Star aria-hidden="true" className="size-4 fill-amber-400 text-amber-400" /> 4.9 <span className="sr-only">out of 5</span></span>
            </figcaption>
          </figure>
        </div>
      </section>

      <nav aria-label="About page sections" className="border-y border-border">
        <div className={cn(container, "flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-5 sm:justify-between")}>
          <span className="hidden text-xs font-semibold tracking-widest text-muted-foreground uppercase sm:block">Get to know Mhob-M2</span>
          <div className="flex flex-wrap justify-center gap-6 text-sm sm:gap-8">
            {[{ href: "#story", label: "Our story" }, { href: "#values", label: "Our values" }, { href: "#team", label: "Our people" }].map(({ href, label }) => (
              <a key={href} href={href} className="rounded font-medium text-muted-foreground transition-colors hover:text-orange-600 focus-visible:outline-2 focus-visible:outline-orange-500 dark:hover:text-orange-400">{label}</a>
            ))}
          </div>
        </div>
      </nav>

      <section id="story" aria-labelledby="story-heading" className="scroll-mt-24 py-16 sm:py-24">
        <div className={container}>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className={eyebrow}>01 / Where it began</p>
              <h2 id="story-heading" className="max-w-md text-3xl font-bold leading-tight tracking-tight sm:text-4xl">A small cart.<br />A generous helping of heart.</h2>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2 text-xs font-medium"><Heart aria-hidden="true" className="size-4 text-orange-600 dark:text-orange-400" /> Sharing Khmer flavours since 2016</span>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p className="text-lg text-foreground">Mhob Khmer was born in 2016 on a humble pushcart by the Tonlé Sap river. A few bowls of kuy teav for the morning market crowd were all it took to get started.</p>
              <p>Thanks to our regulars, that little cart grew into the kitchen you see today. The space has changed, but the way we cook hasn&apos;t: shop the market at dawn, build every stock from scratch, and grill over real charcoal.</p>
              <p>Good ingredients, real fire, and generous hands. That&apos;s our recipe for good food and great vibes.</p>
            </div>
          </div>
          <dl className="mt-12 grid grid-cols-1 divide-y divide-border rounded-2xl border border-border bg-muted/30 sm:mt-16 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col-reverse gap-2 px-6 py-7 text-center">
                <dt className="text-sm text-muted-foreground">{label}</dt>
                <dd className="text-3xl font-bold tracking-tight text-orange-600 dark:text-orange-400 sm:text-4xl">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="values" aria-labelledby="values-heading" className="scroll-mt-24 bg-muted/40 py-16 sm:py-20">
        <div className={container}>
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div><p className={eyebrow}>02 / What matters to us</p><h2 id="values-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">Good food starts here.</h2></div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Three simple promises, from our first morning at the market to the last plate of the day.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }, index) => (
              <article key={title} className="rounded-2xl border border-border bg-card p-7">
                <div className="mb-7 flex items-center justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300"><Icon className="size-6" /></span><span aria-hidden="true" className="text-sm font-medium text-muted-foreground">0{index + 1}</span></div>
                <h3 className="mb-3 text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" aria-labelledby="team-heading" className="scroll-mt-24 py-16 sm:py-24">
        <div className={container}>
          <div className="mx-auto mb-10 max-w-xl text-center">
            <p className={cn(eyebrow, "justify-center")}>03 / Meet the Team · ក្រុមការងារ</p>
            <h2 id="team-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">The people behind your plate.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Different talents, one shared table. Meet the people who bring our kitchen to life.</p>
          </div>

          <article aria-labelledby="mentor-name" className="mx-auto mb-8 max-w-sm rounded-2xl border border-orange-200 bg-white p-6 text-center dark:border-orange-900 dark:bg-card">
            <div className="mx-auto mb-4 flex h-[88px] w-[88px] items-center justify-center rounded-full border-[3px] border-orange-100 bg-orange-50 text-orange-600 dark:border-orange-900 dark:bg-orange-950/40 dark:text-orange-400">
              <GraduationCap className="size-10" aria-hidden="true" />
            </div>
            <h3 id="mentor-name" className="mb-0.5 text-base font-semibold text-foreground">Srorng Sokcheat</h3>
            <p className="mb-2.5 text-[13px] font-medium text-orange-600 dark:text-orange-400">Team Mentor</p>
            <p className="text-[13px] leading-[1.5] text-muted-foreground">Mentor profile coming soon.</p>
          </article>

          <div className="mb-6 flex items-center gap-4"><h3 className="shrink-0 text-sm font-semibold">Our team members</h3><span aria-hidden="true" className="h-px flex-1 bg-border" /><span className="text-xs text-muted-foreground">6 people, one kitchen</span></div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="rounded-2xl border border-[#e7e2d8] bg-white p-6 text-center dark:border-border dark:bg-card">
                <div className="relative mx-auto mb-4 h-[88px] w-[88px] overflow-hidden rounded-full border-[3px] border-orange-100">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    width={88}
                    height={88}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h4 className="mb-0.5 text-base font-semibold text-[#1f1b16] dark:text-foreground">{member.name}</h4>
                <p className="mb-2.5 text-[13px] font-medium text-orange-600 dark:text-orange-400">{member.role}</p>
                <p className="text-[13px] leading-[1.5] text-[#6b6558] dark:text-muted-foreground">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="visit-heading" className="pb-16 sm:pb-24">
        <div className={container}>
          <div className="relative overflow-hidden rounded-3xl bg-[#24271e] px-6 py-10 text-white sm:p-12 lg:p-14">
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-32 size-80 rounded-full border-[45px] border-white/5" />
            <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-lg"><p className="mb-4 text-xs font-semibold tracking-[0.16em] text-orange-300 uppercase">There&apos;s a place for you here</p><h2 id="visit-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">Come taste the story.</h2><p className="mt-4 text-sm leading-relaxed text-white/70">Visit us along the river, share a meal with your favourite people, or find your next favourite dish on our menu.</p></div>
              <Link href="/product" className={cn(buttonVariants({ size: "lg" }), "h-12 w-fit shrink-0 rounded-full bg-orange-500 px-7 text-white hover:bg-orange-600")}>Browse menu <ArrowRight className="size-4" /></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
