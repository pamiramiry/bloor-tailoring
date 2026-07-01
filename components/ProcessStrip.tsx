import { Fragment } from "react";

const steps = [
  { num: "01", label: "Consultation", desc: "We listen. Every garment starts with understanding you." },
  { num: "02", label: "Fitting", desc: "Precise measurements. Every detail accounted for." },
  { num: "03", label: "Perfection", desc: "Finished to exacting standards. Ready when it's right." },
];

export default function ProcessStrip() {
  return (
    <section style={{ background: "var(--color-surface)", padding: "5rem 2rem" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "var(--font-label)",
            fontWeight: 300,
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--color-muted)",
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          Our Process
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
            gap: "0",
            alignItems: "start",
          }}
          className="process-grid"
        >
          {steps.map((step, i) => (
            <Fragment key={step.num}>
              <div
                style={{
                  padding: "0 3rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
                className="process-step"
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 300,
                    fontSize: "2.5rem",
                    color: "var(--color-gold)",
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-label)",
                    fontWeight: 300,
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-ivory)",
                  }}
                >
                  {step.label}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 300,
                    fontSize: "0.875rem",
                    color: "var(--color-muted)",
                    lineHeight: 1.7,
                    margin: 0,
                    maxWidth: "18ch",
                  }}
                >
                  {step.desc}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div
                  key={`divider-${i}`}
                  style={{ width: "1px", background: "var(--color-divider)", alignSelf: "stretch" }}
                  className="process-divider"
                />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
