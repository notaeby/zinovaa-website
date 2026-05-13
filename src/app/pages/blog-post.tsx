import { ChevronRight, Calendar, Clock, ArrowRight, Lightbulb } from "lucide-react";
import { MascotCorner } from "../components/mascot";

type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "callout"; heading: string; body: string };

type Post = {
  slug: string;
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  author: { name: string; role: string; initials: string };
  readTime: string;
  image: string;
  content: ContentBlock[];
};

const posts: Post[] = [
  {
    slug: "designing-firmware-10-year-battery",
    date: "Apr 18, 2026",
    tag: "IoT",
    title: "Designing firmware for 10-year battery life",
    excerpt: "A look inside the power budget tradeoffs that keep our LoRaWAN sensors alive through a decade in the field.",
    author: { name: "Ravi Krishnan", role: "Founder & CEO", initials: "RK" },
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1577962144759-8dec6b55c952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    content: [
      { type: "p", text: "When we took on the Alert Pulse engagement, the spec called for a five-year battery life. Four weeks into firmware design, the product team asked whether we could push it to ten. What followed was a textbook lesson in the compounding power of small decisions — and the surprising places where milliamps hide." },
      { type: "h2", text: "Why ten years matters" },
      { type: "p", text: "Batteries are the single biggest driver of total cost of ownership for a deployed sensor. Every field visit — every replacement — is labor, logistics, and risk. Doubling battery life doesn't double ROI; it roughly squares it, because maintenance scales non-linearly with fleet size." },
      { type: "p", text: "For industrial IoT deployments in hard-to-reach locations — pipeline monitoring, structural sensing, cold-chain logistics — ten years isn't a marketing number. It's the difference between a product that earns margin and one that bleeds it." },
      { type: "callout", heading: "Key takeaway", body: "Power optimization is not a late-stage polish step — it's an architectural decision made at schematic review. Fight for it early or pay for it in the field." },
      { type: "h2", text: "The three buckets of power draw" },
      { type: "p", text: "Every battery-powered design has three distinct power budgets — active, sleep, and radio — and they interact in ways that are rarely obvious from a datasheet. Getting the balance right means understanding duty cycles at the firmware level, not just nominal currents at the chip level." },
      { type: "p", text: "The mistake most teams make is optimizing active-mode draw when sleep-mode leakage is where the decade goes. A microamp of leakage, sustained over ten years, is more charge than a full day of active use." },
      { type: "h2", text: "What shipped" },
      { type: "p", text: "The device we shipped to Alert Pulse runs on two AA lithium primaries and holds a 12-year confidence interval at 2σ. Firmware is under 48 KB, the radio wakes on a six-hour heartbeat, and sensor events can interrupt the MCU out of deep sleep in under 400 microseconds." },
    ],
  },
  {
    slug: "shipping-react-apps-fast-at-scale",
    date: "Apr 12, 2026",
    tag: "Engineering",
    title: "Shipping React apps that stay fast at scale",
    excerpt: "The four rendering rules we apply to every project over 50k lines of code.",
    author: { name: "Priya Menon", role: "Principal Engineer", initials: "PM" },
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    content: [
      { type: "p", text: "React performance problems almost never arrive announced. They sneak in through a series of individually reasonable decisions that compound until a button click takes 800ms and nobody knows why. Over four years of building production apps that scale past 50k lines, we've distilled our approach down to four rules that prevent most of the damage." },
      { type: "h2", text: "Rule 1: Colocate state as low as it will go" },
      { type: "p", text: "Global state is expensive. Every piece of state lifted higher than it needs to be is a subscription that costs a render somewhere. We audit state placement before we audit render counts — it's almost always the root cause." },
      { type: "callout", heading: "The pattern that saves us", body: "Before reaching for Redux or Zustand, ask: does this state need to be shared across routes? If not, keep it local. You'll be surprised how rarely the answer is yes." },
      { type: "h2", text: "Rule 2: Memoize boundaries, not implementations" },
      { type: "p", text: "React.memo and useMemo are not free — they add comparison overhead and cognitive load. We reserve them for stable component interfaces at subsystem boundaries: the table, the chart, the sidebar. Interior components inside those systems stay unmemoized unless profiling proves otherwise." },
      { type: "h2", text: "Rule 3: Virtualize before you paginate" },
      { type: "p", text: "When a list grows past 200 items, pagination feels like the safe choice. But virtualization keeps the URL clean, preserves scroll position, and usually delivers better perceived performance because the user never waits for a page request." },
      { type: "h2", text: "Rule 4: Measure with production data" },
      { type: "p", text: "Synthetic benchmarks lie. The only number that matters is p95 interaction latency on real hardware with real data. We instrument every critical user flow with a lightweight performance mark before we ship, and we track regressions in CI using Lighthouse CI with budgets locked to the first shipping build." },
    ],
  },
  {
    slug: "case-against-hero-section",
    date: "Apr 02, 2026",
    tag: "Design",
    title: "The case against the hero section",
    excerpt: "Why we're retiring the oversized hero on most of our B2B work — and what's replacing it.",
    author: { name: "Aisha Rahman", role: "Design Director", initials: "AR" },
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    content: [
      { type: "p", text: "The hero section has been the default opening move of B2B web design for a decade. Full-width image, bold headline, CTA button. You know the pattern. We've shipped it dozens of times. And increasingly, we think it's the wrong call for most of our clients." },
      { type: "h2", text: "What the data says" },
      { type: "p", text: "Across the last eight redesigns we've instrumented with heatmaps and scroll analytics, the pattern is consistent: users who arrive at a B2B site with purchase intent don't scroll past the hero to discover the value proposition. They look for navigation or a search bar. The hero — particularly one with a stock photo and a generic tagline — is actively ignored." },
      { type: "callout", heading: "The uncomfortable truth", body: "A beautiful hero that nobody reads is an expensive above-the-fold ad for your own product. The buyer who needs you will find you faster if you skip straight to specifics." },
      { type: "h2", text: "What's replacing it" },
      { type: "p", text: "We've been experimenting with what we call the 'specificity lead' — opening a page with a precise statement of who the product is for and what problem it solves, supported by a live product screenshot or demo video. No metaphors, no animations, no aspirational stock photography." },
      { type: "p", text: "Conversion rates on the two projects where we've fully deployed this approach are up 18% and 23% respectively over their hero-based predecessors. Sample sizes are still small, but the direction is consistent." },
      { type: "h2", text: "When a hero still makes sense" },
      { type: "p", text: "Consumer products, brand-forward campaigns, and portfolio sites all still benefit from an image-led opening. The hero isn't wrong — it's just wrong for the specific task of converting a skeptical B2B buyer in 2026, when they've seen a thousand of them." },
    ],
  },
  {
    slug: "react-native-vs-native-2026",
    date: "Mar 28, 2026",
    tag: "Mobile",
    title: "React Native vs native in 2026",
    excerpt: "When cross-platform wins, when it loses, and the framework for deciding per feature, not per app.",
    author: { name: "David Chen", role: "Mobile Lead", initials: "DC" },
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1646737554389-49329965ef01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    content: [
      { type: "p", text: "The React Native vs native debate has been relitigated every 18 months since 2016. The right answer has always been 'it depends' — but the variables that determine the right call have shifted significantly. The new architecture, Expo's maturity, and the proliferation of device-native APIs have reshuffled the deck." },
      { type: "h2", text: "Where React Native wins cleanly in 2026" },
      { type: "p", text: "If your team's primary strength is JavaScript, if your app is primarily data-display and forms, and if your performance requirements don't involve continuous animation or GPU-heavy rendering, React Native with the new architecture is faster to ship, cheaper to maintain, and good enough on performance to satisfy real users." },
      { type: "callout", heading: "The threshold has moved", body: "Two years ago, list performance and animation jank were reliable failure modes for React Native. The new architecture eliminates most of them. Re-evaluate your assumptions if they're based on pre-2024 experience." },
      { type: "h2", text: "Where native still wins" },
      { type: "p", text: "Continuous camera pipelines, ARKit/ARCore experiences, real-time audio processing, and anything that needs sub-16ms frame guarantees are still native territory. The bridge — even the new one — adds latency that compounds at 60fps." },
      { type: "h2", text: "The per-feature decision model" },
      { type: "p", text: "The most practical approach we've landed on is making the decision per feature, not per app. Start with React Native as the default. Identify features that require native performance guarantees and build those as native modules or native screens within a React Native shell. This hybrid approach gives you shared logic and a shared component library while preserving native performance where it counts." },
      { type: "h2", text: "Team structure matters more than the framework" },
      { type: "p", text: "The honest answer is that framework choice is usually less important than whether you have engineers who understand the memory model of the platform they're building on. A great Swift developer and a great JavaScript developer will both deliver better apps than a confused generalist using either framework." },
    ],
  },
  {
    slug: "secure-ota-pipeline",
    date: "Mar 21, 2026",
    tag: "IoT",
    title: "Building a secure OTA pipeline that won't wake you up at 3am",
    excerpt: "A/B partitions, signed manifests, and the three rollback triggers every fleet should instrument.",
    author: { name: "Ravi Krishnan", role: "Founder & CEO", initials: "RK" },
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1751448555253-f39c06e29d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    content: [
      { type: "p", text: "Nothing tests your OTA pipeline like a firmware bug that lands on 40,000 devices simultaneously. We've been there — not on our own mistake, but inheriting a client's pipeline that had no rollback, no staged rollout, and no signing. The recovery took three weeks. Here's how we build them now." },
      { type: "h2", text: "Start with A/B partitions" },
      { type: "p", text: "The single most important architectural decision in an OTA-capable device is dual-partition flash storage. Boot from A, write update to B, verify, swap the boot pointer. If B fails to boot, fall back to A. This sounds obvious — it's remarkable how often devices ship without it." },
      { type: "p", text: "The partition swap must be atomic. If power is cut during the pointer update, the device must revert to the last known-good partition. Use your MCU's built-in swap registers or implement a two-phase write with CRC verification." },
      { type: "callout", heading: "Non-negotiable requirement", body: "Never ship a device that can be permanently bricked by a failed OTA update. A bad update should always result in a device that comes back up on old firmware, ready to try again." },
      { type: "h2", text: "Sign every manifest" },
      { type: "p", text: "Unsigned OTA pipelines are not a theoretical vulnerability — they're an active attack surface. Every firmware bundle should be signed with an asymmetric key held offline, with the public key baked into the bootloader at manufacturing time. Treat the private key with the same care as a code signing certificate for financial software." },
      { type: "h2", text: "The three rollback triggers" },
      { type: "p", text: "Beyond partition fallback, instrument your firmware with three automatic rollback triggers: watchdog expiry count (more than two resets in a boot window), connectivity timeout (can't reach the OTA endpoint in the first hour of operation after update), and heartbeat failure (application layer health check fails). Any one of these should trigger a revert to the previous partition." },
      { type: "h2", text: "Stage your rollout" },
      { type: "p", text: "Even with perfect rollback logic, a staged rollout is your last line of defense. We target 1% → 10% → 50% → 100% with 48-hour dwell times between stages, automated go/no-go gates based on device telemetry, and a manual approval step before the final wave. It's slower. It's saved us more than once." },
    ],
  },
  {
    slug: "paid-discovery-sprints",
    date: "Mar 14, 2026",
    tag: "Process",
    title: "Why we run paid discovery sprints before every engagement",
    excerpt: "Two weeks of scoping saves six months of rework. Here's the template we use with every new client.",
    author: { name: "Aisha Rahman", role: "Design Director", initials: "AR" },
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1690192336256-afad2a1d824c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    content: [
      { type: "p", text: "We used to start every project with a free scoping call and a proposal. We lost money on most of them, not because we were wrong about the estimate but because the thing we scoped was often not the thing the client needed. A paid discovery sprint changed that." },
      { type: "h2", text: "What a discovery sprint is" },
      { type: "p", text: "A discovery sprint is a two-week engagement, typically $8,000–$14,000 depending on complexity, that produces three artifacts: a product requirements brief, a technical architecture sketch, and a risk register. The client owns all three. If they don't hire us for the build, they can take those documents to any other agency." },
      { type: "p", text: "Making the sprint paid accomplishes two things: it ensures the client has real skin in the game, which means you get access to the actual decision-makers, and it lets us do the work properly rather than guessing at what a proposal should say." },
      { type: "callout", heading: "The counterintuitive part", body: "Charging for discovery increases close rates on the subsequent build engagement, not decreases them. Clients who've paid for good thinking are more likely to trust your approach — and more likely to be the kind of clients you want to work with." },
      { type: "h2", text: "The sprint template" },
      { type: "p", text: "Week one is all inputs: stakeholder interviews, technical audit of any existing systems, competitive review, and assumptions mapping. Week two is synthesis: we draft the architecture, validate it against the requirements, and present the risk register to the full client team." },
      { type: "h2", text: "What we look for in week one" },
      { type: "p", text: "The most valuable outputs from stakeholder interviews aren't the answers — they're the contradictions. When the CEO's definition of success conflicts with the CTO's definition of the system, that's not a problem to paper over; it's the central design constraint of the entire engagement." },
    ],
  },
  {
    slug: "design-systems-that-outlive-authors",
    date: "Mar 07, 2026",
    tag: "Design",
    title: "Design systems that outlive their authors",
    excerpt: "Tokens, primitives, and the tiny conventions that stop a DS from rotting the moment its creator leaves.",
    author: { name: "Aisha Rahman", role: "Design Director", initials: "AR" },
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1672931732795-3794d39919c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    content: [
      { type: "p", text: "Every design system eventually outlives the person who built it. If that person built it well, the system keeps working. If they built it as a collection of opinions without rationale, it rots. We've inherited both kinds. Here's what separates them." },
      { type: "h2", text: "Tokens before components" },
      { type: "p", text: "A design system that doesn't have a solid token layer is a set of opinionated UI components — useful, but brittle. Tokens encode the semantic intent behind visual choices: color-action-primary is more durable than blue-600 because it survives a rebrand. Every color, spacing value, and type style should be reachable through a semantic alias, not a raw value." },
      { type: "callout", heading: "The hierarchy that matters", body: "Primitive tokens (blue-600, space-4) → semantic tokens (color-action-primary, spacing-component-gap) → component tokens (button-bg-color). Each layer can change independently. Most systems skip the middle layer and pay for it later." },
      { type: "h2", text: "Write the why, not the what" },
      { type: "p", text: "Component documentation that says 'use this button for primary actions' is not documentation — it's a caption. Useful documentation explains why this button exists, what visual hierarchy it creates, what the alternative is, and when to reach for the alternative instead." },
      { type: "h2", text: "Design primitives separately from patterns" },
      { type: "p", text: "A primitive is the Button. A pattern is the form that uses it. Systems that conflate these levels end up with patterns that can't be reassembled differently — each one is a crystallized decision that the next designer has to hack around rather than recombine. Keep the two layers visually and documentarily distinct." },
      { type: "h2", text: "The longevity audit" },
      { type: "p", text: "Before a system ships, we run a longevity audit: can a new designer, with no prior context, find the right component for a given use case in under two minutes? Can they understand why that component has the constraints it has? If the answer to either is no, the documentation layer isn't done yet." },
    ],
  },
  {
    slug: "trpc-in-anger",
    date: "Feb 28, 2026",
    tag: "Engineering",
    title: "tRPC in anger: one year in production",
    excerpt: "The good, the bad, and the surprising about type-safe APIs at a 20-person startup.",
    author: { name: "Priya Menon", role: "Principal Engineer", initials: "PM" },
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1643000867361-cd545336249b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    content: [
      { type: "p", text: "We migrated our largest client's internal platform from a REST API with hand-maintained TypeScript types to tRPC 14 months ago. Here's an honest account of what worked, what didn't, and the one thing that surprised us most." },
      { type: "h2", text: "What worked" },
      { type: "p", text: "The elimination of type drift is the headline benefit and it delivers. The experience of refactoring a procedure's return type and watching TypeScript errors propagate instantly to every consumer — across the full stack — is genuinely transformative for a team of mixed seniority. Junior developers catch breaking changes that used to require a senior review." },
      { type: "p", text: "The middleware chain is also excellent. Auth, rate limiting, logging, and request tracing all compose cleanly, and the types flow through them correctly. This is not true of most API middleware systems." },
      { type: "callout", heading: "The ROI case", body: "We estimate tRPC saves our client team roughly 6 engineer-hours per week in type correction and integration debugging. At their team size, that's a full engineer-day per week returned to feature work." },
      { type: "h2", text: "What didn't work" },
      { type: "p", text: "Public-facing APIs are still REST. tRPC's wire format is not designed for external consumption, and attempting to document it for third-party integrators is painful. We maintain a thin REST adapter layer for any endpoint that needs to be externally callable. This is not a flaw in tRPC — it's a correct division of concerns — but it's overhead the team didn't anticipate." },
      { type: "h2", text: "The surprise" },
      { type: "p", text: "The biggest unexpected benefit was onboarding speed. New engineers can find every API call in the codebase, understand its inputs and outputs, and trace it to its implementation in under an hour. With the old REST approach, we were losing a week per hire to API archaeology. That's the number that convinced the client to expand tRPC across all their internal tools." },
    ],
  },
  {
    slug: "lorawan-vs-cellular",
    date: "Feb 20, 2026",
    tag: "IoT",
    title: "Choosing between LoRaWAN and cellular for your next product",
    excerpt: "A decision matrix covering cost, coverage, compliance, and the operational reality of each.",
    author: { name: "Ravi Krishnan", role: "Founder & CEO", initials: "RK" },
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1775501273785-e13b3a48fffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    content: [
      { type: "p", text: "The first question every IoT product team asks us is: LoRaWAN or cellular? The answer depends on four variables — payload size, deployment geography, battery budget, and operational ownership. Get one of them wrong and you'll be migrating connectivity stacks 18 months into production." },
      { type: "h2", text: "The payload test" },
      { type: "p", text: "LoRaWAN is optimized for small, infrequent payloads — sensor readings, status updates, alarm events. If your device needs to send more than about 250 bytes per transmission, or more than a few transmissions per hour, LoRaWAN's duty cycle constraints will fight you. Cellular starts to look rational the moment you need any kind of streaming or large-payload transfer." },
      { type: "callout", heading: "The number most teams get wrong", body: "LoRaWAN's duty cycle limits aren't a configuration setting — they're a regulatory constraint. In most jurisdictions, you're limited to 1% duty cycle on most sub-GHz bands. That means 36 seconds of transmit time per hour. Design your payload and transmission schedule around that ceiling, not your ideal behavior." },
      { type: "h2", text: "The geography test" },
      { type: "p", text: "LoRaWAN requires infrastructure — either public network coverage (The Things Network, Helium, national carriers' LoRaWAN networks) or private gateway deployment. Cellular requires a data plan but the infrastructure exists globally. For geographically distributed deployments in areas with good cellular coverage, cellular is operationally simpler even when it costs more per device." },
      { type: "h2", text: "The battery test" },
      { type: "p", text: "For multi-year battery life, LoRaWAN wins decisively. A LoRaWAN transmission at SF7 draws roughly 10x less energy than a cellular data transfer, and the sleep current of LoRa radio ICs is measured in microamps. If your battery budget is the primary constraint, this comparison is over quickly." },
      { type: "h2", text: "Who owns the network" },
      { type: "p", text: "The operational reality question is often the deciding factor. A private LoRaWAN network means you own and operate the gateway infrastructure — which means you're responsible for uptime, coverage gaps, and gateway firmware. Cellular offloads that to the carrier. For small teams shipping into enterprise environments, the operational simplicity of cellular is often worth the premium." },
    ],
  },
];

const categories = [
  { name: "IoT", count: 14 },
  { name: "Engineering", count: 22 },
  { name: "Design", count: 11 },
  { name: "Mobile", count: 8 },
  { name: "Process", count: 6 },
  { name: "Case Study", count: 9 },
];

function MiniCard({ p }: { p: Post }) {
  return (
    <a href={`#/blog/${p.slug}`} className="group flex gap-3 rounded-xl p-3 transition hover:bg-[var(--zn-surface)]">
      <div className="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-lg">
        <img
          src={p.image}
          alt={p.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center gap-1 min-w-0">
        <h4 className="text-[var(--zn-primary)] line-clamp-2" style={{ fontSize: "13px", fontWeight: 600, lineHeight: 1.3 }}>
          {p.title}
        </h4>
        <span className="text-[var(--zn-muted)]" style={{ fontSize: "11px", letterSpacing: "0.06em" }}>
          {p.date.toUpperCase()}
        </span>
      </div>
    </a>
  );
}

function renderBlock(block: ContentBlock, idx: number) {
  if (block.type === "p") {
    return (
      <p key={idx} className="text-[var(--zn-muted)]" style={{ fontSize: "16px", lineHeight: 1.75 }}>
        {block.text}
      </p>
    );
  }
  if (block.type === "h2") {
    return (
      <h2 key={idx} className="mt-4 text-[var(--zn-primary)]" style={{ fontSize: "28px", fontWeight: 600, lineHeight: 1.25 }}>
        {block.text}
      </h2>
    );
  }
  if (block.type === "callout") {
    return (
      <aside key={idx} className="relative flex gap-4 rounded-2xl border border-[var(--zn-border)] bg-[var(--zn-surface)] p-6 pl-8 my-2">
        <span className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-[var(--zn-accent)]" />
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--zn-accent)] text-[var(--zn-primary)]">
          <Lightbulb size={18} />
        </div>
        <div>
          <h4 className="text-[var(--zn-primary)]" style={{ fontSize: "15px", fontWeight: 600 }}>{block.heading}</h4>
          <p className="mt-1 text-[var(--zn-muted)]" style={{ fontSize: "14px", lineHeight: 1.65 }}>{block.body}</p>
        </div>
      </aside>
    );
  }
  return null;
}

export function BlogPostPage({ slug }: { slug: string }) {
  const post = posts.find((p) => p.slug === slug) ?? posts[0];
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--zn-primary)] pt-[72px]">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 opacity-[0.05]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }} />
          <div className="absolute -right-20 top-10 h-[400px] w-[400px] rounded-full bg-[var(--zn-accent)]/10 blur-3xl" />
        </div>
        <MascotCorner
          left="-20px"
          bottom="-10px"
          angle={-10}
          size={160}
          parallaxDistance={30}
          floatAmplitude={8}
          floatDuration={7.5}
          depth={12}
          flipX={false}
          maxTilt={15}
          glare={false}
          entryDelay={0.65}
        />
        <div className="relative mx-auto max-w-[1040px] px-6 lg:px-10 py-16 lg:py-20">
          <nav className="flex items-center gap-2 text-white/60" style={{ fontSize: "13px" }}>
            <a href="#/" className="hover:text-white">Home</a>
            <ChevronRight size={14} />
            <a href="#/blogs" className="hover:text-white">Blog</a>
            <ChevronRight size={14} />
            <span className="text-[var(--zn-accent)] truncate max-w-[320px]">{post.title}</span>
          </nav>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-[var(--zn-accent)] px-3 py-1 text-[var(--zn-primary)]" style={{ fontSize: "11px", letterSpacing: "0.06em", fontWeight: 600 }}>
              {post.tag.toUpperCase()}
            </span>
            <span className="inline-flex items-center gap-2 text-white/70" style={{ fontSize: "13px" }}>
              <Calendar size={14} /> {post.date}
            </span>
            <span className="inline-flex items-center gap-2 text-white/70" style={{ fontSize: "13px" }}>
              <Clock size={14} /> {post.readTime}
            </span>
          </div>

          <h1 className="mt-5 text-white max-w-3xl" style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {post.title}
          </h1>
          <p className="mt-5 max-w-2xl text-white/70" style={{ fontSize: "18px", lineHeight: 1.6 }}>
            {post.excerpt}
          </p>

          <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--zn-accent)] text-[var(--zn-primary)]" style={{ fontWeight: 700 }}>
              {post.author.initials}
            </div>
            <div>
              <div className="text-white" style={{ fontSize: "14px", fontWeight: 600 }}>{post.author.name}</div>
              <div className="text-white/60" style={{ fontSize: "13px" }}>{post.author.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[70fr_30fr] gap-12">
          {/* Content */}
          <article className="flex flex-col gap-6 min-w-0">
            {/* Featured image */}
            <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "16/9" }}>
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover"
              />
              <div aria-hidden className="absolute inset-0" style={{
                background: "linear-gradient(to top, rgba(3,2,19,0.25) 0%, transparent 50%)",
              }} />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--zn-accent)]" />
                <span className="text-white/80" style={{ fontSize: "11px", letterSpacing: "0.06em" }}>{post.tag.toUpperCase()}</span>
              </div>
            </div>

            {post.content.map((block, idx) => renderBlock(block, idx))}
          </article>

          {/* Sidebar */}
          <aside className="flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-[var(--zn-border)] bg-white p-5">
              <h3 className="text-[var(--zn-primary)] mb-4" style={{ fontSize: "14px", letterSpacing: "0.08em" }}>
                RELATED POSTS
              </h3>
              <div className="flex flex-col gap-1">
                {related.map((p) => <MiniCard key={p.slug} p={p} />)}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--zn-border)] bg-white p-5">
              <h3 className="text-[var(--zn-primary)] mb-4" style={{ fontSize: "14px", letterSpacing: "0.08em" }}>
                CATEGORIES
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((c) => (
                  <a
                    key={c.name}
                    href="#/blogs"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--zn-border)] px-3 py-1.5 text-[var(--zn-primary)] transition hover:border-[var(--zn-primary)] hover:bg-[var(--zn-surface-alt)]"
                    style={{ fontSize: "13px" }}
                  >
                    {c.name}
                    <span className="text-[var(--zn-muted)]" style={{ fontSize: "11px" }}>{c.count}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[var(--zn-primary)] p-6">
              <h3 className="text-white" style={{ fontSize: "18px", fontWeight: 600 }}>Working on something similar?</h3>
              <p className="mt-2 text-white/70" style={{ fontSize: "13px", lineHeight: 1.6 }}>
                We'd love to chat. Most projects start with a scoped discovery call.
              </p>
              <a href="#/contact" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--zn-accent)] px-4 py-2 text-[var(--zn-primary)]" style={{ fontSize: "13px", fontWeight: 500 }}>
                Start a Project <ArrowRight size={14} />
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
