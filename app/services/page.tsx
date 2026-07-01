import type { Metadata } from "next";
import ServicesList from "@/components/ServicesList";

export const metadata: Metadata = {
  title: "Tailoring Services | Custom Suits & Alterations Toronto | Bloor Tailoring",
  description:
    "Full tailoring services in Toronto: custom suits, pants hemming, wedding gown alterations, leather repair, and more. Visit us at 2323 Bloor St W, Bloor West Village.",
  alternates: { canonical: "https://bloortailoring.com/services" },
  openGraph: {
    title: "Tailoring Services | Bloor Tailoring Toronto",
    description:
      "Custom suits, alterations, bridal fittings, leather repair and more. Expert tailoring at 2323 Bloor St W.",
    url: "https://bloortailoring.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section
        style={{
          background: "var(--color-void)",
          padding: "12rem 2rem 6rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
            What We Offer
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
            Tailoring Services
            <br />
            <span style={{ fontStyle: "italic", color: "var(--color-gold-light)" }}>
              in Toronto
            </span>
          </h1>
        </div>
      </section>

      <ServicesList />
    </>
  );
}
