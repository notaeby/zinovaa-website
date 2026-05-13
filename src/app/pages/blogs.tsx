import { useState } from "react";
import { ArrowRight, ArrowLeft, Calendar } from "lucide-react";
import { Button, Chip } from "../components/ui-kit";
import { MascotCorner } from "../components/mascot";

const featured = {
  date: "Apr 20, 2026",
  tag: "Case Study",
  title: "How we shipped a medical-grade IoT platform in 14 weeks",
  excerpt:
    "From kickoff to FDA pre-submission, the Alert Pulse engagement condensed what was quoted as an 18-month build into a single quarter. Here's the playbook — tradeoffs, mistakes, and all — for teams building life-safety-class connected devices on a startup timeline.",
  gradient: "from-[#2a1e5f] via-[#1e3a5f] to-[var(--zn-primary)]",
  accent: "#4ecdc4",
};

const posts = [
  { slug: "designing-firmware-10-year-battery", date: "Apr 18, 2026", tag: "IoT", title: "Designing firmware for 10-year battery life", excerpt: "A look inside the power budget tradeoffs that keep our LoRaWAN sensors alive through a decade in the field.", image: "https://images.unsplash.com/photo-1577962144759-8dec6b55c952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
  { slug: "shipping-react-apps-fast-at-scale", date: "Apr 12, 2026", tag: "Engineering", title: "Shipping React apps that stay fast at scale", excerpt: "The four rendering rules we apply to every project over 50k lines of code.", image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
  { slug: "case-against-hero-section", date: "Apr 02, 2026", tag: "Design", title: "The case against the hero section", excerpt: "Why we're retiring the oversized hero on most of our B2B work — and what's replacing it.", image: "https://images.unsplash.com/photo-1761122827167-159d1d272313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
  { slug: "react-native-vs-native-2026", date: "Mar 28, 2026", tag: "Mobile", title: "React Native vs native in 2026", excerpt: "When cross-platform wins, when it loses, and the framework for deciding per feature, not per app.", image: "https://images.unsplash.com/photo-1646737554389-49329965ef01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
  { slug: "secure-ota-pipeline", date: "Mar 21, 2026", tag: "IoT", title: "Building a secure OTA pipeline that won't wake you up at 3am", excerpt: "A/B partitions, signed manifests, and the three rollback triggers every fleet should instrument.", image: "https://images.unsplash.com/photo-1751448555253-f39c06e29d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
  { slug: "paid-discovery-sprints", date: "Mar 14, 2026", tag: "Process", title: "Why we run paid discovery sprints before every engagement", excerpt: "Two weeks of scoping saves six months of rework. Here's the template we use with every new client.", image: "https://images.unsplash.com/photo-1690192336256-afad2a1d824c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
  { slug: "design-systems-that-outlive-authors", date: "Mar 07, 2026", tag: "Design", title: "Design systems that outlive their authors", excerpt: "Tokens, primitives, and the tiny conventions that stop a DS from rotting the moment its creator leaves.", image: "https://images.unsplash.com/photo-1672931732795-3794d39919c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
  { slug: "trpc-in-anger", date: "Feb 28, 2026", tag: "Engineering", title: "tRPC in anger: one year in production", excerpt: "The good, the bad, and the surprising about type-safe APIs at a 20-person startup.", image: "https://images.unsplash.com/photo-1643000867361-cd545336249b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
  { slug: "lorawan-vs-cellular", date: "Feb 20, 2026", tag: "IoT", title: "Choosing between LoRaWAN and cellular for your next product", excerpt: "A decision matrix covering cost, coverage, compliance, and the operational reality of each.", image: "https://images.unsplash.com/photo-1775501273785-e13b3a48fffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--zn-primary)] pt-[72px]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="absolute left-1/2 top-10 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[var(--zn-accent)]/10 blur-3xl" />
      </div>
      {/* Mascot — right side, angled forward like excited to share stories */}
      <MascotCorner
        right="10px"
        bottom="-15px"
        angle={15}
        size={185}
        parallaxDistance={42}
        floatAmplitude={11}
        floatDuration={6}
        depth={22}
        flipX={true}
        maxTilt={13}
        glare={false}
        entryDelay={0.55}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/90" style={{ fontSize: "12px", letterSpacing: "0.08em" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--zn-accent)]" />
          JOURNAL
        </span>
        <h1 className="mt-5 text-white" style={{ fontSize: "clamp(44px, 6vw, 72px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
          Our <span className="text-[var(--zn-accent)]">Blog</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/70" style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Deep dives, case studies, and field notes from the engineers, designers, and PMs shipping connected products at Zinovaa.
        </p>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-10 pt-16">
      <article className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-[var(--zn-border)] bg-white transition hover:-translate-y-1 hover:shadow-[0_24px_64px_-24px_rgba(3,2,19,0.2)]">
        <div className={`relative w-full overflow-hidden bg-gradient-to-br ${featured.gradient}`} style={{ aspectRatio: "16/5" }}>
          <div aria-hidden className="absolute inset-0 opacity-40" style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, ${featured.accent}, transparent 50%), radial-gradient(circle at 80% 70%, var(--zn-accent), transparent 60%)`,
          }} />
          <div aria-hidden className="absolute inset-0 opacity-[0.08]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }} />
          <div className="absolute left-6 top-6 flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-[var(--zn-accent)] px-3 py-1 text-[var(--zn-primary)]" style={{ fontSize: "11px", letterSpacing: "0.06em", fontWeight: 600 }}>
              FEATURED
            </span>
            <span className="inline-flex items-center rounded-full border border-white/25 bg-black/40 px-3 py-1 text-white backdrop-blur" style={{ fontSize: "11px", letterSpacing: "0.06em" }}>
              {featured.tag.toUpperCase()}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-5 p-8 lg:p-12">
          <div className="flex items-center gap-2 text-[var(--zn-muted)]" style={{ fontSize: "13px" }}>
            <Calendar size={14} /> {featured.date}
          </div>
          <h2 className="text-[var(--zn-primary)]" style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 600, lineHeight: 1.2 }}>
            {featured.title}
          </h2>
          <p className="max-w-3xl text-[var(--zn-muted)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
            {featured.excerpt}
          </p>
          <div className="pt-2">
            <Button>Read More <ArrowRight size={16} /></Button>
          </div>
        </div>
      </article>
    </section>
  );
}

function BlogCard({ p }: { p: (typeof posts)[number] }) {
  return (
    <a href={`#/blog/${p.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--zn-border)] bg-white transition hover:-translate-y-1 hover:shadow-[0_16px_48px_-16px_rgba(3,2,19,0.15)]">
      <div className="relative aspect-[16/9] overflow-hidden bg-[var(--zn-primary)]">
        <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,2,19,0.3) 0%, transparent 60%)" }} />
        <div className="absolute left-4 top-4">
          <Chip tone="dark"><span className="text-white">{p.tag}</span></Chip>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="text-[var(--zn-muted)]" style={{ fontSize: "12px", letterSpacing: "0.08em" }}>{p.date.toUpperCase()}</span>
        <h3 className="text-[var(--zn-primary)]" style={{ fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}>{p.title}</h3>
        <p className="text-[var(--zn-muted)] flex-1" style={{ fontSize: "14px", lineHeight: 1.6 }}>{p.excerpt}</p>
        <span className="inline-flex items-center gap-1 text-[var(--zn-primary)]" style={{ fontSize: "14px", fontWeight: 500 }}>
          Read More <ArrowRight size={14} className="transition group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}

function Pagination({ page, setPage, total }: { page: number; setPage: (p: number) => void; total: number }) {
  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      <button
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--zn-border)] text-[var(--zn-primary)] transition hover:bg-[var(--zn-surface-alt)] disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        <ArrowLeft size={16} />
      </button>
      {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          onClick={() => setPage(n)}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
            n === page
              ? "bg-[var(--zn-primary)] text-white"
              : "border border-[var(--zn-border)] text-[var(--zn-primary)] hover:bg-[var(--zn-surface-alt)]"
          }`}
          style={{ fontSize: "14px", fontWeight: 500 }}
        >
          {n}
        </button>
      ))}
      <button
        onClick={() => setPage(Math.min(total, page + 1))}
        disabled={page === total}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--zn-border)] text-[var(--zn-primary)] transition hover:bg-[var(--zn-surface-alt)] disabled:opacity-40 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

export function BlogsPage() {
  const [page, setPage] = useState(1);
  const perPage = 6;
  const totalPages = Math.max(1, Math.ceil(posts.length / perPage));
  const paged = posts.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      <Hero />
      <Featured />
      <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paged.map((p) => <BlogCard key={p.title} p={p} />)}
        </div>
        <Pagination page={page} setPage={setPage} total={totalPages} />
      </section>
    </>
  );
}