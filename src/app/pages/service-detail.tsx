import {
  Wifi, Cpu, Globe, Smartphone, ArrowRight, ChevronRight,
  Radio, Cloud, RefreshCw, ShieldCheck, BarChart3, Zap,
  Lightbulb, PenTool, Code2, Rocket,
  Layers, Cpu as Chip, Battery, Signal,
  Search, Smartphone as Phone2, Bell, Lock,
  LayoutDashboard, Gauge, Accessibility, Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";
import { Button, SectionHeader, IconBadge, CheckItem } from "../components/ui-kit";
import { WorkProcess } from "../components/sections";
import { MascotCorner } from "../components/mascot";

type ServiceContent = {
  slug: string;
  breadcrumb: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  overviewTitle: string;
  overviewBody: string;
  features: string[];
  capabilities: { icon: ReactNode; title: string; desc: string }[];
  ctaTitle: string;
  ctaSubtext: string;
};

export const serviceContent: Record<string, ServiceContent> = {
  "internet-of-things": {
    slug: "internet-of-things",
    breadcrumb: "IoT",
    icon: <Wifi size={22} />,
    title: "Internet of Things (IoT)",
    subtitle: "Connected devices, edge gateways, and cloud platforms — architected to scale from ten devices to ten million.",
    overviewTitle: "Connect the physical world to the cloud.",
    overviewBody: "We help product teams ship end-to-end IoT solutions — from sensor firmware and radio protocols to fleet dashboards and anomaly detection. Our architectures are designed for reliability in the field and simplicity for your operations team.",
    features: [
      "Hardware-to-cloud architecture design",
      "Certified LoRaWAN, BLE, Wi-Fi, and cellular stacks",
      "Device provisioning, OTA, and fleet management",
    ],
    capabilities: [
      { icon: <Radio size={20} />, title: "Sensor Integration", desc: "Bridge any transducer to any network." },
      { icon: <Cloud size={20} />, title: "Cloud Communication", desc: "AWS IoT, Azure IoT, or custom MQTT." },
      { icon: <RefreshCw size={20} />, title: "OTA Updates", desc: "Safe, staged firmware rollouts." },
      { icon: <ShieldCheck size={20} />, title: "Secure Architecture", desc: "Mutual TLS, signed firmware, key rotation." },
      { icon: <BarChart3 size={20} />, title: "Data Analytics", desc: "Real-time dashboards and alerting." },
      { icon: <Zap size={20} />, title: "Edge Computing", desc: "Inference at the device, not the cloud." },
    ],
    ctaTitle: "Ready to connect your devices?",
    ctaSubtext: "Let's scope your IoT platform together — from proof of concept to production rollout.",
  },
  "embedded-systems": {
    slug: "embedded-systems",
    breadcrumb: "Embedded Systems",
    icon: <Cpu size={22} />,
    title: "Embedded System Development",
    subtitle: "Firmware, real-time systems, and hardware co-design for products that run for years in the field.",
    overviewTitle: "Silicon-level craftsmanship.",
    overviewBody: "From bare-metal drivers to real-time operating systems, we build firmware that is power-efficient, secure, and maintainable. Our engineers partner directly with your hardware team to co-design the product before PCB tape-out.",
    features: [
      "Bare-metal and RTOS firmware (FreeRTOS, Zephyr)",
      "Low-power design and battery optimization",
      "PCB co-design and bring-up",
    ],
    capabilities: [
      { icon: <Chip size={20} />, title: "MCU Firmware", desc: "ARM Cortex-M, RISC-V, ESP32, STM32." },
      { icon: <Battery size={20} />, title: "Power Optimization", desc: "10-year battery life, realistic." },
      { icon: <Layers size={20} />, title: "Driver Development", desc: "Sensors, displays, radios, and more." },
      { icon: <ShieldCheck size={20} />, title: "Secure Boot", desc: "Signed images, anti-rollback, HSM support." },
      { icon: <RefreshCw size={20} />, title: "OTA Pipelines", desc: "A/B partition updates with rollback." },
      { icon: <Signal size={20} />, title: "Wireless Stacks", desc: "BLE, LoRa, Zigbee, Thread, cellular." },
    ],
    ctaTitle: "Have a product that needs firmware?",
    ctaSubtext: "Bring us in early — the decisions made at firmware design time shape the next five years.",
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    breadcrumb: "Mobile App Development",
    icon: <Smartphone size={22} />,
    title: "Mobile App Development",
    subtitle: "Native and cross-platform apps that users trust with their attention and their data.",
    overviewTitle: "Apps that feel at home on every device.",
    overviewBody: "Whether you need a native iOS flagship, an Android-first release, or a cross-platform build in React Native, we design and ship mobile experiences that perform, scale, and respect your users. From first pixel to App Store submission, we handle the whole path.",
    features: [
      "Native iOS (Swift) and Android (Kotlin) expertise",
      "Cross-platform React Native for speed-to-market",
      "App Store and Play Store launch & review support",
    ],
    capabilities: [
      { icon: <Phone2 size={20} />, title: "Native iOS & Android", desc: "Swift, SwiftUI, Kotlin, Jetpack Compose." },
      { icon: <Code2 size={20} />, title: "React Native", desc: "One codebase, two stores, zero surprises." },
      { icon: <Bell size={20} />, title: "Push & Messaging", desc: "FCM, APNs, in-app messaging flows." },
      { icon: <Lock size={20} />, title: "Auth & Biometrics", desc: "OAuth, SSO, Face ID, Touch ID." },
      { icon: <BarChart3 size={20} />, title: "Analytics & A/B", desc: "Measure what matters from day one." },
      { icon: <Search size={20} />, title: "App Store Optimization", desc: "Keywords, screenshots, review strategy." },
    ],
    ctaTitle: "Shipping a mobile app soon?",
    ctaSubtext: "Let's talk about scope, timeline, and the real tradeoffs — before you start writing code.",
  },
  "web-development": {
    slug: "web-development",
    breadcrumb: "Web Development",
    icon: <Globe size={22} />,
    title: "Web Development",
    subtitle: "Modern web applications — performant, accessible, and architected to last.",
    overviewTitle: "Fast by default. Accessible on purpose.",
    overviewBody: "We build marketing sites, dashboards, and customer-facing platforms on the React, Next.js, and Node ecosystem. Every engagement includes performance budgets, accessibility audits, and analytics instrumentation — so you know the product is working from day one.",
    features: [
      "React, Next.js, and TypeScript end-to-end",
      "WCAG 2.2 AA accessibility standards",
      "Performance budgets & Core Web Vitals monitoring",
    ],
    capabilities: [
      { icon: <LayoutDashboard size={20} />, title: "Design Systems", desc: "Token-driven UI kits that scale." },
      { icon: <Gauge size={20} />, title: "Performance", desc: "Sub-2.5s LCP on mid-tier mobile." },
      { icon: <Accessibility size={20} />, title: "Accessibility", desc: "WCAG audits built into QA." },
      { icon: <Code2 size={20} />, title: "Type-Safe APIs", desc: "tRPC, GraphQL, or REST with OpenAPI." },
      { icon: <Sparkles size={20} />, title: "Motion & Polish", desc: "Micro-interactions that feel alive." },
      { icon: <BarChart3 size={20} />, title: "Analytics & A/B", desc: "Product analytics from the first deploy." },
    ],
    ctaTitle: "Rebuilding or launching a web app?",
    ctaSubtext: "We'll help you scope, architect, and ship — without the agency overhead.",
  },
};

function Hero({ c }: { c: ServiceContent }) {
  return (
    <section className="relative overflow-hidden bg-[var(--zn-primary)] pt-[72px]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="absolute -right-32 top-10 h-[400px] w-[400px] rounded-full bg-[var(--zn-accent)]/10 blur-3xl" />
      </div>
      {/* Mascot — top-right, rotated like it's diving into the page */}
      <MascotCorner
        right="20px"
        top="60px"
        angle={-18}
        size={180}
        parallaxDistance={55}
        floatAmplitude={10}
        floatDuration={7}
        depth={30}
        flipX={true}
        maxTilt={16}
        glare={false}
        entryDelay={0.6}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 py-16 lg:py-24">
        <nav className="flex items-center gap-2 text-white/60" style={{ fontSize: "13px" }}>
          <a href="#/" className="hover:text-white">Home</a>
          <ChevronRight size={14} />
          <a href="#/our-services" className="hover:text-white">What We Do</a>
          <ChevronRight size={14} />
          <span className="text-[var(--zn-accent)]">{c.breadcrumb}</span>
        </nav>
        <div className="mt-8 flex flex-col gap-5 max-w-3xl">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[var(--zn-accent)]">
            {c.icon}
          </div>
          <h1 className="text-white" style={{ fontSize: "clamp(40px, 5.5vw, 60px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {c.title}
          </h1>
          <p className="text-white/70" style={{ fontSize: "18px", lineHeight: 1.6 }}>
            {c.subtitle}
          </p>
          <div className="pt-2">
            <Button>Start a Project <ArrowRight size={16} /></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Overview({ c }: { c: ServiceContent }) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 600, lineHeight: 1.15 }} className="text-[var(--zn-primary)]">
          {c.overviewTitle}
        </h2>
        <p className="mt-5 text-[var(--zn-muted)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
          {c.overviewBody}
        </p>
        <ul className="mt-8 flex flex-col gap-4">
          {c.features.map((f) => <CheckItem key={f}>{f}</CheckItem>)}
        </ul>
      </div>
      <div className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--zn-primary)] to-[#2a2b55]">
        <div aria-hidden className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 70% 30%, var(--zn-accent), transparent 50%)",
        }} />
        <div aria-hidden className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }} />
        <div className="absolute inset-0 grid place-items-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-[var(--zn-accent)] backdrop-blur">
            <div className="scale-[2.2]">{c.icon}</div>
          </div>
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--zn-accent)] animate-pulse" />
            <span className="text-white/80" style={{ fontSize: "12px" }}>System operational</span>
          </div>
          <span className="text-white/50" style={{ fontSize: "12px", letterSpacing: "0.08em" }}>LIVE</span>
        </div>
      </div>
    </section>
  );
}

function Capabilities({ c }: { c: ServiceContent }) {
  return (
    <section className="bg-[var(--zn-surface)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
        <SectionHeader eyebrow="Capabilities" title="What We Deliver" align="center" subtitle="Six capabilities that come standard with every engagement." />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.capabilities.map((cap) => (
            <div key={cap.title} className="flex flex-col gap-4 rounded-2xl border border-[var(--zn-border)] bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_48px_-16px_rgba(3,2,19,0.12)]">
              <IconBadge>{cap.icon}</IconBadge>
              <h3 className="text-[var(--zn-primary)]" style={{ fontSize: "18px", fontWeight: 600 }}>{cap.title}</h3>
              <p className="text-[var(--zn-muted)]" style={{ fontSize: "14px", lineHeight: 1.6 }}>{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand({ c }: { c: ServiceContent }) {
  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-[var(--zn-primary)] p-10 lg:p-16 text-center">
        <div aria-hidden className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[var(--zn-accent)]/20 blur-3xl" />
        <div aria-hidden className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="relative flex flex-col items-center gap-5">
          <h2 className="text-white max-w-2xl" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, lineHeight: 1.2 }}>
            {c.ctaTitle}
          </h2>
          <p className="max-w-xl text-white/70" style={{ fontSize: "16px", lineHeight: 1.6 }}>
            {c.ctaSubtext}
          </p>
          <div className="pt-2">
            <Button>Talk to Us <ArrowRight size={16} /></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceDetailPage({ slug }: { slug: string }) {
  const c = serviceContent[slug] ?? serviceContent["internet-of-things"];
  return (
    <>
      <Hero c={c} />
      <Overview c={c} />
      <Capabilities c={c} />
      <WorkProcess />
      <CtaBand c={c} />
    </>
  );
}