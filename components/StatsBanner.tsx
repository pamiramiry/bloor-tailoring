import { Fragment } from "react";

const stats = [
  { value: "4.7★", label: "Google Rating" },
  { value: "70+", label: "Reviews" },
  { value: "22+", label: "Services" },
  { value: "Bloor West", label: "Village, Toronto" },
];

export default function StatsBanner() {
  return (
    <section style={{ background: "var(--color-void)", padding: "3.5rem 2rem" }}>
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1px 1fr 1px 1fr 1px 1fr",
          alignItems: "center",
        }}
        className="stats-grid"
      >
        {stats.map((stat, i) => (
          <Fragment key={stat.label}>
            <div
              style={{
                textAlign: "center",
                padding: "0 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                  color: "var(--color-gold-light)",
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-label)",
                  fontWeight: 300,
                  fontSize: "0.55rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                  lineHeight: 1.4,
                  textAlign: "center",
                }}
              >
                {stat.label}
              </span>
            </div>
            {i < stats.length - 1 && (
              <div
                style={{
                  width: "1px",
                  height: "3rem",
                  background: "var(--color-divider)",
                  alignSelf: "center",
                  justifySelf: "center",
                }}
                className="stats-divider"
              />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}
