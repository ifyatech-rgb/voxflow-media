"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState, useEffect } from "react";

type Review = {
  text: string;
  name: string;
  company: string;
  trade: string;
};

const reviewsRow1: Review[] = [
  {
    text: "We went from a few calls a week to a steady stream of booked estimates.",
    name: "Mark H.",
    company: "Summit Roofing Co.",
    trade: "Roofing",
  },
  {
    text: "The AI follow up keeps our pipeline full while my crew focuses on installs.",
    name: "Danielle R.",
    company: "BrightView Kitchens",
    trade: "Kitchen Remodeling",
  },
  {
    text: "Every lead is exclusive and ready to talk about a real project.",
    name: "Carlos M.",
    company: "Prime Home Exteriors",
    trade: "Siding",
  },
  {
    text: "Best return on ad spend we have seen in ten years of running marketing.",
    name: "Steve P.",
    company: "Evergreen Windows",
    trade: "Windows and Doors",
  },
  {
    text: "Our calendar is booked out weeks in advance with qualified appointments.",
    name: "Lauren K.",
    company: "Northstar Bathrooms",
    trade: "Bathroom Remodeling",
  },
  {
    text: "Setup was simple and the team handles everything from ads to follow up.",
    name: "Tom B.",
    company: "Precision Painting",
    trade: "Painting",
  },
  {
    text: "We finally stopped chasing low quality shared leads from marketplaces.",
    name: "James L.",
    company: "Reliant Home Pros",
    trade: "General Remodeling",
  },
  {
    text: "The 30 day guarantee made it a no brainer and they delivered.",
    name: "Amber C.",
    company: "PureAir Comfort",
    trade: "HVAC",
  },
];

const reviewsRow2: Review[] = [
  {
    text: "Shows up in our calendar as booked jobs instead of names on a spreadsheet.",
    name: "Kevin D.",
    company: "Metro Garage Makeovers",
    trade: "Garage Remodeling",
  },
  {
    text: "Our reps love that leads are already warmed up before the first call.",
    name: "Rachel F.",
    company: "Coastal Deck and Patio",
    trade: "Decks",
  },
  {
    text: "We cut our no show rate way down by using their reminders and follow up.",
    name: "Mike G.",
    company: "ClearView Glass",
    trade: "Windows and Glass",
  },
  {
    text: "They manage the tech so we can stay focused on installs and production.",
    name: "Olivia S.",
    company: "Sunrise Solar Roofs",
    trade: "Solar and Roofing",
  },
  {
    text: "Our cost per booked appointment dropped and close rates went up.",
    name: "Brian T.",
    company: "Solid Stone Countertops",
    trade: "Countertops",
  },
  {
    text: "The team actually understands home improvement and how homeowners buy.",
    name: "Sophie W.",
    company: "BlueRiver Remodeling",
    trade: "Remodeling",
  },
  {
    text: "Exclusive leads only and they hit the results they promised.",
    name: "Ethan R.",
    company: "Peak Performance Roofing",
    trade: "Roofing",
  },
  {
    text: "We went from hoping for calls to knowing what our next thirty days look like.",
    name: "Hannah J.",
    company: "GreenLeaf Exteriors",
    trade: "Exterior Remodeling",
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#how-it-works") {
      const el = document.getElementById("how-it-works");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        color: "white",
        fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        overflowX: "hidden",
      }}
    >
      <style>{`
  * { box-sizing: border-box; }

  .max-width-container { max-width: 1120px; margin: 0 auto; }

  .hero-section { padding-bottom: 80px; }
  .hero-dashboard-card { display: flex; }

  .process-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 16px; }
  .stats-bar { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); }

  .bento-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }
  .bento-wide { grid-row: span 2; }

  .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

  .testimonial-stats-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }

  .reviews-row { display: flex; gap: 16px; width: max-content; }

  @keyframes marquee-left {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes marquee-right {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }

  .marquee-track {
    animation: marquee-left 40s linear infinite;
  }

  .marquee-track-reverse {
    animation: marquee-right 45s linear infinite;
  }

  .marquee-track:hover,
  .marquee-track-reverse:hover {
    animation-play-state: paused;
  }

  .pulse-ring {
    animation: pulse-ring 2s infinite;
  }

  @keyframes pulse-ring {
    0% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.06); opacity: 1; }
    100% { transform: scale(1); opacity: 0.5; }
  }

  @media (max-width: 640px) {
    .hero-section {
      padding-top: 120px !important;
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    .hero-dashboard-card { display: none !important; }
    .hero-buttons {
      flex-direction: column !important;
      align-items: center !important;
      gap: 10px !important;
    }
    .hero-buttons button {
      width: 100% !important;
      max-width: 320px !important;
    }

    .process-grid { grid-template-columns: 1fr !important; }
    .stats-bar { grid-template-columns: 1fr !important; }

    .bento-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
    .bento-wide { grid-row: auto !important; }

    .why-grid { grid-template-columns: 1fr !important; }

    .testimonial-layout {
      display: flex !important;
      flex-direction: column !important;
      gap: 24px !important;
      align-items: center !important;
    }
    .testimonial-stats-grid { grid-template-columns: 2fr 2fr !important; }

    nav {
      min-width: unset !important;
      width: calc(100% - 32px) !important;
      padding: 8px 8px 8px 12px !important;
      gap: 8px !important;
    }
    .nav-links { display: none !important; }
    .nav-mobile-menu { display: flex !important; }
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    .hero-section {
      padding-top: 130px !important;
      padding-left: 32px !important;
      padding-right: 32px !important;
    }
    .hero-dashboard-card { display: none !important; }

    .process-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
    .stats-bar { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }

    .bento-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 20px !important; }

    .why-grid { grid-template-columns: 1fr 1fr !important; }

    .testimonial-layout {
      display: grid !important;
      grid-template-columns: 1.1fr 1fr !important;
      gap: 32px !important;
      align-items: center !important;
    }

    nav {
      min-width: 660px !important;
      width: auto !important;
    }
  }

  @media (min-width: 1025px) {
    .hero-section {
      padding-top: 150px !important;
    }
  }
      `}</style>

      <Navbar />

      {/* MOBILE NAV DROPDOWN */}
        {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 76,
            left: 16,
            right: 16,
            backgroundColor: "#05090F",
            border: "1px solid #1E293B",
            borderRadius: 20,
            padding: 10,
            zIndex: 90,
            boxShadow: "0 24px 80px rgba(0,0,0,0.9)",
          }}
        >
          {[
            { label: "Home", href: "/" },
            { label: "Roofing", href: "/seo-for-roofers" },
            { label: "HVAC", href: "/hvac-digital-marketing" },
            { label: "Facebook Ads", href: "/facebook-ads-home-improvement" },
            { label: "Contractors", href: "/contractor-marketing" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 18px",
                color: link.label === "Home" ? "#16C05A" : "#E5E7EB",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
                borderRadius: 12,
                transition: "background 0.15s ease, color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#111827";
                e.currentTarget.style.color = "#16C05A";
                const dot = e.currentTarget.querySelector(
                  'span[data-dot="true"]'
                ) as HTMLSpanElement | null;
                if (dot) {
                  dot.style.opacity = "1";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color =
                  link.label === "Home" ? "#16C05A" : "#E5E7EB";
                const dot = e.currentTarget.querySelector(
                  'span[data-dot="true"]'
                ) as HTMLSpanElement | null;
                if (dot && link.label !== "Home") {
                  dot.style.opacity = "0";
                }
              }}
            >
              <span>{link.label}</span>
              <span
                data-dot="true"
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  backgroundColor: "#16C05A",
                  opacity: link.label === "Home" ? 1 : 0,
                  transition: "opacity 0.2s ease",
                }}
              />
            </a>
          ))}
          <div style={{ padding: "8px 4px 4px" }}>
            <button
              type="button"
              onClick={() => (window.location.href = "/book-a-call")}
              style={{
                width: "100%",
                backgroundColor: "#16C05A",
                color: "black",
                border: "none",
                borderRadius: 12,
                padding: 13,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Book a Call
            </button>
            </div>
          </div>
        )}

      <main
        id="home"
        className="max-width-container"
        style={{ padding: "0 16px 80px" }}
      >
        {/* HERO */}
        <section
          className="hero-section"
          style={{
            position: "relative",
          }}
        >
          {/* Background glow and grid */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              zIndex: -1,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.35,
                backgroundImage:
                  "radial-gradient(circle at top, rgba(22,192,90,0.22), transparent 60%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.08,
                backgroundImage:
                  "linear-gradient(rgba(15,23,42,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.7) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />
    </div>

          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 14px",
                borderRadius: 999,
                border: "1px solid rgba(148,163,184,0.4)",
                backgroundColor: "rgba(15,23,42,0.9)",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#E5E7EB",
              }}
            >
              <span style={{ marginRight: 6 }}>🏆</span>
              <span>The #1 Appointment System For Home Improvement Companies</span>
        </div>

            <h1
              style={{
                marginTop: 20,
                fontSize: "clamp(30px, 4vw, 46px)",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
              }}
            >
              We Help Home Improvement Companies Book{" "}
              <span
                style={{
                  color: "#16C05A",
                  position: "relative",
                  display: "inline-block",
                  paddingBottom: 6,
                }}
              >
                $50k-$100k
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: "100%",
                    height: 3,
                    borderRadius: 999,
                    background:
                      "linear-gradient(90deg, #16C05A, rgba(22,192,90,0.2))",
                  }}
                />
              </span>{" "}
              in New Monthly Revenue
            </h1>

            <p
              style={{
                marginTop: 14,
                fontSize: 16,
                color: "#CBD5F5",
                fontWeight: 600,
              }}
            >
              Facebook ads, AI follow up, and human appointment setters in one
              done for you system.
            </p>

            <div
              style={{
                marginTop: 18,
                display: "flex",
                justifyContent: "center",
                gap: 12,
                flexWrap: "wrap",
                fontSize: 13,
                color: "#9CA3AF",
              }}
            >
              <div>
                <strong style={{ color: "#FFFFFF" }}>312+</strong> Appointments
                Booked
              </div>
              <span>•</span>
              <div>
                <strong style={{ color: "#FFFFFF" }}>30 Days</strong> To See First
                Results
      </div>
              <span>•</span>
              <div>
                <strong style={{ color: "#FFFFFF" }}>100%</strong> Done For You
                Service
              </div>
            </div>

            {/* Buttons */}
            <div
              className="hero-buttons"
      style={{
                marginTop: 26,
                display: "flex",
                justifyContent: "center",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.location.href = "/book-a-call";
                  }
                }}
        style={{
          background:
                    "radial-gradient(circle at top, rgba(22,192,90,0.6), #16C05A)",
                  color: "black",
                  border: "none",
                  borderRadius: 999,
                  padding: "12px 26px",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow:
                    "0 0 0 1px rgba(22,192,90,0.3), 0 0 40px rgba(22,192,90,0.7)",
                  transition: "transform 0.15s ease, filter 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "brightness(1.06)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Book Your Free Strategy Call
              </button>

              <button
                type="button"
                onClick={() => {
                  const el =
                    typeof document !== "undefined"
                      ? document.getElementById("how-it-works")
                      : null;
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
          style={{
                  backgroundColor: "transparent",
            color: "#FFFFFF",
                  borderRadius: 999,
                  padding: "12px 24px",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "1px solid #1E293B",
                  transition: "background 0.15s ease, border-color 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#111827";
                  e.currentTarget.style.borderColor = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "#1E293B";
                }}
              >
                See How It Works
              </button>
            </div>

            {/* Trust line */}
            <div
              style={{
                marginTop: 16,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 10,
                fontSize: 12,
                color: "#9CA3AF",
              }}
            >
              <span>
                <span style={{ color: "#16C05A" }}>✓</span> No contracts
              </span>
              <span>•</span>
              <span>
                <span style={{ color: "#16C05A" }}>✓</span> Results in 30 days or
                we work at no cost until we do
              </span>
              <span>•</span>
              <span>
                <span style={{ color: "#16C05A" }}>✓</span> Done for you setup and
                campaign management
              </span>
        </div>

            {/* Social proof */}
            <div style={{ marginTop: 26 }}>
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#6B7280",
                  marginBottom: 8,
                }}
              >
                Trusted by roofers, remodelers, kitchen and bath, hvac, painters
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 14,
                  flexWrap: "wrap",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  {[
                    "https://i.pravatar.cc/150?img=57",
                    "https://i.pravatar.cc/150?img=12",
                    "https://i.pravatar.cc/150?img=53",
                    "https://i.pravatar.cc/150?img=15",
                    "https://i.pravatar.cc/150?img=33",
                  ].map((src, i) => (
                    <div
                      key={src}
                    style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        border: "2px solid #000000",
                        overflow: "hidden",
                        marginLeft: i === 0 ? 0 : -12,
                        zIndex: 5 - i,
                        boxShadow: "0 0 0 2px rgba(22,192,90,0.35)",
                      }}
                    >
                      <Image
                        src={src}
                        alt="Client"
                        width={34}
                        height={34}
                        style={{ objectFit: "cover" }}
                      />
              </div>
            ))}
          </div>

                <div
      style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: "#FBBF24", letterSpacing: 2 }}>★★★★★</span>
                  <span style={{ color: "#16C05A", fontWeight: 700 }}>
                    50+ contractors and remodelers
                  </span>
                  <span style={{ color: "#9CA3AF" }}>growing with Voxflow Media</span>
          </div>
              </div>
            </div>
          </div>

          {/* Dashboard card */}
          <div
            className="hero-dashboard-card"
                    style={{
              marginTop: 40,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "100%", maxWidth: 820 }}>
              <div
                style={{
                  borderRadius: 20,
                  boxShadow:
                    "0 0 0 1px rgba(22,192,90,0.18), 0 0 80px rgba(22,192,90,0.25), 0 40px 80px rgba(0,0,0,0.9)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#020617",
                    borderRadius: 20,
                    border: "1px solid #1E293B",
                    overflow: "hidden",
                  }}
                >
                  {/* Top bar */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      backgroundColor: "#020617",
                      borderBottom: "1px solid #1E293B",
                      padding: "10px 18px",
                    }}
                  >
                    <div style={{ display: "flex", gap: 6 }}>
                      <span
                        style={{
                          width: 9,
                          height: 9,
                          borderRadius: "50%",
                          backgroundColor: "#EF4444",
                        }}
                      />
                      <span
                        style={{
                          width: 9,
                          height: 9,
                          borderRadius: "50%",
                          backgroundColor: "#FACC15",
                        }}
                      />
                      <span
                        style={{
                          width: 9,
                          height: 9,
                          borderRadius: "50%",
                          backgroundColor: "#16C05A",
                        }}
                      />
              </div>
                    <div
                      style={{
                        borderRadius: 999,
                        border: "1px solid #1E293B",
                        backgroundColor: "#020617",
                        padding: "4px 14px",
                        fontSize: 11,
                        color: "#64748B",
                      }}
                    >
                      voxflowmedia.com/dashboard
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span
                        className="pulse-ring"
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          backgroundColor: "#16C05A",
                        }}
                      />
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: "#16C05A",
                        }}
                      >
                        Live Results
                      </span>
              </div>
            </div>

                  {/* Body */}
                  <div style={{ padding: "18px 18px 20px" }}>
                    <div
                      style={{
                        marginBottom: 16,
                        fontSize: 11,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#9CA3AF",
                      }}
                    >
                      📊 Client Results - Last 30 Days
              </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                        gap: 10,
                      }}
                    >
                      {[
                        {
                          label: "Homeowners Reached",
                          value: "48,200",
                          delta: "+2,400 this week",
                        },
                        {
                          label: "Calls Booked",
                          value: "312",
                          delta: "+28 this week",
                        },
                        {
                          label: "Qualified Leads",
                          value: "1,847",
                          delta: "+143 this week",
                        },
                        {
                          label: "Revenue Added",
                          value: "$94k",
                          delta: "+$12k this week",
                        },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          style={{
                            borderRadius: 16,
                            border: "1px solid #1E293B",
                            backgroundColor: "#020617",
                            padding: "12px 12px 10px",
                          }}
                        >
                          <div
                            style={{
                              fontSize: 11,
                              color: "#64748B",
                              marginBottom: 4,
                            }}
                          >
                            {stat.label}
                      </div>
                          <div
                            style={{
                              fontSize: 22,
                              fontWeight: 800,
                              color: "#F9FAFB",
                            }}
                          >
                            {stat.value}
                      </div>
                          <div
                            style={{
                              fontSize: 11,
                              color: "#16C05A",
                              marginTop: 2,
                            }}
                          >
                            {stat.delta}
                    </div>
                  </div>
                ))}
            </div>

                    {/* Active campaign */}
                    <div
                    style={{
                        marginTop: 16,
                        borderRadius: 16,
                        border: "1px solid rgba(22,192,90,0.3)",
                        background:
                          "linear-gradient(135deg, rgba(15,118,110,0.3), rgba(15,23,42,0.95))",
                        padding: "12px 14px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          fontSize: 13,
                          color: "#E5E7EB",
                          flexWrap: "wrap",
                        }}
                      >
                        <span
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            backgroundColor: "#16C05A",
                          }}
                        />
                        <span>
                          Facebook Ads + AI Follow Up - Kitchen Remodeling
                          Campaign
                        </span>
                </div>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 10,
                          alignItems: "center",
                          fontSize: 12,
                          color: "#E5E7EB",
                        }}
                      >
                        <span style={{ color: "#16C05A", fontWeight: 700 }}>
                          23 appointments booked today
                        </span>
                        <span
                          style={{
                            borderRadius: 999,
                            padding: "4px 10px",
                            backgroundColor: "#16C05A",
                            color: "#000000",
                            fontSize: 11,
                            fontWeight: 700,
                          }}
                        >
                          Active
                        </span>
                  </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR PROCESS */}
        <section style={{ padding: "80px 0 70px" }}>
          <div
            className="max-width-container"
            style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}
          >
            <span
                    style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 14px",
                borderRadius: 999,
                backgroundColor: "rgba(22,192,90,0.08)",
                border: "1px solid rgba(22,192,90,0.25)",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#16C05A",
              }}
            >
              Our Process
              </span>

            <h2
              style={{
                marginTop: 18,
                fontSize: "clamp(26px, 3vw, 34px)",
                fontWeight: 900,
                lineHeight: 1.15,
              }}
            >
              From Ad Click to Booked Appointment in 24 Hours
            </h2>
            <p
              style={{
                marginTop: 10,
                fontSize: 15,
                color: "#9CA3AF",
                maxWidth: 520,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              A simple five step system that takes homeowners from first click to
              confirmed booking without you lifting a finger.
            </p>

            {/* How the system works - video */}
            <div
              id="how-it-works"
              style={{
                marginTop: 48,
                marginBottom: 48,
              }}
            >
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 20,
                  color: "#FFFFFF",
                }}
              >
                How the system works
              </h3>
              <div
                style={{
                  maxWidth: 800,
                  margin: "0 auto",
                  borderRadius: 16,
                  overflow: "hidden",
                  border: "1px solid #1E293B",
                  background: "#0D1117",
                }}
              >
                <video
                  controls
                  playsInline
                  style={{ width: "100%", display: "block" }}
                  poster=""
                >
                  <source src="/explainationvideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div style={{ position: "relative", marginTop: 40 }}>
              <div
                style={{
                  position: "absolute",
                  top: 38,
                  left: "6%",
                  right: "6%",
                  height: 1,
                  background:
                    "linear-gradient(90deg, transparent, rgba(148,163,184,0.5), transparent)",
                  zIndex: 0,
                }}
              />

              <div className="process-grid" style={{ position: "relative" }}>
                {[
                  {
                    step: "Step 1",
                    title: "We Launch Targeted Ads",
                    desc: "High intent campaigns on Facebook and Instagram built for your ideal homeowner.",
                    color: "#3B82F6",
                    icon: "🎯",
                  },
                  {
                    step: "Step 2",
                    title: "Homeowner Sees Your Ad",
                    desc: "Landing pages and forms convert clicks into real lead data we can work with.",
                    color: "#A855F7",
                    icon: "👀",
                  },
                  {
                    step: "Step 3",
                    title: "AI Contacts in 60 Seconds",
                    desc: "Our AI agent sends texts and emails right away so leads never go cold.",
                    color: "#F59E0B",
                    icon: "🤖",
                  },
                  {
                    step: "Step 4",
                    title: "Lead Gets Qualified",
                    desc: "Human setters confirm budget, location, and project details before you ever talk.",
                    color: "#EF4444",
                    icon: "📞",
                  },
                  {
                    step: "Step 5",
                    title: "Appointment Booked",
                    desc: "Qualified homeowners are placed directly onto your calendar ready to buy.",
                    color: "#16C05A",
                    icon: "📅",
                    final: true,
                  },
                ].map((item, index) => (
                  <div
                    key={item.step}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "left",
                      position: "relative",
                      zIndex: 1,
                    }}
    >
      <div
        style={{
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
          background:
                          item.final === true
                            ? "radial-gradient(circle at top, #16C05A, #14532d)"
                            : "radial-gradient(circle at top, rgba(148,163,184,0.15), rgba(15,23,42,1))",
                        border: `2px solid ${
                          item.final === true ? "#16C05A" : "rgba(148,163,184,0.4)"
                        }`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: 24,
                        boxShadow:
                          item.final === true
                            ? "0 0 32px rgba(22,192,90,0.8)"
                            : "0 0 16px rgba(15,23,42,0.8)",
                        marginBottom: 14,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div
          style={{
                        width: "100%",
                        borderRadius: 18,
                        padding: "18px 16px 16px",
                        background:
                          "linear-gradient(145deg, #020617, rgba(15,23,42,0.96))",
                        border: "1px solid #1E293B",
            boxShadow:
                          "0 16px 40px rgba(0,0,0,0.75), 0 0 0 1px rgba(15,23,42,1)",
                        minHeight: 150,
                      }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          textTransform: "uppercase",
                          letterSpacing: "0.16em",
                          color: "rgba(148,163,184,0.9)",
                          marginBottom: 4,
                        }}
                      >
                        {item.step}
            </div>
                      <div
                        style={{
                          fontSize: 15,
                          fontWeight: 700,
                          color: "#E5E7EB",
                          marginBottom: 6,
                        }}
                      >
                        {item.title}
      </div>
                      <p
                        style={{
                          fontSize: 13,
                          color: "#9CA3AF",
                          lineHeight: 1.6,
                          margin: 0,
                        }}
                      >
                        {item.desc}
                      </p>
                </div>
                </div>
                ))}
              </div>
            </div>

            {/* Stats bar */}
            <div
              className="stats-bar"
              style={{
                marginTop: 38,
                borderRadius: 20,
                border: "1px solid #1E293B",
                background:
                  "radial-gradient(circle at top, rgba(22,192,90,0.14), #020617)",
                overflow: "hidden",
              }}
            >
              {[
                {
                  value: "312+",
                  label: "Appointments Booked",
                  sub: "across partner contractors",
                  color: "#16C05A",
                },
                {
                  value: "48-72 Hrs",
                  label: "Average Time To First Results",
                  sub: "from launch to first booked job",
                  color: "#F9FAFB",
                },
                {
                  value: "100%",
                  label: "Done For You",
                  sub: "we run ads, AI, and follow up",
                  color: "#F9FAFB",
                },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  style={{
                    padding: "22px 20px 18px",
                    borderRight:
                      index < 2 ? "1px solid rgba(31,41,55,0.9)" : "none",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 26,
                      fontWeight: 900,
                      color: stat.color,
                      marginBottom: 6,
                    }}
                  >
                    {stat.value}
                      </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#E5E7EB",
                      fontWeight: 600,
                      marginBottom: 4,
                    }}
                  >
                    {stat.label}
                    </div>
                  <div style={{ fontSize: 12, color: "#9CA3AF" }}>{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
        </section>

        {/* WHAT WE DO */}
        <section
          id="services"
          style={{
            padding: "80px 0",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 14px",
                borderRadius: 999,
                backgroundColor: "rgba(22,192,90,0.08)",
                border: "1px solid rgba(22,192,90,0.25)",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#16C05A",
              }}
            >
              What We Do
                </span>
            <h2
              style={{
                marginTop: 16,
                fontSize: 48,
                fontWeight: 900,
                lineHeight: 1.1,
              }}
            >
              Everything You Need to Fill Your Calendar
            </h2>
            <p
              style={{
                marginTop: 12,
                fontSize: 15,
                color: "#9CA3AF",
                maxWidth: 560,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              One system that handles ads, follow up, and booking so you can
              focus on running the jobs.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            {/* Row 1: three equal cards */}
            <div
              className="bento-grid"
              style={{
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              {/* Facebook and Instagram Ads */}
              <div
                style={{
                  backgroundColor: "#0D1117",
                  border: "1px solid #1E293B",
                  borderRadius: 20,
                  padding: 32,
                  transition: "all 0.3s ease",
                  wordBreak: "normal",
                  whiteSpace: "normal",
                  overflow: "visible",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "#3B82F6";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 20px 50px rgba(59,130,246,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "#1E293B";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    backgroundColor: "rgba(59,130,246,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 26,
                  }}
                >
                  📣
                        </div>
                <h3
                  style={{
                    marginTop: 20,
                    fontSize: 20,
                    fontWeight: 800,
                    wordBreak: "normal",
                    whiteSpace: "normal",
                    overflow: "visible",
                  }}
                >
                  Facebook and Instagram Ads
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    color: "#94A3B8",
                    lineHeight: 1.6,
                    whiteSpace: "normal",
                    overflow: "visible",
                  }}
                >
                  Proven campaigns that reach motivated homeowners in your exact
                  service areas.
                </p>
              </div>

              {/* AI Lead Follow Up */}
              <div
                style={{
                  backgroundColor: "#0D1117",
                  border: "1px solid #1E293B",
                  borderRadius: 20,
                  padding: 32,
                  transition: "all 0.3s ease",
                  wordBreak: "normal",
                  whiteSpace: "normal",
                  overflow: "visible",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "#F59E0B";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 20px 50px rgba(245,158,11,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "#1E293B";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                    style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    backgroundColor: "rgba(245,158,11,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 26,
                  }}
                >
                  ⚡
              </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "4px 10px",
                    borderRadius: 999,
                    backgroundColor: "rgba(245,158,11,0.12)",
                    border: "1px solid rgba(245,158,11,0.5)",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#FBBF24",
                    marginTop: 14,
                  }}
                >
                  Under 60 Seconds
            </div>
                <h3
                  style={{
                    marginTop: 14,
                    fontSize: 20,
                    fontWeight: 800,
                    wordBreak: "normal",
                    whiteSpace: "normal",
                    overflow: "visible",
                  }}
                >
                  AI Lead Follow Up
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    color: "#94A3B8",
                    lineHeight: 1.6,
                    whiteSpace: "normal",
                    overflow: "visible",
                  }}
                >
                  Smart sequences hit every new lead by text and email in under
                  a minute so you never lose the best jobs to slow response times.
                </p>
              </div>

              {/* Human Appointment Setters */}
              <div
                style={{
                  backgroundColor: "#0D1117",
                  border: "1px solid #1E293B",
                  borderRadius: 20,
                  padding: 32,
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  wordBreak: "normal",
                  whiteSpace: "normal",
                  overflow: "visible",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "#16C05A";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 20px 50px rgba(22,192,90,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "#1E293B";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div>
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 16,
                      backgroundColor: "rgba(22,192,90,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 26,
                    }}
                  >
                    📞
              </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "4px 10px",
                      borderRadius: 999,
                      backgroundColor: "rgba(22,192,90,0.12)",
                      border: "1px solid rgba(22,192,90,0.6)",
                      fontSize: 11,
                      fontWeight: 600,
                      color: "#16C05A",
                      marginTop: 14,
                    }}
                  >
                    Done For You
                    </div>
                  <h3
                    style={{
                      marginTop: 14,
                      fontSize: 20,
                      fontWeight: 800,
                      wordBreak: "normal",
                      whiteSpace: "normal",
                      overflow: "visible",
                    }}
                  >
                    Human Appointment Setters
                  </h3>
                  <p
                    style={{
                      marginTop: 10,
                      fontSize: 15,
                      color: "#94A3B8",
                      lineHeight: 1.6,
                    }}
                  >
                    Real people qualify and book appointments into your calendar
                    so your sales team talks only with serious homeowners.
                  </p>
                      </div>
                <div
                  style={{
                    marginTop: 18,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: 12,
                    color: "#9CA3AF",
                  }}
                >
                  <span>Last 30 days</span>
                  <span style={{ color: "#16C05A", fontWeight: 700 }}>
                    312+ appointments booked
                      </span>
                    </div>
                  </div>
              </div>

            {/* Row 2: two wide cards */}
            <div
              className="bento-grid"
              style={{
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              {/* Exclusive Leads */}
              <div
                      style={{
                  backgroundColor: "#0D1117",
                  border: "1px solid #1E293B",
                  borderRadius: 20,
                  padding: 32,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "#A855F7";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 20px 50px rgba(168,85,247,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "#1E293B";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    backgroundColor: "rgba(168,85,247,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 26,
                  }}
                >
                  🔒
                  </div>
                    <div
                      style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "4px 10px",
                    borderRadius: 999,
                    backgroundColor: "rgba(168,85,247,0.12)",
                    border: "1px solid rgba(168,85,247,0.6)",
                    fontSize: 11,
                    fontWeight: 600,
                    color: "#E9D5FF",
                    marginTop: 14,
                  }}
                >
                  Never shared
                  </div>
                <h3
                  style={{
                    marginTop: 14,
                    fontSize: 20,
                    fontWeight: 800,
                    wordBreak: "normal",
                    whiteSpace: "normal",
                    overflow: "visible",
                  }}
                >
                  100% Exclusive Leads
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    color: "#94A3B8",
                    lineHeight: 1.6,
                    whiteSpace: "normal",
                    overflow: "visible",
                  }}
                >
                  Every homeowner you pay for is yours alone. No more racing
                  against four other contractors for the same job.
                </p>
      </div>

              {/* No Long Term Contracts */}
              <div
                style={{
                  backgroundColor: "#0D1117",
                  border: "1px solid #1E293B",
                  borderRadius: 20,
                  padding: 32,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "#EF4444";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 20px 50px rgba(239,68,68,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "#1E293B";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    backgroundColor: "rgba(239,68,68,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 26,
                  }}
                >
                  🛡️
                </div>
                <h3
                  style={{
                    marginTop: 20,
                    fontSize: 20,
                    fontWeight: 800,
                    wordBreak: "normal",
                    whiteSpace: "normal",
                    overflow: "visible",
                  }}
                >
                  No Long Term Contracts
                </h3>
                <p
                  style={{
                    marginTop: 10,
                    fontSize: 15,
                    color: "#94A3B8",
                    lineHeight: 1.6,
                    whiteSpace: "normal",
                    overflow: "visible",
                  }}
                >
                  Stay because the system consistently fills your calendar, not
                  because your signature is trapped in a twelve month renewal.
                </p>
              </div>
              </div>

            {/* Row 3: full width 30 day guarantee */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(22,192,90,0.28), rgba(15,23,42,0.98))",
                borderRadius: 20,
                border: "1px solid rgba(22,192,90,0.4)",
                padding: 32,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 24,
                justifyContent: "space-between",
                transition: "all 0.3s ease",
                wordBreak: "normal",
                whiteSpace: "normal",
                overflow: "visible",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 24px 80px rgba(22,192,90,0.45)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  flex: 1,
                  minWidth: 260,
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    backgroundColor: "#022C22",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                  }}
                >
                  ✅
          </div>
                <div style={{ textAlign: "left" }}>
                  <h3
                    style={{
                      fontSize: 20,
                      fontWeight: 800,
                      marginBottom: 4,
                    }}
                  >
                    30 Day Results Guarantee
                  </h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "#E5E7EB",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    See qualified appointments in the first thirty days or{" "}
                    <span style={{ color: "#16C05A", fontWeight: 700 }}>
                      we work free until we hit the mark
                    </span>
                    .
                  </p>
                </div>
              </div>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.location.href = "/book-a-call";
                }
              }}
                style={{
                  backgroundColor: "#16C05A",
                  color: "#000000",
                  border: "none",
                  borderRadius: 999,
                  padding: "11px 24px",
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  boxShadow: "0 0 26px rgba(22,192,90,0.7)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translateY(0)";
                }}
              >
                Learn How The Guarantee Works
            </button>
          </div>
                  </div>
        </section>

        {/* WHY VOXFLOW */}
        <section id="about" style={{ padding: "10px 0 70px" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 14px",
                borderRadius: 999,
                backgroundColor: "rgba(22,192,90,0.08)",
                border: "1px solid rgba(22,192,90,0.25)",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#16C05A",
              }}
            >
              Why Voxflow
                  </span>
            <h2
              style={{
                marginTop: 18,
                fontSize: "clamp(26px, 3vw, 34px)",
                fontWeight: 900,
              }}
            >
              The Old Way Is Broken. Here Is What Actually Works.
        </h2>
            </div>

          <div className="why-grid">
            {/* Problem column */}
              <div
                style={{
                borderRadius: 20,
                border: "1px solid rgba(248,113,113,0.4)",
                background:
                  "radial-gradient(circle at top, rgba(127,29,29,0.6), #020617)",
                padding: 22,
              }}
            >
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#FCA5A5",
                  marginBottom: 14,
                }}
              >
                The Problem
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  fontSize: 13,
                  color: "#FEE2E2",
                }}
              >
                {[
                  "Door knocking does not scale and depends on the weather and your energy.",
                  "Lead marketplaces sell the same homeowner to four or five contractors.",
                  "Slow follow up lets the best jobs go to whoever calls first.",
                  "SEO takes six to twelve months before you see predictable results.",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                    }}
                  >
                <span
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        backgroundColor: "rgba(248,113,113,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                      }}
                    >
                      ✕
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution column */}
            <div
                  style={{
                borderRadius: 20,
                border: "1px solid rgba(22,192,90,0.45)",
                background:
                  "radial-gradient(circle at top, rgba(22,192,90,0.6), #020617)",
                padding: 22,
              }}
            >
              <h3
                style={{
                  fontSize: 17,
                  fontWeight: 800,
                  color: "#BBF7D0",
                  marginBottom: 14,
                }}
              >
                The Voxflow Solution
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  fontSize: 13,
                  color: "#DCFCE7",
                }}
              >
                {[
                  "Facebook ads reach homeowners early so you win the conversation first.",
                  "Every lead is exclusive to your company and never shared with competitors.",
                  "AI responds in under sixty seconds and keeps following up until they book.",
                  "Our system is built to show clear results in the first thirty days.",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        backgroundColor: "rgba(22,192,90,0.24)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 11,
                      }}
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
                    </div>
                    </div>
        </section>

        {/* TESTIMONIAL VIDEO */}
        <section id="video" style={{ padding: "80px 0" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 14px",
                borderRadius: 999,
                backgroundColor: "rgba(22,192,90,0.08)",
                border: "1px solid rgba(22,192,90,0.25)",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#16C05A",
              }}
            >
              Client Results
            </span>
            <h2
              style={{
                marginTop: 18,
                fontSize: "clamp(28px, 3vw, 34px)",
                fontWeight: 900,
              }}
            >
              See Real Results From Real Contractors
            </h2>
            <p
              style={{
                marginTop: 10,
                fontSize: 15,
                color: "#9CA3AF",
                maxWidth: 520,
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 1.7,
              }}
            >
              Hear directly from a roofing business owner about their experience
              with Voxflow Media.
            </p>
          </div>

          <div
            className="testimonial-layout"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
              gap: 48,
              alignItems: "stretch",
            }}
          >
            {/* Left column - video */}
            <div>
              <div
                style={{
                  width: "100%",
                  maxWidth: 280,
                  borderRadius: 20,
                  border: "1px solid #1E293B",
                  backgroundColor: "#020617",
                  padding: 10,
                  boxShadow: "0 24px 60px rgba(0,0,0,0.9)",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    borderRadius: 20,
                    overflow: "hidden",
                    backgroundColor: "#000000",
                    aspectRatio: "9 / 16",
                  }}
                >
                  <video
                    src="/testimonial.mp4"
                    controls
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      objectFit: "cover",
                      backgroundColor: "#000000",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  marginTop: 16,
                  borderRadius: 18,
                  border: "1px solid #1E293B",
                  backgroundColor: "#020617",
                  padding: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 14,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "999px",
                      backgroundColor: "#16C05A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      color: "#000000",
                    }}
                  >
                    R
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#F9FAFB",
                      }}
                    >
                      Roofing Business Owner
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "#94A3B8",
                      }}
                    >
                      Voxflow Media Client
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    padding: "4px 10px",
                    borderRadius: 999,
                    border: "1px solid rgba(22,192,90,0.4)",
                    backgroundColor: "rgba(22,192,90,0.16)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#16C05A",
                    whiteSpace: "nowrap",
                  }}
                >
                  Verified Client
                </div>
              </div>
            </div>

            {/* Right column - quote, stats, CTA */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  backgroundColor: "#0D1117",
                  borderRadius: 16,
                  padding: 36,
                  border: "1px solid #1E293B",
                  borderLeft: "4px solid #16C05A",
                  boxShadow: "0 18px 50px rgba(0,0,0,0.8)",
                  minHeight: 260,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontSize: 32,
                    color: "#16C05A",
                    marginBottom: 12,
                  }}
                >
                  “
                </div>
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#F9FAFB",
                    lineHeight: 1.5,
                    marginBottom: 18,
                  }}
                >
                  Voxflow filled my calendar with qualified roofing leads within
                  the first 2 weeks. I stopped chasing and started closing.
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 14,
                    marginTop: "auto",
                  }}
                >
                  <span style={{ color: "#16C05A" }}>★★★★★</span>
                  <span style={{ color: "#16C05A", fontWeight: 600 }}>
                    5.0 Exceptional Results
                  </span>
                </div>
              </div>

              <div
                style={{
                  marginTop: 20,
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: 14,
                }}
              >
                {[
                  {
                    value: "47",
                    label: "Appointments",
                    sub: "In first month",
                  },
                  {
                    value: "8x",
                    label: "ROI",
                    sub: "Return on spend",
                  },
                  {
                    value: "2 Wks",
                    label: "To First Lead",
                    sub: "From day one",
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      backgroundColor: "#0D1117",
                      borderRadius: 12,
                      border: "1px solid #1E293B",
                      padding: 20,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 22,
                        fontWeight: 800,
                        color: "#16C05A",
                        marginBottom: 4,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 600,
                        color: "#E5E7EB",
                        marginBottom: 2,
                      }}
                    >
                      {stat.label}
                    </div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "#94A3B8",
                      }}
                    >
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.location.href = "/book-a-call";
                  }
                }}
                style={{
                  marginTop: 22,
                  width: "100%",
                  borderRadius: 12,
                  border: "none",
                  padding: 18,
                  backgroundColor: "#16C05A",
                  color: "#000000",
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: "0 0 30px rgba(22,192,90,0.6)",
                  transition: "transform 0.15s ease, filter 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.filter = "brightness(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.filter = "none";
                }}
              >
                Get Results Like This Book a Free Call →
              </button>
            </div>
          </div>
        </section>

        {/* SCROLLING REVIEWS */}
        <section style={{ padding: "10px 0 70px" }}>
          <div style={{ textAlign: "center", marginBottom: 26 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 14px",
                borderRadius: 999,
                backgroundColor: "rgba(22,192,90,0.08)",
                border: "1px solid rgba(22,192,90,0.25)",
                fontSize: 11,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#16C05A",
              }}
            >
              What Contractors Say
            </span>
            <h2
              style={{
                marginTop: 18,
                fontSize: "clamp(24px, 3vw, 30px)",
                fontWeight: 900,
              }}
            >
              Trusted by Home Improvement Companies Across the US
            </h2>
          </div>

          <div
            style={{
              borderRadius: 22,
              border: "1px solid #1E293B",
              backgroundColor: "#020617",
              padding: "16px 0",
              overflow: "hidden",
            }}
          >
            {/* Row 1 */}
            <div
              className="marquee-track reviews-row"
              style={{ marginBottom: 10 }}
            >
              {[...reviewsRow1, ...reviewsRow1].map((review, idx) => (
                <div
                  key={`${review.name}-${idx}`}
        style={{
                    width: 260,
                    borderRadius: 18,
                    border: "1px solid #1E293B",
                    backgroundColor: "#020617",
                    padding: 14,
                  }}
                >
                  <div style={{ fontSize: 12, marginBottom: 6 }}>
                    <span style={{ color: "#FBBF24", marginRight: 4 }}>
                      ★★★★★
                    </span>
          </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#E5E7EB",
                      lineHeight: 1.6,
                      marginBottom: 8,
                    }}
                  >
                    {review.text}
                  </p>
                  <div
          style={{
                      fontSize: 12,
                      color: "#9CA3AF",
                    }}
                  >
                    <strong style={{ color: "#F9FAFB" }}>{review.name}</strong>{" "}
                    · {review.company} · {review.trade}
            </div>
            </div>
              ))}
          </div>

            {/* Row 2 */}
            <div className="marquee-track-reverse reviews-row">
              {[...reviewsRow2, ...reviewsRow2].map((review, idx) => (
                <div
                  key={`${review.name}-${idx}`}
                  style={{
                    width: 260,
                    borderRadius: 18,
                    border: "1px solid #1E293B",
                    backgroundColor: "#020617",
                    padding: 14,
                  }}
                >
                  <div style={{ fontSize: 12, marginBottom: 6 }}>
                    <span style={{ color: "#FBBF24", marginRight: 4 }}>
                      ★★★★★
              </span>
            </div>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#E5E7EB",
                      lineHeight: 1.6,
                      marginBottom: 8,
                    }}
                  >
                    {review.text}
                  </p>
                  <div
                    style={{
                      fontSize: 12,
                      color: "#9CA3AF",
                    }}
                  >
                    <strong style={{ color: "#F9FAFB" }}>{review.name}</strong>{" "}
                    · {review.company} · {review.trade}
            </div>
          </div>
              ))}
          </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          style={{
            padding: "60px 0 70px",
          }}
        >
          <div
            className="final-cta"
            style={{
              borderRadius: 24,
              border: "1px solid #1E293B",
              background:
                "radial-gradient(circle at top, rgba(22,192,90,0.28), #020617)",
              padding: "32px 22px",
              textAlign: "center",
              boxShadow: "0 40px 120px rgba(0,0,0,0.9)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(26px, 3vw, 34px)",
                fontWeight: 900,
                marginBottom: 10,
              }}
            >
              Stop Chasing Leads. Start Showing Up to Booked Jobs.
            </h2>
            <p
              style={{
                fontSize: 15,
                color: "#E5E7EB",
                maxWidth: 520,
                margin: "0 auto 20px",
              }}
            >
              Book a free strategy call and see how Voxflow can plug into your
              business to deliver a steady calendar of high quality appointments.
            </p>
            <button
                type="button"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.location.href = "/book-a-call";
                }
              }}
              style={{
                background:
                  "radial-gradient(circle at top, rgba(22,192,90,0.6), #16C05A)",
                color: "black",
                border: "none",
                borderRadius: 999,
                padding: "14px 30px",
                fontSize: 16,
                fontWeight: 700,
                cursor: "pointer",
                boxShadow:
                  "0 0 0 1px rgba(22,192,90,0.3), 0 0 60px rgba(22,192,90,0.9)",
                transition: "transform 0.15s ease, filter 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = "brightness(1.07)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Book Your Free Strategy Call
            </button>
            <p
              style={{
                fontSize: 13,
                color: "#9CA3AF",
                marginTop: 12,
              }}
            >
              If you do not see qualified appointments in the first 30 days we
              work at no cost until you do.
            </p>
                </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

