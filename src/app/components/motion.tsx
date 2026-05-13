import { motion, useInView, useMotionValue, useSpring, useTransform, useScroll, AnimatePresence } from "motion/react";
import type { Variants, Transition, MotionProps } from "motion/react";
import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_SPRING: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

const baseT: Transition = { duration: 0.5, ease: EASE };

/* One-shot scroll reveal — translateY + fade */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: keyof typeof motion;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ ...baseT, delay }}
    >
      {children}
    </Tag>
  );
}

/* Stagger children on scroll entry */
export function Stagger({
  children,
  className,
  step = 0.08,
  initialDelay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  step?: number;
  initialDelay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: step, delayChildren: initialDelay } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: baseT },
  };
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : undefined}
    >
      {Array.isArray(children)
        ? children.map((c, i) => <motion.div key={i} variants={item}>{c}</motion.div>)
        : <motion.div variants={item}>{children}</motion.div>}
    </motion.div>
  );
}

/* Hero word-by-word reveal via clip-path mask */
export function WordReveal({
  text,
  className,
  style,
  delay = 0,
  highlight,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  highlight?: string;
}) {
  const words = text.split(" ");
  return (
    <h1 className={className} style={style}>
      {words.map((w, i) => {
        const isHL = highlight && w === highlight;
        return (
          <span key={i} className="inline-block overflow-hidden align-bottom" style={{ paddingBottom: "0.1em", marginRight: "0.25em" }}>
            <motion.span
              className="inline-block"
              style={isHL ? { color: "var(--zn-accent)" } : undefined}
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.55, ease: EASE, delay: delay + i * 0.08 }}
            >
              {w}
            </motion.span>
          </span>
        );
      })}
    </h1>
  );
}

/* Count up integer from 0 on scroll entry */
export function CountUp({ value, duration = 1.2, suffix = "" }: { value: number; duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const rounded = useTransform(spring, (v) => Math.round(v).toString() + suffix);

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

/* Page transition wrapper */
export function PageTransition({ routeKey, children }: { routeKey: string; children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={routeKey}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

/* Parallax — translates element on scroll relative to its container.
   distance is the px range; positive = element drifts opposite to scroll (deeper layer feel). */
export function Parallax({
  children,
  distance = 80,
  className,
  style,
  zIndex,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
  style?: CSSProperties;
  zIndex?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const ys = useSpring(y, { stiffness: 80, damping: 20, mass: 0.6 });
  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        ...(className && /\b(absolute|fixed|sticky)\b/.test(className) ? {} : { position: "relative" }),
        ...style,
        y: ys,
        zIndex,
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
}

/* Tilt3D — perspective tilt that follows mouse, plus subtle scroll-based lift. */
export function Tilt3D({
  children,
  className,
  max = 8,
  scale = 1.02,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  scale?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sc = useMotionValue(1);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const srx = useSpring(rx, { stiffness: 220, damping: 18 });
  const sry = useSpring(ry, { stiffness: 220, damping: 18 });
  const ssc = useSpring(sc, { stiffness: 220, damping: 22 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * max * 2);
    rx.set(-(py - 0.5) * max * 2);
    sc.set(scale);
    gx.set(px * 100);
    gy.set(py * 100);
  };
  const onLeave = () => {
    rx.set(0); ry.set(0); sc.set(1);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: srx,
        rotateY: sry,
        scale: ssc,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background: useTransform(
              [gx, gy] as never,
              ([x, y]: number[]) =>
                `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.18), transparent 45%)`
            ),
            mixBlendMode: "overlay",
          }}
        />
      )}
    </motion.div>
  );
}

/* FloatLayer — slow ambient float for decorative blobs, with 3D translateZ depth. */
export function FloatLayer({
  children,
  className,
  depth = 0,
  amplitude = 12,
  duration = 6,
}: {
  children: ReactNode;
  className?: string;
  depth?: number;
  amplitude?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      style={{ translateZ: depth, willChange: "transform" }}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export { motion, EASE, EASE_SPRING };
export type { MotionProps };
