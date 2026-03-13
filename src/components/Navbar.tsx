"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [showIndustries, setShowIndustries] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const industriesCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openIndustries = () => {
    if (industriesCloseTimeout.current) {
      clearTimeout(industriesCloseTimeout.current);
      industriesCloseTimeout.current = null;
    }
    setShowIndustries(true);
  };

  const closeIndustries = () => {
    industriesCloseTimeout.current = setTimeout(() => setShowIndustries(false), 150);
  };

  return (
    <>
      <style>{`
  .vf-navbar {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    background: rgba(10,10,10,0.92);
    border: 1px solid #1E293B;
    border-radius: 999px;
    padding: 10px 24px;
    display: flex;
    align-items: center;
    gap: 32px;
  }

  .vf-nav-left {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }

  .vf-logo-circle {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #16C05A;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 18px;
    color: #ffffff;
    overflow: hidden;
  }

  .vf-logo-circle img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .vf-logo-text {
    font-weight: 800;
    font-size: 16px;
    color: #FFFFFF;
    white-space: nowrap;
  }

  .vf-nav-center {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  .vf-link {
    position: relative;
    color: #E5E7EB;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    transition: color 0.2s ease;
  }

  .vf-link:hover {
    color: #FFFFFF;
  }

  .vf-industries-trigger {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }

  .vf-industries-caret {
    font-size: 10px;
    opacity: 0.8;
  }

  .vf-nav-right {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
  }

  .vf-cta {
    background: #16C05A;
    color: #ffffff;
    border-radius: 50px;
    padding: 10px 24px;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: filter 0.2s ease, transform 0.2s ease;
  }

  .vf-cta:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }

  .vf-industries-dropdown-bridge {
    transition: opacity 0.2s ease;
  }

  .vf-industries-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 10px 12px;
    border-radius: 10px;
    text-decoration: none;
    transition: background 0.2s ease;
    color: #E5E7EB;
  }

  .vf-industries-item:hover {
    background: #1E293B;
  }

  .vf-industries-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(22,192,90,0.16);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .vf-industries-title {
    font-size: 14px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 2px;
  }

  .vf-industries-desc {
    font-size: 12px;
    color: #64748B;
  }

  .vf-hamburger {
    display: none;
    background: transparent;
    border: none;
    color: #FFFFFF;
    font-size: 18px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .vf-navbar {
      padding: 8px 16px;
      gap: 16px;
      width: calc(100% - 32px);
    }
    .vf-nav-center {
      display: none;
    }
    .vf-cta {
      display: none;
    }
    .vf-hamburger {
      display: inline-block;
    }
  }

  .vf-mobile-menu {
    position: absolute;
    top: 70px;
    left: 16px;
    right: 16px;
    background: #0D1117;
    border: 1px solid #1E293B;
    border-radius: 16px;
    padding: 16px;
    z-index: 9999;
  }

  .vf-mobile-link {
    display: block;
    padding: 12px;
    border-radius: 8px;
    color: #E5E7EB;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: background 0.2s ease;
  }

  .vf-mobile-link:hover {
    background: #1E293B;
    color: #FFFFFF;
  }
      `}</style>

      <nav className="vf-navbar">
        {/* Left logo */}
        <Link href="/" className="vf-nav-left">
          <div className="vf-logo-circle">
            <Image
              src="/voxflow-logo.png"
              alt="Voxflow Media"
              width={36}
              height={36}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const next = e.currentTarget.nextElementSibling as HTMLElement;
                if (next) next.style.display = "block";
              }}
            />
            <span style={{ display: "none" }}>V</span>
          </div>
        </Link>

        {/* Center links */}
        <div className="vf-nav-center">
          <Link href="/" className="vf-link">
            Home
          </Link>

          <div
            className="vf-industries-trigger"
            onMouseEnter={openIndustries}
            onMouseLeave={closeIndustries}
          >
            <span className="vf-link">Industries</span>
            <span className="vf-industries-caret">▾</span>

            <div
              className="vf-industries-dropdown-bridge"
              style={{
                position: "absolute",
                top: "28px",
                left: "50%",
                transform: "translateX(-50%)",
                paddingTop: "12px",
                zIndex: 99999,
                opacity: showIndustries ? 1 : 0,
                pointerEvents: showIndustries ? "auto" : "none",
              }}
              onMouseEnter={openIndustries}
              onMouseLeave={closeIndustries}
            >
              <div
                style={{
                  background: "#0D1117",
                  border: "1px solid #1E293B",
                  borderRadius: "16px",
                  padding: "8px",
                  width: "280px",
                }}
              >
                <Link href="/seo-for-roofers" className="vf-industries-item">
                  <div className="vf-industries-icon">🏠</div>
                  <div>
                    <div className="vf-industries-title">Roofing Companies</div>
                    <div className="vf-industries-desc">
                      Facebook ads for roofers that book real jobs
                    </div>
                  </div>
                </Link>
                <Link
                  href="/hvac-digital-marketing"
                  className="vf-industries-item"
                >
                  <div className="vf-industries-icon">❄️</div>
                  <div>
                    <div className="vf-industries-title">HVAC Companies</div>
                    <div className="vf-industries-desc">
                      Seasonal campaigns that fill your schedule
                    </div>
                  </div>
                </Link>
                <Link
                  href="/facebook-ads-home-improvement"
                  className="vf-industries-item"
                >
                  <div className="vf-industries-icon">📱</div>
                  <div>
                    <div className="vf-industries-title">Facebook Ads</div>
                    <div className="vf-industries-desc">
                      Done-for-you ads for home improvement
                    </div>
                  </div>
                </Link>
                <Link
                  href="/contractor-marketing"
                  className="vf-industries-item"
                >
                  <div className="vf-industries-icon">🔨</div>
                  <div>
                    <div className="vf-industries-title">General Contractors</div>
                    <div className="vf-industries-desc">
                      Full appointment system for contractors
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/#about" className="vf-link">
            About
          </Link>
          <Link href="/#faq" className="vf-link">
            FAQ
          </Link>
        </div>

        {/* Right */}
        <div className="vf-nav-right">
          <Link href="/book-a-call" className="vf-cta">
            Book a Call
          </Link>
          <button
            type="button"
            className="vf-hamburger"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="vf-mobile-menu">
            <Link
              href="/"
              className="vf-mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/seo-for-roofers"
              className="vf-mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Roofing Companies
            </Link>
            <Link
              href="/hvac-digital-marketing"
              className="vf-mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              HVAC Companies
            </Link>
            <Link
              href="/facebook-ads-home-improvement"
              className="vf-mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Facebook Ads
            </Link>
            <Link
              href="/contractor-marketing"
              className="vf-mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              General Contractors
            </Link>
            <Link
              href="/#about"
              className="vf-mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/#faq"
              className="vf-mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

