import {
  Cpu, Wifi, Globe, Smartphone, Palette, Megaphone,
  HeartPulse, GraduationCap, ShoppingBag, Rocket, Home, Landmark,
  Sparkles, Target, Infinity as InfinityIcon, Users, Trophy, LifeBuoy,
  Star, ArrowRight, ArrowLeft, Quote, Instagram, Mail, Phone, MapPin,
  Lightbulb, PenTool, Code2, Send,
} from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { Button, Chip, SectionHeader, ServiceCard, Stat, CheckItem, IconBadge } from "./ui-kit";
import { Reveal, Stagger, WordReveal, CountUp, Parallax, Tilt3D, FloatLayer } from "./motion";
import { MascotFloat } from "./mascot";
import leePfp from "../../assets/lee.png";
import viktorpfp from "../../assets/viktor.png";
import mirandaPfp from "../../assets/miranda.png";
import hammadPfp from "../../assets/hammad.png";
/* HERO */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--zn-primary)] pt-[72px]">
      <div aria-hidden className="pointer-events-none absolute inset-0 zn-hero-hue">
        <Parallax distance={140} className="absolute -left-40 top-20">
          <FloatLayer amplitude={18} duration={7}>
            <div className="h-[500px] w-[500px] rounded-full bg-[var(--zn-accent)]/10 blur-3xl" />
          </FloatLayer>
        </Parallax>
        <Parallax distance={-100} className="absolute -right-32 bottom-0">
          <FloatLayer amplitude={14} duration={9}>
            <div className="h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl" />
          </FloatLayer>
        </Parallax>
        <Parallax distance={60} className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }} />
        </Parallax>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 flex flex-col gap-6">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/90"
              style={{ fontSize: "12px", letterSpacing: "0.08em" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--zn-accent)]" />
              END-TO-END INNOVATION PARTNER
            </motion.span>
            <WordReveal
              className="text-white"
              style={{ fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em" }}
              text="Engineering tomorrow's products, today."
              highlight="today."
              delay={0.3}
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
              className="max-w-xl text-white/70"
              style={{ fontSize: "18px", lineHeight: 1.6 }}
            >
              From embedded silicon to pixel-perfect interfaces — we partner with founders and enterprises to design, build, and scale connected experiences.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.95 }}
              className="flex flex-wrap gap-3"
            >
              <a href="#/our-services" rel="noopener noreferrer">
              <Button>Explore More <ArrowRight size={16} /></Button>
              </a>
              <a href="#/our-products" rel="noopener noreferrer">
              <Button variant="outline">See Our Work</Button>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="lg:col-span-2 zn-float"
          >
            {/* Replace icon grid with the official Zinovaa mascot */}
            <MascotFloat
              angle={-6}
              size={420}
              parallaxDistance={50}
              floatAmplitude={16}
              floatDuration={5}
              depth={40}
              maxTilt={10}
              glare={true}
              entryDelay={0.35}
              className="flex items-center justify-center w-full"
            />
          </motion.div>
        </div>

        <Stagger className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-white/10 pt-10" step={0.1}>
          <div className="flex flex-col gap-1">
            <span className="text-white" style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, lineHeight: 1 }}>
              <CountUp value={50} suffix="+" />
            </span>
            <span className="text-white/60" style={{ fontSize: "12px", letterSpacing: "0.08em" }}>PROJECTS DELIVERED</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-white" style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, lineHeight: 1 }}>
              <CountUp value={6} />
            </span>
            <span className="text-white/60" style={{ fontSize: "12px", letterSpacing: "0.08em" }}>INDUSTRIES</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-white" style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, lineHeight: 1 }}>
              <CountUp value={4} />
            </span>
            <span className="text-white/60" style={{ fontSize: "12px", letterSpacing: "0.08em" }}>SERVICE PILLARS</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-white" style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, lineHeight: 1 }}>
              <CountUp value={3} />
            </span>
            <span className="text-white/60" style={{ fontSize: "12px", letterSpacing: "0.08em" }}>GLOBAL PARTNERS</span>
          </div>
        </Stagger>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-6">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(circle at 20% 30%, var(--zn-accent) 0, transparent 40%), radial-gradient(circle at 80% 70%, #7c82ff 0, transparent 40%)",
      }} />
      <div className="relative grid h-full grid-cols-3 grid-rows-3 gap-3">
        {[Wifi, Cpu, Globe, Smartphone, Sparkles, Target, Rocket, Code2, Palette].map((Icon, i) => (
          <div
            key={i}
            className={`flex items-center justify-center rounded-xl border border-white/10 ${
              i % 4 === 0 ? "bg-[var(--zn-accent)] text-[var(--zn-primary)]" : "bg-white/5 text-white/70"
            }`}
          >
            <Icon size={22} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[var(--zn-accent)]" />
          <span className="text-white/80" style={{ fontSize: "12px" }}>LIVE · 12 devices connected</span>
        </div>
        <span className="text-white/60" style={{ fontSize: "12px" }}>v2.4</span>
      </div>
    </div>
  );
}

/* CORE SERVICES */
const services = [
  { icon: <Wifi size={22} />, title: "IoT", description: "Sensor networks, edge gateways, and cloud integrations for connected products.", href: "#/internet-of-things" },
  { icon: <Cpu size={22} />, title: "Embedded Systems", description: "Low-level firmware, PCB design, and real-time OS expertise.", href: "#/embedded-systems" },
  { icon: <Globe size={22} />, title: "Web Development", description: "React, Next.js, and Node — fast, accessible, and scalable.", href: "#/web-development" },
  { icon: <Smartphone size={22} />, title: "Mobile App Development", description: "Native and cross-platform apps your users will love.", href: "#/mobile-app-development" },
  { icon: <Palette size={22} />, title: "Product Design & Development", description: "From concept sketches to production-ready industrial design.", href: "" },
  { icon: <Megaphone size={22} />, title: "Branding & Marketing", description: "Visual identity, websites, and growth campaigns that convert.", href: "" },
];

export function CoreServices() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
      <Reveal>
        <SectionHeader
          eyebrow="What We Do"
          title="Our Core Services"
          subtitle="Six integrated practices, one team — so your product ships faster with fewer handoffs."
        />
      </Reveal>
      <Stagger className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6" step={0.08}>
        {services.map((s) => <ServiceCard key={s.title} {...s} />)}
      </Stagger>
    </section>
  );
}

/* OUR STORY */
export function OurStory() {
  const milestones = [
    { icon: <Sparkles size={20} />, title: "Started Small", desc: "A handful of engineers with big ambitions." },
    { icon: <Rocket size={20} />, title: "Growing Forward", desc: "50+ products shipped across 6 industries." },
    { icon: <Target size={20} />, title: "Built with Purpose", desc: "Every project is measured by the outcome." },
  ];
  return (
    <section className="bg-[var(--zn-surface)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Parallax distance={60}>
          <Tilt3D className="relative aspect-[5/4] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--zn-primary)] to-[#1a1b3a]" max={6}>
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: "radial-gradient(circle at 30% 30%, var(--zn-accent), transparent 50%)",
            }} />
            <img src="../src/assets/homepage1.png" alt="Our Story" className="absolute inset-0 h-full w-full object-cover opacity-70" />
            <div className="absolute inset-6 rounded-2xl border border-white/10 p-6 flex flex-col justify-end">
              <span className="text-[var(--zn-accent)]" style={{ fontSize: "12px", letterSpacing: "0.1em" }}>EST. 2025</span>
              <p className="text-white mt-2" style={{ fontSize: "24px", fontWeight: 600 }}>A studio built around outcomes, not hours.</p>
            </div>
          </Tilt3D>
        </Parallax>
        <div>
          <SectionHeader
            eyebrow="Our Story"
            title="Craftsmanship, from silicon to screen."
            subtitle="We exist to help ambitious teams turn bold ideas into products people actually use."
          />
          <ul className="mt-8 flex flex-col gap-5">
            {milestones.map((m) => (
              <li key={m.title} className="flex gap-4">
                <IconBadge>{m.icon}</IconBadge>
                <div>
                  <h3 style={{ fontSize: "18px", fontWeight: 600 }} className="text-[var(--zn-primary)]">{m.title}</h3>
                  <p className="text-[var(--zn-muted)]" style={{ fontSize: "15px" }}>{m.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a href="#/about" rel="noopener noreferrer">
            <Button variant="ghost">Learn More <ArrowRight size={16} /></Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* INDUSTRIES */
export function Industries() {
  const inds = [
    { icon: <HeartPulse size={24} />, label: "Healthcare" },
    { icon: <GraduationCap size={24} />, label: "Education" },
    { icon: <ShoppingBag size={24} />, label: "E-commerce" },
    { icon: <Rocket size={24} />, label: "Startups" },
    { icon: <Home size={24} />, label: "Home & IoT" },
    { icon: <Landmark size={24} />, label: "Finance" },
  ];
  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-24">
      <Reveal>
        <SectionHeader eyebrow="Industries" title="Industries We Serve" align="center" subtitle="Trusted by teams across sectors where reliability and speed matter most." />
      </Reveal>
      <Stagger className="mt-12 flex gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-6 lg:gap-6 lg:overflow-visible" step={0.07}>
        {inds.map((i) => (
          <div key={i.label} className="zn-card-3d group flex min-w-[140px] flex-col items-center gap-3 rounded-2xl border border-[var(--zn-border)] bg-white p-6 hover:border-[var(--zn-primary)]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--zn-surface-alt)] text-[var(--zn-primary)] transition-transform duration-300 group-hover:scale-110">
              {i.icon}
            </div>
            <span className="text-[var(--zn-primary)]" style={{ fontSize: "14px", fontWeight: 500 }}>{i.label}</span>
          </div>
        ))}
      </Stagger>
    </section>
  );
}

/* TESTIMONIALS */
const testimonials = [
  { quote: "Zinovaa embedded themselves into our team and shipped a production-grade IoT platform in under four months.", name: "Lee Mulla", role: "Founder, Fyrebox (pty) Ltd", initial: "LM", pfp: <img src={leePfp} alt="Lee Mulla" className="w-[70%] rounded-3xl object-cover" /> },
  { quote: "Their design thinking is matched only by their engineering depth. Rare combination.", name: "Viktor Johann Schippani", role: "Founder, I-Map (pty) Ltd", initial: "VJ", pfp: <img src={viktorpfp} alt="Viktor Johann Schippani" className="w-[70%] rounded-3xl object-cover" /> },
  { quote: "A genuine partner. They pushed back when we were wrong, and delivered when it counted.", name: "Miranda Govender", role: "R&D Manager, Microtronix (pty) Ltd", initial: "MG", pfp: <img src={mirandaPfp} alt="Miranda Govender" className="w-[70%] rounded-3xl object-cover" /> },
  { quote: "Exceptional attention to detail. They understood our vision perfectly and executed it flawlessly.", name: "Hammad Tariq", role: "CEO, AIM DIGITAL TECHNOLOGIES", initial: "HT", pfp: <img src={hammadPfp} alt="Hammad Tariq" className="w-[70%] rounded-3xl object-cover" /> },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const t = testimonials[idx];
  return (
    <section className="bg-[var(--zn-surface)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <Parallax distance={70}>
            <Tilt3D className="relative aspect-[6/5] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--zn-accent)]/90 to-[var(--zn-primary)]/10" max={7}>
              <div className="absolute inset-0 flex items-center justify-center">
                
                  {t.pfp}
              
              </div>
              <div className="absolute -bottom-4 -right-4 h-40 w-40  rounded-3xl bg-[var(--zn-accent)]" style={{ transform: "translateZ(20px)" }} ></div>
            </Tilt3D>
          </Parallax>
        </div>
        <div>
          <SectionHeader eyebrow="Testimonials" title="What our clients are saying" subtitle="Real feedback from the founders and teams we've shipped alongside." />
          <div className="mt-8 rounded-2xl border border-[var(--zn-border)] bg-white p-8">
            <Quote className="text-[var(--zn-accent)]" size={32} />
            <p className="mt-4 text-[var(--zn-primary)]" style={{ fontSize: "18px", lineHeight: 1.6 }}>{t.quote}</p>
            <div className="mt-6 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" className="text-[var(--zn-accent-dark)]" />
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-[var(--zn-border)] pt-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--zn-primary)] text-white" style={{ fontSize: "14px", fontWeight: 600 }}>{t.initial}</div>
                <div>
                  <div className="text-[var(--zn-primary)]" style={{ fontWeight: 600 }}>{t.name}</div>
                  <div className="text-[var(--zn-muted)]" style={{ fontSize: "13px" }}>{t.role}</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)} className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--zn-border)] hover:bg-[var(--zn-surface-alt)]">
                  <ArrowLeft size={16} />
                </button>
                <button onClick={() => setIdx((idx + 1) % testimonials.length)} className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--zn-primary)] text-white hover:bg-black">
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-[var(--zn-primary)]" : "w-1.5 bg-[var(--zn-border)]"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* DESIGN PROCESS */
export function DesignProcess() {
  const steps = [
    { n: "01", title: "Product Discovery", desc: "Workshops, user research, and business alignment." },
    { n: "02", title: "Design & Testing", desc: "High-fidelity prototypes validated with real users." },
    { n: "03", title: "Continuous Discovery", desc: "Post-launch iteration rooted in data and feedback." },
  ];
  return (
    <section className="bg-[var(--zn-primary)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
          <SectionHeader
            eyebrow="Methodology"
            title="Our Design Process: Built for Results"
            subtitle="We don't ship features — we ship outcomes. Each phase is instrumented, measurable, and accountable to your business goals."
            onDark
          />
          <p className="text-white/60" style={{ fontSize: "15px", lineHeight: 1.6 }}>
            Every engagement begins with a shared definition of success. We translate strategy into a roadmap, the roadmap into a prototype, and the prototype into production-ready software.
          </p>
          <div className="mt-2">
            <a href="#contact">
            <Button>Let's Shape Your Idea <ArrowRight size={16} /></Button>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-6 top-6 bottom-6 w-px border-l border-dashed border-white/20" />
          <ul className="flex flex-col gap-6">
            {steps.map((s) => (
              <li key={s.n} className="relative flex gap-6">
                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[var(--zn-accent)] bg-[var(--zn-primary)] text-[var(--zn-accent)]" style={{ fontWeight: 700 }}>
                  {s.n}
                </div>
                <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-white" style={{ fontSize: "20px", fontWeight: 600 }}>{s.title}</h3>
                  <p className="mt-2 text-white/60" style={{ fontSize: "15px" }}>{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* WHY CHOOSE US */
export function WhyChooseUs() {
  const reasons = [
    { icon: <InfinityIcon size={20} />, title: "End-to-End Expertise", desc: "Strategy, design, engineering — under one roof." },
    { icon: <Sparkles size={20} />, title: "Custom Solutions", desc: "No templates. Every product tailored to your users." },
    { icon: <Rocket size={20} />, title: "Future-Ready Technology", desc: "Architected for scale from day one." },
    { icon: <Users size={20} />, title: "Client Approach", desc: "You're embedded in the team, not on the outside." },
    { icon: <Trophy size={20} />, title: "Proven Track Record", desc: "50+ products, 6 industries, 3 global partners." },
    { icon: <LifeBuoy size={20} />, title: "Ongoing Support", desc: "Launch isn't the finish line. We stay on-call." },
  ];
  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
      <Reveal>
        <SectionHeader eyebrow="Why Zinovaa" title="Six reasons teams keep coming back" align="center" />
      </Reveal>
      <Stagger className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" step={0.08}>
        {reasons.map((r) => (
          <div key={r.title} className="zn-card-3d group flex flex-col gap-4 rounded-2xl border border-[var(--zn-border)] bg-white p-6 hover:border-[var(--zn-accent)]/50">
            <div className="transition-transform duration-300 group-hover:rotate-[8deg]">
              <IconBadge>{r.icon}</IconBadge>
            </div>
            <h3 className="text-[var(--zn-primary)]" style={{ fontSize: "18px", fontWeight: 600 }}>{r.title}</h3>
            <p className="text-[var(--zn-muted)]" style={{ fontSize: "14px", lineHeight: 1.6 }}>{r.desc}</p>
          </div>
        ))}
      </Stagger>
    </section>
  );
}

/* WORK PROCESS */
export function WorkProcess() {
  const steps = [
    { icon: <Lightbulb size={22} />, n: "01", title: "Ideation & Planning", desc: "Align on problem, users, and metrics." },
    { icon: <PenTool size={22} />, n: "02", title: "Design & Prototype", desc: "Test interactions before writing code." },
    { icon: <Code2 size={22} />, n: "03", title: "Development", desc: "Ship in sprints with continuous delivery." },
    { icon: <Rocket size={22} />, n: "04", title: "Launch & Support", desc: "Go live, measure, iterate, repeat." },
  ];
  return (
    <section className="bg-[var(--zn-surface)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
        <Reveal>
          <SectionHeader eyebrow="How We Work" title="From kickoff to launch in four phases" align="center" />
        </Reveal>
        <Stagger className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative" step={0.15}>
          {steps.map((s, i) => (
            <div key={s.n} className="zn-card-3d relative flex flex-col gap-4 rounded-2xl border border-[var(--zn-border)] bg-white p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--zn-primary)] text-[var(--zn-accent)]">
                  {s.icon}
                </div>
                <span className="text-[var(--zn-border)]" style={{ fontSize: "32px", fontWeight: 700 }}>{s.n}</span>
              </div>
              <h3 className="text-[var(--zn-primary)]" style={{ fontSize: "18px", fontWeight: 600 }}>{s.title}</h3>
              <p className="text-[var(--zn-muted)]" style={{ fontSize: "14px" }}>{s.desc}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute top-1/2 -right-5 -translate-y-1/2 text-[var(--zn-border)]" size={20} />
              )}
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* CONTACT BAND */
export function ContactBand() {
  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-[var(--zn-primary)] p-8 lg:p-14">
        <Parallax distance={100} className="absolute -right-20 -top-20" zIndex={0}>
          <FloatLayer amplitude={16} duration={8}>
            <div aria-hidden className="h-80 w-80 rounded-full bg-[var(--zn-accent)]/20 blur-3xl" />
          </FloatLayer>
        </Parallax>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeader eyebrow="Get In Touch" title="Let's build something great together." subtitle="Tell us about your project. We'll respond within one business day." onDark />
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Name" placeholder="Jane Cooper" />
            <Field label="Email" type="email" placeholder="jane@company.com" />
            <Field label="Contact Number" placeholder="+1 (555) 000-0000" />
            <Field label="Subject" placeholder="New IoT platform" />
            <div className="sm:col-span-2">
              <Field label="Message" as="textarea" placeholder="Tell us a bit about the problem you're solving..." />
            </div>
            <div className="sm:col-span-2">
              <Button className="w-full sm:w-auto">Send Message <Send size={16} /></Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, as = "input", ...props
}: { label: string; as?: "input" | "textarea" } & React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const cls = "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-[var(--zn-accent)] focus:bg-white/10";
  return (
    <label className="flex flex-col gap-2">
      <span className="text-white/70" style={{ fontSize: "13px" }}>{label}</span>
      {as === "textarea"
        ? <textarea rows={4} className={cls} {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} />
        : <input className={cls} {...(props as React.InputHTMLAttributes<HTMLInputElement>)} />}
    </label>
  );
}

/* BLOG */
const allBlogPosts = [
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

export function BlogPosts() {
  const posts = [...allBlogPosts].sort(() => Math.random() - 0.5).slice(0, 3);
  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
      <Reveal className="flex items-end justify-between flex-wrap gap-6">
        <SectionHeader eyebrow="Journal" title="From the Zinovaa blog" subtitle="Deep dives, case studies, and occasional hot takes." />
        <a href="#/blogs"><Button variant="ghost">View All Posts <ArrowRight size={16} /></Button></a>
      </Reveal>
      <Stagger className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6" step={0.1}>
        {posts.map((p) => (
          <a key={p.slug} href={`#/blog/${p.slug}`} className="zn-card-3d group flex flex-col overflow-hidden rounded-2xl border border-[var(--zn-border)] bg-white">
            <div className="relative aspect-[16/9] overflow-hidden bg-[var(--zn-primary)]">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,2,19,0.3) 0%, transparent 60%)" }} />
              <div className="absolute left-4 top-4">
                <Chip tone="dark" active={false}><span className="text-white">{p.tag}</span></Chip>
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
        ))}
      </Stagger>
    </section>
  );
}

/* FOOTER */
export function Footer() {
  return (
    <footer className="bg-[var(--zn-primary)] pt-16">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-10 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img src="../src/assets/zinovaa-white-01.png" alt="Zinovaa Logo" className="h-12" />
          </div>
          <p className="text-white/60 max-w-md" style={{ fontSize: "14px" }}>
            Your end-to-end innovation partner. Strategy, design, and engineering — in one team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          <div>
            <p className="text-white/60" style={{ fontSize: "14px", lineHeight: 1.7 }}>
              We partner with startups and enterprises to design, build, and scale products that move the needle.
            </p>
            <a href="#" className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10">
              <Instagram size={18} />
            </a>
          </div>
          <div>
            <h4 className="text-white mb-5" style={{ fontSize: "14px", letterSpacing: "0.08em" }}>CONTACT INFO</h4>
            <ul className="flex flex-col gap-3 text-white/70" style={{ fontSize: "14px" }}>
              <li className="flex items-center gap-3"><Phone size={16} /> +1 (555) 012-3456</li>
              <li className="flex items-center gap-3"><Mail size={16} /> hello@zinovaa.com</li>
              <li className="flex items-center gap-3"><MapPin size={16} /> 2400 Market St, San Francisco</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-5" style={{ fontSize: "14px", letterSpacing: "0.08em" }}>QUICK LINKS</h4>
            <ul className="flex flex-col gap-3 text-white/70" style={{ fontSize: "14px" }}>
              {["What We Do", "Our Products", "Information", "About"].map((l) => (
                <li key={l}><a href="#" className="hover:text-[var(--zn-accent)]">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-5" style={{ fontSize: "14px", letterSpacing: "0.08em" }}>JOIN OUR NEWSLETTER</h4>
            <p className="text-white/60 mb-4" style={{ fontSize: "13px" }}>Monthly notes on design, IoT, and building things.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input placeholder="you@email.com" className="flex-1 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder:text-white/40 outline-none focus:border-[var(--zn-accent)]" style={{ fontSize: "14px" }} />
              <Button>Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50" style={{ fontSize: "13px" }}>© 2026 Zinovaa. All Rights Reserved.</p>
          <div className="flex gap-6 text-white/50" style={{ fontSize: "13px" }}>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { CheckItem };