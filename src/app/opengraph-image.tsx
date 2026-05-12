import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SnapFix — Snap the problem. Fix the problem.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #A04A14 0%, #7A3208 50%, #4A1D04 100%)",
          color: "#FFF8F0",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            fontWeight: 700,
            opacity: 0.9,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#E85D04",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
            }}
          >
            📸
          </div>
          SnapFix
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Snap the problem.</span>
          <span style={{ color: "#FFB37A" }}>Fix the problem.</span>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            color: "rgba(255,248,240,0.8)",
            maxWidth: 900,
            lineHeight: 1.3,
          }}
        >
          AI identifies your home issue from a photo and matches you with
          qualified local pros in seconds.
        </div>
      </div>
    ),
    { ...size },
  );
}
