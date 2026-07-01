import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#080808",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Top label */}
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: 13,
            letterSpacing: "0.4em",
            color: "#b89a5e",
            textTransform: "uppercase",
            margin: "0 0 28px",
          }}
        >
          TORONTO · BLOOR WEST VILLAGE
        </p>

        {/* Gold rule */}
        <div
          style={{
            width: 100,
            height: 1,
            background: "#b89a5e",
            marginBottom: 32,
          }}
        />

        {/* BLOOR wordmark */}
        <p
          style={{
            fontFamily: "serif",
            fontSize: 110,
            letterSpacing: "0.45em",
            color: "#f2ece3",
            margin: "0 0 4px",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          BLOOR
        </p>

        {/* TAILORING label */}
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: 16,
            letterSpacing: "0.65em",
            color: "#b89a5e",
            margin: "0 0 32px",
            textTransform: "uppercase",
          }}
        >
          TAILORING
        </p>

        {/* Gold rule */}
        <div
          style={{
            width: 100,
            height: 1,
            background: "#b89a5e",
            marginBottom: 32,
          }}
        />

        {/* Tagline */}
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: 15,
            letterSpacing: "0.08em",
            color: "rgba(242,236,227,0.45)",
            margin: 0,
          }}
        >
          Premium alterations &amp; custom tailoring
        </p>
      </div>
    ),
    size
  );
}
