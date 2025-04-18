"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContentSection from "./ContentSection";

import { HiHome } from "react-icons/hi";
import { FaCompass } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import AdCarousell from "./AdCarousell";
import { PopUpAdModal } from "@/components/PopUpAdModal";

const Sponsors = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePopup = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsOpen(true);
  };

  const closePopupOnOutsideClick = (e) => {
    if (e.target.id === "popup-overlay") {
      setIsOpen(false);
      setSelectedImage(null);
    }
  };

  const AD_DIR = "https://storage.googleapis.com/zaitun-dev/ads/"



  const iklan_D=[
    "/assets/iklan/Iklan_D/1.png",
    "/assets/iklan/Iklan_D/3.png",
    "/assets/iklan/Iklan_D/2.png",
    "/assets/iklan/Iklan_D/4.png",
    "/assets/iklan/Iklan_D/5.png",
  ]

  const iklan_E=[
    "/assets/iklan/Iklan_E/1.png",
    "/assets/iklan/Iklan_E/2.png",
    "/assets/iklan/Iklan_E/3.png",
    "/assets/iklan/Iklan_E/4.png",
    "/assets/iklan/Iklan_E/5.png",
    "/assets/iklan/Iklan_E/6.png",
    "/assets/iklan/Iklan_E/7.png",
    "/assets/iklan/Iklan_E/8.png",
    "/assets/iklan/Iklan_E/9.png",
    "/assets/iklan/Iklan_E/10.png",
    "/assets/iklan/Iklan_E/11.png",
    "/assets/iklan/Iklan_E/12.png",
    "/assets/iklan/Iklan_E/13.png",
    "/assets/iklan/Iklan_E/14.png",
  ]

  const iklan_F=[
    "/assets/iklan/Iklan_F/1.png",
    "/assets/iklan/Iklan_F/2.png",
    "/assets/iklan/Iklan_F/3.png",
    "/assets/iklan/Iklan_F/4.png",
    "/assets/iklan/Iklan_F/5.png",
    "/assets/iklan/Iklan_F/6.png",
    "/assets/iklan/Iklan_F/7.png",
    "/assets/iklan/Iklan_F/8.png",
    "/assets/iklan/Iklan_F/9.png",
    "/assets/iklan/Iklan_F/10.png",
    "/assets/iklan/Iklan_F/11.png",
    "/assets/iklan/Iklan_F/12.png",
    // "/assets/iklan/Iklan_F/13.png",
    // "/assets/iklan/Iklan_F/14.png",
  ]


  return (
    <div className="">
      <h2 className="text-center font-heading text-blue-primary mb-2">Terima kasih kepada:</h2>

      {/* Iklan D */}
      <div className="grid grid-cols-3 gap-3 mb-3 max-w-screen-lg mx-auto justify-center">
        {[1,2,3,4,5].map((adNumber) => {
          const image = `${AD_DIR}D${adNumber}.webp`
          return (
          <div key={adNumber} className="relative bg-blue-600/20 w-full aspect-[4/3] rounded-lg flex justify-center items-center cursor-pointer" onClick={() => handlePopup(image)}>
            <Image className="object-cover" fill priority alt="Iklan" src={image} />
          </div>
        )})}
      </div>

      {/* Iklan E */}
      <div className="grid grid-cols-4 gap-3 mb-3">
        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((adNumber) => {
          const image = `${AD_DIR}E${adNumber}.webp`
          return (
          <div key={adNumber} className="relative bg-blue-600/20 w-full aspect-[4/3] rounded-lg flex justify-center items-center cursor-pointer" onClick={() => handlePopup(image)}>
            <Image className="object-cover" fill priority alt="Iklan" src={image} />
          </div>
        )})}
      </div>


      {/* Iklan F */}
      <div className="grid grid-cols-5 gap-3">
        {[1,2,3,4,5,6,7,8,9,10,11,12].map((adNumber) => {
          const image = `${AD_DIR}F${adNumber}.webp`
          return (
          <div key={adNumber} className="relative bg-blue-600/20 w-full aspect-square rounded-lg flex justify-center items-center cursor-pointer" onClick={() => handlePopup(image)}>
            <Image className="object-cover" fill priority alt="Iklan" src={image} />
          </div>
        )})}
      </div>

      {isOpen && selectedImage && (
        <div id="popup-overlay" className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-6 lg:px-0" onClick={closePopupOnOutsideClick}>
          <div className="relative">
            <Image className="w-full h-auto max-h-[80vh] rounded-md" alt="Popup Iklan" src={selectedImage} width={800} height={600} onClick={(e) => e.stopPropagation()} />
            <button className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm hover:bg-red-700" onClick={() => setIsOpen(false)}>X</button>
          </div>
        </div>
      )}
    </div>
  )
}

const AdImage1 = [
  "https://storage.googleapis.com/zaitun-dev/ads/AB1.webp",
  "https://storage.googleapis.com/zaitun-dev/ads/AB2.webp",
]

const AdImage2 = [
  "https://storage.googleapis.com/zaitun-dev/ads/AB3.webp",
  "https://storage.googleapis.com/zaitun-dev/ads/AB4.webp",
]

const AdImage3 = [
  "https://storage.googleapis.com/zaitun-dev/ads/AB5.webp",
  "https://storage.googleapis.com/zaitun-dev/ads/AB6.webp",
]

const ZaitunPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePopup = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsOpen(true);
  };

  const closePopupOnOutsideClick = (e) => {
    if (e.target.id === "popup-overlay") {
      setIsOpen(false);
      setSelectedImage(null);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="h-screen w-[55%] fixed hidden md:flex">
          <div className="w-[16%] min-w-[180px] h-full bg-zinc-800 p-2 hidden lg:block">
            <p className="text-center italic text-white/50">Advertisements</p>
            <AdCarousell ads={AdImage1} onSwiperClicked={handlePopup}/>
            <AdCarousell ads={AdImage2} onSwiperClicked={handlePopup}/>
            <AdCarousell ads={AdImage3} onSwiperClicked={handlePopup}/>
          </div>

          <div className="relative w-full h-full hidden md:block bg-xmas-tertiary/25">
            <Image className="object-cover" fill priority alt="" src="https://storage.googleapis.com/web-samara-storage/info-terbaru/zaitun-cover.jpg" />
          </div>

          <div className="hidden md:flex px-2 py-6 h-full border-r border-xmas-tertiary/20 bg-xmas-neutral flex-col justify-between">
            <div className="flex flex-col gap-2">
              <Link href="/zaitun">
                <div title="Beranda" className="p-2 hover:bg-xmas-tertiary/20 rounded-lg transition-colors">
                  <HiHome className="text-2xl text-xmas-tertiary" />
                </div>
              </Link>
              <Link href="#">
                <div title="Zaitun" className="p-2 hover:bg-xmas-tertiary/20 rounded-lg transition-colors">
                  <FaCompass className="text-2xl text-xmas-tertiary" />
                </div>
              </Link>
            </div>
            <Link href="/">
              <div title="Keluar" className="p-2 hover:bg-xmas-tertiary/20 rounded-lg transition-colors">
                <FiLogOut className="text-2xl text-xmas-tertiary" />
              </div>
            </Link>
          </div>
        </div>

        <div className="block md:flex justify-end w-full bg-xmas-neutral">
          <div className="relative w-full min-h-screen md:min-h-min block md:hidden">
            <div className="absolute size-full">
              <div className="relative w-full h-screen">
                <Image src="https://storage.googleapis.com/web-samara-storage/info-terbaru/zaitun-cover.jpg" fill priority className="object-cover brightness-50" alt="cover" />
              </div>
            </div>
            <div className="absolute flex items-end p-4 h-full">
              <h1 className="text-6xl lg:text-8xl font-ibara font-bold leading-tight text-xmas-neutral">
                Zaitun Edisi Natal 2024
              </h1>
            </div>
          </div>
          <div className="w-full md:w-[45%] py-10 px-4 flex-shrink-0">
            <div className="w-full max-w-max md:max-w-prose">
              <h1 className="hidden md:block text-6xl lg:text-8xl font-ibara font-bold leading-tight text-xmas-primary">
                Zaitun Edisi Natal 2024
              </h1>
              <div className="my-8">
                <ContentSection openModal={handlePopup}/>
              </div>
              <div className="flex flex-row gap-2 justify-center">
                <div className="w-[30%]">
                  <AdCarousell ads={AdImage1} onSwiperClicked={handlePopup}/>
                </div>
                <div className="w-[30%]">
                  <AdCarousell ads={AdImage2} onSwiperClicked={handlePopup}/>
                </div>
                <div className="w-[30%]">
                  <AdCarousell ads={AdImage3} onSwiperClicked={handlePopup}/>
                </div>
              </div>
              {/* <PopUpAdModal img={"https://storage.googleapis.com/zaitun-dev/ads/C1.webp"} /> */}
              <Sponsors />
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
      <div id="popup-overlay" className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-6 lg:px-0" onClick={closePopupOnOutsideClick}>
        <div className="relative">
          <Image className="max-w-full max-h-[90vh] rounded-md" alt="Popup Iklan" src={selectedImage} width={410} height={0} onClick={(e) => e.stopPropagation()} />
          <button className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm hover:bg-red-700" onClick={() => setIsOpen(false)}>X</button>
        </div>
      </div>
      )}
    </div>
  );
};
export default ZaitunPage