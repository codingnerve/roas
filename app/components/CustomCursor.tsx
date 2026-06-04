"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const [hoverText, setHoverText] = useState("");
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringProject, setIsHoveringProject] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [hasMoved, setHasMoved] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect mobile or touch-only device
    const checkDevice = () => {
      const match = window.matchMedia("(pointer: coarse)");
      setIsMobile(match.matches);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);

    if (isMobile) return;

    // GSAP high-performance quickTo
    const dotX = gsap.quickTo(dotRef.current, "x", { duration: 0.08, ease: "power3.out" });
    const dotY = gsap.quickTo(dotRef.current, "y", { duration: 0.08, ease: "power3.out" });
    const followerX = gsap.quickTo(followerRef.current, "x", { duration: 0.35, ease: "power3.out" });
    const followerY = gsap.quickTo(followerRef.current, "y", { duration: 0.35, ease: "power3.out" });

    // Initial position offscreen and set centering
    gsap.set(dotRef.current, { x: -100, y: -100, xPercent: -50, yPercent: -50 });
    gsap.set(followerRef.current, { x: -100, y: -100, xPercent: -50, yPercent: -50 });

    let moved = false;
    const handleMouseMove = (e: MouseEvent) => {
      if (!moved) {
        moved = true;
        setHasMoved(true);
      }
      dotX(e.clientX);
      dotY(e.clientY);
      followerX(e.clientX);
      followerY(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if target is a link, button, or interactive element
      const isLink = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("a") || 
        target.closest("button") ||
        target.classList.contains("roas-circle-btn") ||
        target.closest(".roas-circle-btn");
      
      setIsHoveringLink(!!isLink);

      // Check if target requires cursor text (e.g. portfolio cards)
      const projectCard = target.closest("[data-cursor-text]");
      if (projectCard) {
        const text = projectCard.getAttribute("data-cursor-text") || "View Project";
        setHoverText(text);
        setIsHoveringProject(true);
      } else {
        setIsHoveringProject(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Inner Dot (Electric Green) */}
      <div
        ref={dotRef}
        className="custom-cursor fixed top-0 left-0 w-2 h-2 bg-[#204E3D] rounded-full pointer-events-none z-[9999]"
        style={{ opacity: hasMoved ? (isHoveringProject ? 0 : 1) : 0, transition: "opacity 0.2s" }}
      />
      
      {/* Follower Outer Circle */}
      <div
        ref={followerRef}
        className={`custom-cursor-follower fixed top-0 left-0 rounded-full pointer-events-none z-[9998] flex items-center justify-center
          ${isHoveringProject ? "custom-cursor-follower is-hovering-project" : ""}
          ${isHoveringLink && !isHoveringProject ? "custom-cursor-follower is-hovering-link" : ""}
        `}
        style={{ opacity: hasMoved ? 1 : 0, transition: "opacity 0.25s, width 0.3s, height 0.3s, background-color 0.3s, border-color 0.3s" }}
      >
        <span className="custom-cursor-text text-[10px] font-bold tracking-widest text-black uppercase select-none opacity-0 transition-opacity duration-200">
          {hoverText}
        </span>
      </div>
    </>
  );
}
