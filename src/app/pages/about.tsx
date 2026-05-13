import {
  ArrowRight, Lightbulb, Ruler, TrendingUp, Users, Quote,
  HeartPulse, Factory, ShoppingBag, Car, Landmark, GraduationCap,
} from "lucide-react";
import { Button, SectionHeader, IconBadge } from "../components/ui-kit";
import { ContactBand } from "../components/sections";
import { MascotCorner } from "../components/mascot";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--zn-primary)] pt-[72px]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="absolute -left-20 top-10 h-[450px] w-[450px] rounded-full bg-[var(--zn-accent)]/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[350px] w-[350px] rounded-full bg-white/5 blur-3xl" />
      </div>
      {/* Mascot — right side, upright and proud */}
      <MascotCorner
        right="30px"
        bottom="0px"
        angle={5}
        size={210}
        parallaxDistance={50}
        floatAmplitude={13}
        floatDuration={5.5}
        depth={35}
        flipX={true}
        maxTilt={10}
        glare={false}
        entryDelay={0.5}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="flex flex-col items-start gap-6 max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/90" style={{ fontSize: "12px", letterSpacing: "0.08em" }}>
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--zn-accent)]" />
            ABOUT ZINOVAA
          </span>
          <h1 className="text-white" style={{ fontSize: "clamp(40px, 5.5vw, 60px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Learn About Our Commitment to <span className="text-[var(--zn-accent)]">Delivering Innovative Solutions</span>
          </h1>
          <p className="max-w-2xl text-white/70" style={{ fontSize: "18px", lineHeight: 1.6 }}>
            We're a team of engineers, designers, and strategists who build connected products end-to-end — from firmware to user interface — for ambitious teams around the world.
          </p>
          <div className="pt-2">
            <Button>Get In Touch <ArrowRight size={16} /></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--zn-primary)] to-[#2a2b55]">
        <div aria-hidden className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(circle at 30% 30%, var(--zn-accent), transparent 55%)",
        }} />
        <div aria-hidden className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }} />
        <img src="../src/assets/team.png" alt="The Zinovaa Team in our Cape Town office" className="h-full w-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="rounded-xl border border-white/10 bg-black/30 p-5 backdrop-blur">
            <span className="text-[var(--zn-accent)]" style={{ fontSize: "12px", letterSpacing: "0.1em" }}>EST. 2025</span>
            <p className="mt-2 text-white" style={{ fontSize: "20px", fontWeight: 600 }}>
              From three minds in a garage to a global studio.
            </p>
          </div>
        </div>
      </div>
      <div>
        <SectionHeader
          eyebrow="Our Story"
          title="Built for teams who ship real things."
          subtitle="Zinovaa was founded on a simple belief — that the best products come from teams who understand the whole stack, from the transistor to the touchpoint."
        />
        <p className="mt-5 text-[var(--zn-muted)]" style={{ fontSize: "15px", lineHeight: 1.7 }}>
          What started as a two-person embedded consultancy has grown into a multidisciplinary studio that partners with startups and enterprises to turn ideas into connected products. We've shipped 50+ products across 6 industries, with partners on three continents. We stay small on purpose — every project has a senior engineer on it.
        </p>
      </div>
    </section>
  );
}

function Values() {
  const values = [
    { icon: <Lightbulb size={22} />, title: "Innovation with Purpose", desc: "We chase novelty only when it serves the user. Every new technology we adopt must earn its place." },
    { icon: <Ruler size={22} />, title: "Engineering with Precision", desc: "Shortcuts compound. We measure twice and cut once, because the cost of rework is always borne by the user." },
    { icon: <TrendingUp size={22} />, title: "Growth with Integrity", desc: "We say no to work we can't do well. Our growth comes from repeat clients and referrals, not from scale." },
    { icon: <Users size={22} />, title: "Collaboration with Clients", desc: "You're not a customer — you're a co-author. Every product we ship has your fingerprints on it." },
  ];
  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
      <SectionHeader eyebrow="What We Believe In" title="Our Values" align="center" subtitle="The principles that guide how we hire, how we build, and how we show up for our partners." />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {values.map((v) => (
          <div key={v.title} className="flex gap-5 rounded-2xl border border-[var(--zn-border)] bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_48px_-16px_rgba(3,2,19,0.12)]">
            <IconBadge>{v.icon}</IconBadge>
            <div>
              <h3 className="text-[var(--zn-primary)]" style={{ fontSize: "18px", fontWeight: 600 }}>{v.title}</h3>
              <p className="mt-2 text-[var(--zn-muted)]" style={{ fontSize: "14px", lineHeight: 1.65 }}>{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MissionVision() {
  const cards = [
    { label: "Our Vision", body: "A world where every connected product — from medical devices to consumer electronics — is built with the same care, security, and craft as the hardware it runs on." },
    { label: "Our Mission", body: "To be the partner that ambitious teams trust with their most important products, by combining deep engineering, thoughtful design, and relentless focus on outcomes." },
  ];
  return (
    <section className="bg-[var(--zn-surface)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {cards.map((c) => (
          <div key={c.label} className="flex flex-col gap-4 rounded-2xl border border-[var(--zn-border)] bg-white p-10">
            <span className="inline-flex items-center gap-2 text-[var(--zn-accent-dark)]" style={{ fontSize: "12px", letterSpacing: "0.08em" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--zn-accent-dark)]" />
              {c.label.toUpperCase()}
            </span>
            <h3 className="text-[var(--zn-primary)]" style={{ fontSize: "28px", fontWeight: 600, lineHeight: 1.2 }}>
              {c.label}
            </h3>
            <p className="text-[var(--zn-muted)]" style={{ fontSize: "16px", lineHeight: 1.7 }}>
              {c.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Industries() {
  const inds = [
    { icon: <HeartPulse size={24} />, label: "Healthcare" },
    { icon: <Factory size={24} />, label: "Manufacturing" },
    { icon: <ShoppingBag size={24} />, label: "Retail" },
    { icon: <Car size={24} />, label: "Automotive" },
    { icon: <Landmark size={24} />, label: "Finance" },
    { icon: <GraduationCap size={24} />, label: "Education" },
  ];
  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-24">
      <SectionHeader eyebrow="Industries" title="Industries We Serve" align="center" subtitle="Domains where our engineering depth and design thinking have delivered measurable outcomes." />
      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
        {inds.map((i) => (
          <div key={i.label} className="flex flex-col items-center gap-3 rounded-2xl border border-[var(--zn-border)] bg-white p-6 transition hover:border-[var(--zn-primary)] hover:shadow-md">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--zn-surface-alt)] text-[var(--zn-primary)]">
              {i.icon}
            </div>
            <span className="text-[var(--zn-primary)]" style={{ fontSize: "14px", fontWeight: 500 }}>{i.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function CeoQuote() {
  return (
    <section className="bg-[var(--zn-primary)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 items-center">
        <div className="relative mx-auto lg:mx-0 w-[280px] sm:w-[320px]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[var(--zn-accent)]/40 to-[var(--zn-primary)]">
            <div aria-hidden className="absolute inset-0" style={{
              backgroundImage: "radial-gradient(circle at 40% 30%, rgba(212,255,63,0.3), transparent 60%)",
            }} />
            <div className="absolute inset-0 grid place-items-center">
              <img src="../src/assets/ceo-image.jpg" alt="Usama Rauf Khattak, CEO of Zinovaa" className="h-auto w-3/4 rounded-2xl border-4 border-white/20" />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-5 h-18 w-18 rounded-xl bg-[var(--zn-accent)]" />
        </div>
        <div className="flex flex-col gap-6">
          <Quote className="text-[var(--zn-accent)]" size={40} />
          <p className="text-white" style={{ fontSize: "clamp(22px, 2.5vw, 28px)", fontStyle: "italic", lineHeight: 1.4, fontWeight: 400 }}>
            "We don't chase trends. We chase problems worth solving, and we stay on them until the product works for the person holding it."
          </p>
          <div className="flex flex-col gap-1 pt-2 border-t border-white/10 pt-6">
            <h3 className="text-white" style={{ fontSize: "20px", fontWeight: 600 }}>Usama Rauf Khattak</h3>
            <span className="text-white/60" style={{ fontSize: "14px" }}>Founder & CEO, Zinovaa</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExclusivePartner() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-24">
      <SectionHeader eyebrow="Partner Spotlight" title="Our Exclusive Partner" align="center" />
      <div className="mt-12 rounded-3xl border border-[var(--zn-border)] bg-gradient-to-br from-white to-[var(--zn-surface)] p-8 lg:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 items-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-14 w-[160px] items-center justify-center rounded-lg border border-[var(--zn-border)] bg-white">
              <span className="text-[var(--zn-primary)]" style={{ fontWeight: 700, letterSpacing: "0.12em" }}>FYREBOX</span>
            </div>
            <span className="text-[var(--zn-muted)]" style={{ fontSize: "12px", letterSpacing: "0.08em" }}>Product Partner</span>
          </div>
          <div className="flex flex-col gap-4 border-l-0 lg:border-l lg:pl-10 border-[var(--zn-border)]">
            <Quote className="text-[var(--zn-accent-dark)]" size={28} />
            <p className="text-[var(--zn-primary)]" style={{ fontSize: "20px", fontStyle: "italic", lineHeight: 1.5 }}>
              "Zinovaa is our go-to engineering partner for any project that needs hardware-to-cloud integration. They speak both languages fluently."
            </p>
            <div>
              <div className="text-[var(--zn-primary)]" style={{ fontWeight: 600 }}>Lee Mulla</div>
              <div className="text-[var(--zn-muted)]" style={{ fontSize: "14px" }}>CEO, Fyrebox</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersStrip() {
  const partners = [
    { name: "FYREBOX", url: "https://fyrebox.africa" },
    { name: "FAVORIOT", url: "https://favoriot.com" },
    { name: "MICROTRONIX", url: "https://microtronix.co.za/" },
    { name: "PRODUCT HOUSE", url: "https://producthouse.us/" },
    { name: "AIM DIGITAL", url: "" },
    { name: "F.R.S", url: "https://frssa.co.za/" },
    { name: "I-MAP", url: "" },
  ];

  return (
    <section className="bg-[var(--zn-surface)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-24">
        <SectionHeader
          eyebrow="Partnerships"
          title="Our Partnerships"
          align="center"
          subtitle="The teams we stand alongside to build what's next."
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-16 items-center justify-center rounded-lg border border-[var(--zn-border)] bg-white opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 hover:border-[var(--zn-primary)]"
            >
              <span
                className="text-[var(--zn-muted)] transition group-hover:text-[var(--zn-primary)]"
                style={{ fontWeight: 700, letterSpacing: "0.12em", fontSize: "13px" }}
              >
                {p.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <>
      <Hero />
      <OurStory />
      <Values />
      <MissionVision />
      <Industries />
      <CeoQuote />
      <ExclusivePartner />
      <PartnersStrip />
      <ContactBand />
    </>
  );
}