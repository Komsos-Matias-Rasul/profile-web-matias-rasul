"use client"

import { SwiperSlide, Swiper } from "swiper/react"
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import { PopUpAdModal } from "@/components/PopUpAdModal"

const ads = [
  "/ads/2025/natal/B1.webp",
  "/ads/2025/natal/B2.webp",
  "/ads/2025/natal/B3.webp",
  "/ads/2025/natal/B4.webp",
  "/ads/2025/natal/sponsor1.webp",
  "/ads/2025/natal/sponsor2.webp",
  "/ads/2025/natal/sponsor3.webp",
  "/ads/2025/natal/sponsor4.webp",
  "/ads/2025/natal/sponsor5.webp",
  "/ads/2025/natal/sponsor6.webp",
  "/ads/2025/natal/sponsor7.webp",
  "/ads/2025/natal/sponsor8.webp",
  "/ads/2025/natal/sponsor9.webp",
  "/ads/2025/natal/sponsor10.webp",
  "/ads/2025/natal/sponsor11.webp",
  "/ads/2025/natal/sponsor12.webp",
  "/ads/2025/natal/sponsor13.webp",
  "/ads/2025/natal/sponsor14.webp",
  "/ads/2025/natal/sponsor15.webp",
  "/ads/2025/natal/sponsor16.webp",
  "/ads/2025/natal/sponsor17.webp",
  "/ads/2025/natal/sponsor18.webp",
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