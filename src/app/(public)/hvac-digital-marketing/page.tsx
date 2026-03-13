'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function HvacDigitalMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <style>{`
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Inter', sans-serif; background: #000; color: white; -webkit-font-smoothing: antialiased; overflow-x: hidden; }

/* NAV */
.hp-nav { position: fixed; top: 20px; left: 50%; transform: translateX(-50%); z-index: 100; display: flex; align-items: center; justify-content: space-between; gap: 32px; background: rgba(10,10,10,0.92); border: 1px solid #1E293B; border-radius: 999px; padding: 10px 10px 10px 22px; box-shadow: 0 8px 40px rgba(0,0,0,0.5); backdrop-filter: blur(20px); min-width: 660px; max-width: 860px; }
.hp-nav-links { display: flex; align-items: center; gap: 28px; }
.hp-nav-link { color: #94A3B8; text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; white-space: nowrap; }
.hp-nav-link:hover { color: white; }
.hp-hamburger { display: none; background: transparent; border: 1px solid #1E293B; border-radius: 8px; padding: 6px 10px; cursor: pointer; color: white; font-size: 16px; }
@media (max-width: 768px) {
  .hp-nav-links { display: none !important; }
  .hp-hamburger { display: block !important; }
  .hp-nav { min-width: unset !important; width: calc(100% - 32px) !important; padding: 8px 8px 8px 16px !important; gap: 12px !important; }
}

/* LAYOUT */
.hp-section { padding: 100px 0; }
.hp-container { max-width: 1120px; margin: 0 auto; padding: 0 40px; }
.hp-hero-section { padding-top: 160px; padding-bottom: 100px; }
@media (max-width: 640px) {
  .hp-hero-section { padding-top: 120px !important; padding-bottom: 56px !important; }
  .hp-section { padding: 56px 0 !important; }
  .hp-container { padding: 0 20px !important; }
}
@media (min-width: 641px) and (max-width: 1024px) {
  .hp-hero-section { padding-top: 130px !important; padding-bottom: 72px !important; }
  .hp-section { padding: 72px 0 !important; }
  .hp-container { padding: 0 32px !important; }
}
@media (min-width: 1025px) {
  .hp-hero-section { padding-top: 150px !important; }
}

/* TYPOGRAPHY */
.hp-h1 { font-size: clamp(32px, 4.5vw, 62px); font-weight: 900; line-height: 1.08; letter-spacing: -0.025em; }
.hp-h2 { font-size: clamp(26px, 3.5vw, 48px); font-weight: 900; line-height: 1.1; }
.hp-hero-sub { font-size: clamp(15px, 1.6vw, 19px); font-weight: 500; color: #94A3B8; line-height: 1.6; max-width: 680px; margin: 0 auto; }
@media (max-width: 640px) { .hp-h1 { font-size: 30px !important; } .hp-h2 { font-size: 24px !important; } .hp-hero-sub { font-size: 15px !important; } }

/* GRIDS */
.hp-why-grid   { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.hp-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.hp-season-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.hp-pkg-grid   { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px; }
.hp-hero-stats { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; max-width: 900px; margin: 0 auto 36px; }
@media (max-width: 1024px) {
  .hp-why-grid   { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 20px !important; }
  .hp-steps-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 20px !important; }
  .hp-season-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 20px !important; }
  .hp-pkg-grid   { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 20px !important; }
  .hp-hero-stats { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
}
@media (max-width: 640px) {
  .hp-why-grid   { grid-template-columns: minmax(0, 1fr) !important; gap: 16px !important; }
  .hp-steps-grid { grid-template-columns: minmax(0, 1fr) !important; gap: 16px !important; }
  .hp-season-grid { grid-template-columns: minmax(0, 1fr) !important; gap: 16px !important; }
  .hp-pkg-grid   { grid-template-columns: minmax(0, 1fr) !important; gap: 16px !important; }
  .hp-hero-stats { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 10px !important; }
}

/* CARD HOVER */
.hp-card { transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; }
.hp-card:hover { transform: translateY(-8px); border-color: rgba(22,192,90,0.5) !important; box-shadow: 0 20px 50px rgba(22,192,90,0.1) !important; }

/* TABLE */
.hp-table { width: 100%; border-collapse: collapse; }
.hp-table th { background: #0D1117; color: #64748B; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 14px 24px; text-align: left; border-bottom: 1px solid #1E293B; }
.hp-table td { padding: 16px 24px; border-bottom: 1px solid rgba(30,41,59,0.6); font-size: 14px; color: #E2E8F0; }
.hp-table tr:last-child td { border-bottom: none; }
.hp-table tr:hover td { background: rgba(22,192,90,0.03); }
.hp-table td:last-child { color: #16C05A; font-weight: 700; }
.hp-table-wrap { overflow-x: auto; border-radius: 20px; border: 1px solid #1E293B; }
@media (max-width: 640px) { .hp-table th, .hp-table td { padding: 10px 14px !important; font-size: 12px !important; } }

/* FAQ */
.hp-faq { background: #0D1117; border: 1px solid #1E293B; border-radius: 16px; overflow: hidden; transition: all 0.25s ease; margin-bottom: 12px; }
.hp-faq.open { background: linear-gradient(135deg, #0A1F0A, #080D13); border-color: rgba(22,192,90,0.4) !important; }
.hp-faq-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px 24px; background: transparent; border: none; cursor: pointer; text-align: left; }
.hp-faq-q { color: white; font-weight: 700; font-size: 15px; line-height: 1.4; font-family: inherit; }
.hp-faq-plus { flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; border: 1px solid rgba(22,192,90,0.3); display: flex; align-items: center; justify-content: center; color: #16C05A; font-size: 20px; transition: transform 0.25s ease; }
.hp-faq.open .hp-faq-plus { transform: rotate(45deg); }
.hp-faq-ans { padding: 0 24px 20px; color: #94A3B8; font-size: 14px; line-height: 1.75; display: none; }
.hp-faq.open .hp-faq-ans { display: block; }
@media (max-width: 640px) { .hp-faq-btn { padding: 16px 18px !important; } .hp-faq-q { font-size: 14px !important; } .hp-faq-ans { padding: 0 18px 16px !important; } }

/* BUTTONS */
.hp-btn-green { background: #16C05A; color: black; border: none; border-radius: 999px; padding: 14px 32px; font-size: 15px; font-weight: 700; cursor: pointer; box-shadow: 0 0 30px rgba(22,192,90,0.35); transition: filter 0.2s, transform 0.2s, box-shadow 0.2s; font-family: inherit; }
.hp-btn-green:hover { filter: brightness(1.1); transform: scale(1.04); box-shadow: 0 0 50px rgba(22,192,90,0.55); }
.hp-btn-ghost { background: transparent; color: white; border: 1px solid #334155; border-radius: 999px; padding: 14px 32px; font-size: 15px; font-weight: 600; cursor: pointer; transition: background 0.2s, border-color 0.2s, transform 0.2s; font-family: inherit; }
.hp-btn-ghost:hover { background: rgba(22,192,90,0.08); border-color: rgba(22,192,90,0.4); transform: scale(1.03); }

/* CTA ROW */
.hp-cta-row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
@media (max-width: 640px) { .hp-cta-row { flex-direction: column !important; align-items: center !important; } .hp-cta-row button { width: 100% !important; max-width: 320px !important; } }

/* BADGE */
.hp-badge { display: inline-block; background: rgba(22,192,90,0.1); border: 1px solid rgba(22,192,90,0.25); color: #16C05A; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; border-radius: 999px; padding: 6px 18px; text-transform: uppercase; margin-bottom: 20px; }

/* DIVIDER */
.hp-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(22,192,90,0.25), transparent); }

/* ROI BADGE */
.hp-roi-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(22,192,90,0.1); border: 1px solid rgba(22,192,90,0.25); color: #16C05A; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; border-radius: 999px; padding: 4px 12px; text-transform: uppercase; }

/* ANIMATIONS */
@keyframes hpFadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
.hp-a1 { animation: hpFadeUp 0.7s ease 0.1s both; }
.hp-a2 { animation: hpFadeUp 0.7s ease 0.25s both; }
.hp-a3 { animation: hpFadeUp 0.7s ease 0.4s both; }
.hp-a4 { animation: hpFadeUp 0.7s ease 0.55s both; }
.hp-a5 { animation: hpFadeUp 0.7s ease 0.7s both; }
      `}</style>

      <Navbar />

      <section
        className="hp-hero-section"
        style={{
          backgroundColor: '#000',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-200px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '900px',
            height: '600px',
            background:
              'radial-gradient(ellipse, rgba(22,192,90,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(22,192,90,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(22,192,90,0.025) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
          }}
        />
        <div
          className="hp-container"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div className="hp-a1">
            <span className="hp-badge">HVAC MARKETING AGENCY</span>
          </div>

          <h1
            className="hp-h1 hp-a2"
            style={{ color: 'white', marginBottom: '20px' }}
          >
            HVAC Digital Marketing That Books{' '}
            <span style={{ color: '#16C05A' }}>Replacement Jobs</span> Not Just
            Leads
          </h1>

          <p className="hp-hero-sub hp-a3" style={{ marginBottom: '32px' }}>
            If you are searching for hvac digital marketing, you are trying to
            solve one problem: getting more HVAC replacement and service jobs
            consistently. Most contractors have tried agencies, Google Ads and
            lead marketplaces. At Voxflow Media, we focus on one thing only:
            confirmed homeowner appointments booked directly on your calendar.
          </p>

          <div className="hp-hero-stats hp-a4">
            {[
              {
                num: '18-35',
                label: 'Booked Appts/Month',
                sub: 'HVAC replacements',
              },
              {
                num: '$85-$150',
                label: 'Cost Per Appointment',
                sub: 'replacement jobs',
                green: true,
              },
              {
                num: '$7,200',
                label: 'Avg Replacement Value',
                sub: 'per closed job',
              },
              {
                num: '~48x',
                label: 'Typical ROI',
                sub: 'on ad spend',
              },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  background: '#0D1117',
                  border: `1px solid ${
                    s.green ? 'rgba(22,192,90,0.3)' : '#1E293B'
                  }`,
                  borderRadius: '16px',
                  padding: '20px 14px',
                  textAlign: 'center',
                  boxShadow: s.green
                    ? '0 8px 30px rgba(22,192,90,0.08)'
                    : 'none',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(16px,2vw,24px)',
                    fontWeight: 900,
                    color: s.green ? '#16C05A' : 'white',
                    lineHeight: 1,
                    marginBottom: '6px',
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#94A3B8',
                    fontWeight: 600,
                    marginBottom: '3px',
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: '#475569',
                  }}
                >
                  {s.sub}
                </div>
              </div>
            ))}
          </div>

          <div className="hp-cta-row hp-a5">
            <button
              className="hp-btn-green"
              style={{ padding: '15px 36px', fontSize: '16px' }}
              onClick={() => (window.location.href = '/book-a-call')}
            >
              Book Your Free HVAC Growth Strategy Call
            </button>
            <button
              className="hp-btn-ghost"
              onClick={() => (window.location.href = '/#how-it-works')}
            >
              See How It Works
            </button>
          </div>
          <p
            style={{
              color: '#475569',
              fontSize: '13px',
              marginTop: '18px',
            }}
          >
            No results in 30 days? We keep working for free until you get them.
          </p>
        </div>
      </section>

      <div className="hp-divider" />

      <section className="hp-section" style={{ backgroundColor: '#000' }}>
        <div className="hp-container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="hp-badge">THE PROBLEM</span>
            <h2
              className="hp-h2"
              style={{ color: 'white', marginBottom: '14px' }}
            >
              Why HVAC Companies Are Losing to Competitors{' '}
              <span style={{ color: '#16C05A' }}>Using Facebook Ads</span>
            </h2>
            <p
              style={{
                color: '#64748B',
                fontSize: '16px',
                maxWidth: '580px',
                margin: '0 auto',
              }}
            >
              Most HVAC contractors still rely on referrals, door hangers, Google
              Ads and lead marketplaces. The companies growing fastest today are
              using digital marketing for hvac companies that reaches homeowners
              earlier in their decision.
            </p>
          </div>
          <div className="hp-why-grid">
            {[
              {
                icon: '💸',
                accent: '#EF4444',
                title: 'Google Search Costs $210 Per Click',
                desc: 'The keyword "digital marketing for hvac companies" averages roughly $210 per click. That number tells you everything: HVAC companies are desperate for leads and the cost of traditional search advertising keeps rising every year.',
              },
              {
                icon: '🏷️',
                accent: '#F59E0B',
                title: 'Lead Marketplaces Cause Price Wars',
                desc: 'Platforms that sell HVAC leads distribute the same contact to multiple contractors. The homeowner receives several calls within minutes, picks the cheapest quote, and contractors waste time chasing jobs they never win at acceptable margins.',
              },
              {
                icon: '⏰',
                accent: '#A855F7',
                title: 'Speed Determines Who Gets the Job',
                desc: 'Homeowners often contact the first contractor who responds. If your response time is slow, the opportunity is gone permanently. That is why Voxflow Media integrates AI qualification that responds in under 60 seconds, day or night.',
              },
              {
                icon: '🎯',
                accent: '#3B82F6',
                title: 'Facebook Reaches Homeowners Earlier',
                desc: 'Facebook advertising lets HVAC companies reach homeowners before they start searching on Google. Instead of competing for the same search clicks, you appear in their feed before they have compared multiple companies.',
              },
              {
                icon: '📅',
                accent: '#16C05A',
                title: 'Appointments Beat Leads Every Time',
                desc: 'Most digital marketing for hvac produces leads that sit in a CRM. Our system turns every qualified lead into a confirmed appointment on your calendar. You talk to homeowners, not spreadsheet entries.',
              },
              {
                icon: '📊',
                accent: '#06B6D4',
                title: 'One Closed Job Justifies the Whole Month',
                desc: 'At an average HVAC replacement value of $7,200 and a typical close rate of 35 to 55 percent, just one or two closed jobs from our system covers the entire month of advertising investment.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="hp-card"
                style={{
                  background: 'linear-gradient(160deg, #0D1117, #060A0F)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '20px',
                  padding: '28px 22px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
                  }}
                />
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: `${card.accent}18`,
                    border: `1px solid ${card.accent}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    marginBottom: '18px',
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 800,
                    color: 'white',
                    marginBottom: '10px',
                    lineHeight: 1.3,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: '#64748B',
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hp-divider" />

      <section
        className="hp-section"
        style={{
          background:
            'linear-gradient(180deg, #000 0%, #020D05 50%, #000 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '500px',
            height: '500px',
            background:
              'radial-gradient(circle, rgba(22,192,90,0.04) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            background:
              'radial-gradient(circle, rgba(22,192,90,0.04) 0%, transparent 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
          }}
        />
        <div
          className="hp-container"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="hp-badge">CAMPAIGN TYPES</span>
            <h2
              className="hp-h2"
              style={{ color: 'white', marginBottom: '12px' }}
            >
              HVAC Campaigns by Season and{' '}
              <span style={{ color: '#16C05A' }}>Service Type</span>
            </h2>
            <p
              style={{
                color: '#64748B',
                fontSize: '16px',
                maxWidth: '540px',
                margin: '0 auto',
              }}
            >
              HVAC demand changes throughout the year. We run different campaign
              types depending on the season, the service and the homeowner need
              to keep your pipeline consistent.
            </p>
          </div>

          <div
            className="hp-season-grid"
            style={{ marginBottom: '40px' }}
          >
            {[
              {
                icon: '❄️',
                accent: '#06B6D4',
                season: 'LATE SPRING / SUMMER',
                title: 'AC Replacement Campaign',
                roi: '40x to 55x ROI',
                desc: 'Target homeowners with aging air conditioning systems before the peak heat season. Highest volume and highest urgency campaign type.',
              },
              {
                icon: '🔥',
                accent: '#EF4444',
                season: 'FALL / EARLY WINTER',
                title: 'Furnace Replacement Campaign',
                roi: '35x to 50x ROI',
                desc: 'Reach homeowners before cold weather hits. Furnace campaigns perform best in September through November when homeowners feel urgency.',
              },
              {
                icon: '🔧',
                accent: '#F59E0B',
                season: 'PRE-SUMMER AND PRE-WINTER',
                title: 'Seasonal Tune-Up Campaign',
                roi: '18x to 30x ROI',
                desc: 'Capture maintenance and tune-up work that leads into replacement conversations. Great for building pipeline and identifying aging systems.',
              },
              {
                icon: '⚡',
                accent: '#A855F7',
                season: 'PEAK HEAT AND COLD WAVES',
                title: 'Emergency Repair Campaign',
                roi: '20x to 35x ROI',
                desc: 'Fast-response campaigns targeting homeowners whose systems failed. Highest urgency leads. Speed of follow-up is critical here.',
              },
              {
                icon: '💳',
                accent: '#16C05A',
                season: 'YEAR ROUND',
                title: 'HVAC Financing Offer Campaign',
                roi: '30x to 45x ROI',
                desc: 'Remove cost objections by promoting financing options. Dramatically increases the pool of homeowners who qualify and move forward quickly.',
              },
              {
                icon: '🏠',
                accent: '#3B82F6',
                season: 'YEAR ROUND',
                title: 'System Upgrade Campaign',
                roi: '28x to 42x ROI',
                desc: 'Target homeowners with systems 10 or more years old. Promote energy savings, rebates and modern efficiency to homeowners not yet in emergency mode.',
              },
            ].map((c, i) => (
              <div
                key={i}
                className="hp-card"
                style={{
                  background: 'linear-gradient(160deg, #0D1117, #060A0F)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '20px',
                  padding: '24px 20px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${c.accent}, transparent)`,
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: `${c.accent}18`,
                      border: `1px solid ${c.accent}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                    }}
                  >
                    {c.icon}
                  </div>
                  <span
                    style={{
                      background: `${c.accent}15`,
                      border: `1px solid ${c.accent}40`,
                      color: c.accent,
                      fontSize: '9px',
                      fontWeight: 700,
                      borderRadius: '999px',
                      padding: '3px 10px',
                      letterSpacing: '0.08em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {c.season}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: '14px',
                    fontWeight: 800,
                    color: 'white',
                    lineHeight: 1.4,
                    marginBottom: '8px',
                  }}
                >
                  {c.title}
                </h3>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(22,192,90,0.1)',
                    border: '1px solid rgba(22,192,90,0.25)',
                    borderRadius: '999px',
                    padding: '3px 10px',
                    marginBottom: '10px',
                  }}
                >
                  <span
                    style={{
                      color: '#16C05A',
                      fontSize: '10px',
                      fontWeight: 700,
                    }}
                  >
                    {c.roi}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '12px',
                    color: '#64748B',
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginBottom: '32px', marginTop: '80px' }}>
            <span className="hp-badge">RESULTS</span>
            <h2
              className="hp-h2"
              style={{ color: 'white', marginBottom: '12px' }}
            >
              Real HVAC Client <span style={{ color: '#16C05A' }}>Results</span>
            </h2>
            <p
              style={{
                color: '#64748B',
                fontSize: '16px',
                maxWidth: '480px',
                margin: '0 auto',
              }}
            >
              Below is a snapshot of what HVAC contractors using our system
              typically see. We measure one thing: booked appointments on your
              calendar.
            </p>
          </div>
          <div className="hp-table-wrap">
            <table className="hp-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Typical Result</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Appointments Booked Monthly', '18 to 35'],
                  ['Cost Per Replacement Appointment', '$85 to $150'],
                  ['Average Replacement Job Value', '$7,200'],
                  ['Typical Close Rate', '35% to 55%'],
                  ['Estimated ROI', '~48x ad spend'],
                ].map(([m, r], i) => (
                  <tr key={i}>
                    <td>{m}</td>
                    <td>{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="hp-divider" />

      <section
        id="hvac-system"
        className="hp-section"
        style={{ backgroundColor: '#000' }}
      >
        <div className="hp-container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="hp-badge">HOW IT WORKS</span>
            <h2
              className="hp-h2"
              style={{ color: 'white', marginBottom: '14px' }}
            >
              What Our HVAC Marketing{' '}
              <span style={{ color: '#16C05A' }}>Package Includes</span>
            </h2>
            <p
              style={{
                color: '#64748B',
                fontSize: '16px',
                maxWidth: '520px',
                margin: '0 auto',
              }}
            >
              Most hvac marketing companies focus on running ads or improving
              website rankings. Voxflow Media builds a complete homeowner
              acquisition system from ad to appointment.
            </p>
          </div>
          <div className="hp-steps-grid">
            {[
              {
                num: '01',
                icon: '🔬',
                accent: '#3B82F6',
                title: 'Market and Competitor Research',
                desc: 'We analyse your service area, competitors and homeowner demand patterns before launching. This means campaigns are built around real opportunities in your specific market.',
              },
              {
                num: '02',
                icon: '📡',
                accent: '#A855F7',
                title: 'Facebook and Instagram Ad Campaigns',
                desc: 'We design ad campaigns specifically for HVAC homeowners considering repair or replacement. Custom creative, targeting and messaging for your service area and season.',
              },
              {
                num: '03',
                icon: '📋',
                accent: '#F59E0B',
                title: 'High-Converting Lead Funnels',
                desc: 'Landing pages and lead forms designed to capture homeowner interest fast. Mobile-optimised and built to convert scrollers into qualified inquiries within seconds.',
              },
              {
                num: '04',
                icon: '🤖',
                accent: '#EF4444',
                title: 'AI Lead Qualification',
                desc: 'Our AI system instantly responds to every homeowner inquiry and gathers key details about the job. Type of system, age, urgency and budget are all confirmed automatically.',
              },
              {
                num: '05',
                icon: '📞',
                accent: '#16C05A',
                title: 'Human Appointment Setters',
                desc: 'Our team confirms interest and schedules a consultation directly on your calendar. You only speak to homeowners who are qualified, interested and ready to move forward.',
              },
              {
                num: '06',
                icon: '⚙️',
                accent: '#06B6D4',
                title: 'CRM Integration and Reporting',
                desc: 'All homeowner conversations and appointment details are automatically logged. Simple reporting shows you exactly how many appointments your campaigns produce each week.',
              },
            ].map((step, i) => (
              <div
                key={i}
                className="hp-card"
                style={{
                  background: 'linear-gradient(160deg, #0D1117, #060A0F)',
                  border:
                    step.num === '05'
                      ? '1px solid rgba(22,192,90,0.35)'
                      : '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '20px',
                  padding: '24px 20px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow:
                    step.num === '05'
                      ? '0 8px 40px rgba(22,192,90,0.1)'
                      : 'none',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${step.accent}, transparent)`,
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-8px',
                    right: '10px',
                    fontSize: '68px',
                    fontWeight: 900,
                    color: 'rgba(255,255,255,0.025)',
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  {step.num}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: `${step.accent}18`,
                      border: `1px solid ${step.accent}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                    }}
                  >
                    {step.icon}
                  </div>
                  <span
                    style={{
                      background: `${step.accent}15`,
                      border: `1px solid ${step.accent}40`,
                      color: step.accent,
                      fontSize: '9px',
                      fontWeight: 700,
                      borderRadius: '999px',
                      padding: '3px 10px',
                      letterSpacing: '0.08em',
                    }}
                  >
                    STEP {step.num}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: '14px',
                    fontWeight: 800,
                    color: 'white',
                    lineHeight: 1.4,
                    marginBottom: '10px',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: '12px',
                    color: '#64748B',
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hp-divider" />

      <section
        className="hp-section"
        style={{ background: 'linear-gradient(180deg, #000, #020D05)' }}
      >
        <div className="hp-container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="hp-badge">WHY VOXFLOW</span>
            <h2
              className="hp-h2"
              style={{ color: 'white', marginBottom: '12px' }}
            >
              Why Voxflow Is Different From Typical{' '}
              <span style={{ color: '#16C05A' }}>
                HVAC Marketing Agencies
              </span>
            </h2>
            <p
              style={{
                color: '#64748B',
                fontSize: '16px',
                maxWidth: '540px',
                margin: '0 auto',
              }}
            >
              Most agencies measure success with traffic, clicks and rankings.
              HVAC contractors care about one thing: revenue. That is the only
              metric we are built around.
            </p>
          </div>
          <div className="hp-pkg-grid">
            {[
              {
                icon: '📅',
                accent: '#16C05A',
                title: 'Appointment-Focused',
                desc: 'We generate confirmed homeowner appointments, not leads that sit in a CRM waiting to be chased.',
              },
              {
                icon: '🔒',
                accent: '#3B82F6',
                title: '100% Exclusive Leads',
                desc: 'Every homeowner is exclusive to your company. We never sell the same lead to multiple HVAC contractors.',
              },
              {
                icon: '⚡',
                accent: '#F59E0B',
                title: '60-Second AI Response',
                desc: 'Our AI contacts every homeowner in under 60 seconds. Speed is the single biggest factor in HVAC conversion rates.',
              },
              {
                icon: '🛡️',
                accent: '#A855F7',
                title: '30-Day Guarantee',
                desc: 'If we do not produce results in 30 days, we keep working at no cost until we do. No exceptions.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="hp-card"
                style={{
                  background: 'linear-gradient(160deg, #0D1117, #060A0F)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '20px',
                  padding: '28px 22px',
                  position: 'relative',
                  overflow: 'hidden',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
                  }}
                />
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '18px',
                    background: `${card.accent}18`,
                    border: `1px solid ${card.accent}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    margin: '0 auto 18px',
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  style={{
                    fontSize: '15px',
                    fontWeight: 800,
                    color: 'white',
                    marginBottom: '10px',
                    lineHeight: 1.3,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '13px',
                    color: '#64748B',
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: '40px',
              textAlign: 'center',
              padding: '40px',
              background:
                'linear-gradient(135deg, #0A1F0A, #051508)',
              border: '1px solid rgba(22,192,90,0.3)',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background:
                  'linear-gradient(90deg, transparent, #16C05A, transparent)',
              }}
            />
            <div
              style={{
                fontSize: 'clamp(18px,2.5vw,28px)',
                fontWeight: 900,
                color: 'white',
                marginBottom: '8px',
              }}
            >
              At $7,200 average job value,{' '}
              <span style={{ color: '#16C05A' }}>
                one closed appointment pays for the entire month of ads.
              </span>
            </div>
            <p
              style={{
                color: '#64748B',
                fontSize: '15px',
                margin: 0,
              }}
            >
              Most clients close 6 to 12 replacement jobs per month from our
              campaigns.
            </p>
          </div>
        </div>
      </section>

      <div className="hp-divider" />

      <section
        id="faq"
        className="hp-section"
        style={{ backgroundColor: '#000' }}
      >
        <div className="hp-container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="hp-badge">FAQ</span>
            <h2
              className="hp-h2"
              style={{ color: 'white', marginBottom: '12px' }}
            >
              Frequently Asked Questions About{' '}
              <span style={{ color: '#16C05A' }}>HVAC Digital Marketing</span>
            </h2>
          </div>
          {[
            {
              q: 'What makes HVAC digital marketing different from traditional marketing?',
              a: 'HVAC digital marketing uses platforms like Facebook and automation systems to reach homeowners online. Instead of relying on referrals or offline advertising, contractors generate consistent homeowner inquiries and appointments through targeted campaigns. The key difference is speed and targeting: you reach the right homeowners in your area before they start comparing multiple companies.',
            },
            {
              q: 'Do you provide local SEO for HVAC companies?',
              a: 'While Voxflow Media primarily focuses on paid acquisition systems using Facebook and Instagram ads, we also support strategies related to local seo for hvac businesses so companies can build long-term visibility alongside their paid campaigns. SEO and paid ads work well together over time.',
            },
            {
              q: 'How quickly can we start getting HVAC appointments?',
              a: 'Most HVAC campaigns start generating homeowner inquiries within the first week. Once follow-up automation and appointment setting are active, contractors often begin receiving booked consultations within 7 to 14 days. We guarantee measurable results within 30 days or we keep working for free.',
            },
            {
              q: 'Are the leads exclusive to our company?',
              a: 'Yes. Every homeowner who enters the system is exclusive to your company. We do not resell the same lead to multiple HVAC contractors. This is a fundamental difference between Voxflow Media and lead platforms that distribute the same contact to five companies at once.',
            },
            {
              q: 'What happens if the system does not produce results?',
              a: 'Voxflow Media offers a 30-day results guarantee. If we do not produce measurable results within the first month, we continue working at no additional cost until we do. We are confident in the system because we have proven it works across multiple HVAC markets.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={'hp-faq' + (openFaq === i ? ' open' : '')}
              onClick={() =>
                setOpenFaq(openFaq === i ? null : i)
              }
            >
              <button className="hp-faq-btn">
                <span className="hp-faq-q">{item.q}</span>
                <span className="hp-faq-plus">+</span>
              </button>
              <div className="hp-faq-ans">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="hp-divider" />

      <section
        className="hp-section"
        style={{
          background: 'linear-gradient(180deg, #000, #020D05)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '-200px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '900px',
            height: '500px',
            background:
              'radial-gradient(ellipse, rgba(22,192,90,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="hp-container"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <span className="hp-badge">READY TO GROW?</span>
          <h2
            className="hp-h2"
            style={{
              color: 'white',
              marginBottom: '16px',
              maxWidth: '680px',
              margin: '0 auto 16px',
            }}
          >
            Ready to Generate More{' '}
            <span style={{ color: '#16C05A' }}>
              HVAC Replacement Jobs?
            </span>
          </h2>
          <p
            style={{
              color: '#64748B',
              fontSize: '16px',
              maxWidth: '520px',
              margin: '0 auto 36px',
              lineHeight: 1.7,
            }}
          >
            Book a free strategy call. We will show you the homeowner audience
            size in your service area, your estimated cost per replacement
            appointment and a seasonal campaign plan built for your HVAC
            company.
          </p>
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              gap: '10px',
              textAlign: 'left',
              background: '#0D1117',
              border: '1px solid #1E293B',
              borderRadius: '20px',
              padding: '28px 32px',
              marginBottom: '36px',
            }}
          >
            {[
              'Analyse your service area and local HVAC demand',
              'Show you exactly how our appointment system works',
              'Estimate your cost per booked replacement appointment',
              'Build a seasonal campaign plan for your company',
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}
              >
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'rgba(22,192,90,0.15)',
                    border: '1px solid rgba(22,192,90,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      color: '#16C05A',
                      fontSize: '11px',
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>
                </div>
                <span
                  style={{
                    color: '#E2E8F0',
                    fontSize: '14px',
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
          <div className="hp-cta-row">
            <button
              className="hp-btn-green"
              style={{ padding: '16px 44px', fontSize: '16px' }}
              onClick={() => (window.location.href = '/book-a-call')}
            >
              Book Your Free HVAC Growth Strategy Call
            </button>
          </div>
          <p
            style={{
              color: '#334155',
              fontSize: '12px',
              marginTop: '16px',
            }}
          >
            No pressure. No long presentations. Just a direct conversation about
            your HVAC company.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

