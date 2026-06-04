"use client";

import { useState } from "react";

export default function RoiCalculator() {
  const [spend, setSpend] = useState(15000);
  const [roas, setRoas] = useState(3.5);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const revenue = spend * roas;
  const netProfit = revenue - spend;

  return (
    <div className="roi-calculator-wrap">
      <div className="text-center mb-8">
        <span className="text-[12px] font-heading font-black uppercase tracking-widest text-[#00C475]">
          // ROI INTERACTIVE CALCULATOR
        </span>
        <h3 className="text-[32px] font-heading font-black text-white mt-2 leading-tight">
          Calculate Your Returns
        </h3>
        <p className="text-[14px] text-white/60 font-body mt-2">
          Adjust the sliders below to see what scaling your ROAS can do for your bottom line.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Block */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Ad Spend Slider */}
          <div className="space-y-3">
            <div className="flex justify-between font-heading font-bold text-white text-[15px]">
              <span>Monthly Ad Spend</span>
              <span className="text-[#00C475]">{formatCurrency(spend)}</span>
            </div>
            <input
              type="range"
              min="5000"
              max="150000"
              step="5000"
              value={spend}
              onChange={(e) => setSpend(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-[11px] text-white/40 font-body">
              <span>$5,000</span>
              <span>$150,000+</span>
            </div>
          </div>

          {/* ROAS Slider */}
          <div className="space-y-3">
            <div className="flex justify-between font-heading font-bold text-white text-[15px]">
              <span>Target ROAS</span>
              <span className="text-[#00C475]">{roas.toFixed(1)}x Return</span>
            </div>
            <input
              type="range"
              min="1.5"
              max="8.0"
              step="0.1"
              value={roas}
              onChange={(e) => setRoas(parseFloat(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-[11px] text-white/40 font-body">
              <span>1.5x</span>
              <span>8.0x</span>
            </div>
          </div>

        </div>

        {/* Results Block */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 p-6 rounded-2xl border border-white/5 relative">
          
          {/* Output 1: Projected Revenue */}
          <div className="p-4 space-y-1">
            <span className="text-[12px] font-heading font-bold text-white/50 uppercase tracking-wider block">
              Projected Revenue
            </span>
            <div className="text-[32px] sm:text-[36px] font-heading font-black text-white leading-none transition-all duration-300">
              {formatCurrency(revenue)}
            </div>
            <div className="text-[11px] font-body text-[#00C475] pt-1">
              Gross Monthly Ad Return
            </div>
          </div>

          {/* Output 2: Net profit */}
          <div className="p-4 space-y-1 bg-[#00C475]/10 rounded-xl border border-[#00C475]/10">
            <span className="text-[12px] font-heading font-bold text-[#00C475] uppercase tracking-wider block">
              Net Ad Profit
            </span>
            <div className="text-[32px] sm:text-[36px] font-heading font-black text-[#00C475] leading-none transition-all duration-300">
              {formatCurrency(netProfit)}
            </div>
            <div className="text-[11px] font-body text-white/70 pt-1">
              Pure Performance Lift
            </div>
          </div>

          {/* Graphical visualizer */}
          <div className="sm:col-span-2 pt-4 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00C475] inline-block animate-pulse" />
              <span className="text-[12px] font-heading font-bold text-white/70">
                Returns Ratio: {roas.toFixed(1)} : 1
              </span>
            </div>
            <div className="flex gap-1 h-8 items-end">
              {/* Draw animated bars reflecting ROAS size */}
              {Array.from({ length: 10 }).map((_, idx) => {
                const ratio = (idx + 1) / 10;
                const active = ratio <= roas / 8.0;
                return (
                  <div
                    key={idx}
                    className={`w-1.5 rounded-t-sm transition-all duration-300
                      ${active ? "bg-[#00C475]" : "bg-white/10"}`}
                    style={{ height: `${ratio * 100}%` }}
                  />
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
