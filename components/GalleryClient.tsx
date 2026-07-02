"use client";

import { useState, useRef, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  galleryPhotos,
  CATEGORIES,
  type Category,
} from "@/lib/gallery";
import Lightbox from "./Lightbox";

export default function GalleryClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentCategory = (searchParams.get("category") ?? "all") as
    | Category
    | "all";

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const filtered =
    currentCategory === "all"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === currentCategory);

  const handleFilterChange = (cat: Category | "all") => {
    setOpenIndex(null);
    router.replace(cat === "all" ? "/gallery" : `/gallery?category=${cat}`);
  };

  const handleOpen = (i: number) => setOpenIndex(i);

  const handleClose = useCallback(() => {
    const idx = openIndex;
    setOpenIndex(null);
    if (idx !== null) {
      setTimeout(() => tileRefs.current[idx]?.focus(), 0);
    }
  }, [openIndex]);

  return (
    <>
      {/* Filter pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginBottom: "3rem",
        }}
        role="group"
        aria-label="Filter by category"
      >
        {CATEGORIES.map(([cat, label]) => {
          const isActive = currentCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`gallery-filter-pill${isActive ? " gallery-filter-pill-active" : ""}`}
              aria-pressed={isActive}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Grid or empty state */}
      {filtered.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "6rem 2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
              color: "var(--color-muted)",
              margin: 0,
            }}
          >
            More photos coming soon.
          </p>
          <button
            onClick={() => handleFilterChange("all")}
            style={{
              fontFamily: "var(--font-label)",
              fontWeight: 300,
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            View all photos →
          </button>
        </div>
      ) : (
        <div className="gallery-grid">
          {filtered.map((photo, i) => (
            <button
              key={photo.src}
              ref={(el) => {
                tileRefs.current[i] = el;
              }}
              onClick={() => handleOpen(i)}
              className={
                photo.featured
                  ? "gallery-tile-featured gallery-tile-btn"
                  : "gallery-tile gallery-tile-btn"
              }
              aria-label={`View photo: ${photo.caption}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: "cover", objectPosition: photo.objectPosition ?? "center" }}
                sizes={
                  photo.featured
                    ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 66vw"
                    : "(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                }
                priority={i < 6}
              />
              {/* Caption overlay — visible on hover (desktop) */}
              <div className="gallery-tile-caption">
                <p
                  style={{
                    fontFamily: "var(--font-label)",
                    fontWeight: 300,
                    fontSize: "0.5rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-ivory)",
                    margin: 0,
                  }}
                >
                  {photo.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {openIndex !== null && (
        <Lightbox
          photos={filtered}
          currentIndex={openIndex}
          onClose={handleClose}
          onNavigate={setOpenIndex}
        />
      )}
    </>
  );
}
