
/* eslint-disable @next/next/no-img-element */

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Flame,
  MapPin,
  Soup,
  Star,
  Truck,
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
    name: "Sokha",
    role: "Founder & Head Chef",
    bio: "Still runs the same pushcart recipes she started with in 2016.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Dara",
    role: "Co-Founder & Operations",
    bio: "Keeps the kitchen running and the market runs on schedule.",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Chenda",
    role: "Sous Chef",
    bio: "Grill master — every skewer passes through her hands.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Vutha",
    role: "Front of House",
    bio: "The friendly face that greets every guest at the door.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Sreymom",
    role: "Pastry & Desserts",
    bio: "Turns leftover market fruit into daily dessert specials.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Pisach",
    role: "Delivery & Logistics",
    bio: "Makes sure every order arrives hot, in under 30 minutes.",
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=300&auto=format&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-amber-50/50 to-white py-20">
        <div className="mx-auto grid w-full max-w-[1152px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e7e2d8] bg-white/85 px-4 py-[7px] text-sm text-[#6b6558]">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Our Story · រឿងរបស់យើង
            </span>
            <h1 className="mb-5 text-[34px] leading-[1.1] font-bold tracking-[-0.02em] text-[#1f1b16] lg:text-[44px]">
              Street food soul.
              <br />
              <span className="text-orange-600">Home kitchen heart.</span>
            </h1>
            <p className="mb-7 max-w-[480px] text-lg text-[#6b6558]">
              We started with a tiny cart by the river and a stubborn belief:
              good ingredients, real fire, and generous hands make honest Khmer
              food.
            </p>
            <div className="mb-7 flex flex-wrap gap-3">
              <Link
                href="/product"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-auto bg-orange-600 px-6 py-[13px] text-[15px] font-semibold text-white hover:bg-orange-700"
                )}
              >
                Explore Menu
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-auto border-[#e7e2d8] px-6 py-[13px] text-[15px] font-semibold text-[#1f1b16]"
                )}
              >
                Back to Home
              </Link>
            </div>
            <div className="flex flex-wrap gap-7 border-t border-[#e7e2d8] pt-5 text-sm text-[#6b6558]">
              <span className="flex items-center gap-2">
                <MapPin className="size-4 text-orange-500" />
                Riverside, Phnom Penh
              </span>
              <span className="flex items-center gap-2">
                <Clock className="size-4 text-orange-500" />
                Open 7 days a week
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#e7e2d8] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop"
                alt="Fresh vegetarian ingredients"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -top-5 -right-4 flex items-center gap-2 rounded-2xl border border-[#e7e2d8] bg-white px-4 py-2.5 text-sm font-semibold text-[#1f1b16] shadow-[0_10px_25px_rgba(0,0,0,0.1)] max-md:relative max-md:top-auto max-md:right-auto max-md:mt-3 max-md:shadow-none">
              <Star className="size-4 fill-yellow-400 text-yellow-400" />
              4.9 <span className="font-normal text-[#6b6558]">· 1,200+ reviews</span>
            </div>
            <div className="absolute -bottom-6 left-6 flex items-center gap-2 rounded-2xl border border-[#e7e2d8] bg-white p-3 px-4 shadow-[0_10px_25px_rgba(0,0,0,0.1)] max-md:relative max-md:bottom-auto max-md:left-auto max-md:mt-3 max-md:shadow-none">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <Truck className="size-[18px]" />
              </span>
              <div>
                <div className="text-sm font-semibold text-[#1f1b16]">
                  Cooked fresh daily
                </div>
                <div className="text-xs text-[#6b6558]">
                  No shortcuts, no frozen anything
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20">
        <div className="mx-auto max-w-[680px] px-6 text-center">
          <p className="mb-5 text-lg leading-[1.7] text-[#1f1b16]">
            Mhob Khmer was born in 2016 on a humble pushcart by the Tonlé Sap
            river. What began as a few bowls of kuy teav for the morning market
            crowd grew — thanks to our regulars — into the kitchen you see
            today.
          </p>
          <p className="text-base leading-[1.7] text-[#6b6558]">
            We still cook the same way we always have: shop the market at dawn,
            build every stock from scratch, and grill over real charcoal. Good
            food, great vibes — that promise hasn&apos;t changed.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#f6f3ec] py-20">
        <div className="mx-auto w-full max-w-[1152px] px-6">
          <div className="mb-12 max-w-[600px]">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e7e2d8] bg-white/85 px-4 py-[7px] text-sm text-[#6b6558]">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Why Mhob Khmer · ហេតុអ្វី?
            </span>
            <h2 className="text-[32px] font-bold tracking-[-0.01em] text-[#1f1b16]">
              What we promise
            </h2>
          </div>

          <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-[#e7e2d8] bg-white p-6">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Icon className="size-[22px]" />
                </span>
                <h3 className="mb-1.5 text-[17px] font-semibold text-[#1f1b16]">{title}</h3>
                <p className="text-sm leading-[1.5] text-[#6b6558]">{description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 rounded-3xl border border-[#e7e2d8] bg-white p-10 text-center md:grid-cols-3">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-[32px] font-extrabold text-orange-600">{value}</p>
                <p className="mt-1 text-sm text-[#6b6558]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20">
        <div className="mx-auto w-full max-w-[1152px] px-6">
          <div className="mb-12 max-w-[600px]">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#e7e2d8] bg-white/85 px-4 py-[7px] text-sm text-[#6b6558]">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Meet the Team · ក្រុមការងារ
            </span>
            <h2 className="text-[32px] font-bold tracking-[-0.01em] text-[#1f1b16]">
              The people behind the kitchen
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl border border-[#e7e2d8] bg-white p-6 text-center">
                <div className="relative mx-auto mb-4 h-[88px] w-[88px] overflow-hidden rounded-full border-[3px] border-orange-100">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-0.5 text-base font-semibold text-[#1f1b16]">{member.name}</h3>
                <p className="mb-2.5 text-[13px] font-medium text-orange-600">{member.role}</p>
                <p className="text-[13px] leading-[1.5] text-[#6b6558]">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto w-full max-w-[1152px] px-6">
          <div className="flex flex-wrap items-center justify-between gap-8 rounded-3xl bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 p-12 text-white">
            <div>
              <h2 className="mb-2.5 text-[30px] font-bold text-white">Come taste the story</h2>
              <p className="text-[15px] text-orange-50/90">
                Visit us along the river, or browse the menu and order ahead.
              </p>
            </div>
            <Link
              href="/product"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-auto bg-white px-7 py-3.5 text-[15px] font-semibold text-orange-600 hover:bg-orange-50"
              )}
            >
              Browse Menu
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

