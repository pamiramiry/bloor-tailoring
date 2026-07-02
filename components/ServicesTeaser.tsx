import Link from "next/link";

const categories = [
  { label: "Have It Made", sub: "Custom tailoring & bespoke garments", href: "/services#have-it-made" },
  { label: "Make It Fit", sub: "Alterations for any garment", href: "/services#make-it-fit" },
  { label: "Bridal & Occasion", sub: "Fittings for your most important moments", href: "/services#bridal-occasion" },
  { label: "Restore & Renew", sub: "Repairs that extend the life of quality pieces", href: "/services#restore-renew" },
];

export default function ServicesTeaser() {
  return (
    <section
      style={{
        background: "var(--color-paper)",
        padding: "7rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{ maxWidth: "1320px", margin: "0 auto", display: "grid" }}
        className="services-teaser-grid"
      >
        {/* Left: pull quote */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-label)",
              fontWeight: 300,
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              marginBottom: "1.5rem",
            }}
          >
            What We Do
          </p>
          <blockquote
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              lineHeight: 1.2,
              color: "var(--color-void)",
              margin: 0,
              fontStyle: "italic",
            }}
          >
            &ldquo;A garment that fits perfectly needs no introduction.&rdquo;
          </blockquote>
        </div>

        {/* Right: service category links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0", paddingTop: "0.5rem" }}>
          {categories.map((cat, i) => (
            <Link
              key={cat.label}
              href={cat.href}
              style={{
                display: "block",
                textDecoration: "none",
                padding: "1.75rem 0 1.75rem 1.5rem",
                borderLeft: "1px solid var(--color-gold)",
                borderBottom: i < categories.length - 1 ? "1px solid rgba(138,133,128,0.15)" : "none",
                transition: "padding-left 0.25s ease, background 0.25s ease",
              }}
              className="category-link"
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-label)",
                  fontWeight: 300,
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-void)",
                  marginBottom: "0.35rem",
                  transition: "color 0.25s ease",
                }}
                className="category-title"
              >
                {cat.label}
              </span>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "0.85rem",
                  color: "var(--color-muted)",
                  lineHeight: 1.5,
                }}
              >
                {cat.sub}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
