"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import type { GalleryPhoto } from "@/lib/gallery";

interface LightboxProps {
  photos: GalleryPhoto[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const photo = photos[currentIndex];
  const total = photos.length;

  const goPrev = useCallback(() => {
    onNavigate((currentIndex - 1 + total) % total);
  }, [currentIndex, total, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((currentIndex + 1) % total);
  }, [currentIndex, total, onNavigate]);

  useEffect(() => {
    overlayRef.current?.focus();
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key === "ArrowLeft") { goPrev(); return; }
      if (e.key === "ArrowRight") { goNext(); return; }
      if (e.key === "Tab") {
        const focusable = Array.from(
          overlay.querySelectorAll<HTMLElement>("button:not([disabled])")
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [goPrev, goNext, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (delta > 50) goNext();
    if (delta < -50) goPrev();
  };

  const navBtnStyle: React.CSSProperties = {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "var(--color-muted)",
    fontFamily: "var(--font-display)",
    fontStyle: "italic",
    fontSize: "2rem",
    padding: "1rem",
    flexShrink: 0,
    lineHeight: 1,
    transition: "color 0.2s ease",
  };

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${currentIndex + 1} of ${total}: ${photo.caption}`}
      tabIndex={-1}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(0,0,0,0.96)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 2rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-label)",
            fontWeight: 300,
            fontSize: "0.55rem",
            letterSpacing: "0.25em",
            color: "var(--color-muted)",
            margin: 0,
          }}
        >
          {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-label)",
            fontWeight: 300,
            fontSize: "0.55rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            padding: "0.5rem",
            transition: "color 0.2s ease",
          }}
        >
          Close ✕
        </button>
      </div>

      {/* Image + nav arrows */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          padding: "0 1rem",
          gap: "0.5rem",
        }}
      >
        <button onClick={goPrev} aria-label="Previous photo" style={navBtnStyle}>
          ←
        </button>

        <div
          style={{
            flex: 1,
            position: "relative",
            height: "clamp(280px, 70vh, 680px)",
          }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 90vw, 70vw"
            priority
          />
        </div>

        <button onClick={goNext} aria-label="Next photo" style={navBtnStyle}>
          →
        </button>
      </div>

      {/* Caption */}
      <div style={{ marginTop: "1.5rem", textAlign: "center", padding: "0 2rem" }}>
        <p
          style={{
            fontFamily: "var(--font-label)",
            fontWeight: 300,
            fontSize: "0.55rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
            margin: 0,
          }}
        >
          {photo.caption}
        </p>
      </div>
    </div>
  );
}
