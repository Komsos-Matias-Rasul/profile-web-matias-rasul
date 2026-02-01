import Image from "next/image";
import Link from "next/link";
import { FaCompass } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { HiHome } from "react-icons/hi";
import { MdChevronRight } from "react-icons/md";
import { AdCarousell } from "@/components/AdCarousell";
import { AdCarouselConstructor } from "@/helpers/ads";

const Contents = ({articleContent}) => {
  const jsonData = JSON.parse(articleContent)
  return (
    <div className="mb-20">
      {
        jsonData.blocks.map((block) => {
          if (block.type === "quote") {
            return (
              <div key={block.id} className="border-b-2 border-xmas-tertiary/25 mb-4 pb-4">
                <div className="text-xmas-dark/75 text-lg lg:text-xl pl-8 font-serif italic" dangerouslySetInnerHTML={{__html: block.data.text}}></div>
              </div>
            ) 
          }
          if (block.type === 'paragraph') {
            return <div key={block.id} className="mb-4 text-xmas-dark text-base lg:text-lg" dangerouslySetInnerHTML={{__html: block.data.text}}></div>
          }
          if (block.type === 'image') {
            return (
              <div key={block.id} className="my-8">
                <Image
                  src={process.env.GCLOUD_PREFIX + block.data.file.url}
                  alt={block.data.caption}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  height={0}
                  width={1080}
                  className="w-full rounded-xl" />
                <p className="text-sm italic ">{block.data.caption}</p>
              </div>
            )
          }
          if (block.type === "list") {
            return (
              <ul key={block.id} className={"pl-8 list-outside mb-4 " + (block.data.style === "unordered" ? " list-disc" : " list-decimal")}>
                  {
                    block.data.items.map((listItem, i) => <li key={i} className="text-xmas-dark text-base lg:text-lg" dangerouslySetInnerHTML={{__html: listItem.content}} />)
                  }
              </ul>
            )
          }
          if (block.type === "header") {
            return <h3 key={block.id} className="text-xmas-dark text-lg lg:text-xl font-bold">{block.data.text}</h3>
          }
        })
      }
    </div>
  )
}

const adsF = [
  "/ads/2025/natal/F1.webp"
]

const ArticlePage = async ({params}) => {
  const param = await params
  const {year, editionId, slug} = param
  let content, adCarousels, adFCarousels
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/articles/${year}/${editionId}/${slug}`)
    if (!res.ok) {
      throw new Error("failed to retrieve article content")
    }
    const articleData = await res.json()
    content = articleData.data
    const adsJson = JSON.parse(articleData.data.ads)
    if (adsJson?.side) {
      adCarousels = AdCarouselConstructor(adsJson.side, 3)
    }
    if (adsJson?.below) {
      const sliderAmount = adsJson?.below.length >= 3 ? 3 : adsJson?.below.length
      adFCarousels = AdCarouselConstructor(adsF, sliderAmount)
    }
  }
  catch (err) {
    console.error(err)
    return (
      <div>Error</div>
    )
  }
  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="h-screen w-[55%] fixed hidden md:flex">
          <div className="w-[16%] min-w-[180px] hidden lg:block flex-shrink-0 h-full bg-zinc-800 p-2">
            <p className="text-center italic text-white/50">Advertisements</p>
            {
              adCarousels?.map((_, i) => <AdCarousell key={i} ads={adCarousels[i]}/>)
            }
          </div>
          <div className="relative w-full h-full bg-xmas-tertiary/25">
            <Image
              className="object-cover brightness-50"
              fill
              priority
              alt="headline image"
              sizes="(max-width: 768px) 0vw, (max-width: 1200px) 50vw, 33vw"
              src={process.env.GCLOUD_PREFIX + content.coverImg} />
          </div>
          <div className="px-2 py-6 h-full border-r border-xmas-tertiary/20 bg-xmas-neutral flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <Link href="/zaitun">
                <div title="Beranda" className="p-2 hover:bg-xmas-tertiary/20 rounded-lg transition-colors">
                  <HiHome className="text-2xl text-xmas-tertiary"/>
                </div>
              </Link>
              <Link href="#">
                <div title="Zaitun" className="p-2 hover:bg-xmas-tertiary/20 rounded-lg transition-colors">
                  <FaCompass className="text-2xl text-xmas-tertiary"/>
                </div>
              </Link>
            </div>
            <Link href="/">
              <div title="Keluar" className="p-2 hover:bg-xmas-tertiary/20 rounded-lg transition-colors">
                <FiLogOut className="text-2xl text-xmas-tertiary"/>
              </div>
            </Link>
          </div>
        </div>
        <div className="block md:flex justify-end w-full bg-xmas-neutral">
          <div className="relative w-full min-h-screen md:min-h-min block md:hidden">
            <div className="absolute size-full">
              <div className="relative w-full h-screen">
                <Image
                  sizes="(max-width: 768px) 100vw, 0vw"
                  src={process.env.GCLOUD_PREFIX + content.coverImg}
                  fill
                  priority
                  className="object-cover brightness-50"
                  alt="cover" />
              </div>
            </div>
            <div className="absolute flex items-end p-4 h-full">
              <h1 className="text-6xl font-ibara font-bold leading-tight text-xmas-neutral">
                {content.title}
              </h1>
            </div>
          </div>
          <div className="w-full md:w-[45%] py-10 px-4 flex-shrink-0">
            <div className="w-full max-w-max md:max-w-prose">
              {
                adCarousels ?
                <div className="flex lg:hidden justify-center mx-auto mb-20">
                  <div className="w-1/2">
                    <AdCarousell ads={adCarousels[0]}/>
                  </div>
                  <div className="w-1/2">
                    <AdCarousell ads={adCarousels[2]}/>
                  </div>
                </div>
                : null
              }
              <div className="flex gap-2 items-center text-sm mb-8 w-full md:w-2/3 lg:w-1/2">
                <Link href="/zaitun" className="text-xmas-tertiary">Beranda</Link>
                <MdChevronRight className="text-neutral-600 flex-shrink-0"/>
                <p className="text-xmas-tertiary font-semibold truncate">{content.title}</p>
              </div>
              <div className="mb-8">
                <div className="pb-3 border-b border-xmas-secondary/50 flex flex-col gap-4">
                  <h1 className="text-5xl lg:text-7xl font-ibara font-semibold text-xmas-primary leading-none hidden md:block">{content.title}</h1>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="text-xs text-xmas-secondary font-semibold font-heading uppercase">{content.writerName}</p>
                      <p className="text-xs text-xmas-tertiary font-heading">{new Date(content.publishedAt).toLocaleDateString("id-US", {dateStyle:"long"})}</p>
                    </div>
                  </div>
                </div>
              </div>
              <Contents articleContent={content.contents} />
              <div className="flex flex-row justify-center w-[100%] m-auto mb-20">
                {
                  adFCarousels?.map((_, i) => (
                    <div key={i} className="w-1/2">
                      <AdCarousell ads={adFCarousels[i]}/>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlePage