'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function ContractorMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <style>{`
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Inter', sans-serif; background: #000; color: white; -webkit-font-smoothing: antialiased; overflow-x: hidden; }

/* NAV */
.cm-nav { position: fixed; top: 20px; left: 50%; transform: translateX(-50%); z-index: 100; display: flex; align-items: center; justify-content: space-between; gap: 32px; background: rgba(10,10,10,0.92); border: 1px solid #1E293B; border-radius: 999px; padding: 10px 10px 10px 22px; box-shadow: 0 8px 40px rgba(0,0,0,0.5); backdrop-filter: blur(20px); min-width: 660px; max-width: 860px; }
.cm-nav-links { display: flex; align-items: center; gap: 28px; }
.cm-nav-link { color: #94A3B8; text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; white-space: nowrap; }
.cm-nav-link:hover { color: white; }
.cm-hamburger { display: none; background: transparent; border: 1px solid #1E293B; border-radius: 8px; padding: 6px 10px; cursor: pointer; color: white; font-size: 16px; }
@media (max-width: 768px) {
  .cm-nav-links { display: none !important; }
  .cm-hamburger { display: block !important; }
  .cm-nav { min-width: unset !important; width: calc(100% - 32px) !important; padding: 8px 8px 8px 16px !important; gap: 12px !important; }
}

/* LAYOUT */
.cm-section { padding: 100px 0; }
.cm-container { max-width: 1120px; margin: 0 auto; padding: 0 40px; }
.cm-hero-section { padding-top: 160px; padding-bottom: 100px; }
@media (max-width: 640px) {
  .cm-hero-section { padding-top: 120px !important; padding-bottom: 56px !important; }
  .cm-section { padding: 56px 0 !important; }
  .cm-container { padding: 0 20px !important; }
}
@media (min-width: 641px) and (max-width: 1024px) {
  .cm-hero-section { padding-top: 130px !important; padding-bottom: 72px !important; }
  .cm-section { padding: 72px 0 !important; }
  .cm-container { padding: 0 32px !important; }
}
@media (min-width: 1025px) {
  .cm-hero-section { padding-top: 150px !important; }
}

/* TYPOGRAPHY */
.cm-h1 { font-size: clamp(32px, 4.5vw, 62px); font-weight: 900; line-height: 1.08; letter-spacing: -0.025em; }
.cm-h2 { font-size: clamp(26px, 3.5vw, 48px); font-weight: 900; line-height: 1.1; }
.cm-hero-sub { font-size: clamp(15px, 1.6vw, 19px); font-weight: 500; color: #94A3B8; line-height: 1.6; max-width: 680px; margin: 0 auto; }
@media (max-width: 640px) { .cm-h1 { font-size: 30px !important; } .cm-h2 { font-size: 24px !important; } .cm-hero-sub { font-size: 15px !important; } }

/* GRIDS */
.cm-why-grid   { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.cm-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.cm-trades-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 24px; }
.cm-reasons-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.cm-hero-stats { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 12px; max-width: 1000px; margin: 0 auto 36px; }
@media (max-width: 1024px) {
  .cm-why-grid    { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 20px !important; }
  .cm-steps-grid  { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 20px !important; }
  .cm-trades-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; gap: 20px !important; }
  .cm-reasons-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 20px !important; }
  .cm-hero-stats  { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
}
@media (max-width: 640px) {
  .cm-why-grid    { grid-template-columns: minmax(0, 1fr) !important; gap: 16px !important; }
  .cm-steps-grid  { grid-template-columns: minmax(0, 1fr) !important; gap: 16px !important; }
  .cm-trades-grid { grid-template-columns: minmax(0, 1fr) !important; gap: 16px !important; }
  .cm-reasons-grid { grid-template-columns: minmax(0, 1fr) !important; gap: 16px !important; }
  .cm-hero-stats  { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 10px !important; }
}

/* CARD HOVER */
.cm-card { transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; }
.cm-card:hover { transform: translateY(-8px); border-color: rgba(22,192,90,0.5) !important; box-shadow: 0 20px 50px rgba(22,192,90,0.1) !important; }

/* TABLE */
.cm-table { width: 100%; border-collapse: collapse; }
.cm-table th { background: #0D1117; color: #64748B; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 14px 24px; text-align: left; border-bottom: 1px solid #1E293B; }
.cm-table td { padding: 16px 24px; border-bottom: 1px solid rgba(30,41,59,0.6); font-size: 14px; color: #E2E8F0; }
.cm-table tr:last-child td { border-bottom: none; }
.cm-table tr:hover td { background: rgba(22,192,90,0.03); }
.cm-table-wrap { overflow-x: auto; border-radius: 20px; border: 1px solid #1E293B; }
@media (max-width: 640px) { .cm-table th, .cm-table td { padding: 10px 14px !important; font-size: 12px !important; } }

/* FAQ */
.cm-faq { background: #0D1117; border: 1px solid #1E293B; border-radius: 16px; overflow: hidden; transition: all 0.25s ease; margin-bottom: 12px; }
.cm-faq.open { background: linear-gradient(135deg, #0A1F0A, #080D13); border-color: rgba(22,192,90,0.4) !important; }
.cm-faq-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px 24px; background: transparent; border: none; cursor: pointer; text-align: left; }
.cm-faq-q { color: white; font-weight: 700; font-size: 15px; line-height: 1.4; font-family: inherit; }
.cm-faq-plus { flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; border: 1px solid rgba(22,192,90,0.3); display: flex; align-items: center; justify-content: center; color: #16C05A; font-size: 20px; transition: transform 0.25s ease; }
.cm-faq.open .cm-faq-plus { transform: rotate(45deg); }
.cm-faq-ans { padding: 0 24px 20px; color: #94A3B8; font-size: 14px; line-height: 1.75; display: none; }
.cm-faq.open .cm-faq-ans { display: block; }
@media (max-width: 640px) { .cm-faq-btn { padding: 16px 18px !important; } .cm-faq-q { font-size: 14px !important; } .cm-faq-ans { padding: 0 18px 16px !important; } }

/* BUTTONS */
.cm-btn-green { background: #16C05A; color: black; border: none; border-radius: 999px; padding: 14px 32px; font-size: 15px; font-weight: 700; cursor: pointer; box-shadow: 0 0 30px rgba(22,192,90,0.35); transition: filter 0.2s, transform 0.2s, box-shadow 0.2s; font-family: inherit; }
.cm-btn-green:hover { filter: brightness(1.1); transform: scale(1.04); box-shadow: 0 0 50px rgba(22,192,90,0.55); }
.cm-btn-ghost { background: transparent; color: white; border: 1px solid #334155; border-radius: 999px; padding: 14px 32px; font-size: 15px; font-weight: 600; cursor: pointer; transition: background 0.2s, border-color 0.2s, transform 0.2s; font-family: inherit; }
.cm-btn-ghost:hover { background: rgba(22,192,90,0.08); border-color: rgba(22,192,90,0.4); transform: scale(1.03); }

/* CTA ROW */
.cm-cta-row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
@media (max-width: 640px) { .cm-cta-row { flex-direction: column !important; align-items: center !important; } .cm-cta-row button { width: 100% !important; max-width: 320px !important; } }

/* BADGE */
.cm-badge { display: inline-block; background: rgba(22,192,90,0.1); border: 1px solid rgba(22,192,90,0.25); color: #16C05A; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; border-radius: 999px; padding: 6px 18px; text-transform: uppercase; margin-bottom: 20px; }

/* DIVIDER */
.cm-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(22,192,90,0.25), transparent); }

/* TRADE CARD */
.cm-trade-card { background: #0D1117; border: 1px solid #1E293B; border-radius: 16px; padding: 20px 16px; text-align: center; transition: all 0.25s ease; cursor: default; }
.cm-trade-card:hover { border-color: rgba(22,192,90,0.4); background: rgba(22,192,90,0.05); transform: translateY(-4px); }

/* ANIMATIONS */
@keyframes cmFadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
.cm-a1 { animation: cmFadeUp 0.7s ease 0.1s both; }
.cm-a2 { animation: cmFadeUp 0.7s ease 0.25s both; }
.cm-a3 { animation: cmFadeUp 0.7s ease 0.4s both; }
.cm-a4 { animation: cmFadeUp 0.7s ease 0.55s both; }
.cm-a5 { animation: cmFadeUp 0.7s ease 0.7s both; }
      `}</style>

      <Navbar />

      <section
        className="cm-hero-section"
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
          className="cm-container"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div className="cm-a1">
            <span className="cm-badge">CONTRACTOR MARKETING AGENCY</span>
          </div>

          <h1
            className="cm-h1 cm-a2"
            style={{ color: 'white', marginBottom: '20px' }}
          >
            Contractor Marketing That{' '}
            <span style={{ color: '#16C05A' }}>Actually Books Jobs</span> Not
            Just Leads
          </h1>

          <p
            className="cm-hero-sub cm-a3"
            style={{ marginBottom: '32px' }}
          >
            If you are searching for contractor marketing, you are trying to
            solve the same problem most contractors face: getting consistent
            jobs without wasting money on agencies that promise everything and
            deliver nothing. At Voxflow Media, we do not send you leads. We book
            confirmed homeowner appointments directly on your calendar.
          </p>

          <div className="cm-hero-stats cm-a4">
            {[
              { num: '312+', label: 'Appointments Booked', sub: 'last 30 days' },
              {
                num: '60 sec',
                label: 'AI Follow-Up Speed',
                sub: 'every single lead',
                green: true,
              },
              {
                num: '100%',
                label: 'Exclusive Leads',
                sub: 'never shared',
              },
              {
                num: '30 Days',
                label: 'Results Guarantee',
                sub: 'or we work free',
              },
              {
                num: '0',
                label: 'Long-Term Contracts',
                sub: 'cancel anytime',
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
                  padding: '18px 12px',
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
                    fontSize: '11px',
                    color: '#94A3B8',
                    fontWeight: 600,
                    marginBottom: '3px',
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontSize: '10px',
                    color: '#475569',
                  }}
                >
                  {s.sub}
                </div>
              </div>
            ))}
          </div>

          <div className="cm-cta-row cm-a5">
            <button
              className="cm-btn-green"
              style={{ padding: '15px 36px', fontSize: '16px' }}
              onClick={() => (window.location.href = '/book-a-call')}
            >
              Book Your Free Contractor Growth Call
            </button>
            <button
              className="cm-btn-ghost"
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

      <div className="cm-divider" />

      <section className="cm-section" style={{ backgroundColor: '#000' }}>
        <div className="cm-container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="cm-badge">THE PROBLEM</span>
            <h2
              className="cm-h2"
              style={{ color: 'white', marginBottom: '14px' }}
            >
              Why Most Contractor Marketing{' '}
              <span style={{ color: '#16C05A' }}>Wastes Money</span>
            </h2>
            <p
              style={{
                color: '#64748B',
                fontSize: '16px',
                maxWidth: '580px',
                margin: '0 auto',
              }}
            >
              Most contractors do not have a marketing problem. They have a
              system problem. Traditional methods focus on traffic and clicks.
              None of those guarantee actual homeowner conversations.
            </p>
          </div>

          <div
            className="cm-table-wrap"
            style={{ marginBottom: '48px' }}
          >
            <table className="cm-table">
              <thead>
                <tr>
                  <th>Traditional Contractor Marketing</th>
                  <th style={{ color: '#16C05A' }}>
                    Voxflow Contractor Marketing System
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['SEO campaigns that take 6 to 12 months', 'Ad campaigns generating homeowner inquiries within days'],
                  ['Leads sold to multiple contractors', '100% exclusive homeowner opportunities'],
                  ['Slow follow-up from contractors', 'AI follow-up in under 60 seconds'],
                  ['Leads sitting in a CRM forever', 'Appointments booked directly on your calendar'],
                  ['Agencies focused on impressions and clicks', 'System focused on homeowner conversations'],
                  ['Long-term contracts with little accountability', 'No long-term contracts plus 30-day results guarantee'],
                ].map(([bad, good], i) => (
                  <tr key={i}>
                    <td style={{ color: '#64748B' }}>✗ {bad}</td>
                    <td
                      style={{
                        color: '#16C05A',
                        fontWeight: 600,
                      }}
                    >
                      ✓ {good}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
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
                fontSize: 'clamp(18px,2.5vw,26px)',
                fontWeight: 900,
                color: 'white',
                marginBottom: '8px',
              }}
            >
              Contractors do not need more website traffic.
            </div>
            <p
              style={{
                color: '#64748B',
                fontSize: '16px',
                margin: 0,
              }}
            >
              You need{' '}
              <span
                style={{
                  color: '#16C05A',
                  fontWeight: 700,
                }}
              >
                homeowners who are ready to talk about their project.
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="cm-divider" />

      <section
        id="cm-system"
        className="cm-section"
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
          className="cm-container"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="cm-badge">THE SYSTEM</span>
            <h2
              className="cm-h2"
              style={{ color: 'white', marginBottom: '14px' }}
            >
              The Complete Contractor{' '}
              <span style={{ color: '#16C05A' }}>Marketing System</span>
            </h2>
            <p
              style={{
                color: '#64748B',
                fontSize: '16px',
                maxWidth: '520px',
                margin: '0 auto',
              }}
            >
              Successful online marketing for contractors is not just about
              running ads. It is about building a system that turns attention
              into booked jobs. Here is exactly how it works.
            </p>
          </div>
          <div className="cm-steps-grid">
            {[
              {
                num: '01',
                icon: '📡',
                accent: '#3B82F6',
                title: 'Targeted Facebook and Instagram Advertising',
                desc: 'We launch advertising campaigns designed specifically for homeowners in your service area. Ads focus on the services you offer and the problems homeowners want solved right now.',
              },
              {
                num: '02',
                icon: '📋',
                accent: '#A855F7',
                title: 'Lead Capture',
                desc: 'Interested homeowners submit their details through a simple, fast form. This step captures homeowners who are actively interested in your services and ready to hear from you.',
              },
              {
                num: '03',
                icon: '🤖',
                accent: '#F59E0B',
                title: 'Instant AI Follow-Up',
                desc: 'Within seconds, our AI system contacts the homeowner. Questions are answered and basic qualification begins immediately. Speed here determines who wins the job.',
              },
              {
                num: '04',
                icon: '🤝',
                accent: '#EF4444',
                title: 'Human Appointment Setting',
                desc: 'Once interest is confirmed, our team steps in. Real people communicate with the homeowner, answer questions and schedule an appointment directly on your calendar.',
              },
              {
                num: '05',
                icon: '📅',
                accent: '#16C05A',
                title: 'Calendar Booking',
                desc: 'The homeowner consultation lands directly on your calendar. You receive their information before the appointment. No surprises. Just show up and close the job.',
              },
              {
                num: '06',
                icon: '📈',
                accent: '#06B6D4',
                title: 'Campaign Optimisation',
                desc: 'We continuously improve ad performance to reduce appointment costs and increase volume month over month. What works gets scaled. What does not gets cut.',
              },
            ].map((step, i) => (
              <div
                key={i}
                className="cm-card"
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

      <div className="cm-divider" />

      <section className="cm-section" style={{ backgroundColor: '#000' }}>
        <div className="cm-container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="cm-badge">TRADES WE SERVE</span>
            <h2
              className="cm-h2"
              style={{ color: 'white', marginBottom: '12px' }}
            >
              We Work Exclusively With{' '}
              <span style={{ color: '#16C05A' }}>
                Home Improvement Contractors
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
              This focus means every campaign, every ad and every follow-up
              script is built specifically for how homeowners choose contractors
              in your trade.
            </p>
          </div>
          <div className="cm-trades-grid">
            {[
              { icon: '🏠', name: 'Roofing Contractors', note: 'Storm and replacement' },
              { icon: '🍳', name: 'Kitchen Remodelers', note: 'Full renovations' },
              { icon: '🛁', name: 'Bathroom Remodeling', note: 'Upgrades and installs' },
              { icon: '🔨', name: 'General Contractors', note: 'Home improvement' },
              { icon: '❄️', name: 'HVAC Installation', note: 'Replace and service' },
              { icon: '🖌️', name: 'Exterior Painting', note: 'Full paint jobs' },
              { icon: '🎨', name: 'Interior Painting', note: 'Any room, any size' },
              { icon: '🪟', name: 'Window Replacement', note: 'Energy upgrades' },
              { icon: '🚪', name: 'Door Installation', note: 'Entry and interior' },
              { icon: '🏗️', name: 'Siding Contractors', note: 'Vinyl, wood and more' },
            ].map((t, i) => (
              <div
                key={i}
                className="cm-trade-card"
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
                  {t.icon}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: '4px',
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontSize: '11px',
                    color: '#475569',
                  }}
                >
                  {t.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cm-divider" />

      <section
        className="cm-section"
        style={{ background: 'linear-gradient(180deg, #000, #020D05)' }}
      >
        <div className="cm-container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="cm-badge">WHY VOXFLOW</span>
            <h2
              className="cm-h2"
              style={{ color: 'white', marginBottom: '12px' }}
            >
              5 Reasons Contractors Choose{' '}
              <span style={{ color: '#16C05A' }}>
                Voxflow Over Every Other Agency
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
              Contractors work with Voxflow Media because our approach is
              simple, results-driven and fundamentally different from
              traditional construction marketing agencies.
            </p>
          </div>
          <div className="cm-reasons-grid">
            {[
              {
                num: '01',
                icon: '📅',
                accent: '#16C05A',
                title: 'Appointment-Focused Marketing',
                desc: 'Most agencies generate leads. We generate scheduled homeowner appointments. This removes the burden of chasing contacts who may never answer. You show up, they are already expecting you.',
              },
              {
                num: '02',
                icon: '🔒',
                accent: '#3B82F6',
                title: 'Exclusive Homeowner Opportunities',
                desc: 'Every lead generated through our campaigns belongs only to your company. We never sell the same lead to multiple contractors. No price wars. No competing for the same homeowner.',
              },
              {
                num: '03',
                icon: '⚡',
                accent: '#F59E0B',
                title: 'Instant AI Follow-Up',
                desc: 'Speed is everything in lead generation for contractors. Our AI system contacts homeowners in under 60 seconds. This dramatically increases response rates before a competitor even sees the same lead.',
              },
              {
                num: '04',
                icon: '🛡️',
                accent: '#A855F7',
                title: 'No Long-Term Contracts',
                desc: 'Many agencies lock contractors into long agreements. We do not. If our system does not work for you, you are free to leave. Our incentive is to produce results every single month.',
              },
              {
                num: '05',
                icon: '✅',
                accent: '#EF4444',
                title: '30-Day Results Guarantee',
                desc: 'If Voxflow Media does not produce results within the first 30 days, we keep working at no cost until we do. That guarantee keeps our incentives completely aligned with yours.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="cm-card"
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
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: `${card.accent}18`,
                      border: `1px solid ${card.accent}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      flexShrink: 0,
                    }}
                  >
                    {card.icon}
                  </div>
                  <span
                    style={{
                      background: `${card.accent}15`,
                      border: `1px solid ${card.accent}40`,
                      color: card.accent,
                      fontSize: '11px',
                      fontWeight: 700,
                      borderRadius: '999px',
                      padding: '4px 12px',
                      letterSpacing: '0.06em',
                    }}
                  >
                    REASON {card.num}
                  </span>
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

            <div
              style={{
                background: 'linear-gradient(135deg, #0A1F0A, #051508)',
                border: '1px solid rgba(22,192,90,0.3)',
                borderRadius: '20px',
                padding: '28px 24px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
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
                  fontSize: 'clamp(24px,3vw,40px)',
                  fontWeight: 900,
                  color: '#16C05A',
                  lineHeight: 1,
                  marginBottom: '10px',
                }}
              >
                312+
              </div>
              <div
                style={{
                  fontSize: '14px',
                  color: '#94A3B8',
                  fontWeight: 600,
                  marginBottom: '6px',
                }}
              >
                homeowner appointments booked in the last 30 days across all
                contractor clients
              </div>
              <div
                style={{
                  fontSize: '12px',
                  color: '#475569',
                }}
              >
                Roofing, HVAC, remodeling, painting and more
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cm-divider" />

      <section
        id="faq"
        className="cm-section"
        style={{ backgroundColor: '#000' }}
      >
        <div className="cm-container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="cm-badge">FAQ</span>
            <h2
              className="cm-h2"
              style={{ color: 'white', marginBottom: '12px' }}
            >
              Frequently Asked Questions About{' '}
              <span style={{ color: '#16C05A' }}>
                Contractor Marketing
              </span>
            </h2>
          </div>
          {[
            {
              q: 'What is the best contractor marketing strategy today?',
              a: 'The best contractor marketing strategy combines paid advertising, fast lead response and appointment scheduling. Systems that include Facebook ads, automated follow-up and qualification typically outperform traditional SEO-only approaches because they generate homeowner conversations faster. SEO is valuable long term but most contractors need jobs this month, not in six months.',
            },
            {
              q: 'How can contractors get more jobs consistently?',
              a: 'Contractors get more jobs by building a predictable lead generation system. This usually involves targeted advertising, fast follow-up and scheduled consultations. When homeowners are contacted immediately and booked into appointments, close rates increase significantly compared with manually chasing cold leads.',
            },
            {
              q: 'Does SEO still work for contractors?',
              a: 'Yes. Strategies like contractor seo and seo for contractors can generate long-term traffic from Google searches. However, SEO often takes several months to produce results, which is why many contractors combine it with faster advertising channels. Both work well together once the paid system is generating consistent revenue.',
            },
            {
              q: 'How much should contractors spend on marketing?',
              a: 'Most contractors invest between 5 and 10 percent of their revenue into marketing. The right budget depends on your service area competition and average job size. Marketing systems that generate booked appointments often provide the highest return because every dollar spent is tied directly to homeowner conversations rather than impressions or clicks.',
            },
            {
              q: 'Why choose Voxflow instead of another marketing agency?',
              a: 'Voxflow Media focuses on booked homeowner appointments rather than raw leads. Our system combines targeted Facebook and Instagram ads, AI follow-up in under 60 seconds and human appointment setters. Every lead is exclusive, there are no long-term contracts and we provide a 30-day results guarantee. If we do not deliver, we keep working for free until we do.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={'cm-faq' + (openFaq === i ? ' open' : '')}
              onClick={() =>
                setOpenFaq(openFaq === i ? null : i)
              }
            >
              <button className="cm-faq-btn">
                <span className="cm-faq-q">{item.q}</span>
                <span className="cm-faq-plus">+</span>
              </button>
              <div className="cm-faq-ans">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="cm-divider" />

      <section
        className="cm-section"
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
          className="cm-container"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <span className="cm-badge">READY TO GROW?</span>
          <h2
            className="cm-h2"
            style={{
              color: 'white',
              marginBottom: '16px',
              maxWidth: '680px',
              margin: '0 auto 16px',
            }}
          >
            Ready to Get More{' '}
            <span style={{ color: '#16C05A' }}>
              Contractor Jobs Consistently?
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
            Book a quick strategy call and we will show you exactly how our
            contractor marketing system works in your market. No pressure. No
            long presentations.
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
              'Show you how many homeowners are in your service area right now',
              'Walk you through exactly how our appointment system works',
              'Give you an estimated cost per booked appointment for your trade',
              'Outline the campaign types that fit your market and budget',
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
          <div className="cm-cta-row">
            <button
              className="cm-btn-green"
              style={{ padding: '16px 44px', fontSize: '16px' }}
              onClick={() => (window.location.href = '/book-a-call')}
            >
              Book Your Free Contractor Growth Call
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
            your contracting company.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

