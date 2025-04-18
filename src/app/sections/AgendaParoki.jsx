"use client";

import { notFound } from "next/navigation";
import { BeritaItem } from "@/app/ui/berita/berita-item";
import { useEffect, useState } from "react";

const AgendaParokiSection = () => {
  const [berita, setberita] = useState(null);

  useEffect(() => {
    const fetchberita = async () => {
      const response = await fetch(`/api/berita`);
      const berita = await response.json();

      if (!berita) return notFound();

      setberita(berita || null);
    };
    fetchberita();
  }, []);

  if (!berita) return <div className="text-center text-gray-500 py-8">Tidak ada berita.</div>;
  return (
    <div className="w-full flex justify-center  bg-white-secondary">
      <div className="w-[95%] max-w-[1300px]">
        <div className="flex flex-col items-center mb-16">
          <h1 className="font-heading text-[2rem] text-center min-w-max text-blue-primary"><b>Artikel</b> Terbaru</h1>
          <div className="w-8 h-1.5 bg-blue-primary" />
          <div className="grid grid-cols-2 py-2 gap-2 mx-2 sm:grid-cols-3 sm:py-3 sm:gap-3 sm:mx-3 md:grid-cols-3 md:py-6 md:gap-4 md:mx-3 lg:grid-cols-4 lg:py-8 lg:gap-6 lg:mx-4">
          {berita.map((item) => (
            <BeritaItem key={item.id} item={item} />
          ))}
        </div>
          
        </div>
      </div>
    </div>
  )
}

export default AgendaParokiSection