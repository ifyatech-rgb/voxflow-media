"use client";

import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  User,
  Search,
  Rocket,
  Settings,
  Star,
  LayoutGrid,
  DollarSign,
  Link2,
  Clock,
  TrendingUp,
  BarChart3,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

function useInView(offset = 50) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.1, rootMargin: `${offset}px` }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [offset]);

  return { ref, isInView };
}

function useCountUp(end: number, isInView: boolean, duration = 2000) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(easeOut(progress) * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, isInView, duration]);

  return value;
}

function useNavbarScroll() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#", label: "Pages", dropdown: true },
  { href: "#contact", label: "Contact" },
];

export default function ZyvroLanding() {
  const navbarScrolled = useNavbarScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroInView = useInView(0);

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* ========== NAVBAR ========== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          navbarScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
        style={{
          animation: "navbarSlide 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        <style jsx>{`
          @keyframes navbarSlide {
            from {
              transform: translateY(-100%);
            }
            to {
              transform: translateY(0);
            }
          }
        `}</style>
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded bg-[#3B6EF8] font-syne text-lg font-bold text-white">
              Z
            </div>
            <span className="font-syne text-xl font-bold text-white">
              Zyvro
            </span>
          </a>

          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-sm font-medium text-[#A0AEC0] transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#3B6EF8] transition-all duration-300 hover:w-full origin-center scale-x-0 hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#pricing"
              className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-[400ms] hover:brightness-110 hover:scale-[1.02] md:inline-block"
            >
              Get Template →
            </a>
            <button
              type="button"
              className="md:hidden rounded-lg p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden">
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-lg py-3 px-4 text-[#A0AEC0] hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#pricing"
                className="mt-2 rounded-full bg-white py-3 text-center text-sm font-semibold text-black"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Template →
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ========== HERO ========== */}
      <HeroSection heroInView={heroInView} />

      {/* ========== HOW IT WORKS ========== */}
      <HowItWorksSection />

      {/* ========== FEATURES BENTO ========== */}
      <FeaturesSection />

      {/* ========== BENEFITS ========== */}
      <BenefitsSection />

      {/* ========== PRICING ========== */}
      <PricingSection />

      {/* ========== INTEGRATIONS ========== */}
      <IntegrationsSection />

      {/* ========== TESTIMONIALS ========== */}
      <TestimonialsSection />

      {/* ========== FINAL CTA ========== */}
      <FinalCTASection />

      {/* ========== FOOTER ========== */}
      <FooterSection />
    </div>
  );
}

function HeroSection({ heroInView }: { heroInView: boolean }) {
  const { ref, isInView } = useInView();
  const stat1 = useCountUp(275, isInView);
  const stat2 = useCountUp(5, isInView);
  const delay = (ms: number) => ({
    transition: `opacity 400ms cubic-bezier(0.16, 1, 0.3, 1) ${ms}ms, transform 400ms cubic-bezier(0.16, 1, 0.3, 1) ${ms}ms`,
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? "translateY(0)" : "translateY(30px)",
  });

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#000000] px-6 pt-24 pb-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[length:100%_100%] opacity-15"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, rgba(59,110,248,0.4) 0%, transparent 60%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div
          style={delay(0)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0D1117] px-4 py-2 text-sm text-[#A0AEC0]"
        >
          <Sparkles className="h-4 w-4 text-[#3B6EF8]" />
          Automate Your Outreach
        </div>
        <h1
          style={delay(200)}
          className="font-syne text-[48px] font-extrabold leading-[1.1] tracking-tight text-white md:text-[80px]"
        >
          Find Clients on
          <br />
          Autopilot with AI
        </h1>
        <p
          style={delay(400)}
          className="mx-auto mt-6 max-w-2xl text-lg text-[#A0AEC0] md:text-xl"
        >
          Tell AI who you&apos;re looking for. It finds leads, sends outreach
          across 5 channels, handles replies, and books appointments.
        </p>
        <div
          style={delay(600)}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3B6EF8] to-[#5B82FA] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#3B6EF8]/30 transition-all duration-[400ms] hover:brightness-110 hover:scale-[1.02] hover:shadow-[#3B6EF8]/50"
          >
            Get Started
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full border border-[#1E293B] px-8 py-4 text-base font-medium text-white transition-all duration-[400ms] hover:border-[#3B6EF8] hover:bg-white/5"
          >
            See How It Works
          </a>
        </div>
        <div
          style={delay(800)}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-[#1E293B] pt-16"
        >
          <div className="flex flex-col items-center">
            <span className="font-syne text-3xl font-bold text-white">
              {stat1}M+
            </span>
            <span className="text-sm text-[#A0AEC0]">Leads in Database</span>
          </div>
          <div className="h-12 w-px bg-[#1E293B]" />
          <div className="flex flex-col items-center">
            <span className="font-syne text-3xl font-bold text-white">
              {stat2}
            </span>
            <span className="text-sm text-[#A0AEC0]">Outreach Channels</span>
          </div>
          <div className="h-12 w-px bg-[#1E293B]" />
          <div className="flex flex-col items-center">
            <span className="font-syne text-3xl font-bold text-white">24/7</span>
            <span className="text-sm text-[#A0AEC0]">AI Setter Active</span>
          </div>
        </div>
        <div
          style={{
            ...delay(600),
            transform: heroInView ? "scale(1) translateY(0)" : "scale(0.95) translateY(30px)",
            opacity: heroInView ? 1 : 0,
          }}
          className="mt-20"
        >
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div
      className="animate-float mx-auto max-w-4xl rounded-2xl border border-transparent p-[1px]"
      style={{
        background: "linear-gradient(135deg, #3B6EF8, #8B5CF6)",
        transform: "perspective(1000px) rotateX(5deg)",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
      }}
    >
      <div className="overflow-hidden rounded-[15px] bg-[#0D1117]">
        <div className="flex items-center gap-2 border-b border-[#1E293B] px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <div className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="ml-4 flex-1 rounded-lg bg-[#1E293B]/50 px-4 py-2 text-left text-xs text-[#A0AEC0]">
            app.zyvro.com/dashboard
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-6 md:grid-cols-3">
          {[60, 75, 45, 90, 55, 70].map((h, i) => (
            <div
              key={i}
              className="flex items-end gap-1 rounded-lg bg-[#1E293B]/30 p-2"
              style={{ height: 80 }}
            >
              <div
                className="flex-1 rounded bg-[#3B6EF8]"
                style={{ height: `${h}%` }}
              />
              <div
                className="flex-1 rounded bg-[#3B6EF8]/70"
                style={{ height: `${(h + 10) % 100}%` }}
              />
            </div>
          ))}
        </div>
        <div className="border-t border-[#1E293B] p-4">
          <div className="flex items-center gap-3 rounded-xl bg-[#1E293B]/50 p-4">
            <div className="flex gap-1">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-1 rounded-full bg-[#3B6EF8] animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <div>
              <p className="font-medium text-white">AI Assistant</p>
              <p className="text-sm text-[#A0AEC0]">Ready to find leads</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HowItWorksSection() {
  const { ref, isInView } = useInView();
  const stagger = (i: number) => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 400ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms, transform 400ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms`,
  });

  const steps = [
    {
      icon: User,
      label: "STEP 1",
      title: "Describe Your Ideal Client",
      body: "Chat with AI to define your target market. Tell it who you want to reach — industry, title, location, size.",
    },
    {
      icon: Search,
      label: "STEP 2",
      title: "AI Finds 200+ Leads",
      body: "Our system searches LinkedIn, Google Maps, and Apollo to find verified contacts that match your ICP.",
    },
    {
      icon: Rocket,
      label: "STEP 3",
      title: "Outreach Runs Automatically",
      body: "Campaigns fire across email, LinkedIn, SMS, and Instagram. AI handles all replies and books appointments.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#000000] py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div style={stagger(0)} className="flex justify-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0D1117] px-4 py-2 text-sm text-[#A0AEC0]">
            <Settings className="h-4 w-4 text-[#3B6EF8]" />
            How It Works
          </div>
        </div>
        <h2
          style={stagger(1)}
          className="font-syne text-center text-3xl font-bold text-white md:text-4xl"
        >
          Get Started in Just Few Simple Steps
        </h2>
        <p
          style={stagger(2)}
          className="mx-auto mt-4 max-w-2xl text-center text-[#A0AEC0]"
        >
          One platform to manage it all, so your team can focus on progress, not
          process.
        </p>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.label}
              style={stagger(3 + i)}
              className="rounded-2xl border border-[#1E293B] bg-[#0D1117] p-8 transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3B6EF8]/20"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#3B6EF8]/20 text-[#3B6EF8]">
                <step.icon className="h-7 w-7" />
              </div>
              <span className="text-xs font-medium uppercase tracking-wider text-[#3B6EF8]">
                {step.label}
              </span>
              <h3 className="mt-2 font-syne text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-[#A0AEC0]">{step.body}</p>
            </div>
          ))}
        </div>
        <div
          style={stagger(6)}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#1E293B] bg-[#0D1117] p-8 md:flex-row"
        >
          <p className="font-syne text-xl font-bold text-white">
            Setup So Simple, It Just Works — Let&apos;s Set Things Up!
          </p>
          <a
            href="#pricing"
            className="shrink-0 rounded-full bg-gradient-to-r from-[#3B6EF8] to-[#5B82FA] px-8 py-3 font-bold text-white transition-all duration-[400ms] hover:brightness-110 hover:scale-[1.02]"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const { ref, isInView } = useInView();
  const stagger = (i: number) => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 400ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms, transform 400ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms`,
  });

  const cards = [
    {
      size: "large" as const,
      title: "AI Lead Scoring",
      body: "Every lead scored 0-100 by AI so you focus on the hottest prospects first.",
      visual: "orb",
      badge: "+15% Lead Score",
    },
    {
      size: "medium" as const,
      title: "Continual Campaign Improvement",
      body: "AI learns which messages get replies and auto-optimizes your outreach sequences.",
      visual: "bars",
      header: "Revenue trend / Summary Statistics",
    },
    {
      size: "small" as const,
      title: "Scalable Interface",
      body: "Dashboard grows with your business from 500 to 50,000 leads.",
      visual: "browser",
    },
    {
      size: "small" as const,
      title: "Intelligent Inbox",
      body: "One unified inbox for all channels — email, LinkedIn, SMS, Instagram.",
      visual: "list",
    },
    {
      size: "medium" as const,
      title: "Effortless Onboarding",
      body: "Describe your ideal client in plain English. AI handles the rest in minutes.",
      visual: "chat",
    },
    {
      size: "large" as const,
      title: "Actionable Analytics",
      body: "Track reply rates, booking rates, and revenue attribution per campaign.",
      visual: "line",
    },
  ];

  return (
    <section id="features" className="bg-[#000000] py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div style={stagger(0)} className="flex justify-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0D1117] px-4 py-2 text-sm text-[#A0AEC0]">
            <Star className="h-4 w-4 text-[#3B6EF8]" />
            Features
          </div>
        </div>
        <h2
          style={stagger(1)}
          className="font-syne text-center text-3xl font-bold text-white md:text-4xl"
        >
          The Smartest Way to Automate Outreach
        </h2>
        <p
          style={stagger(2)}
          className="mx-auto mt-4 max-w-2xl text-center text-[#A0AEC0]"
        >
          Find leads, send campaigns, handle replies and book meetings — all
          from one platform.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
          {cards.map((card, i) => (
            <div
              key={i}
              style={stagger(3 + i)}
              className={`rounded-2xl border border-[#1E293B] bg-[#0D1117] p-6 transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3B6EF8]/20 ${
                card.size === "large" ? "md:row-span-1" : ""
              } ${card.size === "large" ? "md:col-span-1" : ""}`}
            >
              <div className="relative flex h-48 flex-col">
                {card.visual === "orb" && (
                  <>
                    <div
                      className="absolute inset-0 rounded-xl opacity-80"
                      style={{
                        background: "radial-gradient(circle at 30% 30%, rgba(59,110,248,0.4), transparent 60%)",
                      }}
                    />
                    <div
                      className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
                      style={{
                        background: "radial-gradient(circle, rgba(59,110,248,0.8), transparent)",
                        boxShadow: "0 0 60px rgba(59,110,248,0.5)",
                      }}
                    />
                    {card.badge && (
                      <span className="absolute right-0 top-0 rounded-lg bg-[#3B6EF8]/20 px-3 py-1 text-sm font-medium text-[#3B6EF8]">
                        {card.badge}
                      </span>
                    )}
                  </>
                )}
                {card.visual === "bars" && (
                  <div className="flex h-32 items-end gap-2">
                    {[40, 65, 45, 80, 55, 70, 90].map((h, j) => (
                      <div
                        key={j}
                        className="flex-1 rounded-t bg-[#3B6EF8] transition-all duration-500"
                        style={{
                          height: isInView ? `${h}%` : "0%",
                          transitionDelay: `${j * 50}ms`,
                        }}
                      />
                    ))}
                  </div>
                )}
                {card.visual === "browser" && (
                  <div className="rounded-lg border border-[#1E293B] bg-[#1E293B]/30 p-2">
                    <div className="flex gap-1 pb-2">
                      <div className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                      <div className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
                      <div className="h-2 w-2 rounded-full bg-[#28C840]" />
                    </div>
                    <div className="h-20 rounded bg-[#0D1117]" />
                  </div>
                )}
                {card.visual === "list" && (
                  <div className="space-y-2">
                    {[70, 90, 60, 85].map((w, j) => (
                      <div
                        key={j}
                        className="h-3 rounded-full bg-[#1E293B]"
                        style={{ width: `${w}%` }}
                      />
                    ))}
                  </div>
                )}
                {card.visual === "chat" && (
                  <div className="rounded-xl border border-[#1E293B] bg-[#1E293B]/30 p-4">
                    <div className="mb-3 h-2 w-3/4 rounded bg-[#3B6EF8]/50" />
                    <div className="h-10 rounded-lg border border-[#3B6EF8]/50 bg-[#0D1117] px-3 flex items-center text-sm text-[#A0AEC0]">
                      Ask AI...
                    </div>
                  </div>
                )}
                {card.visual === "line" && (
                  <div className="flex items-end justify-between gap-1">
                    {[20, 35, 30, 50, 45, 70, 65, 85].map((h, j) => (
                      <div
                        key={j}
                        className="h-2 flex-1 rounded-full bg-[#3B6EF8]"
                        style={{ height: 4, marginTop: `${100 - h}%` }}
                      />
                    ))}
                  </div>
                )}
              </div>
              {card.header && (
                <p className="mt-2 text-xs text-[#A0AEC0]">{card.header}</p>
              )}
              <h3 className="mt-4 font-syne text-lg font-bold text-white">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-[#A0AEC0]">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const { ref, isInView } = useInView();
  const stagger = (i: number) => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 400ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms, transform 400ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms`,
  });

  const benefits = [
    { icon: Clock, title: "Optimize Time & Effort", body: "Spend less time on manual outreach and more on closing deals." },
    { icon: TrendingUp, title: "Boost Productivity", body: "Scale your pipeline without scaling your team." },
    { icon: BarChart3, title: "Data-Driven Decisions", body: "Every action is measured and optimized by AI." },
    { icon: MapPin, title: "Remote Friendly", body: "Run campaigns from anywhere, anytime." },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[#000000] to-[#0D1117] py-24 px-6"
      ref={ref}
    >
      <div className="mx-auto max-w-4xl">
        <div style={stagger(0)} className="flex justify-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0D1117] px-4 py-2 text-sm text-[#A0AEC0]">
            <LayoutGrid className="h-4 w-4 text-[#3B6EF8]" />
            Benefits
          </div>
        </div>
        <h2
          style={stagger(1)}
          className="font-syne text-center text-3xl font-bold text-white md:text-4xl"
        >
          Top AI Advantages for Your Business
        </h2>
        <p
          style={stagger(2)}
          className="mx-auto mt-4 max-w-xl text-center text-[#A0AEC0]"
        >
          We simplify your workflow so you can focus on what matters most:
          client acquisition.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-3">
          <div style={stagger(3)} className="flex flex-col items-center rounded-2xl border border-[#1E293B] bg-[#0D1117] p-8 text-center">
            <Clock className="h-12 w-12 text-white" strokeWidth={1.5} />
            <h3 className="mt-4 font-syne text-lg font-bold text-white">{benefits[0].title}</h3>
            <p className="mt-2 text-[#A0AEC0]">{benefits[0].body}</p>
          </div>
          <div className="hidden md:block" />
          <div style={stagger(4)} className="flex flex-col items-center rounded-2xl border border-[#1E293B] bg-[#0D1117] p-8 text-center">
            <TrendingUp className="h-12 w-12 text-white" strokeWidth={1.5} />
            <h3 className="mt-4 font-syne text-lg font-bold text-white">{benefits[1].title}</h3>
            <p className="mt-2 text-[#A0AEC0]">{benefits[1].body}</p>
          </div>
          <div className="hidden md:block" />
          <div
            style={stagger(5)}
            className="flex flex-col items-center justify-center rounded-2xl border border-[#1E293B] bg-[#0D1117] p-8 md:col-span-1 md:row-span-1"
          >
            <div className="animate-pulse-glow flex h-24 w-24 items-center justify-center rounded-full bg-[#0D1117] border border-[#3B6EF8]/30">
              <span className="font-syne text-3xl font-extrabold text-[#3B6EF8]">Z</span>
            </div>
            <span className="mt-3 font-syne text-xl font-bold text-white">Zyvro</span>
          </div>
          <div className="hidden md:block" />
          <div style={stagger(6)} className="flex flex-col items-center rounded-2xl border border-[#1E293B] bg-[#0D1117] p-8 text-center">
            <BarChart3 className="h-12 w-12 text-white" strokeWidth={1.5} />
            <h3 className="mt-4 font-syne text-lg font-bold text-white">{benefits[2].title}</h3>
            <p className="mt-2 text-[#A0AEC0]">{benefits[2].body}</p>
          </div>
          <div className="hidden md:block" />
          <div style={stagger(7)} className="flex flex-col items-center rounded-2xl border border-[#1E293B] bg-[#0D1117] p-8 text-center">
            <MapPin className="h-12 w-12 text-white" strokeWidth={1.5} />
            <h3 className="mt-4 font-syne text-lg font-bold text-white">{benefits[3].title}</h3>
            <p className="mt-2 text-[#A0AEC0]">{benefits[3].body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const { ref, isInView } = useInView();
  const [yearly, setYearly] = useState(false);
  const stagger = (i: number) => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 400ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms, transform 400ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms`,
  });

  const plans = [
    {
      name: "Starter",
      price: 97,
      features: ["500 leads/mo", "Email outreach only", "1 campaign", "Basic analytics", "1 user"],
      cta: "Choose Plan",
      featured: false,
      outline: true,
    },
    {
      name: "Growth",
      price: 297,
      features: [
        "2,000 leads/mo",
        "Email + LinkedIn + SMS",
        "5 campaigns",
        "Advanced analytics",
        "AI Setter bot",
        "3 users",
      ],
      cta: "Choose Plan",
      featured: true,
      outline: false,
    },
    {
      name: "Agency",
      price: 697,
      features: [
        "Unlimited leads",
        "All 5 channels",
        "Unlimited campaigns",
        "White-label",
        "Full analytics",
        "5 users",
      ],
      cta: "Choose Plan",
      featured: false,
      outline: true,
    },
  ];

  return (
    <section id="pricing" className="bg-[#000000] py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div style={stagger(0)} className="flex justify-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0D1117] px-4 py-2 text-sm text-[#A0AEC0]">
            <DollarSign className="h-4 w-4 text-[#3B6EF8]" />
            Pricing Plans
          </div>
        </div>
        <h2
          style={stagger(1)}
          className="font-syne text-center text-3xl font-bold text-white md:text-4xl"
        >
          Plans Built to Scale With Your Business
        </h2>
        <div style={stagger(2)} className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0D1117] p-1">
            <button
              type="button"
              onClick={() => setYearly(false)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                !yearly ? "bg-[#3B6EF8] text-white" : "text-[#A0AEC0] hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setYearly(true)}
              className={`relative rounded-full px-6 py-2 text-sm font-medium transition-all ${
                yearly ? "bg-[#3B6EF8] text-white" : "text-[#A0AEC0] hover:text-white"
              }`}
            >
              Yearly
              <span className="absolute -right-2 -top-1 rounded bg-green-500/80 px-1.5 text-xs text-white">
                Save 20%
              </span>
            </button>
          </div>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              style={stagger(3 + i)}
              className={`relative rounded-2xl border bg-[#0D1117] p-8 ${
                plan.featured
                  ? "scale-105 border-[#3B6EF8] shadow-lg shadow-[#3B6EF8]/20 md:scale-105"
                  : "border-[#1E293B]"
              } transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3B6EF8]/20`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#3B6EF8] to-[#5B82FA] px-4 py-1 text-sm font-bold text-white">
                  Best Value
                </div>
              )}
              <h3 className="font-syne text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="font-syne text-4xl font-bold text-white">
                  ${yearly ? plan.price * 10 : plan.price}
                </span>
                <span className="text-[#A0AEC0]">/mo</span>
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[#A0AEC0]">
                    <span className="text-[#3B6EF8]">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 block w-full rounded-full py-3 text-center font-bold transition-all duration-[400ms] hover:brightness-110 hover:scale-[1.02] ${
                  plan.outline
                    ? "border border-[#1E293B] text-white hover:border-[#3B6EF8]"
                    : "bg-gradient-to-r from-[#3B6EF8] to-[#5B82FA] text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntegrationsSection() {
  const { ref, isInView } = useInView();
  const stagger = (i: number) => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 400ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms, transform 400ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms`,
  });

  const integrations = [
    "Gmail",
    "LinkedIn",
    "Calendly",
    "Twilio",
    "Instantly",
    "Apify",
    "Stripe",
    "Slack",
  ];

  const angleStep = (2 * Math.PI) / 8;
  const radius = 120;

  return (
    <section id="integrations" className="bg-[#000000] py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <div style={stagger(0)} className="flex justify-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0D1117] px-4 py-2 text-sm text-[#A0AEC0]">
            <Link2 className="h-4 w-4 text-[#3B6EF8]" />
            Integration
          </div>
        </div>
        <h2
          style={stagger(1)}
          className="font-syne text-center text-3xl font-bold text-white md:text-4xl"
        >
          Built to Work Perfectly With Your Existing Tools
        </h2>
        <p
          style={stagger(2)}
          className="mx-auto mt-4 max-w-xl text-center text-[#A0AEC0]"
        >
          Connect the tools your outreach stack already depends on.
        </p>
        <div style={stagger(3)} className="relative mx-auto mt-20 flex h-[380px] w-full max-w-lg items-center justify-center">
          <svg
            className="absolute inset-0 h-full w-full animate-spin-slow"
            style={{ animationDuration: "60s" }}
          >
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B6EF8" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
            {integrations.map((_, i) => {
              const angle = i * angleStep - Math.PI / 2;
              const x = 200 + radius * Math.cos(angle);
              const y = 190 + radius * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1="50%"
                  y1="50%"
                  x2={x}
                  y2={y}
                  stroke="url(#lineGrad)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  className="animate-dash-flow"
                />
              );
            })}
          </svg>
          <div className="absolute flex h-24 w-24 items-center justify-center rounded-full bg-[#0D1117] border-2 border-[#3B6EF8] shadow-lg shadow-[#3B6EF8]/40">
            <span className="font-syne text-2xl font-extrabold text-[#3B6EF8]">Z</span>
          </div>
          {integrations.map((name, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            return (
              <div
                key={name}
                className="absolute flex h-14 w-14 items-center justify-center rounded-xl border border-[#1E293B] bg-[#0D1117] text-[#3B6EF8] transition-all duration-[400ms] hover:-translate-y-1 hover:border-[#3B6EF8] hover:shadow-lg hover:shadow-[#3B6EF8]/20"
                style={{
                  left: `calc(50% + ${x}px - 28px)`,
                  top: `calc(50% + ${y}px - 28px)`,
                }}
              >
                <span className="text-xs font-bold">{name.slice(0, 2)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { ref, isInView } = useInView();
  const stagger = (i: number) => ({
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 400ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms, transform 400ms cubic-bezier(0.16, 1, 0.3, 1) ${i * 100}ms`,
  });

  const testimonials = [
    {
      quote:
        "Zyvro booked us 14 appointments in our first week. The AI setter replies like a real human.",
      name: "James K.",
      role: "Marketing Agency Owner",
      initials: "JK",
    },
    {
      quote:
        "We replaced 3 tools with Zyvro and cut our outreach cost by 60% while 3x-ing reply rates.",
      name: "Priya S.",
      role: "B2B Consultant",
      initials: "PS",
    },
    {
      quote:
        "The onboarding chat blew my mind. Told it my ICP and had 200 leads ready in under 5 minutes.",
      name: "Carlos M.",
      role: "SMMA Founder",
      initials: "CM",
    },
  ];

  return (
    <section id="testimonials" className="bg-[#000000] py-24 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div style={stagger(0)} className="flex justify-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0D1117] px-4 py-2 text-sm text-[#A0AEC0]">
            <Star className="h-4 w-4 text-[#3B6EF8]" />
            Testimonial
          </div>
        </div>
        <h2
          style={stagger(1)}
          className="font-syne text-center text-3xl font-bold text-white md:text-4xl"
        >
          Our User Stories
        </h2>
        <p
          style={stagger(2)}
          className="mx-auto mt-4 max-w-xl text-center text-[#A0AEC0]"
        >
          See how agencies and service businesses are landing clients on
          autopilot with Zyvro.
        </p>
        <div className="mt-16 flex gap-8 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              style={stagger(3 + i)}
              className="min-w-[300px] flex-1 rounded-2xl border border-[#1E293B] bg-[#0D1117] p-8 transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3B6EF8]/20"
            >
              <p className="text-4xl font-serif text-[#3B6EF8]/30">&ldquo;</p>
              <div className="flex gap-1 text-[#3B6EF8]">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-[#A0AEC0]">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#3B6EF8]/20 font-syne text-sm font-bold text-[#3B6EF8]">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-[#A0AEC0]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  const { ref, isInView } = useInView();
  const style = {
    opacity: isInView ? 1 : 0,
    transform: isInView ? "translateY(0)" : "translateY(30px)",
    transition: "opacity 400ms cubic-bezier(0.16, 1, 0.3, 1), transform 400ms cubic-bezier(0.16, 1, 0.3, 1)",
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0D1117] py-24 px-6"
      ref={ref}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(59,110,248,0.5) 0%, transparent 60%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div style={style} className="flex justify-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#1E293B] bg-[#0D1117] px-4 py-2 text-sm text-[#A0AEC0]">
            <User className="h-4 w-4 text-[#3B6EF8]" />
            Sign Up
          </div>
        </div>
        <h2
          style={style}
          className="font-syne text-3xl font-extrabold text-white md:text-5xl"
        >
          Start Getting Clients Tonight
        </h2>
        <p style={style} className="mt-4 text-lg text-[#A0AEC0]">
          No credit card required. Set up in under 5 minutes.
        </p>
        <div style={style} className="mt-10">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#3B6EF8] to-[#5B82FA] px-12 py-4 text-lg font-bold text-white shadow-lg shadow-[#3B6EF8]/30 transition-all duration-[400ms] hover:brightness-110 hover:scale-[1.02]"
          >
            Get Started
          </a>
        </div>
        <div
          className="mt-16 mx-auto max-w-md rounded-2xl border border-[#1E293B] bg-[#0D1117] p-[1px]"
          style={{
            ...style,
            background: "linear-gradient(135deg, #3B6EF8, #8B5CF6)",
            transform: isInView ? "perspective(1000px) rotateX(5deg) translateY(0)" : "perspective(1000px) rotateX(5deg) translateY(30px)",
          }}
        >
          <div className="overflow-hidden rounded-[15px] bg-[#0D1117] p-4">
            <div className="flex gap-1.5 pb-2">
              <div className="h-2 w-2 rounded-full bg-[#FF5F57]" />
              <div className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
              <div className="h-2 w-2 rounded-full bg-[#28C840]" />
            </div>
            <div className="rounded-lg border border-[#3B6EF8]/50 bg-[#1E293B]/30 p-4">
              <p className="text-sm text-[#A0AEC0]">Describe your ideal client...</p>
              <p className="mt-2 text-white">AI is finding 200+ leads for you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative bg-[#000000] pt-20 pb-8 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-[#3B6EF8] font-syne text-lg font-bold text-white">
                Z
              </div>
              <span className="font-syne text-xl font-bold text-white">Zyvro</span>
            </div>
            <p className="mt-4 text-sm text-[#A0AEC0]">
              Automate client acquisition. Book appointments on autopilot.
            </p>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg border border-[#1E293B] bg-[#0D1117] px-4 py-2 text-sm text-white placeholder:text-[#A0AEC0] focus:border-[#3B6EF8] focus:outline-none"
              />
              <button
                type="button"
                className="rounded-lg bg-[#3B6EF8] px-4 py-2 text-sm font-medium text-white transition-all hover:brightness-110"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-syne font-bold text-white">Navigation</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#A0AEC0]">
              {["Home", "About", "Features", "Pricing", "Blog", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white">{item}</a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-syne font-bold text-white">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#A0AEC0]">
              {["Privacy Policy", "Terms", "License", "Changelog"].map(
                (item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white">{item}</a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="font-syne font-bold text-white">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-[#A0AEC0]">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> hello@zyvro.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +1 (555) 000-0000
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> San Francisco, CA
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[#1E293B] pt-8 md:flex-row">
          <p className="text-sm text-[#A0AEC0]">
            © 2025 Zyvro. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Facebook", "Instagram", "X", "LinkedIn"].map((name) => (
              <a
                key={name}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1E293B] text-[#A0AEC0] transition-all hover:border-[#3B6EF8] hover:bg-[#3B6EF8] hover:text-white"
                aria-label={name}
              >
                <span className="text-xs font-bold">{name.slice(0, 1)}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <p
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 font-syne text-[12vw] font-extrabold text-white opacity-[0.03] whitespace-nowrap"
        aria-hidden
      >
        ZYVRO
      </p>
    </footer>
  );
}
