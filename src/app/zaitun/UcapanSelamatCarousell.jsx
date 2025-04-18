import Image from "next/image"
import { SwiperSlide, Swiper } from "swiper/react"
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

const GREETINGS = [
  "https://storage.googleapis.com/zaitun-dev/ads/romo1.webp",
  "https://storage.googleapis.com/zaitun-dev/ads/romo2.webp",
  "https://storage.googleapis.com/zaitun-dev/ads/romo3.webp",
  "https://storage.googleapis.com/zaitun-dev/ads/x2.webp",
  "https://storage.googleapis.com/zaitun-dev/ads/x3.webp",
  "https://storage.googleapis.com/zaitun-dev/ads/x4.webp",
]

const UcapanSelamatCarousell = () => {
  return(
    <div className="w-full relative z-0 mt-10">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        slidesPerView={1}
      >
        {
          GREETINGS.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="relative bg-xmas-tertiary/20 w-full aspect-video">
                  <Image
                    src={item}
                    alt=""
                    fill
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default UcapanSelamatCarousell