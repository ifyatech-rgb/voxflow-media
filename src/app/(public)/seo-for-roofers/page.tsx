'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function SeoForRoofersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <style>{`
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: 'Inter', sans-serif; background: #000; color: white; -webkit-font-smoothing: antialiased; overflow-x: hidden; }

/* NAV */
.rp-nav { position: fixed; top: 20px; left: 50%; transform: translateX(-50%); z-index: 100; display: flex; align-items: center; justify-content: space-between; gap: 32px; background: rgba(10,10,10,0.92); border: 1px solid #1E293B; border-radius: 999px; padding: 10px 10px 10px 22px; box-shadow: 0 8px 40px rgba(0,0,0,0.5); backdrop-filter: blur(20px); min-width: 660px; max-width: 860px; }
.rp-nav-links { display: flex; align-items: center; gap: 28px; }
.rp-nav-link { color: #94A3B8; text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.2s; white-space: nowrap; }
.rp-nav-link:hover { color: white; }
.rp-hamburger { display: none; background: transparent; border: 1px solid #1E293B; border-radius: 8px; padding: 6px 10px; cursor: pointer; color: white; font-size: 16px; }
@media (max-width: 768px) {
  .rp-nav-links { display: none !important; }
  .rp-hamburger { display: block !important; }
  .rp-nav { min-width: unset !important; width: calc(100% - 32px) !important; padding: 8px 8px 8px 16px !important; gap: 12px !important; }
}

/* LAYOUT */
.rp-section { padding: 100px 0; }
.rp-container { max-width: 1120px; margin: 0 auto; padding: 0 40px; }
.rp-hero-section { padding-top: 160px; padding-bottom: 100px; }
@media (max-width: 640px) {
  .rp-hero-section { padding-top: 120px !important; padding-bottom: 56px !important; }
  .rp-section { padding: 56px 0 !important; }
  .rp-container { padding: 0 20px !important; }
}
@media (min-width: 641px) and (max-width: 1024px) {
  .rp-hero-section { padding-top: 130px !important; padding-bottom: 72px !important; }
  .rp-section { padding: 72px 0 !important; }
  .rp-container { padding: 0 32px !important; }
}
@media (min-width: 1025px) {
  .rp-hero-section { padding-top: 150px !important; }
}

/* TYPOGRAPHY */
.rp-h1 { font-size: clamp(32px, 4.5vw, 62px); font-weight: 900; line-height: 1.08; letter-spacing: -0.025em; }
.rp-h2 { font-size: clamp(26px, 3.5vw, 48px); font-weight: 900; line-height: 1.1; }
.rp-hero-sub { font-size: clamp(15px, 1.6vw, 19px); font-weight: 500; color: #94A3B8; line-height: 1.6; max-width: 680px; margin: 0 auto; }
@media (max-width: 640px) { .rp-h1 { font-size: 30px !important; } .rp-h2 { font-size: 24px !important; } .rp-hero-sub { font-size: 15px !important; } }

/* GRIDS */
.rp-why-grid   { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.rp-steps-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.rp-prob-grid  { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
.rp-type-grid  { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.rp-stat-grid  { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px; margin-bottom: 40px; }
@media (max-width: 1024px) {
  .rp-why-grid   { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 20px !important; }
  .rp-steps-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 20px !important; }
  .rp-prob-grid  { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 20px !important; }
  .rp-type-grid  { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 20px !important; }
  .rp-stat-grid  { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 20px !important; }
}
@media (max-width: 640px) {
  .rp-why-grid   { grid-template-columns: minmax(0, 1fr) !important; gap: 16px !important; }
  .rp-steps-grid { grid-template-columns: minmax(0, 1fr) !important; gap: 16px !important; }
  .rp-prob-grid  { grid-template-columns: minmax(0, 1fr) !important; gap: 16px !important; }
  .rp-type-grid  { grid-template-columns: minmax(0, 1fr) !important; gap: 16px !important; }
  .rp-stat-grid  { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 16px !important; }
}

/* HERO STATS GRID RESPONSIVE */
@media (max-width: 640px) { .rp-hero-stats { grid-template-columns: repeat(2,1fr) !important; } }

/* CARD HOVER */
.rp-card { transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; }
.rp-card:hover { transform: translateY(-8px); border-color: rgba(22,192,90,0.5) !important; box-shadow: 0 20px 50px rgba(22,192,90,0.1) !important; }

/* TABLE */
.rp-table { width: 100%; border-collapse: collapse; }
.rp-table th { background: #0D1117; color: #64748B; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 14px 24px; text-align: left; border-bottom: 1px solid #1E293B; }
.rp-table td { padding: 16px 24px; border-bottom: 1px solid rgba(30,41,59,0.6); font-size: 14px; color: #E2E8F0; }
.rp-table tr:last-child td { border-bottom: none; }
.rp-table tr:hover td { background: rgba(22,192,90,0.03); }
@media (max-width: 640px) { .rp-table th, .rp-table td { padding: 10px 14px !important; font-size: 12px !important; } }

/* OVERFLOW X on mobile for table */
.rp-table-wrap { overflow-x: auto; border-radius: 20px; border: 1px solid #1E293B; }

/* FAQ */
.rp-faq { background: #0D1117; border: 1px solid #1E293B; border-radius: 16px; overflow: hidden; transition: all 0.25s ease; margin-bottom: 12px; }
.rp-faq.open { background: linear-gradient(135deg, #0A1F0A, #080D13); border-color: rgba(22,192,90,0.4) !important; }
.rp-faq-btn { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 20px 24px; background: transparent; border: none; cursor: pointer; text-align: left; }
.rp-faq-q { color: white; font-weight: 700; font-size: 15px; line-height: 1.4; font-family: inherit; }
.rp-faq-plus { flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%; border: 1px solid rgba(22,192,90,0.3); display: flex; align-items: center; justify-content: center; color: #16C05A; font-size: 20px; transition: transform 0.25s ease; }
.rp-faq.open .rp-faq-plus { transform: rotate(45deg); }
.rp-faq-ans { padding: 0 24px 20px; color: #94A3B8; font-size: 14px; line-height: 1.75; display: none; }
.rp-faq.open .rp-faq-ans { display: block; }
@media (max-width: 640px) { .rp-faq-btn { padding: 16px 18px !important; } .rp-faq-q { font-size: 14px !important; } .rp-faq-ans { padding: 0 18px 16px !important; } }

/* BUTTONS */
.rp-btn-green { background: #16C05A; color: black; border: none; border-radius: 999px; padding: 14px 32px; font-size: 15px; font-weight: 700; cursor: pointer; box-shadow: 0 0 30px rgba(22,192,90,0.35); transition: filter 0.2s, transform 0.2s, box-shadow 0.2s; font-family: inherit; }
.rp-btn-green:hover { filter: brightness(1.1); transform: scale(1.04); box-shadow: 0 0 50px rgba(22,192,90,0.55); }
.rp-btn-ghost { background: transparent; color: white; border: 1px solid #334155; border-radius: 999px; padding: 14px 32px; font-size: 15px; font-weight: 600; cursor: pointer; transition: background 0.2s, border-color 0.2s, transform 0.2s; font-family: inherit; }
.rp-btn-ghost:hover { background: rgba(22,192,90,0.08); border-color: rgba(22,192,90,0.4); transform: scale(1.03); }

/* CTA ROW */
.rp-cta-row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
@media (max-width: 640px) { .rp-cta-row { flex-direction: column !important; align-items: center !important; } .rp-cta-row button { width: 100% !important; max-width: 320px !important; } }

/* BADGE */
.rp-badge { display: inline-block; background: rgba(22,192,90,0.1); border: 1px solid rgba(22,192,90,0.25); color: #16C05A; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; border-radius: 999px; padding: 6px 18px; text-transform: uppercase; margin-bottom: 20px; }

/* DIVIDER */
.rp-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(22,192,90,0.25), transparent); }

/* ANIMATIONS */
@keyframes rpFadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
.rp-a1 { animation: rpFadeUp 0.7s ease 0.1s both; }
.rp-a2 { animation: rpFadeUp 0.7s ease 0.25s both; }
.rp-a3 { animation: rpFadeUp 0.7s ease 0.4s both; }
.rp-a4 { animation: rpFadeUp 0.7s ease 0.55s both; }
.rp-a5 { animation: rpFadeUp 0.7s ease 0.7s both; }

/* STORM BADGE */
.rp-storm-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.25); color: #EF4444; font-size: 11px; font-weight: 700; letter-spacing: 0.12em; border-radius: 999px; padding: 5px 14px; text-transform: uppercase; }
      `}</style>

      <Navbar />

      <section
        className="rp-hero-section"
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
          className="rp-container"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div className="rp-a1">
            <span className="rp-badge">ROOFING MARKETING AGENCY</span>
          </div>

          <h1
            className="rp-h1 rp-a2"
            style={{ color: 'white', marginBottom: '20px' }}
          >
            SEO for Roofers: How Voxflow Media Helps Roofing Companies Book{' '}
            <span style={{ color: '#16C05A' }}>
              Real Jobs, Not Just Traffic
            </span>
          </h1>

          <p
            className="rp-hero-sub rp-a3"
            style={{ marginBottom: '32px' }}
          >
            If you are researching seo for roofers, you are probably trying to
            solve one problem: getting more roofing jobs consistently. Most
            roofing companies have tried SEO, Google Ads, or lead services. Most
            of the time it did not work. At Voxflow Media, we built a different
            system focused on one thing: booked homeowner appointments.
          </p>

          <div
            className="rp-a4 rp-hero-stats"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: '16px',
              maxWidth: '800px',
              margin: '0 auto 36px',
            }}
          >
            {[
              { num: '23+', label: 'Booked Appointments', sub: 'per client / month' },
              {
                num: '$55-$95',
                label: 'Cost Per Appointment',
                sub: 'in most US markets',
                green: true,
              },
              {
                num: '35-55%',
                label: 'Appointment Close Rate',
                sub: 'pre-qualified leads',
              },
              {
                num: '30 Days',
                label: 'Guaranteed Results',
                sub: 'or we work for free',
              },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  background: '#0D1117',
                  border: '1px solid #1E293B',
                  borderRadius: '16px',
                  padding: '20px 16px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(18px,2.5vw,26px)',
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

          <div className="rp-cta-row rp-a5">
            <button
              className="rp-btn-green"
              style={{ padding: '15px 36px', fontSize: '16px' }}
              onClick={() => (window.location.href = '/book-a-call')}
            >
              Book Your Free Roofing Growth Call
            </button>
            <button
              className="rp-btn-ghost"
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

      <div className="rp-divider" />

      <section className="rp-section" style={{ backgroundColor: '#000' }}>
        <div className="rp-container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="rp-badge">THE PROBLEM</span>
            <h2
              className="rp-h2"
              style={{ color: 'white', marginBottom: '14px' }}
            >
              The Roofing Lead Problem and{' '}
              <span style={{ color: '#16C05A' }}>Why Old Methods Fail</span>
            </h2>
            <p
              style={{
                color: '#64748B',
                fontSize: '16px',
                maxWidth: '560px',
                margin: '0 auto',
              }}
            >
              Most roofing companies have the crews, the trucks and the skills.
              What they do not have is a consistent pipeline of homeowner
              opportunities.
            </p>
          </div>

          <div className="rp-prob-grid">
            {[
              {
                icon: '🚪',
                accent: '#EF4444',
                title: 'Door Knocking Is Dying',
                desc: 'Homeowners today are less responsive to strangers at the door. Solicitation rules are stricter. Crews spend hours knocking with very little return. This strategy no longer scales.',
              },
              {
                icon: '🏷️',
                accent: '#F59E0B',
                title: 'Lead Marketplaces Create Price Wars',
                desc: 'Angi, Thumbtack and similar platforms sell the same lead to 5 contractors. The homeowner picks the cheapest quote. You waste time chasing jobs you never win at margins you cannot sustain.',
              },
              {
                icon: '💸',
                accent: '#A855F7',
                title: 'Google Ads Are Extremely Expensive',
                desc: 'PPC for roofing companies can work, but costs have skyrocketed. In many markets, roof-related clicks cost $80 to $200 each and $300 to $900 per lead before you know if the homeowner is serious.',
              },
              {
                icon: '⏳',
                accent: '#3B82F6',
                title: 'SEO Takes 6 to 12 Months',
                desc: 'Many contractors look into seo for roofing companies hoping to rank on Google. SEO absolutely produces leads long term. But most roofing companies cannot wait 6 to 12 months. They need jobs this month.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rp-card"
                style={{
                  background: 'linear-gradient(160deg, #0D1117, #060A0F)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '20px',
                  padding: '28px 24px',
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

      <div className="rp-divider" />

      <section
        className="rp-section"
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
          className="rp-container"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="rp-badge">WHY FACEBOOK WINS</span>
            <h2
              className="rp-h2"
              style={{ color: 'white', marginBottom: '14px' }}
            >
              Why Facebook Ads Outperform{' '}
              <span style={{ color: '#16C05A' }}>
                Roofing SEO for Immediate Results
              </span>
            </h2>
            <p
              style={{
                color: '#64748B',
                fontSize: '16px',
                maxWidth: '580px',
                margin: '0 auto',
              }}
            >
              Roofing SEO is valuable long term. But if you want homeowner
              appointments this month, Facebook advertising produces results far
              faster.
            </p>
          </div>

          <div className="rp-why-grid">
            {[
              {
                icon: '🎯',
                accent: '#3B82F6',
                title: 'Reach Homeowners Before They Search',
                desc: 'Google only captures people already searching. Facebook puts your company in front of homeowners before they start comparing contractors. Less competition. Higher close rates.',
              },
              {
                icon: '⚡',
                accent: '#F59E0B',
                title: 'Storm Campaigns Launch in 24 Hours',
                desc: 'One recent storm campaign generated 31 homeowner leads within 48 hours of launch. Speed matters when storms hit. Facebook moves faster than any seo for roofers strategy ever could.',
              },
              {
                icon: '🔍',
                accent: '#A855F7',
                title: 'Target Homeowners With Aging Roofs',
                desc: 'Facebook lets you target by home age, household income, location and ownership signals. You only show ads to people who own homes old enough to need a new roof.',
              },
              {
                icon: '🤖',
                accent: '#EF4444',
                title: 'AI Follow-Up in Under 60 Seconds',
                desc: 'Most roofing marketing fails because follow-up is slow. Our AI contacts every homeowner in under 60 seconds day or night. By the time a competitor calls, the appointment is already booked.',
              },
              {
                icon: '📞',
                accent: '#16C05A',
                title: 'Human Setters Book the Appointment',
                desc: 'AI qualifies. Then real people call to confirm and book a time directly on your calendar. You show up to homeowners who are expecting you, have a real need and are ready to move forward.',
              },
              {
                icon: '📊',
                accent: '#06B6D4',
                title: 'Clear ROI Tracking Every Week',
                desc: 'Every campaign shows you cost per lead, cost per booked appointment and revenue generated. You always know exactly what your marketing is producing. No guessing. No vanity metrics.',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rp-card"
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

          <div
            style={{
              marginTop: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
              background:
                'linear-gradient(135deg, #1A0A0A, #0D0606)',
              border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: '20px',
              padding: '28px 32px',
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '8px',
                }}
              >
                <span className="rp-storm-badge">STORM CAMPAIGN RESULT</span>
              </div>
              <div
                style={{
                  fontSize: 'clamp(22px,2.5vw,32px)',
                  fontWeight: 900,
                  color: 'white',
                }}
              >
                31 homeowner leads{' '}
                <span style={{ color: '#EF4444' }}>in 48 hours</span>
              </div>
              <p
                style={{
                  color: '#64748B',
                  fontSize: '14px',
                  marginTop: '6px',
                }}
              >
                From a single storm damage campaign launched after a hail event
              </p>
            </div>
            <button
              className="rp-btn-green"
              onClick={() => (window.location.href = '/book-a-call')}
            >
              Get Storm-Ready Campaigns
            </button>
          </div>
        </div>
      </section>

      <div className="rp-divider" />

      <section className="rp-section" style={{ backgroundColor: '#000' }}>
        <div className="rp-container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="rp-badge">CAMPAIGN TYPES</span>
            <h2
              className="rp-h2"
              style={{ color: 'white', marginBottom: '12px' }}
            >
              5 Types of Roofing Campaigns{' '}
              <span style={{ color: '#16C05A' }}>
                We Run For Contractors
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
              Different roofing markets require different marketing angles. We
              run multiple campaign types to keep your pipeline consistent
              year-round.
            </p>
          </div>

          <div
            className="rp-type-grid"
            style={{ marginBottom: '32px' }}
          >
            {[
              {
                icon: '⛈️',
                accent: '#EF4444',
                badge: 'HIGHEST ROI',
                title: 'Storm Damage Campaigns',
                goal: 'Generate immediate homeowner inquiries after hail or wind events',
                bestFor: 'Insurance roof replacements',
                note: 'Launch within 24 hours of a storm event',
              },
              {
                icon: '🏠',
                accent: '#3B82F6',
                badge: 'HIGH VOLUME',
                title: 'Roof Replacement Offers',
                goal: 'Target aging roofs and homeowners considering replacement',
                bestFor: 'Retail roofing projects',
                note: 'Best for homes 15+ years old',
              },
              {
                icon: '🔍',
                accent: '#A855F7',
                badge: 'LEAD VOLUME',
                title: 'Free Inspection Campaigns',
                goal: 'Offer inspections to identify hidden damage and replacement needs',
                bestFor: 'Lead generation in slow seasons',
                note: 'Fills pipeline year round',
              },
              {
                icon: '💳',
                accent: '#F59E0B',
                badge: 'HIGHER TICKET',
                title: 'Roof Financing Campaigns',
                goal: 'Promote financing options to remove cost objections from homeowners',
                bestFor: 'High ticket full replacements',
                note: 'Removes biggest buyer hesitation',
              },
              {
                icon: '🔧',
                accent: '#16C05A',
                badge: 'OFF-SEASON',
                title: 'Seasonal Maintenance Campaigns',
                goal: 'Capture repair and maintenance work between major jobs',
                bestFor: 'Off-season revenue and repeat customers',
                note: 'Keeps crews busy in slow months',
              },
              {
                icon: '📋',
                accent: '#06B6D4',
                badge: 'INSURANCE',
                title: 'Insurance Claim Campaigns',
                goal: 'Help homeowners understand their right to file a storm damage claim',
                bestFor: 'Post-storm insurance work',
                note: 'High average ticket size',
              },
            ].map((t, i) => (
              <div
                key={i}
                className="rp-card"
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
                    background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)`,
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
                      background: `${t.accent}18`,
                      border: `1px solid ${t.accent}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                    }}
                  >
                    {t.icon}
                  </div>
                  <span
                    style={{
                      background: `${t.accent}15`,
                      border: `1px solid ${t.accent}40`,
                      color: t.accent,
                      fontSize: '9px',
                      fontWeight: 700,
                      borderRadius: '999px',
                      padding: '3px 10px',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {t.badge}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: '14px',
                    fontWeight: 800,
                    color: 'white',
                    lineHeight: 1.4,
                    marginBottom: '12px',
                  }}
                >
                  {t.title}
                </h3>
                <div
                  style={{
                    fontSize: '12px',
                    color: '#64748B',
                    lineHeight: 1.7,
                    marginBottom: '10px',
                  }}
                >
                  {t.goal}
                </div>
                <div
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        color: '#16C05A',
                        fontSize: '11px',
                        fontWeight: 700,
                      }}
                    >
                      Best for:
                    </span>
                    <span
                      style={{
                        color: '#94A3B8',
                        fontSize: '11px',
                      }}
                    >
                      {t.bestFor}
                    </span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        color: '#475569',
                        fontSize: '11px',
                        fontWeight: 600,
                      }}
                    >
                      Note:
                    </span>
                    <span
                      style={{
                        color: '#64748B',
                        fontSize: '11px',
                      }}
                    >
                      {t.note}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rp-divider" />

      <section
        id="roofing-process"
        className="rp-section"
        style={{ background: 'linear-gradient(180deg, #000, #020D05)' }}
      >
        <div className="rp-container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="rp-badge">RESULTS</span>
            <h2
              className="rp-h2"
              style={{ color: 'white', marginBottom: '12px' }}
            >
              What Our Roofing Clients{' '}
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
              Most agencies measure impressions and clicks. We measure one
              thing: booked homeowner appointments on your calendar.
            </p>
          </div>

          <div
            className="rp-stat-grid"
            style={{ marginBottom: '40px' }}
          >
            {[
              {
                num: '23+',
                label: 'Booked appts/month',
                sub: 'per roofing client',
                green: false,
              },
              {
                num: '$55-$95',
                label: 'Cost per booked appt',
                sub: 'in most US markets',
                green: true,
              },
              {
                num: '35-55%',
                label: 'Appointment close rate',
                sub: 'pre-qualified homeowners',
                green: false,
              },
              {
                num: '31',
                label: 'Storm leads in 48hrs',
                sub: 'one recent campaign',
                green: false,
              },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  background: 'linear-gradient(160deg, #0D1117, #060A0F)',
                  border: `1px solid ${
                    s.green ? 'rgba(22,192,90,0.3)' : '#1E293B'
                  }`,
                  borderRadius: '20px',
                  padding: '24px 20px',
                  textAlign: 'center',
                  boxShadow: s.green
                    ? '0 8px 40px rgba(22,192,90,0.08)'
                    : 'none',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(24px,3vw,36px)',
                    fontWeight: 900,
                    color: s.green ? '#16C05A' : 'white',
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: '#94A3B8',
                    fontWeight: 600,
                    marginBottom: '4px',
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

          <div
            style={{
              textAlign: 'center',
              marginBottom: '48px',
              marginTop: '80px',
            }}
          >
            <span className="rp-badge">THE PROCESS</span>
            <h2
              className="rp-h2"
              style={{ color: 'white', marginBottom: '12px' }}
            >
              The Step-by-Step{' '}
              <span style={{ color: '#16C05A' }}>Roofing Ads System</span>
            </h2>
          </div>

          <div className="rp-steps-grid">
            {[
              {
                num: '01',
                icon: '🔬',
                accent: '#3B82F6',
                title: 'Market Research',
                desc: 'We analyse your service area, competition and roofing demand to identify the best campaign angles and highest-intent homeowner segments.',
              },
              {
                num: '02',
                icon: '🎨',
                accent: '#A855F7',
                title: 'Campaign Creation',
                desc: 'We build Facebook and Instagram ad campaigns designed specifically for roofing homeowners. Custom creative, copy and targeting for your market.',
              },
              {
                num: '03',
                icon: '📋',
                accent: '#F59E0B',
                title: 'Lead Capture',
                desc: 'Interested homeowners submit their information through a simple, mobile-optimised lead form. Fast, clean and built to convert.',
              },
              {
                num: '04',
                icon: '🤖',
                accent: '#EF4444',
                title: 'AI Qualification',
                desc: 'Our AI system contacts the homeowner immediately and asks qualification questions. Confirms real need, budget, timeline and home ownership.',
              },
              {
                num: '05',
                icon: '📞',
                accent: '#16C05A',
                title: 'Human Appointment Setting',
                desc: 'Our team confirms interest and schedules an appointment directly on your calendar. You only talk to homeowners who are ready and qualified.',
              },
              {
                num: '06',
                icon: '📈',
                accent: '#06B6D4',
                title: 'Optimisation and Scaling',
                desc: 'Campaigns are adjusted continuously to lower appointment costs and increase volume. We scale what works and cut what does not.',
              },
            ].map((step, i) => (
              <div
                key={i}
                className="rp-card"
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

      <div className="rp-divider" />

      <section
        id="faq"
        className="rp-section"
        style={{ backgroundColor: '#000' }}
      >
        <div className="rp-container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="rp-badge">FAQ</span>
            <h2
              className="rp-h2"
              style={{ color: 'white', marginBottom: '12px' }}
            >
              Frequently Asked Questions About{' '}
              <span style={{ color: '#16C05A' }}>
                Roofing Lead Generation
              </span>
            </h2>
          </div>
          {[
            {
              q: 'How is your system different from traditional SEO for roofers?',
              a: 'Traditional seo for roofers focuses on improving Google rankings over several months. Voxflow Media focuses on generating homeowner appointments immediately using Facebook ads, AI qualification and human appointment setters. Both have value, but our system produces booked appointments within 7 to 14 days, not 6 to 12 months.',
            },
            {
              q: 'Are the roofing leads exclusive to my company?',
              a: 'Yes. Every homeowner who enters our system is exclusive to your roofing company. We do not sell the same lead to multiple contractors. This is a fundamental difference between Voxflow Media and lead platforms like Angi or HomeAdvisor.',
            },
            {
              q: 'How quickly can we start receiving appointments?',
              a: 'Most campaigns begin generating homeowner inquiries within the first week. Once follow-up and appointment setting are active, many roofing companies see booked consultations within 7 to 14 days. We guarantee results within 30 days or we keep working for free.',
            },
            {
              q: 'What types of roofing companies do you work with?',
              a: 'We work with residential roofing companies, storm restoration contractors, roof replacement specialists, and roofing companies offering inspections and repairs. If you install or replace residential roofs, our system is built for you.',
            },
            {
              q: 'Do I need a large marketing budget to start?',
              a: 'Most roofing campaigns start with a modest ad budget. Because appointments typically cost between $55 and $95, many contractors see strong ROI even with moderate spending. On a $12,000 average roof, one closed appointment from our system pays for the entire month of advertising.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={'rp-faq' + (openFaq === i ? ' open' : '')}
              onClick={() =>
                setOpenFaq(openFaq === i ? null : i)
              }
            >
              <button className="rp-faq-btn">
                <span className="rp-faq-q">{item.q}</span>
                <span className="rp-faq-plus">+</span>
              </button>
              <div className="rp-faq-ans">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="rp-divider" />

      <section
        className="rp-section"
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
          className="rp-container"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <span className="rp-badge">READY TO GROW?</span>
          <h2
            className="rp-h2"
            style={{
              color: 'white',
              marginBottom: '16px',
              maxWidth: '680px',
              margin: '0 auto 16px',
            }}
          >
            Want More Roofing Appointments?{' '}
            <span style={{ color: '#16C05A' }}>
              Let Us Show You Exactly How.
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
            size in your service area, your estimated cost per appointment and a
            campaign plan built for your roofing company.
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
              'Analyse your service area and audience size',
              'Show you exactly how our roofing appointment system works',
              'Estimate your cost per booked appointment',
              'Outline the campaign types that fit your market',
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
          <div className="rp-cta-row">
            <button
              className="rp-btn-green"
              style={{ padding: '16px 44px', fontSize: '16px' }}
              onClick={() => (window.location.href = '/book-a-call')}
            >
              Book Your Free Roofing Growth Call
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
            your roofing company.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

