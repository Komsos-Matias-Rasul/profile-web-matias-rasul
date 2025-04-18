"use client"

import Image from "next/image"
import { useState } from "react"

export const PopUpAdModal = ({img, sizing, adSizing}) => {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const onOutsideClick = () => setIsModalOpen(false)

  return (
    <>
      <div className="relative w-36 aspect-[5/3]">
        <Image src={img} fill className="object-cover" alt="Iklan" onClick={() => setIsModalOpen(true)} />
      </div>
      {isModalOpen && (
      <div id="popup-overlay" className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-6 lg:px-0" onClick={onOutsideClick}>
        <div className="relative">
          <Image
            className="max-w-max h-[90vh] rounded-lg"
            alt="Popup Iklan"
            src={img}
            width={1000}
            height={50}
            onClick={(e) => e.stopPropagation()} />
          <button className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm hover:bg-red-700" onClick={() => setIsOpen(false)}>X</button>
        </div>
      </div>
      )}
    </>
  )
}