"use client";

import { notFound } from "next/navigation";
import { BeritaItem } from "@/app/ui/berita/berita-item";
import { useEffect, useState } from "react";
import Image from "next/image"

export default function BeritaPage() {
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

  if (!berita) return <div>Tidak ada berita</div>;

  return (
    <>
      <div>
        <div className="w-full flex justify-center">
          <div className="w-full h-[35vh] md:h-[40vh] lg:h-[50vh] max-h-[720px] relative">
            <div className="relative w-full h-full bg-blue-950">
              <Image
                src="https://storage.googleapis.com/web-samara-storage/headers/hero-berita.jpeg"
                alt="hero"
                className="object-cover"
                priority
                fill />
            </div>
          </div>
          <div className="bg-blue-950/50 w-full h-[35vh]  md:h-[40vh] lg:h-[50vh] max-h-[720px] absolute flex justify-center">
            <div className="w-[90%] max-w-[1300px] text-white h-full flex flex-col items-center justify-center">
              <div className="flex flex-col items-center gap-4 mt-20  ">
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl text-center min-w-max "><b>Berita</b> Paroki</h1>
                <div className="w-8 h-1.5 bg-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 py-2 gap-2 mx-2 sm:grid-cols-3 sm:py-3 sm:gap-3 sm:mx-3 md:grid-cols-3 md:py-6 md:gap-4 md:mx-3 lg:grid-cols-4 lg:py-8 lg:gap-6 lg:mx-4">
          {berita.map((item) => (
            <BeritaItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
