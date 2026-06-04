"use client";

import { useState, useEffect } from "react";
import OffCanvasMenu from "./OffCanvasMenu";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`main-header py-6 md:py-8 px-6 md:px-12 flex justify-between items-center transition-all duration-300 w-full select-none
          ${isSticky ? "is-sticky" : ""}`}
      >
        {/* Logo */}
        <a href="#" className="text-[24px] font-heading font-black text-[#080E0B] tracking-tight uppercase">
          ROAS HAUS<span className="text-[#00C475]">.</span>
        </a>

        {/* Center menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {[
            { label: "Home", href: "#home" },
            { label: "Services", href: "#services" },
            { label: "Process", href: "#process" },
            { label: "About", href: "#about" },
            { label: "FAQ", href: "#faq" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[15px] font-heading font-bold text-[#080E0B] hover:text-[#00C475] transition-colors relative group py-2"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00C475] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Action & Hamburger */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="roas-btn hidden sm:inline-flex">
            <div className="roas-btn-wrapper">
              <i>Book a Free Audit</i>
              <span>Book a Free Audit</span>
            </div>
          </a>

          {/* Hamburger Menu Trigger */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="w-12 h-12 rounded-full border border-[#E2EBE6] bg-white flex items-center justify-center text-[#080E0B] hover:border-[#00C475] hover:bg-[#00C475]/5 transition-colors"
            aria-label="Open sidebar menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Slide-out offcanvas panel */}
      <OffCanvasMenu isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
