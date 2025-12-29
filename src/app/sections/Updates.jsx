"use client"

import { Button } from "@heroui/button"
import { useRef, useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Link from "next/link"
import useSWR from "swr"

const getBeritaHandler = async (endpoint) => {
  const res = await fetch(endpoint)
  const jsonData = await res.json()
  const beritaData = jsonData.data
  return beritaData
}

const UpdatesSection = () => {
  const {data, error, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/berita`, getBeritaHandler)

  const [currentNews, setCurrentNews] = useState(0)
  const swiperRef = useRef()

  if (error) return "An error has occurred.";
  if (isLoading) return (
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
          >
            <SwiperSlide key={0}>
              <div className="overflow-hidden">
                <div className="relative h-[30vh] md:h-[55vh] max-h-[720px] w-full hover:scale-110 transition-transform bg-blue-primary/50">
                  <img
                    src={process.env.NEXT_PUBLIC_GCLOUD_PREFIX + "/static/placeholder.jpg"}
                    alt="placeholder"
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 75vw"
                    fill />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-start md:justify-end w-full md:w-1/2 max-w-[650px]">
          <div className="p-8 h-full text-white flex flex-col justify-between w-full">
            <div>
              <h1 className="font-heading text-blue-secondary mb-2 md:mb-4 font-bold tracking-[5px] md:tracking-[10px] text-sm md:text-base">BERITA PAROKI</h1>
              <p className="font-heading text-4xl md:text-5xl font-bold line-clamp-2 mb-2 md:mb-4 leading-normal hover:underline">Loading...</p>
              <p className="line-clamp-5 md:line-clamp-5 text-lg md:text-lg mb-8">Loading...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const slideNext = () => {
    swiperRef.current?.swiper.activeIndex != data.length-1
      ? swiperRef.current?.swiper.slideNext() :
      swiperRef.current?.swiper.slideTo(0)
  }
  const slidePrev = () => {
    swiperRef.current?.swiper.activeIndex != 0
      ? swiperRef.current?.swiper.slidePrev() :
      swiperRef.current?.swiper.slideTo(data.length-1)
  }
  const handleSlideChange = () => {
    setCurrentNews(swiperRef.current?.swiper.activeIndex)
  }

  return data.length > 0 && (
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
              data.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className="overflow-hidden">
                      <div className="relative h-[30vh] md:h-[55vh] max-h-[720px] w-full hover:scale-110 transition-transform bg-blue-primary/50">
                        <img
                          src={process.env.NEXT_PUBLIC_GCLOUD_PREFIX + String(item.thumbImg)}
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
              <h1 className="font-heading text-blue-secondary mb-2 md:mb-4 font-bold tracking-[5px] md:tracking-[10px] text-sm md:text-base">BERITA PAROKI</h1>
              <Link href={`/berita/${data[currentNews]?.id}`} className="font-heading text-4xl md:text-5xl font-bold line-clamp-2 mb-2 md:mb-4 leading-normal hover:underline">{data[currentNews]?.title}</Link>
              <p className="line-clamp-5 md:line-clamp-5 text-lg md:text-lg mb-8">{data[currentNews]?.descriptions}</p>
              <Link href={`/berita/${data[currentNews]?.id}`} className="bg-blue-secondary p-2 rounded-lg">Selengkapnya</Link>
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