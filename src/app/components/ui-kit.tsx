import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";

export function Button({
  variant = "primary",
  children,
  className = "",
  ...rest
}: {
  variant?: "primary" | "outline" | "ghost";
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 transition-all duration-200 cursor-pointer";
  const styles = {
    primary:
      "zn-shimmer bg-[var(--zn-accent)] text-[var(--zn-primary)] hover:brightness-95 hover:scale-[1.03] active:scale-[0.97]",
    outline:
      "border border-white/40 text-white hover:bg-white/10 active:scale-[0.98]",
    ghost:
      "text-[var(--zn-primary)] hover:bg-black/5 active:scale-[0.98]",
  }[variant];
  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function Chip({
  children,
  active = false,
  tone = "dark",
}: {
  children: ReactNode;
  active?: boolean;
  tone?: "dark" | "light";
}) {
  if (active) {
    return (
      <span className="inline-flex items-center rounded-full bg-[var(--zn-accent)] px-4 py-1.5 text-[var(--zn-primary)]">
        {children}
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center rounded-full border px-4 py-1.5 ${
        tone === "dark"
          ? "border-white/20 text-white/80"
          : "border-[var(--zn-border)] text-[var(--zn-muted)]"
      }`}
    >
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  onDark = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  onDark?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : ""
      }`}
    >
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 ${
          onDark
            ? "bg-white/10 text-[var(--zn-accent)]"
            : "bg-[var(--zn-surface-alt)] text-[var(--zn-primary)]"
        }`}
        style={{ fontSize: "12px", letterSpacing: "0.08em" }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--zn-accent)]" />
        {eyebrow.toUpperCase()}
      </span>
      <h2
        style={{ fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 600, lineHeight: 1.15 }}
        className={onDark ? "text-white" : "text-[var(--zn-primary)]"}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl ${
            onDark ? "text-white/70" : "text-[var(--zn-muted)]"
          }`}
          style={{ fontSize: "16px", lineHeight: 1.6 }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function IconBadge({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
        tone === "dark"
          ? "bg-white/10 text-[var(--zn-accent)]"
          : "bg-[var(--zn-surface-alt)] text-[var(--zn-primary)]"
      }`}
    >
      {children}
    </div>
  );
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <div className="zn-card-3d group flex flex-col gap-4 rounded-2xl border border-[var(--zn-border)] bg-white p-6 hover:border-[var(--zn-accent)]/50">
      <div className="transition-transform duration-300 group-hover:rotate-[8deg]">
        <IconBadge>{icon}</IconBadge>
      </div>
      <h3 style={{ fontSize: "20px", fontWeight: 600 }} className="text-[var(--zn-primary)]">
        {title}
      </h3>
      <p className="text-[var(--zn-muted)]" style={{ fontSize: "15px", lineHeight: 1.6 }}>
        {description}
      </p>
      <a
        href={href}
        className="mt-2 inline-flex items-center gap-1 text-[var(--zn-primary)] transition-colors hover:text-[var(--zn-accent-dark)]"
      >
        Learn More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
}

export function Stat({ value, label, onDark = true }: { value: string; label: string; onDark?: boolean }) {
  return (
    <div className="flex flex-col gap-1">
      <span
        style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, lineHeight: 1 }}
        className={onDark ? "text-white" : "text-[var(--zn-primary)]"}
      >
        {value}
      </span>
      <span
        className={onDark ? "text-white/60" : "text-[var(--zn-muted)]"}
        style={{ fontSize: "12px", letterSpacing: "0.08em" }}
      >
        {label.toUpperCase()}
      </span>
    </div>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[var(--zn-accent)] text-[var(--zn-primary)]">
        <Check size={12} strokeWidth={3} />
      </span>
      <span className="text-[var(--zn-muted)]" style={{ fontSize: "15px" }}>
        {children}
      </span>
    </li>
  );
}
