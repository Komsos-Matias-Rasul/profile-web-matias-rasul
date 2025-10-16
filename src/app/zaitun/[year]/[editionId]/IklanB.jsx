"use client"

import { SwiperSlide, Swiper } from "swiper/react"
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import { PopUpAdModal } from "@/components/PopUpAdModal"

const ads = [
  "/ads/B1.webp",
  "/ads/B2.webp",
]

const IklanB = () => {
  return(
    <div className="w-2/3 relative z-0">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        slidesPerView={1}
      >
        {
          ads.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="bg-xmas-tertiary/20 aspect-video rounded overflow-hidden">
                  <PopUpAdModal img={process.env.NEXT_PUBLIC_GCLOUD_PREFIX + item} width={100}/>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default IklanB