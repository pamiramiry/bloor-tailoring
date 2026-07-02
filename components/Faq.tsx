"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do I need an appointment?",
    a: "Walk-ins are welcome for most alterations. For wedding gown fittings and complex custom work, we recommend calling ahead to schedule a time.",
  },
  {
    q: "How long do alterations take?",
    a: "Most alterations are ready within 3–5 business days. Rush service is available — call us at (437) 962-1515 to discuss your timeline.",
  },
  {
    q: "What types of garments do you work on?",
    a: "Everything — suits, dresses, wedding gowns, coats, leather, formal and casual wear. If it's a garment, we can tailor it.",
  },
  {
    q: "How is pricing determined?",
    a: "Pricing depends on the garment and the work involved. We provide an accurate quote in-store after seeing your piece. No surprises.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, debit, and major credit cards.",
  },
  {
    q: "Can I get a rush alteration?",
    a: "Yes. Call us at (437) 962-1515 to discuss your timeline and we'll do our best to accommodate you.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background: "var(--color-paper)", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div style={{ marginBottom: "3.5rem" }}>
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
            FAQ
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
              color: "var(--color-void)",
              letterSpacing: "0.02em",
              lineHeight: 1.2,
              margin: 0,
            }}
          >
            Answers to common questions.
          </h2>
        </div>

        <div>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  borderTop: "1px solid rgba(138,133,128,0.2)",
                  ...(i === faqs.length - 1
                    ? { borderBottom: "1px solid rgba(138,133,128,0.2)" }
                    : {}),
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "2rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "1.5rem 0",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                      fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)",
                      color: "var(--color-void)",
                      letterSpacing: "0.01em",
                      lineHeight: 1.5,
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontSize: "1.5rem",
                      color: isOpen ? "var(--color-gold)" : "var(--color-muted)",
                      transition: "color 0.2s ease",
                      flexShrink: 0,
                      lineHeight: 1,
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? "200px" : "0",
                    transition: "max-height 0.35s cubic-bezier(0.25, 0.1, 0, 1)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 300,
                      fontSize: "0.9375rem",
                      color: "var(--color-muted)",
                      lineHeight: 1.7,
                      margin: "0 0 1.5rem",
                      maxWidth: "44rem",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
