
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
          About us
        </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          We build products that make everyday experiences better.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Our team is focused on creating simple, useful, and beautiful digital
          experiences for people and businesses. We care about clarity,
          performance, and value from the very first idea to the final launch.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/">
            <Button>Back home</Button>
          </Link>
          <Link href="/product">
            <Button variant="outline">View products</Button>
          </Link>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Mission</h2>
            <p className="mt-3 text-slate-600">
              Help brands turn ideas into practical, high-impact experiences.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Vision</h2>
            <p className="mt-3 text-slate-600">
              Build products that feel intuitive, modern, and trustworthy.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Values</h2>
            <p className="mt-3 text-slate-600">
              Simplicity, quality, collaboration, and long-term user value.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

