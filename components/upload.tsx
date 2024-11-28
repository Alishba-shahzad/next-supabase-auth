"use client";
import { useState } from "react";
import Papa from "papaparse";

// button to upload csv file
const API_URL = "https://hgyeghvwyaljrllwstwz.supabase.co";
export default function UploadButton({ setTable, setHeaders }: {
  setTable: any
  setHeaders: any
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoading(true);
    // setError("");
  }
  // const formData = new FormData();
  // if (e.target.files) formData.append("file", e.target.files[0]);

  // try {
  //   const response = await fetch("/api/upload", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   if (!response.ok) {
  //     throw new Error("Upload failed");
  //   }

  //   alert("Upload successful");
  // } catch (error) {
  //   setError("Upload failed");
  // } finally {
  //   setLoading(false);
  // }
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        header: true, // This converts the CSV rows to JSON objects using the headers
        skipEmptyLines: true,
        complete: (results: any) => {
          console.log(results)

          setTable(results.data); // `results.data` contains the JSON array
          setHeaders(results.meta.fields)
        },
        error: (error: any) => {
          console.error("Error parsing CSV:", error);
        },
      });
    }
  };


  return (
    <div className="fileUploadWrapper">
      <input
        type="file"
        onChange={handleFileUpload}
        disabled={loading}
        accept=".csv"
        id="fileInput"
      />
      {error && <p>{error}</p>}
    </div>
  );
}

//csv
// Name,transaction
// Alishba, 12
// Misha,34

//json
// [{
//   name:"Alishba",
//   transaction: 12
// },{
//   name:"Misha",
//   transaction: 34
// }]

// input csv
// parse csv to json
//show json as table