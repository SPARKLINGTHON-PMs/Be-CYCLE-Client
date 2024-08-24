import React, { useState } from "react";

export default function BookUpload() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) {
      alert("Please upload an image of the book.");
      return;
    }
    // 책 등록 처리 로직
    console.log("Book uploaded:", { title, image });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Book Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Book Image:
        <input
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          required
        />
      </label>
      <button type="submit">Upload Book</button>
    </form>
  );
}
