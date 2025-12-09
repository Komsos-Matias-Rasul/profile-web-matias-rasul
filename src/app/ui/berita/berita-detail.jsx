"use client";
import { useState } from "react";
import Image from "next/image"

export const BeritaImg = ({ img, alt }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handlePopup = () => {
        setIsOpen(!isOpen);
    };

    const closePopupOnOutsideClick = (e) => {
        if (e.target.id === "popup-overlay") {
            setIsOpen(false);
        }
    };

    return (
        <>
            <div
              className="relative shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              onClick={handlePopup}
          >
              <Image
                  className="w-full h-56 object-cover group-hover:brightness-75 transition-all duration-300"
                  alt={alt}
                  src={process.env.NEXT_PUBLIC_GCLOUD_PREFIX + img}
                  width={500}
                  height={200}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-bold text-lg">Ketuk untuk memperbesar</p>
              </div>
          </div>

          {isOpen && (
              <div
                  id="popup-overlay"
                  className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                  onClick={closePopupOnOutsideClick}
              >
                  <div className="relative">
                      <img
                          className="max-w-full max-h-[90vh] rounded-md"
                          alt={alt}
                          src={process.env.NEXT_PUBLIC_GCLOUD_PREFIX + img}
                          onClick={(e) => e.stopPropagation()}
                      />
                      <button
                          className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm hover:bg-red-700"
                          onClick={handlePopup}
                      >
                          X
                      </button>
                  </div>
              </div>
          )}
        </>
    );
};
