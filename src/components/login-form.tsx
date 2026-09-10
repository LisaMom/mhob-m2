"use client";

import { useState } from "react";
import type { ComponentProps, SubmitEvent } from "react";
import Link from "next/link";
import { ArrowRight, Check, Circle, Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { passwordRequirements, validateAuth } from "@/lib/auth-validation";
import type { AuthMode, AuthValues } from "@/lib/auth-validation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initialValues: AuthValues = { fullName: "", email: "", password: "", confirmPassword: "" };

export function LoginForm({ mode = "login", className, ...props }: ComponentProps<"div"> & { mode?: AuthMode }) {
  const registering = mode === "register";
  const [values, setValues] = useState<AuthValues>(initialValues);
  const [touched, setTouched] = useState<Partial<Record<keyof AuthValues, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState({ password: false, confirmPassword: false });
  const [notice, setNotice] = useState("");
  const errors = validateAuth(values, mode);
  const fields: { name: keyof AuthValues; label: string; placeholder: string; autoComplete: string }[] = [
    ...(registering ? [{ name: "fullName" as const, label: "Full name", placeholder: "Your full name", autoComplete: "name" }] : []),
    { name: "email", label: "Email address", placeholder: "you@example.com", autoComplete: "email" },
    { name: "password", label: "Password", placeholder: registering ? "Create a strong password" : "Enter your password", autoComplete: registering ? "new-password" : "current-password" },
    ...(registering ? [{ name: "confirmPassword" as const, label: "Confirm password", placeholder: "Type your password again", autoComplete: "new-password" }] : []),
  ];

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setNotice("");
    const firstError = fields.find(({ name }) => errors[name]);
    if (firstError) {
      document.getElementById(`${mode}-${firstError.name}`)?.focus();
      return;
    }
    setNotice(registering
      ? "Registration is not available yet. Your details have not been saved. Please try again later."
      : "Sign-in is not available yet. Please try again later.");
  }

  return (
    <div className={cn("space-y-7", className)} {...props}>
      <div>
        <p className="mb-2 text-xs font-semibold tracking-[0.15em] text-orange-700 uppercase dark:text-orange-400">{registering ? "Join our table" : "Welcome back"}</p>
        <h1 className="text-3xl font-bold tracking-tight">{registering ? "Create your account" : "A little hungry?"}</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{registering ? "Good company starts here. Let's get to know you." : "Log in and make yourself at home."}</p>
      </div>
      <form noValidate onSubmit={handleSubmit} className="space-y-5">
        {fields.map(({ name, label, placeholder, autoComplete }) => {
          const isPassword = name === "password" || name === "confirmPassword";
          const shown = isPassword && visible[name];
          const error = (submitted || touched[name]) ? errors[name] : undefined;
          const id = `${mode}-${name}`;
          const Icon = name === "fullName" ? UserRound : name === "email" ? Mail : LockKeyhole;
          return (
            <div key={name} className="space-y-2">
              <label htmlFor={id} className="block text-sm font-semibold">{label}</label>
              <div className="relative">
                <Icon aria-hidden="true" className="pointer-events-none absolute top-3.5 left-3.5 z-10 size-4 text-muted-foreground" />
                <Input id={id} name={name} type={isPassword ? shown ? "text" : "password" : name === "email" ? "email" : "text"}
                  value={values[name]} autoComplete={autoComplete} placeholder={placeholder} required
                  aria-invalid={!!error}
                  aria-describedby={[error ? `${id}-error` : "", registering && name === "password" ? "password-requirements" : ""].filter(Boolean).join(" ") || undefined}
                  onBlur={() => setTouched((current) => ({ ...current, [name]: true }))}
                  onChange={(event) => { setValues((current) => ({ ...current, [name]: event.target.value })); setNotice(""); }}
                  className={cn("h-11 rounded-xl bg-background pl-10 focus-visible:border-orange-500 focus-visible:ring-orange-500/20", isPassword && "pr-12")}
                />
                {isPassword && <button type="button" aria-label={`${shown ? "Hide" : "Show"} ${label.toLowerCase()}`} aria-pressed={shown} aria-controls={id}
                  onClick={() => setVisible((current) => ({ ...current, [name]: !current[name] }))}
                  className="absolute top-0 right-0 grid size-11 cursor-pointer place-items-center rounded-xl text-muted-foreground hover:text-foreground focus-visible:outline-2 focus-visible:outline-orange-500">
                  {shown ? <EyeOff className="size-4" aria-hidden="true" /> : <Eye className="size-4" aria-hidden="true" />}
                </button>}
              </div>
              {error && <p id={`${id}-error`} role="alert" className="text-xs leading-relaxed text-destructive">{error}</p>}
              {registering && name === "password" && <ul id="password-requirements" className="grid gap-1.5 rounded-xl bg-muted/60 p-3">
                {passwordRequirements.map((rule) => {
                  const passed = rule.test(values.password);
                  const StatusIcon = passed ? Check : Circle;
                  return <li key={rule.label} className={cn("flex items-center gap-2 text-xs", passed ? "text-emerald-700 dark:text-emerald-400" : "text-muted-foreground")}><StatusIcon className="size-3.5 shrink-0" aria-hidden="true" /><span className="sr-only">{passed ? "Met: " : "Not met: "}</span>{rule.label}</li>;
                })}
              </ul>}
            </div>
          );
        })}
        {!registering && <div className="text-right"><button type="button" onClick={() => setNotice("Password reset is not available yet. Please try again later.")} className="cursor-pointer rounded text-xs font-medium text-orange-700 hover:underline focus-visible:outline-2 focus-visible:outline-orange-500 dark:text-orange-400">Forgot your password?</button></div>}
        <Button type="submit" className="h-12 w-full cursor-pointer rounded-xl bg-orange-600 font-semibold text-white shadow-md shadow-orange-600/15 hover:bg-orange-700">{registering ? "Create account" : "Log in"}<ArrowRight className="ml-1 size-4" /></Button>
      </form>
      <p className="text-center text-sm text-muted-foreground">{registering ? "Already part of the family? " : "New to our table? "}<Link href={registering ? "/login" : "/register"} className="rounded font-semibold text-orange-700 hover:underline focus-visible:outline-2 focus-visible:outline-orange-500 dark:text-orange-400">{registering ? "Log in" : "Create an account"}</Link></p>
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs text-muted-foreground"><span className="h-px flex-1 bg-border" />Or continue with<span className="h-px flex-1 bg-border" /></div>
        <div className="grid gap-3 sm:grid-cols-2">
          <Button variant="outline" type="button" className="h-11 rounded-xl" onClick={() => setNotice("Social sign-in is not available yet. Please try again later.")}>
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                      fill="currentColor"
                    />
                  </svg>
                  Login with Apple
                </Button>
                <Button variant="outline" type="button" className="h-11 rounded-xl" onClick={() => setNotice("Social sign-in is not available yet. Please try again later.")}>
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Login with Google
                </Button>
        </div>
      </div>
      <div role="status" aria-live="polite" aria-atomic="true">
        {notice && <p className="rounded-xl border border-orange-200 bg-orange-50 p-3 text-sm leading-relaxed text-orange-900 dark:border-orange-900 dark:bg-orange-950/30 dark:text-orange-200">{notice}</p>}
      </div>
    </div>
  );
}
