import React from 'react'
import Link from 'next/link'

type AboutProps = {
  title?: string
  description?: string
}

export default function About({
  title = 'About Us',
  description = 'We build products that make everyday experiences better.',
}: AboutProps) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
        About us
      </p>

      <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{title}</h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-600">{description}</p>

      <div className="mt-8 flex gap-4">
        <Link href="/">
          <a className="inline-block rounded bg-emerald-600 px-4 py-2 text-white">Home</a>
        </Link>
        <Link href="/product">
          <a className="inline-block rounded border border-slate-200 px-4 py-2">Products</a>
        </Link>
      </div>
    </section>
  )
}
