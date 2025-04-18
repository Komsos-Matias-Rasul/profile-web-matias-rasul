import Image from "next/image";
import Link from "next/link";
import { FaCompass } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { HiHome } from "react-icons/hi";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import AdCarousell from "../AdCarousell";
import { getDB } from "@/lib/db";

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
                  src={block.data.file.url}
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
              <ul key={block.id} className={"pl-4 list-outside " + (block.data.style === "unordered" ? " list-disc" : " list-decimal")}>
                  {
                    block.data.items.map((listItem, i) => <li key={i} className="text-xmas-dark text-base lg:text-lg">{listItem.content}</li>)
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

const AdImage1 = [
  "https://storage.googleapis.com/zaitun-dev/ads/AB1.webp",
  "https://storage.googleapis.com/zaitun-dev/ads/AB2.webp",
]

const AdImage2 = [
  "https://storage.googleapis.com/zaitun-dev/ads/AB3.webp",
  "https://storage.googleapis.com/zaitun-dev/ads/AB4.webp",
]

const AdImage3 = [
  "https://storage.googleapis.com/zaitun-dev/ads/AB5.webp",
  "https://storage.googleapis.com/zaitun-dev/ads/AB6.webp",
]

const ArticlePage = async ({params}) => {
  const param = await params
  const slug = param.title
  let content
  const conn = getDB()
  try {
    const article = await conn.query("SELECT * FROM articles WHERE slug = $1", [slug])
    if (article.rows.length < 1) throw new Error("Article not found")
    content = article.rows[0]
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
            <AdCarousell ads={AdImage1} sizing="(max-width: 768px) 0vw, 20vw"/>
            <AdCarousell ads={AdImage2} sizing="(max-width: 768px) 0vw, 20vw"/>
            <AdCarousell ads={AdImage3} sizing="(max-width: 768px) 0vw, 20vw"/>
          </div>
          <div className="relative w-full h-full bg-xmas-tertiary/25">
            <Image
              className="object-cover brightness-50"
              fill
              priority
              alt="headline image"
              sizes="(max-width: 768px) 0vw, (max-width: 1200px) 50vw, 33vw"
              src={content.headline_img} />
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
                <Image sizes="(max-width: 768px) 100vw, 0vw" src={content.headline_img} fill priority className="object-cover brightness-50" alt="cover" />
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
              <div className="flex lg:hidden gap-2 pr-4">
                <div className="w-1/3">
                  <AdCarousell ads={AdImage1} sizing="(max-width: 1024px) 30vw, 0vw"/>
                </div>
                <div className="w-1/3">
                  <AdCarousell ads={AdImage2} sizing="(max-width: 1024px) 30vw, 0vw"/>
                </div>
                <div className="w-1/3">
                  <AdCarousell ads={AdImage3} sizing="(max-width: 1024px) 30vw, 0vw"/>
                </div>
              </div>
              <div className="flex gap-2 items-center text-sm mb-8 w-full md:w-2/3 lg:w-1/2">
                <Link href="/zaitun" className="text-xmas-tertiary">Beranda</Link>
                <MdChevronRight className="text-neutral-600 flex-shrink-0"/>
                <p className="text-xmas-tertiary font-semibold truncate">{content.title}</p>
              </div>
              <div className="mb-8">
                <div className="pb-3 border-b border-xmas-secondary/50 flex flex-col gap-4">
                  {/* <h2 className="font-ibara text-xl text-xmas-tertiary font-semibold">{content.category_id}</h2> */}
                  <h1 className="text-5xl lg:text-7xl font-ibara font-semibold text-xmas-primary leading-none hidden md:block">{content.title}</h1>
                  <div className="flex items-center gap-2">
                    <div>
                      <p className="text-xs text-xmas-secondary font-semibold font-heading uppercase">{content.writer_name}</p>
                      <p className="text-xs text-xmas-tertiary font-heading">{new Date(content.created_at).toLocaleDateString("id-US", {dateStyle:"long"})}</p>
                    </div>
                  </div>
                </div>
              </div>
              <Contents articleContent={content.content_json} />
              {/* <div className="flex justify-between">
                <div className="flex items-center gap-2 hover:text-blue-secondary cursor-pointer transition-colors">
                  <MdChevronLeft />
                  <p>Artikel Sebelumnya</p>
                </div>
                <div className="flex items-center gap-2 hover:text-blue-secondary cursor-pointer transition-colors">
                  <p>Artikel Selanjutnya</p>
                  <MdChevronRight />
                </div>
              </div> */}
              <div className="relative w-full aspect-[1080/224] bg-slate-200 mt-8 flex justify-center items-center">
                <Image src="https://storage.googleapis.com/zaitun-dev/ads/C1.webp"
                  fill
                  className="object-cover"
                  alt="ad"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlePage