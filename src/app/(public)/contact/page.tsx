export default function ContactPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        color: "#E5E7EB",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <style>{`
  html {
    scroll-behavior: smooth;
  }

  .contact-container {
    max-width: 1120px;
    margin: 0 auto;
    padding: 96px 16px 64px;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
    gap: 32px;
    align-items: flex-start;
  }

  .contact-card {
    background-color: #0b1120;
    border-radius: 20px;
    border: 1px solid #1f2937;
    padding: 28px 24px;
  }

  .contact-heading {
    font-size: 26px;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #f9fafb;
    margin-bottom: 8px;
  }

  .contact-subtitle {
    font-size: 15px;
    color: #9ca3af;
    margin-bottom: 24px;
  }

  .contact-label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: #e5e7eb;
    margin-bottom: 6px;
  }

  .contact-input,
  .contact-textarea {
    width: 100%;
    border-radius: 10px;
    border: 1px solid #1f2937;
    background-color: #020617;
    color: #f9fafb;
    font-size: 14px;
    padding: 10px 11px;
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease,
      background-color 0.15s ease;
  }

  .contact-input:focus,
  .contact-textarea:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.6);
    background-color: #020617;
  }

  .contact-textarea {
    min-height: 110px;
    resize: vertical;
  }

  .contact-helper {
    font-size: 12px;
    color: #6b7280;
    margin-top: 4px;
  }

  .contact-checkbox-row {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  .contact-checkbox {
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1px solid #374151;
    background-color: #020617;
  }

  .contact-checkbox-label {
    font-size: 12px;
    color: #9ca3af;
    line-height: 1.5;
  }

  .contact-submit {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 11px 22px;
    border-radius: 999px;
    border: none;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    background: radial-gradient(circle at top, rgba(59,130,246,0.7), #3b82f6);
    color: #000000;
    box-shadow: 0 0 0 1px rgba(59,130,246,0.4),
      0 0 40px rgba(59, 130, 246, 0.75);
    transition: transform 0.15s ease, filter 0.15s ease;
  }

  .contact-submit:hover {
    filter: brightness(1.06);
    transform: translateY(-1px);
  }

  .contact-info-heading {
    font-size: 18px;
    font-weight: 700;
    color: #bfdbfe;
    margin-bottom: 12px;
  }

  .contact-info-text {
    font-size: 14px;
    color: #d1d5db;
    line-height: 1.7;
    margin-bottom: 14px;
  }

  .contact-info-item {
    margin-bottom: 10px;
  }

  .contact-info-label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: #6b7280;
    margin-bottom: 2px;
  }

  .contact-info-value {
    font-size: 14px;
    color: #e5e7eb;
    font-weight: 500;
  }

  .contact-info-tagline {
    margin-top: 16px;
    font-size: 13px;
    color: #9ca3af;
  }

  @media (max-width: 768px) {
    .contact-container {
      padding-top: 88px;
    }
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .contact-card {
      padding: 22px 18px;
    }
  }
      `}</style>

      <main className="contact-container">
        <section style={{ marginBottom: 32 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "4px 10px",
              borderRadius: 999,
              border: "1px solid rgba(59,130,246,0.8)",
              backgroundColor: "rgba(15,23,42,0.9)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#BFDBFE",
            }}
          >
            Contact Voxflow Media
          </div>
          <h1
            style={{
              marginTop: 16,
              fontSize: 30,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#F9FAFB",
            }}
          >
            Contact Us
          </h1>
          <p
            style={{
              marginTop: 8,
              fontSize: 15,
              color: "#9CA3AF",
              maxWidth: 640,
            }}
          >
            Have questions about our services? Reach out to us directly.
          </p>
        </section>

        <section className="contact-grid">
          {/* Left: Contact form */}
          <div className="contact-card">
            <form
              method="post"
              action="#"
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
            >
              <div>
                <label className="contact-label" htmlFor="fullName">
                  Full Name *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="contact-input"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="contact-label" htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="contact-input"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="contact-label" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="contact-input"
                  placeholder="Optional"
                />
                <div className="contact-helper">
                  Include your mobile number if you&apos;d like SMS follow-ups.
                </div>
              </div>

              <div>
                <label className="contact-label" htmlFor="message">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="contact-textarea"
                  placeholder="Tell us about your business and what you need help with."
                />
              </div>

              <div className="contact-checkbox-row">
                <input
                  id="smsConsent"
                  name="smsConsent"
                  type="checkbox"
                  className="contact-checkbox"
                />
                <label
                  htmlFor="smsConsent"
                  className="contact-checkbox-label"
                >
                  I agree to receive SMS communications from Voxflow Media.
                  Reply STOP to opt out.
                </label>
              </div>

              <button type="submit" className="contact-submit">
                Submit
              </button>
            </form>
          </div>

          {/* Right: Contact info */}
          <div className="contact-card">
            <div className="contact-info-heading">Our Contact Details</div>
            <p className="contact-info-text">
              We work with businesses that want a predictable system for lead
              generation, advertising, appointment scheduling, and marketing
              automation.
            </p>

            <div className="contact-info-item">
              <div className="contact-info-label">Business Name</div>
              <div className="contact-info-value">Voxflow Media</div>
            </div>

              <div className="contact-info-item">
              <div className="contact-info-label">Email</div>
              <div className="contact-info-value">
                <a
                  href="mailto:voxflowmedia@gmail.com"
                  style={{ color: "#93C5FD", textDecoration: "none" }}
                >
                  voxflowmedia@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-label">Services</div>
              <div className="contact-info-value">
                Lead generation, advertising, appointment scheduling, and
                marketing automation for businesses.
              </div>
            </div>

            <p className="contact-info-tagline">
              Share a bit about your current marketing and where you&apos;d like
              to be in the next 3–6 months. We&apos;ll follow up with next
              steps.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

