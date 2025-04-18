"use client";

import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { GaleriDetail } from "@/app/ui/galeri/galeri-detail";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export default function GaleriPage({ params }) {
  const { slug } = use(params);
  const [galeri, setGaleri] = useState(null);

  useEffect(() => {
    if (slug) {
      const fetchGaleri = async () => {
        const response = await fetch(`/api/galeri`);
        const data = await response.json();
        const galeriItem = data.find((item) => slugify(item.title) === slug);

        if (!galeriItem) return notFound();

        setGaleri(galeriItem);
      };

      fetchGaleri();
    }
  }, [slug]);

  if (!galeri) return <div>Loading...</div>;

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <GaleriDetail galeri={galeri} />
      </div>
    </div>
  );
}
