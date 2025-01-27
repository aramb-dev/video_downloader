"use client";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [quality, setQuality] = useState("highest");
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    if (!url) {
      alert("Veuillez entrer une URL YouTube valide");
      return;
    }
    setLoading(true);
    window.location.href = `/api/route?url=${encodeURIComponent(
      url
    )}&quality=${quality}`;
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Téléchargeur de vidéos YouTube</h1>
      <input
        type="text"
        placeholder="Collez le lien YouTube ici"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "300px", padding: "10px", marginRight: "10px" }}
      />
      <select
        value={quality}
        onChange={(e) => setQuality(e.target.value)}
        style={{ padding: "10px" }}
      >
        <option value="highest">Meilleure qualité</option>
        <option value="lowest">Qualité la plus basse</option>
        <option value="144p">144p</option>
        <option value="240p">240p</option>
        <option value="360p">360p</option>
        <option value="480p">480p</option>
        <option value="720p">720p</option>
        <option value="1080p">1080p</option>
      </select>
      <button
        onClick={handleDownload}
        disabled={loading}
        style={{
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        {loading ? "Téléchargement..." : "Télécharger"}
      </button>
    </div>
  );
}
