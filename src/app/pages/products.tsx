import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  ArrowRight, ArrowLeft, Shield, Footprints, Flame, LayoutDashboard, Activity, Radio, X, Check,
} from "lucide-react";
import type { ReactNode } from "react";
import { MascotCorner } from "../components/mascot";

type Category = "IoT" | "Web Development" | "App Development";

type Slide = { icon: ReactNode; label: string; gradient: string; accent: string };

type Product = {
  name: string;
  category: Category;
  description: string;
  icon: ReactNode;
  ratio: "3/2" | "1/1" | "4/5";
  gradient: string;
  accent: string;
  longDescription: string;
  highlights: string[];
  meta: { label: string; value: string }[];
  slides: Slide[];
};

const mk = (icon: ReactNode, label: string, gradient: string, accent: string): Slide => ({ icon, label, gradient, accent });

const products: Product[] = [
  {
  name: "Alert Pulse",
  category: "IoT",
  description: "An IoT-enabled wearable safety band for construction, warehouses, and industrial facilities.",
  icon: (
    <img
      src="../src/assets/alertpulse1.png"  
      alt="Alert Pulse Emergency Node"
      className="object-contain absolute w-[92%] h-[92%] rounded-[15px]"
    />
  ),
  ratio: "4/5",
  gradient: "from-[#2a1e5f] to-[var(--zn-primary)]",
  accent: "#ff6b6b",
  longDescription:
    "A cellular-connected panic button deployed across 200+ rural clinics. One press notifies local responders, logs the incident, and maintains a two-way audio link — even when the local network is down.",
  highlights: [
    "Real-time emergency alerts and SOS communication",
    "Evacuation guidance, and security tracking",
    "Complete workplace safety management",
    "Dashboard monitoring & scanning",
    "Tracks health vitals",
  ],
  meta: [
    { label: "Deployed", value: "2+ sites" },
    { label: "Uptime", value: "99.97%" },
    { label: "Response Time", value: "< 4s" },
  ],
  slides: [
    mk(
      <img
        src="../src/assets/alertpulse2.png"
        alt="Field Unit"
        className="object-contain absolute"
      />,
      "Emergency Node",
      "from-[#2a1e5f] to-[var(--zn-primary)]",
      "#ff6b6b"
    ),
    mk(
      <img
        src="../src/assets/alertpulse3.png"
        alt="Mesh Network"
        className="object-contain absolute"
      />,
      "Wrist Band",
      "from-[#5f1e3a] to-[var(--zn-primary)]",
      "#ff9f43"
    ),
    mk(
      <img
        src="../src/assets/alertpulse4.png"
        alt="Control Console"
        className="object-contain absolute"
      />,
      "Control Console",
      "from-[#1e3a5f] to-[var(--zn-primary)]",
      "#4ecdc4"
    ),
  ],
},
  {
    name: "NighebaaN",
    category: "IoT",
    description: "A B2B IoT-based control platform used across industrial and high-risk operational environments.",
    icon: <img
      src="../src/assets/nighebaan1.png"   // ← replace with your image
      alt="Nighebaan Node"
      className="object-contain absolute w-[92%] h-[92%] rounded-[15px]"
    />,
    ratio: "4/5",
    gradient: "from-[#5f1e1e] to-[var(--zn-primary)]",
    accent: "#ff9f43",
    longDescription:
      "NigehbaaN introduces a hybrid industrial control system with three independent layers.",
    highlights: [
      "Local Control - Desktop Application for on-site operators",
      "Remote Control - Mobile App for centralized monitoring",
      "GSM Based Control - Backup communication channel for critical operations",
      
    ],
    meta: [
      { label: "Detection", value: "< 12 seconds" },
      { label: "Range", value: "250m mesh" },
      { label: "Nodes", value: "up to 512" },
    ],
    slides: [
      mk(<img
        src="../src/assets/nighebaan2.png"
        alt="Field Unit"
        className="object-contain absolute"
      />, "Detector Node", "from-[#5f1e1e] to-[var(--zn-primary)]", "#ff9f43"),
      mk(<img
        src="../src/assets/nighebaan3.png"
        alt="Field Unit"
        className="object-contain absolute"
      />, "Mesh Topology", "from-[#3a1e5f] to-[var(--zn-primary)]", "#a29bfe"),
      mk(<img
        src="../src/assets/nighebaan4.png"
        alt="Field Unit"
        className="object-contain absolute"
      />, "Facility Console", "from-[#1e5f4a] to-[var(--zn-primary)]", "#95e1d3"),
    ],
  },
  {
    name: "Step Up",
    category: "IoT",
    description: "A smart shoe sole system designed for corporate personnel and underground mining workers.",
    icon: <img
      src="../src/assets/alertpulse1.png"
      alt="Alert Pulse Emergency Node"
      className="object-contain absolute"
    />,
    ratio: "4/5",
    gradient: "from-[#1e3a5f] to-[var(--zn-primary)]",
    accent: "#4ecdc4",
    longDescription:
      "An ultra-thin pressure-sensing insole that captures gait asymmetry and pairs to a mobile app via BLE. Used by physical therapists to quantify recovery after lower-limb surgery.",
    highlights: [
      "Tracks indoor/outdoor positioning",
      "Centralized dashboards",
      "Precise activity tracking",
      "Automated safety alerts",
    ],
    meta: [
      { label: "Sensors", value: "16 per sole" },
      { label: "Battery", value: "7 days" },
      { label: "Resolution", value: "100 Hz" },
    ],
    slides: [
      mk(<Footprints size={72} />, "Hardware", "from-[#1e3a5f] to-[var(--zn-primary)]", "#4ecdc4"),
      mk(<Activity size={72} />, "Gait Analytics", "from-[#5f3a1e] to-[var(--zn-primary)]", "#f9ca24"),
      mk(<Shield size={72} />, "Clinician App", "from-[#1e5f4a] to-[var(--zn-primary)]", "#95e1d3"),
    ],
  },
  // {
  //   name: "Santa Walkie App",
  //   category: "App Development",
  //   description: "Push-to-talk mobile radio for distributed field teams.",
  //   icon: <Radio size={44} />,
  //   ratio: "4/5",
  //   gradient: "from-[#3a1e5f] to-[var(--zn-primary)]",
  //   accent: "#a29bfe",
  //   longDescription:
  //     "A cross-platform React Native app that turns any smartphone into a group walkie-talkie. Low-latency audio, channel management, and offline-first message queueing for spotty networks.",
  //   highlights: [
  //     "Sub-200ms end-to-end audio",
  //     "Channel roles and moderation",
  //     "Offline queue with replay",
  //     "Native CallKit/ConnectionService integration",
  //   ],
  //   meta: [
  //     { label: "Stack", value: "React Native" },
  //     { label: "Latency", value: "< 200ms" },
  //     { label: "DAUs", value: "45,000" },
  //   ],
  //   slides: [
  //     mk(<Radio size={72} />, "Push-to-Talk", "from-[#3a1e5f] to-[var(--zn-primary)]", "#a29bfe"),
  //     mk(<LayoutDashboard size={72} />, "Channels", "from-[#1e3a5f] to-[var(--zn-primary)]", "#4ecdc4"),
  //     mk(<Activity size={72} />, "Team Map", "from-[#1e5f4a] to-[var(--zn-primary)]", "#95e1d3"),
  //   ],
  // },
];

const filters: Array<"All" | Category> = ["All", "IoT", "Web Development", "App Development"];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--zn-primary)] pt-[72px]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="absolute left-1/4 top-10 h-[400px] w-[400px] rounded-full bg-[var(--zn-accent)]/10 blur-3xl" />
      </div>
      {/* Mascot — left side, leaning in with attitude */}
      <MascotCorner
        left="-30px"
        bottom="-10px"
        angle={-8}
        size={190}
        parallaxDistance={40}
        floatAmplitude={11}
        floatDuration={6.5}
        depth={20}
        flipX={false}
        maxTilt={12}
        glare={false}
        entryDelay={0.55}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 py-16 lg:py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/90" style={{ fontSize: "12px", letterSpacing: "0.08em" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--zn-accent)]" />
          OUR PRODUCTS
        </span>
        <h1 className="mt-5 text-white" style={{ fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
          The Products Behind <span className="text-[var(--zn-accent)]">Our Journey</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/70" style={{ fontSize: "18px", lineHeight: 1.6 }}>
          A cross-section of the connected devices, dashboards, and apps we've shipped with partners across six industries.
        </p>
      </div>
    </section>
  );
}

function ProductCard({ p, onOpen }: { p: Product; onOpen: () => void }) {
  const aspect = p.ratio === "1/1" ? "aspect-square" : p.ratio === "4/5" ? "aspect-[4/5]" : "aspect-[3/2]";
  return (
    <button
      onClick={onOpen}
      className="group flex w-full flex-col overflow-hidden rounded-2xl border border-[var(--zn-border)] bg-white text-left transition hover:-translate-y-1 hover:shadow-[0_16px_48px_-16px_rgba(3,2,19,0.18)]"
    >
      <div className={`relative ${aspect} w-full overflow-hidden bg-gradient-to-br ${p.gradient}`}>
        <div aria-hidden className="absolute inset-0 opacity-40" style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, ${p.accent}, transparent 55%)`,
        }} />
        <div aria-hidden className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
        <div className="absolute inset-0 grid place-items-center text-white/90 transition-transform duration-500 group-hover:scale-110">
          {p.icon}
        </div>
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-black/40 px-3 py-1 text-white backdrop-blur" style={{ fontSize: "11px", letterSpacing: "0.06em" }}>
            {p.category.toUpperCase()}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-6">
        <h3 className="text-[var(--zn-primary)]" style={{ fontSize: "20px", fontWeight: 600, lineHeight: 1.3 }}>
          {p.name}
        </h3>
        <p className="text-[var(--zn-muted)]" style={{ fontSize: "14px", lineHeight: 1.6 }}>
          {p.description}
        </p>
        <span className="mt-1 inline-flex items-center gap-1 text-[var(--zn-primary)]" style={{ fontSize: "14px", fontWeight: 500 }}>
          View Project <ArrowRight size={14} className="transition group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [slide, setSlide] = useState(0);
  const count = product.slides.length;

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setSlide((s) => (s + 1) % count);
      if (e.key === "ArrowLeft") setSlide((s) => (s - 1 + count) % count);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [count, onClose]);

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[var(--zn-primary)] backdrop-blur transition hover:bg-white"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] overflow-y-auto">
          {/* Carousel */}
          <div className="relative bg-[var(--zn-primary)]">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full w-full overflow-hidden">
              {product.slides.map((s, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 bg-gradient-to-br ${s.gradient} transition-opacity duration-500 ${i === slide ? "opacity-100" : "opacity-0"}`}
                >
                  <div aria-hidden className="absolute inset-0 opacity-40" style={{
                    backgroundImage: `radial-gradient(circle at 30% 40%, ${s.accent}, transparent 55%)`,
                  }} />
                  <div aria-hidden className="absolute inset-0 opacity-[0.08]" style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }} />
                  <div className="absolute inset-0 grid place-items-center text-white/90">
                    {s.icon}
                  </div>
                  <div className="absolute left-5 bottom-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: s.accent }} />
                    <span className="text-white" style={{ fontSize: "12px", letterSpacing: "0.06em" }}>
                      {s.label.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}

              <button
                onClick={() => setSlide((s) => (s - 1 + count) % count)}
                className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
                aria-label="Previous"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                onClick={() => setSlide((s) => (s + 1) % count)}
                className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
                aria-label="Next"
              >
                <ArrowRight size={18} />
              </button>

              <div className="absolute left-1/2 bottom-5 z-10 -translate-x-1/2 flex gap-2">
                {product.slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`h-1.5 rounded-full transition-all ${i === slide ? "w-8 bg-[var(--zn-accent)]" : "w-1.5 bg-white/40"}`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-5 p-8 lg:p-10">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-[var(--zn-surface-alt)] px-3 py-1 text-[var(--zn-primary)]" style={{ fontSize: "11px", letterSpacing: "0.06em" }}>
                {product.category.toUpperCase()}
              </span>
            </div>
            <h2 className="text-[var(--zn-primary)]" style={{ fontSize: "clamp(24px, 3vw, 30px)", fontWeight: 600, lineHeight: 1.2 }}>
              {product.name}
            </h2>
            <p className="text-[var(--zn-muted)]" style={{ fontSize: "15px", lineHeight: 1.65 }}>
              {product.longDescription}
            </p>

            <div className="grid grid-cols-3 gap-3 rounded-xl border border-[var(--zn-border)] bg-[var(--zn-surface)] p-4">
              {product.meta.map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <span className="text-[var(--zn-muted)]" style={{ fontSize: "11px", letterSpacing: "0.06em" }}>
                    {m.label.toUpperCase()}
                  </span>
                  <span className="text-[var(--zn-primary)]" style={{ fontSize: "15px", fontWeight: 600 }}>
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-[var(--zn-primary)] mb-3" style={{ fontSize: "14px", letterSpacing: "0.06em" }}>
                HIGHLIGHTS
              </h3>
              <ul className="flex flex-col gap-3">
                {product.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--zn-accent)] text-[var(--zn-primary)]">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="text-[var(--zn-primary)]" style={{ fontSize: "14px" }}>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-2">
              <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--zn-primary)] px-6 py-3 text-white transition hover:bg-black">
                Request Case Study <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export function ProductsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<Product | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-[1280px] px-6 lg:px-10 pt-12">
        <div className="flex flex-wrap gap-3">
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-5 py-2 transition-all ${
                  isActive
                    ? "bg-[var(--zn-accent)] text-[var(--zn-primary)]"
                    : "border border-[var(--zn-border)] text-[var(--zn-primary)] hover:border-[var(--zn-primary)]"
                }`}
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                {f}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-12 lg:py-16">
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 640: 2, 1024: 3 }}>
          <Masonry gutter="24px">
            {filtered.map((p) => (
              <ProductCard key={p.name} p={p} onOpen={() => setOpen(p)} />
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-[var(--zn-muted)]">
            No products in this category yet.
          </div>
        )}

        {/* <div className="mt-12 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-full border border-[var(--zn-primary)] px-6 py-3 text-[var(--zn-primary)] transition hover:bg-[var(--zn-primary)] hover:text-white" style={{ fontWeight: 500 }}>
            Load More <ArrowRight size={16} />
          </button>
        </div> */}
      </section>

      {open && <ProductModal product={open} onClose={() => setOpen(null)} />}
    </>
  );
}