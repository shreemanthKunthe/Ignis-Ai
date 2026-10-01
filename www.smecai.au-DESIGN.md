---
version: alpha
name: Smecai
description: |
  SMEC AI's design system projects a forward-thinking, professional identity
  centred on clarity and accessibility for small-to-medium businesses exploring
  AI adoption. The visual language combines a deep, confident navy foundation
  with vibrant purple accents that signal actionable energy and innovation. The
  typography is generous and spacious, using the modern geometric typeface
  Manrope to convey approachability without sacrificing authority. Depth is
  communicated through subtle layering—soft shadows, carefully orchestrated
  opacity shifts, and colour-blocked surfaces rather than heavy drop
  shadows—creating an atmosphere of refined simplicity. The system privileges
  whitespace and breathing room, allowing content and calls-to-action to anchor
  attention naturally. A sparse use of radial and conic gradients adds visual
  texture to hero sections without overwhelming the interface, and interactive
  elements respond with micro-movements (scale, translate) that feel responsive
  without distraction.
source:
  url: "https://www.smecai.au/#contact"
  pagesAnalyzed: 1
  extractedAt: 2026-09-30
  tokensMeasured: true
colors:
  primary: "#061B31"
  accent: "#64748D"
  link: "#7A22FF"
  canvas: "#FFFFFF"
  on-primary: "#FFFFFF"
  ink: "#64748D"
  body: "#8898AA"
  hairline: "#E5EDF5"
  accent-1: "#0D2539"
typography:
  display-xxl:
    fontFamily: Manrope
    fontSize: 316.8px
    fontWeight: 600
    lineHeight: 0.85
    letterSpacing: -15.84px
  display-xl:
    fontFamily: Manrope
    fontSize: 80px
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: -3.2px
  display-lg:
    fontFamily: Manrope
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -1.68px
  display-md:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: -1.2px
  heading-sm:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: -0.5px
  heading-xs:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: -0.4px
  body-md:
    fontFamily: Manrope
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0px
  body-md-loose:
    fontFamily: Manrope
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.63
    letterSpacing: 0px
  body-sm:
    fontFamily: Manrope
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.63
    letterSpacing: 0px
  body-sm-strong:
    fontFamily: Manrope
    fontSize: 15px
    fontWeight: 600
    lineHeight: 1.63
    letterSpacing: 0px
  body-xs:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.43
    letterSpacing: 0px
  body-xs-loose:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0px
  button-md:
    fontFamily: Manrope
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0px
  button-sm:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0px
  button-xs:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: 0px
  caption:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: 1.8px
    textTransform: uppercase
rounded:
  none: 0px
  xs: 4px
  sm: 16px
  md: 24px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 28px
  xxxl: 32px
  section: 36px
  band: 40px
borderWidths:
  thin: 1px
shadows:
  sm: "lab(9.09446 -1.31911 -17.3943 / 0.15) 0px 0px 0px 1px, rgba(50, 50, 93, 0.06) 0px 4px 16px 0px"
  md: "rgba(255, 255, 255, 0.25) 0px 0px 0px 1.5px"
  lg: "lab(9.09446 -1.31911 -17.3943 / 0.1) 0px 0px 0px 1px, rgba(50, 50, 93, 0.06) 0px 4px 16px 0px"
  xl: "rgba(50, 50, 93, 0.06) 0px 4px 16px 0px"
elevationStrategy: layered-micro
themes:
  derived: dark   # the other theme is the site's measured palette
  light:
    bg: "#FFFFFF"
    surface: "#F7F7F7"
    surfaceRaised: "#F1F2F3"
    text: "#64748D"
    textMuted: "#8898AA"
    border: "#E5EDF5"
    accent: "#061B31"
    accentFg: "#FFFFFF"
    focusRing: "#061B31"
    elevation: shadow
  dark:
    bg: "#0D0F11"
    surface: "#1C1D1F"
    surfaceRaised: "#28292B"
    text: "#F5F6F7"
    textMuted: "#9D9EA0"
    border: "#343537"
    accent: "#1F7FE4"
    accentFg: "#0B0B0C"
    focusRing: "#1661B0"
    elevation: "border+surface"
  contrastFailures:
    - "light: muted on bg = 2.95:1 (needs 4.5:1)"
    - "light: text on surface = 4.43:1 (needs 4.5:1)"
gradients:
  - context: section
    kind: radial
    value: "radial-gradient(50% 50%, rgba(255, 255, 255, 0.05) 0px, rgba(255, 255, 255, 0.01) 80%, rgba(0, 0, 0, 0) 100%)"
  - context: section
    kind: radial
    value: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(255, 255, 255, 0.08) 0px, rgba(255, 255, 255, 0.02) 50%, rgba(255, 255, 255, 0.01) 80%)"
  - context: section
    kind: conic
    value: "conic-gradient(from 225deg, rgba(0, 0, 0, 0) 0deg, rgb(122, 34, 255) 90deg, rgba(0, 0, 0, 0) 90deg)"
  - context: section
    kind: conic
    value: "conic-gradient(rgb(122, 34, 255), rgb(155, 77, 255), rgb(196, 181, 253), rgb(122, 34, 255), rgb(92, 18, 204), rgb(122, 34, 255))"
  - context: section
    kind: conic
    value: "conic-gradient(from 180deg, rgb(196, 181, 253) 0%, rgba(0, 0, 0, 0) 30%, rgb(155, 77, 255) 50%, rgba(0, 0, 0, 0) 70%, rgb(92, 18, 204) 100%)"
  - context: section
    kind: radial
    value: "radial-gradient(circle, rgba(122, 34, 255, 0.13) 1px, rgba(0, 0, 0, 0) 1px)"
components:
  button-outline:
    textColor: "{colors.primary}"
    border: "1px solid {colors.hairline}"
    height: 44px
    padding: "8px 16px 8px 16px"
    fontSize: 14px
    fontFamily: Manrope
    fontWeight: 500
    lineHeight: 1.55
    rounded: "3.35544e+07px"
    backgroundColor: "oklab(0.999994 0.0000455677 0.0000200868 / 0.8)"
  button-filled:
    textColor: "{colors.on-primary}"
    height: 44px
    padding: "8px 16px 8px 16px"
    fontSize: 14px
    fontFamily: Manrope
    fontWeight: 500
    lineHeight: 1.55
    rounded: "3.35544e+07px"
    backgroundColor: "{colors.link}"
  button-filled-lg:
    textColor: "{colors.on-primary}"
    height: 46px
    padding: "15px 24px 15px 24px"
    fontSize: 16px
    fontFamily: Manrope
    fontWeight: 500
    lineHeight: 1
    rounded: 40px
    backgroundColor: "{colors.link}"
  button-primary:
    typography: "{typography.button-xs}"
    textColor: "{colors.on-primary}"
    height: 40px
    padding: "0px 20px 0px 20px"
    rounded: "3.35544e+07px"
    backgroundColor: "{colors.primary}"
  button-outline-sm:
    typography: "{typography.button-xs}"
    textColor: "{colors.primary}"
    border: "1px solid lab(9.09446 -1.31911 -17.3943 / 0.1)"
    height: 34.1406px
    padding: "6px 16px 6px 16px"
    boxShadow: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(6, 27, 49, 0.04) 0px 1px 2px 0px"
    rounded: 100px
    backgroundColor: "{colors.canvas}"
  card:
    typography: "{typography.button-sm}"
    textColor: "{colors.ink}"
    padding: "36px 36px 36px 36px"
    rounded: "{rounded.md}"
    backgroundColor: "rgb(246, 249, 252)"
  card-featured:
    typography: "{typography.button-sm}"
    textColor: "{colors.ink}"
    padding: "36px 36px 36px 36px"
    boxShadow: "rgba(255, 255, 255, 0.25) 0px 0px 0px 1.5px"
    rounded: "{rounded.md}"
    backgroundColor: "{colors.accent-1}"
  card-lg:
    typography: "{typography.button-sm}"
    textColor: "{colors.ink}"
  navigation:
    typography: "{typography.button-sm}"
    textColor: "{colors.ink}"
    height: 60px
    padding: "8px 0px 8px 0px"
  footer:
    typography: "{typography.button-sm}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.hairline}"
    backgroundColor: "{colors.canvas}"
  link:
    typography: "{typography.button-sm}"
    textColor: "{colors.ink}"
    border: "1px solid {colors.hairline}"
    padding: "28px 28px 28px 28px"
    rounded: "{rounded.md}"
    backgroundColor: "rgb(246, 249, 252)"
  link-sm:
    textColor: "{colors.on-primary}"
    padding: "14px 28px 14px 28px"
    fontSize: 15px
    fontFamily: Manrope
    fontWeight: 500
    lineHeight: 1.55
    rounded: "3.35544e+07px"
    backgroundColor: "{colors.link}"
states:
  button-hover:
    target: button
    state: hover
    boxShadow: "rgba(122, 34, 255, 0.5) 0px 10px 30px -10px"
    transform: "scale(1.02)"
  card-hover:
    target: card
    state: hover
    transform: "translateY(-6px)"
  other-hover:
    target: other
    state: hover
    transform: "translateY(-100%) rotateX(90deg)"
  other-focus:
    target: other
    state: focus
    backgroundColor: "{colors.accent-1}"
breakpoints:
  - width: 375
    containerWidth: 335
    gridColumns: 2
    navLinksVisible: 17
    menuToggleVisible: true
    headingPx: 40
    bodyPx: 16
    sectionPaddingX: 20
  - width: 768
    containerWidth: 704
    gridColumns: 4
    navLinksVisible: 17
    menuToggleVisible: true
    headingPx: 60
    bodyPx: 16
    sectionPaddingX: 40
  - width: 1024
    containerWidth: 960
    gridColumns: 4
    navLinksVisible: 17
    menuToggleVisible: true
    headingPx: 80
    bodyPx: 16
    sectionPaddingX: 40
  - width: 1280
    containerWidth: 1216
    gridColumns: 4
    navLinksVisible: 17
    menuToggleVisible: true
    headingPx: 80
    bodyPx: 16
    sectionPaddingX: 40
  - width: 1440
    containerWidth: 1376
    gridColumns: 4
    navLinksVisible: 17
    menuToggleVisible: true
    headingPx: 80
    bodyPx: 16
    sectionPaddingX: 40
coverage:
  statesFound: 61
  gradientsFound: 6
  rolesUnassigned: 1
  archetypesUnnamed: 0
  archetypesDetected: 0
  responsiveMeasured: true
  stylesheetsBlocked: false
  semanticRampDeclared: false
---

# Design System Inspired by SMEC AI

## 1. Visual Theme & Atmosphere

SMEC AI's design system projects a forward-thinking, professional identity centred on clarity and accessibility for small-to-medium businesses exploring AI adoption. The visual language combines a deep, confident navy foundation with vibrant purple accents that signal actionable energy and innovation. The typography is generous and spacious, using the modern geometric typeface Manrope to convey approachability without sacrificing authority. Depth is communicated through subtle layering—soft shadows, carefully orchestrated opacity shifts, and colour-blocked surfaces rather than heavy drop shadows—creating an atmosphere of refined simplicity. The system privileges whitespace and breathing room, allowing content and calls-to-action to anchor attention naturally. A sparse use of radial and conic gradients adds visual texture to hero sections without overwhelming the interface, and interactive elements respond with micro-movements (scale, translate) that feel responsive without distraction.

**Key Characteristics:**
- Deep navy (`{colors.primary}` — `#061B31`) paired with vibrant purple (`{colors.link}` — `#7A22FF`) for maximum contrast and trust
- Generous spacing and typography hierarchy emphasizing readability and hierarchy
- Colour-blocking over shadow depth; surfaces defined by background change rather than elevation
- Pill-shaped buttons and inputs (`{rounded.full}`) for modern, accessible interaction
- Micro-interactions (scale, translate) on hover to signal interactivity without distraction
- Minimal semantic colour system—no error/success/warning ramp visible in the extraction

## 2. Color Palette & Roles

### Primary
- **Primary / Brand** (`{colors.primary}` — `#061B31`): Deep navy serving as the primary accent, brand mark, and call-to-action fill. Used for active states, primary buttons, and heading accents. Conveys trust and authority for government-funded AI adoption messaging.
- **Link** (`{colors.link}` — `#7A22FF`): Vibrant purple used for inline links, primary CTAs, and secondary button fills. Signals action and draws attention to key conversion points (e.g., "Call AI Information Line" button).

### Accent Colors
- **Accent / Ink** (`{colors.accent}` — `#64748D`): Secondary accent deployed in hero bands and as primary heading text colour. A warm grey-blue that bridges navy and body text, used for visual hierarchy and secondary emphasis.
- **Decorative** (`{colors.accent-1}` — `#0D2539`): A slightly lighter shade of navy measured on decorative elements only. No distinct UI role identified; treat as a variant or overlay colour for visual depth in non-functional areas.

### Neutral Scale
- **Canvas / On Primary** (`{colors.canvas}` — `#FFFFFF`): Default page background and label colour on brand surfaces (e.g., text on dark hero bands). Ensures readable contrast and visual separation.
- **Body** (`{colors.body}` — `#8898AA`): Secondary text colour for body copy and supporting text. Provides visual hierarchy and reduces visual weight compared to primary text.
- **Hairline** (`{colors.hairline}` — `#E5EDF5`): Used for 1px borders and dividers. A very light blue-grey that maintains subtle visual separation without harsh contrast.

## 3. Typography Rules

### Font Family
**Manrope** (geometric sans-serif, modern and approachable)
Fallback stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| Display XXL | Manrope | 316.8px | 600 | 0.85 | -15.84px | Oversized hero or feature text; rarely used |
| Display XL | Manrope | 80px | 400 | 1.04 | -3.2px | Hero heading; main page title |
| Display Large | Manrope | 56px | 400 | 1.1 | -1.68px | Section headline; secondary hero |
| Display Medium | Manrope | 40px | 400 | 1.15 | -1.2px | Large section heading; tablet/mobile hero |
| Heading Small | Manrope | 24px | 500 | 1.25 | -0.5px | Card title; subsection heading |
| Heading Extra Small | Manrope | 20px | 500 | 1.5 | -0.4px | Minor heading; list title |
| Body Medium | Manrope | 17px | 400 | 1.6 | 0px | Primary body copy; default paragraph |
| Body Medium (Loose) | Manrope | 17px | 400 | 1.63 | 0px | Body copy with increased line height for readability |
| Body Small | Manrope | 15px | 400 | 1.63 | 0px | Supporting text; secondary paragraph |
| Body Small (Strong) | Manrope | 15px | 600 | 1.63 | 0px | Emphasized body text; bold callout |
| Body Extra Small | Manrope | 14px | 400 | 1.43 | 0px | Caption or fine print |
| Body Extra Small (Loose) | Manrope | 14px | 400 | 1.55 | 0px | Caption with increased line height |
| Button Medium | Manrope | 17px | 400 | 1.55 | 0px | Primary button text (large variant) |
| Button Small | Manrope | 16px | 400 | 1.55 | 0px | Standard button text |
| Button Extra Small | Manrope | 13px | 500 | 1.55 | 0px | Small or tertiary button text |
| Caption | Manrope | 12px | 600 | 1.33 | 1.8px | Uppercase label; metadata; small UI text (text-transform: uppercase applied) |

### Principles
- **Negative letter-spacing on display:** Sizes 56px and above use tracked-in letterforms (tighter spacing) to create a confident, modern appearance. This is a defining characteristic—never flatten to 0.
- **Weight contrast:** Headings favour 400–500 weight for a clean, spacious look; buttons use 500 weight to signal actionability.
- **Line height scale:** Body copy uses 1.6–1.63 for comfortable reading; captions and buttons use 1.33–1.55 for tighter inline context.
- **Case treatment:** Caption role applies `text-transform: uppercase` and uses tight letter-spacing (`1.8px`) to create visual distinction for metadata and labels.

## 4. Component Stylings

### Buttons

**Primary (Filled, Large)**
- Background: `{colors.link}` (`#7A22FF`)
- Text colour: `{colors.canvas}` (`#FFFFFF`)
- Font: `{typography.button-md}` (17px, weight 400, line-height 1.55)
- Padding: `{spacing.lg} {spacing.xl}` (20px 24px)
- Height: 46px
- Border radius: `{rounded.full}` (9999px / pill shape)
- Border: none
- Box shadow: none
- Hover state: `transform: translateY(-1px)`; `background-color: rgb(99, 24, 217)` (darker purple); `box-shadow: rgba(122, 34, 255, 0.5) 0px 10px 30px -10px`
- Note: Primary CTA for major actions (e.g., "Send message", "Call AI Information Line")

**Secondary (Filled, Standard)**
- Background: `{colors.link}` (`#7A22FF`)
- Text colour: `{colors.canvas}` (`#FFFFFF`)
- Font: `{typography.button-sm}` (16px, weight 400, line-height 1.55)
- Padding: `{spacing.xs} {spacing.md}` (8px 16px)
- Height: 44px
- Border radius: `{rounded.full}` (9999px)
- Border: none
- Box shadow: none
- Hover state: `transform: translateY(-1px)`; background darkens to `rgb(99, 24, 217)`; shadow applied
- Note: Standard call-to-action button

**Tertiary (Outline, Small)**
- Background: `{colors.canvas}` (`#FFFFFF`) at 80% opacity
- Text colour: `{colors.primary}` (`#061B31`)
- Font: `{typography.button-xs}` (13px, weight 500, line-height 1.55)
- Padding: `{spacing.xs} {spacing.md}` (8px 16px)
- Height: 40px
- Border: 1px solid `{colors.hairline}` (`#E5EDF5`)
- Border radius: `{rounded.full}` (9999px)
- Box shadow: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(6, 27, 49, 0.04) 0px 1px 2px 0px`
- Hover state: `transform: translateY(-1px)`; `border-color: var(--accent-purple)` (`#7A22FF`); `background-color: rgba(122, 34, 255, 0.06)`
- Note: Secondary or ghost button for less prominent actions

**Outline (Medium)**
- Background: `{colors.canvas}` (`#FFFFFF`) at 80% opacity
- Text colour: `{colors.primary}` (`#061B31`)
- Font: `{typography.button-xs}` (13px, weight 500)
- Padding: `{spacing.xs} {spacing.md}` (8px 16px)
- Height: 44px
- Border: 1px solid `{colors.hairline}` (`#E5EDF5`)
- Border radius: `{rounded.full}` (9999px)
- Box shadow: none
- Hover state: `transform: translateY(-1px)`; border and background adjust per ghost pattern
- Note: Tertiary button for lower-priority actions

### Cards & Containers

**Default Card (Light)**
- Background: `rgb(246, 249, 252)` (light blue-grey)
- Text colour: `{colors.accent}` (`#64748D`)
- Font: `{typography.body-md}` (17px, weight 400, line-height 1.6)
- Padding: `{spacing.section}` (36px)
- Border radius: `{rounded.sm}` (16px)
- Border: none
- Box shadow: `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, lab(9.09446 -1.31911 -17.3943 / 0.15) 0px 0px 0px 1px, rgba(50, 50, 93, 0.06) 0px 4px 16px 0px`
- Hover state: `transform: translateY(-6px)`; `box-shadow: rgba(13, 37, 57, 0.25) 0px 24px 48px -24px`
- Note: Standard content card for featured content, testimonials, or info blocks

**Featured Card (Dark)**
- Background: `rgb(13, 37, 57)` (dark navy variant)
- Text colour: `{colors.canvas}` (`#FFFFFF`)
- Font: `{typography.body-md}` (17px, weight 400, line-height 1.6)
- Padding: `{spacing.section}` (36px)
- Border radius: `{rounded.sm}` (16px)
- Border: none
- Box shadow: `rgba(255, 255, 255, 0.25) 0px 0px 0px 1.5px` (subtle white inner glow)
- Hover state: `transform: translateY(-6px)`; `box-shadow: rgb(255, 255, 255) 0px 0px 0px 1.5px, rgba(255, 255, 255, 0.35) 0px 24px 56px -24px`
- Note: Premium or hero card for highlighting key services or testimonials

**Link Card (Light Container)**
- Background: `rgb(246, 249, 252)` (light blue-grey)
- Text colour: `{colors.accent}` (`#64748D`)
- Font: `{typography.body-md}` (17px, weight 400, line-height 1.6)
- Padding: `{spacing.xl}` (28px)
- Border radius: `{rounded.sm}` (16px)
- Border: 1px solid `{colors.hairline}` (`#E5EDF5`)
- Box shadow: none
- Hover state: `transform: translateY(-6px)`; shadow applied
- Note: Lightweight card for navigation blocks or secondary content

### Inputs & Forms

**Text Input (Standard)**
- Background: `{colors.canvas}` (`#FFFFFF`)
- Text colour: `{colors.primary}` (`#061B31`)
- Placeholder colour: `{colors.body}` (`#8898AA`) with reduced opacity
- Font: `{typography.body-md}` (17px, weight 400, line-height 1.6)
- Padding: `{spacing.md}` (16px)
- Height: auto (min 44px for touch target)
- Border radius: `{rounded.full}` (9999px / pill shape)
- Border: 1px solid `{colors.hairline}` (`#E5EDF5`)
- Box shadow: `rgba(0, 0, 0, 0.04) 0px 1px 2px 0px`
- Focus state: `border-color: {colors.link}` (`#7A22FF`); subtle glow applied
- Hover state: `border-color: rgba(255, 255, 255, 0.3)` (on dark backgrounds); background opacity 0.9–0.95
- Note: Used for contact forms, search, and text entry across the site

**Textarea (Multi-line Input)**
- Background: `{colors.canvas}` (`#FFFFFF`)
- Text colour: `{colors.primary}` (`#061B31`)
- Font: `{typography.body-md}` (17px, weight 400, line-height 1.6)
- Padding: `{spacing.md}` (16px)
- Border radius: `{rounded.full}` (9999px)
- Border: 1px solid `{colors.hairline}` (`#E5EDF5`)
- Box shadow: `rgba(0, 0, 0, 0.04) 0px 1px 2px 0px`
- Focus state: `border-color: {colors.link}` (`#7A22FF`)
- Hover state: `border-color: rgba(255, 255, 255, 0.3)` (on dark surfaces)
- Note: Larger text entry field for open-ended questions

### Navigation

**Header Navigation (Default)**
- Background: transparent
- Text colour: `{colors.accent}` (`#64748D`)
- Font: `{typography.body-md}` (17px, weight 400, line-height 1.6)
- Padding: `{spacing.xs}` vertical; `0px` horizontal (8px 0px)
- Height: 60px
- Border radius: none
- Border: none
- Box shadow: none
- Hover state: `color: {colors.primary}` (`#061B31`) or `{colors.canvas}` (`#FFFFFF`) depending on surface
- Note: Main navigation bar; links may be styled differently when on dark hero sections

**Footer Navigation (Default)**
- Background: `{colors.canvas}` (`#FFFFFF`)
- Text colour: `{colors.accent}` (`#64748D`)
- Font: `{typography.body-md}` (17px, weight 400, line-height 1.6)
- Border: 1px solid `{colors.hairline}` (`#E5EDF5`)
- Box shadow: none
- Hover state: `color: {colors.link}` (`#7A22FF`) or `{colors.primary}` (`#061B31`)
- Note: Multi-column footer with contact, services, company, and solutions sections

## 5. Layout Principles

### Spacing System
The spacing system uses a base unit of `{spacing.xs}` (8px) multiplied by incremental scales:
- `{spacing.xxs}` (4px) — tight micro-spacing, form field alignment, badge padding
- `{spacing.xs}` (8px) — button padding, input padding, component margins
- `{spacing.sm}` (12px) — space between form labels and inputs
- `{spacing.md}` (16px) — standard component padding, secondary margins
- `{spacing.lg}` (20px) — button padding (large), section margins
- `{spacing.xl}` (24px) — card padding, heading margins
- `{spacing.xxl}` (28px) — dense section spacing
- `{spacing.xxxl}` (32px) — loose component spacing
- `{spacing.section}` (36px) — card padding, major section divisions
- `{spacing.band}` (40px) — hero section padding, page section margins

**Usage context:**
- Form fields and labels: `{spacing.sm}` to `{spacing.md}` gaps
- Card internal padding: `{spacing.section}` (36px)
- Section horizontal padding (container): `{spacing.lg}` to `{spacing.band}` depending on viewport
- Between sections: `{spacing.band}` (40px) or larger for visual breathing room

### Grid & Container
- **Max width:** 1376px (measured at 1440px viewport)
- **Column strategy:** 4-column grid at desktop; 2 columns at mobile (375px); responsive reflow at 768px breakpoint
- **Container padding:** `{spacing.lg}` (20px) at mobile; `{spacing.band}` (40px) at tablet and above
- **Section patterns:** Hero sections span full width with internal centered content; card grids use multi-column layouts with consistent gutters

### Whitespace Philosophy
SMEC AI prioritizes breathing room around all content. Generous margins between sections (40px+), spacious card padding (36px), and tall line-height values (1.6+) create a calm, professional reading experience. Whitespace is not empty; it is functional—it separates ideas, emphasizes hierarchy, and guides the eye to key calls-to-action. Content never feels cramped, even on smaller screens.

### Border Radius Scale
- `{rounded.none}` (0px) — images, overlays, full-width hero sections
- `{rounded.xs}` (4px) — subtle rounding on minor UI elements
- `{rounded.sm}` (16px) — cards, containers, featured content blocks
- `{rounded.md}` (24px) — larger containers (future expansion)
- `{rounded.full}` (9999px) — all interactive elements: buttons, inputs, pills, badges

**Component contexts:**
- Buttons: `{rounded.full}` (pill-shaped, always)
- Inputs & textareas: `{rounded.full}` (pill-shaped, always)
- Cards: `{rounded.sm}` (16px, soft corner cards)
- Images: `{rounded.none}` (sharp, no rounding)
- Hero overlays: `{rounded.none}` (full bleed)

### Border Widths
- **Thin** (1px) — used on button outlines, input borders, card borders, dividers
- No thicker borders are employed; the system relies on colour and shadow for visual separation

## 6. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow; colour block | Card backgrounds, form fields, text blocks |
| Micro | `rgba(0, 0, 0, 0.04) 0px 1px 2px 0px` (1px drop, minimal blur) | Input fields, subtle borders |
| Raised | `rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, lab(9.09446 -1.31911 -17.3943 / 0.15) 0px 0px 0px 1px, rgba(50, 50, 93, 0.06) 0px 4px 16px 0px` | Default cards, standard surfaces |
| Elevated | `rgba(255, 255, 255, 0.25) 0px 0px 0px 1.5px` (inner glow on dark surfaces) | Featured/dark cards, premium content |
| Floating | `rgba(13, 37, 57, 0.25) 0px 24px 48px -24px` (hover state; 24px offset, 48px blur) | Cards on hover; lifted state |
| Floating (Dark) | `rgb(255, 255, 255) 0px 0px 0px 1.5px, rgba(255, 255, 255, 0.35) 0px 24px 56px -24px` (dark card hover; white glow + shadow) | Featured card hover; lift and glow |

**Shadow Philosophy:**
The system uses a layered-micro approach: multiple near-transparent layers stacked for barely-there depth. Shadows are soft and diffused rather than harsh, relying on blur radius (16px–56px) and low opacity (0.04–0.25) to create visual separation without drama. Colour-blocking (background shade changes) is the primary depth cue; shadows are subtle reinforcement. Dark surfaces use inner glows (white outlines) instead of outer shadows to signal elevation.

### Opacity Levels
- **1%** (0.01) — invisible; nearly full transparency
- **5%** (0.05) — background overlays, very subtle tinting
- **6%** (0.06) — shadow and overlay base opacity
- **7%** (0.07) — slightly stronger overlay
- **10%** (0.10) — light tint or border
- **50%** (0.50) — medium transparency; muted text or icons
- **60%** (0.60) — lighter text; secondary emphasis
- **73%** (0.73) — medium text emphasis
- **80%** (0.80) — button backgrounds (light fill on semi-transparent base)
- **95%** (0.95) — near-opaque; slightly translucent fill

### Z-index / Layering
- **Base** (z-index 1–2) — standard page content, cards
- **Dropdown / Overlay** (z-index 10–60) — navigation menus, modals, tooltips
  - Sticky headers: z-index 10
  - Dropdowns: z-index 40–50
  - Modals / overlays: z-index 60+

## 7. Do's and Don'ts

### Do
- **Use pill-shaped buttons and inputs** (`{rounded.full}`). All interactive elements—buttons, text inputs, textareas, search fields—must have maximum border-radius (`9999px`) for a modern, accessible feel.
- **Maintain generous spacing.** Never nest content tightly. Use `{spacing.band}` (40px) between major sections, `{spacing.section}` (36px) for card padding, and `{spacing.md}` (16px) minimum between inline elements.
- **Pair navy and purple intentionally.** `{colors.primary}` (`#061B31`) anchors trust and professionalism; `{colors.link}` (`#7A22FF`) signals action. Reserve purple for primary CTAs and secondary emphasis; use navy for brand identity and headings.
- **Employ negative letter-spacing on large headlines.** Display sizes 56px+ must use tracked-in letterforms (per the Typography table). Never flatten to 0 tracking.
- **Use colour-blocking over shadows.** Define depth through background colour changes (light vs. dark surfaces) rather than heavy drop shadows. Shadows should be soft (high blur radius) and low opacity.
- **Test inputs and buttons at actual size.** Touch targets must be at least 44px (measured height), and pill-shaped corners must render smoothly without clipping.
- **Hover state transforms matter.** Apply subtle `translateY(-1px)` or `scale(1.02)` to buttons and cards on hover; these signal interactivity without jarring jumps.
- **Maintain the four-column grid structure** at desktop and reflow to two columns at mobile. Never claim more columns at mobile than the breakpoint data supports.

### Don't
- **Don't use sharp corners on buttons or inputs.** The system is pill-shaped throughout. Any border-radius less than `9999px` on interactive elements breaks visual consistency.
- **Don't invent shadows.** Only use the five elevation levels documented in section 6. Custom shadows will clash with the layered-micro aesthetic.
- **Don't force semantic colours where none exist.** The site does not expose error, success, or warning states. If you need to signal validation, ask for extraction data or stick to neutral borders and text colour shifts.
- **Don't add padding inside buttons beyond the documented values.** Button padding is fixed: `{spacing.xs} {spacing.md}` (8px 16px) for standard sizes; `{spacing.lg} {spacing.xl}` (20px 24px) for large. Extra padding breaks alignment.
- **Don't use thin body copy (`15px` or below) as primary text.** Minimum body text is `{typography.body-md}` (17px). Smaller sizes are reserved for captions, labels, and metadata.
- **Don't override line-height for body text.** Maintain 1.6 or higher for comfortable reading. Tighter line-heights (1.4 or below) work only for headings and captions.
- **Don't flatten opacity values.** The system uses specific opacity levels (6%, 50%, 60%, 73%, 80%, 95%). Approximating these will muddy the layered effect.
- **Don't apply heavy borders.** All borders are 1px (`{thin}`). Thicker strokes are not part of the design system.
- **Don't hide navigation at small breakpoints.** The extraction shows nav links visible at 375px (17 links). If a mobile menu is needed, use an overlay or collapsible; don't remove the links entirely.

## 8. Responsive Behavior

### Breakpoints

| Viewport | Content Width | Grid Columns | Key Changes | Typography Heading |
|---|---|---|---|---|
| 375px (Mobile) | 335px | 2 | Single/two-column layouts; max section padding 20px; stacked form fields; full-width buttons | 40px (`{typography.display-md}`) |
| 768px (Tablet) | 704px | 4 | Multi-column cards; section padding increases to 40px; wider form layouts; heading size increases | 60px (intermediate, between display-md and display-lg) |
| 1024px (Desktop) | 960px | 4 | Full four-column grid; hero sections at natural size; max content width locked; form inputs side-by-side | 80px (`{typography.display-xl}`) |
| 1280px+ (Large Desktop) | 1216px–1376px | 4 | No layout change; content remains centered; maximum usable width achieved | 80px (`{typography.display-xl}`) |

### Touch Targets
- Minimum interactive element height: **44px** (measured on buttons and inputs)
- Minimum interactive element width: **44px** (square buttons)
- Padding around touchable areas: **{spacing.md}}** (16px) minimum to avoid accidental taps
- Spacing between adjacent buttons/links: **{spacing.sm}}** (12px) minimum

### Collapsing Strategy
- **Mobile (375px):** Cards and content stack vertically (1–2 columns); form fields take full width; buttons and CTAs are full-width or side-by-side if room allows; hero heading shrinks to `{typography.display-md}` (40px); section padding reduces to `{spacing.lg}` (20px).
- **Tablet (768px):** Transition to 4-column grid; multi-card layouts visible; form fields may pair horizontally; heading grows to intermediate size (~60px); section padding increases to `{spacing.band}` (40px).
- **Desktop (1024px+):** Full 4-column layout; hero headings at `{typography.display-xl}` (80px); all multi-column features visible; max-width container locks at 1376px (1440px viewport).

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA:** Purple (`{colors.link}` — `#7A22FF`)
- **Secondary CTA / Accent:** Navy (`{colors.primary}` — `#061B31`)
- **Background:** White (`{colors.canvas}` — `#FFFFFF`)
- **Heading text:** Accent grey-blue (`{colors.accent}` — `#64748D`)
- **Body text:** Secondary grey-blue (`{colors.body}` — `#8898AA`)
- **Borders & dividers:** Hairline (`{colors.hairline}` — `#E5EDF5`)

### Iteration Guide
1. **All buttons are pill-shaped.** Apply `border-radius: 9999px` to every button, input, and interactive element. Never use sharp corners or partial rounding.
2. **Spacing is generous.** Minimum section padding is `{spacing.lg}` (20px) mobile; `{spacing.band}` (40px) desktop. Minimum spacing between components is `{spacing.md}` (16px).
3. **Typography uses Manrope with tracked-in display sizes.** Sizes 56px and above require negative letter-spacing per the Typography table. Never set letter-spacing to 0 on large headings.
4. **Depth comes from colour, not shadows.** Use background colour shifts (light vs. dark surfaces) as the primary depth cue. Shadows are soft (blur 16px–56px) and low opacity (0.04–0.25).
5. **Hover states include subtle transforms.** Apply `transform: translateY(-1px)` or `scale(1.02)` to buttons and cards. For dark surfaces, add a white glow (`rgba(255, 255, 255, 0.25)` border).
6. **Touch targets are minimum 44px.** Ensure all interactive elements (buttons, inputs, links) are at least 44px tall and have surrounding whitespace to avoid accidental taps.
7. **Forms use pill-shaped inputs with 1px `{colors.hairline}` borders.** Apply focus styles: `border-color: {colors.link}` (`#7A22FF`) with a subtle glow.
8. **Navigation remains visible at all breakpoints.** Do not hide nav links behind a mobile menu; keep them visible or use an overlay that retains accessibility.
9. **Grid reflows at 768px.** Mobile uses 2 columns; tablet and desktop use 4. This is a hard transition; no intermediate 3-column layout is employed.
10. **Use semantic token names in CSS variables.** Reference `--color-primary`, `--color-link`, `--spacing-md`, `--rounded-full`, etc., rather than hard-coded hex values. This ensures consistency and future updates.

## 10. Known Gaps

- **No semantic colour ramp:** The extraction found no error, success, warning, or info states in the site's markup. If validation feedback or status messaging is needed, coordinate with the design team on colour assignments; do not invent them.
- **One unassigned colour:** `{colors.accent-1}` (`#0D2539`) was measured on decorative elements only and has no declared UI role. Treat it as a background variant or overlay tint; do not repurpose it for interactive states.
- **Interaction states partially observed:** Hover and active states were extracted from stylesheets for buttons, cards, and navigation. Focus states, disabled states, and error/loading states may exist but were not visible in the captured CSS. Implement focus rings (outline or ring) following WCAG 2.1 AA standards if not present.
- **Dark mode not measured:** The extraction observed only a light theme. If a dark mode variant exists, it was not captured. Assume the system as documented applies to the light theme only.
- **Authentication surfaces not visited:** Pages behind login or membership gates were not analysed. Components on private surfaces may differ from those documented here.
- **Animation / transition timing not extracted:** The design system shows static hover states and transforms (e.g., `translateY(-1px)`). Exact transition duration (`ms`) and easing functions were not captured; use `transition: all 0.2s ease-in-out` as a sensible default.
- **Breakpoint behaviour at 768px–1024px:** The extraction shows data points at 375px, 768px, and 1024px. Intermediate breakpoints (e.g., 480px, 600px, 820px) were not explicitly measured; use smooth transitions or the nearest documented breakpoint.
- **Font file formats and loading strategy:** The system uses Manrope; the extraction does not specify font-display, @font-face origin, or fallback loading. Assume Google Fonts or a CDN delivery; test performance.
- **Print styles:** No print styles were observed in the extraction. Assume web-only delivery unless print CSS is explicitly requested.
- **Micro-interactions and animations beyond hover:** Entrance animations, scroll triggers, modal transitions, and loading states were not fully documented. Implement standard web patterns (fade, slide) unless specific motion data is provided.