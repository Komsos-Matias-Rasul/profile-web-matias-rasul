"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const FotoTerbaruSection = () => {
  const [galeri, setGaleri] = useState([]);

  useEffect(() => {
    const fetchGaleri = async () => {
      const response = await fetch("/api/galeri");
      const data = await response.json();
      setGaleri(data);
    };
    fetchGaleri();
  }, []);

  if (!galeri.length) return <div className="text-center text-gray-500 py-8">Tidak ada galeri.</div>;

  return (
    <div className="w-full flex justify-center ">
      <div className="w-[95%] max-w-[1300px]">
        <div className="flex flex-col items-center mb-16">
          <h1 className="font-heading text-[2rem] text-center min-w-max text-blue-primary"><b>Kegiatan</b> Paroki</h1>
          <div className="w-8 h-1.5 bg-blue-primary" />
          <div className="py-12 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {galeri.map((item) => (
              <GaleriCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function GaleriCard({ item }) {
  const { title, description, date, images } = item;
  const firstImage = images[0]?.imageUrl || "/assets/default-image.png";

  return (
      <Link href={`/galeri/${item.id}`} className="flex w-full ">
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer hover:bg-black/5" >
              <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
                  <Image
                      src={firstImage}
                      alt={title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                  />
              </div>
              <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2 text-blue-950">{title}</h2>
                  <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
                  <p className="text-sm text-gray-500 mt-4">{date}</p>
              </div>
          </div>
      </Link>
  );
}


export default FotoTerbaruSection