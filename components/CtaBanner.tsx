import Link from "next/link";

export default function CtaBanner() {
  return (
    <section
      style={{
        background: "var(--color-void)",
        padding: "8rem 2rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "680px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "3rem" }}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontStyle: "italic",
            fontSize: "clamp(2rem, 4vw, 4rem)",
            color: "var(--color-ivory)",
            margin: 0,
            lineHeight: 1.2,
            letterSpacing: "0.01em",
          }}
        >
          The right fit changes everything.
        </h2>
        <Link href="/contact" className="btn-outline-light">
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
