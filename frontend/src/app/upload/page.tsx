"use client"; // Required for client-side interactivity

import { useState } from "react";
import axios from "axios";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("https://turnaroundconsultinginterviews.onrender.com/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(response.data.message);
    } catch {
      setMessage("Error uploading file");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Upload a ZIP File</h1>
      <input type="file" onChange={handleFileChange} className="border p-2" />
      <button onClick={handleUpload} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Upload</button>
      <p className="mt-4 text-gray-700">{message}</p>
    </div>
  );
}
