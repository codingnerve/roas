"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "Do I need an existing ad account?",
    answer: "No. We can set everything up from scratch — ad accounts, pixels, tracking, and creative strategy.",
  },
  {
    question: "What budget do I need to get started?",
    answer: "We work with a range of budgets. Book a free consultation and we'll advise what makes sense for your goals.",
  },
  {
    question: "How long before I see results?",
    answer: "Most clients see meaningful data within the first 2–4 weeks. Scaling typically happens from month 2 onwards.",
  },
  {
    question: "Which platforms do you work on?",
    answer: "Meta (Facebook & Instagram), Google Ads, and TikTok Ads. We recommend platforms based on your audience and product.",
  },
  {
    question: "What makes you different?",
    answer: "We're obsessively focused on ROAS — not impressions, not clicks. Every decision we make is tied back to your return.",
  },
  {
    question: "Do you offer one-off audits?",
    answer: "Yes. If you just need a fresh set of expert eyes on your account, our standalone audit service is a great starting point.",
  },
];

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(4); // "What makes you different?" active by default

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      {/* Left Column: Heading and Star */}
      <div className="lg:col-span-5 space-y-6">
        <span className="text-[12px] font-heading font-black uppercase tracking-widest text-[#00C475]">
          // FAQ
        </span>
        <h2 className="text-[52px] font-heading font-black leading-none text-[#0B3621] uppercase">
          Common Questions
        </h2>
        <p className="text-[16px] text-[#4A5D54] max-w-sm leading-relaxed font-body">
          Got questions about budgets, platforms, or timelines? Here is how we run paid advertising at The Roas Haus.
        </p>
        
        {/* Rotating 4-point Star Sparkle Shape */}
        <div className="pt-8 pl-4">
          <div className="w-24 h-24 rotate-me text-[#00C475] flex items-center justify-center">
            <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
              <path d="M12 0 C12 6.6 17.4 12 24 12 C17.4 12 12 17.4 12 24 C12 17.4 6.6 12 0 12 C6.6 12 12 6.6 12 0 Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right Column: Accordions */}
      <div className="lg:col-span-7 space-y-4">
        {FAQ_DATA.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className={`border border-[#E2EBE6] rounded-2xl overflow-hidden transition-all duration-300 bg-white
                ${isOpen ? "border-[#00C475] shadow-[0_10px_30px_rgba(0,196,117,0.03)]" : "hover:border-[#0B3621]/40"}
              `}
            >
              <button
                className="w-full flex justify-between items-center py-6 px-8 text-left transition-colors duration-200"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-heading text-[18px] md:text-[20px] font-bold text-[#0B3621]">
                  {item.question}
                </span>
                
                {/* Plus / Minus icon with circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300
                    ${isOpen ? "bg-[#00C475] border-[#00C475] text-black rotate-45" : "border-[#E2EBE6] text-[#0B3621] hover:border-[#0B3621]"}
                  `}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </div>
              </button>

              {/* Collapsible Content */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden`}
                style={{
                  maxHeight: isOpen ? "200px" : "0",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="px-8 pb-6 pt-0 font-body text-[16px] text-[#4A5D54] leading-relaxed border-t border-[#E2EBE6] mt-2">
                  <div className="py-4 font-body">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
