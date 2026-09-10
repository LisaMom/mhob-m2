import type { CSSProperties } from "react";
import { Coffee, CupSoda, Soup, Sparkles, Star, Utensils } from "lucide-react";
import styles from "./ambient-motion.module.css";

// Fixed positions keep server rendering stable and avoid animation timers.
const particles = [
  { icon: Sparkles, left: "3%", top: "8%", size: 18, duration: 23, delay: -5 },
  { icon: Coffee, left: "94%", top: "15%", size: 27, duration: 31, delay: -19 },
  { icon: Soup, left: "5%", top: "42%", size: 28, duration: 34, delay: -11 },
  { icon: Star, left: "96%", top: "52%", size: 16, duration: 27, delay: -8 },
  { icon: CupSoda, left: "2%", top: "76%", size: 25, duration: 32, delay: -22 },
  { icon: Sparkles, left: "92%", top: "86%", size: 21, duration: 25, delay: -15 },
  { icon: Star, left: "14%", top: "24%", size: 14, duration: 29, delay: -7 },
  { icon: Utensils, left: "84%", top: "36%", size: 22, duration: 36, delay: -25 },
  { icon: Sparkles, left: "11%", top: "62%", size: 17, duration: 28, delay: -18 },
  { icon: Star, left: "87%", top: "69%", size: 15, duration: 30, delay: -12 },
] as const;

export default function AmbientMotion() {
  return (
    <div className={styles.layer} aria-hidden="true">
      {particles.map(({ icon: Icon, left, top, size, duration, delay }, index) => (
        <span
          key={index}
          className={styles.particle}
          style={{
            left,
            top,
            "--float-duration": `${duration}s`,
            "--float-delay": `${delay}s`,
            "--float-x": index % 2 ? "-12px" : "12px",
            "--float-turn": index % 2 ? "-14deg" : "14deg",
          } as CSSProperties}
        >
          <Icon size={size} strokeWidth={1.3} focusable="false" />
        </span>
      ))}
    </div>
  );
}
