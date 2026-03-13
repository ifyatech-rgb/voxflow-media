'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function FacebookAdsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <style>{`
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Inter', sans-serif; background: #000; color: white; -webkit-font-smoothing: antialiased; overflow-x: hidden; }

/* NAV */
.fp-nav { position: fixed; top: 20px; left: 50%; transform: translateX(-50%); z-index: 100; display: flex; align-items: center; justify-content: space-between; gap: 32px; background: rgba(10,10,10,0.92); border: 1px solid #1E293B; border-radius: 999px; padding: 10px 10px 10px 22px; box-shadow: 0 8px 40px rgba(0,0,0,0.5); backdrop-filter: blur(20px); min-width: 660px; max-width: 860px; }
.fp-nav-links { display: flex; align-items: center; gap: 28px; }
.fp-nav-link { color: #94A3B8; text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; white-space: nowrap; }
.fp-nav-link:hover { color: white; }
.fp-hamburger { display: none; background: transparent; border: 1px solid #1E293B; border-radius: 8px; padding: 6px 10px; cursor: pointer; color: white; font-size: 16px; }
@media (max-width: 768px) {
  .fp-nav-links { display: none !important; }
  .fp-hamburger { display: block !important; }
  .fp-nav { min-width: unset !important; width: calc(100% - 32px) !important; padding: 8px 8px 8px 16px !important; gap: 12px !important; }
}

/* LAYOUT */
.fp-section { padding: 100px 0; }
.fp-container { max-width: 1120px; margin: 0 auto; padding: 0 40px; }
.fp-hero-section { padding-top: 160px; padding-bottom: 100px; }
@media (max-width: 640px) {
  .fp-hero-section { padding-top: 120px !important; padding-bottom: 56px !important; }
  .fp-section { padding: 56px 0 !important; }
  .fp-container { padding: 0 20px !important; }
}
@media (min-width: 641px) and (max-width: 1024px) {
  .fp-hero-section { padding-top: 130px !important; padding-bottom: 72px !important; }
  .fp-section { padding: 72px 0 !important; }
  .fp-container { padding: 0 32px !important; }
}
@media (min-width: 1025px) {
  .fp-hero-section { padding-top: 150px !important; }
}

/* TYPOGRAPHY */
.fp-h1 { font-size: clamp(32px, 4.5vw, 62px); font-weight: 900; line-height: 1.08; letter-spacing: -0.025em; }
.fp-h2 { font-size: clamp(26px, 3.5vw, 48px); font-weight: 900; line-height: 1.1; }
.fp-hero-sub { font-size: clamp(15px, 1.6vw, 19px); font-weight: 500; color: #94A3B8; line-height: 1.6; max-width: 680px; margin: 0 auto; }
@media (max-width: 640px) { .fp-h1 { font-size: 30px !important; } .fp-h2 { font-size: 24px !important; } .fp-hero-sub { font-size: 15px !important; } }

/* GRIDS */
.fp-why-grid   { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.fp-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.fp-ind-grid   { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 24px; }
.fp-pipe-grid  { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; margin-top: 24px; }
.fp-hero-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; max-width: 720px; margin: 0 auto 36px; }
@media (max-width: 1024px) {
  .fp-why-grid   { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 20px !important; }
  .fp-steps-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 20px !important; }
  .fp-ind-grid   { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 20px !important; }
  .fp-pipe-grid  { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 20px !important; }
}
@media (max-width: 640px) {
  .fp-why-grid   { grid-template-columns: minmax(0, 1fr) !important; gap: 16px !important; }
  .fp-steps-grid { grid-template-columns: minmax(0, 1fr) !important; gap: 16px !important; }
  .fp-ind-grid   { grid-template-columns: minmax(0, 1fr) !important; gap: 16px !important; }
  .fp-pipe-grid  { grid-template-columns: minmax(0, 1fr) !important; gap: 16px !important; }
  .fp-hero-stats { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 10px !important; }
}

/* CARD HOVER */
.fp-card { transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; }
.fp-card:hover { transform: translateY(-8px); border-color: rgba(22,192,90,0.5) !important; box-shadow: 0 20px 50px rgba(22,192,90,0.1) !important; }

/* TABLE */
.fp-table { width: 100%; border-collapse: collapse; }
.fp-table th { background: #0D1117; color: #64748B; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 14px 24px; text-align: left; border-bottom: 1px solid #1E293B; }
.fp-table td { padding: 16px 24px; border-bottom: 1px solid rgba(30,41,59,0.6); font-size: 14px; color: #E2E8F0; }
.fp-table tr:last-child td { border-bottom: none; }
.fp-table td:last-child { color: #16C05A; font-weight: 700; }
.fp-table-wrap { overflow-x: auto; border-radius: 20px; border: 1px solid #1E293B; }
@media (max-width: 640px) { .fp-table th, .fp-table td { padding: 10px 14px !important; font-size: 12px !important; } }

/* FAQ */
.fp-faq { background: #0D1117; border: 1px solid #1E293B; border-radius: 16px; overflow: hidden; transition: all 0.25s ease; margin-bottom: 12px; }
.fp-faq.open { background: linear-gradient(135deg, #0A1F0A, #080D13); border-color: rgba(22,192,90,0.4) !important; }
.fp-faq-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px 24px; background: transparent; border: none; cursor: pointer; text-align: left; }
.fp-faq-q { color: white; font-weight: 700; font-size: 15px; line-height: 1.4; font-family: inherit; }
.fp-faq-plus { flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; border: 1px solid rgba(22,192,90,0.3); display: flex; align-items: center; justify-content: center; color: #16C05A; font-size: 20px; transition: transform 0.25s ease; }
.fp-faq.open .fp-faq-plus { transform: rotate(45deg); }
.fp-faq-ans { padding: 0 24px 20px; color: #94A3B8; font-size: 14px; line-height: 1.75; display: none; }
.fp-faq.open .fp-faq-ans { display: block; }
@media (max-width: 640px) { .fp-faq-btn { padding: 16px 18px !important; } .fp-faq-q { font-size: 14px !important; } .fp-faq-ans { padding: 0 18px 16px !important; } }

/* BUTTONS */
.fp-btn-green { background: #16C05A; color: black; border: none; border-radius: 999px; padding: 14px 32px; font-size: 15px; font-weight: 700; cursor: pointer; box-shadow: 0 0 30px rgba(22,192,90,0.35); transition: filter 0.2s, transform 0.2s, box-shadow 0.2s; font-family: inherit; }
.fp-btn-green:hover { filter: brightness(1.1); transform: scale(1.04); box-shadow: 0 0 50px rgba(22,192,90,0.55); }
.fp-btn-ghost { background: transparent; color: white; border: 1px solid #334155; border-radius: 999px; padding: 14px 32px; font-size: 15px; font-weight: 600; cursor: pointer; transition: background 0.2s, border-color 0.2s, transform 0.2s; font-family: inherit; }
.fp-btn-ghost:hover { background: rgba(22,192,90,0.08); border-color: rgba(22,192,90,0.4); transform: scale(1.03); }

/* CTA ROW */
.fp-cta-row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
@media (max-width: 640px) { .fp-cta-row { flex-direction: column !important; align-items: center !important; } .fp-cta-row button { width: 100% !important; max-width: 320px !important; } }

/* BADGE */
.fp-badge { display: inline-block; background: rgba(22,192,90,0.1); border: 1px solid rgba(22,192,90,0.25); color: #16C05A; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; border-radius: 999px; padding: 6px 18px; text-transform: uppercase; margin-bottom: 20px; }

/* DIVIDER */
.fp-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(22,192,90,0.25), transparent); }

/* IND CARD */
.fp-ind-card { background: #0D1117; border: 1px solid #1E293B; border-radius: 16px; padding: 20px 16px; text-align: center; transition: all 0.25s ease; cursor: default; }
.fp-ind-card:hover { border-color: rgba(22,192,90,0.4); background: rgba(22,192,90,0.05); transform: translateY(-4px); }

/* ANIMATIONS */
@keyframes fpFadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
.fp-a1 { animation: fpFadeUp 0.7s ease 0.1s both; }
.fp-a2 { animation: fpFadeUp 0.7s ease 0.25s both; }
.fp-a3 { animation: fpFadeUp 0.7s ease 0.4s both; }
.fp-a4 { animation: fpFadeUp 0.7s ease 0.55s both; }
.fp-a5 { animation: fpFadeUp 0.7s ease 0.7s both; }
      `}</style>

      <Navbar />

      <section
        className="fp-hero-section"
        style={{
          backgroundColor: '#000',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* BG glow */}
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
        {/* BG grid */}
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
          className="fp-container"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div className="fp-a1">
            <span className="fp-badge">FACEBOOK ADS AGENCY</span>
          </div>
          <h1
            className="fp-h1 fp-a2"
            style={{ color: 'white', marginBottom: '20px' }}
          >
            Facebook Ads for{' '}
            <span style={{ color: '#16C05A' }}>Home Improvement</span> Companies
            That Book Real Jobs
          </h1>
          <p className="fp-hero-sub fp-a3" style={{ marginBottom: '32px' }}>
            If you run a roofing, HVAC, remodeling or painting company and you
            are tired of chasing cold leads and no-shows, this is for you. We
            do not send you leads. We book confirmed homeowner appointments
            directly on your calendar.
          </p>

          <div className="fp-hero-stats fp-a4">
            {[
              { num: '312+', label: 'Appointments/Month', sub: 'across all clients' },
              {
                num: '30 Days',
                label: 'To First Result',
                sub: 'guaranteed or free',
                green: true,
              },
              {
                num: '100%',
                label: 'Done For You',
                sub: 'we handle everything',
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
                    fontSize: 'clamp(20px,2.5vw,30px)',
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
          <div className="fp-cta-row fp-a5">
            <button
              className="fp-btn-green"
              style={{ padding: '15px 36px', fontSize: '16px' }}
              onClick={() => (window.location.href = '/book-a-call')}
            >
              Book Your Free Strategy Call
            </button>
            <button
              className="fp-btn-ghost"
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
      <div className="fp-divider" />

      <section className="fp-section" style={{ backgroundColor: '#000' }}>
        <div className="fp-container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="fp-badge">WHY FACEBOOK</span>
            <h2
              className="fp-h2"
              style={{ color: 'white', marginBottom: '14px' }}
            >
              Why Facebook Ads Beat Every Other{' '}
              <span style={{ color: '#16C05A' }}>Lead Source in 2026</span>
            </h2>
            <p
              style={{
                color: '#64748B',
                fontSize: '16px',
                maxWidth: '560px',
                margin: '0 auto',
              }}
            >
              Contractors today have dozens of places they can get leads. One
              channel consistently produces the lowest cost homeowner
              opportunities.
            </p>
          </div>
          <div className="fp-why-grid">
            {[
              {
                icon: '🎯',
                title: 'Reach Before They Search',
                accent: '#3B82F6',
                desc: 'Most channels only capture people after they start comparing contractors. Facebook lets you reach homeowners before they search on Google. You have zero competition at that moment.',
              },
              {
                icon: '🔍',
                title: 'Unmatched Homeowner Targeting',
                accent: '#A855F7',
                desc: 'Target by home ownership, household income, location, home age and renovation interest. You only pay to reach people who actually own homes and can afford your projects.',
              },
              {
                icon: '⚡',
                title: 'Results in Days Not Months',
                accent: '#F59E0B',
                desc: 'SEO takes 6 to 12 months. Google Ads require expensive bidding wars. Facebook ads can generate homeowner inquiries within 48 to 72 hours of campaign launch.',
              },
              {
                icon: '💰',
                title: 'Lower Cost Per Opportunity',
                accent: '#EF4444',
                desc: 'Google Ads cost $80 to $200 per click and $300 to $800 per lead in most contractor markets. Our Facebook system generates qualified homeowner inquiries at a fraction of that cost.',
              },
              {
                icon: '🤖',
                title: '60-Second AI Follow-Up',
                accent: '#16C05A',
                desc: 'The moment a homeowner submits, our AI contacts them in under 60 seconds day, night, weekends and holidays. By the time your competitor sees the lead, we have already booked the appointment.',
              },
              {
                icon: '📞',
                title: 'Human Appointment Setters',
                accent: '#06B6D4',
                desc: 'Real people call every qualified lead, answer questions and book a confirmed time on your calendar. You show up to homeowners who are expecting you and ready to get a quote.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="fp-card"
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
      <div className="fp-divider" />

      <section
        id="how-it-works"
        className="fp-section"
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
          className="fp-container"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="fp-badge">HOW IT WORKS</span>
            <h2
              className="fp-h2"
              style={{ color: 'white', marginBottom: '14px' }}
            >
              How Our System Turns{' '}
              <span style={{ color: '#16C05A' }}>Ads Into Appointments</span>
            </h2>
            <p
              style={{
                color: '#64748B',
                fontSize: '16px',
                maxWidth: '500px',
                margin: '0 auto',
              }}
            >
              Running ads alone does not produce consistent results. What works
              is a complete system designed for home improvement lead
              generation.
            </p>
          </div>
          <div className="fp-steps-grid">
            {[
              {
                num: '01',
                icon: '📡',
                accent: '#3B82F6',
                title: 'Local Facebook and Instagram Campaigns',
                desc: 'We launch highly targeted ad campaigns in your service area. The ads focus on homeowner problems including roof replacement, remodeling upgrades, HVAC replacement and painting. Our goal is simple: get qualified homeowners to raise their hand.',
              },
              {
                num: '02',
                icon: '🎯',
                accent: '#A855F7',
                title: 'High-Converting Lead Capture Funnels',
                desc: 'When homeowners click your ad, they land on a simple lead form designed for contractors. No complicated pages. No confusion. Just a quick form asking for the details needed to qualify the project.',
              },
              {
                num: '03',
                icon: '🤖',
                accent: '#F59E0B',
                title: 'Instant AI Follow-Up',
                desc: 'The moment a lead submits the form, our AI system responds instantly. Homeowners receive messages confirming their request and asking quick qualification questions. This dramatically increases response rates.',
              },
              {
                num: '04',
                icon: '🤝',
                accent: '#EF4444',
                title: 'Human Appointment Setting',
                desc: 'Once the homeowner responds, our team steps in. Real people communicate with the homeowner and schedule a consultation directly on your calendar. This is the step most agencies skip entirely.',
              },
              {
                num: '05',
                icon: '📅',
                accent: '#16C05A',
                title: 'Calendar Booking',
                desc: 'Appointments are booked at times that work for you. You receive all homeowner information before the appointment. No surprises. No confusion. Just show up and close.',
              },
              {
                num: '06',
                icon: '📈',
                accent: '#06B6D4',
                title: 'Ongoing Optimisation',
                desc: 'We constantly analyse ad performance, messaging and targeting. This keeps the cost per appointment low and the volume of booked jobs consistent month after month.',
              },
            ].map((step, i) => (
              <div
                key={i}
                className="fp-card"
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
          <div
            style={{
              marginTop: '48px',
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
                fontSize: 'clamp(18px, 2.5vw, 26px)',
                fontWeight: 900,
                color: 'white',
                marginBottom: '8px',
              }}
            >
              The result?{' '}
              <span style={{ color: '#16C05A' }}>
                Homeowners showing up ready to discuss their project.
              </span>
            </div>
            <p
              style={{
                color: '#64748B',
                fontSize: '15px',
                margin: 0,
              }}
            >
              Not leads sitting in a spreadsheet you never get to.
            </p>
          </div>
        </div>
      </section>
      <div className="fp-divider" />

      <section className="fp-section" style={{ backgroundColor: '#000' }}>
        <div className="fp-container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="fp-badge">TRADES WE SERVE</span>
            <h2
              className="fp-h2"
              style={{ color: 'white', marginBottom: '12px' }}
            >
              If You Install, Repair or Upgrade{' '}
              <span style={{ color: '#16C05A' }}>Homes, We Serve You</span>
            </h2>
            <p
              style={{
                color: '#64748B',
                fontSize: '16px',
                maxWidth: '540px',
                margin: '0 auto',
              }}
            >
              Voxflow Media works exclusively with home improvement companies.
              Every campaign, every ad and every follow-up script is built
              specifically for your industry.
            </p>
          </div>
          <div className="fp-ind-grid">
            {[
              { icon: '🏠', name: 'Roofing Companies', note: 'Storm and replacement' },
              { icon: '🍳', name: 'Kitchen Remodelers', note: 'Full renovations' },
              { icon: '🛁', name: 'Bathroom Remodeling', note: 'Upgrades and installs' },
              { icon: '🔨', name: 'General Contractors', note: 'Home improvement' },
              { icon: '❄️', name: 'HVAC Installation', note: 'Replace and service' },
              { icon: '🖌️', name: 'Exterior Painting', note: 'Full paint jobs' },
              { icon: '🎨', name: 'Interior Painting', note: 'Any room, any size' },
              { icon: '🪟', name: 'Window Replacement', note: 'Energy upgrades' },
              { icon: '🚪', name: 'Door Installation', note: 'Entry and interior' },
              { icon: '🏗️', name: 'Siding Contractors', note: 'Vinyl, wood and more' },
            ].map((ind, i) => (
              <div
                key={i}
                className="fp-ind-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(22,192,90,0.4)';
                  e.currentTarget.style.background = 'rgba(22,192,90,0.05)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#1E293B';
                  e.currentTarget.style.background = '#0D1117';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{ fontSize: '28px', marginBottom: '10px' }}
                >
                  {ind.icon}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: '4px',
                  }}
                >
                  {ind.name}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: '#475569',
                  }}
                >
                  {ind.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="fp-divider" />

      <section
        className="fp-section"
        style={{
          background: 'linear-gradient(180deg, #000, #020D05)',
        }}
      >
        <div className="fp-container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="fp-badge">RESULTS</span>
            <h2
              className="fp-h2"
              style={{ color: 'white', marginBottom: '12px' }}
            >
              What Our Clients{' '}
              <span style={{ color: '#16C05A' }}>Actually Get</span>
            </h2>
            <p
              style={{
                color: '#64748B',
                fontSize: '16px',
                maxWidth: '480px',
                margin: '0 auto',
              }}
            >
              Contractors do not care about marketing metrics. You care about
              booked jobs. That is the only thing we measure.
            </p>
          </div>
          <div className="fp-table-wrap">
            <table className="fp-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Typical Result</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Appointments Booked (Last 30 Days)', '312+'],
                  ['Average Cost Per Appointment', '$85 to $180'],
                  ['Show-Up Rate', '70% to 85%'],
                  ['Average Project Value', '$8,000 to $35,000'],
                  ['Typical Monthly Opportunities', '20 to 60+'],
                ].map(([m, r], i) => (
                  <tr key={i}>
                    <td>{m}</td>
                    <td>{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="fp-pipe-grid">
            <div
              style={{
                background:
                  'linear-gradient(135deg, #0A1F0A, #051508)',
                border: '1px solid rgba(22,192,90,0.25)',
                borderRadius: '20px',
                padding: '28px 24px',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(26px,3vw,40px)',
                  fontWeight: 900,
                  color: '#16C05A',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                $50k to $250k+
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: '#94A3B8',
                  fontWeight: 600,
                }}
              >
                Monthly pipeline added once the system is running
              </div>
            </div>
            <div
              style={{
                background: '#0D1117',
                border: '1px solid #1E293B',
                borderRadius: '20px',
                padding: '28px 24px',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(26px,3vw,40px)',
                  fontWeight: 900,
                  color: 'white',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                94%
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: '#94A3B8',
                  fontWeight: 600,
                }}
              >
                Client retention rate past month 3
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="fp-divider" />

      <section
        id="faq"
        className="fp-section"
        style={{ backgroundColor: '#000' }}
      >
        <div className="fp-container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="fp-badge">FAQ</span>
            <h2
              className="fp-h2"
              style={{ color: 'white', marginBottom: '12px' }}
            >
              Frequently Asked Questions About{' '}
              <span style={{ color: '#16C05A' }}>
                Facebook Ads for Contractors
              </span>
            </h2>
          </div>
          {[
            {
              q: 'Do Facebook ads actually work for contractors?',
              a: 'Yes. When executed correctly, Facebook ads for home improvement companies are one of the most effective ways to generate homeowner interest. Facebook allows contractors to reach homeowners before they search for a contractor, which often leads to lower competition and higher close rates. Most clients see their first booked appointments within 7 to 14 days of launch.',
            },
            {
              q: 'How quickly can we start getting appointments?',
              a: 'Most campaigns begin generating homeowner inquiries within the first week. Once the follow-up system and appointment setting process are active, many contractors start seeing confirmed appointments within 7 to 14 days. We guarantee results within 30 days or we keep working for free until you get them.',
            },
            {
              q: 'Are the leads exclusive?',
              a: 'Yes. Every homeowner who submits their information through our campaigns is exclusive to your company. We do not sell the same lead to multiple contractors. This is one of the biggest differences between Voxflow Media and platforms like HomeAdvisor or Angi.',
            },
            {
              q: 'What types of home improvement companies do you work with?',
              a: 'We work with roofers, remodelers, HVAC companies, painters, window installers, siding contractors, and other home improvement businesses. Our campaigns are built specifically for home improvement. We do not work with restaurants, gyms or unrelated industries.',
            },
            {
              q: 'What if the system does not produce results?',
              a: 'We offer a simple 30-day guarantee. If Voxflow Media does not generate results within the first 30 days, we continue working at no additional cost until we do. We are that confident in the system because we have proven it works in every market we have entered.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={'fp-faq' + (openFaq === i ? ' open' : '')}
              onClick={() =>
                setOpenFaq(openFaq === i ? null : i)
              }
            >
              <button className="fp-faq-btn">
                <span className="fp-faq-q">{item.q}</span>
                <span className="fp-faq-plus">+</span>
              </button>
              <div className="fp-faq-ans">{item.a}</div>
            </div>
          ))}
        </div>
      </section>
      <div className="fp-divider" />

      <section
        className="fp-section"
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
          className="fp-container"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <span className="fp-badge">READY TO GROW?</span>
          <h2
            className="fp-h2"
            style={{
              color: 'white',
              marginBottom: '16px',
              maxWidth: '680px',
              margin: '0 auto 16px',
            }}
          >
            Stop Chasing Leads. Start{' '}
            <span style={{ color: '#16C05A' }}>
              Showing Up to Booked Jobs.
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
            Book a free 30-minute strategy call. We will show you the exact
            homeowner audience size in your service area, your estimated cost
            per appointment, and a campaign plan for your company.
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
              'Analyse your current lead generation setup',
              'Show you exactly how our appointment system works',
              'Estimate homeowner opportunities in your market',
              'Outline the steps to launch your campaigns',
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
          <div className="fp-cta-row">
            <button
              className="fp-btn-green"
              style={{ padding: '16px 44px', fontSize: '16px' }}
              onClick={() => (window.location.href = '/book-a-call')}
            >
              Book Your Free Strategy Call
            </button>
          </div>
          <p
            style={{
              color: '#334155',
              fontSize: '12px',
              marginTop: '16px',
            }}
          >
            No pressure. No long sales pitch. Just a direct conversation about
            whether our system fits your company.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

