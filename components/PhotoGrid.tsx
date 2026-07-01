"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    src: "/images/wedding-dress.webp",
    alt: "Bridal alterations — Bloor Tailoring, Toronto",
    caption: "Wedding Alterations",
    objectPosition: "center top",
  },
  {
    src: "/images/red-jacket.webp",
    alt: "Custom embroidered velvet coat — bespoke tailoring at Bloor Tailoring",
    caption: "Custom Formalwear",
    objectPosition: "center 20%",
  },
  {
    src: "/images/black-dress.webp",
    alt: "Formal gown fitting — dress alterations at Bloor Tailoring, Bloor West Village",
    caption: "Evening Dress Fittings",
    objectPosition: "center top",
  },
  {
    src: "/images/yellow-dress.webp",
    alt: "Garment alteration fitting — Bloor Tailoring, Toronto",
    caption: "Garment Alterations",
    objectPosition: "center top",
  },
];


export default function PhotoGrid() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);

  const goNext = useCallback(() => {
    setCurrent((i) => (i + 1) % photos.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrent((i) => (i - 1 + photos.length) % photos.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(goNext, 5000);
    return () => clearInterval(id);
  }, [paused, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > 50) goNext();
    if (delta < -50) goPrev();
  };

  const trackX = `calc(29% - ${current} * (42% + 1.5rem))`;

  return (
    <section
      style={{ background: "var(--color-void)", padding: "6rem 0 7rem" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Section heading */}
      <div style={{ textAlign: "center", marginBottom: "4rem", padding: "0 2rem" }}>
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
            lineHeight: 1.7,
            margin: "0 auto",
            maxWidth: "38rem",
          }}
        >
          Alterations, custom garments, formalwear, and special occasion tailoring in Bloor West Village.
        </p>
      </div>

      {/* Carousel viewport */}
      <div
        style={{ overflow: "hidden", position: "relative" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          animate={{ x: trackX }}
          transition={{ type: "spring", stiffness: 260, damping: 32 }}
          style={{ display: "flex", gap: "1.5rem" }}
        >
          {photos.map((photo, i) => {
            const isActive = i === current;
            return (
              <div
                key={photo.src}
                className={isActive ? "gallery-photo-active" : undefined}
                style={{
                  flex: "0 0 42%",
                  height: "clamp(320px, 65vh, 620px)",
                  overflow: "hidden",
                  position: "relative",
                  background: "var(--color-void)",
                  opacity: isActive ? 1 : 0.35,
                  transition: "opacity 0.4s ease",
                  boxShadow: isActive
                    ? "inset 0 0 0 1px rgba(184,154,94,0.35)"
                    : "none",
                }}
              >
                {/* Photo */}
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  style={{
                    objectFit: "contain",
                    objectPosition: "center center",
                  }}
                  sizes="50vw"
                  priority={i === 0}
                />

                {/* Bottom gradient — darkens photo + ensures caption contrast */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 45%, transparent 100%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Caption — visible on active slide only */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 2,
                    padding: "1.5rem",
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    pointerEvents: "none",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-label)",
                      fontWeight: 300,
                      fontSize: "0.55rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--color-gold)",
                      margin: "0 0 0.4rem",
                    }}
                  >
                    {photo.caption}
                  </p>
                  <div
                    style={{
                      width: "1.5rem",
                      height: "1px",
                      background: "var(--color-gold)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Controls */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
          marginTop: "2.5rem",
        }}
      >
        <button
          onClick={goPrev}
          aria-label="Previous photo"
          className="gallery-arrow"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "1.75rem",
            color: "var(--color-muted)",
            padding: "0.25rem 0.5rem",
            lineHeight: 1,
            transition: "color 0.2s ease",
          }}
        >
          ←
        </button>

        <div
          style={{
            width: "8rem",
            height: "1px",
            background: "rgba(138,133,128,0.2)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: `${((current + 1) / photos.length) * 100}%`,
              background: "var(--color-gold)",
              transition: "width 0.4s cubic-bezier(0.25, 0.1, 0, 1)",
            }}
          />
        </div>

        <button
          onClick={goNext}
          aria-label="Next photo"
          className="gallery-arrow"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontSize: "1.75rem",
            color: "var(--color-muted)",
            padding: "0.25rem 0.5rem",
            lineHeight: 1,
            transition: "color 0.2s ease",
          }}
        >
          →
        </button>
      </div>
    </section>
  );
}
