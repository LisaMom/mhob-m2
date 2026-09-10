"use client";

import { useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle({ className }: { className?: string }) {
  useEffect(() => {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
    function syncTheme() {
      let theme: string | null = null;
      try { theme = localStorage.getItem("mhob-theme"); } catch { return; }
      document.documentElement.classList.toggle(
        "dark",
        theme === "dark" || (theme !== "light" && systemTheme.matches),
      );
    }
    function onStorage(event: StorageEvent) {
      if (event.key === "mhob-theme" || event.key === null) syncTheme();
    }
    systemTheme.addEventListener("change", syncTheme);
    window.addEventListener("storage", onStorage);
    return () => {
      systemTheme.removeEventListener("change", syncTheme);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  function toggleTheme() {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("mhob-theme", dark ? "dark" : "light"); } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }

  return (
    <button type="button" className={className} onClick={toggleTheme}>
      <Moon size={20} className="dark:hidden" aria-hidden="true" />
      <Sun size={20} className="hidden dark:block" aria-hidden="true" />
      <span className="sr-only dark:hidden">Switch to dark mode</span>
      <span className="sr-only hidden dark:block">Switch to light mode</span>
    </button>
  );
}
