MOTION DESIGN PHILOSOPHY
Zinovaa is a tech-forward, engineering-driven brand. All motion should feel precise, purposeful, and confident — never playful or bouncy. Think smooth deceleration, subtle reveals, and mechanical elegance. Every animation must serve a function: guiding attention, confirming interaction, or communicating depth. Default easing: cubic-bezier(0.22, 1, 0.36, 1) (fast out, slow settle). No animation should exceed 600ms unless it is a looping ambient effect.

GLOBAL ANIMATION TOKENS
Define these as reusable variables before applying to any component:
TokenValueUse--ease-defaultcubic-bezier(0.22, 1, 0.36, 1)All standard transitions--ease-incubic-bezier(0.4, 0, 1, 1)Elements leaving screen--ease-springcubic-bezier(0.34, 1.56, 0.64, 1)Buttons, badges (subtle overshoot)--duration-fast150msHover states, color changes--duration-mid300msCards, dropdowns--duration-slow500msPage heroes, section reveals--duration-ambient3000–6000msLooping background effects--scroll-trigger80px from viewport bottomWhen scroll animations fire

SECTION-BY-SECTION ANIMATION SPEC
NAVBAR
On page load: Navbar slides down from translateY(-100%) to translateY(0) over 400ms with --ease-default. Fade in simultaneously from opacity: 0 to opacity: 1.
On scroll (sticky transition): When user scrolls past 80px, navbar background transitions from transparent to --color-primary with a backdrop-filter: blur(12px) overlay. Duration: 200ms. Height compresses from 72px to 56px.
Nav links: On hover, an underline slides in from left to right (scaleX 0→1, transform-origin: left). Duration: 200ms. Color shifts to --color-accent.
"Contact Us" button: On hover, background fills with a subtle shimmer sweep (left-to-right gradient pass) over 400ms. Scale: 1 → 1.03 on hover, 0.97 on click.
Mega Dropdown: Animates in with translateY(-8px) → translateY(0) + opacity: 0 → opacity: 1 over 250ms. Each of the 4 service columns staggers in with a 50ms delay between them (left to right). On close: reverse, 180ms.
Mobile Drawer: Slides in from translateX(100%) → translateX(0) over 350ms. Background overlay fades in behind it opacity: 0 → opacity: 0.6. Menu items fade + slide in from right, staggered 60ms apart.

HOME PAGE
Hero Section

Background: a slow, looping ambient gradient drift — the dark background subtly shifts hues (dark navy → dark teal → dark navy) on a 6000ms loop. Barely perceptible, adds depth.
Eyebrow chip: fades in + slides up 12px on load. Delay: 200ms.
H1 headline: each word (or line) reveals via a clip-path wipe — text is hidden behind a mask that slides away left-to-right, revealing words sequentially. Stagger: 80ms per word. Duration per word: 400ms.
Subtitle paragraph: fades in from opacity: 0 + translateY(16px) → resting state. Delay: 600ms after H1 starts.
Two CTA buttons: slide up + fade in together. Delay: 900ms. On hover: primary button does the shimmer sweep; outline button border animates a running dashed border effect.
Stat blocks (bottom row): each block counts up its number from 0 to the final value over 1200ms when scrolled into view. Use an easeOut curve on the counter. Stagger: 100ms between each block.
Hero illustration placeholder: fades in + scales from 1.04 → 1.0 over 600ms. Delay: 300ms. Add a subtle continuous floating animation: translateY(0) → translateY(-10px) → translateY(0) on a 4000ms loop with ease-in-out.

Core Services Section

Section header: fade up on scroll enter (translateY(24px) → 0, opacity: 0 → 1).
Service cards: stagger reveal in groups of 2 per row. Each card: translateY(32px) → 0 + fade in. Stagger: 80ms between cards. Duration: 400ms.
Card hover state: translateY(-6px) + box-shadow deepens. Border subtly glows with --color-accent at 30% opacity. Duration: 200ms --ease-default.
Icon inside card: rotates 8° on card hover, then returns. Duration: 300ms --ease-spring.

Our Story Section

Image placeholder: slides in from left (translateX(-40px) → 0) + fade. Triggered on scroll.
Text block (right): slides in from right (translateX(40px) → 0) + fade. Same trigger, 100ms after image starts.
Three milestone items: stagger in top-to-bottom, 120ms apart. Each does a fade + slight translateY.
Milestone icons: on enter, draw a quick circular "ping" ring around them (scale from 0.8→1.2, opacity 1→0) that fires once on scroll entry.

Industries Section

Industry badges: on scroll enter, they pop in one by one with --ease-spring (scale 0.7 → 1 + fade). Stagger: 70ms.
On hover: badge lifts slightly (translateY(-4px)) and icon pulses once (scale 1→1.1→1, 300ms).

Testimonials Section

Section image (left): parallax scroll — moves at 60% the scroll speed of surrounding content, creating a subtle depth effect.
Testimonial cards: carousel transition uses a crossfade (opacity: 0 → 1) combined with a horizontal slide (translateX(20px) → 0 for entering card). Duration: 350ms.
Star rating: on card enter, stars fill in one by one left-to-right, 80ms stagger, with a brief scale pop (1 → 1.2 → 1).
Carousel dot: active dot expands width from 8px to 24px (pill shape) with --ease-default 200ms.

Design Process Section

Section enters with a dark background fade-in (the whole section's background fades from transparent to dark over 400ms as it enters viewport).
Stepper items: each step's number circle draws in with a circular SVG stroke animation (stroke-dashoffset). Duration 400ms per step. Stagger: 200ms between steps.
The vertical connecting line between steps: draws downward (height animates from 0 → 100%) as you scroll, in sync with each step becoming active.
Step content (title + text): fades + slides right from translateX(-12px) as its step circle finishes drawing. 150ms delay after circle.

Why Choose Us Section

Cards: same stagger-fade-up as Services cards (groups of 3).
On hover: card border animates a running highlight — a thin --color-accent line travels around the card border (CSS border animation or SVG stroke). Duration: 600ms loop on hover.

Work Process Section

The horizontal connecting arrow between steps animates: each arrow draws from left to right (stroke-dashoffset) sequentially after its step card has appeared.
Step cards: scale in from 0.9 → 1.0 + fade, triggered by scroll. Stagger: 150ms.
Step numbers: count up from 0 → their digit over 400ms on entry (same counter animation as stats).

Contact Form Section

Form slides up from translateY(40px) on scroll entry.
Each form field fades in with a 60ms stagger top-to-bottom.
On field focus: a thin --color-accent underline or border draws in from left to right over 200ms.
Submit button: on hover, an animated loading-ring appears inside the button on click, replaced by a checkmark icon on success (annotate: "success state").

Blog Cards Section

Cards fan in with a combined translateY(24px) + fade + very subtle rotateX(4deg) → 0 (3D tilt flattening into place). Stagger: 100ms.
On hover: card image placeholder zooms in subtly (scale: 1.04) via overflow: hidden on the image container. Duration: 400ms.
"Read More →" arrow nudges 4px to the right on card hover.


SERVICE DETAIL PAGES (IoT, Embedded, Web, Mobile)

Hero text: same word-by-word clip-path reveal as homepage hero.
Alternating rows (text + image): text slides in from its side (left or right depending on layout), image slides from the opposite side. Both triggered simultaneously on scroll entry. Offset: translateX(±48px) → 0 + fade. Duration: 500ms.
Capability cards grid: same stagger-fade-up as services cards.
CTA band: background color sweeps in from left edge to right edge on scroll entry (clip-path or pseudo-element wipe), then text fades in on top.


PRODUCTS PAGE

Filter chips: on click, the active chip's background fills with a horizontal wipe animation (not an instant swap). Duration: 200ms.
Grid reflow on filter change: cards that disappear do scale: 0.9 + opacity: 0 over 200ms, then cards rearrange with a smooth layout transition, then new cards appear with scale: 0.9 → 1 + fade. Use Figma Smart Animate for this.
Product cards: on hover, image scales up (1.05) inside its container, card title underlines from left, category chip shifts up 2px.
"Load More" button: on click, a brief spinner appears inside the button, then new cards cascade in from below (stagger 80ms).


ABOUT PAGE

CEO quote section: the pull-quote text has a large decorative quotation mark (") that fades in and scales from 1.3 → 1.0 before the quote text appears.
Partner logos strip: logos fade in with a stagger (80ms), all in greyscale. On hover, individual logo transitions to full color over 200ms.
Values grid cards: same stagger-fade-up. Icon on each card does a one-time "draw" animation on entry (SVG path animation where the icon strokes draw themselves over 500ms).
Mission/Vision cards: on scroll, the two cards slide in from opposite sides and meet in the center. Left card from translateX(-32px), right from translateX(32px).


BLOG INDEX & POST DETAIL

Featured post hero image: subtle parallax (scrolls at 70% speed).
Blog card grid: same stagger-fade-up as homepage blog section.
Post detail article body: paragraphs and headings fade in as you scroll down the article (each block triggers at the scroll threshold — creates a "reading mode" feel).
Sidebar "Related Posts": sticky sidebar that smoothly transitions from relative to fixed positioning as user scrolls past the article start, with a 200ms fade transition.


CONTACT PAGE

Map placeholder: fades in with a slight blur(8px) → blur(0) transition on scroll entry. Duration: 500ms.
Contact info rows: stagger in from left, 80ms apart.
Form fields: same focus animation as homepage form.


FOOTER

On scroll to footer: logo fades in + scales from 0.95 → 1. Partner tagline fades in 200ms later.
The 4 columns stagger in left-to-right, 80ms apart, each with translateY(16px) → 0 + fade.
Newsletter input: same focus animation (accent border draws in).
Instagram icon: on hover, does a quick rotate(0) → rotate(-15deg) → rotate(0) wiggle over 400ms --ease-spring.


PAGE TRANSITION (Between Pages)

On navigation click: current page content fades to opacity: 0 + translateY(-16px) in 200ms.
New page enters with content at translateY(24px) → 0 + opacity: 0 → 1 over 350ms. Navbar does not transition (it persists).
Annotate in Figma: use Smart Animate with "Dissolve" + vertical offset for page-level transitions in prototype mode.


SCROLL-TRIGGERED ANIMATION RULES
Apply these universally to every section:

Default scroll entry state: opacity: 0, translateY: 24px
Default scroll exit state (optional): opacity: 1, translateY: 0 — elements do NOT reverse-animate on scroll-up unless specified
Trigger point: element enters viewport at 80px from the bottom edge
One-time trigger: animations fire once and stay in their end state (not repeating on re-scroll)
Reduced motion: annotate a note on the file — "All animations must respect prefers-reduced-motion: reduce. In reduced motion mode, replace all translate/scale animations with simple opacity fades only."


FIGMA PROTOTYPE ANNOTATIONS
In Figma, annotate these specific prototype connections:

Home hero CTA → scrolls to Services section (anchor scroll, 500ms smooth)
Navbar "What We Do" hover → shows Mega Dropdown overlay frame
Hamburger icon → shows Mobile Drawer overlay frame
Filter chip tap (Products) → Smart Animate to filtered grid state
Testimonial prev/next arrow → Smart Animate to next/prev card state
Carousel dots → each dot links to its respective testimonial card state
Blog "Read More" → navigates to Blog Post Detail frame
"Submit" button on forms → navigates to a Success State frame (centered checkmark + "Thanks, we'll be in touch!" message)
Footer newsletter "Subscribe" → inline success state (input replaced by "You're subscribed ✓" text)