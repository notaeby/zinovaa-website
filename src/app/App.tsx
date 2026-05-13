import { useEffect, useState } from "react";
import { Navbar } from "./components/navbar";
import {
  Hero, CoreServices, OurStory, Industries, Testimonials,
  DesignProcess, WhyChooseUs, WorkProcess, ContactBand, BlogPosts, Footer,
} from "./components/sections";
import { ServicesPage } from "./pages/services";
import { ServiceDetailPage, serviceContent } from "./pages/service-detail";
import { ProductsPage } from "./pages/products";
import { AboutPage } from "./pages/about";
import { InformationPage } from "./pages/information";
import { BlogsPage } from "./pages/blogs";
import { BlogPostPage } from "./pages/blog-post";
import { ContactPage } from "./pages/contact";
import { CareersPage } from "./pages/careers";
import { PageTransition } from "./components/motion";

function HomePage() {
  return (
    <>
      <Hero />
      <CoreServices />
      <OurStory />
      <Industries />
      <Testimonials />
      <DesignProcess />
      <WhyChooseUs />
      <WorkProcess />
      <ContactBand />
      <BlogPosts />
    </>
  );
}

export default function App() {
  const [route, setRoute] = useState<string>(
    typeof window !== "undefined" ? window.location.hash.replace("#", "") || "/" : "/"
  );

  useEffect(() => {
    const onHash = () => {
      setRoute(window.location.hash.replace("#", "") || "/");
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const renderRoute = () => {
    const slug = route.replace(/^\//, "");
    if (route === "/our-services") return <ServicesPage />;
    if (route === "/our-products") return <ProductsPage />;
    if (route === "/about") return <AboutPage />;
    if (route === "/information") return <InformationPage />;
    if (route === "/blogs") return <BlogsPage />;
    if (route.startsWith("/blog/")) return <BlogPostPage slug={route.replace("/blog/", "")} />;
    if (route === "/contact") return <ContactPage />;
    if (route === "/careers") return <CareersPage />;
    if (slug in serviceContent) return <ServiceDetailPage slug={slug} />;
    return <HomePage />;
  };

  return (
    <div className="min-h-screen w-full bg-white" style={{ fontFamily: '"Inter", "Space Grotesk", system-ui, sans-serif' }}>
      <style>{`
        :root {
          --zn-primary: #0B0B1F;
          --zn-accent: #D4FF3F;
          --zn-accent-dark: #9BC516;
          --zn-surface: #F7F7F4;
          --zn-surface-alt: #EEEEE8;
          --zn-muted: #6B6B7A;
          --zn-border: rgba(11, 11, 31, 0.08);

          --ease-default: cubic-bezier(0.22, 1, 0.36, 1);
          --ease-in: cubic-bezier(0.4, 0, 1, 1);
          --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
          --duration-fast: 150ms;
          --duration-mid: 300ms;
          --duration-slow: 500ms;
        }

        @keyframes zn-hue-drift {
          0%, 100% { filter: hue-rotate(0deg); }
          50%     { filter: hue-rotate(-12deg); }
        }
        @keyframes zn-float {
          0%, 100% { transform: translateY(0); }
          50%     { transform: translateY(-10px); }
        }
        @keyframes zn-shimmer {
          0%   { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
        @keyframes zn-wiggle {
          0%, 100% { transform: rotate(0deg); }
          30% { transform: rotate(-15deg); }
          60% { transform: rotate(10deg); }
        }
        @keyframes zn-ping {
          0%   { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        .zn-hero-hue    { animation: zn-hue-drift 6000ms ease-in-out infinite; }
        .zn-float       { animation: zn-float 4000ms ease-in-out infinite; }
        .zn-wiggle:hover { animation: zn-wiggle 400ms var(--ease-spring); }

        /* Shimmer overlay for primary buttons */
        .zn-shimmer { position: relative; overflow: hidden; isolation: isolate; }
        .zn-shimmer::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(100deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%);
          transform: translateX(-120%);
          pointer-events: none;
          transition: transform 0ms;
        }
        .zn-shimmer:hover::after { animation: zn-shimmer 600ms var(--ease-default); }

        /* Animated underline for nav links */
        .zn-underline { position: relative; }
        .zn-underline::after {
          content: "";
          position: absolute; left: 0; bottom: -4px;
          height: 2px; width: 100%;
          background: var(--zn-accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 200ms var(--ease-default);
        }
        .zn-underline:hover::after { transform: scaleX(1); }

        /* Focus line for form fields */
        .zn-focus-line { position: relative; }
        .zn-focus-line::after {
          content: "";
          position: absolute; left: 0; right: 0; bottom: 0;
          height: 2px;
          background: var(--zn-accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 220ms var(--ease-default);
        }
        .zn-focus-line:focus-within::after { transform: scaleX(1); }

        /* 3D depth helpers */
        html { scroll-behavior: smooth; }
        .zn-perspective { perspective: 1200px; perspective-origin: 50% 30%; }
        .zn-3d { transform-style: preserve-3d; }
        .zn-depth-bg { transform: translateZ(-120px) scale(1.12); }
        .zn-depth-mid { transform: translateZ(-40px) scale(1.04); }
        .zn-depth-fg { transform: translateZ(40px); }
        .zn-card-3d {
          transform-style: preserve-3d;
          transition: transform 400ms var(--ease-default), box-shadow 400ms var(--ease-default);
          will-change: transform;
        }
        .zn-card-3d:hover {
          transform: translateY(-6px) rotateX(2deg) rotateY(-2deg);
          box-shadow: 0 30px 60px -20px rgba(3,2,19,0.25), 0 0 0 1px rgba(212,255,63,0.15);
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.001ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.001ms !important;
          }
        }
      `}</style>
      <Navbar />
      <main className="zn-perspective">
        <PageTransition routeKey={route}>{renderRoute()}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}