"use client";

import { useState } from "react";
import axios from "axios";

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]); // Now TypeScript knows `file` can be a File
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://turnaroundconsultinginterviews.onrender.com/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error uploading file");
    }
  };

  return (
    <div>
      <h1>Upload a ZIP File</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>
    </div>
  );
}
