import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight, Rocket, Globe, TrendingUp, Brain, Users, Heart,
  User, MessageCircle, Lightbulb, Code2, Handshake, Star,
  CheckCircle2, X, MapPin, Briefcase, Clock, Share2,
  Linkedin, Twitter, Link2, Upload, Send, ChevronRight,
  Mail,
} from "lucide-react";
import { Button, SectionHeader } from "../components/ui-kit";
import { MascotCorner } from "../components/mascot";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, Stagger, CountUp } from "../components/motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

type Dept = "All" | "Engineering" | "Design" | "Marketing" | "Operations";

const BENEFITS = [
  { icon: <Rocket size={22} />, title: "Impactful Work", desc: "Every project you touch ships to real users solving real problems." },
  { icon: <Globe size={22} />, title: "Hybrid Friendly", desc: "Work from anywhere. We trust you to deliver, not sit at a desk." },
  { icon: <TrendingUp size={22} />, title: "Fast Growth", desc: "Join early, grow fast. We promote from within and invest in your skills." },
  { icon: <Brain size={22} />, title: "Learning Culture", desc: "Access to courses, conferences, and time to experiment and learn." },
  { icon: <Users size={22} />, title: "Collaborative Team", desc: "Small teams, direct communication, no bureaucracy." },
  { icon: <Heart size={22} />, title: "Competitive Pay", desc: "Fair compensation, royalty options, and performance-based bonuses." },
];

const HIRING_STEPS = [
  { num: "01", label: "Apply", desc: "Submit your CV and a short note about why Zinovaa." },
  { num: "02", label: "Intro Call", desc: "A 30-min casual chat with our team. No trick questions." },
  { num: "03", label: "Skills Review", desc: "A short take-home task or portfolio review relevant to your role." },
  { num: "04", label: "Final Interview", desc: "Meet the team, ask us anything, and we'll make a decision within 5 days." },
];

const TESTIMONIALS = [
  {
    quote: "Joining Zinovaa early was the best decision I made. I've shipped more here in 6 months than in 2 years elsewhere.",
    name: "M. Usman", role: "HOD Software", initials: "MU",
  },
  {
    quote: "The culture is real, not just a slide deck. Everyone is genuinely invested in the work and in each other.",
    name: "Kanwal F.", role: "UI/UX Designer", initials: "KF",
  },
  {
    quote: "Hybrid, flexible, and actually meaningful work. I didn't think all three were possible.",
    name: "Abdullah K.", role: "Operational Director", initials: "AK",
  },
];

type Job = {
  id: string;
  title: string;
  dept: Dept;
  location: string;
  remote: boolean;
  type: "Full-time" | "Part-time" | "Contract";
  summary: string;
  salary: string;
  teamSize: string;
  about: string;
  whatYoullDo: string[];
  lookingFor: string[];
  niceToHave: string[];
  offer: string[];
};

const JOBS: Job[] = [
//   {
//     id: "embedded-systems-engineer",
//     title: "Embedded Systems Engineer",
//     dept: "Engineering",
//     location: "Remote",
//     remote: true,
//     type: "Full-time",
//     summary: "Design and develop firmware for IoT and embedded hardware platforms.",
//     salary: "$70k – $95k",
//     teamSize: "4 engineers",
//     about: "You'll be working on the hardware-software interface layer that powers our IoT products. From bare-metal RTOS firmware to HAL drivers and OTA updates, this role owns the device side of our stack.",
//     whatYoullDo: [
//       "Design and implement firmware in C/C++ for ARM Cortex-M microcontrollers",
//       "Develop and maintain RTOS-based systems using FreeRTOS",
//       "Collaborate with hardware engineers on schematic reviews and bring-up",
//       "Write board support packages and device drivers",
//       "Define and implement OTA firmware update pipelines",
//       "Participate in code reviews and documentation",
//     ],
//     lookingFor: [
//       "3+ years of embedded C/C++ firmware development",
//       "Experience with FreeRTOS or similar RTOS",
//       "Familiarity with communication protocols: I2C, SPI, UART, BLE",
//       "Strong debugging skills with oscilloscope / logic analyser",
//       "Ability to read schematics and datasheets independently",
//     ],
//     niceToHave: [
//       "Experience with Zephyr RTOS or ESP-IDF",
//       "Background in medical or industrial embedded systems",
//       "Knowledge of cellular (LTE-M / NB-IoT) protocols",
//     ],
//     offer: [
//       "Fully remote with flexible working hours",
//       "Competitive salary + equity options",
//       "Learning budget for courses and conferences",
//       "Annual hardware allowance for your home lab",
//     ],
//   },
//   {
//     id: "iot-firmware-developer",
//     title: "IoT Firmware Developer",
//     dept: "Engineering",
//     location: "Remote",
//     remote: true,
//     type: "Full-time",
//     summary: "Build and maintain cloud-connected firmware for Zinovaa's IoT product line.",
//     salary: "$65k – $90k",
//     teamSize: "4 engineers",
//     about: "This role focuses on the connectivity layer — getting reliable, secure, and battery-efficient data from devices to the cloud. You'll own the MQTT/HTTPS transport layer, provisioning flows, and cloud integration.",
//     whatYoullDo: [
//       "Implement cloud connectivity using MQTT and HTTPS on constrained devices",
//       "Build device provisioning and certificate management flows",
//       "Optimise power consumption for battery-operated nodes",
//       "Develop self-diagnostic and remote monitoring features",
//       "Integrate with AWS IoT Core / Azure IoT Hub",
//       "Write automated tests for firmware modules",
//     ],
//     lookingFor: [
//       "2+ years of IoT or embedded connectivity development",
//       "Experience with TLS/DTLS on constrained hardware",
//       "Proficiency in C with focus on resource-constrained systems",
//       "Understanding of cloud IoT platforms (AWS, Azure, or GCP)",
//       "Strong analytical mindset for debugging connectivity issues",
//     ],
//     niceToHave: [
//       "Experience with LoRaWAN or Zigbee stacks",
//       "Background in cellular IoT (LTE-M / NB-IoT)",
//       "Familiarity with FOTA and A/B update schemes",
//     ],
//     offer: [
//       "Remote-first culture with async-friendly processes",
//       "Equity options from day one",
//       "Access to latest development kits and hardware",
//       "Mentorship from senior embedded engineers",
//     ],
//   },
//   {
//     id: "full-stack-web-developer",
//     title: "Full Stack Web Developer",
//     dept: "Engineering",
//     location: "Rawalpindi",
//     remote: false,
//     type: "Full-time",
//     summary: "Build web platforms and dashboards that surface real-time IoT and product data.",
//     salary: "$60k – $85k",
//     teamSize: "5 engineers",
//     about: "You'll design and build the web interfaces our customers use every day — from real-time IoT dashboards to product management portals. Full ownership from database schema to deployed React component.",
//     whatYoullDo: [
//       "Build full-stack features in React + Node.js / Next.js",
//       "Design and maintain PostgreSQL schemas and REST/GraphQL APIs",
//       "Implement real-time data visualisation with WebSocket feeds",
//       "Ensure cross-browser compatibility and WCAG 2.1 accessibility",
//       "Collaborate with designers to ship pixel-perfect UIs",
//       "Write unit and integration tests with Jest and Playwright",
//     ],
//     lookingFor: [
//       "3+ years of full-stack web development",
//       "Strong React and TypeScript skills",
//       "Experience with Node.js and relational databases",
//       "Comfortable with cloud deployment (AWS, Vercel, or Render)",
//       "Good eye for UI quality and attention to detail",
//     ],
//     niceToHave: [
//       "Experience with real-time systems (WebSockets, SSE)",
//       "Background in data visualisation (Recharts, D3)",
//       "Prior work on IoT dashboards or industrial UIs",
//     ],
//     offer: [
//       "Hybrid role with a modern office in Rawalpindi",
//       "Competitive salary with performance bonuses",
//       "Company-provided hardware",
//       "Team lunches and quarterly off-sites",
//     ],
//   },
//   {
//     id: "ui-ux-designer",
//     title: "UI/UX Designer",
//     dept: "Design",
//     location: "Remote",
//     remote: true,
//     type: "Full-time",
//     summary: "Craft intuitive and beautiful user experiences for hardware and software products.",
//     salary: "$55k – $80k",
//     teamSize: "2 designers",
//     about: "You'll be the design voice inside an engineering-heavy team. From early discovery and wireframes to polished Figma components and shipped UI, you'll define how our products look and feel.",
//     whatYoullDo: [
//       "Lead UX research, user interviews, and usability testing",
//       "Create wireframes, prototypes, and high-fidelity Figma designs",
//       "Maintain and extend the Zinovaa design system",
//       "Work directly with engineers to ensure designs ship as intended",
//       "Design mobile and responsive layouts across our product line",
//       "Present design decisions with clear rationale to stakeholders",
//     ],
//     lookingFor: [
//       "3+ years of product UX/UI design experience",
//       "Expert Figma skills including components and auto-layout",
//       "Strong portfolio showing end-to-end design process",
//       "Ability to design for both web dashboards and mobile apps",
//       "Excellent communication and collaboration skills",
//     ],
//     niceToHave: [
//       "Experience designing for hardware/physical products",
//       "Motion design or micro-interaction skills",
//       "Familiarity with HTML/CSS to aid developer handoff",
//     ],
//     offer: [
//       "Fully remote with flexible hours",
//       "Access to Figma Enterprise and design tools",
//       "Budget for conferences and design courses",
//       "Creative freedom with real product ownership",
//     ],
//   },
//   {
//     id: "mobile-app-developer",
//     title: "Mobile App Developer (React Native)",
//     dept: "Engineering",
//     location: "Remote",
//     remote: true,
//     type: "Contract",
//     summary: "Build cross-platform mobile apps that connect with Zinovaa's IoT hardware via BLE and Wi-Fi.",
//     salary: "$50–$70/hr",
//     teamSize: "3 engineers",
//     about: "A contract opportunity for an experienced React Native developer to help us build and maintain the companion mobile apps for our IoT products. You'll own the BLE pairing, data sync, and push notification layers.",
//     whatYoullDo: [
//       "Develop and maintain cross-platform iOS/Android apps in React Native",
//       "Implement BLE device scanning, pairing, and data transfer",
//       "Integrate with REST and MQTT backend services",
//       "Build push notification and background task flows",
//       "Work closely with firmware engineers on device protocol design",
//       "Publish and maintain apps on the App Store and Google Play",
//     ],
//     lookingFor: [
//       "3+ years of React Native development",
//       "Experience with react-native-ble-plx or similar BLE libraries",
//       "Strong understanding of iOS and Android platform nuances",
//       "Experience with app store submission and TestFlight / internal testing",
//       "Comfortable working async with distributed teams",
//     ],
//     niceToHave: [
//       "Experience with Expo and EAS Build",
//       "Prior IoT or hardware companion app experience",
//       "Knowledge of Swift or Kotlin for native modules",
//     ],
//     offer: [
//       "Competitive contract rate",
//       "Fully remote and async-friendly",
//       "Potential to transition to full-time",
//       "Interesting hardware integration challenges",
//     ],
//   },
  {
    id: "digital-marketing-specialist",
    title: "Digital Marketing Specialist",
    dept: "Marketing",
    location: "Bahria Town, Rawalpindi",
    remote: false,
    type: "full-time",
    summary: "Grow Zinovaa's presence through content, SEO, and targeted campaigns.",
    salary: "30k – 45k",
    teamSize: "1 marketer",
    about: "A full-time role for a marketing generalist who can write clear, technical content and run digital campaigns. You'll own our LinkedIn presence, blog, and SEO strategy.",
    whatYoullDo: [
      "Write and publish technical blog posts and case studies",
      "Manage and grow Zinovaa's LinkedIn and social channels",
      "Plan and execute targeted paid campaigns (Google Ads, LinkedIn)",
      "Track and report on funnel metrics with Google Analytics",
      "Develop email sequences for lead nurturing",
      "Collaborate with engineers to turn technical work into compelling stories",
    ],
    lookingFor: [
      "2+ years in digital or content marketing",
      "Strong writing skills with ability to explain technical topics clearly",
      "Familiarity with SEO tools (Ahrefs, SEMrush, or similar)",
      "Experience with LinkedIn company page management",
      "Data-driven mindset with basic analytics proficiency",
    ],
    niceToHave: [
      "Background in B2B tech or SaaS marketing",
      "Video editing or short-form content creation skills",
      "Experience with HubSpot or similar CRM",
    ],
    offer: [
      "Creative freedom to build the brand",
      "Performance-based bonuses",
    ],
  },
];

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */

const HERO_ICONS = [
  <User size={28} />, <MessageCircle size={28} />, <Lightbulb size={28} />,
  <Rocket size={28} />, <Code2 size={28} />, <Handshake size={28} />,
  <Brain size={28} />, <Globe size={28} />, <Heart size={28} />,
];
const LIME_CELLS = [1, 5];

function HeroIconGrid() {
  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-3">
        {HERO_ICONS.map((icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: EASE, delay: 0.5 + i * 0.06 }}
            className={`flex h-[88px] items-center justify-center rounded-2xl border transition-all ${
              LIME_CELLS.includes(i)
                ? "bg-[var(--zn-accent)] border-[var(--zn-accent)] text-[var(--zn-primary)]"
                : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
            }`}
          >
            {icon}
          </motion.div>
        ))}
      </div>
      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE, delay: 1.1 }}
        className="absolute -bottom-4 -left-4 inline-flex items-center gap-2 rounded-full border border-[var(--zn-accent)]/40 bg-[var(--zn-primary)] px-4 py-2 shadow-xl"
      >
        <span className="h-2 w-2 rounded-full bg-[var(--zn-accent)] animate-pulse" />
        <span className="text-white" style={{ fontSize: "13px", fontWeight: 600 }}>
          <CountUp value={1} suffix={"+"} /> open positions
        </span>
      </motion.div>
    </div>
  );
}

function Hero({ onViewRoles }: { onViewRoles: () => void }) {
  const stats = [
    { value: 1, suffix: "+", label: "Open Roles" },
    { value: 1, suffix: "", label: "Departments" },
    { value: 50, suffix: "%", label: "Remote Friendly" },
    { value: 1, suffix: "", label: "Countries" },
  ];
  return (
    <section className="relative overflow-hidden bg-[var(--zn-primary)] pt-[72px]">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }} />
        <div className="absolute -left-24 top-16 h-[480px] w-[480px] rounded-full bg-[var(--zn-accent)]/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[320px] w-[320px] rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Mascot */}
      <MascotCorner
        right="20px"
        bottom="0px"
        angle={-8}
        size={200}
        parallaxDistance={45}
        floatAmplitude={12}
        floatDuration={5.2}
        depth={30}
        flipX={true}
        maxTilt={10}
        glare={false}
        entryDelay={0.6}
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-14 items-center">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.2 }}
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white/90"
              style={{ fontSize: "12px", letterSpacing: "0.08em" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--zn-accent)]" />
              WE'RE HIRING
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
              className="text-white"
              style={{ fontSize: "clamp(38px, 5.5vw, 62px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.02em" }}
            >
              Build the future.{" "}
              <br />
              Join the team{" "}
              <br />
              <span className="text-[var(--zn-accent)]">building it.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.55 }}
              className="max-w-xl text-white/70"
              style={{ fontSize: "18px", lineHeight: 1.6 }}
            >
              We're looking for curious minds, bold engineers, and creative thinkers who want to work on products that actually matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.72 }}
              className="flex flex-wrap gap-3"
            >
              <Button onClick={onViewRoles}>View Open Roles <ArrowRight size={16} /></Button>
              <Button variant="outline">
                <a href="#/about" className="flex items-center gap-2">Learn About Us</a>
              </Button>
            </motion.div>
          </div>

          {/* Right — Icon grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
            className="hidden lg:block"
          >
            <HeroIconGrid />
          </motion.div>
        </div>

        {/* Stats row */}
        <Stagger className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/10 pt-10" step={0.1}>
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="text-white" style={{ fontSize: "clamp(32px, 4.5vw, 48px)", fontWeight: 700, lineHeight: 1 }}>
                <CountUp value={s.value} suffix={s.suffix} />
              </span>
              <span className="text-white/50" style={{ fontSize: "14px", letterSpacing: "0.06em" }}>{s.label.toUpperCase()}</span>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   WHY WORK AT ZINOVAA
───────────────────────────────────────────── */

function WhyZinovaa() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
      <Reveal>
        <SectionHeader
          eyebrow="Life at Zinovaa"
          title="More than a job. A mission."
          subtitle="We've built a culture where ambition meets purpose and great work is the norm."
          align="center"
        />
      </Reveal>
      <Stagger className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" step={0.08}>
        {BENEFITS.map((b) => (
          <div
            key={b.title}
            className="flex flex-col gap-4 rounded-2xl border border-[var(--zn-border)] bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_48px_-16px_rgba(3,2,19,0.12)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--zn-accent)]/10 text-[var(--zn-accent-dark)]">
              {b.icon}
            </div>
            <div>
              <h3 className="text-[var(--zn-primary)]" style={{ fontSize: "17px", fontWeight: 600 }}>{b.title}</h3>
              <p className="mt-2 text-[var(--zn-muted)]" style={{ fontSize: "14px", lineHeight: 1.65 }}>{b.desc}</p>
            </div>
          </div>
        ))}
      </Stagger>
    </section>
  );
}

/* ─────────────────────────────────────────────
   OPEN POSITIONS
───────────────────────────────────────────── */

const DEPT_FILTERS: Dept[] = ["All", "Engineering", "Design", "Marketing", "Operations"];

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 transition-all cursor-pointer ${
        active
          ? "bg-[var(--zn-accent)] text-[var(--zn-primary)]"
          : "border border-[var(--zn-border)] text-[var(--zn-muted)] hover:border-[var(--zn-primary)] hover:text-[var(--zn-primary)]"
      }`}
      style={{ fontSize: "14px", fontWeight: active ? 600 : 400 }}
    >
      {label}
    </button>
  );
}

function JobCard({ job, onOpen }: { job: Job; onOpen: (job: Job) => void }) {
  return (
    <div
      className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 rounded-2xl border border-[var(--zn-border)] bg-white p-5 lg:p-6 transition cursor-pointer hover:-translate-y-[3px] hover:border-l-[3px] hover:border-l-[var(--zn-accent)] hover:shadow-[0_12px_40px_-12px_rgba(3,2,19,0.15),0_0_0_1px_rgba(212,255,63,0.12)]"
      onClick={() => onOpen(job)}
    >
      {/* Left */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="text-[var(--zn-primary)]" style={{ fontSize: "16px", fontWeight: 600 }}>{job.title}</h3>
        </div>
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <span className="inline-flex items-center rounded-full border border-[var(--zn-accent)]/40 bg-[var(--zn-accent)]/8 px-2.5 py-0.5 text-[var(--zn-accent-dark)]" style={{ fontSize: "12px", fontWeight: 500 }}>{job.dept}</span>
          <span className="inline-flex items-center gap-1 text-[var(--zn-muted)]" style={{ fontSize: "12px" }}>
            {job.remote ? <Globe size={12} /> : <MapPin size={12} />} {job.location}
          </span>
        </div>
      </div>
      {/* Center */}
      <p className="hidden lg:block text-[var(--zn-muted)] flex-[2] min-w-0" style={{ fontSize: "14px", lineHeight: 1.5 }}>{job.summary}</p>
      {/* Right */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--zn-border)] px-3 py-1 text-[var(--zn-muted)]" style={{ fontSize: "12px" }}>
          <Clock size={11} /> {job.type}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); onOpen(job); }}
          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--zn-accent)] px-4 py-2 text-[var(--zn-primary)] transition hover:brightness-95 group-hover:[&_svg]:translate-x-[4px]"
          style={{ fontSize: "13px", fontWeight: 600 }}
        >
          Apply Now <ArrowRight size={14} className="transition-transform" />
        </button>
      </div>
    </div>
  );
}

function OpenPositions({ onOpen }: { onOpen: (job: Job) => void }) {
  const [active, setActive] = useState<Dept>("All");
  const filtered = active === "All" ? JOBS : JOBS.filter((j) => j.dept === active);

  return (
    <section className="bg-[var(--zn-surface)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="Open Roles"
            title="Find your place at Zinovaa"
            subtitle="All roles are open to remote candidates unless stated otherwise."
            align="center"
          />
        </Reveal>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {DEPT_FILTERS.map((d) => (
            <FilterChip key={d} label={d} active={active === d} onClick={() => setActive(d)} />
          ))}
        </div>

        {/* Job list */}
        <div className="mt-8 flex flex-col gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <JobCard job={job} onOpen={onOpen} />
              </motion.div>
            ))}
          </AnimatePresence>
          {filtered.length === 0 && (
            <p className="text-center text-[var(--zn-muted)] py-10" style={{ fontSize: "15px" }}>
              No open roles in this department right now. Check back soon!
            </p>
          )}
        </div>

        {/* Open application */}
        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-[var(--zn-muted)]" style={{ fontSize: "15px" }}>
            Don't see your role? Send us your CV anyway.
          </p>
          <button
            className="inline-flex items-center gap-2 rounded-full border border-[var(--zn-border)] px-5 py-2.5 text-[var(--zn-primary)] transition hover:bg-[var(--zn-primary)] hover:text-white hover:border-[var(--zn-primary)]"
            style={{ fontSize: "14px" }}
            onClick={() => window.location.href = "mailto:hr@zinovaa.com"}
          >
            Open Application <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   HIRING PROCESS
───────────────────────────────────────────── */

function HiringProcess() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(HIRING_STEPS.map(() => false));

  useEffect(() => {
    const observers = stepRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => { const next = [...prev]; next[i] = true; return next; });
            obs.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section className="bg-[var(--zn-primary)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
        <Reveal>
          <SectionHeader
            eyebrow="How We Hire"
            title="Simple. Transparent. Respectful of your time."
            align="center"
            onDark
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-0">
          {HIRING_STEPS.map((step, i) => (
            <div key={step.num} className="relative flex flex-col items-center text-center px-4">
              {/* Connector */}
              {i < HIRING_STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="hidden md:block absolute top-[28px] left-1/2 w-full border-t-2 border-dashed border-white/20"
                  style={{ zIndex: 0 }}
                />
              )}
              {/* Number circle */}
              <div
                ref={(el) => { stepRefs.current[i] = el; }}
                className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-700"
                style={{
                  borderColor: visible[i] ? "var(--zn-accent)" : "rgba(255,255,255,0.2)",
                  background: visible[i] ? "rgba(212,255,63,0.08)" : "transparent",
                  transform: visible[i] ? "scale(1.1)" : "scale(1)",
                  boxShadow: visible[i] ? "0 0 24px rgba(212,255,63,0.25)" : "none",
                }}
              >
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: visible[i] ? "var(--zn-accent)" : "rgba(255,255,255,0.4)",
                    transition: "color 0.6s",
                  }}
                >
                  {step.num}
                </span>
              </div>
              {/* Arrow */}
              {i < HIRING_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-[22px] right-0 z-20 text-white/30">
                  <ChevronRight size={14} />
                </div>
              )}
              <div className="mt-5 flex flex-col gap-2">
                <h3 className="text-white" style={{ fontSize: "16px", fontWeight: 600 }}>{step.label}</h3>
                <p className="text-white/55" style={{ fontSize: "13px", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CULTURE SECTION
───────────────────────────────────────────── */

const CULTURE_BULLETS = [
  "Flat hierarchy, everyone has a voice",
  "Async-friendly, no pointless meetings",
  "We ship real products, not just prototypes",
];

function CultureSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-10 lg:gap-16 items-center">
        {/* Left — image */}
        <Reveal>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-[var(--zn-surface-alt)]">
            <img
              src="https://images.unsplash.com/photo-1770777843445-2a1621b1201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwb2ZmaWNlJTIwdGVhbSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzgwNDk5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Zinovaa team at work"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--zn-primary)]/40 to-transparent" />
          </div>
        </Reveal>

        {/* Right — content */}
        <Reveal delay={0.15}>
          <div className="flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 text-[var(--zn-accent-dark)]" style={{ fontSize: "12px", letterSpacing: "0.08em" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--zn-accent-dark)]" />
              OUR CULTURE
            </span>
            <h2 className="text-[var(--zn-primary)]" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.015em" }}>
              Built by people who give a damn.
            </h2>
            <p className="text-[var(--zn-muted)]" style={{ fontSize: "15px", lineHeight: 1.7 }}>
              We're a small but mighty team based in Rawalpindi with collaborators across the globe. We debate ideas, ship fast, and celebrate wins together — big and small.
            </p>
            <ul className="flex flex-col gap-3 mt-1">
              {CULTURE_BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[var(--zn-accent-dark)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--zn-primary)]" style={{ fontSize: "15px" }}>{b}</span>
                </li>
              ))}
            </ul>
            {/* CEO attribution */}
            <div className="mt-4 flex items-center gap-3 rounded-xl border border-[var(--zn-border)] bg-[var(--zn-surface)] px-4 py-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--zn-primary)] text-[var(--zn-accent)]" style={{ fontSize: "13px", fontWeight: 700 }}>
                UK
              </div>
              <div>
                <div className="text-[var(--zn-primary)]" style={{ fontSize: "14px", fontWeight: 600 }}>Usama Rauf Khattak</div>
                <div className="text-[var(--zn-muted)]" style={{ fontSize: "12px", fontStyle: "italic" }}>CEO — "Ship with intention."</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────── */

function TeamTestimonials() {
  return (
    <section className="bg-[var(--zn-surface)]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28">
        <Reveal>
          <SectionHeader eyebrow="Team Voices" title="Hear it from the people inside." align="center" />
        </Reveal>
        <Stagger className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6" step={0.1}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="flex flex-col gap-5 rounded-2xl border border-[var(--zn-border)] bg-white p-6 lg:p-7 hover:-translate-y-1 transition hover:shadow-[0_16px_48px_-16px_rgba(3,2,19,0.12)]">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[var(--zn-accent)] text-[var(--zn-accent)]" />
                ))}
              </div>
              <p className="text-[var(--zn-primary)] flex-1" style={{ fontSize: "15px", lineHeight: 1.7, fontStyle: "italic" }}>
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-[var(--zn-border)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--zn-primary)] text-[var(--zn-accent)]" style={{ fontSize: "12px", fontWeight: 700 }}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-[var(--zn-primary)]" style={{ fontSize: "14px", fontWeight: 600 }}>{t.name}</div>
                  <div className="text-[var(--zn-muted)]" style={{ fontSize: "12px" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CTA BAND
───────────────────────────────────────────── */

function CTABand({ onViewRoles }: { onViewRoles: () => void }) {
  return (
    <Reveal>
      <section className="bg-[var(--zn-accent)] py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 text-center flex flex-col items-center gap-6">
          <h2 className="text-[var(--zn-primary)]" style={{ fontSize: "clamp(32px, 4.5vw, 52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Ready to build something that matters?
          </h2>
          <p className="max-w-xl text-[var(--zn-primary)]/70" style={{ fontSize: "18px", lineHeight: 1.55 }}>
            We're growing fast and we want you on the team.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={onViewRoles}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--zn-primary)] px-6 py-3 text-white transition hover:bg-black"
              style={{ fontSize: "15px", fontWeight: 600 }}
            >
              See Open Roles
            </button>
            <button
              onClick={() => window.location.href = "mailto:hr@zinovaa.com"}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--zn-primary)] px-6 py-3 text-[var(--zn-primary)] transition hover:bg-[var(--zn-primary)] hover:text-white"
              style={{ fontSize: "15px", fontWeight: 600 }}
            >
              Send Open Application
            </button>
          </div>
          <a
            href="mailto:hr@zinovaa.com"
            className="inline-flex items-center gap-2 text-[var(--zn-primary)]/60 transition hover:text-[var(--zn-primary)]"
            style={{ fontSize: "13px" }}
          >
            <Mail size={14} /> hr@zinovaa.com
          </a>
        </div>
      </section>
    </Reveal>
  );
}

/* ─────────────────────────────────────────────
   JOB DETAIL MODAL
───────────────────────────────────────────── */

/**
 * FORMSPREE SETUP — takes 2 minutes:
 * 1. Go to https://formspree.io and sign up (free tier is enough)
 * 2. Click "New Form" → set the recipient email to hr@zinovaa.com
 * 3. Copy the form ID (e.g. "xabc1234") and paste it below
 */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgznaez";

function Field({
  label, as = "input", ...props
}: { label: string; as?: "input" | "textarea" } & React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const cls = "w-full rounded-xl border border-[var(--zn-border)] bg-[var(--zn-surface)] px-4 py-3 text-[var(--zn-primary)] placeholder:text-[var(--zn-muted)] outline-none transition focus:border-[var(--zn-primary)] focus:ring-2 focus:ring-[var(--zn-accent)]";
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[var(--zn-primary)]" style={{ fontSize: "13px", fontWeight: 500 }}>{label}</span>
      {as === "textarea"
        ? <textarea rows={4} className={cls} {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} />
        : <input className={cls} {...(props as React.InputHTMLAttributes<HTMLInputElement>)} />}
    </label>
  );
}

function JobDetailModal({ job, onClose }: { job: Job; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const data = new FormData(e.currentTarget);
    if (cvFile) data.set("cv", cvFile, cvFile.name);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const json = await res.json().catch(() => ({}));
        const msg = (json as { error?: string }).error ?? "Something went wrong. Please try again.";
        setError(msg);
      }
    } catch {
      setError("Network error — please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

        {/* Panel */}
        <motion.div
          className="relative z-10 mx-auto my-8 w-full max-w-[860px] rounded-3xl bg-white shadow-2xl"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.3, ease: EASE }}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-3xl border-b border-[var(--zn-border)] bg-white px-6 py-5 lg:px-8">
            <div className="flex flex-col gap-2 flex-1 min-w-0">
              <h1 className="text-[var(--zn-primary)]" style={{ fontSize: "22px", fontWeight: 700, lineHeight: 1.2 }}>{job.title}</h1>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-[var(--zn-accent)]/40 bg-[var(--zn-accent)]/10 px-2.5 py-0.5 text-[var(--zn-accent-dark)]" style={{ fontSize: "12px", fontWeight: 500 }}>{job.dept}</span>
                <span className="inline-flex items-center gap-1 rounded-full border border-[var(--zn-border)] px-2.5 py-0.5 text-[var(--zn-muted)]" style={{ fontSize: "12px" }}>
                  {job.remote ? <Globe size={11} /> : <MapPin size={11} />} {job.location}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-[var(--zn-border)] px-2.5 py-0.5 text-[var(--zn-muted)]" style={{ fontSize: "12px" }}>
                  <Briefcase size={11} /> {job.type}
                </span>
                <span className="text-[var(--zn-muted)]" style={{ fontSize: "12px" }}>Posted 3 days ago</span>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--zn-border)] text-[var(--zn-muted)] transition hover:bg-[var(--zn-surface)] hover:text-[var(--zn-primary)]"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col lg:flex-row gap-6 p-6 lg:p-8">
            {/* Left — 70% */}
            <div className="flex-1 flex flex-col gap-8 min-w-0">
              <Section3 title="About the Role" body={job.about} />
              <BulletSection title="What You'll Do" items={job.whatYoullDo} />
              <BulletSection title="What We're Looking For" items={job.lookingFor} />
              <BulletSection title="Nice to Have" items={job.niceToHave} />
              <BulletSection title="What We Offer" items={job.offer} />

              {/* Application form */}
              <div className="border-t border-[var(--zn-border)] pt-8">
                <h2 className="text-[var(--zn-primary)] mb-6" style={{ fontSize: "20px", fontWeight: 700 }}>Apply for this Role</h2>
                {submitted ? (
                  <div className="flex flex-col items-center gap-4 py-10 rounded-2xl border border-[var(--zn-accent)]/30 bg-[var(--zn-accent)]/5">
                    <CheckCircle2 size={40} className="text-[var(--zn-accent-dark)]" />
                    <p className="text-[var(--zn-primary)]" style={{ fontSize: "16px", fontWeight: 600 }}>Application sent! We'll be in touch.</p>
                    <p className="text-[var(--zn-muted)]" style={{ fontSize: "14px" }}>Expect a reply within 2 business days.</p>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    {/* Hidden fields — give HR context in every email */}
                    <input type="hidden" name="_subject" value={`New Application: ${job.title}`} />
                    <input type="hidden" name="role" value={job.title} />
                    <input type="hidden" name="department" value={job.dept} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Full Name *" name="name" placeholder="Jane Cooper" required />
                      <Field label="Email *" name="email" type="email" placeholder="jane@example.com" required />
                      <Field label="Phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                      <Field label="LinkedIn Profile URL" name="linkedin" type="url" placeholder="https://linkedin.com/in/..." />
                    </div>
                    <Field label="Portfolio / GitHub URL" name="portfolio" type="url" placeholder="https://github.com/..." />
                    <Field
                      as="textarea"
                      name="message"
                      label="Why do you want to join Zinovaa? *"
                      placeholder="Tell us what excites you about this role..."
                      required
                    />

                    {/* File upload */}
                    <label className="flex flex-col gap-1.5 cursor-pointer">
                      <span className="text-[var(--zn-primary)]" style={{ fontSize: "13px", fontWeight: 500 }}>Upload CV *</span>
                      <div
                        className={`flex flex-col items-center gap-2 rounded-xl border-2 border-dashed px-6 py-8 transition ${
                          cvFile
                            ? "border-[var(--zn-accent)] bg-[var(--zn-accent)]/5"
                            : "border-[var(--zn-border)] bg-[var(--zn-surface)] hover:border-[var(--zn-accent)] hover:bg-[var(--zn-accent)]/5"
                        }`}
                      >
                        <Upload size={24} className={cvFile ? "text-[var(--zn-accent-dark)]" : "text-[var(--zn-muted)]"} />
                        {cvFile ? (
                          <span className="text-[var(--zn-accent-dark)]" style={{ fontSize: "13px", fontWeight: 500 }}>
                            ✓ {cvFile.name}
                          </span>
                        ) : (
                          <>
                            <span className="text-[var(--zn-muted)]" style={{ fontSize: "13px" }}>Click to upload or drag & drop</span>
                            <span className="text-[var(--zn-muted)]" style={{ fontSize: "11px" }}>PDF, DOC up to 5MB</span>
                          </>
                        )}
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="sr-only"
                          onChange={(e) => setCvFile(e.target.files?.[0] ?? null)}
                        />
                      </div>
                    </label>

                    {/* Error message */}
                    {error && (
                      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700" style={{ fontSize: "13px" }}>
                        ⚠ {error}
                      </div>
                    )}

                    {/* Dev warning when form ID is not yet set */}
                    {FORMSPREE_ENDPOINT.includes("YOUR_FORM_ID") && (
                      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-amber-800" style={{ fontSize: "12px", lineHeight: 1.6 }}>
                        <strong>Setup required:</strong> Replace <code className="bg-amber-100 px-1 rounded">YOUR_FORM_ID</code> in <code className="bg-amber-100 px-1 rounded">careers.tsx</code> with your Formspree form ID to activate email delivery to <strong>hr@zinovaa.com</strong>.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--zn-accent)] py-3.5 text-[var(--zn-primary)] transition hover:brightness-95 disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ fontSize: "15px", fontWeight: 700 }}
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>Send Application <Send size={15} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right sidebar — 30%, sticky */}
            <div className="lg:w-[260px] flex-shrink-0">
              <div className="sticky top-[72px] flex flex-col gap-4">
                {/* Role summary card */}
                <div className="rounded-2xl border border-[var(--zn-border)] bg-[var(--zn-surface)] p-5">
                  <h3 className="text-[var(--zn-primary)] mb-4" style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "0.04em" }}>ROLE SUMMARY</h3>
                  <dl className="flex flex-col gap-3">
                    {[
                      { label: "Department", value: job.dept },
                      { label: "Location", value: job.location },
                      { label: "Type", value: job.type },
                      { label: "Salary", value: job.salary },
                      { label: "Team Size", value: job.teamSize },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex justify-between items-start gap-2">
                        <dt className="text-[var(--zn-muted)]" style={{ fontSize: "12px" }}>{label}</dt>
                        <dd className="text-[var(--zn-primary)] text-right" style={{ fontSize: "13px", fontWeight: 500 }}>{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Apply button */}
                <button
                  onClick={() => {
                    const form = document.querySelector("form");
                    form?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--zn-accent)] py-3 text-[var(--zn-primary)] transition hover:brightness-95"
                  style={{ fontSize: "14px", fontWeight: 700 }}
                >
                  Apply Now <ArrowRight size={14} />
                </button>

                {/* Share */}
                <div className="rounded-2xl border border-[var(--zn-border)] bg-[var(--zn-surface)] p-4">
                  <div className="flex items-center gap-2 mb-3 text-[var(--zn-muted)]" style={{ fontSize: "12px", letterSpacing: "0.06em" }}>
                    <Share2 size={12} /> SHARE THIS ROLE
                  </div>
                  <div className="flex gap-2">
                    {[
                      { icon: <Linkedin size={16} />, label: "LinkedIn", href: "https://linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(window.location.href) },
                      { icon: <Twitter size={16} />, label: "Twitter", href: "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Share on ${s.label}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--zn-border)] text-[var(--zn-muted)] transition hover:bg-[var(--zn-primary)] hover:text-white hover:border-[var(--zn-primary)]"
                      >
                        {s.icon}
                      </a>
                    ))}
                    <button
                      onClick={handleCopy}
                      aria-label="Copy link"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--zn-border)] text-[var(--zn-muted)] transition hover:bg-[var(--zn-primary)] hover:text-white hover:border-[var(--zn-primary)]"
                    >
                      {copied ? <CheckCircle2 size={16} className="text-[var(--zn-accent-dark)]" /> : <Link2 size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

function Section3({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="text-[var(--zn-primary)] mb-3" style={{ fontSize: "17px", fontWeight: 700 }}>{title}</h3>
      <p className="text-[var(--zn-muted)]" style={{ fontSize: "15px", lineHeight: 1.7 }}>{body}</p>
    </div>
  );
}

function BulletSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-[var(--zn-primary)] mb-3" style={{ fontSize: "17px", fontWeight: 700 }}>{title}</h3>
      <ul className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--zn-accent-dark)]" />
            <span className="text-[var(--zn-muted)]" style={{ fontSize: "14px", lineHeight: 1.65 }}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────
   PAGE EXPORT
───────────────────────────────────────────── */

export function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const rolesRef = useRef<HTMLDivElement>(null);

  const scrollToRoles = () => {
    rolesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Hero onViewRoles={scrollToRoles} />
      <WhyZinovaa />
      <div ref={rolesRef}>
        <OpenPositions onOpen={setSelectedJob} />
      </div>
      <HiringProcess />
      <CultureSection />
      <TeamTestimonials />
      <CTABand onViewRoles={scrollToRoles} />

      {/* Job detail modal */}
      <AnimatePresence>
        {selectedJob && (
          <JobDetailModal key={selectedJob.id} job={selectedJob} onClose={() => setSelectedJob(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
