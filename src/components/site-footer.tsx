import Link from "next/link";
import {
  Camera,
  ChefHat,
  Globe,
  Mail,
  MapPin,
  Phone,
  Video,
} from "lucide-react";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/product" },
  { label: "About Us", href: "/about" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Login", href: "/login" },
];

const contactItems = [
  { icon: MapPin, text: "123 Riverside, Phnom Penh, Cambodia" },
  { icon: Phone, text: "+855 12 345 678" },
  { icon: Mail, text: "hello@mhob-m2.kh" },
];

const socialLinks = [
  { icon: Globe, label: "Facebook" },
  { icon: Camera, label: "Instagram" },
  { icon: Video, label: "YouTube" },
];

const openingHours = [
  { days: "Mon – Fri", time: "10:00 – 21:00", highlight: false },
  { days: "Sat – Sun", time: "09:00 – 22:00", highlight: false },
  { days: "Holidays", time: "Closed", highlight: true },
];

export default function SiteFooter() {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-red-500 text-white">
                <ChefHat className="size-5" />
              </span>
              <span className="text-lg font-bold text-white">
                Mhob-M2
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-400">
              Authentic Cambodian street food and home-cooked classics, made
              fresh every single day.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-lg border border-neutral-800 text-neutral-400 transition-colors hover:border-orange-500 hover:bg-orange-500/10 hover:text-orange-400"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              {exploreLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-neutral-400 transition-colors hover:text-orange-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              {contactItems.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3 text-neutral-400">
                  <Icon className="mt-0.5 size-4 shrink-0 text-orange-500" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
              Opening Hours
            </h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              {openingHours.map(({ days, time, highlight }) => (
                <li key={days} className="flex justify-between gap-4">
                  <span>{days}</span>
                  <span
                    className={highlight ? "text-orange-400" : "text-white"}
                  >
                    {time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 text-sm text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Mhob-M2 Kitchen. All rights reserved.</p>
          <p>
            Made with <span className="text-red-500">❤</span> in Phnom Penh
          </p>
        </div>
      </div>
    </footer>
  );
}