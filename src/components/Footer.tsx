import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1E293B",
        padding: "24px 24px 32px",
        fontSize: 14,
        color: "#94A3B8",
        background: "#000000",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#16C05A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <Image
              src="/voxflow-logo.png"
              alt="Voxflow Media"
              width={32}
              height={32}
              style={{ objectFit: "contain" }}
            />
          </div>
          <span style={{ fontWeight: 600, color: "#FFFFFF" }}>
            Voxflow Media
          </span>
        </Link>
        <p
          style={{
            margin: 0,
            opacity: 0.9,
            maxWidth: 420,
            textAlign: "center",
            flex: "1 1 280px",
          }}
        >
          Helping home improvement companies grow with AI powered appointment
          setting.
        </p>
        <div style={{ opacity: 0.8, flexShrink: 0 }}>
          © 2026 Voxflow Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
