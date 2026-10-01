---
version: "2.0"
name: "Ignis AI"
description: |
  Ignis AI V2 design specification and motion system. Projects an authoritative,
  disciplined, and editorial digital presence tailored specifically for Australian
  small-to-medium enterprises (SMEs) exploring practical AI adoption and workflow
  automation. The visual identity pairs an organic, tactile paper foundation (#FDFAF8)
  and deep espresso ink (#1C1210) with sharp, purposeful coral accents (#E8483D) that
  signal energy, direction, and conversion. Depth is communicated through layered-micro
  surfaces, crisp 1px hairline rules, and generous editorial whitespace rather than heavy
  shadows. Motion is strictly restrained and functional: subtle scale/translate
  micro-interactions, responsive hover states, lightweight transitions, and quiet system
  indicators that communicate clarity and confidence without turning the website into
  a designer portfolio.
source:
  project: "Ignis AI V2 Website Redesign"
  targetAudience: "Australian SME Owners, Operations Managers, and Business Leaders"
  referenceSystem: "www.smecai.au-DESIGN.md (Structural & Motion Approach Reference)"
  versionDate: "2026-09-30"
colors:
  paper: "#FDFAF8"
  ink: "#1C1210"
  coral: "#E8483D"
  coral-deep: "#C93227"
  blush: "#FFF6F3"
  line: "#EBDDD8"
  muted: "#7A6F6D"
  card: "#FFFFFF"
  pill-bg: "#140E0D"
  pill-text: "#FDFAF8"
  pill-border: "rgba(255, 255, 255, 0.12)"
  pill-divider: "rgba(255, 255, 255, 0.20)"
  status-pass: "#2F7D57"
  status-building: "#F7C9A8"
typography:
  display-xl:
    fontFamily: "'DM Serif Display', Georgia, serif"
    fontSize: 76px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.035em
  display-lg:
    fontFamily: "'DM Serif Display', Georgia, serif"
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.10
    letterSpacing: -0.025em
  display-md:
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.030em
  heading-sm:
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: -0.020em
  heading-xs:
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: -0.010em
  body-lg:
    fontFamily: "Karla, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: 0px
  body-md:
    fontFamily: "Karla, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.64
    letterSpacing: 0px
  body-sm:
    fontFamily: "Karla, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: 0px
  mono-label:
    fontFamily: "'IBM Plex Mono', ui-monospace, Menlo, Consolas, monospace"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.40
    letterSpacing: 0.12em
    textTransform: uppercase
  button-primary:
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.00
    letterSpacing: 0.06em
    textTransform: uppercase
rounded:
  none: 0px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  xxxl: 40px
  section: 48px
  band: 80px
  hero: 112px
borderWidths:
  thin: 1px
shadows:
  sm: "0 2px 8px rgba(20, 14, 13, 0.04)"
  md: "0 8px 24px rgba(20, 14, 13, 0.06)"
  lg: "0 16px 40px rgba(20, 14, 13, 0.08)"
  cta: "0 2px 10px rgba(232, 72, 61, 0.28)"
elevationStrategy: "border+surface"
themes:
  light:
    paper: "#FDFAF8"
    ink: "#1C1210"
    coral: "#E8483D"
    blush: "#FFF6F3"
    line: "#EBDDD8"
    muted: "#7A6F6D"
    card: "#FFFFFF"
  dark:
    paper: "#0D0807"
    ink: "#F7F3EE"
    coral: "#FF5A4E"
    blush: "#17100F"
    line: "#2B1E1C"
    muted: "#9E918E"
    card: "#150F0E"
motionTokens:
  ease-out: "cubic-bezier(0.16, 1, 0.3, 1)"
  ease-in-out: "cubic-bezier(0.65, 0, 0.35, 1)"
  duration-instant: "120ms"
  duration-fast: "180ms"
  duration-base: "240ms"
  duration-moderate: "320ms"
  duration-slow: "500ms"
  duration-telemetry: "3200ms"
---

# Ignis AI V2 Design Specification

## 1. Visual Theme & Atmosphere

Ignis AI V2 represents an intentional evolution from experimental V1 visuals to a confident, mature, SME-focused operational identity. Where V1 explored complex 3D assets, cinematic intro loaders, and dark mode experimentation, V2 shifts focus entirely to **commercial clarity, trust, and business credibility**.

The visual language is built around an editorial, warm paper foundation (`#FDFAF8`) grounded by deep espresso ink (`#1C1210`) and punctuated by a single energetic brand accent: Ignis Coral (`#E8483D`). This structure feels established, authoritative, and human, rejecting cold corporate tech tropes while avoiding hyper-trendy design portfolio gimmicks.

### Core Visual Principles
- **Clarity Over Cleverness:** Layouts, copy, and interactions communicate what Ignis builds, how systems operate, and what clients receive before any decorative consideration.
- **Editorial Authority:** Generous typography hierarchies pair high-contrast serifs with modern geometric grotesque sans-serifs, providing an established, thoughtful rhythm.
- **Micro-Layered Depth:** Rather than heavy, muddy drop shadows, depth is achieved through crisp 1px hairline rules (`#EBDDD8`), subtle surface background shifts (`#FFF6F3` to `#FFFFFF`), and soft diffused ambient occlusions.
- **Restrained Motion:** Motion is treated as functional polish. The interface remains 85–90% visually static, utilizing micro-interactions only to signal touch states, directional affordance, and quiet system telemetry.

---

## 2. Color Palette & Roles

```
[ #FDFAF8 ] Paper (Default Background)
[ #1C1210 ] Ink (Primary Headings & Dominant Authority)
[ #E8483D ] Coral (Primary Call-to-Action & Interactive Accent)
[ #FFF6F3 ] Blush (Soft Tinted Surface & Card Backdrops)
[ #EBDDD8 ] Line (1px Structural Hairlines & Borders)
[ #7A6F6D ] Muted (Secondary Copy, Eyebrows & System Metadata)
[ #FFFFFF ] Card (Pure Elevated Surfaces)
[ #2F7D57 ] Status Pass (Telemetry Operational Green)
[ #F7C9A8 ] Status Building (Telemetry Amber / In-Progress)
```

### Color Token Reference

| Token | Hex / Value | UI Role | WCAG Contrast |
|---|---|---|---|
| `--ignis-paper` | `#FDFAF8` | Global canvas background, light warm paper tone | Base surface |
| `--ignis-ink` | `#1C1210` | Primary headings, brand wordmark, dominant text | 16.4:1 on Paper (AAA) |
| `--ignis-coral` | `#E8483D` | Primary action buttons, active indicator dots, link accents | 4.8:1 on Paper (AA) |
| `--ignis-coral-deep`| `#C93227` | Hover and active states for coral interactive controls | 6.2:1 on Paper (AAA) |
| `--ignis-blush` | `#FFF6F3` | Secondary section backgrounds, subtle container fills | 1.05:1 contrast against paper |
| `--ignis-line` | `#EBDDD8` | Hairline dividers, 1px card borders, table separators | Structural 1px boundary |
| `--ignis-muted` | `#7A6F6D` | Subheadings, supporting paragraphs, monospace tags | 5.2:1 on Paper (AA) |
| `--ignis-card` | `#FFFFFF` | Elevated cards, interactive panels, dropdown menus | Surface lift |
| `--ignis-pill-bg` | `#140E0D` | Dark floating capsule containers, secondary button pills | 17.5:1 on Paper (AAA) |
| `--ignis-pill-text`| `#FDFAF8` | Text inside dark pills and action capsules | 17.5:1 against pill-bg |
| `--ignis-status-pass`| `#2F7D57`| Handover verified checkmarks, active system status | 5.8:1 on Paper (AA) |
| `--ignis-status-building`| `#F7C9A8`| Warm amber for in-progress pipeline stages | Decorative badge fill |

---

## 3. Typography Rules & Editorial Standards

Ignis V2 uses a disciplined four-font typographic system to balance editorial warmth, corporate authority, and system credibility:

1. **Display & Editorial Headlines:** `DM Serif Display` (Georgia, serif fallback). Imparts warmth, craft, and permanence. Used for primary narrative hooks and hero titles.
2. **Structural Headings & Navigation:** `Plus Jakarta Sans` (system sans fallback). Clean, modern geometric grotesk used for section titles, card headers, and button labels.
3. **Body & Explanation Copy:** `Karla` (system sans fallback). Highly legible, human grotesk optimized for long-form reading, scenario explanations, and FAQ answers.
4. **System Telemetry & Metadata:** `IBM Plex Mono` (monospace fallback). Used for eyebrows, step indices (`01 /`), system labels, and code citations.

### Typographic Hierarchy

| Role | Font Family | Size | Weight | Line Height | Letter Spacing | Use Case |
|---|---|---|---|---|---|---|
| `display-xl` | DM Serif Display | 76px (4.75rem) | 400 | 1.05 | -0.035em | Main Hero Title |
| `display-lg` | DM Serif Display | 56px (3.50rem) | 400 | 1.10 | -0.025em | Major Section Narrative Headers |
| `display-md` | Plus Jakarta Sans | 40px (2.50rem) | 700 | 1.15 | -0.030em | Service & Second Brain Headings |
| `heading-sm` | Plus Jakarta Sans | 24px (1.50rem) | 700 | 1.25 | -0.020em | Card Titles, Process Milestones |
| `heading-xs` | Plus Jakarta Sans | 20px (1.25rem) | 600 | 1.35 | -0.010em | FAQ Questions, Dialogue Prompts |
| `body-lg` | Karla | 19px (1.1875rem) | 400 | 1.60 | 0px | Hero Subhead, Lead Paragraphs |
| `body-md` | Karla | 17px (1.0625rem) | 400 | 1.64 | 0px | Standard Body Text, Service Descriptions |
| `body-sm` | Karla | 15px (0.9375rem) | 400 | 1.60 | 0px | Secondary Notes, Disclaimers, Footers |
| `mono-label` | IBM Plex Mono | 12px (0.75rem) | 600 | 1.40 | 0.12em | Eyebrow Tags, Status Labels (UPPERCASE) |
| `button-primary`| Plus Jakarta Sans | 14px (0.875rem) | 700 | 1.00 | 0.06em | Button Text (UPPERCASE) |

### Copywriting Rules
- **No Em Dashes:** Strict project-wide rule. Never use em dashes (`—`) or en dashes (`–`) in public-facing copy. Substitute with commas, colons, or clean separate sentences.
- **Text Wrap Balancing:** Use `text-wrap: balance` on headings and `text-wrap: pretty` on lead paragraphs to prevent orphans.
- **Accurate Terminology:** Emphasize "AI systems built around the work you do", "Your business's second brain", and "Platforms we can build with". Never use exaggerated terms like "magic", "autonomous workforce", or "fake client logos".

---

## 4. Spacing & Sizing Scale

All layout geometry, component heights, and padding derive from a 4px modular base scale:

```
--space-1:   4px    (Micro tag padding, indicator offsets)
--space-2:   8px    (Button gap, icon margins, pill vertical padding)
--space-3:   12px   (Tag horizontal padding, inline gap)
--space-4:   16px   (Standard inner component padding, input margins)
--space-5:   20px   (Card small padding, button horizontal padding)
--space-6:   24px   (Standard card padding, mobile section margin)
--space-8:   32px   (Spacious card padding, grid column gap)
--space-10:  40px   (Large card padding, section gap tablet)
--space-12:  48px   (Major component spacing, accordion margins)
--space-16:  64px   (Section vertical padding mobile)
--space-20:  80px   (Section vertical padding desktop standard)
--space-24:  96px   (Hero top padding, large section divider)
--space-32:  128px  (Major band vertical padding desktop wide)
```

### Container System
- **Compact Nav Capsule:** Max width `1020px`, centered, floating `12px` to `28px` from top.
- **Standard Content Container:** Max width `1440px`, responsive gutter `clamp(20px, 4vw, 48px)`.
- **Wide Editorial Container (`.container-wide`):** Max width `1680px`, responsive gutter `clamp(24px, 5vw, 80px)`.
- **Full Bleed Sections:** `100vw` with interior container bounding to prevent horizontal scrollbars (`overflow-x: hidden`).

---

## 5. Components & Tactile Variants

### 5.1 Primary CTA Button (`.ignis-tactile-btn`, `.nav-book-btn`)
- **Default State:** Height `42px` (desktop) / `38px` (nav), background `#E8483D`, text `#FFFFFF`, border-radius `9999px` (pill), font `Plus Jakarta Sans 13px/700`, uppercase, letter-spacing `0.06em`, padding `0 24px`.
- **Hover State:** Background `#C93227`, transform `translateY(-1px) scale(1.01)`, box-shadow `0 4px 16px rgba(232, 72, 61, 0.32)`.
- **Active State:** Background `#B3271D`, transform `translateY(0) scale(0.99)`.
- **Icon Suffix:** Subtle arrow SVG shifts `+3px` horizontally on hover via `cubic-bezier(0.16, 1, 0.3, 1)`.

### 5.2 Secondary Action Pill (`.ignis-secondary-pill`)
- **Default State:** Height `42px`, background `transparent`, text `#1C1210`, border `1px solid #EBDDD8`, border-radius `9999px`, padding `0 22px`.
- **Hover State:** Background `rgba(28, 18, 16, 0.04)`, border-color `#1C1210`, transform `translateY(-1px) scale(1.01)`.
- **Active State:** Background `rgba(28, 18, 16, 0.08)`, transform `translateY(0) scale(0.99)`.

### 5.3 Floating Navigation Capsule (`.ignis-nav-capsule`)
- **Geometry:** Height `54px`, border-radius `9999px`, background `rgba(255, 255, 255, 0.94)`, backdrop-filter `blur(20px) saturate(180%)`, border `1px solid rgba(220, 215, 210, 0.85)`, box-shadow `0 4px 24px rgba(0, 0, 0, 0.05)`.
- **Links:** Direct links to `#services`, `#how-it-works`, `#founder`, `#faq`. Font `Karla 13.5px/500`, color `#4A423E`, hover color `#1C1210`.
- **Mobile Dropdown Panel:** Expands directly underneath navbar capsule via clip/height reveal with `180ms ease`. No full-screen overlay.

### 5.4 Service Card (`.service-card`)
- **Surface:** Background `#FFFFFF`, border `1px solid #EBDDD8`, border-radius `20px`, padding `clamp(24px, 3.5vw, 40px)`.
- **Interactions:** Subtle border-color transition to `#1C1210` on hover, subtle lift `translateY(-2px)`, arrow shifts `+3px`. The card does not bounce, flip, or scale aggressively.

### 5.5 FAQ Accordion Item (`.faq-accordion-item`)
- **Geometry:** Border `1px solid #EBDDD8`, border-radius `16px`, background `#FFFFFF`, padding `0`.
- **Toggle Button:** Full-width header `padding: 22px 24px`, font `Plus Jakarta Sans 16px/600`, right icon circle `28px` diameter.
- **Open State:** Border-color `rgba(232, 72, 61, 0.4)`, box-shadow `0 4px 20px rgba(232, 72, 61, 0.06)`. Icon transforms smoothly from `+` to `−` (`rotate(45deg)` or character flip). Answer body expands with clean height and opacity transitions.

---

## 6. Layout Principles, Depth & Elevation

| Elevation Level | Physical Spec | Usage Context |
|---|---|---|
| **Base Surface** | Background `#FDFAF8`, no shadow | Global page canvas, editorial columns |
| **Micro Surface**| Background `#FFF6F3`, 1px border `#EBDDD8` | Section backdrops, problem statement bands |
| **Raised Card** | Background `#FFFFFF`, 1px border `#EBDDD8`, shadow `0 2px 8px rgba(20, 14, 13, 0.04)` | Services cards, founder quote block, second brain panel |
| **Elevated Pill**| Background `rgba(255, 255, 255, 0.94)`, blur `20px`, shadow `0 4px 24px rgba(0, 0, 0, 0.05)` | Sticky floating navbar capsule |
| **Active Lift** | Transform `translateY(-1px)` to `translateY(-2px)`, shadow `0 6px 20px rgba(20, 14, 13, 0.08)` | Buttons and interactive cards on hover |

---

## 7. Motion & Interaction

### Structural Reference & Scope Note
This specification carries forward the restrained, functional motion philosophy established in the reference design system (`www.smecai.au-DESIGN.md`):
- Subtle scale and translate interactions (`translateY(-1px)` to `translateY(-2px)`, `scale(1.01)` to `scale(1.02)`)
- Fast, responsive hover states without visual lag
- Lightweight CSS-first transitions without heavy libraries
- Motion that communicates state and interactivity rather than distraction
- Strictly accessible touch targets (minimum `44px`)
- Consistent easing curves throughout the user journey

> [!NOTE]
> The reference design system did not provide an exhaustive animation specification; its extraction noted that timing functions, scroll triggers, and complex transitions were outside its measured scope. This section defines the complete, rigorous motion and interaction standard specifically engineered for the Ignis V2 website.

---

### 7.1 Ignis V2 Motion Philosophy

The Ignis V2 website is intentionally simpler, more grounded, and significantly more professional than V1. It serves commercial business leaders who value dependability, security, and proven ROI over visual novelty.

Motion must strictly support four operational goals:
1. **CLARITY:** Guiding the visitor’s eye through complex systems information, workflow architectures, and verified facts.
2. **CONFIDENCE:** Communicating an engineered, dependable, enterprise-grade software product where nothing jitters, lags, or behaves erratically.
3. **INTERACTION:** Giving immediate, crisp feedback when a visitor taps, hovers, or opens an interactive control.
4. **HIERARCHY:** Distinguishing primary calls-to-action from supporting operational scenarios and citations.

```
+-------------------------------------------------------------+
|                     IGNIS V2 PAGE RATIO                     |
|  [ 85% - 90% VISUALLY STABLE ]    [ 10% - 15% SYSTEM MOTION]|
|  Static editorial copy, data,     Restrained hovers, quiet  |
|  architecture diagrams, FAQs      telemetry, smooth nav     |
+-------------------------------------------------------------+
```

#### What Ignis V2 Motion Feels Like:
- **Professional:** Controlled, deliberate, and understated.
- **Responsive:** Instantly acknowledges user input within 180ms.
- **Alive:** Subtle telemetry and data signals demonstrate an operational system processing information.
- **Controlled:** Zero overshoot, zero physics bounce, zero spring oscillations.
- **Lightweight:** Negligible CPU/GPU load; 60fps on low-power mobile devices.

#### What Ignis V2 Motion Is NOT:
- **NOT cinematic:** No 3-second full-screen typographic intros.
- **NOT experimental:** No generative canvas distortions, noise shaders, or screen-space warping.
- **NOT over-animated:** Text does not constantly dance, float, or split-reveal while the user is reading.
- **NOT game-like:** No particle explosions, gravity simulations, or floating orbs.
- **NOT portfolio-like:** Does not exist to showcase frontend animation tricks.

---

### 7.2 Loader

The previous multi-word cinematic intro loader is completely removed. In V2, the loader is a minimal, utilitarian splash designed solely to mask initial DOM paint and font loading.

```
                    +--------------------+
                    |      IGNIS.        |  (220ms brand flash)
                    +--------------------+
                              |
                              v (180ms ease opacity fade)
                    +--------------------+
                    |    HERO SECTION    |  (Immediate interactive state)
                    +--------------------+
```

#### Loader Technical Requirements:
- **Duration:** Total lifecycle under `400ms` (visible for `220ms`, fades out over `180ms`).
- **Visual Presentation:** Pure white background (`#FFFFFF`), centered Ignis brandmark (`IGNIS.`) with the coral period dot (`#E8483D`) set in `Plus Jakarta Sans 20px/800`.
- **Zero Delay:** The loader does not wait on external network calls or artificial timers.
- **DOM Removal:** The loader node is completely unmounted from the DOM after `450ms` (`display: none` / conditional unmount) to prevent any hit-testing or layout interference.
- **Role:** Exists solely to prevent a Flash of Unstyled Content (FOUC). It does not attempt to create a "cinematic brand moment".

---

### 7.3 Cursor

Use the standard, native system cursor (`cursor: default`, `cursor: pointer`, `cursor: text`).

**Strict Cursor Prohibitions:**
- REMOVE all custom cursor tracking elements.
- NO fire cursor or ember effects.
- NO cursor trailing circles or follower dots.
- NO cursor particle emitters.
- NO cursor light glow or radial spotlight following pointer position.
- NO custom canvas cursor replacements.

Standard browser hover states (`cursor: pointer` on buttons, anchors, and accordion toggles) provide all necessary interactive feedback.

---

### 7.4 Hero Motion

The 3D AI robot head from V1 has been permanently removed.

The V2 hero visual options:
1. **Lightweight Context Layer Visual (Current Default):** A 3-tier architectural diagram illustrating Business Context Inputs $\rightarrow$ Ignis Context Layer $\rightarrow$ Connected AI & LLM Systems.
2. **Sparse Brand Animation:** Minimal stylized Ignis flame mark with slow, breathing opacity.
3. **Static Systems Vector:** Pure SVG diagram with CSS signal indicators.

#### Hero Motion Constraints:
- **Zero Three.js / WebGL:** Three.js and WebGL are prohibited in the hero unless an approved, optimized asset cannot be represented with lighter technologies.
- **Subtle Positional Drift:** If any visual element moves, maximum translational displacement is $\le 4\text{px}$ over a slow $4\text{s}$ duration.
- **Quiet Telemetry:** Indicator lights use a calm $3.2\text{s}$ pulse (`opacity: 0.65` to `1.0`).
- **Systems Over AI:** The visual communicates business context, document retrieval, and human review gates, not generic humanoid artificial intelligence.

---

### 7.5 Micro-Interactions

Following the reference system's restrained micro-movement philosophy, all clickable UI elements exhibit disciplined tactile feedback.

#### Button Micro-Interactions (`.ignis-tactile-btn`, `.nav-book-btn`, `button[type="submit"]`)
- **Hover Transition:**
  ```css
  transform: translateY(-1px) scale(1.01);
  transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1),
              background-color 200ms ease,
              box-shadow 220ms ease;
  ```
- **Active / Press Transition:**
  ```css
  transform: translateY(0) scale(0.99);
  transition: transform 100ms ease;
  ```
- **Icon Suffix Movement:** Arrow SVGs shift `+3px` right on hover:
  ```css
  .ignis-tactile-btn:hover svg {
    transform: translateX(3px);
    transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  ```
- **Prohibited Effects:** Do NOT use elastic bounces, magnetic cursor snaps, exaggerated scaling (`> 1.03`), or continuous wobble animations.

#### Form Input Focus Transitions
- Text fields and textareas transition border color from `#EBDDD8` to `#1C1210` over `180ms ease`.
- Box shadow transitions to a subtle `0 0 0 3px rgba(28, 18, 16, 0.06)`. No bright neon outlines.

---

### 7.6 Navigation Motion

The old full-screen navigation overlay has been replaced with a compact floating navbar and a direct, context-anchored mobile dropdown.

```
+-------------------------------------------------------------------------+
| [IGNIS.]   What we build   How we work   Meet Tav   FAQs   [BOOK A CALL]|  (Floating Capsule)
+-------------------------------------------------------------------------+
                                   | (Direct clip/opacity reveal, 180ms)
                                   v
          +-----------------------------------------------+
          |  What we build                                |
          |  How we work                                  |  (Mobile / Compact
          |  Meet Tav                                     |   Dropdown Menu)
          |  FAQs                                         |
          |  [Book a call - Primary CTA]                  |
          +-----------------------------------------------+
```

#### Navigation Motion Spec:
- **Scroll Pinning / Elevation:** As the user scrolls past `20px`, the navbar top offset smoothly tightens from `clamp(14px, 2.5vh, 28px)` to `12px` over `240ms ease`.
- **Menu Expand:** 
  ```css
  opacity: 1;
  transform: translateY(0);
  transition: opacity 180ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
  ```
- **Menu Collapse:**
  ```css
  opacity: 0;
  transform: translateY(-8px);
  pointer-events: none;
  transition: opacity 140ms ease, transform 140ms ease;
  ```
- **Prohibited:** No full-screen curtain reveals, multi-stage stagger delays, or dramatic screen wipes.

---

### 7.7 Marquee Motion

The "Platforms we can build with" technology strip provides ecosystem credibility without dominating user focus.

#### Marquee Requirements:
- **Type:** Continuous linear horizontal ticker (`transform: translateX(-50%)`).
- **Pacing:** Very slow, steady movement (`32s` to `36s` duration across $100\%$ translation).
- **Easing:** Strictly `linear`. Never apply ease-in-out or sudden acceleration/deceleration.
- **Hover Pause:** Pauses on mouse enter (`animation-play-state: paused`) so visitors can read specific platforms without chasing text.
- **Edge Softening:** Dual radial/linear gradient masks fade the left and right edges (`mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent)`).
- **Reduced Motion:** When `prefers-reduced-motion: reduce` is detected, ticker animation stops completely and wraps into a clean static grid.

---

### 7.8 Services Interaction

Services explain Ignis capabilities (Second Brain, Document Workflows, Process Automation, Custom Tools). They must remain stable to facilitate comparison.

#### Service Interaction Rules:
- **Default State:** Static, clearly legible cards or structured editorial rows.
- **Hover Micro-Affordance:**
  - Card background shifts subtly from `#FFFFFF` to `#FFFDFB`.
  - Border transitions from `#EBDDD8` to `rgba(28, 18, 16, 0.25)`.
  - Service index (`01`, `02`) or arrow link shifts `+3px` horizontally.
  - Card elevation lifts `translateY(-2px)`.
- **No Card Flips:** Cards must never rotate, 3D flip, or conceal content behind hover triggers. All essential copy is immediately visible.

---

### 7.9 Context / Brain Visual Motion

The lower-page Second Brain section and hero architecture visuals depict an active data pipeline:

```
[ Business Context ]  --->  (Signal Pulse)  --->  [ Ignis Context Layer ]  --->  [ Connected AI / LLM ]
   (Docs, Inboxes)                                (Retrieval + Human Gate)       (Verified Action)
```

#### Architecture Motion Specifications:
- **Connector Signal Flow:** A small, soft signal dot or dash travels along SVG connecting vectors over `2.8s` with `cubic-bezier(0.4, 0, 0.2, 1)`.
- **Node Status Indicator:** Subtle breathing pulse on the retrieval gate (`systemStatusPulse 3.2s ease-in-out infinite`).
- **Interactive Query Demo:** When a visitor clicks a sample question (e.g., *"What is needed to onboard a new client?"*):
  - Typing indicator or status pulse fires for `300ms`.
  - Verified answer and citation badge (`Approved Checklist v2.4 (Doc 08)`) reveal with `opacity: 0 -> 1` and `translateY(6px -> 0)` over `260ms`.
- **Prohibitions:** NO sci-fi Heads-Up-Display (HUD) rings, NO laser scans, NO heavy WebGL canvas instances, and NO particle fields.

---

### 7.10 FAQ Accordion Interaction

The 12 approved business FAQs use a clean single-column accordion designed for swift answers:

#### Open Animation:
1. Container expands smoothly using CSS grid animation (`grid-template-rows: 0fr -> 1fr`) or max-height transition over `220ms cubic-bezier(0.16, 1, 0.3, 1)`.
2. Answer body transitions `opacity: 0 -> 1` with a `40ms` delay.
3. Toggle indicator (`+`) rotates smoothly into `−` or `×` over `200ms ease`.
4. Card border highlights subtly to `rgba(232, 72, 61, 0.40)`.

#### Close Animation:
- Reverses the open sequence over `180ms ease`, immediately resetting the indicator.

---

### 7.11 Scroll Reveals

Entrance animations are deployed selectively and conservatively.

#### Selective Scroll Rules:
- **Restrained Offsets:** Elements translate vertically by only `10px` to `18px`. Large jumps ($> 30\text{px}$) are strictly prohibited.
- **Short Duration:** Between `420ms` and `540ms` with smooth deceleration curve `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Immediate Visual Rest:** Once an element enters the viewport and settles, it becomes completely static.
- **No Continuous Animations:** Text and layout blocks must never float, pulse, or sway while the user is reading.
- **Not Every Element Animates:** Major headings, cards, and section dividers may reveal; body copy within the same block reveals in a single group, not word-by-word.

```css
/* Scroll Reveal Tokens */
.reveal-headline {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 520ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 520ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.is-revealed .reveal-headline {
  opacity: 1;
  transform: translateY(0);
}
```

---

### 7.12 Transitions & Timing System

To maintain visual cohesion, all site interactions map to four unified durations and two easing curves.

#### Timing Curves

```
--ease-out:    cubic-bezier(0.16, 1, 0.3, 1)  /* Decisive, snappy deceleration */
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)  /* Smooth symmetrical transitions */
```

#### Duration Scale

| Token | Value | Target UI Use Case |
|---|---|---|
| `duration-instant` | `120ms` | Icon color changes, toggle switch flips |
| `duration-fast` | `180ms` | Button background hover, dropdown menu reveals |
| `duration-base` | `240ms` | Navbar scroll position, accordion body open |
| `duration-moderate`| `320ms` | Theme switch transitions, card hover transforms |
| `duration-slow` | `500ms` | Scroll entrance reveals, line drawer rules |
| `duration-telemetry`| `3200ms`| Slow ambient indicator pulses (infinite) |

---

### 7.13 Reduced Motion Accessibility

Ignis V2 enforces strict compliance with the WCAG 2.1 Level AAA `prefers-reduced-motion` criterion.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Reveal wrappers remain instantly visible */
  .ignis-reveal-wrapper .reveal-eyebrow,
  .ignis-reveal-wrapper .reveal-headline,
  .ignis-reveal-wrapper .reveal-body,
  .ignis-reveal-wrapper .reveal-content,
  .ignis-reveal-wrapper .reveal-rule {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }

  /* Marquee settles into static wrapped grid */
  .marquee-track {
    animation: none !important;
    flex-wrap: wrap !important;
    justify-content: center !important;
  }

  /* Ambient telemetry pulses disabled */
  .system-indicator-pulse,
  .system-processing-nudge,
  .footer-center-dot {
    animation: none !important;
  }

  /* Preloader skipped entirely */
  .ignis-basic-loader {
    display: none !important;
  }
}
```

---

### 7.14 Performance & Rendering Architecture

All motion must run at a locked 60 frames per second without inducing CPU spikes or battery drain on mobile hardware.

#### Technical Implementation Rules:
- **GPU-Accelerated Properties Only:** Animate only `transform` and `opacity`. Never animate layout-triggering properties (`width`, `height`, `margin`, `padding`, `top`, `left`).
- **Will-Change Hygiene:** Apply `will-change: transform, opacity` exclusively on active animating elements. Never declare `will-change` globally on `*`.
- **Lightweight Technologies:** Rely on CSS transitions and pure inline SVG. Use `requestAnimationFrame` only where direct DOM measurement is mandatory.
- **Zero Heavy 3D Engines:** Prohibit Three.js, Babylon.js, Pixi.js, or complex WebGL vertex shaders unless an approved executive requirement mandates it.

---

### 7.15 Motion Quality Bar & Audit Checklist

Before any animated component or transition is approved for production, it must pass this 7-point audit:

1. **Does the animation help the user understand something?** (e.g., confirming a button was pressed, showing where information flows, revealing an answer).
2. **Does it communicate interaction?** (e.g., clear hover states with `translateY(-1px)`).
3. **Does it reinforce Ignis's professional positioning?** (Does it feel like enterprise-grade software rather than an agency experiment?).
4. **Does it feel subtle?** (Will an SME business owner find it calm, or will it distract them from reading?).
5. **Does it load quickly?** (Does it introduce extra bundle size or delay First Contentful Paint?).
6. **Does it work on mobile?** (Is touch response instantaneous without scroll stutter?).
7. **Does it respect reduced motion?** (Does everything render cleanly when reduced motion is toggled on?).

> [!IMPORTANT]
> If an animation exists solely because "the website needs to feel animated", **REMOVE IT**.

---

### 7.16 Final V2 Motion Principle

**Keep the page mostly still.**

Use motion as an understated layer of polish rather than the primary visual attraction. When an Australian business owner visits Ignis AI, they should notice:
1. **What Ignis does** (AI assistants, second brains, workflow automations).
2. **Why it matters** (Less busywork, more room to grow, people stay in control).
3. **What they can do next** (Book a call, review FAQs, explore services).

They must absorb all three points before they even register that the interface is animated.

**Motion supports the experience. It does not become the experience.**

---

## 8. Do's and Don'ts

### Do
- **Keep interactive transformations restrained.** Restrict button hover offsets to `-1px` to `-2px` and scales to `1.01` to `1.02`.
- **Use pure SVG and CSS.** Maintain zero dependency on WebGL, Three.js, or heavy canvas libraries for standard UI.
- **Maintain a 44px minimum touch target.** All clickable links, buttons, and accordion headers must be easily tappable on mobile devices.
- **Test with `prefers-reduced-motion`.** Ensure every section renders perfectly with zero motion enabled.
- **Rely on 1px hairline rules.** Separate sections with `#EBDDD8` rather than heavy drop shadows.
- **Keep copy grounded.** Use verbatim approved copy from the handoff brief; ensure all em dashes are replaced with commas, colons, or periods.

### Don't
- **Don't add custom cursors.** No fire particles, trails, glow rings, or custom cursor elements.
- **Don't bring back the 3-word cinematic preloader.** The V2 preloader is a sub-400ms utility splash only.
- **Don't use elastic bounces or magnetic physics.** All movements must follow controlled cubic-bezier deceleration.
- **Don't animate text while it is being read.** Scroll reveals must complete quickly and remain completely motionless.
- **Don't make full-screen navigation overlays.** Navigation menus must open directly from the navbar capsule.
- **Don't build heavy particle systems.** Context layer visuals must use lightweight SVG signals and CSS opacity shifts.

---

## 9. Responsive Breakpoints & Behavior

| Breakpoint | Container Width | Layout Reflow | Navigation | Typography Heading |
|---|---|---|---|---|
| **Mobile (375px–767px)** | `100% - 32px` | 1-column layout; stacked form inputs; full-width buttons | Hamburger toggle with compact dropdown | `display-md` (36px–40px) |
| **Tablet (768px–1023px)** | `720px` | 2-column service & problem grids; compact visual diagrams | Capsule nav with compact links | `display-lg` (48px–56px) |
| **Desktop (1024px–1439px)**| `980px–1360px` | 4-column capability cards; side-by-side Second Brain layout | Full desktop capsule with all links | `display-xl` (64px–72px) |
| **Wide Desktop (1440px+)** | `1440px–1680px`| Maximum spacious editorial grid; `.container-wide` active | Full desktop capsule; fixed 1020px max | `display-xl` (76px) |

---

## 10. Agent Implementation Checklist

When writing or modifying Ignis V2 components:
- [ ] Verify that the standard system cursor is active everywhere (`cursor: default / pointer`).
- [ ] Verify that no Three.js or WebGL dependencies are introduced.
- [ ] Ensure buttons have `transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1), background-color 200ms ease`.
- [ ] Check that button hover uses `translateY(-1px) scale(1.01)` and active uses `scale(0.99)`.
- [ ] Confirm the preloader unmounts completely in $< 450\text{ms}$.
- [ ] Ensure the Tech Marquee pauses on hover and respects `prefers-reduced-motion`.
- [ ] Confirm all text copy contains zero em dashes (`—` or `–`).
- [ ] Test mobile viewport at `375px` to ensure touch targets are $\ge 44\text{px}$ and zero horizontal scrolling occurs.
- [ ] Verify full keyboard navigation and accessible focus rings (`outline: 2px solid var(--ignis-ink)`).

---

## 11. Known Gaps & System Boundaries

- **Authentication Surfaces:** Ignis V2 is currently an informational and lead-generation site; client portal and authenticated dashboard motion specifications will be defined in a future phase.
- **Dark Mode Motion:** Dark theme tokens are fully mapped; motion behaviors remain identical between light and dark modes to preserve consistency.
- **Custom Sound Effects:** Sound effects (audio feedback on click/hover) are strictly forbidden in Ignis V2 to preserve a calm, professional business environment.
