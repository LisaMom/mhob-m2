import { z } from "zod";

export type AuthMode = "login" | "register";
export type AuthValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
export type AuthErrors = Partial<Record<keyof AuthValues, string>>;

export const passwordRequirements = [
  { label: "12–128 characters", test: (value: string) => value.length >= 12 && value.length <= 128 },
  { label: "An uppercase and a lowercase letter", test: (value: string) => /\p{Lu}/u.test(value) && /\p{Ll}/u.test(value) },
  { label: "At least one number", test: (value: string) => /\p{N}/u.test(value) },
  { label: "At least one symbol", test: (value: string) => /[^\p{L}\p{M}\p{N}\s]/u.test(value) },
] as const;

export function validateAuth(values: AuthValues, mode: AuthMode): AuthErrors {
  const errors: AuthErrors = {};
  const email = values.email.trim();
  if (mode === "register") {
    const name = values.fullName.trim();
    if (name.length < 2 || name.length > 100 || !/\p{L}/u.test(name) || !/^[\p{L}\p{M} .'’\-]+$/u.test(name)) {
      errors.fullName = "Enter your full name using 2–100 characters (letters, spaces, apostrophes, periods, or hyphens).";
    }
  }
  if (!email) errors.email = "Enter your email address.";
  else if (email.length > 254 || !z.email().safeParse(email).success) {
    errors.email = "Enter a valid email address, like you@example.com.";
  }
  // Allow existing passwords at login even if they predate the registration
  // policy. Never trim or otherwise alter a password before authentication.
  if (!values.password.trim()) errors.password = "Enter your password.";
  else if (values.password.length > 128) errors.password = "Use no more than 128 characters.";
  else if (mode === "register" && !passwordRequirements.every((rule) => rule.test(values.password))) {
    errors.password = "Choose a password that meets all four requirements below.";
  }
  if (mode === "register") {
    if (!values.confirmPassword) errors.confirmPassword = "Type your password again.";
    else if (values.confirmPassword !== values.password) errors.confirmPassword = "Passwords do not match.";
  }
  return errors;
}
