"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ChefHat,
  Menu as MenuIcon,
  Search,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import styles from "./site-header.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/product" },
  { label: "About Us", href: "/about" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Login", href: "/login" },
];

export default function SiteHeader() {
  const menuRef = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    if (menuRef.current) menuRef.current.open = false;
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="/" className={styles.brand} aria-label="Mhob-M2 home">
          <span className={styles.brandMark}>
            <ChefHat size={22} strokeWidth={1.8} />
          </span>
          <span>Mhob-M2</span>
        </Link>

        <div className={styles.navLinks}>
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <Link href="/product" aria-label="Search">
            <Search size={19} />
          </Link>
          <Link href="/dashboard" aria-label="Your profile">
            <UserRound size={19} />
          </Link>
          <Link
            href="/product"
            className={styles.cart}
            aria-label="Shopping bag, 2 items"
          >
            <ShoppingBag size={20} />
            <span>2</span>
          </Link>
        </div>

        <details ref={menuRef} className={styles.mobileMenu}>
          <summary aria-label="Open navigation menu">
            <MenuIcon size={24} />
          </summary>
          <div>
            {navLinks.map(({ label, href }) => (
              <Link key={href} href={href} onClick={closeMenu}>
                {label}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}