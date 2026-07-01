export default function CallNowBar() {
  return (
    <a
      href="tel:+14379621515"
      className="call-now-bar"
      aria-label="Call Bloor Tailoring"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        height: "56px",
        background: "var(--color-void)",
        borderTop: "1px solid rgba(184,154,94,0.25)",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        textDecoration: "none",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-label)",
          fontWeight: 300,
          fontSize: "0.55rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--color-muted)",
        }}
      >
        Call Now
      </span>
      <span style={{ color: "rgba(184,154,94,0.4)", fontSize: "0.6rem" }}>·</span>
      <span
        style={{
          fontFamily: "var(--font-label)",
          fontWeight: 300,
          fontSize: "0.65rem",
          letterSpacing: "0.12em",
          color: "var(--color-gold)",
        }}
      >
        (437) 962-1515
      </span>
    </a>
  );
}
