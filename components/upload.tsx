"use client";
import { useState } from "react";
// button to upload csv file
const API_URL = "https://hgyeghvwyaljrllwstwz.supabase.co";
export default function UploadButton() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    if (e.target.files) formData.append("file", e.target.files[0]);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      alert("Upload successful");
    } catch (error) {
      setError("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fileUploadWrapper">
      <input
        type="file"
        onChange={handleUpload}
        disabled={loading}
        accept=".csv"
         id="fileInput"
      />
      {error && <p>{error}</p>}
    </div>
  );
}
