'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { Autoplay, EffectFade } from 'swiper/modules'
import { PopUpAdModal } from './PopUpAdModal';

export const AdCarousell = ({ads}) => {
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
            <SwiperSlide key={i}>
              <div className="rounded overflow-hidden m-2">
                <PopUpAdModal img={ad} width={100}/>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}