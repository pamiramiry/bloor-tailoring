import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Hours | Bloor Tailoring — 2323 Bloor St W Toronto",
  description:
    "Book a fitting or alteration with Bloor Tailoring. Located at 2323 Bloor St W Unit 8, Toronto. Call (437) 962-1515 or fill out the form.",
  alternates: { canonical: "https://bloortailoring.com/contact" },
  openGraph: {
    title: "Contact Bloor Tailoring | Toronto Tailor",
    description: "Visit us at 2323 Bloor St W, Bloor West Village. Call (437) 962-1515.",
    url: "https://bloortailoring.com/contact",
  },
};

const hours = [
  { day: "Monday", time: "10:30 AM – 6:00 PM" },
  { day: "Tuesday", time: "10:30 AM – 6:00 PM" },
  { day: "Wednesday", time: "10:30 AM – 6:00 PM" },
  { day: "Thursday", time: "10:30 AM – 6:00 PM" },
  { day: "Friday", time: "10:30 AM – 6:00 PM" },
  { day: "Saturday", time: "10:30 AM – 5:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section
        style={{
          background: "var(--color-void)",
          padding: "12rem 2rem 6rem",
        }}
      >
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
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
            Visit or Reach Out
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(2.5rem, 6vw, 6rem)",
              color: "var(--color-ivory)",
              margin: 0,
              lineHeight: 1.05,
              letterSpacing: "0.02em",
            }}
          >
            Let&rsquo;s Talk
            <br />
            <span style={{ fontStyle: "italic", color: "var(--color-gold-light)" }}>Fit</span>
          </h1>
        </div>
      </section>

      {/* Main contact content */}
      <section style={{ background: "var(--color-paper)", padding: "7rem 2rem" }}>
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            display: "grid",
          }}
          className="contact-grid"
        >
          {/* Left: info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {/* Address */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p style={{ fontFamily: "var(--font-label)", fontWeight: 300, fontSize: "0.55rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-gold)", margin: 0 }}>
                Location
              </p>
              <div style={{ width: "100%", height: "1px", background: "rgba(138,133,128,0.2)" }} />
              <address
                style={{
                  fontStyle: "normal",
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: "var(--color-void)",
                }}
              >
                2323 Bloor St W, Unit 8<br />
                Toronto, ON M6S 4W1
              </address>
            </div>

            {/* Phone */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p style={{ fontFamily: "var(--font-label)", fontWeight: 300, fontSize: "0.55rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-gold)", margin: 0 }}>
                Phone
              </p>
              <div style={{ width: "100%", height: "1px", background: "rgba(138,133,128,0.2)" }} />
              <a
                href="tel:+14379621515"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "1.25rem",
                  color: "var(--color-void)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                }}
              >
                (437) 962‑1515
              </a>
            </div>

            {/* Hours */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p style={{ fontFamily: "var(--font-label)", fontWeight: 300, fontSize: "0.55rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--color-gold)", margin: 0 }}>
                Hours
              </p>
              <div style={{ width: "100%", height: "1px", background: "rgba(138,133,128,0.2)" }} />
              <table style={{ borderCollapse: "collapse", width: "100%" }}>
                <tbody>
                  {hours.map(({ day, time }) => (
                    <tr key={day}>
                      <td
                        style={{
                          fontFamily: "var(--font-label)",
                          fontWeight: 300,
                          fontSize: "0.65rem",
                          letterSpacing: "0.1em",
                          color: "var(--color-muted)",
                          textTransform: "uppercase",
                          padding: "0.5rem 0",
                          paddingRight: "2rem",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {day}
                      </td>
                      <td
                        style={{
                          fontFamily: "var(--font-body)",
                          fontWeight: 300,
                          fontSize: "0.875rem",
                          color: time === "Closed" ? "var(--color-muted)" : "var(--color-void)",
                        }}
                      >
                        {time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p
                style={{
                  fontFamily: "var(--font-label)",
                  fontWeight: 300,
                  fontSize: "0.55rem",
                  letterSpacing: "0.12em",
                  color: "var(--color-muted)",
                  textTransform: "uppercase",
                  marginTop: "0.5rem",
                }}
              >
                * Hours subject to change — call to confirm
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-label)",
                  fontWeight: 300,
                  fontSize: "0.55rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--color-gold)",
                  marginBottom: "1rem",
                }}
              >
                Send a Message
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                  color: "var(--color-void)",
                  margin: "0 0 0.5rem",
                  lineHeight: 1.2,
                }}
              >
                Tell us about your garment.
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 300,
                  fontSize: "0.9375rem",
                  color: "var(--color-muted)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                We&rsquo;ll get back to you to arrange a time that works.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Google Maps embed */}
      <section style={{ background: "var(--color-void)", padding: "0" }}>
        <iframe
          title="Bloor Tailoring location map"
          src="https://maps.google.com/maps?q=2323+Bloor+St+W+Unit+8+Toronto+ON+M6S+4W1&output=embed"
          width="100%"
          height="400"
          style={{ display: "block", border: "none", filter: "grayscale(100%) invert(1) brightness(0.8) contrast(1.1)" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
