"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const hasOpenedRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      if (hasOpenedRef.current) hamburgerRef.current?.focus();
      return;
    }
    hasOpenedRef.current = true;
    const menu = menuRef.current;
    if (!menu) return;
    const focusable = Array.from(
      menu.querySelectorAll<HTMLElement>("a, button")
    );
    focusable[0]?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background 0.4s ease, backdrop-filter 0.4s ease",
          background: scrolled ? "rgba(8,8,8,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(8px)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            padding: "1.5rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginRight: "3rem" }}>
            <Logo variant="light" />
          </div>

          {/* Desktop nav */}
          <nav
            style={{ alignItems: "center", gap: "2.5rem" }}
            className="nav-desktop"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{
                  fontFamily: "var(--font-label)",
                  fontWeight: 300,
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  color: pathname === link.href ? "var(--color-gold)" : "var(--color-ivory)",
                  textDecoration: "none",
                  textTransform: "uppercase",
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+14379621515"
              style={{
                fontFamily: "var(--font-label)",
                fontWeight: 300,
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                color: "var(--color-gold)",
                textDecoration: "none",
              }}
            >
              (437) 962‑1515
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="nav-hamburger"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                background: "var(--color-ivory)",
                transition: "transform 0.3s cubic-bezier(0.25,0.1,0,1)",
                transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                background: "var(--color-ivory)",
                transition: "opacity 0.3s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                background: "var(--color-ivory)",
                transition: "transform 0.3s cubic-bezier(0.25,0.1,0,1)",
                transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        ref={menuRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 60,
          background: "var(--color-void)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          overflowY: "auto",
          transition: "opacity 0.35s ease, visibility 0.35s ease",
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        aria-hidden={!menuOpen}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position: "absolute",
            top: "1.75rem",
            right: "2rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--color-ivory)",
            fontFamily: "var(--font-label)",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Close
        </button>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 6vw, 3rem)",
              color: pathname === link.href ? "var(--color-gold)" : "var(--color-ivory)",
              textDecoration: "none",
              letterSpacing: "0.05em",
              transition: "color 0.2s ease",
            }}
          >
            {link.label}
          </Link>
        ))}

        <a
          href="tel:+14379621515"
          style={{
            fontFamily: "var(--font-label)",
            fontWeight: 300,
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            color: "var(--color-gold)",
            textDecoration: "none",
            marginTop: "1rem",
          }}
        >
          (437) 962‑1515
        </a>
      </div>
    </>
  );
}
