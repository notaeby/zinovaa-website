GLOBAL DESIGN SYSTEM
Canvas: Desktop (1440px wide), with Mobile variants (390px) for every frame.
Grid: 12-column, 120px gutters desktop / 4-column, 16px gutters mobile.
Typography scale: Display (56px/bold), H1 (48px/bold), H2 (36px/semibold), H3 (24px/semibold), Body (16px/regular), Small (14px/regular), Caption (12px/regular). Use a clean geometric sans-serif (e.g. Inter or Space Grotesk as placeholder labels).
Color tokens (label them, don't fill with real hex): --color-primary (brand dark, used for nav/footer backgrounds), --color-accent (CTA buttons, highlights), --color-surface (light background), --color-muted (subtext), --color-border, --color-white.
Spacing system: 4px base unit — use multiples of 8px for all padding/margin.
Components to define in a master component page: Navbar, Footer, Primary Button, Secondary Button (outline), Ghost Button, Service Card, Product Card, Blog Card, Testimonial Card, Stat Block, Icon Badge, Tag/Chip, Form Field (text input, textarea), Industry Badge, Step Indicator, Section Header (label + H2 + subtext layout), Divider.

FRAME 1 — GLOBAL NAVIGATION (Sticky)
Desktop layout (1440px, 72px tall):

Left zone: Zinovaa logo (placeholder rectangle, ~120×32px)
Center zone: horizontal nav links — Home · What We Do (with dropdown arrow) · Our Products · Information · About
"What We Do" triggers a Mega Dropdown (see Frame 1a below)
Right zone: "Contact Us" — filled accent-color pill button

Mobile layout (390px, 64px tall):

Left: logo
Right: hamburger icon (3-line)
Collapsed state only; show a separate Mobile Drawer frame (full-width overlay, 100vh, links stacked vertically, sub-items indented, "Contact Us" CTA at bottom)

Frame 1a — Mega Dropdown (What We Do):

Full-width panel dropping below the nav bar, ~360px tall
4 columns, each column = one service: IoT · Embedded Systems · Web Development · Mobile App Development
Each column: small icon placeholder (40×40px square), service name (H3), 1-line description text, "Learn More →" link
Subtle border-bottom divider, soft shadow


FRAME 2 — HOME PAGE (/)
Section 2.1 — Hero

Full-width, ~100vh. Dark background (--color-primary).
Left column (60% width): eyebrow label chip ("End-to-End Innovation Partner"), H1 headline, subtitle paragraph (2 lines), two buttons side-by-side: "Explore More" (filled) + "See Our Work" (outline)
Right column (40% width): large illustrated placeholder rectangle (~560×480px) representing a tech/circuit visual
Bottom of section: a row of 4 stat blocks (e.g. "50+ Projects · 6 Industries · 4 Service Pillars · 3 Global Partners") — each stat block has a large number (Display size) + label (Caption)

Section 2.2 — Core Services

Section header component: small eyebrow "What We Do" + H2 "Our Core Services" + subtitle sentence
2-column grid of service cards (3 rows = 6 cards total): IoT, Embedded Systems, Web Development, Mobile App Development, Product Design & Development, Branding & Marketing
Each card: icon placeholder (48px circle), service name (H3), 2-line description, "Learn More →" text link
Cards have a subtle border and hover-state shadow annotation

Section 2.3 — Our Story (Split)

50/50 horizontal split
Left: image placeholder (full-height rectangle, ~600×480px)
Right: section label, H2 "Our Story", paragraph text, three icon+text milestone items stacked vertically (Started Small / Growing Forward / Built with Purpose), "Learn More" ghost button

Section 2.4 — Industries We Served

Centered section header
Single horizontal scrolling row of 6 industry badges (icon + label each): Healthcare, Education, E-commerce, Startups, Home & IoT, Finance
On desktop show all 6 in a 6-column flex row; on mobile, show as horizontal scroll strip

Section 2.5 — Testimonials

Light surface background
Left: large image placeholder (~480×400px, client photo or team photo) with a decorative corner accent shape
Right: section header + H2 + subtitle
Below: carousel of 4 testimonial cards. Each card: quote text (Body), star rating row (5 stars, placeholder), client avatar circle, client name (semibold), role + company (muted caption)
Carousel dots / prev-next arrow controls annotated

Section 2.6 — Design Process

Dark background section
Left column: H2 "Our Design Process: Built for Results", 3-paragraph text block, CTA button "Let's Shape Your Idea"
Right column: 3-step vertical stepper: Step 1 "Product Discovery", Step 2 "Design & Testing", Step 3 "Continuous Discovery". Each step: numbered circle, step name (H3), 1-line description. Steps connected by vertical dashed line.
Small process illustration placeholder on the right side (~300×300px)

Section 2.7 — Why Choose Us

Centered section header + H2
3-column × 2-row grid of reason cards (6 total): End-to-End Expertise / Custom Solutions / Future-Ready Technology / Client Approach / Proven Track Record / Ongoing Support
Each card: icon placeholder (40px), title (H3), description (Body, 2 lines)

Section 2.8 — Work Process

Centered section header
Horizontal 4-step numbered process row: 1 Ideation & Planning → 2 Design & Prototype → 3 Development → 4 Launch & Support
Each step: large step number, icon placeholder, step name, 1-line description
Steps connected by horizontal arrow/line between them
On mobile: stack vertically

Section 2.9 — Contact Form (CTA Band)

Dark accent background band
Left: H2 "Let's Build Something Great Together" + short subtext
Right: inline contact form with fields: Name, Email, Contact Number, Subject, Message (textarea), Submit button (full-width on mobile)
All fields use the Form Field component

Section 2.10 — Blog Posts

Centered section header "Our Blog Posts"
3-column row of Blog Cards. Each card: featured image placeholder (16:9 ratio), date tag, post title (H3), 2-line excerpt, "Read More →" link
Below row: centered "View All Posts" outline button


FRAME 3 — WHAT WE DO / SERVICES OVERVIEW (/our-services/)
Section 3.1 — Page Hero

Same Navbar
Dark hero band (~50vh): H1 "What We Offer", subtitle, single CTA "Get Services" button
No image — pure typographic hero with subtle background pattern placeholder

Section 3.2 — Services List (Alternating)

4 alternating image+text rows, one per service:

Row 1 (text left, image right): Embedded System Development — icon, H2, paragraph, "Learn More" button / image placeholder right
Row 2 (image left, text right): IoT — reversed layout
Row 3 (text left, image right): Mobile App Development
Row 4 (image left, text right): Web Development


Each image placeholder: ~600×400px, rounded corners (8px)
Rows separated by generous vertical spacing (80px)

Section 3.3 — Contact Form

Same form component as Section 2.9 (reuse component)


FRAME 4 — SERVICE DETAIL: IoT (/internet-of-things/)
Section 4.1 — Page Hero

Dark hero band: breadcrumb (Home > What We Do > IoT), H1 "Internet of Things (IoT)", subtitle, CTA button

Section 4.2 — Service Overview (Split)

Left: H2, body text (3–4 lines), 3 bullet-point feature list with check icons
Right: large illustration placeholder

Section 4.3 — Key Capabilities Grid

H2 "What We Deliver"
3-column × 2-row grid of capability cards (icon + title + 1-line text): e.g. Sensor Integration, Cloud Communication, OTA Updates, Secure Architecture, Data Analytics, Edge Computing

Section 4.4 — Process Steps

Numbered horizontal stepper (same component as 2.8)

Section 4.5 — CTA Band

"Ready to connect your devices?" H2, subtext, "Talk to Us" button

(Repeat Frames 4.1–4.5 structure for the three remaining service detail pages: Embedded Systems, Web Development, Mobile App Development — annotate as "same template, swap content")

FRAME 5 — OUR PRODUCTS (/our-products/)
Section 5.1 — Page Hero

Dark hero band: H1 "The Products Behind Our Journey", subtitle

Section 5.2 — Filter Bar

Horizontal row of filter chips/tags: All · IoT · Web Development · App Development
Active state: filled accent chip; inactive: outlined chip
Annotate: "clicking a filter hides/shows cards below"

Section 5.3 — Products Grid

3-column masonry-style grid of Product Cards
Each card: image placeholder (3:2 ratio, fills top of card), product name (H3) as overlay or below, category tag chip, short 1-line description, "View Project →" text link
Products to show: Alert Pulse Emergency Node, Step Up (Smart Shoe Sole), Fyrebox, Alert Pulse Dashboard, Step Up Dashboard, Santa Walkie App
Below grid: "Load More" outlined button (centered)


FRAME 6 — ABOUT (/about/)
Section 6.1 — Page Hero

Dark band: H1 "Learn About Our Commitment to Delivering Innovative Solutions", subtitle, "Get In Touch" CTA

Section 6.2 — Our Story (Split)

Left: image placeholder (~560×420px)
Right: H2 "Our Story", paragraph text

Section 6.3 — What We Believe In

Section header "Our Values"
2-column × 2-row grid of value cards: Innovation with Purpose / Engineering with Precision / Growth with Integrity / Collaboration with Clients
Each: icon placeholder (48px), title (H3), body text (2 lines)

Section 6.4 — Mission & Vision (Two-Column)

Light surface background
Left card: "Our Vision" — H3 label, body paragraph
Right card: "Our Mission" — H3 label, body paragraph
Both cards have a subtle border and equal height

Section 6.5 — Industries We Serve

Centered section header
6-column icon row (same structure as Section 2.4 but with industries: Healthcare, Manufacturing, Retail, Automotive, Finance, Education)

Section 6.6 — CEO Quote / Culture Block

Dark background
Left: large image placeholder (CEO photo, ~320×400px, rounded 12px)
Right: pull-quote text (large italic body text), attribution name (H3) + title (muted)

Section 6.7 — Exclusive Partner Spotlight

Section header "Our Exclusive Partner"
Single wide card: partner logo placeholder (120×48px), partner name, quote in italic, attribution line

Section 6.8 — Partners Logo Strip

Centered section header "Our Partnerships"
Single row of 6 partner logo placeholders (~120×48px each), evenly spaced, greyscale treatment annotation
Partners: FYREBOX, FAVORIOT, MICROTRONIX, PRODUCT HOUSE, AIM DIGITAL TECHNOLOGIES, F.R.S

Section 6.9 — Contact Form

Same reusable form component


FRAME 7 — INFORMATION (/information/)
Section 7.1 — Page Hero

Dark band: H1 "Information", subtitle

Section 7.2 — Content Placeholder

Annotated placeholder block: "Content TBD — suggest using this page for FAQs, tech stack details, or company policies. Wireframe shows: H2 section header + accordion list of 6–8 items. Each accordion item: question text (H3), expand icon (chevron), body text revealed on expand."
Show 2 items in expanded state, rest collapsed


FRAME 8 — BLOG INDEX (/blogs/)
Section 8.1 — Page Hero

Dark band: H1 "Our Blog", subtitle

Section 8.2 — Featured Post

Full-width featured card: large image placeholder (16:5 ratio), category chip, H2 post title, 3-line excerpt, date, "Read More →" button

Section 8.3 — Post Grid

3-column grid of Blog Cards (same component from 2.10)
Pagination row at bottom: prev arrow · 1 · 2 · 3 · next arrow


FRAME 9 — BLOG POST DETAIL (/blog/[post-title]/)
Section 9.1 — Page Hero

Breadcrumb (Home > Blog > Post Title)
H1 post title, date + category chip, author avatar circle + name

Section 9.2 — Article Body

70/30 layout
Left (content): feature image placeholder (16:9), article body text with placeholder H2 subheadings, body paragraphs, a callout box component (accent-border left, light background)
Right (sidebar): "Related Posts" widget (3 stacked mini blog cards: thumbnail + title + date), "Categories" tag list


FRAME 10 — CONTACT (/contact/)
Section 10.1 — Page Hero

Dark band: H1 "Get In Touch", subtitle

Section 10.2 — Two-Column Layout

Left (Contact Info): 3 info rows with icon + text: phone number, email, physical address. Below: social icon row (Instagram + any others). Below: embedded map placeholder (grey rectangle, ~480×280px, annotated "Google Maps embed")
Right (Form): full contact form — Name, Email, Phone Number, Subject, Message textarea, Submit button


FRAME 11 — FOOTER (Global Component)
Desktop (1440px, ~360px tall):

Row 1: Zinovaa logo (left) + tagline text
Row 2: 4-column layout:

Col 1: company description blurb (3 lines), Instagram icon link
Col 2: "Contact Info" — phone, email, address (each with icon)
Col 3: "Quick Links" — What We Do, Our Products, Information, About
Col 4: "Join Our Newsletter" — label text, email input field + "Subscribe" button


Divider line
Row 3 (Bottom bar): "© 2025 Zinovaa. All Rights Reserved." left-aligned

Mobile: Stack all 4 columns vertically, logo + tagline on top, copyright bar at very bottom.

WIREFRAME ANNOTATIONS (apply throughout)

Mark all buttons with their interaction state: Default / Hover / Active / Disabled
Mark all form fields with: Empty / Focused / Filled / Error states
Annotate scroll behavior: "Navbar becomes sticky and reduces to 56px on scroll"
Annotate the "What We Do" dropdown: "appears on hover (desktop), on tap (mobile)"
Annotate filter chips on Products page: "active filter updates grid with CSS transition"
Annotate the testimonials section: "carousel auto-advances every 5s, pauses on hover"
Add red-line spacing annotations on at least one section per page to show padding values
Mark all images as "Image Placeholder — [description of intended visual content]"
Include a Responsive Breakpoint Note frame: 1440px Desktop → 1024px Tablet → 390px Mobile, showing which components reflow


FIGMA FILE STRUCTURE RECOMMENDATION
Organize frames in this page order in Figma:

🎨 Design Tokens — color styles, text styles, spacing grid
🧩 Components — all master components listed above
🏠 Home — full desktop + mobile frames
⚙️ Services Overview — desktop + mobile
🔌 IoT / 🔧 Embedded / 🌐 Web Dev / 📱 Mobile Dev — one page each
📦 Products
ℹ️ About
📋 Information
📝 Blog Index + 📄 Blog Post
📞 Contact
🗂️ Navigation States — mega dropdown, mobile drawer