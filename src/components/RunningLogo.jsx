/**
 * Running logo reference: https://www.freecodecamp.org/news/author/Cejay101/
 * Article Source: https://www.freecodecamp.org/news/build-an-image-carousel-with-react-and-framer-motion/
 */

"use client"

import Image from "next/image"
import { motion } from 'framer-motion'

const SPONSORS_LOGO_1 = [
  "/ads/2025/logo1.webp",
  "/ads/2025/logo2.webp",
  "/ads/2025/logo3.webp",
  "/ads/2025/logo4.webp",
  "/ads/2025/logo5.webp",
]
const SPONSORS_LOGO_2 = [
  "/ads/2025/logo6.webp",
  "/ads/2025/logo7.webp",
  "/ads/2025/logo8.webp",
  "/ads/2025/logo9.webp",
  "/ads/2025/logo10.webp",
  "/ads/2025/logo11.webp",
]
const SPONSORS_LOGO_3 = [
  "/ads/2025/logo12.webp",
  "/ads/2025/logo13.webp",
  "/ads/2025/logo14.webp",
  "/ads/2025/logo15.webp",
  "/ads/2025/logo16.webp",
  "/ads/2025/logo17.webp",
]


const RunningLogo = ({sponsorsLogo, x, duration=5}) => {
  const sponsorsLogo_dup = [...sponsorsLogo, ...sponsorsLogo, ...sponsorsLogo]
  return (
    <>
      <div className="w-full relative py-2 overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-xmas-neutral before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-xmas-neutral after:to-transparent after:content-['']">
        <motion.div
          animate={{
            x: x,
            transition: {
              ease: 'linear',
              duration: duration,
              repeat: Infinity
            }
          }}
          className="flex"
        >
          {
            sponsorsLogo_dup.map((logo, index) => (
              <div key={index} className="flex-shrink-0" style={{ width: `${100 /sponsorsLogo.length}%`}}>
                <div className="mx-2">
                    <Image
                      key={index}
                      src={process.env.NEXT_PUBLIC_GCLOUD_PREFIX + logo}
                      alt=""
                      width={50}
                      height={0}
                      className="shadow opacity-50 select-none"
                    />
                  </div>
              </div>
            ))
          }
        </motion.div>
      </div>
    </>
  )
}

const LogoSection = () => (
  <div className="flex flex-col">
    <RunningLogo sponsorsLogo={SPONSORS_LOGO_1} x={['0%', '-100%']} duration={8}/>
    <RunningLogo sponsorsLogo={SPONSORS_LOGO_2} x={['-25%', '-125%']} duration={6}/>
    <RunningLogo sponsorsLogo={SPONSORS_LOGO_3} x={['-50%', '-150%']} duration={7}/>
  </div>
)

export default LogoSection