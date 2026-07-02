"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryPhotos, type GalleryPhoto } from "@/lib/gallery";
import Lightbox from "./Lightbox";

export default function HomepageGallery() {
  const featured = galleryPhotos.find((p) => p.featured);
  const rest = galleryPhotos.filter((p) => !p.featured).slice(0, 4);
  const displayPhotos = [featured, ...rest].filter(Boolean) as GalleryPhoto[];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleClose = useCallback(() => {
    const idx = openIndex;
    setOpenIndex(null);
    if (idx !== null) setTimeout(() => tileRefs.current[idx]?.focus(), 0);
  }, [openIndex]);

  return (
    <section style={{ background: "var(--color-void)", padding: "6rem 0 0" }}>
      {/* Section heading */}
      <div
        style={{ textAlign: "center", marginBottom: "3rem", padding: "0 2rem" }}
      >
        <p
          style={{
            fontFamily: "var(--font-label)",
            fontWeight: 300,
            fontSize: "0.55rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
            margin: "0 0 1.25rem",
          }}
        >
          Our Work
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
            color: "var(--color-ivory)",
            letterSpacing: "0.02em",
            lineHeight: 1.2,
            margin: "0 0 1rem",
          }}
        >
          Tailored for life&rsquo;s finest moments.
        </h2>
        <div
          style={{
            width: "2.5rem",
            height: "1px",
            background: "var(--color-gold)",
            margin: "0 auto 1.25rem",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "0.875rem",
            color: "var(--color-muted)",
            letterSpacing: "0.03em",
            margin: 0,
          }}
        >
          Alterations, custom garments, and formalwear.{" "}
          <Link
            href="/gallery"
            style={{
              color: "var(--color-gold)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(184,154,94,0.35)",
              paddingBottom: "1px",
            }}
          >
            See all photos →
          </Link>
        </p>
      </div>

      {/* Grid — full bleed */}
      <div className="gallery-grid gallery-grid-bleed">
        {/* Featured tile */}
        {featured && (
          <button
            ref={(el) => { tileRefs.current[0] = el; }}
            onClick={() => setOpenIndex(0)}
            className="gallery-tile-featured gallery-tile-btn"
            aria-label={`View photo: ${featured.caption}`}
          >
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              style={{ objectFit: "cover", objectPosition: featured.objectPosition ?? "center" }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
              priority
            />
          </button>
        )}

        {/* Regular tiles */}
        {rest.map((photo, i) => (
          <button
            key={photo.src}
            ref={(el) => { tileRefs.current[i + 1] = el; }}
            onClick={() => setOpenIndex(i + 1)}
            className="gallery-tile gallery-tile-btn"
            aria-label={`View photo: ${photo.caption}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              style={{ objectFit: "cover", objectPosition: photo.objectPosition ?? "center" }}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
            />
          </button>
        ))}

        {/* CTA tile — not a lightbox trigger */}
        <div
          className="gallery-tile"
          style={{
            background: "var(--color-surface)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.25rem",
            padding: "1.5rem",
          }}
        >
          <Link href="/gallery" className="btn-outline-light">
            View all photos
          </Link>
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          photos={displayPhotos}
          currentIndex={openIndex}
          onClose={handleClose}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  );
}
