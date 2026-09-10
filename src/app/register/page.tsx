import type { Metadata } from "next";
import AuthLayout from "@/components/auth-layout";
import { LoginForm } from "@/components/login-form";

export const metadata: Metadata = { title: "Create an account — Mhob-M2" };

export default function RegisterPage() {
  return <AuthLayout><LoginForm mode="register" /></AuthLayout>;
}
