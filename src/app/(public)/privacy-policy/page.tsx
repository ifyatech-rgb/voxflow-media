import Image from "next/image";

export default function PrivacyPolicyPage() {
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

  .vp-subheading {
    font-size: 14px;
    font-weight: 600;
    color: #E5E7EB;
    margin-top: 14px;
    margin-bottom: 6px;
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
        <div className="vp-chip">Privacy Policy</div>

        <h1 className="vp-title">Privacy Policy</h1>
        <div className="vp-updated">Last Updated: March 14, 2026</div>

        <p className="vp-text" style={{ marginBottom: 18 }}>
          Company:{" "}
          <span style={{ fontWeight: 600 }}>Voxflow Media</span>{" "}
          (<q>Company</q>, <q>we</q>, <q>our</q>, or <q>us</q>)
        </p>

        <p className="vp-intro">
          Voxflow Media respects your privacy and is committed to protecting the
          personal information you share with us. This Privacy Policy explains
          how we collect, use, and protect your information when you visit our
          website or interact with our services.
        </p>

        <section className="vp-section" aria-labelledby="vp-section-1">
          <h2 id="vp-section-1">Section 1: Information We Collect</h2>

          <div className="vp-subheading">Personal Information:</div>
          <p className="vp-text">
            When you interact with our website or services, we may collect:
          </p>
          <ul className="vp-list">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business name</li>
            <li>Any information you provide through contact forms</li>
          </ul>

          <div className="vp-subheading">Automatically Collected Information:</div>
          <p className="vp-text">
            We may automatically collect certain data when you visit our
            website, including:
          </p>
          <ul className="vp-list">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Website usage data</li>
          </ul>
          <p className="vp-text">
            This information helps us improve our website and services.
          </p>
        </section>

        <section className="vp-section" aria-labelledby="vp-section-2">
          <h2 id="vp-section-2">Section 2: How We Use Your Information</h2>

          <p className="vp-text">We may use the information we collect to:</p>
          <ul className="vp-list">
            <li>Respond to inquiries and provide customer support</li>
            <li>Schedule appointments or consultations</li>
            <li>Provide information about our services</li>
            <li>Improve our website and marketing</li>
            <li>Communicate with you regarding services you requested</li>
          </ul>
        </section>

        <section className="vp-section" aria-labelledby="vp-section-3">
          <h2 id="vp-section-3">Section 3: SMS Communications</h2>

          <p className="vp-text">
            By providing your phone number, you agree to receive SMS messages
            from Voxflow Media related to:
          </p>
          <ul className="vp-list">
            <li>Appointment confirmations</li>
            <li>Service updates</li>
            <li>Customer support</li>
            <li>Follow-ups related to services you requested</li>
          </ul>

          <p className="vp-text">Message frequency may vary.</p>
          <p className="vp-text">Message and data rates may apply.</p>
          <p className="vp-text">
            You may opt out of SMS communications at any time by replying STOP
            to any message.
          </p>
          <p className="vp-text">
            You may reply HELP for assistance.
          </p>
        </section>

        <section className="vp-section" aria-labelledby="vp-section-4">
          <h2 id="vp-section-4">Section 4: Information Sharing</h2>

          <p className="vp-text">
            We do not sell, rent, or trade your personal information.
          </p>

          <p className="vp-text">
            We may share information with trusted third-party service providers
            who help us operate our business, including:
          </p>
          <ul className="vp-list">
            <li>CRM platforms</li>
            <li>SMS communication platforms</li>
            <li>Website hosting providers</li>
          </ul>
          <p className="vp-text">
            These providers only use your information to help deliver our
            services.
          </p>
        </section>

        <section className="vp-section" aria-labelledby="vp-section-5">
          <h2 id="vp-section-5">Section 5: Data Security</h2>

          <p className="vp-text">
            We implement reasonable security measures to protect your personal
            information from unauthorized access, misuse, or disclosure.
            However, no system can guarantee complete security.
          </p>
        </section>

        <section className="vp-section" aria-labelledby="vp-section-6">
          <h2 id="vp-section-6">Section 6: Your Rights</h2>

          <p className="vp-text">You may request to:</p>
          <ul className="vp-list">
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
          </ul>
          <p className="vp-text">
            To make a request, contact us using the information below.
          </p>
        </section>

        <section className="vp-section" aria-labelledby="vp-section-7">
          <h2 id="vp-section-7">Section 7: Third-Party Links</h2>

          <p className="vp-text">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of those sites.
          </p>
        </section>

        <section className="vp-section" aria-labelledby="vp-section-8">
          <h2 id="vp-section-8">Section 8: Changes to This Policy</h2>

          <p className="vp-text">
            We may update this Privacy Policy from time to time. Updates will be
            posted on this page.
          </p>
        </section>

        <section className="vp-section" aria-labelledby="vp-section-9">
          <h2 id="vp-section-9">Section 9: Contact Us</h2>

          <p className="vp-text">
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
            <span className="vp-footer-link vp-footer-link--current">
              Privacy Policy
            </span>
            <span style={{ color: "#4B5563" }}>|</span>
            <a href="/terms" className="vp-footer-link">
              Terms &amp; Conditions
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

