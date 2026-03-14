import Image from "next/image";

export default function TermsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#050814",
        color: "#E5E7EB",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <style>{`
  html {
    scroll-behavior: smooth;
  }

  .vp-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 96px 16px 40px;
  }

  .vp-header {
    position: sticky;
    top: 0;
    z-index: 40;
    background: radial-gradient(circle at top, rgba(15,23,42,0.98), #020617);
    border-bottom: 1px solid rgba(51,65,85,0.9);
    backdrop-filter: blur(14px);
  }

  .vp-nav-inner {
    max-width: 1040px;
    margin: 0 auto;
    padding: 14px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .vp-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 800;
    letter-spacing: 0.04em;
    color: #F9FAFB;
    text-transform: uppercase;
    font-size: 13px;
  }

  .vp-logo-mark {
    width: 26px;
    height: 26px;
    border-radius: 999px;
    background: linear-gradient(135deg, #22C55E, #0EA5E9);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 900;
    color: #020617;
  }

  .vp-back-link {
    font-size: 13px;
    color: #93C5FD;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 12px;
    border-radius: 999px;
    border: 1px solid rgba(37,99,235,0.6);
    background-color: rgba(15,23,42,0.9);
    transition: background 0.15s ease, border-color 0.15s ease,
      color 0.15s ease, transform 0.15s ease;
    white-space: nowrap;
  }

  .vp-back-link:hover {
    background-color: rgba(30,64,175,0.9);
    border-color: rgba(59,130,246,0.9);
    color: #E5E7EB;
    transform: translateY(-1px);
  }

  .vp-title {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #F9FAFB;
    margin-bottom: 4px;
  }

  .vp-updated {
    font-size: 13px;
    color: #9CA3AF;
    margin-bottom: 24px;
  }

  .vp-chip {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 999px;
    border: 1px solid rgba(59,130,246,0.8);
    background-color: rgba(15,23,42,0.9);
    color: #BFDBFE;
    font-size: 11px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 14px;
  }

  .vp-intro {
    font-size: 15px;
    line-height: 1.7;
    color: #E5E7EB;
    margin-bottom: 32px;
  }

  .vp-section {
    margin-bottom: 28px;
    padding-top: 20px;
    border-top: 1px solid rgba(30,64,175,0.6);
  }

  .vp-section h2 {
    font-size: 18px;
    font-weight: 700;
    color: #BFDBFE;
    margin-bottom: 10px;
  }

  .vp-text {
    font-size: 14px;
    line-height: 1.7;
    color: #D1D5DB;
    margin-bottom: 10px;
  }

  .vp-list {
    font-size: 14px;
    color: #D1D5DB;
    padding-left: 18px;
    margin: 4px 0 10px;
  }

  .vp-list li {
    margin-bottom: 4px;
  }

  .vp-footer {
    border-top: 1px solid rgba(31,41,55,0.9);
    margin-top: 40px;
    padding-top: 18px;
    padding-bottom: 24px;
    font-size: 13px;
    color: #6B7280;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
  }

  .vp-footer-links {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  .vp-footer-link {
    color: #9CA3AF;
    text-decoration: none;
    font-size: 13px;
  }

  .vp-footer-link:hover {
    color: #E5E7EB;
    text-decoration: underline;
  }

  .vp-footer-link--current {
    color: #4B5563;
    cursor: default;
  }

  .vp-footer-link--current:hover {
    text-decoration: none;
  }

  @media (max-width: 640px) {
    .vp-container {
      padding-top: 84px;
    }
    .vp-title {
      font-size: 24px;
    }
    .vp-header {
      position: fixed;
    }
    .vp-nav-inner {
      padding-inline: 12px;
    }
  }
      `}</style>

      <header className="vp-header">
        <div className="vp-nav-inner">
          <div className="vp-logo">
            <div className="vp-logo-mark">
              <Image
                src="/voxflow-logo.png"
                alt="Voxflow Media"
                width={26}
                height={26}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            <span>Voxflow Media</span>
          </div>
          <a href="/" className="vp-back-link">
            <span>←</span>
            <span>Back to Home</span>
          </a>
        </div>
      </header>

      <main className="vp-container">
        <div className="vp-chip">Terms &amp; Conditions</div>

        <h1 className="vp-title">Terms and Conditions</h1>
        <div className="vp-updated">Last Updated: March 14, 2026</div>

        <p className="vp-intro">
          These Terms and Conditions govern your use of Voxflow Media&apos;s
          website and services. By using our website or services, you agree to
          these terms.
        </p>

        <section className="vp-section" aria-labelledby="vp-section-1">
          <h2 id="vp-section-1">Section 1: Services</h2>

          <p className="vp-text">
            Voxflow Media provides marketing and appointment-setting services
            for businesses, including:
          </p>
          <ul className="vp-list">
            <li>Lead generation</li>
            <li>Advertising services</li>
            <li>Appointment scheduling systems</li>
            <li>Marketing automation solutions</li>
          </ul>
          <p className="vp-text">
            We reserve the right to modify or discontinue services at any time.
          </p>
        </section>

        <section className="vp-section" aria-labelledby="vp-section-2">
          <h2 id="vp-section-2">Section 2: User Responsibilities</h2>

          <p className="vp-text">
            By using our services, you agree to:
          </p>
          <ul className="vp-list">
            <li>Provide accurate information</li>
            <li>Use services only for lawful purposes</li>
            <li>Not misuse our systems or technology</li>
          </ul>
        </section>

        <section className="vp-section" aria-labelledby="vp-section-3">
          <h2 id="vp-section-3">Section 3: SMS Communication</h2>

          <p className="vp-text">
            By submitting your phone number through our website or forms, you
            agree to receive SMS communications from Voxflow Media.
          </p>

          <p className="vp-text">These messages may include:</p>
          <ul className="vp-list">
            <li>Appointment confirmations</li>
            <li>Follow-ups</li>
            <li>Service-related communications</li>
          </ul>

          <p className="vp-text">Message frequency may vary.</p>
          <p className="vp-text">Message and data rates may apply.</p>
          <p className="vp-text">
            You can opt out at any time by replying STOP.
          </p>
          <p className="vp-text">Reply HELP for assistance.</p>
        </section>

        <section className="vp-section" aria-labelledby="vp-section-4">
          <h2 id="vp-section-4">Section 4: Intellectual Property</h2>

          <p className="vp-text">
            All content on this website, including text, branding, graphics, and
            software, is the property of Voxflow Media unless otherwise stated.
            You may not copy, distribute, or reproduce content without
            permission.
          </p>
        </section>

        <section className="vp-section" aria-labelledby="vp-section-5">
          <h2 id="vp-section-5">Section 5: Limitation of Liability</h2>

          <p className="vp-text">
            Voxflow Media shall not be liable for any direct, indirect,
            incidental, or consequential damages arising from the use of our
            services or website.
          </p>
        </section>

        <section className="vp-section" aria-labelledby="vp-section-6">
          <h2 id="vp-section-6">Section 6: Third-Party Services</h2>

          <p className="vp-text">
            Our services may integrate with third-party platforms such as:
          </p>
          <ul className="vp-list">
            <li>Advertising platforms</li>
            <li>CRM systems</li>
            <li>Communication tools</li>
          </ul>
          <p className="vp-text">
            We are not responsible for the policies or performance of these
            third-party services.
          </p>
        </section>

        <section className="vp-section" aria-labelledby="vp-section-7">
          <h2 id="vp-section-7">Section 7: Service Changes</h2>

          <p className="vp-text">
            We may update, modify, or discontinue services without prior notice.
          </p>
        </section>

        <section className="vp-section" aria-labelledby="vp-section-8">
          <h2 id="vp-section-8">Section 8: Governing Law</h2>

          <p className="vp-text">
            These terms are governed by the laws of the United States.
          </p>
        </section>

        <section className="vp-section" aria-labelledby="vp-section-9">
          <h2 id="vp-section-9">Section 9: Contact Information</h2>

          <p className="vp-text">
            For questions regarding these terms, contact:
            <br />
            Voxflow Media
            <br />
            Email:{" "}
            <a
              href="mailto:support@voxflowmedia.com"
              style={{ color: "#93C5FD", textDecoration: "none" }}
            >
              support@voxflowmedia.com
            </a>
          </p>
        </section>

        <footer className="vp-footer">
          <div>© 2026 Voxflow Media. All rights reserved.</div>
          <div className="vp-footer-links">
            <a href="/privacy-policy" className="vp-footer-link">
              Privacy Policy
            </a>
            <span style={{ color: "#4B5563" }}>|</span>
            <span className="vp-footer-link vp-footer-link--current">
              Terms &amp; Conditions
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}

