"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GsapInitializer() {
  useEffect(() => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 1. Process character-level split titles (.bw-spilt-title-one)
    const charTitleElements = document.querySelectorAll(".bw-spilt-title-one");
    charTitleElements.forEach((element) => {
      const htmlElement = element as HTMLElement;
      
      const processNode = (node: Node): Node[] => {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent || "";
          const words = text.split(/(\s+)/); // keep whitespace
          const newNodes: Node[] = [];
          
          words.forEach((word) => {
            if (word.trim() === "") {
              newNodes.push(document.createTextNode(word));
            } else {
              const wordSpan = document.createElement("span");
              wordSpan.className = "inline-block whitespace-nowrap mr-1.5";
              
              const chars = word.split("");
              chars.forEach((char) => {
                const charSpan = document.createElement("span");
                charSpan.className = "char-anim";
                charSpan.textContent = char;
                wordSpan.appendChild(charSpan);
              });
              
              newNodes.push(wordSpan);
            }
          });
          return newNodes;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node as HTMLElement;
          if (el.tagName === "BR") {
            return [el.cloneNode(true)];
          }
          const clone = el.cloneNode(false) as HTMLElement;
          const childNodes = Array.from(el.childNodes);
          childNodes.forEach((child) => {
            const processed = processNode(child);
            processed.forEach((pChild) => clone.appendChild(pChild));
          });
          return [clone];
        }
        return [node.cloneNode(true)];
      };

      const childNodes = Array.from(htmlElement.childNodes);
      htmlElement.innerHTML = "";
      childNodes.forEach((child) => {
        const processed = processNode(child);
        processed.forEach((pChild) => htmlElement.appendChild(pChild));
      });

      const chars = htmlElement.querySelectorAll(".char-anim");
      const isHeroTitle = htmlElement.classList.contains("hero-title");

      if (isHeroTitle) {
        // We will animate the Hero title characters in the entrance timeline instead!
        // We set initial state here
        gsap.set(chars, {
          transform: "perspective(1000px) rotateX(-80deg) translateZ(-20px)",
          opacity: 0
        });
      } else {
        gsap.to(chars, {
          scrollTrigger: {
            trigger: htmlElement,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          transform: "perspective(1000px) rotateX(0deg) translateZ(0px)",
          opacity: 1,
          stagger: {
            each: 0.03,
            from: "start",
          },
          duration: 0.8,
          ease: "power3.out",
        });
      }
    });

    // 2. Process word-level blur titles (.bw-spilt-title-two)
    const blurTitleElements = document.querySelectorAll(".bw-spilt-title-two");
    blurTitleElements.forEach((element) => {
      const htmlElement = element as HTMLElement;

      const processNode = (node: Node): Node[] => {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent || "";
          const words = text.split(/(\s+)/); // keep whitespace
          const newNodes: Node[] = [];
          
          words.forEach((word) => {
            if (word.trim() === "") {
              newNodes.push(document.createTextNode(word));
            } else {
              const wordSpan = document.createElement("span");
              wordSpan.className = "word-blur-anim";
              wordSpan.textContent = word;
              newNodes.push(wordSpan);
            }
          });
          return newNodes;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node as HTMLElement;
          if (el.tagName === "BR") {
            return [el.cloneNode(true)];
          }
          const clone = el.cloneNode(false) as HTMLElement;
          const childNodes = Array.from(el.childNodes);
          childNodes.forEach((child) => {
            const processed = processNode(child);
            processed.forEach((pChild) => clone.appendChild(pChild));
          });
          return [clone];
        }
        return [node.cloneNode(true)];
      };

      const childNodes = Array.from(htmlElement.childNodes);
      htmlElement.innerHTML = "";
      childNodes.forEach((child) => {
        const processed = processNode(child);
        processed.forEach((pChild) => htmlElement.appendChild(pChild));
      });

      const wordsToAnimate = htmlElement.querySelectorAll(".word-blur-anim");
      gsap.to(wordsToAnimate, {
        scrollTrigger: {
          trigger: htmlElement,
          start: "top 95%",
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.02,
        duration: 0.75,
        ease: "power3.out",
      });
    });

    // 2.5. Bubbling Title — per-letter pop-in, then a continuous floating wave
    const bubbleLoops: gsap.core.Tween[] = [];
    const bubbleTitles = document.querySelectorAll(".bubble-text");
    bubbleTitles.forEach((element) => {
      const htmlElement = element as HTMLElement;

      // Split text into per-character spans, wrapped per-word so words never break mid-letter
      const processNode = (node: Node): Node[] => {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent || "";
          const words = text.split(/(\s+)/); // keep whitespace
          const out: Node[] = [];
          words.forEach((word) => {
            if (word.trim() === "") {
              out.push(document.createTextNode(word));
            } else {
              const wordSpan = document.createElement("span");
              wordSpan.className = "inline-block whitespace-nowrap";
              word.split("").forEach((char) => {
                const charSpan = document.createElement("span");
                charSpan.className = "bubble-char inline-block";
                charSpan.textContent = char;
                wordSpan.appendChild(charSpan);
              });
              out.push(wordSpan);
            }
          });
          return out;
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node as HTMLElement;
          if (el.tagName === "BR") return [el.cloneNode(true)];
          const clone = el.cloneNode(false) as HTMLElement;
          Array.from(el.childNodes).forEach((child) => {
            processNode(child).forEach((p) => clone.appendChild(p));
          });
          return [clone];
        }
        return [node.cloneNode(true)];
      };

      const childNodes = Array.from(htmlElement.childNodes);
      htmlElement.innerHTML = "";
      childNodes.forEach((child) => {
        processNode(child).forEach((p) => htmlElement.appendChild(p));
      });

      const chars = htmlElement.querySelectorAll<HTMLElement>(".bubble-char");
      if (chars.length === 0) return;

      // Hidden initial state — letters start small, flipped back, blurred & below
      gsap.set(chars, {
        yPercent: 80,
        opacity: 0,
        scale: 0.4,
        rotateX: -75,
        transformPerspective: 800,
        transformOrigin: "50% 100%",
        filter: "blur(10px)",
      });

      // Entrance: letters flip up + pop + sharpen in sequence (catchy intro),
      // then hand off to the endless float
      gsap.to(chars, {
        scrollTrigger: {
          trigger: htmlElement,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        yPercent: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "back.out(1.6)",
        stagger: { each: 0.045, from: "start" },
        onComplete: () => {
          // Continuous bubbling — each letter bobs on a staggered sine offset (uses
          // px `y` so it never collides with the yPercent-based entrance above)
          const loop = gsap.to(chars, {
            y: -16,
            duration: 1.4,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            stagger: { each: 0.07, from: "start" },
          });
          bubbleLoops.push(loop);
        },
      });
    });

    // 3. Process letters fade in (.letters-fade-in)
    const lettersFadeElements = document.querySelectorAll(".letters-fade-in");
    lettersFadeElements.forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        start: "top 90%",
        onEnter: () => {
          element.classList.add("is-visible");
        },
        once: true,
      });
    });

    // 4. Paragraph Text Background Scroll Scrub (.bw-split-text)
    const scrollTextElements = document.querySelectorAll(".bw-split-text");
    scrollTextElements.forEach((element) => {
      const text = element.textContent || "";
      element.innerHTML = ""; // Clear

      const lineSpan = document.createElement("span");
      lineSpan.className = "split-text-line";
      lineSpan.textContent = text;
      element.appendChild(lineSpan);

      gsap.to(lineSpan, {
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 60%",
          scrub: 1,
        },
        backgroundSize: "100% 100%",
        ease: "none",
      });
    });

    // 4b. Paragraph Text Background Scroll Scrub (.bw-split-text-light)
    const scrollTextElementsLight = document.querySelectorAll(".bw-split-text-light");
    scrollTextElementsLight.forEach((element) => {
      const text = element.textContent || "";
      element.innerHTML = ""; // Clear

      const lineSpan = document.createElement("span");
      lineSpan.className = "split-text-line-light";
      lineSpan.textContent = text;
      element.appendChild(lineSpan);

      gsap.to(lineSpan, {
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 60%",
          scrub: 1,
        },
        backgroundSize: "100% 100%",
        ease: "none",
      });
    });

    // 5. Stats Counters Count-Up Animation
    const counters = document.querySelectorAll("[data-count-target]");
    counters.forEach((counter) => {
      const target = parseFloat(counter.getAttribute("data-count-target") || "0");
      const suffix = counter.getAttribute("data-count-suffix") || "";
      const decimals = parseInt(counter.getAttribute("data-count-decimals") || "0");
      const startVal = parseFloat(counter.getAttribute("data-count-start") || "0");

      const countObject = { val: startVal };

      gsap.to(countObject, {
        val: target,
        duration: 2.0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: counter,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          counter.textContent = countObject.val.toFixed(decimals) + suffix;
        },
      });
    });

    // 6. Slogan Word-by-Word Scroll Reveal
    const sloganElements = document.querySelectorAll(".slogan-scroll-reveal");
    sloganElements.forEach((slogan) => {
      const text = slogan.textContent || "";
      slogan.innerHTML = ""; // Clear

      const words = text.split(" ");
      words.forEach((word) => {
        const wordSpan = document.createElement("span");
        wordSpan.className = "slogan-word mr-2.5 inline-block";
        wordSpan.textContent = word;
        slogan.appendChild(wordSpan);
      });

      const spans = slogan.querySelectorAll(".slogan-word");
      
      gsap.to(spans, {
        scrollTrigger: {
          trigger: slogan,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 0.5,
        },
        opacity: 1,
        color: "#ffffff", // Slogan text turns white on scroll (since it's a dark section now!)
        stagger: 0.05,
        ease: "none",
      });
    });

    // 7. Process Connector Line Scroll-Draw Animation
    const activeLine = document.querySelector(".process-line-active");
    if (activeLine) {
      gsap.to(activeLine, {
        scrollTrigger: {
          trigger: ".process-step-container",
          start: "top 80%",
          end: "bottom 70%",
          scrub: true,
        },
        width: "100%",
        ease: "none",
      });
    }

    // 7.5. Dark Services Section — Row Entrance + Tilted Image Parallax
    const serviceRows = document.querySelectorAll(".service-row-dark");
    if (serviceRows.length > 0) {
      // Each row slides in from the right, scrubbed to scroll position
      serviceRows.forEach((row) => {
        gsap.fromTo(
          row,
          { x: 180, opacity: 0 },
          {
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
              end: "top 35%",
              scrub: 1.2,
            },
            x: 0,
            opacity: 1,
            ease: "none",
          }
        );
      });

      // Tilted image parallax — GSAP owns the full transform (rotation + yPercent)
      const tiltedImgs = document.querySelectorAll(".service-tilted-img-wrap");
      tiltedImgs.forEach((img) => {
        const rotate = parseFloat((img as HTMLElement).dataset.rotate || "0");

        // Set initial rotation state
        gsap.set(img, { rotation: rotate });

        // Scroll-scrub vertical parallax (creates floating 3-D depth illusion)
        gsap.to(img, {
          yPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        // Hover: flatten tilt + slight scale-up
        img.addEventListener("mouseenter", () => {
          gsap.to(img, {
            rotation: rotate > 0 ? 2 : -2,
            scale: 1.05,
            duration: 0.5,
            ease: "power2.out",
            overwrite: "auto",
          });
        });

        img.addEventListener("mouseleave", () => {
          gsap.to(img, {
            rotation: rotate,
            scale: 1,
            duration: 0.65,
            ease: "power3.out",
            overwrite: "auto",
          });
        });
      });
    }

    // 7.55. Services Portfolio - pinned image/card stack on desktop
    const servicesSection = document.querySelector(".services-portfolio-section");
    const servicesPin = document.querySelector(".services-stack-pin");
    const servicesStack = document.querySelector(".services-card-stack");
    const servicesCards = gsap.utils.toArray<HTMLElement>(".services-scroll-card");

    if (servicesSection && servicesPin && servicesStack && servicesCards.length > 1) {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          gsap.set(servicesCards, {
            position: "absolute",
            inset: 0,
            autoAlpha: 0,
            yPercent: 18,
            scale: 0.94,
            zIndex: (index) => index + 1,
          });

          gsap.set(servicesCards[0], {
            autoAlpha: 1,
            yPercent: 0,
            scale: 1,
          });

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: servicesSection,
              start: "top top",
              end: () => `+=${window.innerHeight * (servicesCards.length - 1)}`,
              scrub: 0.85,
              pin: servicesPin,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          servicesCards.forEach((card, index) => {
            if (index === 0) return;

            timeline
              .to(servicesCards[index - 1], {
                yPercent: -10,
                scale: 0.92,
                autoAlpha: 0.35,
                duration: 0.45,
                ease: "power1.inOut",
              })
              .to(
                card,
                {
                  yPercent: 0,
                  scale: 1,
                  autoAlpha: 1,
                  duration: 0.55,
                  ease: "power1.inOut",
                },
                "<"
              );
          });

          return () => {
            timeline.kill();
            gsap.set(servicesCards, { clearProps: "all" });
          };
        },
      });
    }

    // 7.6. Process Cards — scroll-scrubbed right-to-left entrance (same as service rows)
    const processCards = document.querySelectorAll(".process-card-entrance");
    if (processCards.length > 0) {
      processCards.forEach((card) => {
        gsap.fromTo(
          card,
          { x: 180, opacity: 0 },
          {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 35%",
              scrub: 1.2,
            },
            x: 0,
            opacity: 1,
            ease: "none",
          }
        );
      });
    }

    // 7.65. About Section — background image subtle parallax + scale drift
    const aboutBg = document.querySelector(".about-bg-img");
    if (aboutBg && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.fromTo(
        aboutBg,
        { scale: 1.15, yPercent: -4 },
        {
          scale: 1.05,
          yPercent: 4,
          ease: "none",
          scrollTrigger: { trigger: "#about", start: "top bottom", end: "bottom top", scrub: 1 },
        }
      );
    }

    // 7.7. About Section — Left Column heading (slide from left; clear transform for sticky)
    const aboutLeftCol = document.querySelector(".about-left-col");
    if (aboutLeftCol) {
      gsap.fromTo(aboutLeftCol,
        { x: -50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: "#about",
            start: "top 75%",
            toggleActions: "play none none none",
          },
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          onComplete: () => gsap.set(aboutLeftCol, { clearProps: "transform" }),
        }
      );
    }

    // 7.8. About Section — Right Column paragraph staggered entrance
    const aboutParas = document.querySelectorAll(".about-para-item");
    if (aboutParas.length > 0) {
      gsap.fromTo(
        aboutParas,
        { x: 50, opacity: 0 },
        {
          scrollTrigger: {
            trigger: "#about",
            start: "top 70%",
            toggleActions: "play none none none",
          },
          x: 0,
          opacity: 1,
          stagger: 0.13,
          duration: 0.75,
          ease: "power3.out",
          onStart: () => {
            // Stagger the CSS accent-bar reveal slightly after text starts appearing
            aboutParas.forEach((para, i) => {
              setTimeout(() => {
                para.classList.add("is-visible");
              }, i * 130 + 200);
            });
          },
        }
      );
    }

    const statsCircles = document.querySelectorAll(".stats-circle-entrance");
    if (statsCircles.length > 0) {
      gsap.fromTo(statsCircles,
        { scale: 0.7, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ".stats-circle-entrance",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          scale: 1,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(1.7)",
        }
      );
    }

    // 7.85. Featured Wins Section — staggered text, circle & image reveals
    const featuredSection = document.querySelector("#featured-wins");
    if (featuredSection) {
      // Staggered text reveals (eyebrows, paragraph, stats) — each on its own trigger
      const featuredReveals = gsap.utils.toArray<HTMLElement>("#featured-wins .featured-reveal");
      featuredReveals.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
          }
        );
      });

      // Circular winner image — pop-in reveal + gentle scroll parallax drift
      const winnerCircle = document.querySelector(".featured-winner-circle");
      if (winnerCircle) {
        gsap.fromTo(
          winnerCircle,
          { scale: 0.82, autoAlpha: 0, y: 30 },
          {
            scrollTrigger: { trigger: winnerCircle, start: "top 95%", toggleActions: "play none none none" },
            scale: 1,
            autoAlpha: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
          }
        );
        gsap.to(winnerCircle, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: { trigger: featuredSection, start: "top bottom", end: "bottom top", scrub: 1 },
        });
      }

      // Inner winner image — slow zoom-out as the section scrolls through
      const winnerImg = document.querySelector(".featured-winner-img");
      if (winnerImg) {
        gsap.fromTo(
          winnerImg,
          { scale: 1.28 },
          {
            scale: 1.1,
            ease: "none",
            scrollTrigger: { trigger: featuredSection, start: "top bottom", end: "center center", scrub: 1 },
          }
        );
      }

      // Large project image frame — clip-path wipe reveal
      const projectFrame = document.querySelector(".featured-project-frame");
      if (projectFrame) {
        gsap.fromTo(
          projectFrame,
          { clipPath: "inset(0% 0% 100% 0%)", y: 60, autoAlpha: 0 },
          {
            scrollTrigger: { trigger: projectFrame, start: "top 86%", toggleActions: "play none none none" },
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            autoAlpha: 1,
            duration: 1.2,
            ease: "power4.out",
          }
        );
      }

      // Inner project image — vertical parallax (scaled up to avoid edge gaps)
      const projectImg = document.querySelector(".featured-project-img");
      if (projectImg) {
        gsap.fromTo(
          projectImg,
          { yPercent: -5, scale: 1.16 },
          {
            yPercent: 5,
            ease: "none",
            scrollTrigger: { trigger: projectFrame || projectImg, start: "top bottom", end: "bottom top", scrub: 1 },
          }
        );
      }

      // "ROAS" watermark — slide in from the right
      const roasWatermark = document.querySelector(".featured-roas-watermark");
      if (roasWatermark) {
        gsap.fromTo(
          roasWatermark,
          { x: 70, autoAlpha: 0 },
          {
            scrollTrigger: { trigger: roasWatermark, start: "top 94%", toggleActions: "play none none none" },
            x: 0,
            autoAlpha: 1,
            duration: 1,
            ease: "power3.out",
          }
        );
      }
    }

    // 7.9. Why Choose Us — card columns slide in toward the gallery; gallery pops in
    const whyGrid = document.querySelector(".why-us-grid");
    if (whyGrid) {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const leftCards = gsap.utils.toArray<HTMLElement>(".why-col-left .why-card");
      const rightCards = gsap.utils.toArray<HTMLElement>(".why-col-right .why-card");
      const gallery = document.querySelector(".why-gallery");

      if (prefersReduced) {
        // Reveal everything instantly — markup ships with opacity-0
        gsap.set([...leftCards, ...rightCards], { opacity: 1, x: 0 });
        if (gallery) gsap.set(gallery, { opacity: 1, scale: 1 });
      } else {
        if (gallery) {
          gsap.fromTo(
            gallery,
            { autoAlpha: 0, scale: 0.92 },
            {
              scrollTrigger: { trigger: whyGrid, start: "top 80%", toggleActions: "play none none none" },
              autoAlpha: 1,
              scale: 1,
              duration: 1,
              ease: "power3.out",
            }
          );
        }

        // Directional reveal toward the centerpiece; clear transform after so the
        // CSS hover-lift keeps working
        const animateGroup = (cards: HTMLElement[], fromX: number) => {
          if (cards.length === 0) return;
          gsap.fromTo(
            cards,
            { x: fromX, opacity: 0 },
            {
              scrollTrigger: { trigger: whyGrid, start: "top 75%", toggleActions: "play none none none" },
              x: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
              onComplete: () => gsap.set(cards, { clearProps: "transform" }),
            }
          );
        };
        animateGroup(leftCards, -50);
        animateGroup(rightCards, 50);
      }
    }

    // 7.95. Quality Banner — text rise, capability-card slide-in, progress-bar fill
    const qualitySection = document.querySelector(".quality-banner-topography");
    if (qualitySection) {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const qbReveals = gsap.utils.toArray<HTMLElement>(".quality-banner-topography .quality-reveal");
      const qbCards = gsap.utils.toArray<HTMLElement>(".quality-card");
      const qbBars = gsap.utils.toArray<HTMLElement>(".quality-bar-fill");

      if (prefersReduced) {
        // Markup ships with opacity-0 / unscaled bars — reveal everything instantly
        gsap.set([...qbReveals, ...qbCards], { opacity: 1, x: 0, y: 0 });
        gsap.set(qbBars, { scaleX: 1 });
      } else {
        // Left column — staggered rise establishes the claim before the proof
        if (qbReveals.length > 0) {
          gsap.fromTo(
            qbReveals,
            { y: 40, opacity: 0 },
            {
              scrollTrigger: { trigger: qualitySection, start: "top 72%", toggleActions: "play none none none" },
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
            }
          );
        }

        // Capability cards — slide in from the right, each on its own trigger
        qbCards.forEach((card) => {
          gsap.fromTo(
            card,
            { x: 60, opacity: 0 },
            {
              scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none none" },
              x: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            }
          );
        });

        // Progress bars — fill from empty (scaleX is GPU-friendly vs animating width)
        qbBars.forEach((bar) => {
          gsap.fromTo(
            bar,
            { scaleX: 0 },
            {
              scrollTrigger: { trigger: bar, start: "top 92%", toggleActions: "play none none none" },
              scaleX: 1,
              duration: 1.2,
              ease: "power2.out",
            }
          );
        });
      }
    }

    // 7.97. Experience Section — card/image reveals + Impressions bar clip-wipes
    const expSection = document.querySelector(".experience-section");
    if (expSection) {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const expReveals = gsap.utils.toArray<HTMLElement>(".experience-section .exp-reveal");
      const expBars = gsap.utils.toArray<HTMLElement>(".experience-section .exp-bar");

      if (prefersReduced) {
        gsap.set(expReveals, { opacity: 1, y: 0 });
        gsap.set(expBars, { clipPath: "none" });
      } else {
        // Image + stat cards rise into place, each on its own trigger
        expReveals.forEach((el) => {
          gsap.fromTo(
            el,
            { y: 44, opacity: 0 },
            {
              scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
              y: 0,
              opacity: 1,
              duration: 0.85,
              ease: "power3.out",
            }
          );
        });

        // Impressions bars wipe in left→right (clip-path keeps inner text crisp)
        expBars.forEach((bar, i) => {
          gsap.fromTo(
            bar,
            { clipPath: "inset(0 100% 0 0)" },
            {
              scrollTrigger: { trigger: bar, start: "top 90%", toggleActions: "play none none none" },
              clipPath: "inset(0 0% 0 0)",
              duration: 0.9,
              delay: i * 0.08,
              ease: "power3.out",
            }
          );
        });
      }
    }

    // 8. 3D Tilt Card Effect
    const tiltCards = document.querySelectorAll(".tilt-card");
    tiltCards.forEach((card) => {
      const handleMouseMove = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left;
        const y = mouseEvent.clientY - rect.top;
        const xc = rect.width / 2;
        const yc = rect.height / 2;
        
        // Calculate tilt rotation angles
        const rotateX = (yc - y) / 10; // Max 10 deg tilt
        const rotateY = (x - xc) / 10;
        
        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          transformPerspective: 800,
          ease: "power2.out",
          duration: 0.3,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          ease: "power3.out",
          duration: 0.6,
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    // 9. Magnetic Buttons Effect
    const magneticBtns = document.querySelectorAll(".roas-circle-btn, .magnet-btn");
    magneticBtns.forEach((btn) => {
      const handleMouseMove = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = (btn as HTMLElement).getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left - rect.width / 2;
        const y = mouseEvent.clientY - rect.top - rect.height / 2;
        
        // Translate button towards cursor (30% pull)
        gsap.to(btn, {
          x: x * 0.35,
          y: y * 0.35,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      btn.addEventListener("mousemove", handleMouseMove);
      btn.addEventListener("mouseleave", handleMouseLeave);
    });

    // 9.5. Footer Watermark Parallax Scroll Slide
    const footerWatermark = document.querySelector(".footer-watermark");
    if (footerWatermark) {
      gsap.fromTo(footerWatermark,
        { xPercent: -58 },
        {
          scrollTrigger: {
            trigger: "footer",
            start: "top bottom",
            end: "bottom bottom",
            scrub: 1,
          },
          xPercent: -42,
          ease: "none",
        }
      );
    }

    // 9.6. Footer — columns rise in as the footer enters view
    const footerReveals = gsap.utils.toArray<HTMLElement>(".footer-reveal");
    if (footerReveals.length > 0) {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReduced) {
        gsap.set(footerReveals, { opacity: 1, y: 0 });
      } else {
        gsap.fromTo(
          footerReveals,
          { y: 40, opacity: 0 },
          {
            scrollTrigger: { trigger: "footer", start: "top 80%", toggleActions: "play none none none" },
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          }
        );
      }
    }

    // 10. Hero Load-Based Entrance Animations (Play after preloader actually finishes)
    const runHeroEntrance = () => {
      const heroTimeline = gsap.timeline();

      // A. Animate the eyebrow badge
      heroTimeline.fromTo(".hero-eyebrow", 
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );

      // B. Animate the Hero title characters
      const heroChars = document.querySelectorAll(".hero-title .char-anim");
      if (heroChars.length > 0) {
        heroTimeline.to(heroChars, {
          transform: "perspective(1000px) rotateX(0deg) translateZ(0px)",
          opacity: 1,
          stagger: 0.015,
          duration: 0.75,
          ease: "power3.out"
        }, "-=0.45");
      }

      // C. Animate the Hero subtitle text
      heroTimeline.fromTo(".hero-subtitle",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.45"
      );

      // D. Animate bottom CTA buttons
      heroTimeline.fromTo(".hero-cta-button",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power3.out" },
        "-=0.45"
      );

      // E. Animate Customer Avatars (slide in staggered) and Cert Text
      heroTimeline.fromTo(".hero-avatar",
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.06, ease: "power3.out" },
        "-=0.6"
      );
      heroTimeline.fromTo(".hero-cert-text",
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

      // F. Animate Audit block (slide in from right)
      heroTimeline.fromTo(".hero-audit-box",
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        "-=0.6"
      );

      // G. Animate Social links staggered
      heroTimeline.fromTo(".hero-social-link",
        { opacity: 0, x: 15 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.06, ease: "power2.out" },
        "-=0.4"
      );
    };

    // Listen for the Preloader to finish — event-driven so it works on any connection speed
    const onPreloaderDone = () => {
      window.removeEventListener("preloaderDone", onPreloaderDone);
      runHeroEntrance();
    };
    window.addEventListener("preloaderDone", onPreloaderDone);

    // Safety fallback: if preloader event never fires (e.g. cached page, slow network), 
    // run hero entrance after 4.5s anyway
    const heroFallbackTimer = setTimeout(() => {
      window.removeEventListener("preloaderDone", onPreloaderDone);
      runHeroEntrance();
    }, 4500);

    // 11. Cursor-following Glow Blob Event Listener
    const heroSection = document.querySelector(".hero-section-container");
    const glowBlob = document.querySelector(".hero-glow-blob") as HTMLElement;
    
    const handleHeroMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = (heroSection as HTMLElement).getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;
      
      gsap.to(glowBlob, {
        x: x - 225, // offset half width
        y: y - 225, // offset half height
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      });
    };
    
    const handleHeroMouseLeave = () => {
      gsap.to(glowBlob, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    };

    if (heroSection && glowBlob) {
      heroSection.addEventListener("mousemove", handleHeroMouseMove);
      heroSection.addEventListener("mouseleave", handleHeroMouseLeave);
    }

    // Refresh ScrollTrigger to align triggers properly
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 600);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      bubbleLoops.forEach((loop) => loop.kill());
      window.removeEventListener("preloaderDone", onPreloaderDone);
      clearTimeout(heroFallbackTimer);
      if (heroSection) {
        heroSection.removeEventListener("mousemove", handleHeroMouseMove);
        heroSection.removeEventListener("mouseleave", handleHeroMouseLeave);
      }
    };
  }, []);

  return null;
}
