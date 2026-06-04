import Image from "next/image";
import Header from "./components/Header";
import FaqAccordion from "./components/FaqAccordion";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1 w-full relative z-10" id="home">
        
        {/* =========================================================================
            1. HERO SECTION
            ========================================================================= */}
        <section className="hero-section-container relative min-h-screen pt-44 pb-28 px-8 md:px-16 flex flex-col justify-between overflow-hidden bg-[#F7F2E7]">
          
          {/* Background grid texture & moving blob */}
          <div className="absolute inset-0 z-[-1]">
            <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(ellipse_at_center,_var(--roas-black)_1px,_transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#204E3D]/5 to-[#F7F2E7]/10 rounded-full blur-3xl float-bob" />
          </div>

          {/* Interactive Cursor-following Glow Blob */}
          <div className="hero-glow-blob pointer-events-none absolute w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,_rgba(32, 78, 61,0.08)_0%,_transparent_70%)] blur-2xl opacity-0 z-[1] transition-opacity duration-500" />

          {/* Social Toolbar - Anchored Floating Vertically on the Far Right */}
          <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-8 items-center text-[13px] font-heading font-black tracking-widest text-[#080E0B]">
            {["Facebook", "Twitter", "Linkedin"].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className="hero-social-link hover:text-[#204E3D] transition-colors origin-center rotate-90 my-6 inline-block opacity-0"
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
                  { initials: "GG", bg: "bg-[#204E3D]" },
                  { initials: "TT", bg: "bg-[#0A3D2B]" },
                ].map((user, idx) => (
                  <div
                    key={idx}
                    className={`hero-avatar w-12 h-12 rounded-full border-2 border-[#F7F2E7] flex items-center justify-center text-white text-[12px] font-heading font-bold ${user.bg} shadow-md opacity-0`}
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
              <a href="#contact" className="w-16 h-16 rounded-2xl bg-[#204E3D]/10 flex items-center justify-center text-[#0A3D2B] group cursor-pointer hover:bg-[#204E3D] hover:text-black transition-colors duration-300 shadow-sm float-bob-y magnet-btn">
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
              <span className="hero-eyebrow px-4 py-1.5 rounded-full bg-[#204E3D]/15 text-[#204E3D] font-heading text-[12px] uppercase font-black tracking-widest inline-block float-bob-y opacity-0">
                Performance Advertising Agency
              </span>
              
              {/* Main Headline */}
              <h1 className="hero-title bw-spilt-title-one text-[64px] sm:text-[96px] md:text-[128px] lg:text-[144px] font-black text-[#080E0B] leading-[0.98] tracking-tighter uppercase select-none">
                We Don't Run Ads. <br />
                We Run <span className="text-[#204E3D]">Returns.</span>
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
              <a href="#services" className="hero-cta-button text-[15px] font-heading font-black text-[#080E0B] hover:text-[#204E3D] transition-colors flex items-center gap-2 opacity-0">
                Our Services <span>&rarr;</span>
              </a>
            </div>

            <a
              href="#services"
              className="hero-cta-button text-[12px] uppercase tracking-wider font-heading font-bold text-[#3D4F46] hover:text-[#204E3D] flex items-center gap-2 opacity-0"
            >
              Learn More
              <span className="w-1.5 h-1.5 rounded-full bg-[#204E3D] inline-block animate-ping" />
            </a>
          </div>

        </section>

        {/* =========================================================================
            2. SCROLLING MARQUEE BANNER
            ========================================================================= */}
        <section className="overflow-hidden bg-black py-2 relative z-20">
          <div className="slider-text-marquee bg-black border-none shadow-none m-0 rotate-0">
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
                    <span key={textIndex} className="slider-text-item !text-white -webkit-text-stroke-0 font-black">
                      {text} <span className="slider-text-bullet text-[#FFFFFF]">✦</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. SERVICES SECTION (Sticky Portfolio Card Stack)
            ========================================================================= */}
        <section className="services-portfolio-section bg-[#060907] relative py-24 md:py-32" id="services">
          <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(ellipse_at_center,_#fff_1px,_transparent_1px)] bg-[size:26px_26px] pointer-events-none" />
          <div className="absolute top-1/2 left-[48%] w-2 h-2 rounded-full bg-[#D7FF2F] shadow-[0_0_18px_rgba(215,255,47,0.65)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <div className="flex items-center gap-3 mb-7">
                  <span className="text-[28px] leading-none text-white/70">*</span>
                  <span className="text-[18px] font-heading font-black text-white">
                    03. Services
                  </span>
                  <span className="h-px flex-1 max-w-[170px] bg-white/25" />
                </div>

                <h2 className="text-[52px] sm:text-[66px] md:text-[76px] font-black leading-[0.96] text-white tracking-tight select-none">
                  We build growth systems across paid channels
                </h2>

                <p className="mt-8 text-[17px] text-white/55 max-w-[500px] leading-relaxed font-body">
                  Our services cover the full performance engine — from high converting social campaigns and search capture to sharp audits, strategy, and reporting.
                </p>

                <a href="#contact" className="services-more-btn mt-10 inline-flex items-center overflow-hidden rounded-lg bg-white text-[#080E0B] font-heading font-black text-[14px]">
                  <span className="w-12 h-12 bg-[#1B1D1B] text-white flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <span className="px-4">More Services</span>
                </a>
              </div>

              <div className="services-stack-pin lg:col-span-7">
                <div className="services-card-stack space-y-10 lg:space-y-0">
                  {[
                    {
                      num: "01",
                      title: "Meta Ads",
                      badge: "Meta + Instagram",
                      desc: "Facebook and Instagram campaigns built to convert, from prospecting to retargeting.",
                      tags: ["Full-Funnel", "Retargeting", "Creative Testing"],
                      image: "/project_two.png",
                    },
                    {
                      num: "02",
                      title: "Google Ads",
                      badge: "Search + PMax",
                      desc: "Search, Shopping, and Performance Max campaigns that capture demand and qualified traffic.",
                      tags: ["Search", "Shopping", "Conquesting"],
                      image: "/hero_cover.png",
                    },
                    {
                      num: "03",
                      title: "TikTok Ads",
                      badge: "Creative-First Scale",
                      desc: "Fast-moving TikTok campaigns built around UGC, hooks, testing, and rapid iteration.",
                      tags: ["UGC", "Spark Ads", "Trend Testing"],
                      image: "/project_one.png",
                    },
                    {
                      num: "04",
                      title: "Ad Account Audits",
                      badge: "ROAS Recovery",
                      desc: "We identify what is killing your return and map the clearest path back to profitable scale.",
                      tags: ["Bid Strategy", "Attribution", "Creative Fatigue"],
                      image: "/project_two.png",
                    },
                    {
                      num: "05",
                      title: "Strategy & Consulting",
                      badge: "Growth Roadmap",
                      desc: "Platform selection, budget allocation, funnel strategy, and a practical plan for growth.",
                      tags: ["Roadmapping", "Budget Split", "Unit Economics"],
                      image: "/hero_cover.png",
                    },
                    {
                      num: "06",
                      title: "Performance Reporting",
                      badge: "Revenue Clarity",
                      desc: "Clear reporting around ROAS, CPA, revenue, and the decisions that move those numbers.",
                      tags: ["Looker Studio", "LTV Tracking", "Weekly Briefs"],
                      image: "/project_two.png",
                    },
                  ].map((service) => (
                    <article
                      key={service.num}
                      className="services-portfolio-card services-scroll-card overflow-hidden"
                    >
                      <div className="relative h-[260px] sm:h-[330px] overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#060907]/75 via-[#060907]/10 to-transparent" />
                        <div className="absolute top-5 right-5 rounded-full bg-[#1B1D1B]/90 backdrop-blur px-4 py-2 text-[13px] font-heading font-black text-white shadow-xl">
                          {service.badge}
                        </div>
                        <span className="absolute bottom-5 left-6 text-[64px] font-heading font-black text-white/12 leading-none">
                          {service.num}
                        </span>
                      </div>

                      <div className="bg-[#1A1C1A] p-7 sm:p-9">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
                          <div>
                            <h3 className="text-[30px] sm:text-[36px] font-heading font-black text-white leading-tight">
                              {service.title}
                            </h3>
                            <p className="mt-3 text-[15px] text-white/50 leading-relaxed max-w-[440px]">
                              {service.desc}
                            </p>
                          </div>

                          <a href="#contact" className="services-read-btn shrink-0 rounded-lg border border-white/70 px-5 py-3 text-[13px] font-heading font-black text-white hover:bg-white hover:text-[#080E0B] transition-colors">
                            Read More
                          </a>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-6">
                          {service.tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[12px] font-heading font-bold text-white/55">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* =========================================================================
            4. FEATURED WINS SECTION (Editorial Case Study Layout)
            ========================================================================= */}
        <section className="bg-[#F7F2E7] relative overflow-hidden py-24 md:py-32" id="featured-wins">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[720px]">
            {/* Left editorial panel */}
            <div className="relative lg:col-span-5 bg-[#0A3D2B] min-h-[560px] md:min-h-[680px] overflow-hidden flex flex-col justify-between px-8 sm:px-12 md:px-16 pt-32 pb-0">
              <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[360px] h-[360px] md:w-[460px] md:h-[460px] rounded-full overflow-hidden border-[18px] border-[#F7F2E7]">
                <Image
                  src="/project_two.png"
                  alt="Performance marketing analytics dashboard"
                  fill
                  sizes="(min-width: 768px) 460px, 360px"
                  className="object-cover scale-110"
                />
              </div>

              <div className="relative z-10 mt-28 md:mt-36">
                <span className="block text-[13px] font-heading font-black uppercase tracking-[0.24em] text-[#204E3D] mb-8">
                  The winner is
                </span>
                <h2 className="bw-spilt-title-two text-[48px] sm:text-[64px] md:text-[76px] font-black leading-[0.9] uppercase text-white tracking-tight">
                  Aurora <br /> Skins
                </h2>
                <p className="mt-8 max-w-sm text-[16px] leading-relaxed text-white/55 font-body">
                  A skincare paid social relaunch engineered around cleaner creative testing, tighter retargeting, and profitable scale.
                </p>
              </div>

              <div className="featured-platform-marquee relative z-10 -mx-8 sm:-mx-12 md:-mx-16 overflow-hidden bg-[#204E3D] text-[#0A3D2B] py-7">
                <div className="featured-platform-track">
                  {[1, 2].map((group) => (
                    <div key={group} className="featured-platform-group">
                      {["Meta Ads", "Google Ads", "TikTok Ads", "Pinterest Ads", "ROAS Optimization"].map((platform) => (
                        <div key={`${group}-${platform}`} className="featured-platform-item">
                          <span className="font-heading font-black text-[22px] sm:text-[30px] uppercase tracking-normal text-[#0A3D2B]">
                            {platform}
                          </span>
                          <span className="text-[28px] sm:text-[34px] leading-none text-white">✦</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right feature spread */}
            <div className="relative lg:col-span-7 bg-[#F7F2E7] min-h-[640px] px-6 sm:px-10 md:px-16 lg:px-20 pt-16 md:pt-24 pb-20">
              <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(ellipse_at_center,_var(--roas-black)_1px,_transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

              <div className="relative z-10">
                <span className="text-[12px] font-heading font-black uppercase tracking-[0.18em] text-[#204E3D]">
                  Featured wins
                </span>
                <h2 className="bw-spilt-title-two mt-3 text-[70px] sm:text-[100px] md:text-[128px] lg:text-[144px] font-black leading-[0.82] text-[#080E0B] uppercase tracking-tighter select-none">
                  Featured <br /> Projects
                </h2>
              </div>

              <div className="relative z-10 grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-12 items-end mt-16 md:mt-24">
                <div className="xl:col-span-4 order-2 xl:order-1 space-y-5">
                  <div>
                    <h3 className="text-[14px] font-heading font-black uppercase tracking-[0.16em] text-[#080E0B]">
                      Aurora Skins
                    </h3>
                    <p className="mt-5 text-[14px] italic tracking-[0.04em] text-[#3D4F46] font-body">
                      &apos;4.8x ROAS Relaunch&apos; Campaign
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    {[
                      ["4.8x", "Blended ROAS"],
                      ["38%", "CPA reduction"],
                    ].map(([metric, label]) => (
                      <div key={label} className="border-t border-[#0A3D2B]/15 pt-4">
                        <span className="block text-[34px] font-heading font-black text-[#0A3D2B] leading-none">
                          {metric}
                        </span>
                        <span className="block mt-2 text-[11px] font-heading font-bold uppercase tracking-wider text-[#3D4F46]/65">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="xl:col-span-8 order-1 xl:order-2">
                  <div className="featured-project-frame relative aspect-[16/10] overflow-hidden bg-[#080E0B] shadow-2xl">
                    <Image
                      src="/project_two.png"
                      alt="Performance marketing campaign dashboard"
                      fill
                      sizes="(min-width: 1280px) 48vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080E0B]/75 via-transparent to-transparent" />
                    <span className="absolute bottom-5 right-6 text-[54px] md:text-[86px] font-heading font-black text-white/15 uppercase leading-none">
                      ROAS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. WHY CHOOSE US SECTION (Light Editorial + Vertical Marquee)
            ========================================================================= */}
        <section className="section-padding bg-[#F7F2E7] relative overflow-hidden" id="why-us">
          <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(ellipse_at_center,_var(--roas-black)_1px,_transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute top-28 right-[9%] w-2 h-2 rounded-full bg-[#204E3D] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-xl mx-auto lg:ml-[28%] lg:mr-auto mb-16">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[28px] leading-none text-[#204E3D]">*</span>
                <span className="text-[16px] font-heading font-black text-[#0A3D2B]">
                  03. Why Choose Us?
                </span>
                <span className="h-px flex-1 bg-[#0A3D2B]/20" />
              </div>
              <h2 className="bw-spilt-title-two text-[44px] sm:text-[58px] md:text-[66px] font-black leading-[0.96] text-[#080E0B] tracking-tight">
                We combine creative storytelling strategy
              </h2>
            </div>

            <div className="why-us-grid grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-4 space-y-12 lg:space-y-16">
                {[
                  {
                    num: "01",
                    title: "Results-Driven Approach",
                    desc: "We focus on strategies that do not just look good. They return.",
                    icon: "M4 7h7v7H4z M13 10h7v10h-7z M7 16h4v4H7z",
                  },
                  {
                    num: "02",
                    title: "Customized Solutions",
                    desc: "Every account is different. We tailor creative, budget, and funnel strategy.",
                    icon: "M4 7h16 M7 7v10 M4 17h16 M15 7v10",
                  },
                  {
                    num: "03",
                    title: "Full-Services Team",
                    desc: "From paid media to creative testing and reporting, the whole system is covered.",
                    icon: "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M4 19c0-3 2-5 4-5s4 2 4 5 M12 19c0-3 2-5 4-5s4 2 4 5",
                  },
                ].map((item) => (
                  <div key={item.num} className="why-card relative max-w-[330px] lg:ml-auto">
                    <span className="why-card-number absolute -top-8 -right-5 text-[50px] font-heading font-black text-[#0A3D2B]/10 leading-none">
                      {item.num}
                    </span>
                    <div className="flex items-start gap-5">
                      <div className="why-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-[17px] font-heading font-black leading-tight text-[#080E0B]">
                          {item.title}
                        </h3>
                        <p className="mt-6 text-[15px] leading-relaxed text-[#3D4F46]/78">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-4 order-first lg:order-none relative">
                <div className="why-marquee mx-auto h-[560px] w-full overflow-hidden">
                  <div className="grid grid-cols-2 gap-3 h-full w-full">
                    {[0, 1].map((column) => (
                      <div key={column} className="relative h-full min-w-0 overflow-hidden rounded-sm">
                        <div className={column === 0 ? "why-image-track why-image-track-up" : "why-image-track why-image-track-down"}>
                          {[
                            "/project_two.png",
                            "/hero_cover.png",
                            "/project_one.png",
                            "/project_two.png",
                            "/hero_cover.png",
                            "/project_one.png",
                            "/project_two.png",
                            "/hero_cover.png",
                            "/project_one.png",
                          ].map((src, index) => (
                            <div key={`${column}-${index}`} className="why-image-tile overflow-hidden">
                              <img
                                src={src}
                                alt="Performance marketing agency visual"
                                className="h-full w-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-12 lg:space-y-16">
                {[
                  {
                    num: "04",
                    title: "Transparent Communication",
                    desc: "You are always in the loop with plain-English reporting and regular updates.",
                    icon: "M4 5h16v10H8l-4 4V5z M9 9h6 M9 12h4",
                  },
                  {
                    num: "05",
                    title: "Affordable & Scalable",
                    desc: "Whether you are starting up or scaling hard, we build media plans around margin.",
                    icon: "M12 3v18 M7 8c0-2 2-3 5-3s5 1 5 3-2 3-5 3-5 1-5 3 2 3 5 3 5-1 5-3",
                  },
                  {
                    num: "06",
                    title: "Client-Centric Mindset",
                    desc: "Your success is our mission. We treat your ad spend like it is our own.",
                    icon: "M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z",
                  },
                ].map((item) => (
                  <div key={item.num} className="why-card relative max-w-[330px]">
                    <span className="why-card-number absolute -top-8 -left-5 text-[50px] font-heading font-black text-[#0A3D2B]/10 leading-none">
                      {item.num}
                    </span>
                    <div className="flex items-start gap-5">
                      <div className="why-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d={item.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-[17px] font-heading font-black leading-tight text-[#080E0B]">
                          {item.title}
                        </h3>
                        <p className="mt-6 text-[15px] leading-relaxed text-[#3D4F46]/78">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. PROCESS SECTION (Full-Width Horizontal Row List)
            ========================================================================= */}
        <section className="section-padding bg-[#F7F2E7] overflow-hidden" id="process">
          <div className="max-w-7xl mx-auto px-6 md:px-12">

            {/* Section Header */}
            <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20 pb-12 border-b-2 border-[#0A3D2B]/8">
              <div className="space-y-4">
                <span className="text-[12px] font-heading font-black uppercase tracking-widest text-[#204E3D]">
                  // HOW IT WORKS
                </span>
                <h2 className="bw-spilt-title-two text-[58px] md:text-[76px] font-black leading-[0.92] text-[#0A3D2B] uppercase tracking-tighter">
                  Simple Process. <br /> Serious Results.
                </h2>
              </div>
              <p className="text-[15px] text-[#3D4F46]/65 max-w-[260px] leading-relaxed font-body pb-1 shrink-0">
                Three clear steps from discovery to scale. No fluff, no filler — just results.
              </p>
            </div>

            {/* Horizontal step rows — no boxes, pure editorial */}
            <div className="border-t border-[#0A3D2B]/10">
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
                  className="process-card-entrance process-step-row group relative flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0 py-10 border-b border-[#0A3D2B]/10 overflow-hidden cursor-default"
                >
                  {/* Dark green hover fill — sweeps left to right */}
                  <div className="absolute inset-0 bg-[#0A3D2B] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />

                  {/* Col 1: Step number (large faded) */}
                  <div className="relative shrink-0 w-28">
                    <span className="text-[72px] font-black leading-none font-heading select-none text-[#0A3D2B]/12 group-hover:text-white/10 transition-colors duration-300">
                      {item.num}
                    </span>
                  </div>

                  {/* Col 2: Label pill */}
                  <div className="relative shrink-0 lg:w-44">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-heading font-black uppercase tracking-widest text-[#00A361] group-hover:text-[#204E3D] transition-colors duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-current shrink-0" />
                      {item.label}
                    </span>
                  </div>

                  {/* Col 3: Step title */}
                  <div className="relative flex-1">
                    <h3 className="text-[36px] md:text-[48px] font-black text-[#0A3D2B] group-hover:text-white leading-none tracking-tight transition-colors duration-300">
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
                    <div className="w-10 h-10 rounded-full border border-[#0A3D2B]/15 group-hover:border-white/25 flex items-center justify-center text-[#0A3D2B]/25 group-hover:text-white/60 transition-all duration-300">
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
            7. QUALITY BANNER SECTION (Dark Capability Snapshot)
            ========================================================================= */}
        <section className="quality-banner-topography relative overflow-hidden bg-[#1E1F22] py-20 md:py-28">
          <div className="absolute inset-0 bg-[#060907]/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#204E3D]" />
                  <span className="text-[13px] font-heading font-black text-white">
                    Corporate business theme
                  </span>
                </div>

                <h2 className="text-[40px] sm:text-[52px] md:text-[60px] font-heading font-black leading-[1.05] tracking-normal text-white max-w-[640px]">
                  We make the quality design &amp; developments
                </h2>

                <div className="mt-10 flex items-center gap-5">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-[0_12px_28px_rgba(0,0,0,0.32)]">
                    <Image
                      src="/project_one.png"
                      alt="John Smith profile"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[30px] sm:text-[36px] leading-none font-heading font-black text-white">
                      John Smith
                    </p>
                    <p className="mt-1 text-[13px] font-heading font-bold uppercase tracking-widest text-white/45">
                      Creative Director
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                {[
                  ["Web design", "70%"],
                  ["Web development", "46%"],
                  ["Web application", "38%"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="mb-2 flex items-center justify-between gap-4 text-[13px] font-heading font-black text-white">
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#204E3D]"
                        style={{ width: value }}
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. ABOUT SECTION (Sage White Theme)
            ========================================================================= */}
        <section className="section-padding bg-[#F7F2E7] relative isolate" id="about">
          <div className="pointer-events-none sticky top-0 z-0 h-screen -mb-[100vh] overflow-hidden">
            <Image
              src="/project_two.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover opacity-[0.18] grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-[#F7F2E7]/72" />
            <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(ellipse_at_center,_var(--roas-black)_1px,_transparent_1px)] bg-[size:24px_24px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start border-b border-[#E1EBE5] pb-16">
              
              {/* Left Column: Heading */}
              <div className="about-left-col lg:col-span-5 space-y-4 opacity-0">
                <span className="text-[12px] font-heading font-black uppercase tracking-widest text-[#204E3D]">
                  // ABOUT
                </span>
                <h2 className="bw-spilt-title-two text-[44px] md:text-[56px] font-black leading-none text-[#0A3D2B] uppercase">
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
                <span className="text-[16px] font-heading font-bold text-[#3D4F46]">
                  ROAS Average
                </span>
                <span
                  className="text-[64px] font-heading font-black text-[#0A3D2B] mt-2"
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
                <span className="text-[16px] font-heading font-bold text-[#3D4F46]">
                  Ad Spend Managed
                </span>
                <span
                  className="text-[64px] font-heading font-black text-[#0A3D2B] mt-2"
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
                <span className="text-[16px] font-heading font-bold text-[#3D4F46]">
                  Client Profits
                </span>
                <span
                  className="text-[64px] font-heading font-black text-[#0A3D2B] mt-2"
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
            6. EXPERIENCE SECTION (Editorial Stats Layout)
            ========================================================================= */}
        <section className="bg-[#F7F2E7] py-20 md:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2 text-[14px] font-heading font-black text-[#18231E] mb-20">
                  <span className="w-3 h-3 border border-[#18231E]/45 bg-[#18231E]/15 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.45)]" />
                  <span>Experience</span>
                  <span className="w-3 h-3 border border-[#18231E]/45 bg-[#18231E]/15 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.45)]" />
                </div>

                <div className="group relative h-[460px] sm:h-[560px] lg:h-[578px] rounded-[7px] overflow-hidden bg-[#8C918E]">
                  <Image
                    src="/project_one.png"
                    alt="Immersive digital experience visual"
                    fill
                    sizes="(min-width: 1024px) 36vw, 100vw"
                    className="object-cover grayscale contrast-125 brightness-75 transition duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/34 transition-opacity duration-700 group-hover:opacity-0" />
                  <div className="absolute inset-x-14 top-[28%] h-6 rounded-full bg-white shadow-[0_0_34px_rgba(255,255,255,0.95)] rotate-[-14deg] transition-all duration-700 group-hover:bg-[#204E3D] group-hover:shadow-[0_0_38px_rgba(32, 78, 61,0.85)]" />
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative mb-16">
                  <h2 className="text-[42px] sm:text-[56px] md:text-[64px] lg:text-[46px] xl:text-[58px] font-body font-medium leading-[1.02] tracking-normal text-[#060907] max-w-[760px]">
                    User experience as a driving force in design today.
                  </h2>
                  <span className="absolute right-6 lg:right-16 -bottom-10 w-2 h-2 rounded-full bg-[#D7FF2F]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
                  <div className="md:col-span-12 rounded-[7px] bg-white px-8 py-9 md:px-10 md:py-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                      <div className="md:col-span-4">
                        <div className="flex items-start">
                          <span className="text-[78px] md:text-[86px] leading-none font-body font-medium tracking-normal text-black">
                            6k
                          </span>
                          <span className="text-[32px] leading-none text-black/25 font-heading font-black mt-2">+</span>
                        </div>
                      </div>

                      <div className="md:col-span-8">
                        <h3 className="text-[22px] font-body font-medium text-[#18231E] tracking-normal">
                          Happy customers
                        </h3>
                        <p className="mt-2 text-[16px] leading-relaxed text-[#24332C] max-w-[520px]">
                          We believe that the key to our success lies in understanding our clients.
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 rounded-[5px] bg-[#F7F2E7] px-4 py-3.5 flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="flex -space-x-2 shrink-0">
                        {["MH", "AD", "SK", "JR", "TN"].map((name, index) => (
                          <div
                            key={name}
                            className={[
                              "w-9 h-9 rounded-full border-2 border-[#F7F2E7] flex items-center justify-center text-[10px] font-heading font-black text-white",
                              ["bg-[#A47B5C]", "bg-[#080E0B]", "bg-[#00A361]", "bg-[#5B6470]", "bg-[#0A3D2B]"][index],
                            ].join(" ")}
                          >
                            {name}
                          </div>
                        ))}
                      </div>
                      <p className="text-[16px] sm:text-[17px] text-[#24332C] font-body sm:ml-20">
                        Sustainable creativity, timeless appeal.
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-8 rounded-[7px] bg-white p-7 md:p-8 min-h-[330px] relative overflow-hidden">
                    <span className="text-[22px] text-[#24332C]/70 font-body">Impressions</span>
                    <span className="absolute top-4 right-6 text-[120px] md:text-[160px] leading-none font-heading font-black text-[#060907]/[0.055] select-none">
                      N
                    </span>

                    <div className="absolute left-7 right-7 bottom-7 space-y-0 text-[15px] font-body text-black">
                      {[
                        ["Solutions", "100%", "100%", "bg-[#F2F2F2]"],
                        ["Strategy", "90%", "90%", "bg-[#E2E2E2]"],
                        ["UX/UI Design", "84%", "84%", "bg-black text-white"],
                        ["Development", "70%", "70%", "bg-[#E9E9E9]"],
                      ].map(([label, value, width, tone]) => (
                        <div
                          key={label}
                          className={`${tone} h-[43px] rounded-[6px] px-5 flex items-center justify-between`}
                          style={{ width }}
                        >
                          <span className={label === "UX/UI Design" ? "font-black" : ""}>{label}</span>
                          <span className={label === "UX/UI Design" ? "font-black" : ""}>{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="md:col-span-4 rounded-[7px] bg-black text-white min-h-[330px] p-7 flex flex-col justify-between overflow-hidden">
                    <div className="relative h-28">
                      <Image
                        src="/hero_cover.png"
                        alt="Completed digital projects preview"
                        fill
                        sizes="(min-width: 1024px) 20vw, 100vw"
                        className="object-contain drop-shadow-[0_16px_30px_rgba(255,255,255,0.16)]"
                      />
                    </div>

                    <div>
                      <p className="text-[17px] leading-snug text-white/75 font-heading font-black max-w-[190px]">
                        More than 1.2k+ projects completed
                      </p>
                      <div className="mt-8 text-[48px] md:text-[52px] leading-none font-body font-medium tracking-normal">
                        0.3k+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            7. FAQ SECTION (Sage White Theme)
            ========================================================================= */}
        <section className="section-padding bg-[#F7F2E7] border-t border-[#E1EBE5]" id="faq">
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#204E3D]/8 blur-3xl pointer-events-none float-bob" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#204E3D]/10 blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 px-6">
            <span className="text-[12px] font-heading font-black uppercase tracking-widest text-[#204E3D]">
              // GROW YOUR REVENUES
            </span>
            <h2 className="bw-spilt-title-two text-[44px] sm:text-[56px] md:text-[72px] font-black leading-none uppercase select-none text-white">
              Ready to Scale <br />
              Your <span className="text-[#204E3D]">ROAS?</span>
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
          10. FOOTER BLOCK (Bold Rounded Theme)
          ========================================================================= */}
      <footer className="bg-[#F7F2E7] text-white relative overflow-hidden pt-16 pb-10 px-5 md:px-10 border-t border-[#E1EBE5]">
        <div className="relative max-w-7xl mx-auto pt-8 md:pt-16">
          <h2 className="footer-wordmark absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[10%] z-20 w-max max-w-[calc(100vw-2.5rem)] px-2 text-center text-[clamp(2.4rem,9.4vw,9.5rem)] font-heading font-black leading-none tracking-normal text-[#060907] select-none pointer-events-none whitespace-nowrap">
            THE ROAS HAUS
          </h2>

          <div className="relative z-10 rounded-[34px] md:rounded-[46px] bg-[#204E3D] px-7 sm:px-10 md:px-16 lg:px-20 pt-32 sm:pt-40 md:pt-48 lg:pt-52 pb-10 md:pb-12 shadow-[0_30px_80px_rgba(32, 78, 61,0.18)] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.22),transparent_34%),linear-gradient(135deg,rgba(11,54,33,0.16),transparent_45%)] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10 items-start">
              <div className="md:col-span-5 lg:col-span-5">
                <h3 className="text-[42px] md:text-[48px] font-heading font-black leading-none tracking-tight text-white">
                  Let's Talk
                </h3>
                <p className="mt-2 text-[14px] font-heading font-black uppercase tracking-wide text-white/90">
                  Ready To Bring Your Returns To Life?
                </p>

                <div className="mt-8 space-y-2 font-heading font-black text-[17px] md:text-[19px] text-white">
                  <a href="mailto:hello@theroashaus.com" className="block hover:text-[#0A3D2B] transition-colors">
                    hello@theroashaus.com
                  </a>
                  <a href="tel:+121261670051" className="block hover:text-[#0A3D2B] transition-colors">
                    (+121) 616700 51
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-[14px] font-heading font-black">
                  <a href="#" className="hover:text-[#0A3D2B] transition-colors">Instagram</a>
                  <a href="#" className="hover:text-[#0A3D2B] transition-colors">LinkedIn</a>
                  <a href="#" className="hover:text-[#0A3D2B] transition-colors">Twitter</a>
                </div>
              </div>

              <nav className="md:col-span-3 lg:col-span-3 grid gap-3 text-[16px] font-heading font-black">
                <a href="#home" className="hover:text-[#0A3D2B] transition-colors">Home</a>
                <a href="#services" className="hover:text-[#0A3D2B] transition-colors">Services</a>
                <a href="#process" className="hover:text-[#0A3D2B] transition-colors">Process</a>
                <a href="#about" className="hover:text-[#0A3D2B] transition-colors">About</a>
                <a href="#faq" className="hover:text-[#0A3D2B] transition-colors">FAQ</a>
                <a href="#contact" className="hover:text-[#0A3D2B] transition-colors">Contact Us</a>
              </nav>

              <div className="md:col-span-4 lg:col-span-4">
                <p className="max-w-[340px] text-[16px] md:text-[17px] leading-snug font-heading font-black text-white">
                  By subscribing you agree with our Privacy Policy
                </p>

                <form className="mt-10 flex items-center w-full max-w-[390px] rounded-full bg-[#0A3D2B]/12 p-2 pl-6">
                  <input
                    type="email"
                    aria-label="Email address"
                    placeholder="Enter Your Email"
                    className="!w-full !p-0 !border-0 !bg-transparent !shadow-none text-white placeholder:text-white/75 font-heading font-black text-[14px] focus:!shadow-none"
                  />
                  <button
                    type="submit"
                    aria-label="Submit email"
                    className="shrink-0 w-12 h-12 rounded-full bg-white text-[#060907] flex items-center justify-center hover:bg-[#0A3D2B] hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="M5 12l14-7-7 14-2-6-5-1z" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

            <div className="relative z-10 mt-20 md:mt-24 text-center text-[13px] font-heading font-black text-white/90">
              &copy; 2026 The Roas Haus. All Right Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
