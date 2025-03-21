"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Images() {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch("/api/images");
        const data = await res.json();
        setImages(data.blobs);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  if (loading) return <p>Loading images...</p>;

  return (
    <section className="flex flex-wrap gap-4">
      {images.length === 0 ? (
        <p>No images uploaded yet.</p>
      ) : (
        images.map((image) => (
          <Image
            key={image.pathname}
            src={image.url}
            alt="Uploaded Image"
            width={200}
            height={200}
            className="rounded-lg shadow-md"
          />
        ))
      )}
    </section>
  );
}
