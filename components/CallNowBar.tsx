export default function CallNowBar() {
  const linkStyle: React.CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.2rem",
    textDecoration: "none",
    height: "100%",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-label)",
    fontWeight: 300,
    fontSize: "0.45rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "var(--color-muted)",
  };

  const valueStyle: React.CSSProperties = {
    fontFamily: "var(--font-label)",
    fontWeight: 300,
    fontSize: "0.6rem",
    letterSpacing: "0.1em",
    color: "var(--color-ivory)",
  };

  const divider: React.CSSProperties = {
    width: "1px",
    alignSelf: "stretch",
    background: "rgba(184,154,94,0.2)",
    margin: "12px 0",
  };

  return (
    <div
      className="call-now-bar"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        height: "56px",
        background: "var(--color-void)",
        borderTop: "1px solid rgba(184,154,94,0.25)",
      }}
    >
      <a href="tel:+14379621515" style={linkStyle} aria-label="Call Bloor Tailoring">
        <span style={labelStyle}>Call</span>
        <span style={{ ...valueStyle, color: "var(--color-gold)" }}>(437) 962-1515</span>
      </a>

      <div style={divider} />

      <a
        href="https://www.google.com/maps/dir/?api=1&destination=2323+Bloor+St+W+Unit+8+Toronto+ON+M6S+4W1"
        target="_blank"
        rel="noopener noreferrer"
        style={linkStyle}
        aria-label="Get directions to Bloor Tailoring"
      >
        <span style={labelStyle}>Directions</span>
        <span style={valueStyle}>2323 Bloor St W</span>
      </a>

      <div style={divider} />

      <a href="sms:+14379621515" style={linkStyle} aria-label="Text Bloor Tailoring">
        <span style={labelStyle}>Text Us</span>
        <span style={valueStyle}>(437) 962-1515</span>
      </a>
    </div>
  );
}
