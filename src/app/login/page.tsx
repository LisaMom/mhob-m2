"use client"

import { LoginForm } from "@/components/login-form"
import { ChefHat } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 py-12 px-4 md:py-20">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center font-bold text-xl text-foreground">
          <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-red-500 text-white shadow-xs">
            <ChefHat className="size-5" />
          </div>
          Mhob-M2
        </Link>
        <LoginForm />
      </div>
    </div>
  )
}
