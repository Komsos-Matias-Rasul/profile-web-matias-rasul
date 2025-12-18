"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";

export default function FotoTerbaruSection({ params }) {
  const [galeri, setGaleri] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    const fetchGaleri = async () => {
      const response = await fetch("/api/galeri");
      const data = await response.json();
      setGaleri(data);
    };
    fetchGaleri();
  }, []);

  if (!galeri.length) return <div className="text-center text-gray-500 py-8">Tidak ada galeri.</div>;
  const allImages = galeri.flatMap((item) => item.images || []);

  const breakpointColumns = {
    default: 4,
    1100: 3,
    768: 2,
    480: 2,
  };


  const handlePopup = (index) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) =>
      prev + 1 >= allImages.length ? 0 : prev + 1
    );
  };

  const handlePrevious = () => {
    setSelectedImageIndex((prev) =>
      prev - 1 < 0 ? allImages.length - 1 : prev - 1
    );
  };

  const closePopupOnOutsideClick = (e) => {
    if (e.target.id === "popup-overlay") {
      setIsOpen(false);
      setSelectedImageIndex(null);
    }
  };

  const selectedImage = selectedImageIndex !== null ? allImages[selectedImageIndex] : null;

  

  return (
    <div className="w-full flex justify-center ">
      <div className="w-[95%] max-w-[1300px]">

        <div className="flex flex-col items-center mb-16">
          <h1 className="font-heading text-[2rem] text-center min-w-max text-blue-primary"><b>Galeri</b></h1>
          <div className="w-8 h-1.5 bg-blue-primary" />
        </div>
        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {allImages.map((image, index) => (
            <div key={image.id || index} className="mb-4">
              <Image
                src={image.imageUrl}
                alt={image.alt || "Galeri Image"}
                width={400}
                height={0}
                className="w-full h-auto rounded-lg shadow-lg object-cover cursor-pointer hover:brightness-75 transition-all"
                onClick={() => handlePopup(index)}
                placeholder="blur"
                blurDataURL="/placeholder.jpg"
              />
            </div>
          ))}
        </Masonry>
      </div>


      {isOpen && selectedImage && (
        <div
          id="popup-overlay"
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4"
          onClick={closePopupOnOutsideClick}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={selectedImage.imageUrl}
              alt={selectedImage.alt || "Preview"}
              width={800}
              height={0}
              className="max-h-[90vh] w-auto rounded-md"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700"
              onClick={() => {
                setIsOpen(false);
                setSelectedImageIndex(null);
              }}
            >
              ✕
            </button>

            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-4 py-3 hover:bg-opacity-70 rounded-r-lg"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
            >
              ←
            </button>

            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 text-white px-4 py-3 hover:bg-opacity-70 rounded-l-lg"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              →
            </button>
          </div>
        </div>
      )}

    </div>

  )
}

