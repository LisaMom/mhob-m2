import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChefHat, Sparkles } from "lucide-react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden bg-orange-50/50 px-4 py-10 dark:bg-background sm:px-6 sm:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-40 -z-10 size-[500px] rounded-full bg-orange-200/30 blur-3xl dark:bg-orange-950/30" />
      <div className="mx-auto max-w-5xl">
        <Link href="/" className="mb-6 inline-flex items-center gap-2 rounded text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-orange-500">
          <ArrowLeft className="size-4" /> Back to home
        </Link>
        <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-orange-950/5 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="relative flex flex-col justify-between overflow-hidden bg-[#24271e] p-8 text-white sm:p-10">
            <Link href="/" className="relative z-10 flex w-fit items-center gap-3 rounded font-bold tracking-wide focus-visible:outline-2 focus-visible:outline-orange-400">
              <span className="grid size-10 place-items-center rounded-2xl bg-orange-500"><ChefHat className="size-6" /></span>
              Mhob-M2
            </Link>
            <div className="relative z-10 mt-10 lg:mt-16">
              <p className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-orange-300 uppercase"><Sparkles className="size-4" /> Your seat at the table</p>
              <h2 className="max-w-sm text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Good food.<br /><span className="text-orange-300">Even better company.</span></h2>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">A little Khmer comfort, a few new favourites, and a warm welcome. Make yourself at home.</p>
            </div>
            <div className="relative mx-auto mt-6 hidden aspect-square w-full max-w-[290px] lg:block">
              <div aria-hidden="true" className="absolute inset-8 rounded-full bg-orange-400/15 blur-2xl" />
              <Image src="/images/intact-pasta-plate-transparent.png" alt="A freshly prepared plate of pasta" fill sizes="290px" className="object-contain drop-shadow-2xl" />
            </div>
            <p className="relative mt-8 hidden text-xs tracking-wide text-white/50 lg:block">Made with care. Shared with love.</p>
          </aside>
          <div className="px-6 py-8 sm:p-10 lg:px-12">{children}</div>
        </div>
      </div>
    </section>
  );
}
