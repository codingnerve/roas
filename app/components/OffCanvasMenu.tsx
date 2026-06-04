"use client";

import { useEffect } from "react";
import gsap from "gsap";

interface OffCanvasMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OffCanvasMenu({ isOpen, onClose }: OffCanvasMenuProps) {
  useEffect(() => {
    if (isOpen) {
      // Animate sidebar sliding in
      gsap.to(".sidebar-wrapper", {
        x: 0,
        duration: 0.6,
        ease: "power4.out",
      });
      // Animate backdrop appearing
      gsap.to(".sidebar-backdrop", {
        opacity: 0.5,
        pointerEvents: "auto",
        duration: 0.4,
      });
      // Animate inner content items with stagger
      gsap.fromTo(
        ".sidebar-item",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, delay: 0.2, ease: "power3.out" }
      );
    } else {
      // Slide sidebar out
      gsap.to(".sidebar-wrapper", {
        x: "100%",
        duration: 0.5,
        ease: "power4.inOut",
      });
      // Fade backdrop out
      gsap.to(".sidebar-backdrop", {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.4,
      });
    }
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="sidebar-backdrop fixed inset-0 z-[9900] bg-[#080E0B] opacity-0 pointer-events-none"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="sidebar-wrapper fixed top-0 right-0 bottom-0 z-[9950] w-[100%] max-w-[450px] bg-[#080E0B] text-white p-10 md:p-12 translate-x-full shadow-2xl flex flex-col justify-between overflow-y-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center sidebar-item">
          <div className="text-[24px] font-heading font-black text-[#00C475] tracking-tight">
            ROAS HAUS.
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#00C475] hover:bg-[#00C475] hover:text-black transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Agency Info */}
        <div className="my-12 space-y-8 flex-1 flex flex-col justify-center">
          <div className="space-y-4 sidebar-item">
            <h3 className="text-xs uppercase tracking-wider text-white/50 font-bold">
              Who We Are
            </h3>
            <p className="text-[16px] text-white/70 font-body leading-relaxed">
              We are a paid performance advertising agency built around one metric. 
              We don't run generic impressions campaigns. We design and scale highly profitable returns on Meta, Google, and TikTok.
            </p>
          </div>

          <div className="space-y-4 sidebar-item">
            <h3 className="text-xs uppercase tracking-wider text-white/50 font-bold">
              Get In Touch
            </h3>
            <div className="space-y-2 font-body text-white/80">
              <p className="flex items-center gap-3">
                <span className="text-[#00C475] font-bold">E:</span> hello@theroashaus.com
              </p>
              <p className="flex items-center gap-3">
                <span className="text-[#00C475] font-bold">A:</span> 120 Performance Blvd, Suite 100, New York
              </p>
            </div>
          </div>
        </div>

        {/* Footer / Socials */}
        <div className="space-y-6 sidebar-item">
          <h3 className="text-xs uppercase tracking-wider text-white/50 font-bold">
            Platforms We Scale
          </h3>
          <div className="flex gap-4">
            {["Meta", "Google", "TikTok", "LinkedIn"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-[14px] font-bold text-white/70 hover:text-[#00C475] transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
          <div className="text-[12px] text-white/40 pt-4 border-t border-white/5">
            &copy; {new Date().getFullYear()} The Roas Haus. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}
