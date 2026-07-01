import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Expert Tailor in Bloor West Village | Bloor Tailoring",
  description:
    "Meet Bloor Tailoring — Toronto's precision tailoring specialist at 2323 Bloor St W. Expert in custom garments, alterations, and bridal fittings.",
  alternates: { canonical: "https://bloortailoring.com/about" },
  openGraph: {
    title: "About Bloor Tailoring | Toronto Tailor",
    description:
      "Expert tailor serving Bloor West Village. Custom suits, alterations, and bridal work.",
    url: "https://bloortailoring.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "var(--color-void)",
          padding: "12rem 2rem 7rem",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-label)",
              fontWeight: 300,
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
            }}
          >
            Est. in Toronto
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(2.5rem, 7vw, 7rem)",
              color: "var(--color-ivory)",
              margin: 0,
              lineHeight: 1.0,
              letterSpacing: "0.02em",
              textAlign: "right",
            }}
          >
            Crafted<br />
            <span style={{ fontStyle: "italic", color: "var(--color-gold-light)" }}>
              in Toronto.
            </span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section
        style={{
          background: "var(--color-paper)",
          padding: "7rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left: copy */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <p
              style={{
                fontFamily: "var(--font-label)",
                fontWeight: 300,
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--color-gold)",
              }}
            >
              Our Story
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                fontFamily: "var(--font-body)",
                fontWeight: 300,
                fontSize: "1.0625rem",
                lineHeight: 1.85,
                color: "var(--color-void)",
              }}
            >
              <p style={{ margin: 0 }}>
                Bloor Tailoring has built its reputation quietly, the way all lasting things are built — through
                consistency, skill, and genuine care for the work. Located at 2323 Bloor St W in Toronto&rsquo;s
                Bloor West Village, we&rsquo;ve served the neighbourhood with precision tailoring across a full
                range of garments and needs.
              </p>
              <p style={{ margin: 0 }}>
                Our work spans custom suits constructed from scratch, alterations that transform an off-the-rack
                piece into something that feels made for you, bridal fittings handled with the attention they
                deserve, and specialist repairs — leather, zippers, knits — done properly.
              </p>
              <p style={{ margin: 0 }}>
                We believe that fit is the difference between clothing you own and clothing you wear with
                confidence. That belief is in every measurement we take, every seam we open, and every
                finished garment we hand back.
              </p>
            </div>
          </div>

          {/* Right: photo placeholder + details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Photo placeholder */}
            <div
              style={{
                aspectRatio: "3/4",
                background: "var(--color-surface)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "0.55rem",
                  letterSpacing: "0.2em",
                  color: "var(--color-muted)",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                Tailor or shop<br />photo goes here
              </p>
            </div>

            {/* Detail block */}
            <div
              style={{
                borderLeft: "1px solid var(--color-gold)",
                paddingLeft: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-label)",
                  fontWeight: 300,
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "var(--color-muted)",
                  textTransform: "uppercase",
                  margin: 0,
                }}
              >
                Google Rating
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: "1.5rem",
                  color: "var(--color-gold)",
                  margin: 0,
                }}
              >
                ★★★★★ &nbsp;4.7
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "0.875rem",
                  color: "var(--color-muted)",
                  margin: 0,
                }}
              >
                Based on 70+ reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        style={{
          background: "var(--color-void)",
          padding: "7rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <div style={{ width: "2rem", height: "1px", background: "var(--color-gold)" }} />
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
              color: "var(--color-ivory)",
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            We don&rsquo;t rush the work. The work is the point.
          </h2>
          <div style={{ width: "2rem", height: "1px", background: "var(--color-gold)" }} />
          <Link href="/contact" className="btn-outline-light" style={{ marginTop: "1rem" }}>
            Book a Fitting
          </Link>
        </div>
      </section>
    </>
  );
}
