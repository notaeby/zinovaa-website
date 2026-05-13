import { Cpu, Wifi, Globe, Smartphone, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button, SectionHeader, IconBadge } from "../components/ui-kit";
import { ContactBand } from "../components/sections";
import { MascotCorner } from "../components/mascot";
import embedded1 from "../../assets/embedded1.png";
import iot1 from "../../assets/iot1.png";
import mobile1 from "../../assets/mobile1.png";
import web1 from "../../assets/web1.png";

const services = [
  {
    photo: <img src={embedded1} alt="Embedded Systems Icon" className="rounded-lg"/>,
    icon: <Wifi size={22} />,
    title: "Embedded System Development",
    body: "We design firmware, drivers, and real-time systems that run reliably for years in the field — from low-power wearables to industrial controllers.",
    bullets: ["RTOS & bare-metal firmware", "PCB co-design with hardware teams", "OTA update pipelines"],
  },
  {
    photo: <img src={iot1} alt="Internet of Things Icon" className="rounded-lg"/>,
    icon:   <Cpu size={22} />,
    title: "Internet of Things (IoT)",
    body: "End-to-end connected product development: edge devices, gateways, cloud ingestion, dashboards, and fleet management — built to scale from 10 to 10 million devices.",
    bullets: ["LoRaWAN, BLE, Wi-Fi, cellular", "AWS IoT / Azure IoT architectures", "Device lifecycle management"],
  },
  {
    photo: <img src={mobile1} alt="Mobile App Development Icon" className="rounded-lg"/>,
    icon: <Smartphone size={22} />,
    title: "Mobile App Development",
    body: "Native iOS and Android, or cross-platform with React Native — we ship mobile experiences that feel at home on every device and scale with your user base.",
    bullets: ["iOS (Swift) & Android (Kotlin)", "React Native for cross-platform", "App Store & Play Store launch support"],
  },
  {
    photo: <img src={web1} alt="Web Development Icon" className="rounded-lg"/>,
    icon: <Globe size={22} />,
    title: "Web Development",
    body: "Modern web applications built on React, Next.js, and Node — performant, accessible, and architected for long-term maintainability.",
    bullets: ["Next.js & React single-page apps", "Type-safe APIs with Node & tRPC", "Analytics & A/B testing built-in"],
  },
];

function ServiceIllustration({ photo, variant }: { photo: ReactNode; variant: number }) {
  const gradients = [
    "from-[var(--zn-primary)] to-[#2a2b55]",
    "from-[#1e3a5f] to-[var(--zn-primary)]",
    "from-[var(--zn-primary)] to-[#3a1e5f]",
    "from-[#1e5f4a] to-[var(--zn-primary)]",
  ];
  return (
    <div className={`relative aspect-[3/2] w-full overflow-hidden rounded-lg bg-gradient-to-br ${gradients[variant % 4]}`}>
      <div aria-hidden className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 30% 30%, var(--zn-accent), transparent 50%)",
      }} />
      <div aria-hidden className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      <div className="absolute inset-0 grid place-items-center">
        <div className="flex h-[95%] w-[95%] items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-[var(--zn-accent)] backdrop-blur">
          {photo}
        </div>
      </div>
      <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--zn-accent)]" />
        <span className="text-white/80" style={{ fontSize: "11px", letterSpacing: "0.08em" }}>ZINOVAA</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--zn-primary)] pt-[72px]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }} />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--zn-accent)]/10 blur-3xl" />
      </div>
      {/* Mascot — bottom-right, tilted outward like it's peeking in */}
      <MascotCorner
        right="-40px"
        bottom="-20px"
        angle={12}
        size={200}
        parallaxDistance={45}
        floatAmplitude={12}
        floatDuration={6}
        depth={25}
        maxTilt={14}
        glare={false}
        entryDelay={0.5}
      />
      <div className="relative mx-auto flex min-h-[50vh] max-w-[1280px] flex-col items-center justify-center gap-6 px-6 py-20 text-center lg:px-10 lg:py-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/90" style={{ fontSize: "12px", letterSpacing: "0.08em" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--zn-accent)]" />
          WHAT WE DO
        </span>
        <h1 className="text-white" style={{ fontSize: "clamp(44px, 6.5vw, 72px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
          What We <span className="text-[var(--zn-accent)]">Offer</span>
        </h1>
        <p className="max-w-2xl text-white/70" style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Four deeply integrated practices covering hardware, firmware, backend, and interface — everything a connected product needs to reach market and grow.
        </p>
        <div className="pt-2">
          <Button>Get Services <ArrowRight size={16} /></Button>
        </div>
      </div>
    </section>
  );
}

function ServicesList() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
      <div className="flex flex-col gap-20">
        {services.map((s, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={s.title}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="flex flex-col gap-5">
                <IconBadge>{s.icon}</IconBadge>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 600, lineHeight: 1.15 }} className="text-[var(--zn-primary)]">
                  {s.title}
                </h2>
                <p className="text-[var(--zn-muted)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
                  {s.body}
                </p>
                <ul className="flex flex-col gap-2 pt-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[var(--zn-primary)]" style={{ fontSize: "15px" }}>
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--zn-accent-dark)]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="pt-3">
                  <Button variant="ghost">Learn More <ArrowRight size={16} /></Button>
                </div>
              </div>
              <ServiceIllustration photo={s.photo} variant={i} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function ServicesPage() {
  return (
    <>
      <Hero />
      <ServicesList />
      <ContactBand />
    </>
  );
}