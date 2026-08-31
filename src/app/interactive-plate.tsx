"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./not-found.module.css";

export default function InteractivePlate() {
  const areaRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const previousAngleRef = useRef<number | null>(null);
  const rotationRef = useRef(0);
  const repairTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const area = areaRef.current;
    const plate = tiltRef.current;
    if (!area || !plate) return;

    function followPointer(event: PointerEvent) {
      if (event.pointerType === "touch") return;

      const rect = area!.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);
      const activeRadius = Math.max(rect.width, rect.height) * 1.6;
      const minimumRadius = Math.min(rect.width, rect.height) * 0.2;

      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        if (distance > activeRadius || distance < minimumRadius) {
          previousAngleRef.current = null;
          plate!.classList.remove(styles.plateTracking);
          area!.classList.remove(styles.isBroken);
          plate!.style.transform = `rotateZ(${rotationRef.current}deg)`;
          return;
        }

        const normalizedX = Math.max(-1, Math.min(1, deltaX / (rect.width / 2)));
        const normalizedY = Math.max(-1, Math.min(1, deltaY / (rect.height / 2)));
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        if (previousAngleRef.current !== null) {
          let angleChange = angle - previousAngleRef.current;
          if (angleChange > 180) angleChange -= 360;
          if (angleChange < -180) angleChange += 360;
          rotationRef.current += angleChange;

          if (Math.abs(angleChange) > 0.2) {
            area!.classList.add(styles.isBroken);
            if (repairTimerRef.current) clearTimeout(repairTimerRef.current);
            repairTimerRef.current = setTimeout(() => {
              area!.classList.remove(styles.isBroken);
            }, 900);
          }
        }
        previousAngleRef.current = angle;

        plate!.classList.add(styles.plateTracking);
        plate!.style.transform = `rotateX(${-normalizedY * 10}deg) rotateY(${normalizedX * 10}deg) rotateZ(${rotationRef.current}deg)`;
      });
    }

    window.addEventListener("pointermove", followPointer, { passive: true });
    return () => {
      window.removeEventListener("pointermove", followPointer);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (repairTimerRef.current) clearTimeout(repairTimerRef.current);
    };
  }, []);

  return (
    <div
      ref={areaRef}
      className={styles.platePointerArea}
    >
      <div ref={tiltRef} className={styles.plateTilt}>
        <Image
          src="/images/intact-pasta-plate-transparent.png"
          alt="An intact ceramic plate with pasta, tomatoes, and fresh herbs"
          width={560}
          height={560}
          className={`${styles.plate} ${styles.plateLayer} ${styles.intactPlate}`}
          priority
        />
        <Image
          src="/images/broken-pasta-plate.png"
          alt=""
          width={560}
          height={560}
          className={`${styles.plate} ${styles.plateLayer} ${styles.brokenPlate}`}
          priority
        />
      </div>
    </div>
  );
}
