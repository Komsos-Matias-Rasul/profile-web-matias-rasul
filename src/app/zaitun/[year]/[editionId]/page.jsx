import Image from "next/image";
import Link from "next/link";
import ContentSection from "./ContentSection";

import { HiHome } from "react-icons/hi";
import { FaCompass } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { AdCarousell } from "@/components/AdCarousell";
import { PopUpAdModal } from "@/components/PopUpAdModal";
import { AdCarouselConstructor } from "@/helpers/ads";
import LogoSection from "@/components/RunningLogo";

const Sponsors = () => {
  const AD_DIR = process.env.NEXT_PUBLIC_BACKEND_URL + "/api/ads/2025/"

  return (
    <>
      <h2 className="text-center font-heading text-xmas-secondary mb-8">Ucapan terima kasih kepada:</h2>

      {/* Iklan D */}
      <div className="grid grid-cols-3 gap-8 mb-8 mx-auto justify-center w-4/5">
        {
          [1,2,3,4,5,6,7,8,9,10].map((adNumber) => {
            const image = `${AD_DIR}D${adNumber}.webp`
          return (
            <PopUpAdModal key={adNumber} img={image} width={80}/>
          )})
        }
      </div>
      <h2 className="text-center font-heading text-xmas-secondary mb-8">Terima kasih untuk dukungan:</h2>
      <LogoSection />
    </>
  )
}

const adsA = [
  "/api/ads/2025/A1.webp",
  "/api/ads/2025/A2.webp",
  "/api/ads/2025/A3.webp",
  "/api/ads/2025/A4.webp",
  "/api/ads/2025/A5.webp",
]

const adsC = [
  "/api/ads/2025/C1.webp",
  "/api/ads/2025/C2.webp",
  "/api/ads/2025/C3.webp",
  "/api/ads/2025/C4.webp",
  "/api/ads/2025/C5.webp",
  "/api/ads/2025/C6.webp",
  "/api/ads/2025/C7.webp",
]

const ZaitunPage = async () => {
  let editionData
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/zaitun/current`)
    if (!res.ok) {
      throw new Error("failed to retrieve edition data")
    }
    const jsonData = await res.json()
    editionData = jsonData.data
  } catch (err) {
    console.error(err)
    // change dis to error page pls >:(
    return <div>Error</div>
  }
  const adACarousels = AdCarouselConstructor(adsA, 3)
  const adCCarousels = AdCarouselConstructor(adsC, 2)

  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="h-screen w-[55%] fixed hidden md:flex">
          <div className="w-[16%] min-w-[180px] h-full bg-zinc-800 p-2 hidden lg:block">
            <p className="text-center italic text-white/50">Advertisements</p>
            {
              adACarousels?.map((_, i) => <AdCarousell key={i} ads={adACarousels[i]} />)
            }
          </div>

          <div className="relative w-full h-full hidden md:block bg-xmas-tertiary/25">
            <Image className="object-cover" fill priority alt="" src={process.env.NEXT_PUBLIC_BACKEND_URL + editionData.cover_img} />
          </div>

          <div className="hidden md:flex px-2 py-6 h-full border-r border-xmas-tertiary/20 bg-xmas-neutral flex-col justify-between">
            <div className="flex flex-col gap-2">
              <Link href="/zaitun">
                <div title="Beranda" className="p-2 hover:bg-xmas-tertiary/20 rounded-lg transition-colors">
                  <HiHome className="text-2xl text-xmas-tertiary" />
                </div>
              </Link>
              <Link href="#">
                <div title="Zaitun" className="p-2 hover:bg-xmas-tertiary/20 rounded-lg transition-colors">
                  <FaCompass className="text-2xl text-xmas-tertiary" />
                </div>
              </Link>
            </div>
            <Link href="/">
              <div title="Keluar" className="p-2 hover:bg-xmas-tertiary/20 rounded-lg transition-colors">
                <FiLogOut className="text-2xl text-xmas-tertiary" />
              </div>
            </Link>
          </div>
        </div>

        <div className="block md:flex justify-end w-full bg-xmas-neutral">
          <div className="relative w-full min-h-screen md:min-h-min block md:hidden">
            <div className="absolute size-full">
              <div className="relative w-full h-screen">
                <Image src={process.env.NEXT_PUBLIC_BACKEND_URL + editionData.cover_img} fill priority className="object-cover brightness-50" alt="cover" />
              </div>
            </div>
            <div className="absolute flex items-end p-4 h-full">
              <h1 className="text-6xl lg:text-8xl font-ibara font-bold leading-tight text-xmas-neutral">
                {editionData.title}
              </h1>
            </div>
          </div>
          <div className="w-full md:w-[45%] py-10 px-4 flex-shrink-0">
            <div className="w-full max-w-max md:max-w-prose">
              <div className="flex md:hidden flex-row justify-center">
                <div className="w-1/2">
                  <AdCarousell ads={adACarousels[0]}/>
                </div>
                <div className="w-1/2">
                  <AdCarousell ads={adACarousels[2]}/>
                </div>
              </div>
              <h1 className="hidden md:block text-6xl lg:text-8xl font-ibara font-bold leading-tight text-xmas-primary">
                {editionData.title}
              </h1>
              <div className="my-8">
                <ContentSection categories={editionData.categories} editionId={editionData.id}/>
              </div>
              <div className="flex flex-row justify-center w-[85%] m-auto mb-20">
                {
                  adCCarousels?.map((_, i) => (
                    <div key={i} className="w-1/2">
                      <AdCarousell ads={adCCarousels[i]}/>
                    </div>
                  ))
                }
              </div>
              <Sponsors />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ZaitunPage