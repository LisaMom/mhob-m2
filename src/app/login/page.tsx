import type { Metadata } from "next";
import AuthLayout from "@/components/auth-layout";
import { LoginForm } from "@/components/login-form";

export const metadata: Metadata = { title: "Login — Mhob-M2" };

export default function LoginPage() {
  return <AuthLayout><LoginForm /></AuthLayout>;
}
