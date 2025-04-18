"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const getArticleContent = async (categoryId, callback) => {
  try {
    const res = await fetch(`/api/articles?category=${categoryId}`) 
    const data = await res.json()
    callback(data)
  } catch (err) {
    console.error(err)
  }
}

const CategorySection = ({ categoryId, categoryTitle }) => {
  const [contents, setContents] = useState([])
  useEffect(() => {
    getArticleContent(categoryId, setContents)
  }, [categoryId])
  return (
    <div className="mt-20">
      <h3 className="font-ibara font-medium text-2xl my-4 text-xmas-secondary">{categoryTitle}</h3>
      <div className="flex flex-col gap-12 lg:gap-4">
        {
          contents.length > 0 ?
          contents.map((item, i) => {
            return (
              <div key={i} className="flex flex-col lg:flex-row items-center gap-4">
                <Link href={`/zaitun/${item.slug}`} className="w-full">
                <div className="relative w-full lg:w-56 aspect-[5/4] lg:aspect-[4/5] overflow-hidden rounded-lg">
                  <div className="relative w-full lg:w-56 aspect-[5/4] lg:aspect-[4/5] bg-xmas-tertiary/25 hover:scale-110 ease-in-out duration-500">
                    <Image
                      loading="lazy"
                      src={item.thumb_img}
                      fill
                      alt=""
                      className="object-cover"
                    />
                  </div>
                </div>
                </Link>
                <div>
                  <Link href={`/zaitun/${item.slug}`}>
                    <h3 className="text-3xl font-ibara font-semibold text-xmas-primary hover:text-xmas-tertiary transition-colors">{item.title}</h3>
                  </Link>
                  <p className="text-xmas-dark line-clamp-3 mt-2 text-base lg:text-xl">{item.thumb_text}</p>
                  <div className="mt-2">
                    <p className="text-xs md:text-sm lg:text-base text-xmas-secondary uppercase">{item.writer_name}</p>
                    <p className="text-xs md:text-sm lg:text-base text-xmas-tertiary">{new Date(item.created_at).toLocaleDateString('id-US', {dateStyle: "long"})}</p>
                  </div>
                </div>
              </div>
            )
          })
          :
          [0,1,2].map((i) => {return (
            <div key={i} className="flex gap-4">
              <div className="w-56 aspect-[4/5] flex-shrink-0 bg-xmas-tertiary/25 rounded-lg animate-pulse" />
              <div className="flex w-full flex-col gap-2 justify-center">
                <div className="w-full h-10 bg-xmas-tertiary/25 rounded-lg animate-pulse" />
                <div className="w-2/3 h-5 bg-xmas-tertiary/25 rounded-full animate-pulse" />
                <div className="w-2/3 h-5 bg-xmas-tertiary/25 rounded-full animate-pulse" />
              </div>
            </div>
          )})
        }
      </div>
    </div>
  )
}

export default CategorySection