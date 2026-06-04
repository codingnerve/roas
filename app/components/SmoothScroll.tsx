"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Inertial (smooth) scrolling powered by Lenis, synced with GSAP ScrollTrigger.
 * Dampens harsh mouse-wheel stop/start for a premium, native-app feel and keeps
 * every ScrollTrigger-driven reveal/pin perfectly aligned with the virtual scroll.
 *
 * Skipped on touch devices (native momentum scroll is better there) and when the
 * user prefers reduced motion.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReduced || isTouch) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.15,
      // expo-out style easing — fast start, soft settle
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // smoothly scroll to in-page #anchor links (nav, CTAs, offcanvas menu);
      // negative offset leaves room for the fixed sticky header
      anchors: { offset: -90 },
    });

    // Expose for any imperative scrollTo elsewhere
    (window as unknown as { lenis?: Lenis }).lenis = lenis;

    // Drive ScrollTrigger from Lenis' virtual scroll position
    lenis.on("scroll", ScrollTrigger.update);

    // Run Lenis off GSAP's ticker so motion stays in lockstep with animations
    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Triggers were created by GsapInitializer; realign measurements now
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(raf);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  return null;
}
