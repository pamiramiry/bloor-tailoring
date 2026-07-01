import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
}

export default function Logo({ variant = "light" }: LogoProps) {
  const color = variant === "light" ? "var(--color-ivory)" : "var(--color-void)";

  return (
    <Link href="/" aria-label="Bloor Tailoring — Home" style={{ textDecoration: "none", display: "inline-block" }}>
      <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start", gap: "0.2rem" }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "1.4rem",
            letterSpacing: "0.45em",
            lineHeight: 1,
            color,
            textTransform: "uppercase",
          }}
        >
          BLOOR
        </span>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "var(--color-gold)",
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-label)",
            fontWeight: 300,
            fontSize: "0.5rem",
            letterSpacing: "0.38em",
            lineHeight: 1,
            color,
            textTransform: "uppercase",
          }}
        >
          TAILORING
        </span>
      </div>
    </Link>
  );
}
