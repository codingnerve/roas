# Services Section — Design System Reference

## Source
Analyzed from screen recording `Screen Recording 2026-06-03 175839.mp4` — a premium agency template on Envato Market.

---

## 1. Aesthetic & Philosophy
Dark mode editorial layout with strong typographic hierarchy, tilted collage imagery, and scroll-driven GSAP animations. Minimalist yet high-impact — every element is intentional.

## 2. Color Tokens
| Role | Hex | Usage |
|---|---|---|
| Section Background | `#060907` | Full section dark base |
| Primary Text | `#FFFFFF` | Headings, titles |
| Muted Text | `rgba(255,255,255,0.45–0.60)` | Body copy, labels |
| Eyebrow / Accent | `#FF5B22` | Category block indicator, coral-red |
| Image Accent: Yellow | `#F5C842` | Service 01, 04 backdrops |
| Image Accent: Blue | `#4287F5` | Service 02, 05 backdrops |
| Image Accent: Purple | `#8B5CF6` | Service 03, 06 backdrops |
| Section Transition End | `#F4F8F5` | Gradient fade to next section |

## 3. Typography
- **Eyebrow:** 12px, uppercase, `#FF5B22`, `tracking-[0.2em]`, preceded by a `■` block indicator
- **Section Heading:** 60–96px, `font-black`, `leading-[0.92]`, `tracking-tighter`, white, uppercase
- **Card Title:** 40–52px, `font-black`, white, `leading-none`
- **Body Copy:** 15px, `text-white/55`, `leading-relaxed`
- **Pill Tags:** 12px, `font-bold`, `font-heading`, white/60, rounded-full
- **CTA Label:** 12px, uppercase, `tracking-wider`, white/35

## 4. Layout
### Section Header (asymmetric split)
```
[LEFT]                          [RIGHT]
■ WHAT WE DO                    [Intro paragraph — max-w-[340px]]
Services Built
for Performance
```
Separated from service rows by a `border-b border-white/[0.08]`.

### Service Rows (horizontal, full-width)
Each row is a 12-column grid: `lg:grid-cols-12`
- **Odd rows (0, 2, 4):** Image left (col-span-5), Content right (col-span-7)
- **Even rows (1, 3, 5):** Content left (col-span-7), Image right (col-span-5) — via `lg:order-2`

Content right pillar:
```
[num label — tiny, faded]
[Service Title — large]
[Body paragraph]
[Pill tags row]
[Circle CTA ↗]  Get Started
```

## 5. Tilted Image Component
- Container: `aspect-[4/3]`, `rounded-2xl`, `overflow-hidden`, `shadow-2xl`
- **Alternating rotation:** -6deg (odd rows) / +6deg (even rows) — set via GSAP `rotation`
- Layered composition:
  1. Solid color backdrop div (bgAccent color)
  2. Project image on top with `mix-blend-overlay opacity-60`
  3. Large faded number watermark bottom-right
- **Hover:** GSAP flattens rotation to ±2deg + `scale(1.04)`
- **Scroll parallax:** GSAP ScrollTrigger scrub, `yPercent: -18`, creating floating depth illusion

## 6. Pill Tags
- `rounded-full`, `border border-white/12`
- CSS custom property `--pill-accent` per-tag (matches card's accent color)
- Hover: `border-color`, `color` transition to `--pill-accent`
- Background on hover: `color-mix(in srgb, accent 8%, transparent)`

## 7. Circular CTA Button
- `w-[54px] h-[54px]`, `rounded-full`, `border border-white/20`
- Contains diagonal arrow SVG `↗` (`M5 19L19 5M19 5H9M19 5V15`)
- CSS custom property `--cta-accent` per-card
- Hover: fill `background-color` to `--cta-accent`, `scale(1.12)`, arrow translates +0.5px / -0.5px

## 8. Animations & Transitions

### A. Section Row Entrance (GSAP ScrollTrigger)
```js
gsap.fromTo(row,
  { y: 60, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.85, ease: "power3.out",
    scrollTrigger: { trigger: row, start: "top 80%" } }
);
```

### B. Tilted Image Parallax (GSAP Scrub)
```js
gsap.to(img, {
  yPercent: -18, ease: "none",
  scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true }
});
```

### C. Hover — Flatten Tilt
```js
img.addEventListener("mouseenter", () =>
  gsap.to(img, { rotation: ±2, scale: 1.04, duration: 0.5, ease: "power2.out" })
);
img.addEventListener("mouseleave", () =>
  gsap.to(img, { rotation: originalDeg, scale: 1, duration: 0.6, ease: "power3.out" })
);
```

### D. Section Bottom Transition
```html
<div class="h-32 w-full bg-gradient-to-b from-[#060907] to-[#F4F8F5]" />
```
Smoothly blends the dark section into the next light section without a hard border.

## 9. CSS Classes Added
| Class | Purpose |
|---|---|
| `.service-row-dark` | Row container — entrance animation target |
| `.service-tilted-img-wrap` | Tilt + parallax container |
| `.service-pill-tag` | Pill tag with `--pill-accent` variable |
| `.service-circle-cta` | Circular arrow CTA button |
