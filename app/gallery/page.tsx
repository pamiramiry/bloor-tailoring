import type { Metadata } from "next";
import { Suspense } from "react";
import GalleryClient from "@/components/GalleryClient";
import { galleryPhotos } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Our Work | Bloor Tailoring Toronto",
  description:
    "Photos of real alterations, custom tailoring, and wedding gown fittings from Bloor Tailoring in Toronto's Bloor West Village.",
  alternates: { canonical: "https://bloortailoring.com/gallery" },
  openGraph: {
    title: "Our Work | Bloor Tailoring Toronto",
    description:
      "See our tailoring work — alterations, custom garments, and wedding fittings in Bloor West Village.",
    url: "https://bloortailoring.com/gallery",
    images: [
      {
        url: "https://bloortailoring.com/images/wedding-dress.webp",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const imageGalleryJsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Bloor Tailoring — Portfolio",
  description:
    "Photos of real alterations and custom tailoring work from our shop in Bloor West Village, Toronto.",
  url: "https://bloortailoring.com/gallery",
  image: galleryPhotos.map((p) => ({
    "@type": "ImageObject",
    url: `https://bloortailoring.com${p.src}`,
    name: p.caption,
    description: p.alt,
  })),
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGalleryJsonLd) }}
      />

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
            Our Work
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(2.5rem, 6vw, 6rem)",
              color: "var(--color-ivory)",
              margin: "0 0 1.5rem",
              lineHeight: 1.05,
              letterSpacing: "0.02em",
            }}
          >
            Real alterations.
            <br />
            <span
              style={{
                fontStyle: "italic",
                color: "var(--color-gold-light)",
              }}
            >
              Real results.
            </span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "0.9375rem",
              color: "var(--color-muted)",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: "36rem",
            }}
          >
            Photos of real alterations and custom work from our shop in Bloor
            West Village. Captions updated as work comes in.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ background: "var(--color-paper)", padding: "5rem 2rem 7rem" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
          <Suspense
            fallback={
              <p
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  color: "var(--color-muted)",
                  textAlign: "center",
                  padding: "4rem 0",
                }}
              >
                Loading…
              </p>
            }
          >
            <GalleryClient />
          </Suspense>
        </div>
      </section>
    </>
  );
}
