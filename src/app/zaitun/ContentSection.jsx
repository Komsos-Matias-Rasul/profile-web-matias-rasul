import TopCarousell from "./TopCarousell"
import CategorySection from "./CategorySection"
import AdCarousell from "./AdCarousell"
import UcapanSelamatCarousell from "./UcapanSelamatCarousell"

const AdImage1 = [
  "https://storage.googleapis.com/zaitun-dev/ads/AB1.webp",
  "https://storage.googleapis.com/zaitun-dev/ads/AB2.webp",
  "https://storage.googleapis.com/zaitun-dev/ads/AB3.webp",
]

const AdImage2 = [
  "https://storage.googleapis.com/zaitun-dev/ads/AB4.webp",
  "https://storage.googleapis.com/zaitun-dev/ads/AB5.webp",
  "https://storage.googleapis.com/zaitun-dev/ads/AB6.webp",
]

const ContentSection = ({openModal}) => {
  return (
    <>
      <h1 className="text-[2rem] font-ibara font-medium text-xmas-secondary">Artikel Teratas</h1>
      <div className="mt-4 mb-20">
        <TopCarousell />
      </div>
      <div className="flex gap-4 pr-4 lg:hidden">
        <div className="w-1/2">
          <AdCarousell ads={AdImage1} onSwiperClicked={openModal}/>
        </div>
        <div className="w-1/2">
          <AdCarousell ads={AdImage2} onSwiperClicked={openModal}/>
        </div>
      </div>
      <CategorySection categoryId={5} categoryTitle="Sambutan"/>
      <UcapanSelamatCarousell />
      <CategorySection categoryId={2} categoryTitle="Liputan Utama"/>
      <div className="flex gap-4 pr-4 lg:hidden mt-12">
        <div className="w-1/2">
          <AdCarousell ads={AdImage1} onSwiperClicked={openModal}/>
        </div>
        <div className="w-1/2">
          <AdCarousell ads={AdImage2} onSwiperClicked={openModal}/>
        </div>
      </div>
      <CategorySection categoryId={1} categoryTitle="Liputan Umum"/>
      <CategorySection categoryId={3} categoryTitle="Katekese"/>
      <div className="flex gap-4 pr-4 lg:hidden mt-12">
        <div className="w-1/2">
          <AdCarousell ads={AdImage1} onSwiperClicked={openModal}/>
        </div>
        <div className="w-1/2">
          <AdCarousell ads={AdImage2} onSwiperClicked={openModal}/>
        </div>
      </div>
      <CategorySection categoryId={4} categoryTitle="Tradisi dan Sejarah"/>
      <CategorySection categoryId={6} categoryTitle="Serba Serbi"/>
    </>
  )
}

export default ContentSection