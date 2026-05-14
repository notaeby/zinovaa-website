import { Phone, Mail, MapPin, Instagram, Linkedin, Twitter, Github, Send, MapPinned } from "lucide-react";
import { useState } from "react";
import { MascotCorner } from "../components/mascot";

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
      {/* Mascot — right side, warmly leaning toward the contact form */}
      <MascotCorner
        right="15px"
        top="50px"
        angle={8}
        size={195}
        parallaxDistance={48}
        floatAmplitude={12}
        floatDuration={6}
        depth={28}
        flipX={true}
        maxTilt={11}
        glare={false}
        entryDelay={0.5}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/90" style={{ fontSize: "12px", letterSpacing: "0.08em" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--zn-accent)]" />
          CONTACT
        </span>
        <h1 className="mt-5 text-white" style={{ fontSize: "clamp(44px, 6vw, 72px)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.02em" }}>
          Get In <span className="text-[var(--zn-accent)]">Touch</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/70" style={{ fontSize: "18px", lineHeight: 1.6 }}>
          Tell us about your project, your timeline, and what success looks like. We'll respond within one business day.
        </p>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <>
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[var(--zn-surface-alt)] text-[var(--zn-primary)] transition group-hover:bg-[var(--zn-accent)]">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[var(--zn-muted)]" style={{ fontSize: "12px", letterSpacing: "0.06em" }}>
          {label.toUpperCase()}
        </div>
        <div className="mt-1 text-[var(--zn-primary)]" style={{ fontSize: "15px", fontWeight: 500, lineHeight: 1.4 }}>
          {value}
        </div>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="group flex items-start gap-4 rounded-xl border border-[var(--zn-border)] bg-white p-4 transition hover:border-[var(--zn-primary)] hover:shadow-md">
      {content}
    </a>
  ) : (
    <div className="group flex items-start gap-4 rounded-xl border border-[var(--zn-border)] bg-white p-4">
      {content}
    </div>
  );
}

function MapPlaceholder() {
  return (
    <div className="relative aspect-[12/7] w-full overflow-hidden rounded-2xl border border-[var(--zn-border)] bg-[var(--zn-surface-alt)]">
      <div aria-hidden className="absolute inset-0 opacity-60" style={{
        backgroundImage: "linear-gradient(rgba(11,11,31,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(11,11,31,.08) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      <div aria-hidden className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle at 55% 45%, rgba(212,255,63,0.15), transparent 40%)",
      }} />

      {/* Google Maps Embed */}
      <iframe
        title="Zinovaa Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.434162594264!2d73.1090001!3d33.516095899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfedecc5816f7f%3A0x988e1277d41b989a!2sZinovaa!5e0!3m2!1sen!2s!4v1777370334491!5m2!1sen!2s"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Badge */}
      <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-[var(--zn-border)] bg-white px-3 py-1.5 shadow-sm z-10">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--zn-accent-dark)]" />
        <span className="text-[var(--zn-primary)]" style={{ fontSize: "11px", letterSpacing: "0.06em" }}>ZINOVAA — RAWALPINDI</span>
      </div>
    </div>
  );
}

function Field({
  label, as = "input", ...props
}: { label: string; as?: "input" | "textarea" } & React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const cls = "w-full rounded-xl border border-[var(--zn-border)] bg-white px-4 py-3 text-[var(--zn-primary)] placeholder:text-[var(--zn-muted)] outline-none transition focus:border-[var(--zn-primary)] focus:ring-2 focus:ring-[var(--zn-accent)]";
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[var(--zn-primary)]" style={{ fontSize: "13px", fontWeight: 500 }}>{label}</span>
      {as === "textarea"
        ? <textarea rows={5} className={cls} {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} />
        : <input className={cls} {...(props as React.InputHTMLAttributes<HTMLInputElement>)} />}
    </label>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="flex flex-col gap-5 rounded-3xl border border-[var(--zn-border)] bg-white p-6 lg:p-10"
    >
      <div>
        <h2 className="text-[var(--zn-primary)]" style={{ fontSize: "26px", fontWeight: 600, lineHeight: 1.2 }}>
          Send us a message
        </h2>
        <p className="mt-2 text-[var(--zn-muted)]" style={{ fontSize: "14px" }}>
          Fields marked <span className="text-[var(--zn-accent-dark)]">*</span> are required.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Name *" placeholder="Jane Cooper" required />
        <Field label="Email *" type="email" placeholder="jane@company.com" required />
        <Field label="Phone Number" placeholder="+1 (555) 000-0000" />
        <Field label="Subject *" placeholder="New IoT platform" required />
      </div>

      <Field label="Message *" as="textarea" placeholder="Tell us about your project, timeline, and success criteria..." required />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
        <span className="text-[var(--zn-muted)]" style={{ fontSize: "12px" }}>
          By submitting, you agree to our privacy policy.
        </span>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--zn-primary)] px-6 py-3 text-white transition hover:bg-black"
        >
          {submitted ? "Message Sent ✓" : (<>Submit <Send size={16} /></>)}
        </button>
      </div>
    </form>
  );
}

export function ContactPage() {
  const socials = [
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Github size={18} />, href: "#", label: "GitHub" },
  ];
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 lg:gap-14 items-start">
          {/* Left — Info */}
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-[var(--zn-primary)]" style={{ fontSize: "26px", fontWeight: 600, lineHeight: 1.2 }}>
                Contact information
              </h2>
              <p className="mt-2 text-[var(--zn-muted)]" style={{ fontSize: "14px", lineHeight: 1.6 }}>
                Prefer old-fashioned channels? Here's where to find us.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <InfoRow icon={<Phone size={18} />} label="Phone" value="+92 339 0933 944" href="tel:+923390933944" />
              <InfoRow icon={<Mail size={18} />} label="Email" value="contact@zinovaa.com" href="mailto:contact@zinovaa.com" />
              <InfoRow icon={<MapPin size={18} />} label="Office" value="Bahria Town, Islamabad, Pakistan" />
            </div>

            <div>
              <div className="text-[var(--zn-muted)] mb-3" style={{ fontSize: "12px", letterSpacing: "0.06em" }}>
                FOLLOW US
              </div>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--zn-border)] bg-white text-[var(--zn-primary)] transition hover:bg-[var(--zn-primary)] hover:text-[var(--zn-accent)] hover:border-[var(--zn-primary)]"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-2">
              <MapPlaceholder />
            </div>
          </div>

          {/* Right — Form */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}