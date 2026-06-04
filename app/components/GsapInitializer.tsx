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

    // 7.7. About Section — Right Column Paragraphs (staggered slide from right)
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
