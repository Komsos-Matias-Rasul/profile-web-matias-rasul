"use client";
import Image from "next/image"
import { notFound } from "next/navigation";
import { PengurusItem } from "@/app/ui/pengurus/pengurus-item";
import { useEffect, useState } from "react";

const Header = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full h-[35vh] md:h-[40vh] lg:h-[50vh] max-h-[720px] relative">
        <div className="relative w-full h-full bg-blue-950">
          <Image
            src="https://storage.googleapis.com/web-samara-storage/headers/SUSUNAN-PENGURUS_02.png"
            alt="hero"
            className="object-cover"
            priority
            fill />
        </div>
      </div>
      <div className="bg-blue-950/65 w-full h-[35vh]  md:h-[40vh] lg:h-[50vh] max-h-[720px] absolute flex justify-center">
        <div className="w-[90%] max-w-[1300px] text-white h-full flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-4 mt-20  ">
            <h1 className="font-heading text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center min-w-max "><b>Susunan</b> Pengurus</h1>
            <div className="w-8 h-1.5 bg-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

const BidangPengurus = () => {
  const [bidang, setBidang] = useState(null);

  useEffect(() => {
    const fetchBidang = async () => {
      try {
        const response = await fetch(`/api/pengurus`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBidang(data || []);
      } catch (error) {
        console.error("Error fetching bidang:", error);
        setBidang([]); 
      }
    };
    fetchBidang();
  }, []);


  if (!bidang || bidang.length === 0) {
    return <div> </div>; 
  }
  

  return (
    <div>
      <div className="grid grid-cols-2 py-2 gap-2 mx-2 sm:grid-cols-3 sm:py-3 sm:gap-3 sm:mx-3 md:grid-cols-3 md:py-6 md:gap-4 md:mx-3 lg:grid-cols-4 lg:py-8 lg:gap-6 lg:mx-4">
        {bidang.map((item) => (
          <PengurusItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};


const SusunanPengurusPage = () => {
  return (
    <>
      <Header />
      <BidangPengurus />
    </>
  )
}

export default SusunanPengurusPage