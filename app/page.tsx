import Header from "./components/Header";
import FaqAccordion from "./components/FaqAccordion";
import RoiCalculator from "./components/RoiCalculator";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1 w-full relative z-10" id="home">
        
        {/* =========================================================================
            1. HERO SECTION
            ========================================================================= */}
        <section className="hero-section-container relative min-h-screen pt-44 pb-28 px-8 md:px-16 flex flex-col justify-between overflow-hidden bg-[#F4F8F5]">
          
          {/* Background grid texture & moving blob */}
          <div className="absolute inset-0 z-[-1]">
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(ellipse_at_center,_var(--roas-black)_1px,_transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#00C475]/5 to-[#F4F8F5]/10 rounded-full blur-3xl float-bob" />
          </div>

          {/* Interactive Cursor-following Glow Blob */}
          <div className="hero-glow-blob pointer-events-none absolute w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,_rgba(0,196,117,0.08)_0%,_transparent_70%)] blur-2xl opacity-0 z-[1] transition-opacity duration-500" />

          {/* Social Toolbar - Anchored Floating Vertically on the Far Right */}
          <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-8 items-center text-[13px] font-heading font-black tracking-widest text-[#080E0B]">
            {["Facebook", "Twitter", "Linkedin"].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className="hero-social-link hover:text-[#00C475] transition-colors origin-center rotate-90 my-6 inline-block opacity-0"
              >
                {social}
              </a>
            ))}
          </div>

          {/* Top Row: Customer Avatars & Diagonal Arrow Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full max-w-7xl mx-auto z-10">
            
            {/* Left Col: Performance Badge */}
            <div className="lg:col-span-6 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  { initials: "FB", bg: "bg-[#080E0B]" },
                  { initials: "GG", bg: "bg-[#00C475]" },
                  { initials: "TT", bg: "bg-[#0B3621]" },
                ].map((user, idx) => (
                  <div
                    key={idx}
                    className={`hero-avatar w-12 h-12 rounded-full border-2 border-[#F4F8F5] flex items-center justify-center text-white text-[12px] font-heading font-bold ${user.bg} shadow-md opacity-0`}
                  >
                    {user.initials}
                  </div>
                ))}
              </div>
              <div className="hero-cert-text opacity-0">
                <div className="text-[15px] text-[#080E0B] font-heading font-black uppercase tracking-wider">
                  Meta + Google + TikTok Certified
                </div>
                <div className="text-[12px] text-[#3D4F46] font-body">
                  Obsessively Focused on ROAS Multipliers
                </div>
              </div>
            </div>

            {/* Right Col: Discuss & Action Arrow */}
            <div className="hero-audit-box lg:col-span-6 flex items-center gap-6 justify-self-start lg:justify-self-end opacity-0">
              <a href="#contact" className="w-16 h-16 rounded-2xl bg-[#00C475]/10 flex items-center justify-center text-[#0B3621] group cursor-pointer hover:bg-[#00C475] hover:text-black transition-colors duration-300 shadow-sm float-bob-y magnet-btn">
                <svg className="w-8 h-8 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 19L19 5M19 5H9M19 5V15" />
                </svg>
              </a>
              <div>
                <div className="text-[14px] font-heading font-black text-[#080E0B] uppercase tracking-wider">
                  Audit Account
                </div>
                <p className="text-[13px] text-[#3D4F46] font-body max-w-[280px]">
                  Map out scaling metrics with our paid ads specialists.
                </p>
              </div>
            </div>

          </div>

          {/* Center Content: Eyebrow & Giant Headline */}
          <div className="w-full max-w-7xl mx-auto my-auto py-12 relative z-10">
            <div className="space-y-6">
              {/* Eyebrow Text */}
              <span className="hero-eyebrow px-4 py-1.5 rounded-full bg-[#00C475]/15 text-[#00C475] font-heading text-[12px] uppercase font-black tracking-widest inline-block float-bob-y opacity-0">
                Performance Advertising Agency
              </span>
              
              {/* Main Headline */}
              <h1 className="hero-title bw-spilt-title-one text-[64px] sm:text-[96px] md:text-[128px] lg:text-[144px] font-black text-[#080E0B] leading-[0.98] tracking-tighter uppercase select-none">
                We Don't Run Ads. <br />
                We Run <span className="text-[#00C475]">Returns.</span>
              </h1>
            </div>

            {/* Sub-headline / Body copy */}
            <p className="hero-subtitle bw-split-text-light text-[18px] sm:text-[22px] text-[#3D4F46] font-body max-w-3xl mt-8 leading-relaxed opacity-0">
              The Roas Haus is a results-driven paid advertising agency. We build and scale campaigns on Meta, Google, and TikTok — obsessively focused on your ROAS.
            </p>
          </div>

          {/* Bottom Row: CTA Buttons & Scroll Down */}
          <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-[#E1EBE5] pt-6 gap-6 z-10">
            
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#contact" className="hero-cta-button roas-btn btn-green-light magnet-btn opacity-0">
                <div className="roas-btn-wrapper">
                  <i>Book a Free Audit</i>
                  <span>Book a Free Audit</span>
                </div>
              </a>
              <a href="#services" className="hero-cta-button text-[15px] font-heading font-black text-[#080E0B] hover:text-[#00C475] transition-colors flex items-center gap-2 opacity-0">
                Our Services <span>&rarr;</span>
              </a>
            </div>

            <a
              href="#services"
              className="hero-cta-button text-[12px] uppercase tracking-wider font-heading font-bold text-[#3D4F46] hover:text-[#00C475] flex items-center gap-2 opacity-0"
            >
              Learn More
              <span className="w-1.5 h-1.5 rounded-full bg-[#00C475] inline-block animate-ping" />
            </a>
          </div>

        </section>

        {/* =========================================================================
            2. SCROLLING MARQUEE BANNER
            ========================================================================= */}
        <section className="overflow-hidden bg-[#00C475] py-2 relative z-20">
          <div className="slider-text-marquee bg-[#00C475] border-none shadow-none m-0 rotate-0">
            <div className="slider-text-group">
              {[1, 2, 3].map((groupIndex) => (
                <div key={groupIndex} className="flex items-center">
                  {[
                    "Meta Ads",
                    "Google Ads",
                    "TikTok Ads",
                    "Pinterest Ads",
                    "ROAS Optimization",
                    "Ad Account Audits",
                    "Paid Social",
                    "Performance Marketing",
                  ].map((text, textIndex) => (
                    <span key={textIndex} className="slider-text-item text-[#0B3621] -webkit-text-stroke-0 font-black">
                      {text} <span className="slider-text-bullet text-[#FFFFFF]">✦</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. SERVICES SECTION (Dark Editorial Row Layout)
            ========================================================================= */}
        <section className="bg-[#060907] relative overflow-hidden pt-24" id="services">

          {/* Subtle dot-grid texture */}
          <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(ellipse_at_center,_#fff_1px,_transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 md:px-12">

            {/* Section Header — asymmetric left / right split */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pb-16 border-b border-white/[0.08]">
              <div className="space-y-5">
                <span className="flex items-center gap-2.5 text-[12px] font-heading font-black uppercase tracking-[0.18em] text-[#FF5B22]">
                  <span className="w-2.5 h-2.5 bg-[#FF5B22] inline-block shrink-0" />
                  WHAT WE DO
                </span>
                <h2 className="text-[58px] sm:text-[76px] md:text-[92px] font-black leading-[0.92] text-white uppercase tracking-tighter select-none">
                  Services Built <br /> for Performance
                </h2>
              </div>
              <p className="text-[16px] text-white/45 max-w-[340px] leading-relaxed font-body self-end lg:pb-3">
                We build and scale paid campaigns on Meta, Google &amp; TikTok — obsessively engineered around your return on ad spend.
              </p>
            </div>

            {/* Service Rows */}
            {[
              {
                num: "01",
                title: "Meta Ads",
                desc: "Facebook & Instagram campaigns built to convert. From prospecting to retargeting — we manage the full funnel with precision.",
                tags: ["Full-Funnel", "Facebook", "Instagram", "Retargeting"],
                image: "/project_one.png",
                bgAccent: "#F5C842",
                rotate: -6,
              },
              {
                num: "02",
                title: "Google Ads",
                desc: "Search, Shopping, and Performance Max campaigns that capture demand and drive qualified traffic directly to your offer.",
                tags: ["Search", "Shopping", "PMax", "Conquesting"],
                image: "/hero_cover.png",
                bgAccent: "#4287F5",
                rotate: 6,
              },
              {
                num: "03",
                title: "TikTok Ads",
                desc: "Creative-first campaigns on the fastest growing ad platform. We test, learn, and scale what works — fast.",
                tags: ["UGC", "Spark Ads", "Catalog Feeds", "Trend Testing"],
                image: "/project_two.png",
                bgAccent: "#8B5CF6",
                rotate: -6,
              },
              {
                num: "04",
                title: "Ad Account Audits",
                desc: "Already running ads? We'll deep-dive your account, identify what's killing your ROAS, and give you a clear action plan.",
                tags: ["Bid Strategy", "Creative Fatigue", "Attribution"],
                image: "/project_one.png",
                bgAccent: "#FF5B22",
                rotate: 6,
              },
              {
                num: "05",
                title: "Strategy & Consulting",
                desc: "Not sure where to start? We'll map out the right platforms, budget allocation, and funnel strategy for your business.",
                tags: ["Roadmapping", "Budget Split", "Unit Economics"],
                image: "/hero_cover.png",
                bgAccent: "#00C475",
                rotate: -6,
              },
              {
                num: "06",
                title: "Performance Reporting",
                desc: "Clear, transparent reporting that tracks what matters — ROAS, CPA, revenue. No fluff, just numbers that tell the truth.",
                tags: ["Looker Studio", "LTV Tracking", "Weekly Briefs"],
                image: "/project_two.png",
                bgAccent: "#F59E0B",
                rotate: 6,
              },
            ].map((service, index) => (
              <div
                key={index}
                className="service-row-dark border-b border-white/[0.07] py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Left / Right: Tilted Image (alternates side each row) */}
                <div className={`lg:col-span-5 flex items-center justify-center ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <div
                    className="service-tilted-img-wrap relative w-full max-w-[380px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                    data-rotate={service.rotate}
                  >
                    {/* Colored backdrop */}
                    <div
                      className="absolute inset-0"
                      style={{ backgroundColor: service.bgAccent }}
                    />
                    {/* Image overlay with blend */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-55"
                    />
                    {/* Number watermark */}
                    <span className="absolute bottom-4 right-5 text-[80px] font-black text-white/10 leading-none select-none font-heading">
                      {service.num}
                    </span>
                  </div>
                </div>

                {/* Content Pillar */}
                <div className={`lg:col-span-7 space-y-5 ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <span className="block text-[11px] font-heading font-black uppercase tracking-[0.22em] text-white/25">
                    {service.num}
                  </span>
                  <h3 className="text-[38px] md:text-[50px] font-black text-white leading-none tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[15px] text-white/55 leading-relaxed font-body max-w-[480px]">
                    {service.desc}
                  </p>

                  {/* Pill Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="service-pill-tag px-4 py-1.5 rounded-full border border-white/[0.12] text-[12px] font-heading font-bold text-white/60"
                        style={{ "--pill-accent": service.bgAccent } as React.CSSProperties}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Circular CTA + label */}
                  <div className="flex items-center gap-4 pt-3">
                    <a
                      href="#contact"
                      className="service-circle-cta group w-[54px] h-[54px] rounded-full border border-white/20 flex items-center justify-center text-white shrink-0"
                      style={{ "--cta-accent": service.bgAccent } as React.CSSProperties}
                    >
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19L19 5M19 5H9M19 5V15" />
                      </svg>
                    </a>
                    <span className="text-[12px] text-white/35 font-body uppercase tracking-wider">
                      Get Started
                    </span>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Bottom gradient transition: dark → light sage */}
          <div className="h-28 w-full bg-gradient-to-b from-[#060907] to-[#F4F8F5] pointer-events-none mt-8" />
        </section>

        {/* =========================================================================
            4. PROCESS SECTION (Full-Width Horizontal Row List)
            ========================================================================= */}
        <section className="section-padding bg-[#F4F8F5] overflow-hidden" id="process">
          <div className="max-w-7xl mx-auto px-6 md:px-12">

            {/* Section Header */}
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20 pb-12 border-b-2 border-[#0B3621]/8">
              <div className="space-y-4">
                <span className="text-[12px] font-heading font-black uppercase tracking-widest text-[#00C475]">
                  // HOW IT WORKS
                </span>
                <h2 className="bw-spilt-title-two text-[58px] md:text-[76px] font-black leading-[0.92] text-[#0B3621] uppercase tracking-tighter">
                  Simple Process. <br /> Serious Results.
                </h2>
              </div>
              <p className="text-[15px] text-[#3D4F46]/65 max-w-[260px] leading-relaxed font-body pb-1 shrink-0">
                Three clear steps from discovery to scale. No fluff, no filler — just results.
              </p>
            </div>

            {/* Horizontal step rows — no boxes, pure editorial */}
            <div className="border-t border-[#0B3621]/10">
              {[
                {
                  num: "01",
                  label: "Discovery",
                  title: "Audit",
                  desc: "We analyse your current ads, audience, and funnel. If you're starting fresh, we research your market and competitors.",
                },
                {
                  num: "02",
                  label: "Planning",
                  title: "Strategy",
                  desc: "We build a tailored paid ads strategy — platforms, budgets, creatives, and targeting — aligned to your revenue goals.",
                },
                {
                  num: "03",
                  label: "Execution",
                  title: "Scale",
                  desc: "We launch, test, optimise, and scale. Every decision is driven by data with one goal — maximising your ROAS.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="process-card-entrance process-step-row group relative flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0 py-10 border-b border-[#0B3621]/10 overflow-hidden cursor-default"
                >
                  {/* Dark green hover fill — sweeps left to right */}
                  <div className="absolute inset-0 bg-[#0B3621] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />

                  {/* Col 1: Step number (large faded) */}
                  <div className="relative shrink-0 w-28">
                    <span className="text-[72px] font-black leading-none font-heading select-none text-[#0B3621]/12 group-hover:text-white/10 transition-colors duration-300">
                      {item.num}
                    </span>
                  </div>

                  {/* Col 2: Label pill */}
                  <div className="relative shrink-0 lg:w-44">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-heading font-black uppercase tracking-widest text-[#00A361] group-hover:text-[#00C475] transition-colors duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                      {item.label}
                    </span>
                  </div>

                  {/* Col 3: Step title */}
                  <div className="relative flex-1">
                    <h3 className="text-[36px] md:text-[48px] font-black text-[#0B3621] group-hover:text-white leading-none tracking-tight transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>

                  {/* Col 4: Description */}
                  <div className="relative flex-1 max-w-sm">
                    <p className="text-[14px] text-[#3D4F46]/70 group-hover:text-white/55 leading-relaxed font-body transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>

                  {/* Col 5: Arrow */}
                  <div className="relative shrink-0 ml-0 lg:ml-8">
                    <div className="w-10 h-10 rounded-full border border-[#0B3621]/15 group-hover:border-white/25 flex items-center justify-center text-[#0B3621]/25 group-hover:text-white/60 transition-all duration-300">
                      <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19L19 5M19 5H9M19 5V15" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* =========================================================================
            5. ABOUT SECTION (Sage White Theme)
            ========================================================================= */}
        <section className="section-padding bg-[#F4F8F5]" id="about">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start border-b border-[#E1EBE5] pb-16">
              
              {/* Left Column: Heading */}
              <div className="about-left-col lg:col-span-5 space-y-4 opacity-0">
                <span className="text-[12px] font-heading font-black uppercase tracking-widest text-[#00C475]">
                  // ABOUT
                </span>
                <h2 className="bw-spilt-title-two text-[44px] md:text-[56px] font-black leading-none text-[#0B3621] uppercase">
                  Built Around <br /> One Metric.
                </h2>
                
                {/* CTA Button */}
                <div className="pt-6">
                  <a href="#contact" className="roas-btn btn-green-light magnet-btn">
                    <div className="roas-btn-wrapper">
                      <i>Work With Us</i>
                      <span>Work With Us</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: Paragraph Body */}
              <div className="about-right-col lg:col-span-7 space-y-6">
                <div className="text-[18px] sm:text-[22px] text-[#3D4F46] leading-relaxed font-body space-y-6">
                  <p className="bw-split-text-light about-para-item">
                    The ROAS House was founded on a simple belief: paid advertising should do more than look good, it should perform.
                  </p>
                  <p className="bw-split-text-light about-para-item">
                    Too often, businesses invest in campaigns that feel polished on the surface but fail to deliver where it matters. We exist to change that.
                  </p>
                  <p className="bw-split-text-light about-para-item">
                    With over 16 years of combined experience across digital marketing and paid performance, we bring strategy, platform expertise and commercial thinking to every campaign we run.
                  </p>
                  <p className="bw-split-text-light about-para-item">
                    Our focus is clear: stronger return on ad spend, smarter media buying and results you can actually measure.
                  </p>
                  <p className="bw-split-text-light about-para-item">
                    No vanity metrics. No unnecessary noise. Just paid advertising built to grow your business.
                  </p>
                </div>
              </div>

            </div>

            {/* Overlapping Pastel Stats Circles */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-12 sm:gap-0 pt-20">
              
              {/* Circle 1 */}
              <div className="stats-circle stats-circle-entrance">
                <span className="text-[13px] font-heading font-bold text-[#3D4F46]">
                  ROAS Average
                </span>
                <span
                  className="text-[44px] font-heading font-black text-[#0B3621] mt-1"
                  data-count-start="1"
                  data-count-target="4.8"
                  data-count-suffix="x"
                  data-count-decimals="1"
                >
                  0
                </span>
              </div>

              {/* Circle 2 */}
              <div className="stats-circle stats-circle-entrance">
                <span className="text-[13px] font-heading font-bold text-[#3D4F46]">
                  Ad Spend Managed
                </span>
                <span
                  className="text-[44px] font-heading font-black text-[#0B3621] mt-1"
                  data-count-start="0"
                  data-count-target="15"
                  data-count-suffix="M+"
                  data-count-decimals="0"
                >
                  0
                </span>
              </div>

              {/* Circle 3 */}
              <div className="stats-circle stats-circle-entrance">
                <span className="text-[13px] font-heading font-bold text-[#3D4F46]">
                  Client Profits
                </span>
                <span
                  className="text-[44px] font-heading font-black text-[#0B3621] mt-1"
                  data-count-start="10"
                  data-count-target="84"
                  data-count-suffix="M"
                  data-count-decimals="0"
                >
                  0
                </span>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            6. STANDALONE ROI INTERACTIVE CALCULATOR SECTION (Pure White Theme)
            ========================================================================= */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <RoiCalculator />
          </div>
        </section>

        {/* =========================================================================
            7. FAQ SECTION (Sage White Theme)
            ========================================================================= */}
        <section className="section-padding bg-[#F4F8F5] border-t border-[#E1EBE5]" id="faq">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <FaqAccordion />
          </div>
        </section>

        {/* =========================================================================
            8. FINAL CTA & CONTACT SECTION (Merged, Premium Carbon Black Theme)
            ========================================================================= */}
        <section className="section-padding bg-[#080E0B] text-white relative overflow-hidden" id="contact">
          
          {/* Decorative floating grids & ambient glows */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_#fff_1px,_transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#00C475]/8 blur-3xl pointer-events-none float-bob" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#00C475]/10 blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 px-6">
            <span className="text-[12px] font-heading font-black uppercase tracking-widest text-[#00C475]">
              // GROW YOUR REVENUES
            </span>
            <h2 className="bw-spilt-title-two text-[44px] sm:text-[56px] md:text-[72px] font-black leading-none uppercase select-none text-white">
              Ready to Scale <br />
              Your <span className="text-[#00C475]">ROAS?</span>
            </h2>
            <p className="bw-split-text text-[16px] sm:text-[18px] text-white/70 max-w-xl mx-auto font-body leading-relaxed">
              Book a free 30-minute consultation. No pressure, no pitch — just honest advice.
            </p>
            <div className="pt-6">
              <a
                href="mailto:hello@theroashaus.com"
                className="roas-btn btn-green-light px-12 py-5 text-[15px] font-bold shadow-2xl magnet-btn"
              >
                <div className="roas-btn-wrapper">
                  <i>Book a Free Consultation</i>
                  <span>Book a Free Consultation</span>
                </div>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* =========================================================================
          10. FOOTER BLOCK (Light Sage Theme)
          ========================================================================= */}
      <footer className="bg-[#F4F8F5] text-[#3D4F46] pt-24 pb-12 px-6 md:px-12 relative overflow-hidden border-t border-[#E1EBE5]">
        
        {/* Giant Watermark outline logo */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden z-0">
          <span className="footer-watermark text-[100px] sm:text-[180px] md:text-[240px] lg:text-[320px] font-heading font-black tracking-widest text-transparent -webkit-text-stroke-[2px] -webkit-text-stroke-color:rgba(11,54,33,0.04) inline-block">
            ROAS HAUS
          </span>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 relative z-10 border-b border-[#E1EBE5] pb-16">
          
          {/* Grid Widget 1: Description & contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="text-[28px] font-heading font-black text-[#0B3621] uppercase">
              ROAS HAUS<span className="text-[#00C475]">.</span>
            </div>
            
            <p className="text-[16px] text-[#3D4F46]/80 font-body max-w-sm">
              We Don't Run Ads. We Run Returns. Paid advertising built around absolute revenue growth.
            </p>

            <div className="space-y-1 font-body text-[15px] text-[#3D4F46]/90">
              <p>Email: <a href="mailto:hello@theroashaus.com" className="text-[#00A361] hover:text-[#00C475] hover:underline font-bold">hello@theroashaus.com</a></p>
              <p>Office: New York City, NY</p>
            </div>
          </div>

          {/* Grid Widget 2: Site Links */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[12px] font-heading font-black uppercase tracking-wider text-[#3D4F46]/50">
              Navigation
            </h4>
            <div className="grid grid-cols-1 gap-3 font-body text-[15px] text-[#3D4F46]/80">
              <a href="#services" className="footer-link hover:text-[#00C475] transition-colors">Services</a>
              <a href="#process" className="footer-link hover:text-[#00C475] transition-colors">Process</a>
              <a href="#about" className="footer-link hover:text-[#00C475] transition-colors">About</a>
              <a href="#contact" className="footer-link hover:text-[#00C475] transition-colors">Contact</a>
            </div>
          </div>

          {/* Grid Widget 3: Platforms list */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-[12px] font-heading font-black uppercase tracking-wider text-[#3D4F46]/50">
              Paid Platforms We Scale
            </h4>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Meta Ads", "Google Search", "Google Shopping", "TikTok Business", "Performance Max", "Pinterest Ads"].map((plat) => (
                <span
                  key={plat}
                  className="footer-platform-badge px-3.5 py-1.5 rounded-full bg-white border border-[#E1EBE5] text-[12px] font-heading font-bold text-[#3D4F46] shadow-sm hover:border-[#00C475] transition-all"
                >
                  {plat}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright bar */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center pt-8 relative z-10 text-[13px] text-[#3D4F46]/50 gap-4">
          <p>&copy; 2025 The Roas Haus. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#00C475] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#00C475] transition-colors">Terms of Service</a>
          </div>
        </div>

      </footer>
    </>
  );
}
