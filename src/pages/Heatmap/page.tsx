// src/pages/Heatmap/page.tsx  (or app/heatmap/page.tsx in App Router)
import React from "react";

export default function HeatmapPage() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <h1 style={{ padding: "1rem", margin: 0 }}>Heatmap - Please give at least 1-2 minutes to load if needed</h1>
      <div style={{ flex: 1 }}>
        <iframe
          src={`${process.env.PUBLIC_URL}/drought_map.html`}
          title="Drought Heatmap"
          style={{ width: "100%", height: "100%", border: "0" }}
        />

      </div>
    </div>
  );
}
