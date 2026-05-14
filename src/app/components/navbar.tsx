import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Cpu, Wifi, Globe, Smartphone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui-kit";
import weblogo from "../../assets/zinovaa-white-01.png";

const megaItems = [
  { icon: <Wifi size={20} />, title: "IoT", desc: "Connected device ecosystems.", href: "/internet-of-things" },
  { icon: <Cpu size={20} />, title: "Embedded Systems", desc: "Firmware & hardware engineering.", href: "/embedded-systems" },
  { icon: <Globe size={20} />, title: "Web Development", desc: "Performant, scalable web apps.", href: "/web-development" },
  { icon: <Smartphone size={20} />, title: "Mobile Apps", desc: "Native & cross-platform apps.", href: "/mobile-app-development" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "h-14 bg-[var(--zn-primary)]/90 backdrop-blur-md"
          : "h-[72px] bg-[var(--zn-primary)]"
      }`}
    >
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6 lg:px-10">
        <a href="#" className="flex items-center gap-2">
          <img src={weblogo} alt="Zinovaa Logo" className="h-12" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          <a href="/" className="zn-underline text-white/80 hover:text-white transition">Home</a>
          <div
            onMouseEnter={() => setMega(true)}
            onMouseLeave={() => setMega(false)}
            className="relative"
          >
            <a href="/our-services" className="zn-underline flex items-center gap-1 text-white/80 hover:text-white transition">
              What We Do <ChevronDown size={16} className={`transition ${mega ? "rotate-180" : ""}`} />
            </a>
          </div>
          <a href="/our-products" className="zn-underline text-white/80 hover:text-white transition">Our Products</a>
          <a href="/information" className="zn-underline text-white/80 hover:text-white transition">Information</a>
          <a href="/about" className="zn-underline text-white/80 hover:text-white transition">About</a>
          <a href="/careers" className="zn-underline text-white/80 hover:text-white transition">Careers</a>
        </nav>

        <div className="hidden lg:block">
          <a href="/contact"><Button>Contact Us</Button></a>
        </div>

        <button className="lg:hidden text-white" onClick={() => setDrawer(true)} aria-label="Open menu">
          <Menu size={24} />
        </button>
      </div>

      {/* Mega dropdown */}
      <AnimatePresence>
        {mega && (
          <motion.div
            onMouseEnter={() => setMega(true)}
            onMouseLeave={() => setMega(false)}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.18 } }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full overflow-hidden border-t border-white/10 bg-[var(--zn-primary)]"
          >
            <div className="mx-auto grid max-w-[1280px] grid-cols-4 gap-6 px-10 py-10">
              {megaItems.map((m, i) => (
                <motion.a
                  key={m.title}
                  href={m.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                  className="group flex flex-col gap-3 rounded-xl p-4 transition hover:bg-white/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-[var(--zn-accent)]">
                    {m.icon}
                  </div>
                  <h3 className="text-white" style={{ fontWeight: 600 }}>{m.title}</h3>
                  <p className="text-white/60" style={{ fontSize: "14px" }}>{m.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[var(--zn-accent)]" style={{ fontSize: "14px" }}>
                    Learn More <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[var(--zn-primary)] transition-transform duration-300 lg:hidden ${
          drawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <span className="text-white" style={{ fontWeight: 600 }}>Menu</span>
          <button className="text-white" onClick={() => setDrawer(false)} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-1 px-6 pt-4">
          {["Home", "What We Do", "Our Products", "Information", "About", "Careers"].map((l) => (
            <a key={l} href="#" className="py-4 text-white border-b border-white/10" style={{ fontSize: "18px" }}>
              {l}
            </a>
          ))}
          <div className="pt-6">
            <a href="/contact" onClick={() => setDrawer(false)}>
              <Button className="w-full">Contact Us</Button>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}