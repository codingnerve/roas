"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Preloader() {
  // Wrapper ref — GSAP removes it from view at the end
  const loaderRef = useRef<HTMLDivElement>(null);
  // Counter section ref — hidden via GSAP after count-up
  const counterSectionRef = useRef<HTMLDivElement>(null);
  // Counter text and bar — written directly by GSAP
  const counterTextRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  // Wordmark section ref — shown by GSAP after counter hides
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const counterSection = counterSectionRef.current;
    const wordmark = wordmarkRef.current;

    if (!loader || !counterSection || !wordmark) return;

    // --- Initial states set directly on refs (no React state) ---
    gsap.set(counterSection, { y: 60, opacity: 0 });
    gsap.set(wordmark, { display: "none", opacity: 0 });

    const counterObj = { val: 1.0 };

    const timeline = gsap.timeline({
      onComplete: () => {
        // Remove loader from DOM via display none (no React re-render flicker)
        if (loader) loader.style.display = "none";
        // Signal hero animations to start
        window.dispatchEvent(new Event("preloaderDone"));
      },
    });

    // 1. Slide counter section up into view
    timeline.to(counterSection, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
    });

    // 2. Count ROAS multiplier 1.0 → 8.5 — direct DOM writes, no React state
    timeline.to(counterObj, {
      val: 8.5,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: () => {
        if (counterTextRef.current) {
          counterTextRef.current.textContent = `${counterObj.val.toFixed(1)}x ROAS`;
        }
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${(counterObj.val / 8.5) * 100}%`;
        }
      },
    }, "<");

    // 3. Fade counter section out
    timeline.to(counterSection, {
      opacity: 0,
      scale: 0.85,
      duration: 0.3,
      ease: "power3.in",
    });

    // 4. Show wordmark section (already in DOM, just hidden)
    timeline.set(wordmark, { display: "flex" });
    timeline.to(wordmark, { opacity: 1, duration: 0.1 });

    // 5. Stagger logo letters up — they're always in the DOM, GSAP finds them instantly
    timeline.fromTo(
      wordmark.querySelectorAll(".load-text-char"),
      { y: "110%", color: "#000000" },
      {
        y: 0,
        color: "#FFFFFF",
        stagger: 0.06,
        duration: 0.5,
        ease: "power3.out",
      }
    );

    // 6. Letters exit upward
    timeline.to(wordmark.querySelectorAll(".load-text-char"), {
      y: "-110%",
      stagger: 0.03,
      duration: 0.3,
      delay: 0.8,
      ease: "power3.in",
    });

    // 7. White SVG wave sweeps up from bottom
    timeline.to("#loader-svg-path", {
      attr: { d: "M0 0 L100 0 L100 100 Q50 50 0 100 Z" },
      duration: 0.5,
      ease: "power2.in",
    });

    timeline.to("#loader-svg-path", {
      attr: { d: "M0 0 L100 0 L100 100 Q50 100 0 100 Z" },
      duration: 0.2,
      ease: "power1.out",
      onComplete: () => {
        if (loader) loader.style.backgroundColor = "transparent";
      },
    });

    // 8. Pull white mask off screen to reveal the page
    timeline.to("#loader-svg-path", {
      attr: { d: "M0 0 L100 0 L100 0 Q50 0 0 0 Z" },
      duration: 0.6,
      ease: "power3.out",
    });

    timeline.to(loader, {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.2,
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      style={{ backgroundColor: "#080E0B" }}
      className="loader-wrap fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden"
    >
      {/* SVG curved wave mask */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          id="loader-svg-path"
          fill="#FFFFFF"
          d="M0 100 L100 100 L100 100 Q50 100 0 100 Z"
        />
      </svg>

      <div className="relative z-10 text-center">

        {/* ── Section A: ROAS Counter ── always in DOM, shown/hidden via GSAP */}
        <div
          ref={counterSectionRef}
          className="flex flex-col items-center justify-center space-y-3"
        >
          <span
            style={{ color: "#FFFFFF" }}
            className="text-[14px] font-heading font-black tracking-widest uppercase opacity-75"
          >
            OPTIMIZING RETURN ON AD SPEND
          </span>

          {/* Counter text — written directly by GSAP */}
          <div
            ref={counterTextRef}
            style={{ color: "#FFFFFF" }}
            className="text-[64px] sm:text-[96px] font-heading font-black leading-none tabular-nums"
          >
            1.0x ROAS
          </div>

          {/* Progress bar — width written directly by GSAP */}
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-[#204E3D] rounded-full"
              style={{ width: "0%" }}
            />
          </div>
        </div>

        {/* ── Section B: Wordmark ── always in DOM, shown by GSAP after counter */}
        <div
          ref={wordmarkRef}
          style={{ color: "#FFFFFF", flexDirection: "row", display: "none" }}
          className="load-text flex text-[48px] sm:text-[72px] font-heading font-black tracking-wider select-none overflow-hidden"
        >
          {"ROAS HAUS".split("").map((char, index) => (
            <span
              key={index}
              className="load-text-char inline-block mx-0.5"
              style={{
                width: char === " " ? "16px" : "auto",
                color: "#000000",
                transform: "translateY(110%)",
                display: "inline-block",
              }}
            >
              {char}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
