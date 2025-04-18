'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { Autoplay, EffectFade } from 'swiper/modules'
import Image from 'next/image';

const AdCarousell = ({ads, onSwiperClicked, sizing}) => {
  return (
    <Swiper
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      effect='fade'
      modules={[Autoplay, EffectFade]}
      slidesPerView={1}
    >
      {
        ads.map((ad, i) => {
          return (
            <SwiperSlide key={i} onClick={() => onSwiperClicked(ad)}>
              <div className="relative w-full aspect-[4/5] bg-zinc-700 rounded flex overflow-hidden mb-2">
                <Image className="object-cover" fill priority alt="" src={ad} sizes={sizing} />
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default AdCarousell