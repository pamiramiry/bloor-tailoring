const reviews = [
  {
    quote:
      "I had a wedding dress that did not fit me and I even tore it a little trying it on. You would never know adjustments had been made! I was so comfortable on the day.",
    author: "R.P.",
    location: "Toronto",
  },
  {
    quote:
      "Svetlana and Armin did an amazing job on hemming, bustling, and tightening my wedding dress. Don't judge this little tailor shop by its size. These are professionals who deliver amazing outcomes at very fair prices.",
    author: "Molly H.",
    location: "Bloor West Village",
  },
  {
    quote:
      "Armin was super wonderful and patient. What Armin added to my coat was spectacular. I am so happy I found his shop. Anyone would be delighted in his workmanship.",
    author: "Marilyn T.",
    location: "Toronto",
  },
];

export default function Reviews() {
  return (
    <section style={{ background: "var(--color-paper)", padding: "7rem 2rem" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto" }}>
        {/* Section label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-label)",
              fontWeight: 300,
              fontSize: "0.6rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            What Clients Say
          </p>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "rgba(138,133,128,0.2)",
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-label)",
              fontWeight: 300,
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-muted)",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            ★★★★★ 4.7 on Google
          </p>
        </div>

        {/* Review grid */}
        <div className="reviews-grid">
          {reviews.map((review) => (
            <blockquote
              key={review.author}
              style={{
                margin: 0,
                padding: "0 0 0 1.5rem",
                borderLeft: "1px solid var(--color-gold)",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  fontSize: "clamp(1.1rem, 1.5vw, 1.4rem)",
                  lineHeight: 1.6,
                  color: "var(--color-void)",
                  margin: 0,
                }}
              >
                &ldquo;{review.quote}&rdquo;
              </p>
              <footer
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.15rem",
                }}
              >
                <cite
                  style={{
                    fontFamily: "var(--font-label)",
                    fontWeight: 400,
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-void)",
                    fontStyle: "normal",
                  }}
                >
                  {review.author}
                </cite>
                <span
                  style={{
                    fontFamily: "var(--font-label)",
                    fontWeight: 300,
                    fontSize: "0.55rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--color-muted)",
                  }}
                >
                  {review.location}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Google Reviews link */}
        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <a
            href="https://www.google.com/maps/search/Bloor+Tailoring+2323+Bloor+St+W+Toronto"
            target="_blank"
            rel="noopener noreferrer"
            className="google-reviews-link"
            style={{
              fontFamily: "var(--font-label)",
              fontWeight: 300,
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-gold)",
              textDecoration: "none",
            }}
          >
            <span aria-hidden="true">★★★★★</span>
            &nbsp;&nbsp;Read all 70+ reviews on Google &nbsp;→
          </a>
        </div>
      </div>
    </section>
  );
}
