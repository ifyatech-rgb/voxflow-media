'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useEffect } from 'react';

export default function BookACallPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        color: 'white',
        fontFamily:
          'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      <Navbar />

      <main
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          padding: '24px 16px 80px',
        }}
      >
        <section
          className="booking-hero"
          style={{ textAlign: 'center', marginBottom: 40 }}
        >
          <div
            style={{
              display: 'inline-flex',
              padding: '6px 14px',
              borderRadius: 999,
              border: '1px solid rgba(22,192,90,0.4)',
              color: '#16C05A',
              fontSize: 11,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            Free Strategy Call
          </div>
          <h1
            style={{
              marginTop: 18,
              fontSize: 40,
              fontWeight: 900,
              lineHeight: 1.2,
            }}
          >
            Book Your Free 30-Minute Strategy Call
          </h1>
          <p
            style={{
              marginTop: 12,
              fontSize: 16,
              color: '#9CA3AF',
              maxWidth: 640,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Tell us about your business and we will show you exactly how we
            would get you 20-40 booked appointments in the next 30 days.
          </p>
        </section>

        <section
          className="booking-grid"
          style={{
            display: 'grid',
            gap: 32,
            gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
          }}
        >
          <div
            className="booking-left"
            style={{
              backgroundColor: '#0D1117',
              borderRadius: 20,
              border: '1px solid #1E293B',
              padding: 32,
            }}
          >
            {/* Section 1 - Title */}
            <h2
              style={{
                fontSize: 22,
                fontWeight: 900,
                color: 'white',
                margin: 0,
                marginBottom: 8,
              }}
            >
              What Happens on the Call
            </h2>
            <p
              style={{
                color: '#94A3B8',
                fontSize: 14,
                margin: 0,
                marginBottom: 24,
                lineHeight: 1.5,
              }}
            >
              No pitch. No pressure. Just a real conversation about your growth.
            </p>

            {/* Section 2 - Numbered steps */}
            {[
              {
                title: 'We audit your current lead situation',
                subtext:
                  'Tell us what you have tried and what is working',
              },
              {
                title: 'We map out your market opportunity',
                subtext: 'We show you exactly what is possible in your area',
              },
              {
                title: 'We build your custom campaign plan',
                subtext: 'A real strategy built for your trade and market',
              },
              {
                title: 'We see if we are a good fit',
                subtext: 'No hard sell. If it makes sense, we move forward',
              },
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: 16,
                  marginBottom: 20,
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    backgroundColor: '#16C05A',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 13,
                    fontWeight: 700,
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <div
                    style={{
                      color: 'white',
                      fontWeight: 700,
                      fontSize: 15,
                      marginBottom: 4,
                    }}
                  >
                    {step.title}
                  </div>
                  <div
                    style={{
                      color: '#64748B',
                      fontSize: 13,
                      lineHeight: 1.45,
                    }}
                  >
                    {step.subtext}
                  </div>
                </div>
              </div>
            ))}

            {/* Section 3 - Divider + This call is perfect for */}
            <div
              style={{
                height: 1,
                background: '#1E293B',
                margin: '24px 0',
              }}
            />
            <div
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: 'white',
                marginBottom: 12,
              }}
            >
              This call is perfect for:
            </div>
            {[
              'Roofers, HVAC, remodelers, painters, kitchen and bath',
              'Companies doing $20k+ per month ready to scale',
              'Owners tired of chasing leads and want booked jobs',
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: 10,
                  marginBottom: 10,
                  alignItems: 'flex-start',
                }}
              >
                <span style={{ color: '#16C05A', flexShrink: 0 }}>✓</span>
                <span style={{ color: '#94A3B8', fontSize: 14 }}>{item}</span>
              </div>
            ))}

            {/* Section 4 - Stat cards */}
            <div
              style={{
                marginTop: 24,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: 12,
              }}
            >
              {[
                { value: '312+', label: 'Appts Booked' },
                { value: '$94k', label: 'Revenue Added' },
                { value: '85%', label: 'Show Rate' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #1E293B',
                    borderRadius: 12,
                    padding: 12,
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: '#16C05A',
                      marginBottom: 4,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: '#64748B',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Section 5 - Testimonial */}
            <div
              style={{
                marginTop: 24,
                borderLeft: '3px solid #16C05A',
                backgroundColor: 'rgba(22,192,90,0.06)',
                borderRadius: 12,
                padding: 16,
              }}
            >
              <p
                style={{
                  color: '#E5E7EB',
                  fontSize: 14,
                  lineHeight: 1.6,
                  margin: 0,
                  marginBottom: 10,
                  fontStyle: 'italic',
                }}
              >
                &ldquo;Booked 23 appointments in my first month. I stopped
                chasing leads completely.&rdquo;
              </p>
              <div
                style={{
                  fontSize: 13,
                  color: '#16C05A',
                  fontWeight: 600,
                }}
              >
                Mike R. &ndash; Roofing Company Owner, Texas
              </div>
            </div>

            {/* Section 6 - Trust badges */}
            <div
              className="booking-trust-row"
              style={{
                marginTop: 24,
                display: 'flex',
                flexWrap: 'wrap',
                gap: 10,
              }}
            >
              {[
                { icon: '🛡', text: 'No Obligation' },
                { icon: '✓', text: '100% Free Call' },
                { icon: '★', text: '30-Day Guarantee' },
              ].map((badge) => (
                <div
                  key={badge.text}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #1E293B',
                    borderRadius: 999,
                    padding: '8px 12px',
                    fontSize: 12,
                    color: 'white',
                  }}
                >
                  <span style={{ color: '#16C05A' }}>{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#0D1117',
              borderRadius: 20,
              border: '1px solid #1E293B',
              overflow: 'hidden',
            }}
          >
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/voxflowmedia/growth-system?hide_gdpr_banner=1"
              style={{ minWidth: '320px', width: '100%', height: '700px' }}
            />
          </div>
        </section>
      </main>

      <Footer />
      <style>{`
  @media (max-width: 768px) {
    .booking-grid {
      grid-template-columns: 1fr !important;
      padding: 0 16px !important;
    }
    .booking-hero {
      padding: 100px 16px 40px !important;
    }
    .booking-hero h1 {
      font-size: 32px !important;
    }
    .booking-trust-row {
      flex-direction: column !important;
      align-items: center !important;
      gap: 8px !important;
    }
    .booking-left {
      padding: 20px !important;
    }
    .calendly-inline-widget {
      height: 600px !important;
    }
  }

  @media (max-width: 480px) {
    .booking-hero h1 {
      font-size: 28px !important;
    }
  }
      `}</style>
    </div>
  );
}
