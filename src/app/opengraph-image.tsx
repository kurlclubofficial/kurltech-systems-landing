import { ImageResponse } from "next/og";

export const alt =
  "KurlTech Systems — custom internal tools for critical workflows";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background:
          "radial-gradient(ellipse at 92% 90%, #0757a8 0%, #0a161a 48%, #03060f 100%)",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: "-1px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 34,
            height: 34,
            clipPath:
              "polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%)",
            background: "#6fd0ef",
          }}
        />
        KurlTech Systems
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            maxWidth: 1000,
            fontSize: 68,
            lineHeight: 1.08,
            fontWeight: 700,
            letterSpacing: "-3px",
          }}
        >
          Custom internal tools for critical workflows.
        </div>
        <div style={{ fontSize: 27, color: "#b5b6b9" }}>
          Less manual work. Clearer operations.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: 100,
          height: 5,
          background: "#6fd0ef",
        }}
      />
    </div>,
    size,
  );
}
