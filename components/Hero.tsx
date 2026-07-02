"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        minHeight: "100svh",
        background: "var(--color-void)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
      >
        <source src="/images/Hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay — keeps text legible over the video */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.82)",
          zIndex: 1,
        }}
      />

      {/* Radial vignette — extra darkening at the edges, clean center */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.55) 100%)",
          zIndex: 2,
        }}
      />

      {/* Subtle gold ambient glow — preserved from original design */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse at 15% 85%, rgba(184,154,94,0.04) 0%, transparent 55%),
            radial-gradient(ellipse at 85% 15%, rgba(184,154,94,0.02) 0%, transparent 55%)
          `,
          zIndex: 3,
          pointerEvents: "none",
        }}
      />

      {/* All hero content sits above every background layer */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Wordmark */}
        <div style={{ marginBottom: "2.5rem" }}>
          <h1
            className="hero-wordmark"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(3rem, 8vw, 7rem)",
              letterSpacing: "0.35em",
              color: "var(--color-ivory)",
              lineHeight: 1,
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            BLOOR
          </h1>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "var(--color-gold)",
              margin: "0.6rem 0",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-label)",
              fontWeight: 300,
              fontSize: "clamp(0.55rem, 1.2vw, 0.75rem)",
              letterSpacing: "0.45em",
              color: "var(--color-ivory)",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            TAILORING
          </p>
        </div>

        {/* Tagline + content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0, 1] }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}
        >
          <p
            aria-label="Precision · Fit · Craft"
            role="text"
            style={{
              fontFamily: "var(--font-label)",
              fontWeight: 300,
              fontSize: "clamp(0.55rem, 1vw, 0.65rem)",
              letterSpacing: "0.3em",
              color: "rgba(242,236,227,0.6)",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            P R E C I S I O N &nbsp; · &nbsp; F I T &nbsp; · &nbsp; C R A F T
          </p>

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 300,
              fontSize: "clamp(0.75rem, 1.2vw, 0.875rem)",
              color: "rgba(242,236,227,0.5)",
              letterSpacing: "0.04em",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: "34rem",
            }}
          >
            Premium alterations, custom tailoring, and garment repairs in Bloor West Village.
          </p>

          <Link href="/contact" className="btn-outline-light">
            Request a Fitting
          </Link>

          {/* Social proof */}
          <p
            style={{
              fontFamily: "var(--font-label)",
              fontWeight: 300,
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              color: "rgba(242,236,227,0.45)",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            <span style={{ color: "var(--color-gold)" }}>★★★★★</span>
            &nbsp;&nbsp;4.7 on Google &nbsp;·&nbsp; Bloor West Village, Toronto
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: "1px",
            height: "48px",
            background: `linear-gradient(to bottom, transparent, var(--color-gold))`,
          }}
        />
      </div>
    </section>
  );
}
