"use client"

import { Button } from "@heroui/button"
import Image from "next/image"
import { useRef, useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const DUMMY_NEWS = [
  {
    title: "Zaitun Edisi Paskah 2024",
    description: "Ingin tahu kisah dibalik Tablo Paskah hingga ziarah di Gereja Katedral Osaka? Baca artikel-artikel menarik yang telah terbit di <a target='_blank' href='/zaitun' class='font-bold text-blue-secondary underline'>Zaitun Edisi Paskah 2025.</a>",
    img: "https://storage.googleapis.com/web-samara-storage/info-terbaru/Zaitun%20Ver2%201920x1080_rev2.jpg"
  },
  {
    title: "Ucapan Paskah",
    description: "Panitia Paskah 2025 Wilayah 14 mengucapkan selamat Paskah 2025 dan terima kasih kepada Pastor Paroki, Dewan Paroki, serta semua pihak yang terlibat.",
    img: "https://storage.googleapis.com/web-samara-storage/info-terbaru/Ucapan%20Paskah.png"
  },
]

const UpdatesSection = () => {

  const [currentNews, setCurrentNews] = useState(0)
  const swiperRef = useRef()

  const slideNext = () => {
    swiperRef.current?.swiper.activeIndex != DUMMY_NEWS.length-1
      ? swiperRef.current?.swiper.slideNext() :
      swiperRef.current?.swiper.slideTo(0)
  }
  const slidePrev = () => {
    swiperRef.current?.swiper.activeIndex != 0
      ? swiperRef.current?.swiper.slidePrev() :
      swiperRef.current?.swiper.slideTo(DUMMY_NEWS.length-1)
  }
  const handleSlideChange = () => {
    setCurrentNews(swiperRef.current?.swiper.activeIndex)
  }

  return (
    <div>
      <div className="w-full bg-dark-primary text-white flex flex-col min-h-screen md:min-h-min md:flex-row-reverse shadow-lg">
        <div className="w-full md:w-1/2">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            ref={swiperRef}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
          >
            {
              DUMMY_NEWS.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className="overflow-hidden">
                      <div className="relative h-[30vh] md:h-[50vh] max-h-[720px] w-full hover:scale-110 transition-transform bg-blue-primary/50">
                        <Image
                          src={String(item.img)}
                          alt={String(item.title)}
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 75vw"
                          fill />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
        <div className="flex justify-start md:justify-end w-full md:w-1/2 max-w-[650px]">
          <div className="p-8 h-full text-white flex flex-col justify-between">
            <div className="flex md:hidden gap-4 justify-center lg:justify-end pb-5">
              <Button onPress={slidePrev} disableRipple isIconOnly variant="ghost" radius="full" color="primary" size="sm">{"<"}</Button>
              <Button onPress={slideNext} disableRipple isIconOnly variant="ghost" radius="full" color="primary" size="sm">{">"}</Button>
            </div>
            <div>
              <p className="font-heading text-blue-secondary mb-2 md:mb-4 font-bold tracking-[5px] md:tracking-[10px] text-sm md:text-base">BERITA PAROKI</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold line-clamp-2 mb-2 md:mb-4 leading-normal">{DUMMY_NEWS[currentNews].title}</h1>
              <p className="line-clamp-5 md:line-clamp-5 text-lg md:text-lg" dangerouslySetInnerHTML={{__html:DUMMY_NEWS[currentNews].description}}></p>
            </div>
            <div className="hidden md:flex gap-4 justify-center lg:justify-end pt-5">
              <Button onPress={slidePrev} disableRipple isIconOnly variant="ghost" radius="full" color="primary" size="sm">{"<"}</Button>
              <Button onPress={slideNext} disableRipple isIconOnly variant="ghost" radius="full" color="primary" size="sm">{">"}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdatesSection