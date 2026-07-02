import { serviceCategories } from "@/lib/services";
import Link from "next/link";

export default function ServicesList() {
  return (
    <div>
      {serviceCategories.map((category, catIndex) => (
        <section
          key={category.id}
          id={category.id}
          style={{
            background: catIndex % 2 === 0 ? "var(--color-paper)" : "var(--color-void)",
            padding: "7rem 2rem",
          }}
        >
          <div
            style={{
              maxWidth: "1320px",
              margin: "0 auto",
              display: "grid",
            }}
            className="services-list-grid"
          >
            {/* Left: category heading */}
            <div className="services-sticky-col">
              <p
                style={{
                  fontFamily: "var(--font-label)",
                  fontWeight: 300,
                  fontSize: "0.55rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  marginBottom: "1.25rem",
                }}
              >
                {String(catIndex + 1).padStart(2, "0")} — Services
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                  lineHeight: 1.1,
                  color: catIndex % 2 === 0 ? "var(--color-void)" : "var(--color-ivory)",
                  margin: "0 0 1.25rem",
                  letterSpacing: "0.01em",
                }}
              >
                {category.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "0.9375rem",
                  lineHeight: 1.8,
                  color: catIndex % 2 === 0 ? "var(--color-muted)" : "rgba(242,236,227,0.6)",
                  margin: 0,
                }}
              >
                {category.tagline}
              </p>
            </div>

            {/* Right: service items */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
              }}
              className="services-items-grid"
            >
              {category.services.map((service) => (
                <div
                  key={service}
                  className="service-item"
                  style={{
                    padding: "1.25rem 1rem",
                    borderBottom: `1px solid ${catIndex % 2 === 0 ? "rgba(138,133,128,0.15)" : "var(--color-divider)"}`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                      fontSize: "0.9375rem",
                      color: catIndex % 2 === 0 ? "var(--color-void)" : "var(--color-ivory)",
                      lineHeight: 1.5,
                    }}
                  >
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA at bottom of services page */}
      <section
        style={{
          background: "var(--color-surface)",
          padding: "6rem 2rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
          <p
            style={{
              fontFamily: "var(--font-label)",
              fontWeight: 300,
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: "var(--color-muted)",
              textTransform: "uppercase",
            }}
          >
            Not seeing what you need?
          </p>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              color: "var(--color-ivory)",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Ask us. If it involves fabric, we can help.
          </h3>
          <Link href="/contact" className="btn-outline-light">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
