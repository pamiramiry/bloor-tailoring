import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--color-void)", color: "var(--color-ivory)" }}>
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "5rem 2rem 3rem",
          display: "grid",
          gap: "3rem",
        }}
        className="footer-grid"
      >
        {/* Left: Logo + tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <Logo variant="light" />
          <p
            style={{
              fontFamily: "var(--font-label)",
              fontWeight: 300,
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "var(--color-muted)",
              textTransform: "uppercase",
              lineHeight: 1.8,
            }}
          >
            Precision tailoring<br />in Bloor West Village
          </p>
        </div>

        {/* Center: Navigation */}
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
            alignItems: "center",
          }}
          aria-label="Footer navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-label)",
                fontWeight: 300,
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                color: "var(--color-muted)",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.2s ease",
              }}
              className="footer-link"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: NAP */}
        <address
          style={{
            fontStyle: "normal",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "0.875rem",
              color: "var(--color-ivory)",
              lineHeight: 1.7,
              textAlign: "right",
            }}
          >
            2323 Bloor St W, Unit 8<br />
            Toronto, ON M6S 4W1
          </p>
          <div
            style={{
              width: "2rem",
              height: "1px",
              backgroundColor: "var(--color-gold)",
            }}
          />
          <a
            href="tel:+14379621515"
            style={{
              fontFamily: "var(--font-label)",
              fontWeight: 300,
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              color: "var(--color-gold)",
              textDecoration: "none",
            }}
          >
            (437) 962‑1515
          </a>
        </address>
      </div>

      {/* Bottom rule */}
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "1.5rem 2rem",
          borderTop: "1px solid var(--color-divider)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="footer-bottom"
      >
        <p
          style={{
            fontFamily: "var(--font-label)",
            fontWeight: 300,
            fontSize: "0.6rem",
            letterSpacing: "0.12em",
            color: "var(--color-muted)",
            textTransform: "uppercase",
          }}
        >
          &copy; {year} Bloor Tailoring
        </p>
        <p
          style={{
            fontFamily: "var(--font-label)",
            fontWeight: 300,
            fontSize: "0.6rem",
            letterSpacing: "0.12em",
            color: "var(--color-muted)",
            textTransform: "uppercase",
          }}
        >
          Toronto, Canada
        </p>
      </div>
    </footer>
  );
}
