"use client";

import { use, useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { PengurusDetail } from "@/app/ui/pengurus/pengurus-detail";

const slugify = (text) => 
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') 
    .replace(/^-+|-+$/g, '');

export default function SusunanPengurusPage({ params }) {
  const { slug } = use(params); 
  const [pengurus, setPengurus] = useState(null);

  useEffect(() => {
    if (slug) {
      const fetchPengurus = async () => {
        const response = await fetch(`/api/pengurus`);
        const data = await response.json();
        const selectedPengurus = data.find((p) => slugify(p.namaBidang) === slug); 
  
        if (!selectedPengurus) return notFound();
  
        setPengurus(selectedPengurus);
      };
  
      fetchPengurus();
    }
  }, [slug]);
  

  if (!pengurus) return <div>Loading...</div>;

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <PengurusDetail pengurus={pengurus} />
      </div>
    </div>
  );
}
