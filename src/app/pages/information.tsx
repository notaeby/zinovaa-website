import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeader } from "../components/ui-kit";
import { ContactBand } from "../components/sections";
import { MascotCorner } from "../components/mascot";

const faqs = [
  {
    q: "What industries do you typically work with?",
    a: "We partner with teams across healthcare, manufacturing, retail, automotive, finance, and education. Our sweet spot is connected-product work where hardware, firmware, and software all need to ship as one.",
  },
  {
    q: "What technologies make up your stack?",
    a: "On the firmware side: C, C++, Rust, Zephyr, FreeRTOS. On the cloud: AWS IoT Core, Azure IoT Hub, and custom MQTT brokers. On the web: React, Next.js, TypeScript, tRPC, and Node. Mobile: Swift, Kotlin, and React Native. We pick the right tool for the job, not the other way around.",
  },
  {
    q: "How do engagements typically start?",
    a: "Most projects begin with a paid discovery sprint — usually two to four weeks — where we align on problem, users, and technical constraints. You walk away with a validated prototype, a scoped roadmap, and a fixed-fee proposal for phase two.",
  },
  {
    q: "Do you sign NDAs before the first call?",
    a: "Yes. We routinely sign mutual NDAs before any technical conversation, and we're comfortable working under stricter agreements (BAAs for healthcare work, ITAR for defense-adjacent projects). Just ask.",
  },
  {
    q: "What does your pricing look like?",
    a: "Discovery sprints are fixed-fee. Full engagements are typically time-and-materials with a not-to-exceed ceiling, though we'll quote fixed-price for well-scoped work. A typical multi-disciplinary project runs between $80k and $500k depending on scope.",
  },
  {
    q: "How do you handle IP and source code ownership?",
    a: "All IP we create for you belongs to you — we hand over source, schematics, and documentation on final invoice. We retain rights only to generic tooling and libraries we bring in from prior work.",
  },
  {
    q: "What's your approach to security and compliance?",
    a: "Security is not a feature — it's a default. We follow OWASP ASVS Level 2 for web/mobile work, and for medical devices we work within IEC 62304 and FDA pre-submission guidance. We've shipped HIPAA, SOC 2, and GDPR-compliant systems.",
  },
  {
    q: "Can you support the product after launch?",
    a: "Absolutely. We offer retainers for ongoing development, incident response, and quarterly roadmap planning. Roughly 70% of our clients stay with us past initial launch.",
  },
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
      {/* Mascot — top-left, slightly tilted as if reading FAQs */}
      <MascotCorner
        left="20px"
        top="50px"
        angle={-20}
        size={170}
        parallaxDistance={35}
        floatAmplitude={9}
        floatDuration={7}
        depth={15}
        flipX={false}
        maxTilt={18}
        glare={false}
        entryDelay={0.6}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/90" style={{ fontSize: "12px", letterSpacing: "0.08em" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--zn-accent)]" />
          KNOWLEDGE BASE
        </span>
        <h1 className="mt-5 text-white" style={{ fontSize: "clamp(44px, 6vw, 68px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
          Information
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/70" style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Answers to the questions we hear most often — from first-time founders to enterprise procurement teams.
        </p>
      </div>
    </section>
  );
}

function FaqItem({
  item, isOpen, onToggle,
}: { item: { q: string; a: string }; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`rounded-2xl border transition-all ${isOpen ? "border-[var(--zn-primary)] bg-white shadow-[0_16px_48px_-16px_rgba(3,2,19,0.12)]" : "border-[var(--zn-border)] bg-white hover:border-[var(--zn-primary)]/40"}`}>
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 p-6 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="text-[var(--zn-primary)]" style={{ fontSize: "18px", fontWeight: 600, lineHeight: 1.4 }}>
          {item.q}
        </h3>
        <div className={`mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all ${isOpen ? "bg-[var(--zn-accent)] text-[var(--zn-primary)]" : "bg-[var(--zn-surface-alt)] text-[var(--zn-primary)]"}`}>
          <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </div>
      </button>
      <div
        className="grid overflow-hidden transition-all duration-300"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <div className="px-6 pb-6 border-t border-[var(--zn-border)] pt-5">
            <p className="text-[var(--zn-muted)]" style={{ fontSize: "15px", lineHeight: 1.7 }}>
              {item.a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Faqs() {
  const [open, setOpen] = useState<Set<number>>(new Set([0, 1]));
  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    });
  };
  return (
    <section className="mx-auto max-w-[880px] px-6 lg:px-10 py-20 lg:py-28">
      <SectionHeader
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        subtitle="Can't find what you're looking for? Reach out through the contact form below and we'll get back within a business day."
        align="center"
      />
      <div className="mt-12 flex flex-col gap-4">
        {faqs.map((f, i) => (
          <FaqItem key={f.q} item={f} isOpen={open.has(i)} onToggle={() => toggle(i)} />
        ))}
      </div>
    </section>
  );
}

export function InformationPage() {
  return (
    <>
      <Hero />
      <Faqs />
      <ContactBand />
    </>
  );
}