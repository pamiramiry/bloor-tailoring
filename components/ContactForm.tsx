"use client";

import { useState, FormEvent } from "react";
import { serviceCategories } from "@/lib/services";

const FORMSPREE_ID = "YOUR_FORM_ID"; // Replace with your Formspree form ID from formspree.io

type Status = "idle" | "loading" | "success" | "error";

const inputStyle = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid var(--color-divider)",
  padding: "0.75rem 0",
  fontFamily: "var(--font-body)",
  fontWeight: 300,
  fontSize: "1rem",
  color: "var(--color-void)",
  outline: "none",
  borderRadius: 0,
  transition: "border-bottom-color 0.2s ease",
  boxSizing: "border-box" as const,
};

const labelStyle = {
  display: "block",
  fontFamily: "var(--font-label)",
  fontWeight: 300,
  fontSize: "0.55rem",
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  color: "var(--color-muted)",
  marginBottom: "0.25rem",
};

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          padding: "3rem 0",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div style={{ width: "2rem", height: "1px", background: "var(--color-gold)" }} />
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 300,
            fontSize: "1.75rem",
            color: "var(--color-void)",
            margin: 0,
          }}
        >
          Message received.
        </h3>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 300,
            fontSize: "1rem",
            color: "var(--color-muted)",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          We&rsquo;ll be in touch shortly to arrange a fitting.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="form-row">
        <div>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-gold)")}
            onBlur={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-divider)")}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-gold)")}
            onBlur={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-divider)")}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="form-row">
        <div>
          <label htmlFor="phone" style={labelStyle}>Phone (optional)</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(416) 000-0000"
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-gold)")}
            onBlur={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-divider)")}
          />
        </div>
        <div>
          <label htmlFor="service" style={labelStyle}>Service Needed</label>
          <select
            id="service"
            name="service"
            style={{
              ...inputStyle,
              cursor: "pointer",
              color: "var(--color-muted)",
            }}
            onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-gold)")}
            onBlur={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-divider)")}
          >
            <option value="">Select a category</option>
            {serviceCategories.map((cat) => (
              <option key={cat.id} value={cat.title}>
                {cat.title}
              </option>
            ))}
            <option value="Other">Other / Not sure</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your garment and what you need..."
          style={{
            ...inputStyle,
            resize: "vertical",
            minHeight: "100px",
          }}
          onFocus={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-gold)")}
          onBlur={(e) => (e.currentTarget.style.borderBottomColor = "var(--color-divider)")}
        />
      </div>

      {status === "error" && (
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            color: "#c0392b",
            margin: 0,
          }}
        >
          Something went wrong. Please try again or call us at (437) 962‑1515.
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            fontFamily: "var(--font-label)",
            fontWeight: 300,
            fontSize: "0.65rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "var(--color-ivory)",
            background: status === "loading" ? "var(--color-muted)" : "var(--color-void)",
            border: "none",
            padding: "1rem 3rem",
            cursor: status === "loading" ? "not-allowed" : "pointer",
            transition: "background 0.35s ease",
            borderRadius: 0,
          }}
          onMouseEnter={(e) => {
            if (status !== "loading") e.currentTarget.style.background = "var(--color-gold)";
          }}
          onMouseLeave={(e) => {
            if (status !== "loading") e.currentTarget.style.background = "var(--color-void)";
          }}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
