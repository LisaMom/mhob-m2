import Link from "next/link";
import SiteHeader from "@/components/site-header";
import { ChefHat, Home, Soup, Utensils } from "lucide-react";
import InteractivePlate from "./interactive-plate";
import styles from "./not-found.module.css";

function ChalkDecorations() {
  return (
    <div className={styles.decorations} aria-hidden="true">
      <ChefHat className={`${styles.doodle} ${styles.chefHat}`} />
      <Utensils className={`${styles.doodle} ${styles.utensils}`} />
      <Soup className={`${styles.doodle} ${styles.soup}`} />
      <svg className={`${styles.chalkSketch} ${styles.tomato}`} viewBox="0 0 120 120">
        <circle cx="60" cy="63" r="35" />
        <path d="M60 29c-8-11-11-17-9-22M58 30c8-8 16-11 25-10M59 31c-9-3-17-2-25 2" />
        <path d="M42 48c10 7 27 8 37-1M40 75c12-9 27-9 41 1" />
      </svg>
      <svg className={`${styles.chalkSketch} ${styles.leaf}`} viewBox="0 0 130 90">
        <path d="M9 77C36 25 75 5 121 12 103 57 68 78 9 77Z" />
        <path d="M17 72c30-17 57-34 93-54M47 55 43 32M70 42l-1-24M72 42l25 8" />
      </svg>
      <span className={`${styles.chalkArc} ${styles.arcOne}`} />
      <span className={`${styles.chalkArc} ${styles.arcTwo}`} />
      <span className={`${styles.chalkDots} ${styles.dotsOne}`}>•••</span>
      <span className={`${styles.chalkDots} ${styles.dotsTwo}`}>✦</span>
    </div>
  );
}

export default function NotFoundPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <ChalkDecorations />
      <main className={styles.content}>
        <div className={styles.intro}>
          <span className={`${styles.accentStroke} ${styles.strokeLeft}`} aria-hidden="true" />
          <p className={styles.eyebrow}>Well, this is awkward...</p>
          <h1>Oops!</h1>
          <span className={`${styles.accentStroke} ${styles.strokeRight}`} aria-hidden="true" />
          <p className={styles.subtitle}>This page is not on the menu</p>
        </div>
        <div className={styles.plateWrap}>
          <span className={`${styles.crumb} ${styles.crumbOne}`} aria-hidden="true" />
          <span className={`${styles.crumb} ${styles.crumbTwo}`} aria-hidden="true" />
          <span className={`${styles.crumb} ${styles.crumbThree}`} aria-hidden="true" />
          <InteractivePlate />
        </div>
        <section className={styles.message} aria-labelledby="error-code">
          <h2 id="error-code">404</h2>
          <p>The page you’re looking for doesn’t exist<br className={styles.desktopBreak} /> or has been moved somewhere else.</p>
          <Link href="/" className={styles.homeButton}><Home size={18} strokeWidth={2.3} />Go Back Home</Link>
        </section>
      </main>
    </div>
  );
}
