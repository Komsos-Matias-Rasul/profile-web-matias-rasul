"use client"

import Image from "next/image"
import { Modal,  ModalContent, useDisclosure } from "@heroui/modal";

export const PopUpAdModal = ({img, width=0, height=0}) => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure()


  return (
    <>
      {
        !img ? <div className="w-full aspect-square bg-xmas-tertiary" /> : <Image src={img} width={width} height={height} className="min-w-full aspect-auto" alt="Iklan" onClick={onOpen} />
      }
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="!max-w-max" placement="center">
        <ModalContent>
          {
            (onClose) => (
            <Image
              className="max-h-[80vh] w-max max-w-full lg:max-w-[90vw] rounded-lg"
              alt="Popup Iklan"
              src={img}
              width={1000}
              height={0}
              onClick={(e) => e.stopPropagation()} />
          )}
        </ModalContent>
      </Modal>
    </>
  )
}